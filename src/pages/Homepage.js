import React, { useContext, useState } from 'react';
import Card from '../components/Card';
import Header from '../components/Header';
import { authContext } from '../services/Context';

function Homepage() {
    window.scrollTo(0, 0);

    const { viewCars } = useContext(authContext);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const [currentPage, setCurrentPage] = useState(1);
    const carsPerPage = 10;

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const toggleSortOrder = () => {
        setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
        setCurrentPage(1); // Reset to first page on sort change
    };

    const filteredCars = viewCars
        ?.filter(car => car.title.toLowerCase().includes(searchQuery.toLowerCase()))
        ?.sort((a, b) => sortOrder === 'asc' ? a.rentamount - b.rentamount : b.rentamount - a.rentamount);

    // Pagination logic
    const indexOfLastCar = currentPage * carsPerPage;
    const indexOfFirstCar = indexOfLastCar - carsPerPage;
    const currentCars = filteredCars?.slice(indexOfFirstCar, indexOfLastCar);

    const totalPages = Math.ceil((filteredCars?.length || 0) / carsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className='min-vh-100 mt-5'>
            <Header />
            <div className='d-flex justify-content-center align-items-center flex-column pt-5'>
                <input
                    type='text'
                    placeholder='Search cars...'
                    value={searchQuery}
                    onChange={handleSearch}
                    className='form-control w-50 mb-4'
                />
                <button
                    type='button'
                    className='btn btn-outline-dark mb-4'
                    onClick={toggleSortOrder}
                >
                    Sort by Price: {sortOrder === 'asc' ? 'High' : 'Low'}
                </button>
                <div className='d-flex justify-content-center align-items-center flex-wrap gap-3'>
                    {currentCars && currentCars.length > 0 ?
                        currentCars.map(car => (
                            <Card key={car.id} cars={car} />
                        ))
                        :
                        <div>
                            <h1>No Cars found</h1>
                        </div>

                    }
                </div>
                <div className='mt-4'>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={`btn btn-outline-dark mx-1 ${currentPage === index + 1 ? 'active' : ''}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Homepage;
