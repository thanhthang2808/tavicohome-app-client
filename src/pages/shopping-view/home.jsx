import { Button } from "@/components/ui/button";
import bannerOne from "@/assets/banner/banner1.jpg";
import bannerTwo from "@/assets/banner/banner2.jpg";
import bannerThree from "@/assets/banner/banner3.jpg";
import bannerFour from "@/assets/banner/banner4.jpg";

import {
  Airplay,
  BabyIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CloudLightning,
  Heater,
  Images,
  Shirt,
  ShirtIcon,
  ShoppingBasket,
  UmbrellaIcon,
  WashingMachine,
  WatchIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllFilteredProducts,
  fetchProductDetails,
} from "@/store/shop/products-slice";
import ShoppingProductTile from "@/components/shopping-view/product-tile";
import { useNavigate } from "react-router-dom";
import { addToCart, fetchCartItems } from "@/store/shop/cart-slice";
import { useToast } from "@/components/ui/use-toast";
import ProductDetailsDialog from "@/components/shopping-view/product-details";
import { getFeatureImages } from "@/store/common-slice";
import { motion } from "framer-motion";
import aboutUsImg from "@/assets/about-us.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTruckLoading,
  faUsers,
  faBuilding,
  faPlay,
  faTruck,
  faBoxes,
  faTag,
  faWarehouse,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import giaiTriImg from "@/assets/giaitri-anuong.jpg";
import suKienImg from "@/assets/sukien-hoinghi.jpg";
import matBangImg from "@/assets/matbang.jpg";
import bocXepImg from "@/assets/bocxep.jpeg";
import PartnerSection from "@/components/common/partner-section";
import { Helmet } from "react-helmet";

const categoriesWithIcon = [
  { id: "men", label: "Men", icon: ShirtIcon },
  { id: "women", label: "Women", icon: CloudLightning },
  { id: "kids", label: "Kids", icon: BabyIcon },
  { id: "accessories", label: "Accessories", icon: WatchIcon },
  { id: "footwear", label: "Footwear", icon: UmbrellaIcon },
];

const brandsWithIcon = [
  { id: "nike", label: "Nike", icon: Shirt },
  { id: "adidas", label: "Adidas", icon: WashingMachine },
  { id: "puma", label: "Puma", icon: ShoppingBasket },
  { id: "levi", label: "Levi's", icon: Airplay },
  { id: "zara", label: "Zara", icon: Images },
  { id: "h&m", label: "H&M", icon: Heater },
];

const services = [
  {
    id: "entertainment-food",
    label: "Giải trí - ăn uống",
    icon: (
      <FontAwesomeIcon
        icon={faUtensils}
        className="w-12 h-12 mb-4 text-white"
      />
    ),
    description:
      "Khu phức hợp dịch vụ ăn uống và giải trí, bao gồm Hội quán Dowa, Cafe Gỗ Tây, điểm tâm sáng, cơm trưa văn phòng, hồ bơi, sân bóng và phòng tập gym.",
    imageUrl: giaiTriImg,
  },
  {
    id: "packing-moving",
    label: "Bốc xếp - đóng gói",
    icon: (
      <FontAwesomeIcon
        icon={faTruckLoading}
        className="w-12 h-12 mb-4 text-white"
      />
    ),
    description:
      "Cung cấp dịch vụ bốc xếp và đóng gói chuyên nghiệp, nhanh chóng, đảm bảo an toàn.",
    imageUrl: bocXepImg,
  },
  {
    id: "events-conference",
    label: "Sự kiện - hội nghị",
    icon: (
      <FontAwesomeIcon icon={faUsers} className="w-12 h-12 mb-4 text-white" />
    ),
    description:
      "Cho thuê địa điểm tổ chức sự kiện sang trọng với không gian rộng rãi, vòm gỗ ngoài trời và khu vực check-in đẹp mắt, mang đến trải nghiệm đáng nhớ.",
    imageUrl: suKienImg,
  },
  {
    id: "property-rent",
    label: "Thuê mặt bằng",
    icon: (
      <FontAwesomeIcon
        icon={faWarehouse}
        className="w-12 h-12 mb-4 text-white"
      />
    ),
    description:
      "Dịch vụ cho thuê mặt bằng rộng thoáng, đáp ứng tốt mọi diện tích thuê theo yêu cầu của khách hàng.",
    imageUrl: matBangImg,
  },
];

const advantages = [
  { id: 1, label: "Vị trí thuận lợi", icon: faLocationDot },
  { id: 2, label: "Mặt bằng rộng thoáng", icon: faWarehouse },
  { id: 3, label: "Giá cả hấp dẫn", icon: faTag },
  { id: 4, label: "Thu hút khách hàng", icon: faUsers },
  { id: 5, label: "Hậu cần chu đáo", icon: faTruck },
  { id: 6, label: "Hàng hóa đa dạng", icon: faBoxes },
];

const videoData = [
  {
    id: "SvX40rH22UU",
    title: "Tri ân từ CB-CNV mừng kỷ niệm 18 năm thành lập TAVICO GROUP",
  },
  {
    id: "CtQ37k9Iz9E",
    title: "Kỷ niệm 15 năm thành lập TAVICO 05/04/2005 - 05/04/2020",
  },
  { id: "cSAExYpO0Vg", title: "KHAI MẠC HỘI CHỢ GỖ VÀ NỘI THẤT CUỐI NĂM 2022" },
  {
    id: "LcxZTB30cd0",
    title: "Ngành gỗ Việt Nam trước ảnh hưởng của dịch COVID-19",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Mỗi phần tử sẽ xuất hiện chậm hơn 0.2 giây
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const defaultFeatureImages = [
  {
    id: 1,
    image: bannerOne,
  },
  {
    id: 2,
    image: bannerTwo,
  },
  {
    id: 3,
    image: bannerThree,
  },
  {
    id: 4,
    image: bannerFour,
  },
];  

const pageDescription = "Tavico không chỉ được biết đến là Trung tâm phân phối gỗ nguyên liệu hợp pháp trong 15 năm qua cho các nhà máy chế biến gỗ mà còn tạo ra Thế Giới Nội Thất Gỗ Tây - Tavico Hố Nai nhằm tạo điều kiện thuận lợi cho các DN sản xuất đồ gỗ nội thất có đủ diện tích trưng bày hàng hoá mà còn giúp người mua hàng tiết kiệm thời gian chọn lựa mặt hàng nội thất ưng ý cũng như mua được hàng xuất khẩu với giá xuất kho.Với phương châm Chất lượng Tây, giá Ta, không nơi nào bằng. THẾ GIỚI NỘI THẤT GỖ TÂY - TAVICO HỐ NAI Đường Điểu Xiển, Tổ 8, khu phố 9, P.Tân Biên, TP. Biên Hòa, Tỉnh Đồng Nai Đ𝐢ệ𝐧 𝐭𝐡𝐨ạ𝐢 : 085 555 55 95 - 0988 951 579";

function ShoppingHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { productList, productDetails } = useSelector(
    (state) => state.shopProducts
  );
  const { featureImageList } = useSelector((state) => state.commonFeature);

  const imagesToDisplay =
    featureImageList && featureImageList.length > 0
      ? featureImageList
      : defaultFeatureImages;
  
      useEffect(() => {
        imagesToDisplay.forEach((slide) => {
          const img = new Image();
          img.src = slide?.image; // Preload the image
        });
      }, [imagesToDisplay]);

  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function handleNavigateToListingPage(getCurrentItem, section) {
    sessionStorage.removeItem("filters");
    const currentFilter = {
      [section]: [getCurrentItem.id],
    };

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));
    navigate(`/listing`);
  }

  function handleGetProductDetails(getCurrentProductId) {
    dispatch(fetchProductDetails(getCurrentProductId));
  }

  function handleAddtoCart(getCurrentProductId) {
    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        toast({
          title: "Product is added to cart",
        });
      }
    });
  }

  useEffect(() => {
    if (productDetails !== null) setOpenDetailsDialog(true);
  }, [productDetails]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesToDisplay.length);
    }, 15000);

    return () => clearInterval(timer);
  }, [imagesToDisplay]);

  useEffect(() => {
    dispatch(
      fetchAllFilteredProducts({
        filterParams: {},
        sortParams: "price-lowtohigh",
      })
    );
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  const getThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Thế Giới Gỗ và Nội Thất - Tavico Home</title>
        <meta name="description" content={pageDescription} />
      </Helmet>
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[50vw] md:h-[600px] overflow-hidden">
          {imagesToDisplay && imagesToDisplay.length > 0
            ? imagesToDisplay.map((slide, index) => (
                <img
                  src={slide?.image}
                  key={index}
                  alt={`Tavico Home Banner ${index + 1}`}
                  className={`${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  } absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000`}
                />
              ))
            : null}
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentSlide(
                (prevSlide) =>
                  (prevSlide - 1 + imagesToDisplay.length) %
                  imagesToDisplay.length
              )
            }
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() =>
              setCurrentSlide(
                (prevSlide) => (prevSlide + 1) % imagesToDisplay.length
              )
            }
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Về chúng tôi */}
      <motion.section
        className="py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <motion.div className="w-full md:w-1/2">
            <img
              src={aboutUsImg}
              alt="Về chúng tôi"
              className="rounded-lg shadow-lg w-[80%] mx-auto md:w-full"
            />
          </motion.div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h2
              className="text-4xl font-bold text-primary mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Về chúng tôi
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Lần đầu tiên tại Việt Nam, một chợ đầu mối dành cho đồ gỗ nội thất
              đã được đầu tư phát triển ngay bên cạnh khu làng nghề Hố Nai nhằm
              mục đích kết nối trực tiếp các nhà sản xuất và phân phối đồ gỗ nội
              thất với tất cả các nhà bán lẻ trên toàn bộ khu vực Miền Nam.
              Chúng tôi tạo ra một kênh trao đổi hàng hóa chuyên biệt, ổn định &
              hiệu quả cao với số lượng lớn cho cả nhà cung cấp và nhà bán lẻ.
            </motion.p>
            <motion.button
              className="mt-6 px-4 py-2 bg-primary text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg focus:ring-2 focus:ring-primary-light transition-transform duration-200 ease-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                (window.location.href =
                  "/gioi-thieu/cong-ty-co-phan-tavico-home")
              }
            >
              Tìm hiểu thêm
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Dịch vụ cung cấp */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-blue-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-8">
            Dịch vụ cung cấp
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <motion.div
                key={service.id}
                whileHover={{ scale: 1.05 }}
                className="relative h-full bg-white cursor-pointer rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                <div className="relative z-10 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2 z-10">
                  {service.label}
                </h3>
                <p className="text-gray-300 text-sm z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Video */}
      <motion.section
        className="py-12"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <iframe
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/nmaOrjE_CPw"
              title="Video lớn"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="text-xl font-semibold text-gray-800 text-center mt-1">
              KỶ NIỆM 18 NĂM THÀNH LẬP TAVICO GROUP 05/04/2005 - 05/04/2023
            </h2>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {videoData.map((videoItem, index) => (
                <motion.div
                  key={index}
                  className="relative cursor-pointer group"
                  whileHover={{ scale: 1.05 }}
                  onClick={() =>
                    window.open(
                      `https://www.youtube.com/watch?v=${videoItem.id}`,
                      "_blank"
                    )
                  }
                >
                  <img
                    src={getThumbnailUrl(videoItem.id)}
                    alt={`Video thumbnail ${index + 1}`}
                    className="w-full h-auto rounded-lg"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faPlay}
                      className="text-white text-4xl"
                    />
                  </div>
                  <div className="mt-2 text-center text-sm font-semibold text-gray-700">
                    {videoItem.title}
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              className="mt-4 px-6 py-2 bg-primary text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg focus:ring-2 focus:ring-primary-light transition-transform duration-200 ease-out"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() =>
                window.open(
                  "https://www.youtube.com/@thegioinoithatgotaytavicohome/videos",
                  "_blank"
                )
              }
            >
              Xem thêm
            </motion.button>
          </div>
        </div>
      </motion.section>

      {/* Những lợi thế của chợ đầu mối */}
      <motion.section
        className="py-12"
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Những lợi thế của chợ đầu mối
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {advantages.map((advantage) => (
              <motion.div
                key={advantage.id}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center justify-center text-center space-y-4"
                variants={itemVariants}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-700 text-white rounded-full">
                  <FontAwesomeIcon icon={advantage.icon} className="text-xl" />
                </div>
                <span className="font-medium text-gray-700 text-lg truncate">
                  {advantage.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Showroom Gỗ nội thất */}
      <motion.section
        className="py-12"
        variants={staggerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Showroom Gỗ nội thất
          </h2>
        </div>
      </motion.section>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Đối tác
          </h2>
        </div>
        <PartnerSection />
      </div>

      {/* <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Shop by category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categoriesWithIcon.map((categoryItem) => (
              <motion.div
                key={categoryItem.id}
                whileHover={{ scale: 1.1 }}
                className="h-full"
              >
                <Card
                  onClick={() =>
                    handleNavigateToListingPage(categoryItem, "category")
                  }
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <categoryItem.icon className="w-12 h-12 mb-4 text-primary" />
                    <span className="font-bold">{categoryItem.label}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Brand</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandsWithIcon.map((brandItem) => (
              <motion.div
                key={brandItem.id}
                whileHover={{ scale: 1.1 }}
                className="h-full"
              >
                <Card
                  onClick={() =>
                    handleNavigateToListingPage(brandItem, "brand")
                  }
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <brandItem.icon className="w-12 h-12 mb-4 text-primary" />
                    <span className="font-bold">{brandItem.label}</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section> */}

      {/* <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-12"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productList && productList.length > 0
              ? productList.map((productItem) => (
                  <motion.div
                    key={productItem.id}
                    whileHover={{ scale: 1.05 }}
                    className="h-full"
                  >
                    <ShoppingProductTile
                      handleGetProductDetails={handleGetProductDetails}
                      product={productItem}
                      handleAddtoCart={handleAddtoCart}
                    />
                  </motion.div>
                ))
              : null}
          </div>
        </div>
      </motion.section> */}

      <ProductDetailsDialog
        open={openDetailsDialog}
        setOpen={setOpenDetailsDialog}
        productDetails={productDetails}
      />
    </div>
  );
}

export default ShoppingHome;
