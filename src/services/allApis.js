import { commonApi } from "./baseUrl";
import { baseUrl } from "./commonApi";

//registerApi
export const registerApi=async(bodyData)=>{
    return await commonApi('POST',`${baseUrl}/user/register`,bodyData)
}


//loginApi
export const loginApi=async(bodyData)=>{
    return await commonApi('POST',`${baseUrl}/user/login`,bodyData)
}

//add cars

export const addCarApi=async(bodyData,headerData)=>{

    return await commonApi('POST',`${baseUrl}/admin/add-car`,bodyData,headerData)
}
//get cars
export const getCarApi=async()=>{
    return await commonApi('GET',`${baseUrl}/view-car`,"","")
}

//get single car
export const getCarByIdApi = async (id) => {
    return await commonApi('GET',`${baseUrl}/view-car/${id}`)
}

//View users for admin
export const viewUserApi = async () => {
    return await commonApi('GET',`${baseUrl}/view-users`)
}


//booking

export const bookCarApi = async (id,bodyData,headerData) => {
    return await commonApi('POST',`${baseUrl}/booking/${id}`,bodyData,headerData)
}


//editCar Api
export const editCarApi=async(bodyData,headerData,id)=>{
    return await commonApi('PUT',`${baseUrl}/admin/edit-car/${id}`,bodyData,headerData)
}


//deleteCar Api

export const deleteCarApi=async(headerData,id)=>{
    return await commonApi('DELETE',`${baseUrl}/admin/delete-car/${id}`,{},headerData)
}

//user edit profile
export const editProfileApi=async(bodyData,headerData,id)=>{
    return await commonApi('PUT',`${baseUrl}/user/edit-profile/${id}`,bodyData,headerData)
}

//view bookings for admin
export const viewBookingsApi = async (headerData) => {
    return await commonApi('GET',`${baseUrl}/bookings`,{},headerData)
}

//view My bookings
export const viewMyBookingsApi = async (id,headerData) => {
    return await commonApi('GET',`${baseUrl}/user-bookings/${id}`,{},headerData)
}

//delete admin bookings

export const deleteAdminBookingApi=async(headerData,id)=>{
    return await commonApi('DELETE',`${baseUrl}/delete-booking/${id}`,{},headerData)
}


