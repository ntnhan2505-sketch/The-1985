export interface Product {
  id: string;
  name: string;
  category: "giay" | "ao-so-mi" | "quan-au" | "phu-kien";
  originalPrice: number;
  discountedPrice: number;
  image: string;
  badges: string[]; // e.g. ["Bán chạy", "Mới về"]
  affiliateUrl: string; // Shopee link
  rating: number;
  soldCount: number;
  description: string;
}

export interface Category {
  id: "all" | "giay" | "ao-so-mi" | "quan-au" | "phu-kien";
  name: string;
  icon: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "all",
    name: "Trang Chủ",
    icon: "Home",
    description: "Trang chủ tổng hợp sản phẩm bán chạy nhất"
  },
  {
    id: "giay",
    name: "Trang Giầy",
    icon: "Footprints",
    description: "Giầy thể thao, sneaker thời trang, giầy chạy bộ cao cấp"
  },
  {
    id: "ao-so-mi",
    name: "Trang Áo Sơ Mi",
    icon: "Shirt",
    description: "Áo sơ mi nam dài tay, ngắn tay thời trang, thanh lịch"
  },
  {
    id: "quan-au",
    name: "Trang Quần Âu",
    icon: "Sparkles",
    description: "Quần âu nam, quần tây ống đứng lịch sự tôn dáng công sở"
  },
  {
    id: "phu-kien",
    name: "Trang Phụ Kiện",
    icon: "Watch",
    description: "Đồng hồ, túi xách, kính mắt, ví da cao cấp"
  }
];

export const PRODUCTS: Product[] = [
  // --- GIẦY (giay) ---
  {
    id: "sh-1",
    name: "Giầy Thể Thao Nam Sneaker Adidas Superstar Classic",
    category: "giay",
    originalPrice: 2600000,
    discountedPrice: 1890000,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=80",
    badges: ["Bán Chạy", "100% Authentic"],
    affiliateUrl: "https://shope.ee/6fKWzJ1Hqp",
    rating: 4.9,
    soldCount: 1520,
    description: "Biểu tượng thời trang đường phố với mũi giầy vỏ sò đặc trưng, da thật cao cấp, êm ái bền bỉ."
  },
  {
    id: "sh-2",
    name: "Giầy Chạy Bộ Nam Nike Air Zoom Pegasus 40",
    category: "giay",
    originalPrice: 3800000,
    discountedPrice: 2490000,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=80",
    badges: ["Deal Sốc", "Trợ Lực Tốt"],
    affiliateUrl: "https://shope.ee/8Ul9xZaOQx",
    rating: 4.8,
    soldCount: 940,
    description: "Dòng giầy chạy huyền thoại với đệm Zoom Air kép, phản hồi lực cực tốt, ôm chân thoáng khí tối đa."
  },
  {
    id: "sh-3",
    name: "Giầy Sneaker Nữ MLB Bigball Chunky Boston Red Sox",
    category: "giay",
    originalPrice: 2500000,
    discountedPrice: 1750000,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=80",
    badges: ["Hot Trend", "Tăng Chiều Cao"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.9,
    soldCount: 2200,
    description: "Form giầy chunky cá tính phong cách Hàn Quốc, đế cao 6cm tôn dáng, họa tiết thêu sắc nét thời thượng."
  },
  {
    id: "sh-4",
    name: "Giầy Thể Thao Cổ Cao Converse Chuck Taylor Classic 1970s",
    category: "giay",
    originalPrice: 2100000,
    discountedPrice: 1550000,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
    badges: ["Classic", "Dễ Phối Đồ"],
    affiliateUrl: "https://shope.ee/7KZd6gH8u1",
    rating: 4.9,
    soldCount: 3400,
    description: "Phiên bản vintage sở hữu chất vải canvas dày dặn, đệm chân êm ái hơn và phần đế màu ngà bóng bẩy chuẩn retro."
  },
  {
    id: "sh-5",
    name: "Giầy Sneaker Nam Adidas Stan Smith Core White",
    category: "giay",
    originalPrice: 2300000,
    discountedPrice: 1690000,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&auto=format&fit=crop&q=80",
    badges: ["Classic", "Thân Thiện Môi Trường"],
    affiliateUrl: "https://shope.ee/8Ul9xZaOQx",
    rating: 4.8,
    soldCount: 1100,
    description: "Đôi giầy tối giản vượt thời gian với thiết kế thanh lịch trắng muốt kết hợp cùng biểu tượng Stan Smith trứ danh."
  },
  {
    id: "sh-6",
    name: "Giầy Thể Thao Unisex New Balance 530 White Silver",
    category: "giay",
    originalPrice: 2900000,
    discountedPrice: 2190000,
    image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=80",
    badges: ["Retro", "Êm Ái Tuyệt Đối"],
    affiliateUrl: "https://shope.ee/6fKWzJ1Hqp",
    rating: 4.9,
    soldCount: 890,
    description: "Xu hướng retro running lên ngôi với dòng New Balance 530 bạc phối lưới cực thoáng chân và êm ái cho ngày dài."
  },
  {
    id: "sh-7",
    name: "Giầy Vans Old Skool Classic Black/White",
    category: "giay",
    originalPrice: 1850000,
    discountedPrice: 1390000,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=80",
    badges: ["Học Đường", "Bền Bỉ"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.8,
    soldCount: 4500,
    description: "Biểu tượng thời trang trượt ván đường phố bền bỉ với đường lượn sóng trắng nổi bật trên nền vải canvas đen classic."
  },
  {
    id: "sh-8",
    name: "Giầy Tây Nam Oxford Pierre Cardin Da Bò Thật",
    category: "giay",
    originalPrice: 2490000,
    discountedPrice: 1690000,
    image: "https://images.unsplash.com/photo-1486308512493-ae6a1c90366f?w=600&auto=format&fit=crop&q=80",
    badges: ["Da Thật", "Quý Ông"],
    affiliateUrl: "https://shope.ee/7KZd6gH8u1",
    rating: 4.9,
    soldCount: 520,
    description: "Chất liệu da bò thật 100% nhập khẩu mềm mịn, form ôm chân chuẩn Âu, tôn vẻ lịch lãm sang trọng của quý ông."
  },
  {
    id: "sh-9",
    name: "Giầy Sneaker Unisex Puma Slipstream Lo Retro",
    category: "giay",
    originalPrice: 2700000,
    discountedPrice: 1890000,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&auto=format&fit=crop&q=80",
    badges: ["Mới Về", "Puma Mall"],
    affiliateUrl: "https://shope.ee/8Ul9xZaOQx",
    rating: 4.7,
    soldCount: 310,
    description: "Sự tái hiện hoàn hảo từ di sản bóng rổ thập niên 80, thiết kế sang trọng pha lẫn hiện đại tạo nét cá tính khác biệt."
  },
  {
    id: "sh-10",
    name: "Giầy Sandal Nam Nữ Shondo F6 Sporty Trẻ Trung",
    category: "giay",
    originalPrice: 450000,
    discountedPrice: 320000,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&auto=format&fit=crop&q=80",
    badges: ["Đi Mưa Tốt", "Học Sinh"],
    affiliateUrl: "https://shope.ee/6fKWzJ1Hqp",
    rating: 4.8,
    soldCount: 5600,
    description: "Phần đế cao su chống trơn trượt cực tốt kết hợp quai dù bền chắc sấy khô nhanh, sản phẩm tuyệt vời cho mùa mưa bão."
  },
  {
    id: "sh-11",
    name: "Giầy Loafer Nam Da Bóng Cao Cấp Dr. Martens Adrian",
    category: "giay",
    originalPrice: 4200000,
    discountedPrice: 3100000,
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=600&auto=format&fit=crop&q=80",
    badges: ["Da Bóng", "Huyền Thoại"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.9,
    soldCount: 230,
    description: "Đôi giày lười Loafer cao cấp tua rua cá tính, chất da mịn màng cứng cáp bền bỉ qua năm tháng đặc trưng của thương hiệu Anh."
  },
  {
    id: "sh-12",
    name: "Giầy Thể Thao Nam Biti's Hunter Street Bloomin'",
    category: "giay",
    originalPrice: 1100000,
    discountedPrice: 850000,
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?w=600&auto=format&fit=crop&q=80",
    badges: ["Hàng Việt Nam", "Phá Cách"],
    affiliateUrl: "https://shope.ee/7KZd6gH8u1",
    rating: 4.8,
    soldCount: 1750,
    description: "Sản phẩm Biti's tự hào mang thiết kế mang đậm hơi thở đường phố Việt Nam năng động, chất liệu siêu nhẹ êm chân."
  },

  // --- ÁO SƠ MI (ao-so-mi) ---
  {
    id: "cl-1",
    name: "Áo Sơ Mi Nam Tay Ngắn Lụa Satin Cao Cấp Mềm Mịn",
    category: "ao-so-mi",
    originalPrice: 350000,
    discountedPrice: 189000,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
    badges: ["Mát Mẻ", "Lụa Satin"],
    affiliateUrl: "https://shope.ee/1VbS8aOq7s",
    rating: 4.7,
    soldCount: 4800,
    description: "Chất liệu lụa satin mượt mà thoáng mát, phong cách trẻ trung thời thượng phù hợp diện ngày hè năng động."
  },
  {
    id: "cl-3",
    name: "Áo Sơ Mi Nam Tay Dài Vải Oxford Cotton Cao Cấp",
    category: "ao-so-mi",
    originalPrice: 480000,
    discountedPrice: 299000,
    image: "https://images.unsplash.com/photo-1621072156002-e2fcc103e86e?w=600&auto=format&fit=crop&q=80",
    badges: ["Công Sở", "Chống Nhăn"],
    affiliateUrl: "https://shope.ee/3fR9k7YmQe",
    rating: 4.8,
    soldCount: 2300,
    description: "Chất Oxford dệt nổi thoáng khí, sớ vải mềm mịn lịch sự, phù hợp diện đi làm, đi chơi hay đi tiệc."
  },
  {
    id: "cl-4",
    name: "Áo Sơ Mi Nữ Trắng Công Sở Kiểu Hàn Quốc Sang Trọng",
    category: "ao-so-mi",
    originalPrice: 850000,
    discountedPrice: 520000,
    image: "https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?w=600&auto=format&fit=crop&q=80",
    badges: ["Hàn Quốc", "Thiết Kế"],
    affiliateUrl: "https://shope.ee/4VdA8YmP1x",
    rating: 4.6,
    soldCount: 650,
    description: "Thiết kế cách điệu nhẹ nhàng thanh lịch tôn dáng cực xinh, sớ vải sờ vào êm ái thích hợp mặc cả ngày."
  },
  {
    id: "cl-7",
    name: "Áo Sơ Mi Nam Cổ Tàu Vải Đũi Linen Siêu Mát Rượi",
    category: "ao-so-mi",
    originalPrice: 280000,
    discountedPrice: 169000,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80",
    badges: ["Mùa Hè", "Đũi Linen"],
    affiliateUrl: "https://shope.ee/1VbS8aOq7s",
    rating: 4.7,
    soldCount: 3200,
    description: "Chất đũi tự nhiên nhẹ nhõm, thiết kế cổ tàu thanh lịch phóng khoáng mang lại cảm giác thoải mái nhất."
  },
  {
    id: "cl-8",
    name: "Áo Sơ Mi Flannel Kẻ Caro Unisex Phong Cách Grunge Retro",
    category: "ao-so-mi",
    originalPrice: 390000,
    discountedPrice: 249000,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=600&auto=format&fit=crop&q=80",
    badges: ["Unisex", "Flannel Caro"],
    affiliateUrl: "https://shope.ee/3fR9k7YmQe",
    rating: 4.8,
    soldCount: 1540,
    description: "Phù hợp mặc làm áo khoác ngoài khoe nét bụi bặm cá tính, chất vải nỉ mỏng mềm giữ ấm nhẹ tối ưu."
  },
  {
    id: "cl-9",
    name: "Áo Sơ Mi Nam Họa Tiết Hawaiian Đi Biển Trẻ Trung",
    category: "ao-so-mi",
    originalPrice: 320000,
    discountedPrice: 195000,
    image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=80",
    badges: ["Du Lịch", "Họa Tiết"],
    affiliateUrl: "https://shope.ee/4VdA8YmP1x",
    rating: 4.6,
    soldCount: 2900,
    description: "Họa tiết nhiệt đới rực rỡ tươi mát tôn dáng, phù hợp diện đi du lịch nghỉ dưỡng cùng gia đình bè bạn."
  },
  {
    id: "cl-10",
    name: "Áo Sơ Mi Nữ Kẻ Sọc Xanh Thanh Lịch Thời Trang Hàn Quốc",
    category: "ao-so-mi",
    originalPrice: 450000,
    discountedPrice: 289000,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80",
    badges: ["Trend", "Kẻ Sọc"],
    affiliateUrl: "https://shope.ee/1VbS8aOq7s",
    rating: 4.8,
    soldCount: 1800,
    description: "Form rộng cá tính dễ dàng sơ vin phối cùng quần short hoặc quần jeans mang lại vẻ trẻ trung sành điệu."
  },
  {
    id: "cl-11",
    name: "Áo Sơ Mi Denim Nam Jean Bền Bỉ Bụi Bặm Streetwear",
    category: "ao-so-mi",
    originalPrice: 550000,
    discountedPrice: 359000,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&auto=format&fit=crop&q=80",
    badges: ["Bụi Bặm", "Denim Premium"],
    affiliateUrl: "https://shope.ee/3fR9k7YmQe",
    rating: 4.7,
    soldCount: 920,
    description: "Vải jean denim dày dặn chịu lực tốt, đường may gân nổi phong cách workwear cực ngầu và cá tính mạnh."
  },
  {
    id: "cl-12",
    name: "Áo Sơ Mi Nam Form Rộng Unisex Vải Poplin Trơn Basic",
    category: "ao-so-mi",
    originalPrice: 300000,
    discountedPrice: 179000,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&auto=format&fit=crop&q=80",
    badges: ["Basic", "Vải Poplin"],
    affiliateUrl: "https://shope.ee/4VdA8YmP1x",
    rating: 4.8,
    soldCount: 3990,
    description: "Màu sắc trơn tối giản tinh tế, form rộng chuẩn thời trang đường phố trẻ trung phóng khoáng và thoải mái."
  },
  {
    id: "cl-13",
    name: "Áo Sơ Mi Lụa Nữ Cổ V Sang Chảnh Quyến Rũ Dự Tiệc",
    category: "ao-so-mi",
    originalPrice: 590000,
    discountedPrice: 379000,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&auto=format&fit=crop&q=80",
    badges: ["Quyến Rũ", "Lụa Thượng Hạng"],
    affiliateUrl: "https://shope.ee/1VbS8aOq7s",
    rating: 4.9,
    soldCount: 450,
    description: "Vải lụa cát rủ mềm mại ôm nhẹ bờ vai quyến rũ cực sang trọng, là lựa chọn tuyệt vời cho các buổi tiệc tối quý phái."
  },
  {
    id: "cl-14",
    name: "Áo Sơ Mi Nam Cổ Danton Phong Cách Vintage Lãng Tử",
    category: "ao-so-mi",
    originalPrice: 360000,
    discountedPrice: 220000,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80",
    badges: ["Lãng Tử", "Cổ Danton"],
    affiliateUrl: "https://shope.ee/3fR9k7YmQe",
    rating: 4.7,
    soldCount: 1100,
    description: "Cổ bẻ chữ V lãng tử phóng khoáng, thích hợp diện cùng áo thun bên trong phong cách casual thanh lịch nhẹ nhàng."
  },
  {
    id: "cl-15",
    name: "Áo Sơ Mi Nữ Cổ Peter Pan Hàn Quốc Tiểu Thư Ngọt Ngào",
    category: "ao-so-mi",
    originalPrice: 420000,
    discountedPrice: 265000,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&auto=format&fit=crop&q=80",
    badges: ["Búp Bê", "Đáng Yêu"],
    affiliateUrl: "https://shope.ee/4VdA8YmP1x",
    rating: 4.8,
    soldCount: 1250,
    description: "Kiểu dáng tiểu thư ngọt ngào với phần cổ búp bê Peter Pan viền ren thêu, chất liệu cotton mềm mát thấm mồ hôi."
  },

  // --- QUẦN ÂU (quan-au) ---
  {
    id: "cl-2",
    name: "Quần Âu Nam Ống Côn Hàn Quốc Cao Cấp Co Giãn",
    category: "quan-au",
    originalPrice: 600000,
    discountedPrice: 389000,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80",
    badges: ["Bán Chạy", "Co Giãn"],
    affiliateUrl: "https://shope.ee/2Ar9z7Xm1b",
    rating: 4.8,
    soldCount: 1750,
    description: "Chất liệu vải tuyết mưa cao cấp co giãn tốt, đứng form đứng chuẩn dáng quý ông lịch lãm."
  },
  {
    id: "cl-5",
    name: "Quần Tây Nam Ống Đứng Vải Tuyết Mưa Lịch Lãm",
    category: "quan-au",
    originalPrice: 550000,
    discountedPrice: 349000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
    badges: ["Lịch Lãm", "Chính Hãng"],
    affiliateUrl: "https://shope.ee/2Ar9z7Xm1b",
    rating: 4.9,
    soldCount: 1200,
    description: "Form ống đứng thanh lịch sang trọng, hoàn hảo để phối cùng áo sơ mi công sở hoặc áo thun cao cấp."
  },
  {
    id: "cl-6",
    name: "Quần Âu Nữ Lưng Cao Khóa Kéo Tôn Dáng Công Sở",
    category: "quan-au",
    originalPrice: 520000,
    discountedPrice: 299000,
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&auto=format&fit=crop&q=80",
    badges: ["Tôn Dáng", "Hack Chiều Cao"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.8,
    soldCount: 950,
    description: "Thiết kế cạp cao hack dáng che khuyết điểm hiệu quả, tôn vòng eo thon gọn và chiều dài đôi chân."
  },
  {
    id: "cl-16",
    name: "Quần Âu Nam Baggy Khóa Sườn Thiết Kế Trẻ Trung",
    category: "quan-au",
    originalPrice: 450000,
    discountedPrice: 279000,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80",
    badges: ["Baggy", "Cá Tính"],
    affiliateUrl: "https://shope.ee/2Ar9z7Xm1b",
    rating: 4.7,
    soldCount: 1350,
    description: "Thiết kế khóa sườn độc đáo giấu dây đai, form rộng trên ôm dưới khỏe khoắn năng động và vô cùng thời trang."
  },
  {
    id: "cl-17",
    name: "Quần Tây Nam Cao Cấp Co Giãn 4 Chiều Chống Nhăn",
    category: "quan-au",
    originalPrice: 650000,
    discountedPrice: 410000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
    badges: ["Co Giãn 4 Chiều", "Không Cần Ủi"],
    affiliateUrl: "https://shope.ee/2Ar9z7Xm1b",
    rating: 4.9,
    soldCount: 2100,
    description: "Sợi vải pha spandex cao cấp cho độ đàn hồi đa chiều, giặt máy thoải mái hoàn toàn không lo nhăn nhàu phai màu."
  },
  {
    id: "cl-18",
    name: "Quần Âu Nữ Ống Rộng Culottes Sang Chảnh Cực Tôn Dáng",
    category: "quan-au",
    originalPrice: 480000,
    discountedPrice: 299000,
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&auto=format&fit=crop&q=80",
    badges: ["Ống Rộng Culottes", "Thời Thượng"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.8,
    soldCount: 1620,
    description: "Form ống rộng bay bổng nhẹ nhàng, mặc đi làm kết hợp vest hoặc đi dạo phố mặc croptop đều vô cùng cuốn hút."
  },
  {
    id: "cl-19",
    name: "Quần Tây Nam Xám Tro Classic Slim Fit Lịch Thiệp",
    category: "quan-au",
    originalPrice: 500000,
    discountedPrice: 320000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
    badges: ["Xám Tro Classic", "Slim Fit"],
    affiliateUrl: "https://shope.ee/2Ar9z7Xm1b",
    rating: 4.8,
    soldCount: 880,
    description: "Gam màu xám tro trẻ trung tôn da cực dễ phối đồ, chuẩn dáng Slim Fit vừa vặn gọn gàng và tinh tế."
  },
  {
    id: "cl-20",
    name: "Quần Âu Nam Họa Tiết Kẻ Caro Chìm Sang Trọng Quý Phái",
    category: "quan-au",
    originalPrice: 750000,
    discountedPrice: 489000,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80",
    badges: ["Premium Caro", "Lịch Lãm Quý Tộc"],
    affiliateUrl: "https://shope.ee/2Ar9z7Xm1b",
    rating: 4.9,
    soldCount: 450,
    description: "Các đường kẻ caro chìm tinh xảo khéo léo tạo nét vương giả, chất liệu dệt thoi dày dặn giữ nhiệt form tốt."
  },
  {
    id: "cl-21",
    name: "Quần Tây Nữ Baggy Dáng Lửng Thời Trang Học Sinh Sinh Viên",
    category: "quan-au",
    originalPrice: 320000,
    discountedPrice: 199000,
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&auto=format&fit=crop&q=80",
    badges: ["Dáng Lửng", "Học Đường"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.7,
    soldCount: 2800,
    description: "Ống đứng lửng thoải mái tiện lợi, thích hợp cho việc học tập hằng ngày hay hoạt động ngoài trời năng động."
  },
  {
    id: "cl-22",
    name: "Quần Âu Nam Cạp Cao Gurkha Đậm Chất Cổ Điển Sartorial",
    category: "quan-au",
    originalPrice: 850000,
    discountedPrice: 590000,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&auto=format&fit=crop&q=80",
    badges: ["Sartorial Style", "Gurkha Độc Đáo"],
    affiliateUrl: "https://shope.ee/2Ar9z7Xm1b",
    rating: 4.9,
    soldCount: 310,
    description: "Đai quần thiết kế thắt nút cổ điển Gurkha của sĩ quan Anh, chất liệu dệt khít siêu bền bỉ sang trọng quyến rũ."
  },
  {
    id: "cl-23",
    name: "Quần Âu Nữ Ống Loe Retro Cực Kỳ Tôn Dáng Hack Chân",
    category: "quan-au",
    originalPrice: 580000,
    discountedPrice: 369000,
    image: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=600&auto=format&fit=crop&q=80",
    badges: ["Ống Loe Retro", "Tôn Vòng 3"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.8,
    soldCount: 740,
    description: "Ống loe nhẹ rủ dáng dài phong cách thập niên 90 tôn đường cong hông và giúp bắp chân thon gọn hơn bao giờ hết."
  },
  {
    id: "cl-24",
    name: "Quần Tây Nam Đen Tuyền Cotton Kháng Khuẩn Thoáng Khí",
    category: "quan-au",
    originalPrice: 460000,
    discountedPrice: 289000,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80",
    badges: ["Kháng Khuẩn", "Đen Tuyền Tuyệt Đối"],
    affiliateUrl: "https://shope.ee/2Ar9z7Xm1b",
    rating: 4.8,
    soldCount: 1590,
    description: "Cấu trúc dệt cải tiến giúp kháng mùi kháng khuẩn, sớ vải cotton mát dịu không bí bách cả ngày hè oi nóng."
  },

  // --- PHỤ KIỆN (phu-kien) ---
  {
    id: "ac-1",
    name: "Kính Mát Thời Trang Gentle Monster South Side Unisex",
    category: "phu-kien",
    originalPrice: 950000,
    discountedPrice: 590000,
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80",
    badges: ["Hot Trend", "Chống UV400"],
    affiliateUrl: "https://shope.ee/9Ur8ZaXm1u",
    rating: 4.9,
    soldCount: 1100,
    description: "Gọng nhựa Acetate siêu bền chống chịu va đập tốt, tròng kính chống hoàn toàn tia UV bảo vệ mắt tối ưu."
  },
  {
    id: "ac-2",
    name: "Đồng Hồ Nam Casio G-Shock Thể Thao Đa Năng",
    category: "phu-kien",
    originalPrice: 3200000,
    discountedPrice: 2150000,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=600&auto=format&fit=crop&q=80",
    badges: ["Chống Nước 200m", "Bảo Hành 5 Năm"],
    affiliateUrl: "https://shope.ee/6fKWzJ1Hqp",
    rating: 4.9,
    soldCount: 820,
    description: "Kháng nước 200m vượt trội, chống sốc tuyệt đối, tích hợp đèn LED đôi cực sáng cùng chế độ xem giờ quốc tế tiện lợi."
  },
  {
    id: "ac-3",
    name: "Ví Da Nam Cầm Tay Cao Cấp Saffiano Leather",
    category: "phu-kien",
    originalPrice: 750000,
    discountedPrice: 420000,
    image: "https://images.unsplash.com/photo-1627124118303-624c89432f82?w=600&auto=format&fit=crop&q=80",
    badges: ["Da Thật", "Sang Trọng"],
    affiliateUrl: "https://shope.ee/8Ul9xZaOQx",
    rating: 4.8,
    soldCount: 1400,
    description: "Chất da bò thật xử lý vân Saffiano chống xước nước bền bỉ, đường may tỉ mỉ, thiết kế nhiều ngăn rộng rãi."
  },
  {
    id: "ac-4",
    name: "Túi Xách Nữ Đeo Chéo Da Mềm Phối Khóa Kim Loại Retro",
    category: "phu-kien",
    originalPrice: 650000,
    discountedPrice: 380000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
    badges: ["Minimalist", "Bán Chạy"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.7,
    soldCount: 1850,
    description: "Chất da PU mềm mịn chống thấm nhẹ, form hộp sang trọng phong cách thanh lịch dễ phối đồ diện hằng ngày."
  },
  {
    id: "ac-5",
    name: "Thắt Lưng Nam Da Bò Thật Khóa Tự Động Sang Trọng",
    category: "phu-kien",
    originalPrice: 450000,
    discountedPrice: 280000,
    image: "https://images.unsplash.com/photo-1624222247566-5f82456df3b3?w=600&auto=format&fit=crop&q=80",
    badges: ["Da Bò Thật", "Khóa Tự Động"],
    affiliateUrl: "https://shope.ee/9Ur8ZaXm1u",
    rating: 4.9,
    soldCount: 2200,
    description: "Sợi da thuộc chọn lọc dẻo dai đàn hồi, đầu khóa hợp kim đúc nguyên khối chống xước gỉ sáng bóng nam tính."
  },
  {
    id: "ac-6",
    name: "Đồng Hồ Nữ Daniel Wellington Classic Petite Sành Điệu",
    category: "phu-kien",
    originalPrice: 3800000,
    discountedPrice: 2390000,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=600&auto=format&fit=crop&q=80",
    badges: ["Minimalist", "Rose Gold"],
    affiliateUrl: "https://shope.ee/6fKWzJ1Hqp",
    rating: 4.8,
    soldCount: 650,
    description: "Thiết kế mặt số tối giản siêu mỏng phối dây lưới kim loại màu vàng hồng tinh xảo, nét đẹp kiêu sa quyến rũ."
  },
  {
    id: "ac-7",
    name: "Mũ Lưỡi Trai Unisex MLB New York Yankees Đính Đá",
    category: "phu-kien",
    originalPrice: 850000,
    discountedPrice: 590000,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80",
    badges: ["Yankees Logo", "Hàn Quốc"],
    affiliateUrl: "https://shope.ee/8Ul9xZaOQx",
    rating: 4.9,
    soldCount: 1980,
    description: "Thêu chữ NY đính đá pha lê thủ công lấp lánh nổi bật, gài khóa sau bằng da cao cấp dễ dàng chỉnh size."
  },
  {
    id: "ac-8",
    name: "Vòng Tay Bạc S925 Ý Thiết Kế Khuyên Tròn Đơn Giản",
    category: "phu-kien",
    originalPrice: 350000,
    discountedPrice: 220000,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&auto=format&fit=crop&q=80",
    badges: ["Bạc S925 Ý", "Tinh Tế"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.8,
    soldCount: 3100,
    description: "Được gia công tinh xảo từ bạc Ý cao cấp sáng bóng vĩnh viễn, kiểu dáng trơn thanh lịch phù hợp mọi phong cách."
  },
  {
    id: "ac-9",
    name: "Kính Mát Phi Công Ray-Ban Aviator Classic Huyền Thoại",
    category: "phu-kien",
    originalPrice: 4500000,
    discountedPrice: 2990000,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&auto=format&fit=crop&q=80",
    badges: ["Ray-Ban Mall", "Phi Công"],
    affiliateUrl: "https://shope.ee/9Ur8ZaXm1u",
    rating: 4.9,
    soldCount: 420,
    description: "Sản phẩm kính phi công kinh điển sở hữu tròng thủy tinh cường lực xanh rêu chống chói lóa phân cực tuyệt hảo."
  },
  {
    id: "ac-10",
    name: "Ví Da Nữ Cầm Tay Phong Cách Vintage Da Sáp Thật",
    category: "phu-kien",
    originalPrice: 650000,
    discountedPrice: 390000,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80",
    badges: ["Da Sáp Thật", "Handmade"],
    affiliateUrl: "https://shope.ee/5fRy6F7Z1x",
    rating: 4.7,
    soldCount: 540,
    description: "Chất liệu da sáp tự nhiên bụi bặm có những vết xước mộc độc nhất vô nhị, càng dùng càng lên nước sẫm bóng quyến rũ."
  },
  {
    id: "ac-11",
    name: "Thắt Lưng Nữ Bản Nhỏ Da Thật Mặt Khóa Tròn Xi Vàng",
    category: "phu-kien",
    originalPrice: 300000,
    discountedPrice: 185000,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&auto=format&fit=crop&q=80",
    badges: ["Bản Nhỏ", "Tôn Eo"],
    affiliateUrl: "https://shope.ee/8Ul9xZaOQx",
    rating: 4.8,
    soldCount: 2200,
    description: "Bản nhỏ tinh tế rộng 1.5cm lý tưởng tôn vòng eo thon gọn quyến rũ khi phối kèm đầm liền hoặc quần âu tây lưng cao."
  },
  {
    id: "ac-12",
    name: "Đồng Hồ Thể Thao Thông Minh Xiaomi Redmi Watch Active 4",
    category: "phu-kien",
    originalPrice: 1290000,
    discountedPrice: 890000,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600&auto=format&fit=crop&q=80",
    badges: ["Sức Khỏe", "Redmi Mall"],
    affiliateUrl: "https://shope.ee/6fKWzJ1Hqp",
    rating: 4.8,
    soldCount: 3700,
    description: "Màn hình IPS siêu sáng nét, theo dõi nhịp tim 24h liên tục, đo lượng oxy trong máu SpO2, pin trâu đến 12 ngày sử dụng."
  }
];

export const WEBSITE_CONFIG = {
  title: "The 1985 - Thiên Đường Săn Deal Giầy, Quần Áo & Phụ Kiện Chính Hãng",
  metaDescription: "Trang tuyển chọn các sản phẩm thời trang, giầy dép và phụ kiện hot nhất đang giảm sâu trên Shopee. 100% chính hãng uy tín, cập nhật liên tục mỗi giờ.",
  hero: {
    badgeText: "Săn Sale Tiết Kiệm - Link Shopee Chính Hãng",
    title: "THE 1985 AFFILIATE HUB",
    subTitle: "Nâng Tầm Phong Cách, Tiết Kiệm Tối Đa",
    description: "Kênh mua sắm và săn lùng các deal hời về Giầy Sneaker, Áo Sơ Mi Cao Cấp, Quần Âu Lịch Lãm và Phụ Kiện hàng hiệu. 100% sản phẩm được dẫn về cửa hàng phân phối chính hãng Shopee Mall đáng tin cậy nhất.",
    ctaText: "Khám Phá Bộ Sưu Tập"
  },
  reasons: [
    {
      id: "r1",
      title: "Kiểm Định Chất Lượng",
      description: "Đội ngũ tuyển chọn cam kết chỉ đề xuất các gian hàng Shopee Mall phân phối sản phẩm chính hãng, uy tín.",
      icon: "CheckCircle"
    },
    {
      id: "r2",
      title: "Giá Trị Thật - Deal Thật",
      description: "Theo dõi biến động giá liên tục để đảm bảo sản phẩm đề xuất đang được chiết khấu sâu thật sự, loại bỏ ảo giá.",
      icon: "ShieldAlert"
    },
    {
      id: "r3",
      title: "An Toàn Tuyệt Đối",
      description: "Trải nghiệm duyệt nhanh không quảng cáo phiền toái, không yêu cầu điền thông tin cá nhân hay đăng nhập mật khẩu.",
      icon: "Award"
    },
    {
      id: "r4",
      title: "Cập Nhật Mỗi Giờ",
      description: "Hệ thống săn link tự động liên tục cập nhật thêm các deal mới, mã giảm giá tốt nhất để bạn tối ưu ngân sách.",
      icon: "Clock"
    }
  ],
  footer: {
    disclaimer: "The 1985 là cổng thông tin tổng hợp deal thời trang và phụ kiện chất lượng cao. Chúng tôi vận hành theo mô hình tiếp thị liên kết (Affiliate Marketing) tới Shopee. Chúng tôi cam kết tuyệt đối không thu phí, không bán hàng trực tiếp hay lưu trữ thông tin nhạy cảm của người dùng.",
    socials: [
      { name: "Facebook Page", url: "https://www.facebook.com/share/1EWKpUMynq/", icon: "Facebook" }
    ]
  }
};
