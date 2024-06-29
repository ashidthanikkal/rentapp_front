import axios from "axios";

export const commonApi=async(method,url,reqBody,reqHeader)=>{
    const config={
        method,
        url,
        data:reqBody,
        header:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(config).then(data=>{
        return data
    }).catch(data=>{
        return data
    })
}