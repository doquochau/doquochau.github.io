// ═══════════════════════════════════════════════════════════════════
//  APOCALYPSE CLOSET — DATA FILE (SINGLE SOURCE OF TRUTH)
//
//  Chỉ cần sửa file này khi thêm/xoá/chỉnh sửa outfit.
//  Mọi trang (index, style, outfit-detail) đều đọc từ đây.
//
//  CATEGORY hợp lệ:
//    "Dark Feminine" | "E-Girl" | "Goth" | "Baddie Streetwear" | "Punk" | "Grunge"
//
//  SLUG: dùng cho URL tĩnh /outfits/{slug}.html
//    Format: look-{XX}-{category-kebab}
// ═══════════════════════════════════════════════════════════════════

const BASE = "/images/badgirl-outfits";
const STYLE_BY_LOOK = { 1: "e-girl", 2: "baddie-streetwear", 3: "punk", 4: "dark-feminine", 5: "e-girl", 6: "punk", 7: "baddie-streetwear", 8: "e-girl", 9: "goth", 10: "punk", 11: "e-girl", 12: "punk", 13: "e-girl", 14: "baddie-streetwear", 15: "dark-feminine", 16: "goth", 17: "baddie-streetwear", 18: "dark-feminine", 19: "punk", 20: "baddie-streetwear", 21: "baddie-streetwear", 22: "dark-feminine", 23: "baddie-streetwear", 24: "goth", 25: "goth", 26: "baddie-streetwear", 27: "baddie-streetwear", 28: "baddie-streetwear", 29: "dark-feminine", 30: "dark-feminine", 31: "e-girl", 32: "goth", 33: "e-girl", 34: "baddie-streetwear", 35: "e-girl", 36: "dark-feminine", 37: "baddie-streetwear", 38: "punk", 39: "baddie-streetwear", 40: "dark-feminine" };
const IMG_PART_BY_INDEX = { 1: "full-outfit", 2: "top", 3: "bottom", 4: "shoes-accessories" };
const G = (look, idx) => `${BASE}/badgirl-${STYLE_BY_LOOK[look]}-look-${String(look).padStart(2, '0')}-${IMG_PART_BY_INDEX[idx]}.webp`;

const outfits = [

  // ── E-GIRL ────────────────────────────────────────────────────
  {
    id: "look-01",
    slug: "look-01-egirl",
    img: G(1, 1),
    tag: "LOOK #01",
    title: "E-Girl Badgirl Look #01",
    category: "E-Girl",
    detail: {
      title: "OUTFIT DETAILS #1",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(1,1), G(1,2), G(1,3), G(1,4) ],
      items: [
        { name: "ÁO", type: "Camisole trắng", link: "https://s.shopee.vn/5LAne0KB98" },
        { name: "QUẦN", type: "Quần dây rút đen", link: "https://s.shopee.vn/5VUDqJJXoB" },
        { name: "GIÀY", type: "Sneaker chunky trắng", link: "https://s.shopee.vn/6L3KpqGN7M" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/6VMl29FjmP" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/2BDlse33fZ" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/2LXC4x2QKc" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────
  {
    id: "look-02",
    slug: "look-02-baddie-streetwear",
    img: G(2, 1),
    tag: "LOOK #02",
    title: "Baddie Streetwear Badgirl Look #02",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #2",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(2,1), G(2,2), G(2,3), G(2,4) ],
      items: [
        { name: "ÁO", type: "Sweatshirt đen oversize", link: "https://s.shopee.vn/60QUREHdnK" },
        { name: "QUẦN", type: "Cargo rằn ri", link: "https://s.shopee.vn/6AjudXH0SN" },
        { name: "GIÀY", type: "Clog trắng chunky", link: "https://s.shopee.vn/70J1d4DplY" },
        { name: "KÍNH", type: "Kính gọng đen", link: "https://s.shopee.vn/7AcRpNDCQb" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/6fgBESF6RW" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền mặt bạc", link: "https://s.shopee.vn/2VqcHG1mzf" }
      
      ]
    }
  },

  // ── PUNK ──────────────────────────────────────────────────────
  {
    id: "look-03",
    slug: "look-03-punk",
    img: G(3, 1),
    tag: "LOOK #03",
    title: "Punk Badgirl Look #03",
    category: "Punk",
    detail: {
      title: "OUTFIT DETAILS #3",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(3,1), G(3,2), G(3,3), G(3,4) ],
      items: [
        { name: "ÁO", type: "Crop tee graphic trắng", link: "https://s.shopee.vn/6pzbQlET6Z?lp=aff" },
        { name: "QUẦN", type: "Cargo đen ống rộng", link: "https://s.shopee.vn/7fYiQIBIPk" },
        { name: "GIÀY", type: "Combat boots đen", link: "https://s.shopee.vn/7ps8cbAf4n" },
        { name: "ARM WARMER", type: "Arm warmer kẻ sọc", link: "https://s.shopee.vn/19HIfBJ4C" },
        { name: "DÂY ĐAI", type: "Dây đai eo đen", link: "https://s.shopee.vn/BShUyAfjF" },
        { name: "DÂY CHUYỀN", type: "Choker xích bạc", link: "https://s.shopee.vn/Lm7hHA2OI" }
      
      ]
    }
  },

  // ── DARK FEMININE ─────────────────────────────────────────────
  {
    id: "look-04",
    slug: "look-04-dark-feminine",
    img: G(4, 1),
    tag: "LOOK #04",
    title: "Dark Feminine Badgirl Look #04",
    category: "Dark Feminine",
    detail: {
      title: "OUTFIT DETAILS #4",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(4,1), G(4,2), G(4,3), G(4,4) ],
      items: [
        { name: "ÁO", type: "Áo trễ vai nâu", link: "https://s.shopee.vn/7Kvs1gCZ5i" },
        { name: "QUẦN", type: "Jeans rách tua rua", link: "https://s.shopee.vn/7VFIDzBvkl" },
        { name: "GIÀY", type: "Platform đen chunky", link: "https://s.shopee.vn/8KoPDW8l3w" },
        { name: "DÂY XÍCH", type: "Xích quần ánh vàng", link: "https://s.shopee.vn/W5Xta9P3L" },
        { name: "THẮT LƯNG", type: "Thắt lưng khóa vuông", link: "https://s.shopee.vn/gOy5t8liO" }
      
      ]
    }
  },

  // ── E-GIRL ────────────────────────────────────────────────────
  {
    id: "look-05",
    slug: "look-05-egirl",
    img: G(5, 1),
    tag: "LOOK #05",
    title: "E-Girl Badgirl Look #05",
    category: "E-Girl",
    detail: {
      title: "OUTFIT DETAILS #5",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(5,1), G(5,2), G(5,3), G(5,4) ],
      items: [
        { name: "ÁO", type: "Graphic tee đen", link: "https://s.shopee.vn/8V7pPp87iz" },
        { name: "QUẦN", type: "Jeans rách xám", link: "https://s.shopee.vn/80BYouA1ju" },
        { name: "GIÀY", type: "Sneaker cổ cao đen", link: "https://s.shopee.vn/8AUz1D9OOx" },
        { name: "KÍNH", type: "Kính chữ nhật đen", link: "https://s.shopee.vn/90460k6Di8" },
        { name: "DÂY CHUYỀN", type: "Xích bạc layer", link: "https://s.shopee.vn/qiOIC88NR" }
      
      ]
    }
  },

  // ── PUNK ──────────────────────────────────────────────────────
  {
    id: "look-06",
    slug: "look-06-punk",
    img: G(6, 1),
    tag: "LOOK #06",
    title: "Punk Badgirl Look #06",
    category: "Punk",
    detail: {
      title: "OUTFIT DETAILS #6",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(6,1), G(6,2), G(6,3), G(6,4) ],
      items: [
        { name: "ÁO", type: "Graphic tee đỏ", link: "https://s.shopee.vn/9ANWD35aNB" },
        { name: "QUẦN", type: "Short đen cạp cao", link: "https://s.shopee.vn/8fRFc87UO6" },
        { name: "GIÀY", type: "Combat boots platform", link: "https://s.shopee.vn/8pkfoR6r39" },
        { name: "QUẦN TẤT", type: "Quần tất rách đen", link: "https://s.shopee.vn/111oUV7V2U" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/1BLEgo6rhX" },
        { name: "DÂY XÍCH", type: "Xích quần bạc", link: "https://s.shopee.vn/40fQ40w4x6" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/9fJmny3gMK" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────
  {
    id: "look-07",
    slug: "look-07-baddie-streetwear",
    img: G(7, 1),
    tag: "LOOK #07",
    title: "Baddie Streetwear Badgirl Look #07",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #7",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(7,1), G(7,2), G(7,3), G(7,4) ],
      items: [
        { name: "ÁO", type: "Tube top đen", link: "https://s.shopee.vn/9pdD0H331N" },
        { name: "QUẦN", type: "Parachute đen", link: "https://s.shopee.vn/9KgwPM4x2I" },
        { name: "GIÀY", type: "Boot mũi nhọn đen", link: "https://s.shopee.vn/9V0Mbf4JhL" },
        { name: "MŨ", type: "Bucket hat họa tiết", link: "https://s.shopee.vn/AKZTbC190W" },
        { name: "ÁO KHOÁC", type: "Puffer đen oversize", link: "https://s.shopee.vn/4AyqGJvRc9" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/AUstnV0VfZ" },
        { name: "TÚI", type: "Túi xách đen", link: "https://s.shopee.vn/9zwdCa2PgU" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/4LIGScuoHC" }
      
      
      ]
    }
  },

  // ── E-GIRL ────────────────────────────────────────────────────
  {
    id: "look-08",
    slug: "look-08-egirl",
    img: G(8, 1),
    tag: "LOOK #08",
    title: "E-Girl Badgirl Look #08",
    category: "E-Girl",
    detail: {
      title: "OUTFIT DETAILS #8",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(8,1), G(8,2), G(8,3), G(8,4) ],
      items: [
        { name: "ÁO", type: "Crop tee đỏ", link: "https://s.shopee.vn/AAG3Ot1mLX" },
        { name: "QUẦN", type: "Jeans cargo xanh", link: "https://s.shopee.vn/Lm7godDIe" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/W5Xt7cZxh" },
        { name: "MŨ", type: "Mũ newsboy đỏ đen", link: "https://s.shopee.vn/19HICeTyc" },
        { name: "VÁY LAYER", type: "Váy layer đỏ đen", link: "https://s.shopee.vn/4VbgevuAwF" },
        { name: "THẮT LƯNG", type: "Thắt lưng lỗ bạc", link: "https://s.shopee.vn/4fv6rEtXbI" },
        { name: "TÚI", type: "Túi mini đen", link: "https://s.shopee.vn/BShUVdqdf" },
        { name: "DÂY CHUYỀN", type: "Choker đen bạc", link: "https://s.shopee.vn/4qEX3XsuGL" }
      
      ]
    }
  },

  // ── GOTH ──────────────────────────────────────────────────────
  {
    id: "look-09",
    slug: "look-09-goth",
    img: G(9, 1),
    tag: "LOOK #09",
    title: "Goth Badgirl Look #09",
    category: "Goth",
    detail: {
      title: "OUTFIT DETAILS #9",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(9,1), G(9,2), G(9,3), G(9,4) ],
      items: [
        { name: "ÁO", type: "Áo thun đen", link: "https://s.shopee.vn/111oU2afwq" },
        { name: "QUẦN", type: "Cargo rằn ri xanh", link: "https://s.shopee.vn/1BLEgLa2bt" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/gOy5Qbwco" },
        { name: "TÚI", type: "Túi xách đen", link: "https://s.shopee.vn/qiOHjbJHr" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/50XxFqsGvO" }
      
      ]
    }
  },

  // ── PUNK ──────────────────────────────────────────────────────
  {
    id: "look-10",
    slug: "look-10-punk",
    img: G(10, 1),
    tag: "LOOK #10",
    title: "Punk Badgirl Look #10",
    category: "Punk",
    detail: {
      title: "OUTFIT DETAILS #10",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(10,1), G(10,2), G(10,3), G(10,4) ],
      items: [
        { name: "ÁO", type: "Crop top cổ lọ", link: "https://s.shopee.vn/1gHVHGY8b2" },
        { name: "QUẦN", type: "Jeans rách đen", link: "https://s.shopee.vn/1qavTZXVG5" },
        { name: "GIÀY", type: "Platform boots đen", link: "https://s.shopee.vn/1LeeseZPH0" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/5ArNS9rdaR" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền mặt bạc", link: "https://s.shopee.vn/2gA2TZ19ey" },
        { name: "TAI NGHE", type: "Tai nghe chụp tai", link: "https://s.shopee.vn/2qTSfs0WK1" }
      
      ]
    }
  },

  // ── E-GIRL ────────────────────────────────────────────────────
  {
    id: "look-11",
    slug: "look-11-egirl",
    img: G(11, 1),
    tag: "LOOK #11",
    title: "E-Girl Badgirl Look #11",
    category: "E-Girl",
    detail: {
      title: "OUTFIT DETAILS #11",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(11,1), G(11,2), G(11,3), G(11,4) ],
      items: [
        { name: "ÁO", type: "Camisole satin trắng", link: "https://s.shopee.vn/1Vy54xYlw3" },
        { name: "QUẦN", type: "Short đen", link: "https://s.shopee.vn/2LXC4UVbFE" },
        { name: "GIÀY", type: "Sneaker chunky trắng", link: "https://s.shopee.vn/2VqcGnUxuH" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/30mssAzsz4" },
        { name: "TẤT", type: "Tất cổ cao trắng", link: "https://s.shopee.vn/20uLfsWrvC" },
        { name: "KÍNH", type: "Kính trắng oval", link: "https://s.shopee.vn/2BDlsBWEaF" },
        { name: "DÂY CHUYỀN", type: "Xích bạc chunky", link: "https://s.shopee.vn/3B6J4TzFe7" },
        { name: "TÚI", type: "Túi xích đen", link: "https://s.shopee.vn/30msriT3tQ" },
        { name: "TAI NGHE", type: "Tai nghe bạc đen", link: "https://s.shopee.vn/3LPjGmycJA" }
      
      ]
    }
  },

  // ── PUNK ──────────────────────────────────────────────────────
  {
    id: "look-12",
    slug: "look-12-punk",
    img: G(12, 1),
    tag: "LOOK #12",
    title: "Punk Badgirl Look #12",
    category: "Punk",
    detail: {
      title: "OUTFIT DETAILS #12",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(12,1), G(12,2), G(12,3), G(12,4) ],
      items: [
        { name: "ÁO", type: "Halter top đen", link: "https://s.shopee.vn/3B6J41SQYT" },
        { name: "QUẦN", type: "Bermuda denim đen", link: "https://s.shopee.vn/2gA2T6UKZO" },
        { name: "GIÀY", type: "Platform boots đen trắng", link: "https://s.shopee.vn/2qTSfPThER" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/3Vj9T5xyyD" },
        { name: "LEG WARMER", type: "Leg warmer trắng", link: "https://s.shopee.vn/3g2ZfOxLdG" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/3qLzrhwiIJ" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/3g2ZewQWXc" },
        { name: "TAI NGHE", type: "Tai nghe đỏ đen", link: "https://s.shopee.vn/6fgBEulvXs" }
      
      ]
    }
  },

  // ── E-GIRL ────────────────────────────────────────────────────
  {
    id: "look-13",
    slug: "look-13-egirl",
    img: G(13, 1),
    tag: "LOOK #13",
    title: "E-Girl Badgirl Look #13",
    category: "E-Girl",
    detail: {
      title: "OUTFIT DETAILS #13",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(13,1), G(13,2), G(13,3), G(13,4) ],
      items: [
        { name: "ÁO", type: "Camisole đen", link: "https://s.shopee.vn/3qLzrFPtCf" },
        { name: "QUẦN", type: "Short đen", link: "https://s.shopee.vn/3LPjGKRnDa" },
        { name: "GIÀY", type: "Boot cao gối đen", link: "https://s.shopee.vn/3Vj9SdR9sd" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/4LIGSANzBo" },
        { name: "LEG WARMER", type: "Leg warmer trắng", link: "https://s.shopee.vn/6pzbRDlICv" },
        { name: "DÂY CHUYỀN", type: "Vòng cổ khoen bạc", link: "https://s.shopee.vn/70J1dWkery" },
        { name: "TAI NGHE", type: "Tai nghe bạc", link: "https://s.shopee.vn/7AcRppk1X1" },
        { name: "TÚI", type: "Túi tote trắng", link: "https://s.shopee.vn/4VbgeTNLqr" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────
  {
    id: "look-14",
    slug: "look-14-baddie-streetwear",
    img: G(14, 1),
    tag: "LOOK #14",
    title: "Baddie Streetwear Badgirl Look #14",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #14",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(14,1), G(14,2), G(14,3), G(14,4) ],
      items: [
        { name: "ÁO", type: "Tank top Brazil", link: "https://s.shopee.vn/40fQ3YPFrm" },
        { name: "QUẦN", type: "Jeans baggy rách", link: "https://s.shopee.vn/4AyqFrOcWp" },
        { name: "GIÀY", type: "Sneaker xanh vàng", link: "https://s.shopee.vn/50XxFOLRq0" },
        { name: "KHĂN", type: "Bandana xanh lá", link: "https://s.shopee.vn/5ArNRhKoV3" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/7Kvs28jOC4" },
        { name: "THẮT LƯNG", type: "Thắt lưng đen", link: "https://s.shopee.vn/7VFIERikr7" }
      
      ]
    }
  },

  // ── DARK FEMININE ─────────────────────────────────────────────
  {
    id: "look-15",
    slug: "look-15-dark-feminine",
    img: G(15, 1),
    tag: "LOOK #15",
    title: "Dark Feminine Badgirl Look #15",
    category: "Dark Feminine",
    detail: {
      title: "OUTFIT DETAILS #15",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(15,1), G(15,2), G(15,3), G(15,4) ],
      items: [
        { name: "ÁO", type: "Camisole đen", link: "https://s.shopee.vn/4fv6qmMiVy" },
        { name: "QUẦN", type: "Cargo graffiti trắng", link: "https://s.shopee.vn/4qEX35M5B1" },
        { name: "GIÀY", type: "Platform đen trắng", link: "https://s.shopee.vn/5q74EvIH9E" },
        { name: "MŨ", type: "Mũ lưỡi trai đen", link: "https://s.shopee.vn/5fne2cIuUD" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/7fYiQki7WA" },
        { name: "TÚI", type: "Túi mini đen", link: "https://s.shopee.vn/5VUDqJJXpC" },
        { name: "VÒNG TAY", type: "Vòng tay bạc", link: "https://s.shopee.vn/7ps8d3hUBD" }
      
      ]
    }
  },

  // ── GOTH ──────────────────────────────────────────────────────
  {
    id: "look-16",
    slug: "look-16-goth",
    img: G(16, 1),
    tag: "LOOK #16",
    title: "Goth Badgirl Look #16",
    category: "Goth",
    detail: {
      title: "OUTFIT DETAILS #16",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(16,1), G(16,2), G(16,3), G(16,4) ],
      items: [
        { name: "ÁO", type: "Halter top đen", link: "https://s.shopee.vn/5fne2cIly5" },
        { name: "QUẦN", type: "Cargo đen nhiều túi", link: "https://s.shopee.vn/5VUDqJJPJ4" },
        { name: "GIÀY", type: "Sneaker chunky đen", link: "https://s.shopee.vn/5LAne0K2e3" },
        { name: "MŨ", type: "Beanie lỗ bạc", link: "https://s.shopee.vn/6VMl29FbHI" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/5LAneSr0Fk" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/5VUDqlqMun" },
        { name: "VÒNG TAY", type: "Wrist cuff đen", link: "https://s.shopee.vn/5fne34pjZq" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────
  {
    id: "look-17",
    slug: "look-17-baddie-streetwear",
    img: G(17, 1),
    tag: "LOOK #17",
    title: "Baddie Streetwear Badgirl Look #17",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #17",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(17,1), G(17,2), G(17,3), G(17,4) ],
      items: [
        { name: "ÁO", type: "Graphic tee đen", link: "https://s.shopee.vn/6L3KpqGEcH" },
        { name: "QUẦN", type: "Jeans baggy xanh", link: "https://s.shopee.vn/6AjudXGrxG" },
        { name: "GIÀY", type: "Sneaker đen", link: "https://s.shopee.vn/60QUREHVIF" },
        { name: "MŨ", type: "Mũ caro nâu", link: "https://s.shopee.vn/4VbgeTNDKy" },
        { name: "TÚI", type: "Túi đeo chéo đen", link: "https://s.shopee.vn/4LIGSANqfx" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền mặt bạc", link: "https://s.shopee.vn/5q74FNp6Et" },
        { name: "THẮT LƯNG", type: "Thắt lưng da nâu", link: "https://s.shopee.vn/60QURgoStw" }
      
      ]
    }
  },

  // ── DARK FEMININE ─────────────────────────────────────────────
  {
    id: "look-18",
    slug: "look-18-dark-feminine",
    img: G(18, 1),
    tag: "LOOK #18",
    title: "Dark Feminine Badgirl Look #18",
    category: "Dark Feminine",
    detail: {
      title: "OUTFIT DETAILS #18",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(18,1), G(18,2), G(18,3), G(18,4) ],
      items: [
        { name: "ÁO", type: "Crop top đen", link: "https://s.shopee.vn/4AyqFrOU0w" },
        { name: "QUẦN", type: "Jeans rách đen", link: "https://s.shopee.vn/40fQ3YP7Lv" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/5ArNRhKfzA" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/6AjudznpYz" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/50XxFOLJK9" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/6L3KqInCE2" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/6VMl2bmYt5" }
      
      ]
    }
  },

  // ── PUNK ──────────────────────────────────────────────────────
  {
    id: "look-19",
    slug: "look-19-punk",
    img: G(19, 1),
    tag: "LOOK #19",
    title: "Punk Badgirl Look #19",
    category: "Punk",
    detail: {
      title: "OUTFIT DETAILS #19",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(19,1), G(19,2), G(19,3), G(19,4) ],
      items: [
        { name: "ÁO", type: "Bandeau đen", link: "https://s.shopee.vn/4qEX35Lwf8" },
        { name: "QUẦN", type: "Cargo rách phối lưới", link: "https://s.shopee.vn/4fv6qmMa07" },
        { name: "GIÀY", type: "Combat boots trắng", link: "https://s.shopee.vn/3B6J41SI2q" },
        { name: "ÁO KHOÁC", type: "Biker jacket trắng", link: "https://s.shopee.vn/9KgwPobm8e" },
        { name: "DÂY XÍCH", type: "Xích quần layer bạc", link: "https://s.shopee.vn/9V0Mc7b8nh" },
        { name: "CHOKER", type: "Choker xích bạc", link: "https://s.shopee.vn/30msriSvNp" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────
  {
    id: "look-20",
    slug: "look-20-baddie-streetwear",
    img: G(20, 1),
    tag: "LOOK #20",
    title: "Baddie Streetwear Badgirl Look #20",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #20",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(20,1), G(20,2), G(20,3), G(20,4) ],
      items: [
        { name: "ÁO", type: "Crop tee trắng", link: "https://s.shopee.vn/2qTSfPTYio" },
        { name: "QUẦN", type: "Jogger xám", link: "https://s.shopee.vn/2gA2T6UC3n" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/3qLzrFPkh2" },
        { name: "ARM WARMER", type: "Arm warmer đen", link: "https://s.shopee.vn/9fJmoQaVSk" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/9pdD0jZs7n" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/3g2ZewQO21" }
      
      ]
    }
  },


  // ── BADDIE STREETWEAR ─────────────────────────────────────────────
  {
    id: "look-21",
    slug: "look-21-baddie-streetwear",
    img: G(21, 1),
    tag: "LOOK #21",
    title: "Baddie Streetwear Badgirl Look #21",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #21",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(21,1), G(21,2), G(21,3), G(21,4) ],
      items: [
        { name: "ÁO", type: "Crop top đen", link: "https://s.shopee.vn/3Vj9SdR1N0" },
        { name: "QUẦN", type: "Jeans đen ống rộng", link: "https://s.shopee.vn/3LPjGKRehz" },
        { name: "GIÀY", type: "Platform màu tan", link: "https://s.shopee.vn/1qavTZXMki" },
        { name: "ÁO KHOÁC", type: "Puffer trắng oversize", link: "https://s.shopee.vn/9zwdD2ZEmq" },
        { name: "MŨ", type: "Mũ lưỡi trai đen", link: "https://s.shopee.vn/1gHVHGY05h" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/1Vy54xYdQg" },
        { name: "TÚI", type: "Túi charm đen", link: "https://s.shopee.vn/1LeeseZGlf" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/AAG3PLYbRt" }
      
      ]
    }
  },

  // ── DARK FEMININE ─────────────────────────────────────────────
  {
    id: "look-22",
    slug: "look-22-dark-feminine",
    img: G(22, 1),
    tag: "LOOK #22",
    title: "Dark Feminine Badgirl Look #22",
    category: "Dark Feminine",
    detail: {
      title: "OUTFIT DETAILS #22",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(22,1), G(22,2), G(22,3), G(22,4) ],
      items: [
        { name: "ÁO", type: "Crop top lệch vai", link: "https://s.shopee.vn/2VqcGnUpOu" },
        { name: "QUẦN", type: "Jeans phối ren đen", link: "https://s.shopee.vn/2LXC4UVSjt" },
        { name: "GIÀY", type: "Mary Jane đen", link: "https://s.shopee.vn/2BDlsBW64s" },
        { name: "MŨ", type: "Mũ lưỡi trai đen", link: "https://s.shopee.vn/20uLfsWjPr" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/AKZTbeXy6w" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────────
  {
    id: "look-23",
    slug: "look-23-baddie-streetwear",
    img: G(23, 1),
    tag: "LOOK #23",
    title: "Baddie Streetwear Badgirl Look #23",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #23",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(23,1), G(23,2), G(23,3), G(23,4) ],
      items: [
        { name: "ÁO", type: "Crop tee trắng đỏ", link: "https://s.shopee.vn/W5Xt7cRSa" },
        { name: "QUẦN", type: "Track pants trắng đỏ", link: "https://s.shopee.vn/Lm7god4nZ" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/BShUVdi8Y" },
        { name: "VÒNG TAY", type: "Vòng tay bạc", link: "https://s.shopee.vn/AUstnxXKlz" }
      
      ]
    }
  },

  // ── GOTH ─────────────────────────────────────────────
  {
    id: "look-24",
    slug: "look-24-goth",
    img: G(24, 1),
    tag: "LOOK #24",
    title: "Goth Badgirl Look #24",
    category: "Goth",
    detail: {
      title: "OUTFIT DETAILS #24",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(24,1), G(24,2), G(24,3), G(24,4) ],
      items: [
        { name: "ÁO", type: "Graphic tee đen", link: "https://s.shopee.vn/19HICeLTX" },
        { name: "QUẦN", type: "Short đen", link: "https://s.shopee.vn/1BLEgLZu6m" },
        { name: "GIÀY", type: "Combat boots cao cổ", link: "https://s.shopee.vn/111oU2aXRl" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/80BYpMgqqW" }
      
      ]
    }
  },

  // ── GOTH ─────────────────────────────────────────────
  {
    id: "look-25",
    slug: "look-25-goth",
    img: G(25, 1),
    tag: "LOOK #25",
    title: "Goth Badgirl Look #25",
    category: "Goth",
    detail: {
      title: "OUTFIT DETAILS #25",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(25,1), G(25,2), G(25,3), G(25,4) ],
      items: [
        { name: "ÁO", type: "Áo lưới graphic đen", link: "https://s.shopee.vn/qiOHjbAmk" },
        { name: "QUẦN", type: "Cargo navy ống rộng", link: "https://s.shopee.vn/gOy5Qbo7j" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/9KgwPM4oXQ" },
        { name: "MŨ", type: "Beanie khoen bạc", link: "https://s.shopee.vn/9V0Mbf4BCT" },
        { name: "ARM WARMER", type: "Arm warmer đen", link: "https://s.shopee.vn/8AUz1fgDVZ" },
        { name: "DÂY XÍCH", type: "Xích quần đen bạc", link: "https://s.shopee.vn/8KoPDyfaAc" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/8V7pQHewpf" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/9fJmny3XrW" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────────
  {
    id: "look-26",
    slug: "look-26-baddie-streetwear",
    img: G(26, 1),
    tag: "LOOK #26",
    title: "Baddie Streetwear Badgirl Look #26",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #26",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(26,1), G(26,2), G(26,3), G(26,4) ],
      items: [
        { name: "ÁO", type: "Áo trễ vai xám", link: "https://s.shopee.vn/9pdD0H2uWZ" },
        { name: "QUẦN", type: "Cargo jeans xám", link: "https://s.shopee.vn/9zwdCa2HBc" },
        { name: "GIÀY", type: "Boot màu tan", link: "https://s.shopee.vn/AAG3Ot1dqf" },
        { name: "ÁO SƠ MI", type: "Sơ mi caro buộc eo", link: "https://s.shopee.vn/8fRFcaeJUi" },
        { name: "TÚI", type: "Túi đeo vai nâu", link: "https://s.shopee.vn/AKZTbC10Vi" },
        { name: "DÂY XÍCH", type: "Xích quần bạc", link: "https://s.shopee.vn/8pkfotdg9l" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/90461Cd2oo" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────────
  {
    id: "look-27",
    slug: "look-27-baddie-streetwear",
    img: G(27, 1),
    tag: "LOOK #27",
    title: "Baddie Streetwear Badgirl Look #27",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #27",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(27,1), G(27,2), G(27,3), G(27,4) ],
      items: [
        { name: "ÁO", type: "Graphic tee nâu", link: "https://s.shopee.vn/AUstnV0NAl" },
        { name: "QUẦN", type: "Jeans baggy xám", link: "https://s.shopee.vn/80BYou9tFI" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/8AUz1D9FuL" },
        { name: "MŨ", type: "Beanie trắng", link: "https://s.shopee.vn/8KoPDW8cZO" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/9ANWDVcPTr" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/8V7pPp7zER" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────────
  {
    id: "look-28",
    slug: "look-28-baddie-streetwear",
    img: G(28, 1),
    tag: "LOOK #28",
    title: "Baddie Streetwear Badgirl Look #28",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #28",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(28,1), G(28,2), G(28,3), G(28,4) ],
      items: [
        { name: "ÁO", type: "Crop tee trắng", link: "https://s.shopee.vn/8fRFc87LtU" },
        { name: "QUẦN", type: "Parachute beige", link: "https://s.shopee.vn/8pkfoR6iYX" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/90460k65Da" },
        { name: "MŨ", type: "Mũ trapper nâu", link: "https://s.shopee.vn/9ANWD35Rsd" },
        { name: "THẮT LƯNG", type: "Thắt lưng trắng", link: "https://s.shopee.vn/1Vy55Q5b2O" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/1Leet76ENN" },
        { name: "TÚI", type: "Túi xách bạc", link: "https://s.shopee.vn/6fgBESExxA" }
      
      ]
    }
  },

  // ── DARK FEMININE ─────────────────────────────────────────────
  {
    id: "look-29",
    slug: "look-29-dark-feminine",
    img: G(29, 1),
    tag: "LOOK #29",
    title: "Dark Feminine Badgirl Look #29",
    category: "Dark Feminine",
    detail: {
      title: "OUTFIT DETAILS #29",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(29,1), G(29,2), G(29,3), G(29,4) ],
      items: [
        { name: "ÁO", type: "Camisole da báo", link: "https://s.shopee.vn/6pzbQlEKcD" },
        { name: "QUẦN", type: "Jeans wash nâu", link: "https://s.shopee.vn/70J1d4DhHG" },
        { name: "GIÀY", type: "Giày da báo", link: "https://s.shopee.vn/7AcRpND3wJ" },
        { name: "TÚI", type: "Túi xách đen", link: "https://s.shopee.vn/7Kvs1gCQbM" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/1qavU24KMU" },
        { name: "THẮT LƯNG", type: "Thắt lưng da nâu", link: "https://s.shopee.vn/1gHVHj4xhT" }
      
      ]
    }
  },

  // ── DARK FEMININE ─────────────────────────────────────────────
  {
    id: "look-30",
    slug: "look-30-dark-feminine",
    img: G(30, 1),
    tag: "LOOK #30",
    title: "Dark Feminine Badgirl Look #30",
    category: "Dark Feminine",
    detail: {
      title: "OUTFIT DETAILS #30",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(30,1), G(30,2), G(30,3), G(30,4) ],
      items: [
        { name: "ÁO", type: "Corset nâu", link: "https://s.shopee.vn/7VFIDzBnGP" },
        { name: "QUẦN", type: "Jeans cargo xám", link: "https://s.shopee.vn/7fYiQIB9vS" },
        { name: "GIÀY", type: "Sneaker nâu", link: "https://s.shopee.vn/7ps8cbAWaV" },
        { name: "ÁO KHOÁC", type: "Bolero len kem", link: "https://s.shopee.vn/2BDlse33ga" },
        { name: "ÁO SƠ MI", type: "Sơ mi caro buộc eo", link: "https://s.shopee.vn/20uLgL3h1Z" },
        { name: "TÚI", type: "Túi đeo vai nâu", link: "https://s.shopee.vn/5LAne0K2f2" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/2VqcHG1n0g" }
      
      ]
    }
  },

  // ── E-GIRL ─────────────────────────────────────────────
  {
    id: "look-31",
    slug: "look-31-egirl",
    img: G(31, 1),
    tag: "LOOK #31",
    title: "E-Girl Badgirl Look #31",
    category: "E-Girl",
    detail: {
      title: "OUTFIT DETAILS #31",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(31,1), G(31,2), G(31,3), G(31,4) ],
      items: [
        { name: "ÁO", type: "Áo thun đen", link: "https://s.shopee.vn/5VUDqJJPK5" },
        { name: "QUẦN", type: "Jeans baggy xanh", link: "https://s.shopee.vn/5fne2cIlz8" },
        { name: "GIÀY", type: "Clog trắng", link: "https://s.shopee.vn/5q74EvI8eB" },
        { name: "TÚI", type: "Túi tote trắng", link: "https://s.shopee.vn/60QUREHVJE" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/2LXC4x2QLf" },
        { name: "THẮT LƯNG", type: "Thắt lưng trắng", link: "https://s.shopee.vn/BShUyAfkG" }
      
      ]
    }
  },

  // ── GOTH ─────────────────────────────────────────────
  {
    id: "look-32",
    slug: "look-32-goth",
    img: G(32, 1),
    tag: "LOOK #32",
    title: "Goth Badgirl Look #32",
    category: "Goth",
    detail: {
      title: "OUTFIT DETAILS #32",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(32,1), G(32,2), G(32,3), G(32,4) ],
      items: [
        { name: "ÁO", type: "Tank top đen", link: "https://s.shopee.vn/9KgwPM9HYA" },
        { name: "QUẦN", type: "Quần ống rộng đen", link: "https://s.shopee.vn/9V0Mbf8eDD" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/AKZTbC5TWO" },
        { name: "THẮT LƯNG", type: "Western belt đen trắng", link: "https://s.shopee.vn/19HIfBJ5F" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/W5Xta9P4M" }
      
      ]
    }
  },

  // ── E-GIRL ─────────────────────────────────────────────
  {
    id: "look-33",
    slug: "look-33-egirl",
    img: G(33, 1),
    tag: "LOOK #33",
    title: "E-Girl Badgirl Look #33",
    category: "E-Girl",
    detail: {
      title: "OUTFIT DETAILS #33",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(33,1), G(33,2), G(33,3), G(33,4) ],
      items: [
        { name: "ÁO", type: "Corset đen đỏ", link: "https://s.shopee.vn/AUstnV4qBR" },
        { name: "QUẦN", type: "Jeans baggy xanh nhạt", link: "https://s.shopee.vn/9zwdCa6kCM" },
        { name: "GIÀY", type: "Platform đỏ", link: "https://s.shopee.vn/AAG3Ot66rP" },
        { name: "MŨ", type: "Beret đỏ", link: "https://s.shopee.vn/8KoPDWD5a4" },
        { name: "KÍNH", type: "Kính gọng đen", link: "https://s.shopee.vn/8V7pPpCSF7" },
        { name: "TÚI", type: "Túi corset đỏ", link: "https://s.shopee.vn/80BYouEMG2" },
        { name: "CÀ VẠT", type: "Cà vạt sọc đỏ", link: "https://s.shopee.vn/Lm7hHA2PL" },
        { name: "DÂY XÍCH", type: "Xích quần bạc", link: "https://s.shopee.vn/qiOIC88OS" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────────
  {
    id: "look-34",
    slug: "look-34-baddie-streetwear",
    img: G(34, 1),
    tag: "LOOK #34",
    title: "Baddie Streetwear Badgirl Look #34",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #34",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(34,1), G(34,2), G(34,3), G(34,4) ],
      items: [
        { name: "ÁO", type: "Crop tee đen", link: "https://s.shopee.vn/8AUz1DDiv5" },
        { name: "QUẦN", type: "Jogger xám", link: "https://s.shopee.vn/90460kAYEG" },
        { name: "GIÀY", type: "Platform màu beige", link: "https://s.shopee.vn/9ANWD39utJ" },
        { name: "MŨ", type: "Mũ lưỡi trai đen", link: "https://s.shopee.vn/8fRFc8BouE" },
        { name: "KHĂN", type: "Khăn choàng graphic", link: "https://s.shopee.vn/8pkfoRBBZH" },
        { name: "DÂY XÍCH", type: "Xích quần bạc", link: "https://s.shopee.vn/gOy5t8ljR" },
        { name: "TÚI", type: "Túi xách đen", link: "https://s.shopee.vn/70J1d4IAHw" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/1BLEgo6riY" }
      
      ]
    }
  },

  // ── E-GIRL ─────────────────────────────────────────────
  {
    id: "look-35",
    slug: "look-35-egirl",
    img: G(35, 1),
    tag: "LOOK #35",
    title: "E-Girl Badgirl Look #35",
    category: "E-Girl",
    detail: {
      title: "OUTFIT DETAILS #35",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(35,1), G(35,2), G(35,3), G(35,4) ],
      items: [
        { name: "ÁO", type: "Crop top trễ vai", link: "https://s.shopee.vn/7AcRpNHWwz" },
        { name: "QUẦN", type: "Jeans đen ống rộng", link: "https://s.shopee.vn/6fgBESJQxu" },
        { name: "GIÀY", type: "Sneaker đỏ", link: "https://s.shopee.vn/6pzbQlIncx" },
        { name: "TÚI", type: "Túi tote đen", link: "https://s.shopee.vn/7fYiQIFcw8" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/111oUV7V3X" }
      
      ]
    }
  },

  // ── DARK FEMININE ─────────────────────────────────────────────
  {
    id: "look-36",
    slug: "look-36-dark-feminine",
    img: G(36, 1),
    tag: "LOOK #36",
    title: "Dark Feminine Badgirl Look #36",
    category: "Dark Feminine",
    detail: {
      title: "OUTFIT DETAILS #36",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(36,1), G(36,2), G(36,3), G(36,4) ],
      items: [
        { name: "ÁO", type: "Áo trễ vai đen", link: "https://s.shopee.vn/7ps8cbEzbB" },
        { name: "QUẦN", type: "Jeans baggy xanh", link: "https://s.shopee.vn/7Kvs1gGtc6" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/7VFIDzGGH9" },
        { name: "THẮT LƯNG", type: "Western belt nâu", link: "https://s.shopee.vn/4AyqGJvRdA" },
        { name: "TÚI", type: "Túi đeo vai nâu", link: "https://s.shopee.vn/5fne2cNEzo" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/40fQ40w4y9" },
        { name: "MÓC KHÓA", type: "Charm lông nâu", link: "https://s.shopee.vn/4VbgevuAxG" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────────
  {
    id: "look-37",
    slug: "look-37-baddie-streetwear",
    img: G(37, 1),
    tag: "LOOK #37",
    title: "Baddie Streetwear Badgirl Look #37",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #37",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(37,1), G(37,2), G(37,3), G(37,4) ],
      items: [
        { name: "ÁO", type: "Crop tank đen", link: "https://s.shopee.vn/5q74EvMber" },
        { name: "QUẦN", type: "Quần tây đen", link: "https://s.shopee.vn/5LAne0OVfm" },
        { name: "GIÀY", type: "Sneaker đỏ", link: "https://s.shopee.vn/5VUDqJNsKp" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/4LIGScuoIF" },
        { name: "THẮT LƯNG", type: "Thắt lưng đỏ", link: "https://s.shopee.vn/4qEX3XsuHM" },
        { name: "TÚI", type: "Túi xích đỏ", link: "https://s.shopee.vn/6L3KpqKhe0" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/6VMl29K4J3" },
        { name: "TAI NGHE", type: "Tai nghe chụp tai", link: "https://s.shopee.vn/4fv6rEtXcL" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/5ArNS9rdbS" }
      
      ]
    }
  },

  // ── PUNK ─────────────────────────────────────────────
  {
    id: "look-38",
    slug: "look-38-punk",
    img: G(38, 1),
    tag: "LOOK #38",
    title: "Punk Badgirl Look #38",
    category: "Punk",
    detail: {
      title: "OUTFIT DETAILS #38",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(38,1), G(38,2), G(38,3), G(38,4) ],
      items: [
        { name: "ÁO", type: "Crop top cổ lọ", link: "https://s.shopee.vn/60QURELyJy" },
        { name: "QUẦN", type: "Jeans rách đen", link: "https://s.shopee.vn/6AjudXLKz1" },
        { name: "GIÀY", type: "Platform boots đen", link: "https://s.shopee.vn/4LIGSASJhg" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/50XxFqsGwR" },
        { name: "THẮT LƯNG", type: "Thắt lưng đen", link: "https://s.shopee.vn/2qTSfs0WL2" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền mặt bạc", link: "https://s.shopee.vn/2gA2TZ19g1" },
        { name: "TAI NGHE", type: "Tai nghe chụp tai", link: "https://s.shopee.vn/3B6J4TzFf8" }
      
      ]
    }
  },

  // ── BADDIE STREETWEAR ─────────────────────────────────────────────
  {
    id: "look-39",
    slug: "look-39-baddie-streetwear",
    img: G(39, 1),
    tag: "LOOK #39",
    title: "Baddie Streetwear Badgirl Look #39",
    category: "Baddie Streetwear",
    detail: {
      title: "OUTFIT DETAILS #39",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(39,1), G(39,2), G(39,3), G(39,4) ],
      items: [
        { name: "ÁO", type: "Tank top đen", link: "https://s.shopee.vn/4VbgeTRgMj" },
        { name: "QUẦN", type: "Quần ống rộng đen", link: "https://s.shopee.vn/40fQ3YTaNe" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/4AyqFrSx2h" },
        { name: "THẮT LƯNG", type: "Western belt đen trắng", link: "https://s.shopee.vn/30mssAzt07" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/3Vj9T5xyzE" }
      
      ]
    }
  },

  // ── DARK FEMININE ─────────────────────────────────────────────
  {
    id: "look-40",
    slug: "look-40-dark-feminine",
    img: G(40, 1),
    tag: "LOOK #40",
    title: "Dark Feminine Badgirl Look #40",
    category: "Dark Feminine",
    detail: {
      title: "OUTFIT DETAILS #40",
      desc: "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      imgs: [ G(40,1), G(40,2), G(40,3), G(40,4) ],
      items: [
        { name: "ÁO", type: "Crop top cutout trắng", link: "https://s.shopee.vn/50XxFOPmLs" },
        { name: "QUẦN", type: "Jeans baggy xanh", link: "https://s.shopee.vn/5ArNRhP90v" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/4fv6qmR31q" },
        { name: "THẮT LƯNG", type: "Thắt lưng đen", link: "https://s.shopee.vn/3LPjGmycKD" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/3qLzrhwiJK" }
      
      ]
    }
  },



  // ── OUTFIT 41–136 (ẢNH MỚI 2026-08-03) ─────────────────────────
  {
    "id": "look-41",
    "slug": "look-41-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-trang-chan-vay-xep-ly-den-041.webp",
    "tag": "LOOK #41",
    "title": "E-Girl Outfit Nữ Look #41",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #41 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-trang-chan-vay-xep-ly-den-041.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic trắng",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly đen",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-42",
    "slug": "look-42-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-ke-soc-den-chan-vay-xep-ly-042.webp",
    "tag": "LOOK #42",
    "title": "E-Girl Outfit Nữ Look #42",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #42 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-ke-soc-den-chan-vay-xep-ly-042.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo kẻ sọc đen",
          "link": "https://s.shopee.vn/5VUDqJJPK5"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-43",
    "slug": "look-43-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-graphic-den-chan-vay-caro-043.webp",
    "tag": "LOOK #43",
    "title": "E-Girl Outfit Nữ Look #43",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #43 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-graphic-den-chan-vay-caro-043.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy caro",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-44",
    "slug": "look-44-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-den-quan-short-xich-044.webp",
    "tag": "LOOK #44",
    "title": "Goth Outfit Nữ Look #44",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #44 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-den-quan-short-xich-044.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo lưới đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần short xich",
          "link": "https://s.shopee.vn/1BLEgLZu6m"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-45",
    "slug": "look-45-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-ke-soc-do-den-chan-vay-den-045.webp",
    "tag": "LOOK #45",
    "title": "Grunge Outfit Nữ Look #45",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #45 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-ke-soc-do-den-chan-vay-den-045.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo kẻ sọc đỏ đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy đen",
          "link": "https://s.shopee.vn/2gA2T6UKZO"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-46",
    "slug": "look-46-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-corset-den-chan-vay-xep-ly-046.webp",
    "tag": "LOOK #46",
    "title": "Goth Outfit Nữ Look #46",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #46 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-corset-den-chan-vay-xep-ly-046.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/1BLEgLZu6m"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-47",
    "slug": "look-47-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-corset-den-quan-cargo-xam-047.webp",
    "tag": "LOOK #47",
    "title": "Goth Outfit Nữ Look #47",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #47 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-corset-den-quan-cargo-xam-047.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo lưới corset đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-48",
    "slug": "look-48-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-den-quan-cargo-xam-048.webp",
    "tag": "LOOK #48",
    "title": "Grunge Outfit Nữ Look #48",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #48 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-den-quan-cargo-xam-048.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-49",
    "slug": "look-49-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-graphic-tre-vai-chan-vay-den-049.webp",
    "tag": "LOOK #49",
    "title": "Goth Outfit Nữ Look #49",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #49 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-graphic-tre-vai-chan-vay-den-049.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic trễ vai",
          "link": "https://s.shopee.vn/7Kvs1gCZ5i"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy đen",
          "link": "https://s.shopee.vn/1BLEgLZu6m"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-50",
    "slug": "look-50-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-luoi-graphic-xam-quan-cargo-den-050.webp",
    "tag": "LOOK #50",
    "title": "Grunge Outfit Nữ Look #50",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #50 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-luoi-graphic-xam-quan-cargo-den-050.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo lưới graphic xám",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-51",
    "slug": "look-51-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-jersey-trang-chan-vay-xep-ly-051.webp",
    "tag": "LOOK #51",
    "title": "E-Girl Outfit Nữ Look #51",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #51 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-jersey-trang-chan-vay-xep-ly-051.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo jersey trắng",
          "link": "https://s.shopee.vn/5LAne0KB98"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-52",
    "slug": "look-52-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-day-dan-den-chan-vay-xep-ly-052.webp",
    "tag": "LOOK #52",
    "title": "Goth Outfit Nữ Look #52",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #52 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-day-dan-den-chan-vay-xep-ly-052.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo dây đan đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/1BLEgLZu6m"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-53",
    "slug": "look-53-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-crop-khoet-nguc-chan-vay-den-053.webp",
    "tag": "LOOK #53",
    "title": "Dark Feminine Outfit Nữ Look #53",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #53 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-crop-khoet-nguc-chan-vay-den-053.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop khoet nguc",
          "link": "https://s.shopee.vn/7Kvs1gCZ5i"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy đen",
          "link": "https://s.shopee.vn/8fRFc87UO6"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-54",
    "slug": "look-54-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-thun-graphic-den-chan-vay-mini-054.webp",
    "tag": "LOOK #54",
    "title": "Grunge Outfit Nữ Look #54",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #54 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-thun-graphic-den-chan-vay-mini-054.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo thun graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy mini",
          "link": "https://s.shopee.vn/2gA2T6UKZO"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-55",
    "slug": "look-55-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-den-tay-be-chan-vay-xep-ly-055.webp",
    "tag": "LOOK #55",
    "title": "E-Girl Outfit Nữ Look #55",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #55 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-den-tay-be-chan-vay-xep-ly-055.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop đen tay be",
          "link": "https://s.shopee.vn/4AyqFrOU0w"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-56",
    "slug": "look-56-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-graphic-tre-vai-chan-vay-xep-ly-056.webp",
    "tag": "LOOK #56",
    "title": "Goth Outfit Nữ Look #56",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #56 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-graphic-tre-vai-chan-vay-xep-ly-056.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic trễ vai",
          "link": "https://s.shopee.vn/7Kvs1gCZ5i"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/1BLEgLZu6m"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-57",
    "slug": "look-57-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-graphic-xam-quan-cargo-den-057.webp",
    "tag": "LOOK #57",
    "title": "Grunge Outfit Nữ Look #57",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #57 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-graphic-xam-quan-cargo-den-057.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop graphic xám",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-58",
    "slug": "look-58-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-jersey-so-17-quan-cargo-den-058.webp",
    "tag": "LOOK #58",
    "title": "Baddie Streetwear Outfit Nữ Look #58",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #58 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-jersey-so-17-quan-cargo-den-058.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo jersey số 17",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-59",
    "slug": "look-59-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-corset-xam-chan-vay-xep-ly-den-059.webp",
    "tag": "LOOK #59",
    "title": "Goth Outfit Nữ Look #59",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #59 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-corset-xam-chan-vay-xep-ly-den-059.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly đen",
          "link": "https://s.shopee.vn/1BLEgLZu6m"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-60",
    "slug": "look-60-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-graphic-hong-quan-cargo-den-060.webp",
    "tag": "LOOK #60",
    "title": "Grunge Outfit Nữ Look #60",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #60 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-graphic-hong-quan-cargo-den-060.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop graphic hồng",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-61",
    "slug": "look-61-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-jersey-so-09-chan-vay-den-061.webp",
    "tag": "LOOK #61",
    "title": "E-Girl Outfit Nữ Look #61",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #61 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-jersey-so-09-chan-vay-den-061.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo jersey số 09",
          "link": "https://s.shopee.vn/5VUDqJJPK5"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy đen",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-62",
    "slug": "look-62-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-polo-crop-trang-chan-vay-xam-062.webp",
    "tag": "LOOK #62",
    "title": "E-Girl Outfit Nữ Look #62",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #62 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-polo-crop-trang-chan-vay-xam-062.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo polo crop trắng",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xám",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-63",
    "slug": "look-63-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-co-cao-den-quan-cargo-063.webp",
    "tag": "LOOK #63",
    "title": "Baddie Streetwear Outfit Nữ Look #63",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #63 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-co-cao-den-quan-cargo-063.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop cổ cao đen",
          "link": "https://s.shopee.vn/3Vj9SdR1N0"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo",
          "link": "https://s.shopee.vn/6AjudXH0SN"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-64",
    "slug": "look-64-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-khoac-the-thao-quan-cargo-den-064.webp",
    "tag": "LOOK #64",
    "title": "Grunge Outfit Nữ Look #64",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #64 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-khoac-the-thao-quan-cargo-den-064.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo khoác thể thao",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-65",
    "slug": "look-65-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-day-dan-chan-vay-mini-den-065.webp",
    "tag": "LOOK #65",
    "title": "Goth Outfit Nữ Look #65",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #65 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-day-dan-chan-vay-mini-den-065.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo lưới dây đan",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy mini đen",
          "link": "https://s.shopee.vn/1BLEgLZu6m"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-66",
    "slug": "look-66-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-luoi-nau-quan-cargo-den-066.webp",
    "tag": "LOOK #66",
    "title": "Grunge Outfit Nữ Look #66",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #66 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-luoi-nau-quan-cargo-den-066.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo lưới nâu",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-67",
    "slug": "look-67-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-tre-vai-trang-quan-cargo-xam-067.webp",
    "tag": "LOOK #67",
    "title": "Baddie Streetwear Outfit Nữ Look #67",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #67 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-tre-vai-trang-quan-cargo-xam-067.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo trễ vai trắng",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-68",
    "slug": "look-68-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-den-quan-cargo-den-068.webp",
    "tag": "LOOK #68",
    "title": "Goth Outfit Nữ Look #68",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #68 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-den-quan-cargo-den-068.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo lưới đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/5VUDqJJPJ4"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-69",
    "slug": "look-69-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-thun-graphic-den-quan-cargo-xam-069.webp",
    "tag": "LOOK #69",
    "title": "Grunge Outfit Nữ Look #69",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #69 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-thun-graphic-den-quan-cargo-xam-069.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo thun graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-70",
    "slug": "look-70-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-corset-khoa-cai-quan-cargo-xam-070.webp",
    "tag": "LOOK #70",
    "title": "Goth Outfit Nữ Look #70",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #70 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-corset-khoa-cai-quan-cargo-xam-070.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset khóa cài",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-71",
    "slug": "look-71-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-trang-graphic-mat-quan-cargo-den-071.webp",
    "tag": "LOOK #71",
    "title": "E-Girl Outfit Nữ Look #71",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #71 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-trang-graphic-mat-quan-cargo-den-071.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop trắng graphic mắt",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/5VUDqJJXoB"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-72",
    "slug": "look-72-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-ren-buoc-day-den-quan-cargo-xam-072.webp",
    "tag": "LOOK #72",
    "title": "Dark Feminine Outfit Nữ Look #72",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #72 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-ren-buoc-day-den-quan-cargo-xam-072.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo ren buộc dây đen",
          "link": "https://s.shopee.vn/7ps8cbEzbB"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/7fYiQIB9vS"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-73",
    "slug": "look-73-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-yem-graphic-den-quan-cargo-tim-073.webp",
    "tag": "LOOK #73",
    "title": "Goth Outfit Nữ Look #73",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #73 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-yem-graphic-den-quan-cargo-tim-073.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo yếm graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo tím",
          "link": "https://s.shopee.vn/1BLEgLa2bt"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-74",
    "slug": "look-74-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-tre-vai-graphic-den-chan-vay-denim-074.webp",
    "tag": "LOOK #74",
    "title": "Grunge Outfit Nữ Look #74",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #74 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-tre-vai-graphic-den-chan-vay-denim-074.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo trễ vai graphic đen",
          "link": "https://s.shopee.vn/7ps8cbEzbB"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim",
          "link": "https://s.shopee.vn/2gA2T6UKZO"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-75",
    "slug": "look-75-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-hong-om-dang-chan-vay-cargo-den-075.webp",
    "tag": "LOOK #75",
    "title": "Baddie Streetwear Outfit Nữ Look #75",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #75 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-hong-om-dang-chan-vay-cargo-den-075.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo hồng ôm dáng",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy cargo đen",
          "link": "https://s.shopee.vn/2LXC4UVbFE"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-76",
    "slug": "look-76-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-so-23-chan-vay-cargo-xam-076.webp",
    "tag": "LOOK #76",
    "title": "Baddie Streetwear Outfit Nữ Look #76",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #76 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-so-23-chan-vay-cargo-xam-076.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop số 23",
          "link": "https://s.shopee.vn/2qTSfPTYio"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy cargo xám",
          "link": "https://s.shopee.vn/2LXC4UVbFE"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-77",
    "slug": "look-77-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-corset-den-quan-jean-ong-rong-077.webp",
    "tag": "LOOK #77",
    "title": "Dark Feminine Outfit Nữ Look #77",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #77 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-corset-den-quan-jean-ong-rong-077.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset đen",
          "link": "https://s.shopee.vn/7ps8cbEzbB"
        },
        {
          "name": "QUẦN",
          "type": "Quần jean ống rộng",
          "link": "https://s.shopee.vn/9V0Mbf8eDD"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-78",
    "slug": "look-78-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-do-ruou-quan-cargo-den-078.webp",
    "tag": "LOOK #78",
    "title": "Grunge Outfit Nữ Look #78",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #78 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-do-ruou-quan-cargo-den-078.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop đỏ rượu",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-79",
    "slug": "look-79-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-luoi-xam-quan-cargo-ong-rong-079.webp",
    "tag": "LOOK #79",
    "title": "Grunge Outfit Nữ Look #79",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #79 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-luoi-xam-quan-cargo-ong-rong-079.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo lưới xám",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo ống rộng",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-80",
    "slug": "look-80-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-xam-quan-cargo-den-080.webp",
    "tag": "LOOK #80",
    "title": "Grunge Outfit Nữ Look #80",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #80 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-xam-quan-cargo-den-080.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic xám",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-81",
    "slug": "look-81-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-yem-corset-nau-quan-cargo-den-081.webp",
    "tag": "LOOK #81",
    "title": "Dark Feminine Outfit Nữ Look #81",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #81 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-yem-corset-nau-quan-cargo-den-081.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo yếm corset nâu",
          "link": "https://s.shopee.vn/7VFIDzBnGP"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-82",
    "slug": "look-82-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-vest-khoa-keo-den-chan-vay-denim-082.webp",
    "tag": "LOOK #82",
    "title": "Baddie Streetwear Outfit Nữ Look #82",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #82 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-vest-khoa-keo-den-chan-vay-denim-082.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo vest khóa kéo đen",
          "link": "https://s.shopee.vn/111oU2afwq"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim",
          "link": "https://s.shopee.vn/2LXC4UVbFE"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-83",
    "slug": "look-83-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-corset-olive-chan-vay-denim-083.webp",
    "tag": "LOOK #83",
    "title": "Dark Feminine Outfit Nữ Look #83",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #83 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-corset-olive-chan-vay-denim-083.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset olive",
          "link": "https://s.shopee.vn/7VFIDzBnGP"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim",
          "link": "https://s.shopee.vn/8fRFc87UO6"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-84",
    "slug": "look-84-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-khoa-keo-den-quan-cargo-xam-084.webp",
    "tag": "LOOK #84",
    "title": "Baddie Streetwear Outfit Nữ Look #84",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #84 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-khoa-keo-den-quan-cargo-xam-084.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop khóa kéo đen",
          "link": "https://s.shopee.vn/3Vj9SdR1N0"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-85",
    "slug": "look-85-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-xam-chan-vay-denim-085.webp",
    "tag": "LOOK #85",
    "title": "Grunge Outfit Nữ Look #85",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #85 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-xam-chan-vay-denim-085.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic xám",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim",
          "link": "https://s.shopee.vn/2gA2T6UKZO"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-86",
    "slug": "look-86-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-tre-vai-kem-quan-cargo-den-086.webp",
    "tag": "LOOK #86",
    "title": "Baddie Streetwear Outfit Nữ Look #86",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #86 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-tre-vai-kem-quan-cargo-den-086.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo trễ vai kem",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-87",
    "slug": "look-87-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-xam-chan-vay-xep-ly-den-087.webp",
    "tag": "LOOK #87",
    "title": "E-Girl Outfit Nữ Look #87",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #87 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-xam-chan-vay-xep-ly-den-087.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic xám",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly đen",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-88",
    "slug": "look-88-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-trang-chan-vay-denim-den-088.webp",
    "tag": "LOOK #88",
    "title": "E-Girl Outfit Nữ Look #88",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #88 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-trang-chan-vay-denim-den-088.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop trắng",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim đen",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-89",
    "slug": "look-89-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-tre-vai-den-quan-cargo-xam-089.webp",
    "tag": "LOOK #89",
    "title": "Grunge Outfit Nữ Look #89",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #89 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-tre-vai-den-quan-cargo-xam-089.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop trễ vai đen",
          "link": "https://s.shopee.vn/7ps8cbEzbB"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-90",
    "slug": "look-90-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-thun-graphic-den-chan-vay-xep-ly-090.webp",
    "tag": "LOOK #90",
    "title": "E-Girl Outfit Nữ Look #90",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #90 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-thun-graphic-den-chan-vay-xep-ly-090.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo thun graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-91",
    "slug": "look-91-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-corset-caro-xam-chan-vay-xep-ly-091.webp",
    "tag": "LOOK #91",
    "title": "E-Girl Outfit Nữ Look #91",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #91 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-corset-caro-xam-chan-vay-xep-ly-091.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset caro xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-92",
    "slug": "look-92-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-tank-graphic-den-quan-cargo-xam-092.webp",
    "tag": "LOOK #92",
    "title": "Grunge Outfit Nữ Look #92",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #92 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-tank-graphic-den-quan-cargo-xam-092.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo tank graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-93",
    "slug": "look-93-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-graphic-den-chan-vay-denim-093.webp",
    "tag": "LOOK #93",
    "title": "E-Girl Outfit Nữ Look #93",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #93 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-graphic-den-chan-vay-denim-093.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-94",
    "slug": "look-94-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-thun-graphic-xam-quan-cargo-den-094.webp",
    "tag": "LOOK #94",
    "title": "Grunge Outfit Nữ Look #94",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #94 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-thun-graphic-xam-quan-cargo-den-094.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo thun graphic xám",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-95",
    "slug": "look-95-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-buom-trang-quan-cargo-xam-095.webp",
    "tag": "LOOK #95",
    "title": "E-Girl Outfit Nữ Look #95",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #95 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-buom-trang-quan-cargo-xam-095.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop bướm trắng",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-96",
    "slug": "look-96-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-tre-vai-quan-cargo-den-096.webp",
    "tag": "LOOK #96",
    "title": "Grunge Outfit Nữ Look #96",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #96 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-tre-vai-quan-cargo-den-096.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic trễ vai",
          "link": "https://s.shopee.vn/7Kvs1gCZ5i"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-97",
    "slug": "look-97-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-graphic-den-quan-jean-rach-xam-097.webp",
    "tag": "LOOK #97",
    "title": "Grunge Outfit Nữ Look #97",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #97 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-graphic-den-quan-jean-rach-xam-097.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop graphic đen",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần jean rách xám",
          "link": "https://s.shopee.vn/80BYouA1ju"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-98",
    "slug": "look-98-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-thun-graphic-den-chan-vay-mini-098.webp",
    "tag": "LOOK #98",
    "title": "E-Girl Outfit Nữ Look #98",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #98 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-thun-graphic-den-chan-vay-mini-098.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo thun graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy mini",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-99",
    "slug": "look-99-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-tank-chaos-den-quan-cargo-den-099.webp",
    "tag": "LOOK #99",
    "title": "Grunge Outfit Nữ Look #99",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #99 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-tank-chaos-den-quan-cargo-den-099.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo tank chaos đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-100",
    "slug": "look-100-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-graphic-xam-quan-cargo-den-100.webp",
    "tag": "LOOK #100",
    "title": "Grunge Outfit Nữ Look #100",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #100 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-graphic-xam-quan-cargo-den-100.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop graphic xám",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-101",
    "slug": "look-101-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-den-tay-ke-soc-quan-cargo-xam-101.webp",
    "tag": "LOOK #101",
    "title": "E-Girl Outfit Nữ Look #101",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #101 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-den-tay-ke-soc-quan-cargo-xam-101.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic đen tay kẻ sọc",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-102",
    "slug": "look-102-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-ngoi-sao-den-chan-vay-denim-102.webp",
    "tag": "LOOK #102",
    "title": "E-Girl Outfit Nữ Look #102",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #102 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-ngoi-sao-den-chan-vay-denim-102.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop ngôi sao đen",
          "link": "https://s.shopee.vn/4AyqFrOU0w"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-103",
    "slug": "look-103-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-den-chan-vay-xep-ly-103.webp",
    "tag": "LOOK #103",
    "title": "E-Girl Outfit Nữ Look #103",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #103 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-den-chan-vay-xep-ly-103.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-104",
    "slug": "look-104-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-tre-vai-den-chan-vay-xep-ly-xam-104.webp",
    "tag": "LOOK #104",
    "title": "E-Girl Outfit Nữ Look #104",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #104 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-tre-vai-den-chan-vay-xep-ly-xam-104.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop trễ vai đen",
          "link": "https://s.shopee.vn/7AcRpNHWwz"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly xám",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-105",
    "slug": "look-105-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-ke-soc-den-quan-cargo-den-105.webp",
    "tag": "LOOK #105",
    "title": "Grunge Outfit Nữ Look #105",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #105 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-ke-soc-den-quan-cargo-den-105.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo kẻ sọc đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-106",
    "slug": "look-106-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-graphic-den-chan-vay-xep-ly-106.webp",
    "tag": "LOOK #106",
    "title": "E-Girl Outfit Nữ Look #106",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #106 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-crop-graphic-den-chan-vay-xep-ly-106.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop graphic đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy xếp ly",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-107",
    "slug": "look-107-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-buom-xam-quan-cargo-den-107.webp",
    "tag": "LOOK #107",
    "title": "Grunge Outfit Nữ Look #107",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #107 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-buom-xam-quan-cargo-den-107.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop bướm xám",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-108",
    "slug": "look-108-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-crop-lech-vai-be-chan-vay-nau-108.webp",
    "tag": "LOOK #108",
    "title": "Dark Feminine Outfit Nữ Look #108",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #108 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-crop-lech-vai-be-chan-vay-nau-108.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop lệch vai be",
          "link": "https://s.shopee.vn/2VqcGnUpOu"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy nâu",
          "link": "https://s.shopee.vn/8fRFc87UO6"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-109",
    "slug": "look-109-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-xam-chan-vay-denim-109.webp",
    "tag": "LOOK #109",
    "title": "Grunge Outfit Nữ Look #109",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #109 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-xam-chan-vay-denim-109.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic xám",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim",
          "link": "https://s.shopee.vn/2gA2T6UKZO"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-110",
    "slug": "look-110-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-tre-vai-xam-quan-jean-ong-rong-110.webp",
    "tag": "LOOK #110",
    "title": "Grunge Outfit Nữ Look #110",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #110 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-crop-tre-vai-xam-quan-jean-ong-rong-110.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop trễ vai xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần jean ống rộng",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-111",
    "slug": "look-111-egirl",
    "img": "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-hong-chan-vay-caro-den-111.webp",
    "tag": "LOOK #111",
    "title": "E-Girl Outfit Nữ Look #111",
    "category": "E-Girl",
    "detail": {
      "title": "OUTFIT DETAILS #111 – E-Girl",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-egirl-ao-graphic-hong-chan-vay-caro-den-111.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic hồng",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy caro đen",
          "link": "https://s.shopee.vn/3LPjGKRnDa"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc layer",
          "link": "https://s.shopee.vn/4LIGScuoHC"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "ARM WARMER",
          "type": "Arm warmer kẻ sọc",
          "link": "https://s.shopee.vn/19HIfBJ4C"
        }
      ]
    }
  },

  {
    "id": "look-112",
    "slug": "look-112-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-ren-den-chan-vay-bat-doi-xung-112.webp",
    "tag": "LOOK #112",
    "title": "Goth Outfit Nữ Look #112",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #112 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-ren-den-chan-vay-bat-doi-xung-112.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo ren đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy bất đối xứng",
          "link": "https://s.shopee.vn/1BLEgLZu6m"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-113",
    "slug": "look-113-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-corset-nau-chan-vay-kaki-113.webp",
    "tag": "LOOK #113",
    "title": "Baddie Streetwear Outfit Nữ Look #113",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #113 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-corset-nau-chan-vay-kaki-113.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset nâu",
          "link": "https://s.shopee.vn/7VFIDzBnGP"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy kaki",
          "link": "https://s.shopee.vn/2LXC4UVbFE"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-114",
    "slug": "look-114-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-corset-xanh-xam-quan-cargo-sang-114.webp",
    "tag": "LOOK #114",
    "title": "Baddie Streetwear Outfit Nữ Look #114",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #114 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-corset-xanh-xam-quan-cargo-sang-114.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset xanh xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo sáng",
          "link": "https://s.shopee.vn/6AjudXH0SN"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-115",
    "slug": "look-115-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-tank-kem-quan-cargo-do-ruou-115.webp",
    "tag": "LOOK #115",
    "title": "Baddie Streetwear Outfit Nữ Look #115",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #115 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-tank-kem-quan-cargo-do-ruou-115.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo tank kem",
          "link": "https://s.shopee.vn/40fQ3YPFrm"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đỏ rượu",
          "link": "https://s.shopee.vn/6AjudXH0SN"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-116",
    "slug": "look-116-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-ngoi-sao-xanh-quan-cargo-vang-116.webp",
    "tag": "LOOK #116",
    "title": "Baddie Streetwear Outfit Nữ Look #116",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #116 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-ngoi-sao-xanh-quan-cargo-vang-116.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo ngôi sao xanh",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo vàng",
          "link": "https://s.shopee.vn/6AjudXH0SN"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-117",
    "slug": "look-117-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-the-thao-quan-ong-rong-xanh-117.webp",
    "tag": "LOOK #117",
    "title": "Baddie Streetwear Outfit Nữ Look #117",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #117 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-the-thao-quan-ong-rong-xanh-117.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop thể thao",
          "link": "https://s.shopee.vn/2qTSfPTYio"
        },
        {
          "name": "QUẦN",
          "type": "Quần ống rộng xanh",
          "link": "https://s.shopee.vn/40fQ3YTaNe"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-118",
    "slug": "look-118-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-tay-dai-tim-quan-cargo-trang-118.webp",
    "tag": "LOOK #118",
    "title": "Baddie Streetwear Outfit Nữ Look #118",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #118 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-tay-dai-tim-quan-cargo-trang-118.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo tay dài tím",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo trắng",
          "link": "https://s.shopee.vn/4qEX35M5B1"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-119",
    "slug": "look-119-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-tre-vai-trang-quan-jean-xanh-119.webp",
    "tag": "LOOK #119",
    "title": "Baddie Streetwear Outfit Nữ Look #119",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #119 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-tre-vai-trang-quan-jean-xanh-119.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo trễ vai trắng",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần jean xanh",
          "link": "https://s.shopee.vn/6AjudXGrxG"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-120",
    "slug": "look-120-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-crop-xam-quan-cargo-den-120.webp",
    "tag": "LOOK #120",
    "title": "Dark Feminine Outfit Nữ Look #120",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #120 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-crop-xam-quan-cargo-den-120.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-121",
    "slug": "look-121-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-den-quan-cargo-xam-121.webp",
    "tag": "LOOK #121",
    "title": "Baddie Streetwear Outfit Nữ Look #121",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #121 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-den-quan-cargo-xam-121.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop đen",
          "link": "https://s.shopee.vn/3Vj9SdR1N0"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo xám",
          "link": "https://s.shopee.vn/9zwdCa2HBc"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-122",
    "slug": "look-122-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-co-vuong-xam-quan-ong-rong-trang-122.webp",
    "tag": "LOOK #122",
    "title": "Baddie Streetwear Outfit Nữ Look #122",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #122 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-co-vuong-xam-quan-ong-rong-trang-122.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo cổ vuông xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần ống rộng trắng",
          "link": "https://s.shopee.vn/40fQ3YTaNe"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-123",
    "slug": "look-123-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-lech-vai-den-quan-jean-rong-123.webp",
    "tag": "LOOK #123",
    "title": "Baddie Streetwear Outfit Nữ Look #123",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #123 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-crop-lech-vai-den-quan-jean-rong-123.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo crop lệch vai đen",
          "link": "https://s.shopee.vn/2VqcGnUpOu"
        },
        {
          "name": "QUẦN",
          "type": "Quần jean rong",
          "link": "https://s.shopee.vn/40fQ3YTaNe"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-124",
    "slug": "look-124-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-tre-vai-trang-quan-cargo-den-124.webp",
    "tag": "LOOK #124",
    "title": "Grunge Outfit Nữ Look #124",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #124 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-tre-vai-trang-quan-cargo-den-124.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic trễ vai trắng",
          "link": "https://s.shopee.vn/6pzbQlET6Z?lp=aff"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-125",
    "slug": "look-125-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-hai-day-trang-ao-khoac-xam-quan-cargo-125.webp",
    "tag": "LOOK #125",
    "title": "Baddie Streetwear Outfit Nữ Look #125",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #125 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-hai-day-trang-ao-khoac-xam-quan-cargo-125.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo hai dây trắng áo khoác xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo",
          "link": "https://s.shopee.vn/6AjudXH0SN"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-126",
    "slug": "look-126-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-thun-tre-vai-xam-quan-cargo-den-126.webp",
    "tag": "LOOK #126",
    "title": "Grunge Outfit Nữ Look #126",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #126 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-thun-tre-vai-xam-quan-cargo-den-126.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo thun trễ vai xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-127",
    "slug": "look-127-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-quay-xam-quan-cargo-olive-127.webp",
    "tag": "LOOK #127",
    "title": "Baddie Streetwear Outfit Nữ Look #127",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #127 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-quay-xam-quan-cargo-olive-127.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo quây xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo olive",
          "link": "https://s.shopee.vn/6AjudXH0SN"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-128",
    "slug": "look-128-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-hai-day-trang-quan-jean-xanh-128.webp",
    "tag": "LOOK #128",
    "title": "Baddie Streetwear Outfit Nữ Look #128",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #128 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-hai-day-trang-quan-jean-xanh-128.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo hai dây trắng",
          "link": "https://s.shopee.vn/2qTSfPTYio"
        },
        {
          "name": "QUẦN",
          "type": "Quần jean xanh",
          "link": "https://s.shopee.vn/6AjudXGrxG"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-129",
    "slug": "look-129-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-tre-vai-nau-quan-cargo-kaki-129.webp",
    "tag": "LOOK #129",
    "title": "Dark Feminine Outfit Nữ Look #129",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #129 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-tre-vai-nau-quan-cargo-kaki-129.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo trễ vai nâu",
          "link": "https://s.shopee.vn/7Kvs1gCZ5i"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo kaki",
          "link": "https://s.shopee.vn/4qEX35M5B1"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-130",
    "slug": "look-130-grunge",
    "img": "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-kem-quan-cargo-den-130.webp",
    "tag": "LOOK #130",
    "title": "Grunge Outfit Nữ Look #130",
    "category": "Grunge",
    "detail": {
      "title": "OUTFIT DETAILS #130 – Grunge",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-grunge-ao-graphic-kem-quan-cargo-den-130.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo graphic kem",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo đen",
          "link": "https://s.shopee.vn/7fYiQIBIPk"
        },
        {
          "name": "GIÀY",
          "type": "Combat boots đen",
          "link": "https://s.shopee.vn/7ps8cbAf4n"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2gA2TZ19ey"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3gMK"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/1BLEgo6rhX"
        }
      ]
    }
  },

  {
    "id": "look-131",
    "slug": "look-131-goth",
    "img": "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-den-quan-cargo-trang-131.webp",
    "tag": "LOOK #131",
    "title": "Goth Outfit Nữ Look #131",
    "category": "Goth",
    "detail": {
      "title": "OUTFIT DETAILS #131 – Goth",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-goth-ao-luoi-den-quan-cargo-trang-131.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo lưới đen",
          "link": "https://s.shopee.vn/qiOHjbAmk"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo trắng",
          "link": "https://s.shopee.vn/4qEX35M5B1"
        },
        {
          "name": "GIÀY",
          "type": "Platform boots đen",
          "link": "https://s.shopee.vn/1LeeseZPH0"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Choker hoặc dây chuyền bạc",
          "link": "https://s.shopee.vn/50XxFqsGvO"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/9fJmny3XrW"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đinh tán",
          "link": "https://s.shopee.vn/5VUDqlqMun"
        }
      ]
    }
  },

  {
    "id": "look-132",
    "slug": "look-132-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-tank-den-ao-khoac-the-thao-quan-cargo-132.webp",
    "tag": "LOOK #132",
    "title": "Baddie Streetwear Outfit Nữ Look #132",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #132 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-tank-den-ao-khoac-the-thao-quan-cargo-132.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo tank đen áo khoác thể thao",
          "link": "https://s.shopee.vn/5q74EvMber"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo",
          "link": "https://s.shopee.vn/6AjudXH0SN"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-133",
    "slug": "look-133-baddie-streetwear",
    "img": "/images/badgirl-outfits/outfit-nu-baddie-ao-corset-trang-quan-cargo-hong-133.webp",
    "tag": "LOOK #133",
    "title": "Baddie Streetwear Outfit Nữ Look #133",
    "category": "Baddie Streetwear",
    "detail": {
      "title": "OUTFIT DETAILS #133 – Baddie Streetwear",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-baddie-ao-corset-trang-quan-cargo-hong-133.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo corset trắng",
          "link": "https://s.shopee.vn/2qTSfPTYio"
        },
        {
          "name": "QUẦN",
          "type": "Quần cargo hồng",
          "link": "https://s.shopee.vn/6AjudXH0SN"
        },
        {
          "name": "GIÀY",
          "type": "Sneaker chunky",
          "link": "https://s.shopee.vn/6L3KpqGN7M"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai đen",
          "link": "https://s.shopee.vn/6fgBESF6RW"
        },
        {
          "name": "KÍNH",
          "type": "Kính râm đen",
          "link": "https://s.shopee.vn/AUstnV0VfZ"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền bạc",
          "link": "https://s.shopee.vn/2VqcHG1mzf"
        }
      ]
    }
  },

  {
    "id": "look-134",
    "slug": "look-134-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-tre-vai-xam-chan-vay-denim-den-134.webp",
    "tag": "LOOK #134",
    "title": "Dark Feminine Outfit Nữ Look #134",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #134 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-tre-vai-xam-chan-vay-denim-den-134.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo trễ vai xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "CHÂN VÁY",
          "type": "Chân váy denim đen",
          "link": "https://s.shopee.vn/8fRFc87UO6"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-135",
    "slug": "look-135-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-tre-vai-xam-quan-parachute-den-135.webp",
    "tag": "LOOK #135",
    "title": "Dark Feminine Outfit Nữ Look #135",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #135 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-tre-vai-xam-quan-parachute-den-135.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo trễ vai xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần paráchute đen",
          "link": "https://s.shopee.vn/5VUDqJJXoB"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  {
    "id": "look-136",
    "slug": "look-136-dark-feminine",
    "img": "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-tre-vai-xam-quan-jean-xanh-136.webp",
    "tag": "LOOK #136",
    "title": "Dark Feminine Outfit Nữ Look #136",
    "category": "Dark Feminine",
    "detail": {
      "title": "OUTFIT DETAILS #136 – Dark Feminine",
      "desc": "Nhấn vào từng mục để xem chi tiết sản phẩm.",
      "imgs": [
        "/images/badgirl-outfits/outfit-nu-dark-feminine-ao-tre-vai-xam-quan-jean-xanh-136.webp"
      ],
      "items": [
        {
          "name": "ÁO",
          "type": "Áo trễ vai xám",
          "link": "https://s.shopee.vn/9pdD0H2uWZ"
        },
        {
          "name": "QUẦN",
          "type": "Quần jean xanh",
          "link": "https://s.shopee.vn/7Kvs1gGtc6"
        },
        {
          "name": "GIÀY",
          "type": "Boot đen mũi nhọn",
          "link": "https://s.shopee.vn/9V0Mbf4JhL"
        },
        {
          "name": "TÚI",
          "type": "Túi đeo vai nâu hoặc đen",
          "link": "https://s.shopee.vn/5LAne0K2f2"
        },
        {
          "name": "DÂY CHUYỀN",
          "type": "Dây chuyền thánh giá",
          "link": "https://s.shopee.vn/AKZTbeXy6w"
        },
        {
          "name": "THẮT LƯNG",
          "type": "Thắt lưng đen",
          "link": "https://s.shopee.vn/3LPjGmycKD"
        }
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════
  //  ↓ THÊM OUTFIT MỚI Ở ĐÂY — copy block này, xoá dấu // rồi điền
  // ════════════════════════════════════════════════════════════════
  //
  // {
  //   id: "look-21",
  //   slug: "look-21-dark-feminine",       // ← thêm dòng này
  //   img: G(21, 1),
  //   tag: "LOOK #21",
  //   title: "Look 21",
  //   category: "Dark Feminine",
  //   detail: {
  //     title: "OUTFIT DETAILS #21",
  //     desc: "Mô tả ngắn về look này.",
  //     imgs: [ G(21,1), G(21,2), G(21,3), G(21,4) ],
  //     items: [
  //       { name: "ÁO",       type: "Top Item",    link: "LINK_SHOPEE" },
  //       { name: "QUẦN",     type: "Bottom Item", link: "LINK_SHOPEE" },
  //       { name: "GIÀY",     type: "Footwear",    link: "LINK_SHOPEE" },
  //       { name: "PHỤ KIỆN", type: "Accessories", link: "LINK_SHOPEE" },
  //     ]
  //   }
  // },

];

/* AC_NO_CROP_20260803_V3: preserve complete 9:16 outfit images in legacy 3:4 UI frames. */
(function applyApocalypseNoCropFixV3() {
  if (typeof document === 'undefined' || document.getElementById('apocalypse-no-crop-fix-v3')) return;
  const style = document.createElement('style');
  style.id = 'apocalypse-no-crop-fix-v3';
  style.textContent = `
    .outfit-card img,
    .thumb img,
    .slider-track img,
    .seo-static img,
    .related-card img {
      object-fit: contain !important;
      object-position: center center !important;
      background: transparent !important;
    }
    .outfit-card:hover img,
    .related-card:hover img {
      transform: none !important;
    }
  `;
  document.head.appendChild(style);
})();
