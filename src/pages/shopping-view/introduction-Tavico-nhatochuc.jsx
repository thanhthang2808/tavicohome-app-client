import React from "react";
import { motion } from "framer-motion";
import logoTavico from "../../assets/Logo-TAVICO.webp"; // Thêm hình ảnh minh họa
import image1 from "../../assets/ong-vo-quang-ha.jpg"; // Thêm hình ảnh minh họa

const TavicoNhaToChuc = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="">
      {/* Hero Section */}
      <div className="bg-gray-100 text-gray-600 py-4 px-4">
        <div className="container mx-auto space-y-2 flex items-center justify-center flex-col">
          <h1 className="text-xl md:text-2xl font-bold text-center">
            NHÀ TỔ CHỨC
          </h1>
          <img
            src={logoTavico}
            alt="Tavico Group"
            className="w-16 object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto py-12 px-4">
        <div
        >
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            CHỢ ĐẦU MỐI LÀ ĐÒN BẨY CHO THỊ TRƯỜNG NỘI ĐỊA
          </h2>

          {/* Article Text */}
          <p className="text-gray-700 text-lg font-semibold md:text-xl leading-relaxed text-justify mb-6">
            Từ 1/12/2017 – 15/2/2018, Công ty Cổ phần Tân Vĩnh Cửu (TAVICO) tổ
            chức Hội chợ đồ gỗ cuối năm với mô hình showroom trưng bày kết hợp
            chợ đầu mối đồ gỗ đầu tiên tại Việt Nam để các doanh nghiệp sản xuất
            đồ gỗ khai mở thị trường nội địa, thông qua giới thiệu sản phẩm và
            bán sỉ cùng lúc cho nhiều nhà bán lẻ. Là người khởi xướng, ông Võ
            Quang Hà đã chia sẻ với Gỗ và Nội thất về dự án này.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-6">
            TAVICO đã định hình về mô hình chợ gỗ từ rất lâu. Trước đây, chúng
            tôi chỉ chuyên về nguyên liệu và “Siêu thị gỗ Tây” đã được biết đến
            là một nơi chuyên cung cấp nguyên liệu gỗ Tây cho các doanh nghiệp
            (DN), xưởng, cơ sở sản xuất đồ gỗ nội thất, phục vụ thị trường nội
            địa lẫn xuất khẩu. Trong quá trình làm, chúng tôi nhận ra một điều
            là gỗ Tây có rất nhiều lợi ích cho thị trường Việt Nam và người
            Việt. Tuy nhiên, việc một số cơ sở chạy đua sản xuất hàng giá rẻ,
            chất lượng bị xuống, trong khi các nhà máy lớn sản xuất hàng loạt
            lại nhắm chủ yếu đến xuất khẩu. Vì vậy, tại sao lại không nhắm đến
            mục tiêu sản xuất hàng chất lượng tốt phục vụ thị trường nội địa?
            Thật ra, các DN xuất khẩu đồ gỗ luôn muốn đưa sản phẩm vào thị
            trường nội địa, nhưng họ gặp nhiều khó khăn vì không tìm được kênh
            phân phối phù hợp, không thể mở cửa hàng bán lẻ vì chi phí mặt bằng
            cao, dẫn đến đội giá sản phẩm, làm mất ưu thế cạnh tranh giá. Thêm
            nữa, lượng đặt hàng từ nhà bán lẻ nội địa ít, không thể đưa vào sản
            xuất hàng loạt. Ngoài ra, việc bảo vệ quyền sở hữu trí tuệ với những
            thiết kế chưa được mạnh mẽ.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-6">
            Đối tượng mà chúng tôi nhắm đến là những DN muốn “đứng 2 chân” vừa
            xuất khẩu vừa phục vụ trong nước. Đây cũng là đầu mối cung cấp hàng
            giá sỉ, vì vốn dĩ khu vực Hố Nai đã nổi tiếng từ lâu là nơi cung cấp
            hàng giá sỉ. Điều quan trọng hơn, nơi đây ngoài vai trò của một chợ
            đầu mối gỗ, còn là nơi tạo cho người tiêu dùng nhiều lợi ích qua lựa
            chọn, mua hàng dễ dàng hơn.
          </p>

          {/* Image Example */}
          <div className="my-8 flex flex-col items-center">
            <img
              src={image1} // Hình ảnh minh họa
              alt="Chu tich HDQT TAVICO" // Thêm mô tả cho hình ảnh
              className="w-[80%] object-cover rounded-lg shadow-md"
            />
            {/* Image Caption */}
            <p className="text-sm text-gray-500 text-center mt-2 italic">
              Ông Võ Quang Hà - Chủ Tịch HĐQT, Tổng Giám Đốc Công Ty CP Tân Vĩnh
              Cửu (TAVICO)
            </p>
          </div>

          {/* More Content */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-6">
            Ông Võ Quang Hà - Chủ Tịch HĐQT, Tổng Giám Đốc Công Ty CP Tân Vĩnh
            Cửu (TAVICO) đã chia sẻ rằng mô hình này ở nước ngoài rất phổ biến,
            thậm chí đã có từ lâu. Ở đấy, các DN quy tụ lại với nhau, làm cho
            thị trường trở nên lành mạnh hơn nhiều vì việc chia sẻ thông tin sản
            xuất sẽ nhiều hơn. Khi đó, các DN phải “làm thật - bán thật”, tạo ra
            động lực cạnh tranh. Điều đó lý giải tại sao ở một số chợ đã tạo ra
            những sản phẩm tốt - giá tốt, thậm chí giá cao người tiêu dùng vẫn
            mua vì họ cảm thấy xứng đáng.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-6">
            Cách này ở Việt Nam nhìn chung vẫn còn mới. Chúng ta có nhiều làng
            nghề nhưng xu hướng là sản xuất hàng giá rẻ và chất lượng thả nổi,
            trong khi các nhà máy lớn vẫn chưa mặn mà lắm. Chợ đầu mối gỗ sẽ là
            nơi giao thoa những nhu cầu khác nhau và đưa “Siêu thị gỗ Tây” lên
            một tầm cao hơn. Ví von một chút, ngày xưa chúng ta mua sắm chủ yếu
            ở chợ xổm, bây giờ chuyển sang siêu thị, vẫn những hàng hóa đó nhưng
            chủng loại phong phú hơn, nhiều lựa chọn hơn, và được kiểm chứng
            chất lượng… Việc phát triển mô hình chợ đầu mối gỗ và siêu thị nội
            thất gỗ là một bước tiếp theo của định hướng phát triển “Siêu thị gỗ
            Tây”.
          </p>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed text-justify mb-6">
            Đến thời điểm này, toàn bộ các gian hàng hội chợ đồ gỗ cuối năm đã
            kín chỗ. Đó là nhu cầu có thật của DN, họ cần một nơi để trao đổi và
            mua bán. Hiện nay, mỗi gian hàng có mức giá thuê 30.000
            đồng/m2/tháng, mỗi gian rộng 120m2, giá thuê một tháng 3.600.000
            đồng/gian. Đây là mức giá rất tốt, vì chúng tôi không đặt nặng vào
            lợi nhuận mà mong muốn tạo sân chơi cho các DN. Sau hội chợ này, ai
            cũng muốn tiếp tục kinh doanh. TAVICO muốn đáp ứng điều đó cho các
            DN.
          </p>

          {/* Section with Benefits */}
          <div className="bg-blue-50 p-8 rounded-lg shadow-md my-8">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">
              Lợi ích và giá trị gia tăng
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Mô hình chợ đầu mối gỗ và siêu thị nội thất gỗ mà TAVICO khởi
              xướng không chỉ giúp doanh nghiệp tìm kiếm đối tác hiệu quả mà còn
              tạo ra một môi trường cạnh tranh lành mạnh, khuyến khích chất
              lượng sản phẩm và giá trị gia tăng cho thị trường. Ngoài ra, các
              doanh nghiệp tham gia sẽ có cơ hội mở rộng mạng lưới và gia tăng
              lợi thế cạnh tranh nhờ vào việc kết nối với các nhà phân phối và
              khách hàng trong nước.
            </p>
          </div>

          {/* Interview Excerpt */}
          <div className="bg-gray-200 p-8 rounded-lg shadow-md mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Phỏng vấn ông Võ Quang Hà
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Ông Võ Quang Hà, Chủ Tịch HĐQT, Tổng Giám Đốc Công Ty Cổ Phần Tân
              Vĩnh Cửu (TAVICO) đã chia sẻ nhiều về mô hình chợ đầu mối và xu
              hướng phát triển ngành gỗ tại Việt Nam. Ông cho biết mô hình này
              sẽ giúp các doanh nghiệp trong ngành gỗ có một nền tảng vững chắc
              để phát triển, đồng thời giải quyết vấn đề khó khăn trong việc tìm
              kiếm kênh phân phối và bảo vệ quyền sở hữu trí tuệ cho các sản
              phẩm thiết kế.
            </p>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-700">
              Cảm ơn ông về cuộc trao đổi này!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TavicoNhaToChuc;
