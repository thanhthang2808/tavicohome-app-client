import { Link } from "react-router-dom";
import notfoundImg from "@/assets/404-page-not-found.png";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gray-100 text-gray-900">
      <p className="text-4xl font-extrabold mb-2">Ồ! Không tìm thấy trang.</p>
      <p className="text-lg mb-8">Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
      <img
        src={notfoundImg}
        alt="Not Found"
        className="w-1/2 max-w-sm mb-8"
      />
      <Link
        to="/"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Về trang chủ
      </Link>
    </div>
  );
}

export default NotFound;
