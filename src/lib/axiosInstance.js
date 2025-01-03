import axios from "axios";

const API_URL = import.meta.env.VITE_REACT_APP_API_URL; // Lấy URL từ .env

// Tạo instance của axios
const axiosInstance = axios.create({
  baseURL: API_URL, // Định nghĩa URL gốc
  timeout: 10000, // Thời gian timeout cho mỗi request
  withCredentials: true, // Gửi cookie cùng với mỗi request
  headers: {
    "Content-Type": "application/json", // Header mặc định
  },
});

// Thêm interceptor để xử lý trước mỗi request
axiosInstance.interceptors.request.use(
  (config) => {
    // Ví dụ: Gắn token vào header nếu có
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// // Thêm interceptor để xử lý response
// axiosInstance.interceptors.response.use(
//   (response) => {
//     // Xử lý response trước khi trả về
//     return response;
//   },
//   (error) => {
//     // Xử lý lỗi từ server hoặc mạng
//     if (error.response && error.response.status === 401) {
//       // Ví dụ: Xóa token và chuyển hướng đến trang đăng nhập nếu lỗi 401
//       localStorage.removeItem("accessToken");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
