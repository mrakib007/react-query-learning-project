import axios from "axios";

//axios interceptor
const client = axios.create({baseURL: 'http://localhost:4000'})
export const request = ({...options}) =>{//options here are all the options that axios accepts
    client.defaults.headers.common.Authorization = `Bearer token`
    const onSuccess = response => response;
    const onError = error =>{
        //optionally catch errors and add additional logging here
        return error
    }
    return client(options).then(onSuccess).catch(onError)
}
