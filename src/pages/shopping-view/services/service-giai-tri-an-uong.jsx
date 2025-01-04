import { motion } from "framer-motion";
import cafeGoTayImg from "@/assets/services/cafe-go-tay.png";
import hqDowaImg from "@/assets/services/hoi-quan-dowa.png";
import sbTavicoImg from "@/assets/services/san-banh-tavico.jpg";
import hbTavicoImg from "@/assets/services/ho-boi-tavicohome.jpg";
import ptGymImg from "@/assets/services/phong-tap-gym.jpg";

const ServiceGiaiTriAnUong = () => {
  return (
    <div className="bg-gray-50">
      {/* Header Section */}
      <div className="text-center py-8 bg-blue-700 text-white">
        <h1 className="text-3xl font-bold px-3">Khu Phức Hợp Dịch Vụ Tavico Home</h1>
        <p className="mt-2 text-xl px-4">Khu phức hợp về dịch vụ ăn uống và vui chơi tại Chợ Gỗ Tây Hố Nai</p>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Cafe Gỗ Tây */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              className="w-full h-50 object-contain rounded-md"
              src={cafeGoTayImg}
              alt="Cafe Gỗ Tây"
            />
            <h2 className="text-xl font-semibold mt-4">CAFE GỖ TÂY</h2>
            <p className="text-gray-700 mt-2">Thưởng thức café đậm chất Gỗ Tây trong không gian thư giãn, thoáng mát.</p>
          </div>

          {/* Hội Quán Dowa */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              className="w-full h-50 object-contain rounded-md"
              src={hqDowaImg}
              alt="Hội Quán Dowa"
            />
            <h2 className="text-xl font-semibold mt-4">HỘI QUÁN DOWA</h2>
            <p className="text-gray-700 mt-2">Trung tâm tổ chức sự kiện, hội nghị, tiệc cưới với không gian sang trọng.</p>
          </div>

          {/* Sân Banh Tavico */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              className="w-full h-50 object-contain rounded-md"
              src={sbTavicoImg}
              alt="Sân Banh Tavico"
            />
            <h2 className="text-xl font-semibold mt-4">SÂN BANH TAVICO</h2>
            <p className="text-gray-700 mt-2">Sân bóng đá chất lượng cao phục vụ mọi nhu cầu thể thao của bạn.</p>
          </div>

          {/* Hồ Bơi Tavico Home */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              className="w-full h-50 object-contain rounded-md"
              src={hbTavicoImg}
              alt="Hồ Bơi Tavico Home"
            />
            <h2 className="text-xl font-semibold mt-4">HỒ BƠI TAVICO HOME</h2>
            <p className="text-gray-700 mt-2">Hồ bơi thư giãn cho cả gia đình trong không gian xanh mát.</p>
          </div>

          {/* Phòng Tập Gym */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              className="w-full h-50 object-contain rounded-md"
              src={ptGymImg}
              alt="Phòng Tập Gym"
            />
            <h2 className="text-xl font-semibold mt-4">PHÒNG TẬP GYM</h2>
            <p className="text-gray-700 mt-2">Trang bị hiện đại, không gian thoáng đãng để bạn rèn luyện sức khỏe.</p>
          </div>
        </motion.div>

        {/* Special Features */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
        >
          <h3 className="text-2xl font-semibold">Điểm Nổi Bật</h3>
          <p className="mt-2 text-lg">Không gian rộng lớn hơn 1.000m², phù hợp cho các gia đình, nhóm bạn, và công ty tổ chức các sự kiện cuối năm.</p>
        </motion.div>

        {/* Contact Section */}
        <div className="text-center mt-8">
          <p className="text-xl">Địa chỉ: Khuôn viên Chợ gỗ Tây Tavico Hố Nai, Đường Điểu Xiển, cạnh Cầu Sập, đi vào ga Hố Nai 800m</p>
          <p className="text-xl mt-4">Hotline: <a href="tel:0855555595" className="text-blue-600">0855.5555.95</a></p>
        </div>
      </div>
    </div>
  );
};

export default ServiceGiaiTriAnUong;
