export const registerFormControls = [
  {
    name: "userName",
    label: "Tên người dùng",
    placeholder: "Nhập tên người dùng",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Nhập email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Mật khẩu",
    placeholder: "Nhập mật khẩu",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "levi", label: "Levi's" },
      { id: "zara", label: "Zara" },
      { id: "h&m", label: "H&M" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Trang chủ",
    path: "/",
  },
  {
    id: "introduction",
    label: "Giới thiệu",
    path: "/gioi-thieu/cong-ty-co-phan-tavico-home",
    subMenu: [
      { id: "tavicohome", label: "Công ty Cổ phần Tavico Home", path: "/gioi-thieu/cong-ty-co-phan-tavico-home" },
      { id: "tavico", label: "Công ty Tavico - Nhà Tổ Chức", path: "/gioi-thieu/cong-ty-tavico-nha-to-chuc" },
    ],
  },
  {
    id: "supplier",
    label: "Nhà cung cấp",
    path: "/nhacungcap",
    subMenu: [
      { id: "chodaumoi", label: "Nội Thất Chợ Đầu Mối", path: "/our-supplier" },
      { id: "noithattavico", label: "Nội Thất Tavico", path: "/our-supplier/noi-that-tavico" },
    ],
  },
  {
    id: "services",
    label: "Dịch vụ",
    subMenu: [
      { id: "thuematbang", label: "Thuê Mặt Bằng", path: "/shop/products/electronics" },
      { id: "sukienhoinghi", label: "Sự Kiện - Hội Nghị", path: "/shop/products/furniture" },
      { id: "bocxepdonggoi", label: "Bốc Xếp - Đóng Gói", path: "/shop/products/electronics" },
      { id: "giaitrianuong", label: "Giải Trí - Ăn Uống", path: "/dich-vu/giai-tri-an-uong" },
    ],
  },
  {
    id: "kids",
    label: "Tin tức - Sự kiện",
    path: "/news-events",
  },
  {
    id: "footwear",
    label: "Liên hệ",
    path: "/contact",
  },
  {
    id: "search",
    label: "Tìm kiếm",
    path: "/search",
  },
];

export const categoryOptionsMap = {
  men: "Men",
  women: "Women",
  kids: "Kids",
  accessories: "Accessories",
  footwear: "Footwear",
};

export const brandOptionsMap = {
  nike: "Nike",
  adidas: "Adidas",
  puma: "Puma",
  levi: "Levi",
  zara: "Zara",
  "h&m": "H&M",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Men" },
    { id: "women", label: "Women" },
    { id: "kids", label: "Kids" },
    { id: "accessories", label: "Accessories" },
    { id: "footwear", label: "Footwear" },
  ],
  brand: [
    { id: "nike", label: "Nike" },
    { id: "adidas", label: "Adidas" },
    { id: "puma", label: "Puma" },
    { id: "levi", label: "Levi's" },
    { id: "zara", label: "Zara" },
    { id: "h&m", label: "H&M" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
