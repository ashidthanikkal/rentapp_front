import { commonApi } from "./baseUrl";
import { baseUrl } from "./commonApi";

export const registerApi=async(bodyData)=>{
    return await commonApi('POST',`${baseUrl}/user/register`,bodyData)
}

export const loginApi=async(bodyData)=>{
    return await commonApi('POST',`${baseUrl}/user/login`,bodyData)
}