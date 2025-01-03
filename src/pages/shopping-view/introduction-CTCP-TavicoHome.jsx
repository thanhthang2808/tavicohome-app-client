import React from "react";
import { motion } from "framer-motion";
import aboutUsImage from "../../assets/about-us.jpg";
import locationImage from "../../assets/tavico-honai.jpg"; // Add your location image here
import PartnerSection from "@/components/common/partner-section";

const TavicoHomeIntroduction = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggeredVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        staggerChildren: 0.3, // Stagger the children for smooth animation
      },
    },
  };

  return (
    <div className="">
      {/* Hero Section */}
      <motion.div
        className="relative bg-cover bg-center h-[400px]"
        style={{ backgroundImage: `url(${aboutUsImage})` }}
        initial="hidden"
        whileInView="visible"
        variants={textVariants}
        viewport={{ once: true }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.h1 className="text-white text-4xl md:text-6xl font-bold text-center">
            CÔNG TY CỔ PHẦN TAVICO HOME
          </motion.h1>
        </div>
      </motion.div>

      {/* About Us and Contact Section */}
      <div className="container mx-auto py-12 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={staggeredVariants}
          viewport={{ once: true }}
        >
          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-6"
            variants={textVariants}
          >
            <strong>
              Công Ty Cổ Phần Tavico Home là công ty con thuộc Công Ty Cổ Phần
              Tavico Group, được thành lập vào năm 2022
            </strong>
            , chuyên cung cấp các sản phẩm nội thất gỗ hiện đại và truyền thống.
            Nằm ngay cạnh khu làng nghề Hố Nai, Tavico Home kết nối trực tiếp
            các nhà sản xuất, nhà phân phối nội thất gỗ, và các nhà bán lẻ trên
            toàn khu vực Miền Nam. Chúng tôi tạo ra một kênh trao đổi hàng hóa
            chuyên biệt, ổn định và hiệu quả, giúp phát triển ngành nội thất gỗ
            tại Việt Nam.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-6"
            variants={textVariants}
          >
            Sau thời gian dài hoạt động, Tavico Home đã xây dựng một hệ thống
            cung cấp sản phẩm nội thất gỗ phong phú với mức giá ưu đãi cho cả
            khách hàng sỉ và lẻ. Công ty đang trên con đường phát triển mạnh mẽ,
            góp phần thúc đẩy ngành gỗ Việt Nam vươn xa ra thị trường quốc tế.
            Sự thành công của Tavico Home hứa hẹn sẽ mở ra cơ hội phát triển cho
            các chợ đầu mối đồ gỗ trên toàn quốc trong tương lai.
          </motion.p>

          {/* Address and Location Image */}
          <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
            <motion.div className="flex-1" variants={textVariants}>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify">
                Tọa lạc ngay mặt tiền đường Điểu Xiển, P. Tân Biên, TP. Biên
                Hòa, Đồng Nai, cách quốc lộ 1A khoảng 1km. Cách HCM 30Km thuận
                tiện cho khách hàng TP. HCM đến tham quan mua sắm, trong
                showroom mặt bằng thông thoáng rộng rãi, thuận lợi cho việc
                trưng bày, bốc xếp, đóng gói, vận chuyển hàng hóa đi lại các
                tỉnh thành trong cả nước.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 mt-4 md:mt-0 md:ml-8"
              variants={imageVariants}
            >
              <img
                src={locationImage} // Your location image here
                alt="Showroom Location"
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </motion.div>
          </div>

          <motion.div className="mt-6 text-center" variants={textVariants}>
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              Mọi chi tiết xin liên hệ
            </h3>
            <p className="text-lg">
              <span className="font-bold">
                CÔNG TY CỔ PHẦN TAVICO HOME - THẾ GIỚI GỖ VÀ NỘI THẤT
              </span>
              <br />
              Địa chỉ: Số 81 Đường Điểu Xiển, Tổ 8, Khu phố 9, P. Tân Biên, Biên
              Hòa, Đồng Nai
              <br />
              Điện thoại Ban Quản Lý:{" "}
              <span className="font-bold text-red-600">
                0855.555.595 - 0988.951.579
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Đối tác
          </h2>
        </div>
      <PartnerSection />
      </div>
    </div>
  );
};

export default TavicoHomeIntroduction;
