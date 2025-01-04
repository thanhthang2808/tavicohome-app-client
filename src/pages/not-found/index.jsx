import { Link } from "react-router-dom";
import notfoundImg from "@/assets/404-page-not-found.png";
import { Home } from "lucide-react";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 text-gray-900">
      <p className="text-3xl px-4 font-extrabold text-center items mb-2">Ồ! Không tìm thấy trang.</p>
      <p className="text-lg px-4 text-center mb-3">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      <img
        src={notfoundImg}
        alt="Not Found"
        className="w-1/2 max-w-sm mb-8"
      />
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        <Home size={16} className="inline-block mr-2" />
        Về trang chủ 
      </Link>
    </div>
  );
}

export default NotFound;
