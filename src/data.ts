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

export const PRODUCTS: Product[] = [];

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
