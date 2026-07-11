import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Home,
  Footprints,
  Shirt,
  Watch,
  Search,
  Star,
  ShoppingBag,
  ExternalLink,
  CheckCircle,
  ShieldAlert,
  Award,
  Clock,
  ArrowUp,
  Flame,
  Check,
  ChevronDown,
  X,
  AlertCircle,
  Info,
  ArrowRight,
  Sparkles,
  Facebook,
  Mail
} from "lucide-react";
import { PRODUCTS, CATEGORIES, WEBSITE_CONFIG, Product } from "./data";

function The1985Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 120" 
      className={className}
      fill="currentColor"
    >
      {/* Gentleman Silhouette Group */}
      <g>
        {/* Hat Crown - Fedora style with creased top */}
        <path d="M38 18 C37 13, 44 9, 50 11 C56 9, 63 13, 62 18 C61 18, 39 18, 38 18 Z" />
        {/* Hat Ribbon / Band */}
        <path d="M38 18 C42 17.2, 58 17.2, 62 18 L62 19.5 C58 18.7, 42 18.7, 38 19.5 Z" fill="#EE4D2D" />
        {/* Hat Brim */}
        <path d="M28 20.5 C36 19, 64 19, 72 20.5 C75 21, 68 22.5, 50 22.5 C32 22.5, 25 21, 28 20.5 Z" />

        {/* Head and Shadowed Face Profile */}
        <path d="M46 22.5 C46 27, 49 31, 54 31 C56 31, 56 27, 56 22.5 Z" />
        {/* Chin & Jaw white highlight */}
        <path d="M49 28 C51 30.5, 53 30.5, 54 28" fill="none" stroke="white" strokeWidth="0.75" />

        {/* Raised Right Arm holding/adjusting Hat (Left side of viewer) */}
        {/* Hand touching brim */}
        <path d="M34 16 C34 13, 38 13, 39 16 C40 18, 37 19, 36 21.5 C35 20, 34 18, 34 16 Z" />
        {/* Arm path */}
        <path d="M43 31 C38 29, 33 24, 35 20 L37 21 C36 24, 40 28, 44 29 Z" />

        {/* Left Arm in Pocket (Right side of viewer) */}
        {/* Sleeve curving from shoulder X=60 down to elbow X=67, then to trouser pocket X=56 */}
        <path d="M59 31 C63 35, 68 42, 67 48 C66 50, 61 52, 57 53 C56 53, 56 50, 58 50 C61 49, 64 47, 63 45 C63 41, 60 36, 56 33 Z" />

        {/* Sharp Suit Torso (Jacket, Vest, Tie) */}
        {/* Clean white collar opening */}
        <polygon points="46 31, 54 31, 50 36" fill="white" />
        {/* Red tie */}
        <polygon points="49.5 35, 50.5 35, 51 46, 50 49, 49 46" fill="#EE4D2D" />
        
        {/* Suit Vest */}
        <path d="M46 32 C48 31, 52 31, 54 32 L53 54 L50 57 L47 54 Z" />
        {/* Tiny white vest buttons */}
        <circle cx="49" cy="41" r="0.6" fill="white" />
        <circle cx="51" cy="41" r="0.6" fill="white" />
        <circle cx="49" cy="46" r="0.6" fill="white" />
        <circle cx="51" cy="46" r="0.6" fill="white" />
        <circle cx="49" cy="51" r="0.6" fill="white" />
        <circle cx="51" cy="51" r="0.6" fill="white" />

        {/* Left Jacket Lapel */}
        <path d="M40 31 L47 32 L45 46 L37 41 Z" />
        {/* Right Jacket Lapel */}
        <path d="M60 31 L53 32 L55 46 L63 41 Z" />

        {/* Legs / Trousers - Crossed Posture */}
        {/* Straight leg (Right leg of gentleman, Left side of viewer) */}
        <path d="M47 54 L49 97 L52 97 L50 54 Z" />
        {/* Crossed leg in front (Left leg of gentleman, Right side of viewer) */}
        {/* Hips to knee bent slightly outward (left/X=41), crossing over straight leg to ankle X=47 */}
        <path d="M53 54 C50 59, 42 68, 41 74 C40 80, 43 87, 47 95 L49 95 C45 88, 42 81, 43 75 C44 69, 51 60, 54 54 Z" />

        {/* Shoes */}
        {/* Straight leg shoe (Flat on ground) */}
        <path d="M49 97 L53 98 L51 100 L48 99 Z" />
        {/* Crossed leg shoe (Angled tip-toe touching ground) */}
        <path d="M47 95 L45 98 L47 99 L49 96 Z" />

        {/* Elegant horizontal ground line */}
        <line x1="20" y1="102" x2="80" y2="102" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Centered Serif 1985 text matching the logo image */}
      <text 
        x="50" 
        y="114" 
        textAnchor="middle" 
        className="font-serif font-bold text-[12px] tracking-[0.05em]"
        fill="currentColor"
        style={{ fontFamily: '"Playfair Display", "Cormorant Garamond", Georgia, serif' }}
      >
        1985
      </text>
    </svg>
  );
}

// CSV and Google Sheets data synchronization helpers
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      result.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

function parseGoogleSheetsCSV(csvText: string): Product[] {
  const lines = csvText.split(/\r?\n/);
  if (lines.length <= 1) return [];

  const parsedProducts: Product[] = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const cells = parseCSVLine(line);
    if (cells.length < 4) continue;

    const rawCategory = cells[0] || "";
    const name = cells[1] || "";
    const affiliateUrl = cells[2] || "";
    const image = cells[3] || "";
    const rawOriginalPrice = cells[4] || "";
    const rawDiscountedPrice = cells[5] || "";
    const rawRating = cells[6] || "";
    const rawSoldCount = cells[7] || "";

    if (!name || !affiliateUrl) continue;

    // Standardize Category matching
    let category: "giay" | "ao-so-mi" | "quan-au" | "phu-kien" = "giay";
    const catLower = rawCategory.toLowerCase();
    if (catLower.includes("giày") || catLower.includes("giầy") || catLower.includes("giay")) {
      category = "giay";
    } else if (catLower.includes("áo") || catLower.includes("ao") || catLower.includes("sơ mi") || catLower.includes("somi")) {
      category = "ao-so-mi";
    } else if (catLower.includes("quần") || catLower.includes("quan") || catLower.includes("âu") || catLower.includes("au") || catLower.includes("tây") || catLower.includes("tay")) {
      category = "quan-au";
    } else if (catLower.includes("phụ") || catLower.includes("phu") || catLower.includes("kiện") || catLower.includes("kien") || catLower.includes("đồng hồ") || catLower.includes("kính")) {
      category = "phu-kien";
    }

    // Standardize prices parsing
    const originalPrice = parseInt(rawOriginalPrice.replace(/\D/g, "")) || 500000;
    const discountedPrice = parseInt(rawDiscountedPrice.replace(/\D/g, "")) || originalPrice;

    // Standardize rating
    const rating = parseFloat(rawRating) || 4.8;

    // Standardize sold count
    let soldCount = 0;
    const soldLower = rawSoldCount.toLowerCase().trim();
    if (soldLower.endsWith("k+")) {
      soldCount = (parseFloat(soldLower.replace("k+", "")) || 0) * 1000;
    } else if (soldLower.endsWith("k")) {
      soldCount = (parseFloat(soldLower.replace("k", "")) || 0) * 1000;
    } else if (soldLower.endsWith("+")) {
      soldCount = parseInt(soldLower.replace("+", "").replace(/\D/g, "")) || 0;
    } else {
      soldCount = parseInt(soldLower.replace(/\D/g, "")) || 0;
    }

    // Set high-end badges
    const badges: string[] = ["Shopee Mall"];
    if (rating >= 4.9) {
      badges.push("Bán Chạy");
    } else {
      badges.push("Đề Xuất");
    }

    parsedProducts.push({
      id: `gs-${i}-${encodeURIComponent(name.slice(0, 10))}`,
      name,
      category,
      originalPrice,
      discountedPrice,
      image: image || "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80",
      badges,
      affiliateUrl,
      rating,
      soldCount,
      description: `Sản phẩm cao cấp được cập nhật tự động trực tuyến từ Shopee Mall hằng ngày.`
    });
  }

  return parsedProducts;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<"home" | "giay" | "ao-so-mi" | "quan-au" | "phu-kien">("home");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("default");
  const [activeRedirectProduct, setActiveRedirectProduct] = useState<Product | null>(null);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Monitor scroll for Back-to-Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync products from Google Sheets on mount
  useEffect(() => {
    const fetchGoogleSheetsData = async () => {
      setIsSyncing(true);
      try {
        const response = await fetch(
          "https://docs.google.com/spreadsheets/d/e/2PACX-1vQO6aRnMnXdTt8KkisrtgEQnMSyYJhS5KTfkfbpipt1J9QFvhxxkV0eqVZSB0q8EwsMNhgguuU1CAGM/pub?gid=0&single=true&output=csv"
        );
        if (!response.ok) throw new Error("Không thể tải dữ liệu Google Sheets");
        const csvText = await response.text();
        const sheetProducts = parseGoogleSheetsCSV(csvText);
        
        if (sheetProducts.length > 0) {
          // Merge products: prepend new sheet products, remove static ones with the same name
          const merged: Product[] = [...sheetProducts];
          PRODUCTS.forEach(staticProd => {
            const isDuplicate = sheetProducts.some(
              sp => sp.name.toLowerCase() === staticProd.name.toLowerCase()
            );
            if (!isDuplicate) {
              merged.push(staticProd);
            }
          });
          setProducts(merged);
        }
      } catch (error) {
        console.error("Lỗi đồng bộ dữ liệu Google Sheets:", error);
      } finally {
        setIsSyncing(false);
      }
    };

    fetchGoogleSheetsData();
  }, []);

  // Format price helper
  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  // Calculate discount percent
  const calcDiscount = (original: number, discounted: number): number => {
    return Math.round(((original - discounted) / original) * 100);
  };

  // Handle CTA redirect flow
  const handleCtaClick = (product: Product) => {
    setActiveRedirectProduct(product);
    window.open(product.affiliateUrl, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setActiveRedirectProduct(null);
    }, 4000);
  };

  // Copy link helper
  const handleCopyLink = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(product.affiliateUrl);
    setCopiedId(product.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Handle category collection card click from homepage
  const handleSelectCollection = (tabName: "giay" | "ao-so-mi" | "quan-au" | "phu-kien") => {
    setActiveTab(tabName);
    setSearchQuery("");
    setSortBy("default");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSortBy("default");
  };

  // Filter products for the active view/tab
  const filteredAndSortedProducts = useMemo(() => {
    // If we're on Home page, we might just show featured or everything
    // But for dedicated category tabs, we filter strictly by category
    let list = [...products];
    if (activeTab !== "home") {
      list = list.filter((p) => p.category === activeTab);
    }

    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.badges.some((b) => b.toLowerCase().includes(q))
      );
    }

    // Sort products
    if (sortBy === "price-asc") {
      list.sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortBy === "price-desc") {
      list.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else if (sortBy === "discount-desc") {
      list.sort((a, b) => {
        const discA = calcDiscount(a.originalPrice, a.discountedPrice);
        const discB = calcDiscount(b.originalPrice, b.discountedPrice);
        return discB - discA;
      });
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [products, activeTab, searchQuery, sortBy]);

  // Handpicked hot items for homepage highlights (at least 12 items)
  const featuredProducts = useMemo(() => {
    const res: Product[] = [];
    
    // 1. Prioritize Google Sheets products at the front of the homepage highlights section
    const sheetProds = products.filter(p => p.id.startsWith("gs-"));
    sheetProds.forEach(p => res.push(p));

    // 2. Add static featured items to fill up to at least 12 items
    const shoesIds = ["sh-1", "sh-2", "sh-3"];
    const shirtIds = ["cl-1", "cl-3", "cl-4"];
    const trousersIds = ["cl-2", "cl-5", "cl-6"];
    const accessoryIds = ["ac-1", "ac-2", "ac-3"];

    const targetIds = [...shoesIds, ...shirtIds, ...trousersIds, ...accessoryIds];
    targetIds.forEach(id => {
      const p = products.find(x => x.id === id);
      if (p && !res.some(existing => existing.name.toLowerCase() === p.name.toLowerCase())) {
        res.push(p);
      }
    });

    // 3. Fallback to fill up to 12 items from products list if still under 12
    if (res.length < 12) {
      products.forEach(p => {
        if (res.length < 12 && !res.some(existing => existing.id === p.id)) {
          res.push(p);
        }
      });
    }

    return res;
  }, [products]);

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-slate-800 selection:bg-[#EE4D2D]/10 selection:text-[#EE4D2D] font-sans antialiased">
      
      {/* Top Professional Security Banner */}
      <div className="bg-slate-900 text-white text-[11px] py-2 px-4 font-medium text-center border-b border-slate-800 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-6">
          <a 
            href="https://www.facebook.com/share/1EWKpUMynq/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#EE4D2D] transition-colors"
          >
            <Facebook className="w-3.5 h-3.5 text-[#EE4D2D]" />
            Liên hệ FB
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <a 
            href="mailto:ntnhan2505@gmail.com"
            className="flex items-center gap-1.5 text-slate-300 hover:text-[#EE4D2D] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#EE4D2D]" />
            Liên hệ email: ntnhan2505@gmail.com
          </a>
          <span className="hidden sm:inline text-slate-700">|</span>
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className={`w-1.5 h-1.5 rounded-full inline-block ${isSyncing ? "bg-amber-400 animate-pulse" : "bg-emerald-500 animate-pulse"}`}></span>
            <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
              {isSyncing ? "Đang đồng bộ Sheets..." : "Đồng bộ Sheets: Live"}
            </span>
          </div>
        </div>
      </div>

      {/* Main E-Commerce Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-xs z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo Brand */}
          <button 
            onClick={() => { setActiveTab("home"); resetFilters(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 text-left cursor-pointer group"
          >
            <div className="w-11 h-11 sm:w-14 sm:h-14 bg-slate-50 border border-slate-200/80 rounded-full flex items-center justify-center p-1.5 shadow-xs group-hover:scale-105 group-hover:border-orange-200 group-hover:bg-orange-50/20 transition-all duration-300 shrink-0">
              <The1985Logo className="w-9 h-9 sm:w-12 sm:h-12 text-slate-950" />
            </div>
            <div className="flex flex-col pl-0.5">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-widest text-slate-900 leading-none uppercase">
                THE <span className="text-[#EE4D2D] font-extrabold">1985</span>
              </span>
              <div className="h-[1px] bg-gradient-to-r from-[#EE4D2D]/60 via-slate-200 to-transparent my-1 w-20 sm:w-28"></div>
              <span className="text-[8px] sm:text-[9.5px] text-slate-500 font-semibold tracking-[0.22em] uppercase leading-none">
                Premium Affiliate
              </span>
            </div>
          </button>

          {/* Navigation Menu requested by User: Trang chủ, Giày, Áo sơ mi, Quần âu, Phụ kiện */}
          <nav className="flex items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 text-xs sm:text-sm font-semibold text-slate-600">
            <button
              onClick={() => { setActiveTab("home"); resetFilters(); }}
              className={`px-2 sm:px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === "home" 
                  ? "bg-slate-100 text-slate-950 font-bold" 
                  : "hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Trang Chủ
            </button>
            <button
              onClick={() => { setActiveTab("giay"); resetFilters(); }}
              className={`px-2 sm:px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === "giay" 
                  ? "bg-slate-100 text-[#EE4D2D] font-bold" 
                  : "hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Giầy
            </button>
            <button
              onClick={() => { setActiveTab("ao-so-mi"); resetFilters(); }}
              className={`px-2 sm:px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === "ao-so-mi" 
                  ? "bg-slate-100 text-[#EE4D2D] font-bold" 
                  : "hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Áo Sơ Mi
            </button>
            <button
              onClick={() => { setActiveTab("quan-au"); resetFilters(); }}
              className={`px-2 sm:px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === "quan-au" 
                  ? "bg-slate-100 text-[#EE4D2D] font-bold" 
                  : "hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Quần Âu
            </button>
            <button
              onClick={() => { setActiveTab("phu-kien"); resetFilters(); }}
              className={`px-2 sm:px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === "phu-kien" 
                  ? "bg-slate-100 text-[#EE4D2D] font-bold" 
                  : "hover:text-slate-950 hover:bg-slate-50"
              }`}
            >
              Phụ Kiện
            </button>
          </nav>

          {/* Extra utility badges */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-100 text-[#EE4D2D] text-[10px] font-bold px-3 py-1.5 rounded-full shadow-2xs">
              <span className="w-1.5 h-1.5 bg-[#EE4D2D] rounded-full animate-pulse inline-block"></span>
              DEAL MỚI MỖI GIỜ
            </div>
          </div>

        </div>
      </header>

      {/* Main Content Sections switcher depending on Active Tab */}
      <main className="pb-16">
        
        {/* TAB 1: TRANG CHỦ (Home page view) */}
        {activeTab === "home" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Minimal High-End Fashion Slogan Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center min-h-[340px] sm:min-h-[420px] shadow-sm">
                
                {/* Background layout effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950/80 z-0"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(238,77,45,0.15),transparent_45%)] z-0"></div>
                <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:block opacity-75 z-0">
                  <img 
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=80" 
                    alt="Premium Fashion"
                    className="w-full h-full object-cover object-center mix-blend-luminosity brightness-75"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="max-w-xl space-y-5 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                    <Flame className="w-3.5 h-3.5 text-[#EE4D2D] fill-[#EE4D2D]" />
                    <span>Bộ Sưu Tập Xu Hướng 2026</span>
                  </div>
                  <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight uppercase">
                    Nâng Tầm <br/>
                    <span className="text-[#EE4D2D]">Phong Cách</span> Của Bạn
                  </h1>
                  <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-md">
                    Tuyển chọn các mặt hàng Giày, Quần áo và Phụ kiện chính hiệu có đánh giá cao nhất trên Shopee Mall. Cam kết giá trị thật, loại bỏ hoàn toàn chiêu trò tăng giá ảo.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <button
                      onClick={() => handleSelectCollection("giay")}
                      className="px-5 py-2.5 bg-[#EE4D2D] hover:bg-orange-600 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-lg shadow-md shadow-orange-500/10 transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      Săn Deal Ngay
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <a
                      href="#reasons"
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-semibold text-xs sm:text-sm rounded-lg transition-all"
                    >
                      Tại sao chọn chúng tôi?
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Collection Navigation Cards (Giầy, Quần Áo, Phụ Kiện) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
              <div className="space-y-4 mb-8">
                <h2 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-[#EE4D2D] rounded-full inline-block"></span>
                  Khám phá các danh mục thời trang
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Lựa chọn phân khúc sản phẩm bạn quan tâm để xem tất cả deal được cập nhật mới nhất.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Giầy Card */}
                <button
                  onClick={() => handleSelectCollection("giay")}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-xs border border-slate-200/60 text-left transition-all hover:shadow-md hover:border-orange-200 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80"
                    alt="Giầy"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <div className="p-1 w-8 h-8 rounded-lg bg-[#EE4D2D] flex items-center justify-center">
                      <Footprints className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg">Bộ Sưu Tập Giầy</h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1">Sneakers, giầy chạy bộ chính hãng</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EE4D2D] pt-1">
                      Xem chi tiết <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>

                {/* Áo Sơ Mi Card */}
                <button
                  onClick={() => handleSelectCollection("ao-so-mi")}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-xs border border-slate-200/60 text-left transition-all hover:shadow-md hover:border-orange-200 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80"
                    alt="Áo sơ mi"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <div className="p-1 w-8 h-8 rounded-lg bg-[#EE4D2D] flex items-center justify-center">
                      <Shirt className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg">Áo Sơ Mi Lịch Lãm</h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1">Sơ mi Oxford, sơ mi lụa tơ tằm</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EE4D2D] pt-1">
                      Xem chi tiết <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>

                {/* Quần Âu Card */}
                <button
                  onClick={() => handleSelectCollection("quan-au")}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-xs border border-slate-200/60 text-left transition-all hover:shadow-md hover:border-orange-200 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&auto=format&fit=crop&q=80"
                    alt="Quần âu"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <div className="p-1 w-8 h-8 rounded-lg bg-[#EE4D2D] flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg">Quần Âu Công Sở</h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1">Quần tây ống đứng, quần dáng côn ôm chân</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EE4D2D] pt-1">
                      Xem chi tiết <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>

                {/* Phụ Kiện Card */}
                <button
                  onClick={() => handleSelectCollection("phu-kien")}
                  className="group relative h-64 rounded-2xl overflow-hidden shadow-xs border border-slate-200/60 text-left transition-all hover:shadow-md hover:border-orange-200 cursor-pointer"
                >
                  <img
                    src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&auto=format&fit=crop&q=80"
                    alt="Phụ kiện"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                    <div className="p-1 w-8 h-8 rounded-lg bg-[#EE4D2D] flex items-center justify-center">
                      <Watch className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-lg">Phụ Kiện Cao Cấp</h3>
                    <p className="text-[11px] text-slate-300 line-clamp-1">Đồng hồ Casio G-Shock, ví da Saffiano</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#EE4D2D] pt-1">
                      Xem chi tiết <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </button>

              </div>
            </section>

            {/* Curated Best Sellers Grid */}
            <section className="bg-slate-50 border-y border-slate-200/60 py-12 sm:py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
                  <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                    🔥 Đề Xuất Hot Nhất Hôm Nay
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    Sản phẩm tiêu biểu từ mỗi chuyên mục, được lọc dựa trên phản hồi xuất sắc và doanh số dẫn đầu tại Shopee.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
                  {featuredProducts.map((product) => {
                    const discountPercent = calcDiscount(product.originalPrice, product.discountedPrice);
                    return (
                      <div 
                        key={product.id}
                        className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-xs hover:shadow-md hover:border-orange-200 transition-all flex flex-col group"
                      >
                        <div className="relative aspect-square overflow-hidden bg-slate-50">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                            <span className="bg-[#EE4D2D] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-md flex items-center gap-0.5 shadow-xs">
                              <Flame className="w-2.5 h-2.5 fill-white text-white" />
                              Best Seller
                            </span>
                          </div>
                          <div className="absolute top-2.5 right-2.5 bg-amber-400 text-slate-950 px-1.5 py-1 rounded-xl font-display font-black text-[10px] border border-white">
                            -{discountPercent}%
                          </div>
                          <div className="absolute bottom-2.5 left-2.5 bg-white/95 text-[9px] font-bold text-slate-600 px-2.5 py-0.5 rounded-md border border-slate-150">
                            {product.category === "giay" ? "Giày dép" : product.category === "quan-ao" ? "Quần áo" : "Phụ kiện"}
                          </div>
                        </div>

                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <div className="flex items-center gap-0.5 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded-md text-[10px] font-bold border border-amber-100">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                <span>{product.rating}</span>
                              </div>
                              <span className="text-[11px] text-slate-400 font-bold">
                                • Đã bán {product.soldCount.toLocaleString("vi-VN")}+
                              </span>
                            </div>
                            <h3 className="font-display font-bold text-slate-900 group-hover:text-[#EE4D2D] transition-colors text-sm line-clamp-1">
                              {product.name}
                            </h3>
                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                              {product.description}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-100 space-y-3">
                            <div className="flex items-baseline justify-between">
                              <div>
                                <span className="text-[10px] text-slate-400 line-through">
                                  {formatPrice(product.originalPrice)}
                                </span>
                                <p className="font-display font-black text-base text-[#EE4D2D] leading-none">
                                  {formatPrice(product.discountedPrice)}
                                </p>
                              </div>
                              <span className="text-[9px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded border border-emerald-100/50">
                                Tiết kiệm {formatPrice(product.originalPrice - product.discountedPrice)}
                              </span>
                            </div>

                            <button
                              onClick={() => handleCtaClick(product)}
                              className="w-full py-2.5 bg-[#EE4D2D] hover:bg-orange-600 active:scale-95 text-white font-bold text-xs rounded-xl shadow-md shadow-orange-500/10 flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <span>Mua ngay qua Shopee</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="text-center mt-10">
                  <span className="text-xs text-slate-500 font-medium block mb-3">Bạn muốn tìm kiếm nhiều hơn?</span>
                  <div className="flex flex-wrap justify-center gap-3">
                    <button
                      onClick={() => handleSelectCollection("giay")}
                      className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer"
                    >
                      Bộ sưu tập Giầy
                    </button>
                    <button
                      onClick={() => handleSelectCollection("ao-so-mi")}
                      className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer"
                    >
                      Bộ sưu tập Áo Sơ Mi
                    </button>
                    <button
                      onClick={() => handleSelectCollection("quan-au")}
                      className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer"
                    >
                      Bộ sưu tập Quần Âu
                    </button>
                    <button
                      onClick={() => handleSelectCollection("phu-kien")}
                      className="px-4 py-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-bold rounded-lg transition-all cursor-pointer"
                    >
                      Bộ sưu tập Phụ kiện
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* Clean Security Guarantees section (Lý do tin cậy) */}
            <section id="reasons" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
              <div className="text-center max-w-3xl mx-auto space-y-2">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  🤝 Cam Kết Vàng Về Độ Tin Cậy
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Chúng tôi xây dựng hệ thống này dựa trên sự minh bạch tuyệt đối, hỗ trợ cộng đồng tìm kiếm sản phẩm đích thực không qua trung gian.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {WEBSITE_CONFIG.reasons.map((item) => {
                  let iconElement = <CheckCircle className="w-5 h-5" />;
                  let bgCol = "bg-emerald-50 border-emerald-100 text-emerald-600";
                  if (item.id === "r2") {
                    iconElement = <ShieldAlert className="w-5 h-5" />;
                    bgCol = "bg-amber-50 border-amber-100 text-amber-600";
                  } else if (item.id === "r3") {
                    iconElement = <Award className="w-5 h-5" />;
                    bgCol = "bg-orange-50 border-orange-100 text-[#EE4D2D]";
                  } else if (item.id === "r4") {
                    iconElement = <Clock className="w-5 h-5" />;
                    bgCol = "bg-blue-50 border-blue-100 text-blue-600";
                  }

                  return (
                    <div 
                      key={item.id}
                      className="p-5 bg-white border border-slate-200/60 rounded-xl space-y-3 hover:shadow-xs transition-shadow"
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${bgCol}`}>
                        {iconElement}
                      </div>
                      <h3 className="font-display font-bold text-slate-950 text-sm sm:text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          </motion.div>
        )}

        {/* TAB 2, 3, 4: PRODUCT PAGES (Shoes, Clothing, Accessories collection views) */}
        {activeTab !== "home" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 space-y-8"
          >
            {/* Header of dynamic page */}
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] text-slate-600 font-bold uppercase tracking-wider">
                {activeTab === "giay" ? (
                  <>
                    <Footprints className="w-3.5 h-3.5 text-[#EE4D2D]" />
                    <span>Bộ Sưu Tập Giầy Sneaker</span>
                  </>
                ) : activeTab === "ao-so-mi" ? (
                  <>
                    <Shirt className="w-3.5 h-3.5 text-[#EE4D2D]" />
                    <span>Bộ Sưu Tập Áo Sơ Mi Lịch Lãm</span>
                  </>
                ) : activeTab === "quan-au" ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 text-[#EE4D2D]" />
                    <span>Bộ Sưu Tập Quần Âu Công Sở</span>
                  </>
                ) : (
                  <>
                    <Watch className="w-3.5 h-3.5 text-[#EE4D2D]" />
                    <span>Bộ Sưu Tập Phụ Kiện Cao Cấp</span>
                  </>
                )}
              </div>
              
              <h1 className="font-display font-black text-2xl sm:text-4xl text-slate-950 uppercase tracking-tight">
                {CATEGORIES.find(c => c.id === activeTab)?.name}
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-medium">
                {CATEGORIES.find(c => c.id === activeTab)?.description}. Click "Mua ngay qua Shopee" để xem shop phân phối chính hãng uy tín nhất với giá sập sàn.
              </p>
            </div>

            {/* Search, Sort Filters */}
            <div className="bg-white rounded-xl p-4 shadow-2xs border border-slate-200/50 flex flex-col md:flex-row gap-3.5 items-center justify-between">
              
              {/* Search text box */}
              <div className="relative w-full md:max-w-lg">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Nhập tên sản phẩm, thương hiệu cần tìm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-[#EE4D2D]/50 focus:bg-white focus:ring-4 focus:ring-orange-500/5 transition-all text-xs sm:text-sm font-medium"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-200"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative w-full md:w-64">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full pl-4 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold focus:outline-none focus:border-[#EE4D2D]/50 focus:bg-white focus:ring-4 focus:ring-orange-500/5 transition-all text-xs sm:text-sm appearance-none cursor-pointer"
                >
                  <option value="default">Sắp xếp: Mặc định</option>
                  <option value="price-asc">Giá: Thấp đến Cao</option>
                  <option value="price-desc">Giá: Cao đến Thấp</option>
                  <option value="discount-desc">Giảm giá nhiều nhất (%)</option>
                  <option value="rating">Đánh giá tốt nhất</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 pointer-events-none" />
              </div>

            </div>

            {/* Active search filter details feedback */}
            {(searchQuery !== "" || sortBy !== "default") && (
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 bg-white p-3 rounded-lg border border-slate-200/50">
                <span className="font-bold text-slate-400">Đang lọc:</span>
                {searchQuery !== "" && (
                  <span className="inline-flex items-center gap-1 bg-slate-150 text-slate-800 px-2.5 py-0.5 rounded-md font-semibold text-[11px] border border-slate-200">
                    Từ khóa: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="text-slate-400 hover:text-slate-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                {sortBy !== "default" && (
                  <span className="inline-flex items-center gap-1 bg-slate-150 text-slate-800 px-2.5 py-0.5 rounded-md font-semibold text-[11px] border border-slate-200">
                    Sắp xếp: {
                      sortBy === "price-asc" ? "Giá tăng dần" :
                      sortBy === "price-desc" ? "Giá giảm dần" :
                      sortBy === "discount-desc" ? "Giảm giá (%) lớn nhất" : "Đánh giá cao nhất"
                    }
                    <button onClick={() => setSortBy("default")} className="text-slate-400 hover:text-slate-600">
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                )}
                <button
                  onClick={resetFilters}
                  className="text-[#EE4D2D] hover:underline font-bold ml-auto"
                >
                  Xóa bộ lọc
                </button>
              </div>
            )}

            {/* Product Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredAndSortedProducts.length > 0 ? (
                  filteredAndSortedProducts.map((product) => {
                    const discountPercent = calcDiscount(product.originalPrice, product.discountedPrice);
                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        key={product.id}
                        className="bg-white rounded-xl overflow-hidden border border-slate-200/50 shadow-2xs hover:shadow-md hover:border-orange-200 hover:-translate-y-1 transition-all duration-300 flex flex-col group"
                      >
                        {/* Image stage */}
                        <div className="relative aspect-square overflow-hidden bg-slate-50">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1">
                            <span className="bg-[#EE4D2D] text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded shadow-sm">
                              Mall
                            </span>
                            {product.badges.map((badge, idx) => (
                              <span 
                                key={idx} 
                                className="bg-slate-900/80 text-white backdrop-blur-xs text-[9px] font-bold px-2 py-0.5 rounded shadow-sm"
                              >
                                {badge}
                              </span>
                            ))}
                          </div>
                          
                          <div className="absolute top-2.5 right-2.5 bg-amber-400 text-slate-950 px-1.5 py-1 rounded-xl font-display font-black text-[11px] border border-white shadow-xs">
                            -{discountPercent}%
                          </div>
                        </div>

                        {/* Text and prices */}
                        <div className="p-4 flex-1 flex flex-col justify-between">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5">
                              <div className="flex items-center gap-0.5 bg-amber-50 text-amber-700 px-1.5 py-0.5 rounded text-[10px] font-bold border border-amber-200/40">
                                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                                <span>{product.rating}</span>
                              </div>
                              <span className="text-[11px] text-slate-400 font-semibold">
                                • Đã bán {product.soldCount.toLocaleString("vi-VN")}+
                              </span>
                            </div>
                            <h3 className="font-display font-bold text-slate-900 group-hover:text-[#EE4D2D] transition-colors text-sm sm:text-base line-clamp-2 leading-snug">
                              {product.name}
                            </h3>
                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                              {product.description}
                            </p>
                          </div>

                          <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-3">
                            <div className="flex items-baseline justify-between">
                              <div className="flex flex-col">
                                <span className="text-[10px] text-slate-400 line-through leading-none mb-1">
                                  {formatPrice(product.originalPrice)}
                                </span>
                                <p className="font-display font-black text-base sm:text-lg text-[#EE4D2D] leading-none tracking-tight">
                                  {formatPrice(product.discountedPrice)}
                                </p>
                              </div>
                              <span className="text-[9px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.5 rounded border border-emerald-100/30">
                                -{formatPrice(product.originalPrice - product.discountedPrice)}
                              </span>
                            </div>

                            <div className="flex gap-2">
                              <button
                                onClick={() => handleCtaClick(product)}
                                className="flex-1 py-2.5 bg-[#EE4D2D] hover:bg-orange-600 active:scale-95 text-white font-bold text-xs rounded-lg shadow-sm hover:shadow flex items-center justify-center gap-1 cursor-pointer"
                              >
                                <span>Mua Qua Shopee</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </button>
                              
                              <button
                                onClick={(e) => handleCopyLink(product, e)}
                                className="p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 rounded-lg relative cursor-pointer"
                                title="Sao chép link"
                              >
                                <AnimatePresence mode="wait">
                                  {copiedId === product.id ? (
                                    <motion.span
                                      key="copied"
                                      initial={{ scale: 0.8, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0.8, opacity: 0 }}
                                      className="text-emerald-600"
                                    >
                                      <Check className="w-4 h-4" />
                                    </motion.span>
                                  ) : (
                                    <motion.span
                                      key="copy"
                                      initial={{ scale: 0.8, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0.8, opacity: 0 }}
                                    >
                                      <svg viewBox="0 0 24 24" width="15" height="15" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                                    </motion.span>
                                  )}
                                </AnimatePresence>
                                {copiedId === product.id && (
                                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[9px] font-bold py-1 px-2 rounded mb-1.5 whitespace-nowrap shadow-md z-10">
                                    Đã sao chép!
                                  </span>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })
                ) : (
                  <div className="col-span-full py-12 text-center bg-white rounded-xl border border-slate-200/50 max-w-md mx-auto space-y-3 shadow-2xs">
                    <AlertCircle className="w-8 h-8 text-slate-400 mx-auto" />
                    <h3 className="font-display font-bold text-slate-900 text-sm">Không tìm thấy sản phẩm</h3>
                    <p className="text-xs text-slate-500">Hãy thử nhập từ khóa tìm kiếm khác hoặc xóa bộ lọc để quay lại danh sách nhé.</p>
                    <button
                      onClick={resetFilters}
                      className="px-4 py-2 bg-[#EE4D2D] hover:bg-orange-600 active:scale-95 text-white font-bold text-xs rounded-lg transition-all cursor-pointer"
                    >
                      Xem tất cả sản phẩm
                    </button>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

      </main>

      {/* Footer Section */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center border-b border-slate-900 pb-8">
            <div className="md:col-span-6 space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center p-1.5 text-white shadow-sm">
                  <The1985Logo className="w-8 h-8 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base font-bold text-white tracking-widest leading-none uppercase">
                    THE <span className="text-[#EE4D2D]">1985</span>
                  </span>
                  <span className="text-[8px] text-slate-500 font-semibold tracking-widest uppercase mt-1">
                    Premium Affiliate
                  </span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Cổng tổng hợp cơ hội mua sắm giầy dép, quần áo và phụ kiện chính gốc Shopee Mall an tâm & siêu tiết kiệm hằng ngày.
              </p>
            </div>

            <div className="md:col-span-6 space-y-3 md:text-right">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Kết nối cùng chúng tôi qua:
              </span>
              <div className="flex flex-wrap gap-2.5 md:justify-end">
                {WEBSITE_CONFIG.footer.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 hover:text-[#EE4D2D] hover:border-[#EE4D2D]/30 transition-all font-semibold"
                  >
                    <span>{social.name}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start justify-between gap-6 text-xs text-slate-500 leading-relaxed">
            <div className="space-y-2 max-w-3xl">
              <p className="font-bold text-slate-400">Tuyên bố miễn trừ trách nhiệm (Disclaimer):</p>
              <p>{WEBSITE_CONFIG.footer.disclaimer}</p>
            </div>
            <div className="shrink-0 space-y-0.5 sm:text-right font-medium">
              <p className="text-slate-400">© 2026 The 1985</p>
              <p>Mô hình Tiếp thị Liên kết Shopee</p>
              <p className="text-[10px] text-slate-600">Static Portal • Build 1.1.0</p>
            </div>
          </div>

        </div>
      </footer>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 p-3.5 bg-slate-900 hover:bg-[#EE4D2D] text-white rounded-full shadow-lg active:scale-95 transition-all z-30 cursor-pointer"
            title="Cuộn lên đầu trang"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Redirection Security Pop-up Modal */}
      <AnimatePresence>
        {activeRedirectProduct && (
          <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl border border-slate-100 text-center space-y-5 relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#EE4D2D] via-orange-500 to-amber-500"></div>

              <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mx-auto text-[#EE4D2D] relative">
                <span className="absolute inset-0 rounded-full bg-orange-500/10 animate-ping"></span>
                <ShoppingBag className="w-6 h-6 fill-orange-500/10" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-lg text-slate-900">
                  Đang Mở Cửa Hàng Shopee
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hệ thống đang kết nối an toàn đến gian hàng chính hãng tại Shopee Mall cho sản phẩm:
                </p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/50 font-bold text-xs text-slate-800 line-clamp-2">
                  {activeRedirectProduct.name}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-500 bg-slate-100/60 p-3 rounded-lg border border-slate-100 font-semibold text-left">
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span>Cửa hàng chính hiệu Mall</span>
                </div>
                <div className="flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-green-500" />
                  <span>Trang web Shopee.vn</span>
                </div>
              </div>

              <div className="space-y-2.5 pt-1.5">
                <a
                  href={activeRedirectProduct.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#EE4D2D] text-white font-bold rounded-xl text-xs sm:text-sm hover:bg-orange-600 active:scale-95 transition-all shadow-md shadow-orange-500/10 flex items-center justify-center gap-1.5"
                >
                  <span>Mở Thủ Công</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveRedirectProduct(null)}
                  className="text-xs text-slate-400 hover:text-slate-600 font-semibold underline cursor-pointer"
                >
                  Quay lại website
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
