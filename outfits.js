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
        { name: "ÁO", type: "Camisole trắng", link: "https://s.shopee.vn/Lm2XI33lk" },
        { name: "QUẦN", type: "Quần dây rút đen", link: "https://s.shopee.vn/W5Sjb2QQn" },
        { name: "GIÀY", type: "Sneaker chunky trắng", link: "https://s.shopee.vn/19C8g4KRi" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/BScKz3h6l" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/4qERtncILK" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/4fv1hUcvgJ" }
      
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
        { name: "ÁO", type: "Sweatshirt đen oversize", link: "https://s.shopee.vn/2LX6uxvRiC" },
        { name: "QUẦN", type: "Cargo rằn ri", link: "https://s.shopee.vn/2VqX7GuoNF" },
        { name: "GIÀY", type: "Clog trắng chunky", link: "https://s.shopee.vn/20uGWLwiOA" },
        { name: "KÍNH", type: "Kính gọng đen", link: "https://s.shopee.vn/2BDgiew53D" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/1gHQ7jxz48" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền mặt bạc", link: "https://s.shopee.vn/4VbbVBdZ1I" }
      
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
        { name: "ÁO", type: "Crop tee graphic trắng", link: "https://s.shopee.vn/1qaqK2xLjB?lp=aff" },
        { name: "QUẦN", type: "Cargo đen ống rộng", link: "https://s.shopee.vn/1LeZj7zFk6" },
        { name: "GIÀY", type: "Combat boots đen", link: "https://s.shopee.vn/1VxzvQycP9" },
        { name: "ARM WARMER", type: "Arm warmer kẻ sọc", link: "https://s.shopee.vn/4LIBIseCMH" },
        { name: "DÂY ĐAI", type: "Dây đai eo đen", link: "https://s.shopee.vn/4Ayl6ZephG" },
        { name: "DÂY CHUYỀN", type: "Choker xích bạc", link: "https://s.shopee.vn/40fKuGfT2F" }
      
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
        { name: "ÁO", type: "Áo trễ vai nâu", link: "https://s.shopee.vn/3g2UVPqN0a" },
        { name: "QUẦN", type: "Jeans rách tua rua", link: "https://s.shopee.vn/3qLuhipjfd" },
        { name: "GIÀY", type: "Platform đen chunky", link: "https://s.shopee.vn/3LPe6nrdgY" },
        { name: "DÂY XÍCH", type: "Xích quần ánh vàng", link: "https://s.shopee.vn/3qLuhxg6NE" },
        { name: "THẮT LƯNG", type: "Thắt lưng khóa vuông", link: "https://s.shopee.vn/3g2UVegjiD" }
      
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
        { name: "ÁO", type: "Graphic tee đen", link: "https://s.shopee.vn/3Vj4J6r0Lb" },
        { name: "QUẦN", type: "Jeans rách xám", link: "https://s.shopee.vn/30mniBsuMW" },
        { name: "GIÀY", type: "Sneaker cổ cao đen", link: "https://s.shopee.vn/3B6DuUsH1Z" },
        { name: "KÍNH", type: "Kính chữ nhật đen", link: "https://s.shopee.vn/2g9xJZuB2U" },
        { name: "DÂY CHUYỀN", type: "Xích bạc layer", link: "https://s.shopee.vn/3Vj4JLhN3C" }
      
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
        { name: "ÁO", type: "Graphic tee đỏ", link: "https://s.shopee.vn/2qTNVstXhX" },
        { name: "QUẦN", type: "Short đen cạp cao", link: "https://s.shopee.vn/50Xs5rlIIy" },
        { name: "GIÀY", type: "Combat boots platform", link: "https://s.shopee.vn/5ArIIAkey1" },
        { name: "QUẦN TẤT", type: "Quần tất rách đen", link: "https://s.shopee.vn/3LPe72i0OB" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/3B6DujidjA" },
        { name: "DÂY XÍCH", type: "Xích quần bạc", link: "https://s.shopee.vn/30mniQjH49" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/4fv1hFmYyw" }
      
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
        { name: "ÁO", type: "Tube top đen", link: "https://s.shopee.vn/4qERtYlvdz" },
        { name: "QUẦN", type: "Parachute đen", link: "https://s.shopee.vn/4LIBIdnpeu" },
        { name: "GIÀY", type: "Boot mũi nhọn đen", link: "https://s.shopee.vn/4VbbUwnCJx" },
        { name: "MŨ", type: "Bucket hat họa tiết", link: "https://s.shopee.vn/40fKu1p6Ks" },
        { name: "ÁO KHOÁC", type: "Puffer đen oversize", link: "https://s.shopee.vn/2qTNW7juP8" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/4Ayl6KoSzv" },
        { name: "TÚI", type: "Túi xách đen", link: "https://s.shopee.vn/6L3FgJgDbM" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/2g9xJokXk7" }
      
      
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
        { name: "ÁO", type: "Crop tee đỏ", link: "https://s.shopee.vn/6VMfscfaGP" },
        { name: "QUẦN", type: "Jeans cargo xanh", link: "https://s.shopee.vn/60QPHhhUHK" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/6AjpU0gqwN" },
        { name: "MŨ", type: "Mũ newsboy đỏ đen", link: "https://s.shopee.vn/5fnYt5ikxI" },
        { name: "VÁY LAYER", type: "Váy layer đỏ đen", link: "https://s.shopee.vn/7fYdH0RVb6" },
        { name: "THẮT LƯNG", type: "Thắt lưng lỗ bạc", link: "https://s.shopee.vn/7ps3TJQsG9" },
        { name: "TÚI", type: "Túi mini đen", link: "https://s.shopee.vn/5q6z5Oi7cL" },
        { name: "DÂY CHUYỀN", type: "Choker đen bạc", link: "https://s.shopee.vn/7KvmsOSmH4" }
      
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
        { name: "ÁO", type: "Áo thun đen", link: "https://s.shopee.vn/5LAiUTk1dG" },
        { name: "QUẦN", type: "Cargo rằn ri xanh", link: "https://s.shopee.vn/5VU8gmjOIJ" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/7fYdGlb8tk" },
        { name: "TÚI", type: "Túi xách đen", link: "https://s.shopee.vn/7ps3T4aVYn" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/7VFD4hS8w7" }
      
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
        { name: "ÁO", type: "Crop top cổ lọ", link: "https://s.shopee.vn/7Kvms9cPZi" },
        { name: "QUẦN", type: "Jeans rách đen", link: "https://s.shopee.vn/7VFD4SbmEl" },
        { name: "GIÀY", type: "Platform boots đen", link: "https://s.shopee.vn/70IwTXdgFg" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/70IwTmU2x2" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền mặt bạc", link: "https://s.shopee.vn/7AcMg5TPc5" },
        { name: "TAI NGHE", type: "Tai nghe chụp tai", link: "https://s.shopee.vn/6fg65AVJd0" }
      
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
        { name: "ÁO", type: "Camisole satin trắng", link: "https://s.shopee.vn/7AcMfqd2uj" },
        { name: "QUẦN", type: "Short đen", link: "https://s.shopee.vn/6fg64vewve" },
        { name: "GIÀY", type: "Sneaker chunky trắng", link: "https://s.shopee.vn/6pzWHEeJah" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/6pzWHTUgI3" },
        { name: "TẤT", type: "Tất cổ cao trắng", link: "https://s.shopee.vn/9040rDW4C8" },
        { name: "KÍNH", type: "Kính trắng oval", link: "https://s.shopee.vn/9ANR3WVQrB" },
        { name: "DÂY CHUYỀN", type: "Xích bạc chunky", link: "https://s.shopee.vn/6L3FgYWaIy" },
        { name: "TÚI", type: "Túi xích đen", link: "https://s.shopee.vn/8fRASbXKs6" },
        { name: "TAI NGHE", type: "Tai nghe bạc đen", link: "https://s.shopee.vn/6VMfsrVwy1" }
      
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
        { name: "ÁO", type: "Halter top đen", link: "https://s.shopee.vn/8pkaeuWhX9" },
        { name: "QUẦN", type: "Bermuda denim đen", link: "https://s.shopee.vn/8KoK3zYbY4" },
        { name: "GIÀY", type: "Platform boots đen trắng", link: "https://s.shopee.vn/8V7kGIXyD7" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/60QPHwXqyw" },
        { name: "LEG WARMER", type: "Leg warmer trắng", link: "https://s.shopee.vn/6AjpUFXDdz" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/5fnYtKZ7eu" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/80BTfNZsE2" },
        { name: "TAI NGHE", type: "Tai nghe đỏ đen", link: "https://s.shopee.vn/5q6z5dYUJx" }
      
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
        { name: "ÁO", type: "Camisole đen", link: "https://s.shopee.vn/8AUtrgZEt5" },
        { name: "QUẦN", type: "Short đen", link: "https://s.shopee.vn/AKZORfQzUW" },
        { name: "GIÀY", type: "Boot cao gối đen", link: "https://s.shopee.vn/AUsodyQM9Z" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/9zwY33SGAU" },
        { name: "LEG WARMER", type: "Leg warmer trắng", link: "https://s.shopee.vn/5LAiUiaOKs" },
        { name: "DÂY CHUYỀN", type: "Vòng cổ khoen bạc", link: "https://s.shopee.vn/5VU8h1Zkzv" },
        { name: "TAI NGHE", type: "Tai nghe bạc", link: "https://s.shopee.vn/AKZORuHMBs" },
        { name: "TÚI", type: "Túi tote trắng", link: "https://s.shopee.vn/AAFyFMRcpX" }
      
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
        { name: "ÁO", type: "Tank top Brazil", link: "https://s.shopee.vn/9fJheRTWqS" },
        { name: "QUẦN", type: "Jeans baggy rách", link: "https://s.shopee.vn/9pd7qkStVV" },
        { name: "GIÀY", type: "Sneaker xanh vàng", link: "https://s.shopee.vn/9KgrFpUnWQ" },
        { name: "KHĂN", type: "Bandana xanh lá", link: "https://s.shopee.vn/9V0HS8UABT" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/AUsoeDGiqv" },
        { name: "THẮT LƯNG", type: "Thắt lưng đen", link: "https://s.shopee.vn/9zwY3IIcrq" }
      
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
        { name: "ÁO", type: "Camisole đen", link: "https://s.shopee.vn/1BL9Wozt5s" },
        { name: "QUẦN", type: "Cargo graffiti trắng", link: "https://s.shopee.vn/111jKW0WQr" },
        { name: "GIÀY", type: "Platform đen trắng", link: "https://s.shopee.vn/qiJ8D19lq" },
        { name: "MŨ", type: "Mũ lưỡi trai đen", link: "https://s.shopee.vn/gOsvu1n6p" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/AAFyFbHzWt" },
        { name: "TÚI", type: "Túi mini đen", link: "https://s.shopee.vn/W5Sjb2QRo" },
        { name: "VÒNG TAY", type: "Vòng tay bạc", link: "https://s.shopee.vn/9fJhegJtXo" }
      
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
        { name: "ÁO", type: "Halter top đen", link: "https://s.shopee.vn/7ps3T4fOAT" },
        { name: "QUẦN", type: "Cargo đen nhiều túi", link: "https://s.shopee.vn/7Kvms9hIBO" },
        { name: "GIÀY", type: "Sneaker chunky đen", link: "https://s.shopee.vn/7VFD4SgeqR" },
        { name: "MŨ", type: "Beanie lỗ bạc", link: "https://s.shopee.vn/70IwTXiYrM" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/9pd7qzJGCr" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/9KgrG4LADm" },
        { name: "VÒNG TAY", type: "Wrist cuff đen", link: "https://s.shopee.vn/9V0HSNKWsp" }
      
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
        { name: "ÁO", type: "Graphic tee đen", link: "https://s.shopee.vn/7AcMfqhvWP" },
        { name: "QUẦN", type: "Jeans baggy xanh", link: "https://s.shopee.vn/6fg64vjpXK" },
        { name: "GIÀY", type: "Sneaker đen", link: "https://s.shopee.vn/6pzWHEjCCN" },
        { name: "MŨ", type: "Mũ caro nâu", link: "https://s.shopee.vn/6L3FgJl6DI" },
        { name: "TÚI", type: "Túi đeo chéo đen", link: "https://s.shopee.vn/6VMfsckSsL" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền mặt bạc", link: "https://s.shopee.vn/9040rSMQtk" },
        { name: "THẮT LƯNG", type: "Thắt lưng da nâu", link: "https://s.shopee.vn/9ANR3lLnYn" }
      
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
        { name: "ÁO", type: "Crop top đen", link: "https://s.shopee.vn/60QPHhmMtG" },
        { name: "QUẦN", type: "Jeans rách đen", link: "https://s.shopee.vn/6AjpU0ljYJ" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/5fnYt5ndZE" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/8fRASqNhZi" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/5q6z5On0EH" },
        { name: "THẮT LƯNG", type: "Thắt lưng đinh tán", link: "https://s.shopee.vn/8pkaf9N4El" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/8KoK4EOyFg" }
      
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
        { name: "ÁO", type: "Bandeau đen", link: "https://s.shopee.vn/5LAiUTouFC" },
        { name: "QUẦN", type: "Cargo rách phối lưới", link: "https://s.shopee.vn/5VU8gmoGuF" },
        { name: "GIÀY", type: "Combat boots trắng", link: "https://s.shopee.vn/AKZORfVs6C" },
        { name: "ÁO KHOÁC", type: "Biker jacket trắng", link: "https://s.shopee.vn/8V7kGXOKuj" },
        { name: "DÂY XÍCH", type: "Xích quần layer bạc", link: "https://s.shopee.vn/80BTfcQEve" },
        { name: "CHOKER", type: "Choker xích bạc", link: "https://s.shopee.vn/AUsodyVElF" }
      
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
        { name: "ÁO", type: "Crop tee trắng", link: "https://s.shopee.vn/9zwY33X8mA" },
        { name: "QUẦN", type: "Jogger xám", link: "https://s.shopee.vn/AAFyFMWVRD" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/9fJheRYPS8" },
        { name: "ARM WARMER", type: "Arm warmer đen", link: "https://s.shopee.vn/8AUtrvPbah" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/2LX6vCloQa" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/9pd7qkXm7B" }
      
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
        { name: "ÁO", type: "Crop top đen", link: "https://s.shopee.vn/9KgrFpZg86" },
        { name: "QUẦN", type: "Jeans đen ống rộng", link: "https://s.shopee.vn/9V0HS8Z2n9" },
        { name: "GIÀY", type: "Platform màu tan", link: "https://s.shopee.vn/9040rDawo4" },
        { name: "ÁO KHOÁC", type: "Puffer trắng oversize", link: "https://s.shopee.vn/2VqX7VlB5d" },
        { name: "MŨ", type: "Mũ lưỡi trai đen", link: "https://s.shopee.vn/9ANR3WaJT7" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/8fRASbcDU2" },
        { name: "TÚI", type: "Túi charm đen", link: "https://s.shopee.vn/8pkaeuba95" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/20uGWan56Y" }
      
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
        { name: "ÁO", type: "Crop top lệch vai", link: "https://s.shopee.vn/8KoK3zdUA0" },
        { name: "QUẦN", type: "Jeans phối ren đen", link: "https://s.shopee.vn/8V7kGIcqp3" },
        { name: "GIÀY", type: "Mary Jane đen", link: "https://s.shopee.vn/80BTfNekpy" },
        { name: "MŨ", type: "Mũ lưỡi trai đen", link: "https://s.shopee.vn/8AUtrge7V1" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/2BDgitmRlb" }
      
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
        { name: "ÁO", type: "Crop tee trắng đỏ", link: "https://s.shopee.vn/2LX6uy0KKu" },
        { name: "QUẦN", type: "Track pants trắng đỏ", link: "https://s.shopee.vn/2VqX7Gzgzx" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/20uGWM1b0s" },
        { name: "VÒNG TAY", type: "Vòng tay bạc", link: "https://s.shopee.vn/1gHQ7yoLmW" }
      
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
        { name: "ÁO", type: "Graphic tee đen", link: "https://s.shopee.vn/2BDgif0xfv" },
        { name: "QUẦN", type: "Short đen", link: "https://s.shopee.vn/1gHQ7k2rgq" },
        { name: "GIÀY", type: "Combat boots cao cổ", link: "https://s.shopee.vn/1qaqK32ELt" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/1qaqKHniRZ" }
      
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
        { name: "ÁO", type: "Áo lưới graphic đen", link: "https://s.shopee.vn/1LeZj848Mo" },
        { name: "QUẦN", type: "Cargo navy ống rộng", link: "https://s.shopee.vn/1VxzvR3V1r" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/111jKW5P2m" },
        { name: "MŨ", type: "Beanie khoen bạc", link: "https://s.shopee.vn/1BL9Wp4lhp" },
        { name: "ARM WARMER", type: "Arm warmer đen", link: "https://s.shopee.vn/1LeZjMpcSU" },
        { name: "DÂY XÍCH", type: "Xích quần đen bạc", link: "https://s.shopee.vn/1Vxzvfoz7X" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền layer bạc", link: "https://s.shopee.vn/111jKkqt8S" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/gOsvu6fik" }
      
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
        { name: "ÁO", type: "Áo trễ vai xám", link: "https://s.shopee.vn/qiJ8D62Nn" },
        { name: "QUẦN", type: "Cargo jeans xám", link: "https://s.shopee.vn/Lm2XI7wOi" },
        { name: "GIÀY", type: "Boot màu tan", link: "https://s.shopee.vn/W5Sjb7J3l" },
        { name: "ÁO SƠ MI", type: "Sơ mi caro buộc eo", link: "https://s.shopee.vn/1BL9X3qFnV" },
        { name: "TÚI", type: "Túi đeo vai nâu", link: "https://s.shopee.vn/19C8g9D4g" },
        { name: "DÂY XÍCH", type: "Xích quần bạc", link: "https://s.shopee.vn/gOsw8s9oQ" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/qiJ8RrWTT" }
      
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
        { name: "ÁO", type: "Graphic tee nâu", link: "https://s.shopee.vn/BScKz8Zjj" },
        { name: "QUẦN", type: "Jeans baggy xám", link: "https://s.shopee.vn/50Xs5rqAvg" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/5ArIIApXaj" },
        { name: "MŨ", type: "Beanie trắng", link: "https://s.shopee.vn/4fv1hFrRbe" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/Lm2XWtQUO" },
        { name: "TÚI", type: "Túi đeo vai đen", link: "https://s.shopee.vn/4qERtYqoGh" }
      
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
        { name: "ÁO", type: "Crop tee trắng", link: "https://s.shopee.vn/4LIBIdsiHc" },
        { name: "QUẦN", type: "Parachute beige", link: "https://s.shopee.vn/4VbbUws4wf" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/40fKu1tyxa" },
        { name: "MŨ", type: "Mũ trapper nâu", link: "https://s.shopee.vn/4Ayl6KtLcd" },
        { name: "THẮT LƯNG", type: "Thắt lưng trắng", link: "https://s.shopee.vn/W5Sjpsn9R" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/19C8uuhAM" },
        { name: "TÚI", type: "Túi xách bạc", link: "https://s.shopee.vn/3g2UVPvFdY" }
      
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
        { name: "ÁO", type: "Camisole da báo", link: "https://s.shopee.vn/3qLuhiucIb" },
        { name: "QUẦN", type: "Jeans wash nâu", link: "https://s.shopee.vn/3LPe6nwWJW" },
        { name: "GIÀY", type: "Giày da báo", link: "https://s.shopee.vn/3Vj4J6vsyZ" },
        { name: "TÚI", type: "Túi xách đen", link: "https://s.shopee.vn/30mniBxmzU" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/BScLDu3pP" },
        { name: "THẮT LƯNG", type: "Thắt lưng da nâu", link: "https://s.shopee.vn/50Xs66bf1M" }
      
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
        { name: "ÁO", type: "Corset nâu", link: "https://s.shopee.vn/3B6DuUx9eX" },
        { name: "QUẦN", type: "Jeans cargo xám", link: "https://s.shopee.vn/2g9xJZz3fS" },
        { name: "GIÀY", type: "Sneaker nâu", link: "https://s.shopee.vn/2qTNVsyQKV" },
        { name: "ÁO KHOÁC", type: "Bolero len kem", link: "https://s.shopee.vn/5ArIIPb1gP" },
        { name: "ÁO SƠ MI", type: "Sơ mi caro buộc eo", link: "https://s.shopee.vn/4fv1hUcvhK" },
        { name: "TÚI", type: "Túi đeo vai nâu", link: "https://s.shopee.vn/7ps3T4fOBU" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/4qERtncIMN" }
      
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
        { name: "ÁO", type: "Áo thun đen", link: "https://s.shopee.vn/7fYdGlg1WT" },
        { name: "QUẦN", type: "Jeans baggy xanh", link: "https://s.shopee.vn/7VFD4SgerS" },
        { name: "GIÀY", type: "Clog trắng", link: "https://s.shopee.vn/7Kvms9hICR" },
        { name: "TÚI", type: "Túi tote trắng", link: "https://s.shopee.vn/7AcMfqhvXQ" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/4LIBIseCNI" },
        { name: "THẮT LƯNG", type: "Thắt lưng trắng", link: "https://s.shopee.vn/4VbbVBdZ2L" }
      
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
        { name: "ÁO", type: "Tank top đen", link: "https://s.shopee.vn/9KgrFpZ3mM" },
        { name: "QUẦN", type: "Quần ống rộng đen", link: "https://s.shopee.vn/9V0HS8YQRP" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/AKZORfVFka" },
        { name: "THẮT LƯNG", type: "Western belt đen trắng", link: "https://s.shopee.vn/40fKuGfT3G" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/4Ayl6ZepiJ" }
      
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
        { name: "ÁO", type: "Corset đen đỏ", link: "https://s.shopee.vn/AUsodyUcPd" },
        { name: "QUẦN", type: "Jeans baggy xanh nhạt", link: "https://s.shopee.vn/9zwY33WWQY" },
        { name: "GIÀY", type: "Platform đỏ", link: "https://s.shopee.vn/AAFyFMVt5b" },
        { name: "MŨ", type: "Beret đỏ", link: "https://s.shopee.vn/W5Sjb6ghk" },
        { name: "KÍNH", type: "Kính gọng đen", link: "https://s.shopee.vn/Lm2XI7K2j" },
        { name: "TÚI", type: "Túi corset đỏ", link: "https://s.shopee.vn/BScKz7xNi" },
        { name: "CÀ VẠT", type: "Cà vạt sọc đỏ", link: "https://s.shopee.vn/3g2UVegjjE" },
        { name: "DÂY XÍCH", type: "Xích quần bạc", link: "https://s.shopee.vn/3qLuhxg6OH" }
      
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
        { name: "ÁO", type: "Crop tee đen", link: "https://s.shopee.vn/19C8g8aih" },
        { name: "QUẦN", type: "Jogger xám", link: "https://s.shopee.vn/1BL9Wp49Lw" },
        { name: "GIÀY", type: "Platform màu beige", link: "https://s.shopee.vn/111jKW4mgv" },
        { name: "MŨ", type: "Mũ lưỡi trai đen", link: "https://s.shopee.vn/qiJ8D5Q1u" },
        { name: "KHĂN", type: "Khăn choàng graphic", link: "https://s.shopee.vn/gOsvu63Mt" },
        { name: "DÂY XÍCH", type: "Xích quần bạc", link: "https://s.shopee.vn/3LPe72i0PC" },
        { name: "TÚI", type: "Túi xách đen", link: "https://s.shopee.vn/1qaqK31c08" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/3Vj4JLhN4F" }
      
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
        { name: "ÁO", type: "Crop top trễ vai", link: "https://s.shopee.vn/1gHQ7k2FL7" },
        { name: "QUẦN", type: "Jeans đen ống rộng", link: "https://s.shopee.vn/1VxzvR2sg6" },
        { name: "GIÀY", type: "Sneaker đỏ", link: "https://s.shopee.vn/1LeZj83W15" },
        { name: "TÚI", type: "Túi tote đen", link: "https://s.shopee.vn/2VqX7Gz4eK" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/30mniQjH5A" }
      
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
        { name: "ÁO", type: "Áo trễ vai đen", link: "https://s.shopee.vn/2LX6uxzhzJ" },
        { name: "QUẦN", type: "Jeans baggy xanh", link: "https://s.shopee.vn/2BDgif0LKI" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/20uGWM0yfH" },
        { name: "THẮT LƯNG", type: "Western belt nâu", link: "https://s.shopee.vn/3B6DujidkD" },
        { name: "TÚI", type: "Túi đeo vai nâu", link: "https://s.shopee.vn/3B6DuUwXIW" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/2g9xJokXl8" },
        { name: "MÓC KHÓA", type: "Charm lông nâu", link: "https://s.shopee.vn/2qTNW7juQB" }
      
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
        { name: "ÁO", type: "Crop tank đen", link: "https://s.shopee.vn/30mniBxAdV" },
        { name: "QUẦN", type: "Quần tây đen", link: "https://s.shopee.vn/2qTNVsxnyU" },
        { name: "GIÀY", type: "Sneaker đỏ", link: "https://s.shopee.vn/2g9xJZyRJT" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/7VFD4hS8x6" },
        { name: "THẮT LƯNG", type: "Thắt lưng đỏ", link: "https://s.shopee.vn/7KvmsOSmI5" },
        { name: "TÚI", type: "Túi xích đỏ", link: "https://s.shopee.vn/3qLuhitzwi" },
        { name: "KÍNH", type: "Kính râm đen", link: "https://s.shopee.vn/3g2UVPudHh" },
        { name: "TAI NGHE", type: "Tai nghe chụp tai", link: "https://s.shopee.vn/7ps3TJQsHC" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền bạc", link: "https://s.shopee.vn/7fYdH0RVcB" }
      
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
        { name: "ÁO", type: "Crop top cổ lọ", link: "https://s.shopee.vn/3Vj4J6vGcg" },
        { name: "QUẦN", type: "Jeans rách đen", link: "https://s.shopee.vn/3LPe6nvtxf" },
        { name: "GIÀY", type: "Platform boots đen", link: "https://s.shopee.vn/4VbbUwrSau" },
        { name: "ÁO KHOÁC", type: "Biker jacket đen", link: "https://s.shopee.vn/6pzWHTUgJ2" },
        { name: "THẮT LƯNG", type: "Thắt lưng đen", link: "https://s.shopee.vn/6fg65AVJe1" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền mặt bạc", link: "https://s.shopee.vn/7AcMg5TPd8" },
        { name: "TAI NGHE", type: "Tai nghe chụp tai", link: "https://s.shopee.vn/70IwTmU2y7" }
      
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
        { name: "ÁO", type: "Tank top đen", link: "https://s.shopee.vn/4LIBIds5vt" },
        { name: "QUẦN", type: "Quần ống rộng đen", link: "https://s.shopee.vn/4Ayl6KsjGs" },
        { name: "GIÀY", type: "Sneaker đen trắng", link: "https://s.shopee.vn/40fKu1tMbr" },
        { name: "THẮT LƯNG", type: "Western belt đen trắng", link: "https://s.shopee.vn/6AjpUFXDey" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/60QPHwXqzx" }
      
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
        { name: "ÁO", type: "Crop top cutout trắng", link: "https://s.shopee.vn/5ArIIAovF6" },
        { name: "QUẦN", type: "Jeans baggy xanh", link: "https://s.shopee.vn/50Xs5rpYa5" },
        { name: "GIÀY", type: "Sneaker trắng", link: "https://s.shopee.vn/4qERtYqBv4" },
        { name: "THẮT LƯNG", type: "Thắt lưng đen", link: "https://s.shopee.vn/6VMfsrVwz4" },
        { name: "DÂY CHUYỀN", type: "Dây chuyền thánh giá", link: "https://s.shopee.vn/6L3FgYWaK3" }
      
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
