 import axios from "axios";

  const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/'
  })

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    config.headers['Content-Type'] = 'application/json';
    return config
  })


 export default axiosInstance





// const axiosInstance = axios.create({
   
//    baseURL: 'https://d4cc-202-137-119-4.ngrok-free.app/api/'

// });


// axiosInstance.defaults.withCredentials = true;
// axiosInstance.defaults.headers.post['Content-Type'] = 'application/json';
// axiosInstance.defaults.headers.post['Accept'] = 'application/json';
// axiosInstance.defaults.headers.get['Content-Type'] = 'application/json';
// axiosInstance.defaults.headers.get['Accept'] = 'application/json';
// axiosInstance.defaults.headers.common['ngrok-skip-browser-warning']=true;
// axiosInstance.interceptors.request.use((config) => {

//     const token = localStorage.getItem('token');
//     config.headers.Authorization =`Bearer ${token}`
//     return config;
// });


// axiosInstance.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     try {
//         const response = error;
//         if(response.status === 401) {
//             localStorage.removeItem('token');
//         } 
//     } catch (error) {
//         console.error(error);
//     }

//     throw error;
// })
// export default axiosInstance;