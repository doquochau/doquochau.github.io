// ═══════════════════════════════════════════════════════════════════
//  APOCALYPSE CLOSET — DATA FILE (SINGLE SOURCE OF TRUTH)
//
//  Chỉ cần sửa file này khi thêm/xoá/chỉnh sửa outfit.
//  Mọi trang (index, style, outfit-detail) đều đọc từ đây.
//
//  CATEGORY hợp lệ:
//    "Dark Feminine" | "E-Girl" | "Goth" | "Baddie Streetwear" | "Punk"
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
