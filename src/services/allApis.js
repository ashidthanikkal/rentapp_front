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
//get cars admin
export const getAdminCarApi=async()=>{
    return await commonApi('GET',`${baseUrl}/admin/view-car`,"","")
}
//get cars user
export const getUserCarApi=async()=>{
    return await commonApi('GET',`${baseUrl}/user/view-car`,"","")
}

export const getCarByIdApi = async (id) => {
    return await commonApi('GET',`${baseUrl}/user/view-car/${id}`)
}

