/* =====================================================
   FILE: script.js
   MÔ TẢ: Toàn bộ logic JavaScript của website bán xe máy
   Bao gồm: dữ liệu sản phẩm, slider, tìm kiếm, giỏ hàng,
   hiệu ứng cuộn, đồng hồ, taskbar, điều hướng menu...
   ===================================================== */

/* =====================================================
   1. DỮ LIỆU SẢN PHẨM MẪU (20 SẢN PHẨM)
   Mỗi sản phẩm gồm: id, name, brand, price, oldPrice,
   image, engine, fuel, category, description, rating,
   stock, color, year
   ===================================================== */
const PRODUCTS = [
    {
        id: 1, name: "Honda Winner X", brand: "Honda", price: 46000000, oldPrice: 49000000,
        image: "assets/images/Honda Winner X.jpg",
        engine: "150cc, 4 kỳ, SOHC, PGM-FI", fuel: "1.99 lít/100km", category: "Xe côn tay",
        description: "Honda Winner X sở hữu thiết kế thể thao cá tính, động cơ mạnh mẽ cùng công nghệ phun xăng điện tử PGM-FI giúp tiết kiệm nhiên liệu vượt trội, phù hợp cho phái mạnh yêu thích tốc độ.",
        rating: 4.8, stock: 12, color: "Đen - Đỏ", year: 2026
    },
    {
        id: 2, name: "Honda SH 160i", brand: "Honda", price: 95000000, oldPrice: 98000000,
        image: "assets/images/Honda SH 160i.webp",
        engine: "160cc, 4 kỳ, eSP+", fuel: "1.85 lít/100km", category: "Xe tay ga",
        description: "Mẫu xe tay ga cao cấp mang tính biểu tượng, thiết kế sang trọng, vận hành êm ái, trang bị đầy đủ tiện nghi hiện đại dành cho giới doanh nhân và người sành xe.",
        rating: 4.9, stock: 8, color: "Trắng", year: 2026
    },
    {
        id: 3, name: "Honda Vision 2026", brand: "Honda", price: 31800000, oldPrice: 34000000,
        image: "assets/images/Honda Vision 2026.jpg",
        engine: "110cc, 4 kỳ, eSP", fuel: "1.75 lít/100km", category: "Xe tay ga",
        description: "Chiếc xe tay ga quốc dân với thiết kế trẻ trung, nhỏ gọn, tiết kiệm nhiên liệu, phù hợp cho học sinh, sinh viên và các bạn nữ di chuyển trong đô thị.",
        rating: 4.7, stock: 20, color: "Đỏ", year: 2026
    },
    {
        id: 4, name: "Honda Air Blade 160", brand: "Honda", price: 67500000, oldPrice: 68000000,
        image: "assets/images/Honda Air Blade 160.jpg",
        engine: "160cc, 4 kỳ, eSP+", fuel: "1.9 lít/100km", category: "Xe tay ga",
        description: "Air Blade 160 mang phong cách thể thao mạnh mẽ, khối động cơ 160cc bốc hơn hẳn cho cảm giác lái phấn khích trên mọi cung đường.",
        rating: 4.6, stock: 15, color: "Xám xanh đậm", year: 2026
    },
    {
        id: 5, name: "Yamaha Exciter 155 VVA", brand: "Yamaha", price: 48000000, oldPrice: 50000000,
        image: "assets/images/Yamaha Exciter 155 VVA.webp",
        engine: "155cc, VVA, Blue Core", fuel: "2.0 lít/100km", category: "Xe côn tay",
        description: "Ông vua côn tay của giới trẻ Việt, công nghệ van biến thiên VVA cho sức mạnh vượt trội ở mọi dải tua máy, thiết kế khí động học ấn tượng.",
        rating: 4.9, stock: 10, color: "Xanh ngọc", year: 2026
    },
    {
        id: 6, name: "Yamaha NVX 155", brand: "Yamaha", price: 56500000, oldPrice: 57000000,
        image: "assets/images/Yamaha NVX 155.webp",
        engine: "155cc, VVA, Blue Core", fuel: "2.1 lít/100km", category: "Xe tay ga",
        description: "Mẫu tay ga thể thao với vóc dáng cơ bắp, phanh ABS an toàn, màn hình đồng hồ điện tử hiện đại, thích hợp cho những chuyến đi xa.",
        rating: 4.7, stock: 9, color: "Xám đen", year: 2026
    },
    {
        id: 7, name: "Yamaha Janus", brand: "Yamaha", price: 28600000, oldPrice: 29700000,
        image: "assets/images/Yamaha Janus.webp",
        engine: "125cc, Blue Core", fuel: "1.8 lít/100km", category: "Xe tay ga",
        description: "Thiết kế nhỏ xinh đáng yêu, trọng lượng nhẹ dễ điều khiển, tiêu hao nhiên liệu thấp, rất được lòng các bạn nữ và người mới lái.",
        rating: 4.5, stock: 18, color: "Xanh ngọc", year: 2025
    },
    {
        id: 8, name: "Yamaha Grande Hybrid", brand: "Yamaha", price: 46000000, oldPrice: 46800000,
        image: "assets/images/Yamaha Grande Hybrid.webp",
        engine: "125cc, Hybrid Blue Core", fuel: "1.7 lít/100km", category: "Xe tay ga",
        description: "Mẫu xe tay ga cao cấp dành cho phái đẹp, công nghệ Hybrid tiết kiệm xăng, thiết kế thanh lịch sang trọng đậm chất châu Âu.",
        rating: 4.6, stock: 11, color: "Xanh dương nhạt", year: 2026
    },
    {
        id: 9, name: "Suzuki Raider R150", brand: "Suzuki", price: 45000000, oldPrice: 46200000,
        image: "assets/images/Suzuki Raider R150.webp",
        engine: "150cc, DOHC, Fuel Injection", fuel: "2.1 lít/100km", category: "Xe côn tay",
        description: "Raider R150 nổi bật với thiết kế góc cạnh sắc sảo, động cơ DOHC cho khả năng tăng tốc ấn tượng, phù hợp dân chơi xe thể thao.",
        rating: 4.5, stock: 7, color: "Đen - Trắng", year: 2026
    },
    {
        id: 10, name: "Suzuki Address", brand: "Suzuki", price: 30000000, oldPrice: 32000000,
        image: "assets/images/Suzuki Address.jpg",
        engine: "113cc, SEP", fuel: "1.75 lít/100km", category: "Xe tay ga",
        description: "Mẫu xe tay ga nhỏ gọn tiết kiệm nhiên liệu hàng đầu phân khúc, cốp xe rộng rãi tiện dụng cho việc di chuyển hằng ngày.",
        rating: 4.4, stock: 14, color: "Trắng", year: 2025
    },
    {
        id: 11, name: "Suzuki GSX-R150", brand: "Suzuki", price: 71000000, oldPrice: 78000000,
        image: "assets/images/Suzuki GSX-R150.webp",
        engine: "150cc, DOHC 4 xupap", fuel: "2.3 lít/100km", category: "Xe thể thao",
        description: "Chiếc sportbike đậm chất đua với thiết kế mô phỏng GSX-R1000, khung xe nhôm cứng cáp, tư thế lái thể thao đúng chuẩn.",
        rating: 4.8, stock: 5, color: "Vàng", year: 2026
    },
    {
        id: 12, name: "Suzuki Satria F150", brand: "Suzuki", price: 52500000, oldPrice: 53500000,
        image: "assets/images/Suzuki Satria F150.webp",
        engine: "150cc, DOHC", fuel: "2.2 lít/100km", category: "Xe côn tay",
        description: "Satria F150 là mẫu xe côn tay huyền thoại với hiệu suất vận hành mạnh mẽ và thiết kế đậm chất đường phố.",
        rating: 4.6, stock: 6, color: "Xanh dương", year: 2026
    },
    {
        id: 13, name: "Piaggio Vespa Primavera", brand: "Piaggio", price: 84466000, oldPrice: 89000000,
        image: "assets/images/Piaggio Vespa Primavera.avif",
        engine: "150cc, i-Get", fuel: "2.0 lít/100km", category: "Xe tay ga",
        description: "Biểu tượng phong cách Ý cổ điển pha lẫn hiện đại, Vespa Primavera mang lại vẻ đẹp sang trọng vượt thời gian cho người sở hữu.",
        rating: 4.9, stock: 6, color: "Xanh xám", year: 2026
    },
    {
        id: 14, name: "Piaggio Liberty", brand: "Piaggio", price: 57500000, oldPrice: 58000000,
        image: "assets/images/Piaggio Liberty.webp",
        engine: "125cc, i-Get", fuel: "1.9 lít/100km", category: "Xe tay ga",
        description: "Mẫu xe tay ga phong cách Ý với thiết kế thanh thoát, khoang chứa đồ rộng, vận hành êm ái, thích hợp cho nữ giới hiện đại.",
        rating: 4.5, stock: 10, color: "Đen", year: 2026
    },
    {
        id: 15, name: "Piaggio Medley", brand: "Piaggio", price: 96800000, oldPrice: 99800000,
        image: "assets/images/Piaggio Medley.avif",
        engine: "150cc, i-Get ABS", fuel: "2.1 lít/100km", category: "Xe tay ga",
        description: "Medley là mẫu Maxi-scooter đẳng cấp với vóc dáng bệ vệ, trang bị phanh ABS 2 kênh, mang lại sự an toàn và sang trọng tối đa.",
        rating: 4.7, stock: 4, color: "Xanh ngọc", year: 2025
    },
    {
        id: 16, name: "Piaggio Vespa Sprint", brand: "Piaggio", price: 85900000, oldPrice: 86000000,
        image: "assets/images/Piaggio Vespa Sprint.avif",
        engine: "125cc, i-Get", fuel: "1.95 lít/100km", category: "Xe tay ga",
        description: "Vespa Sprint mang phong cách trẻ trung năng động hơn trong dòng Vespa, phù hợp giới trẻ yêu thích sự khác biệt và cá tính.",
        rating: 4.6, stock: 8, color: "Vàng", year: 2026
    },
    {
        id: 17, name: "SYM Attila Elizabeth", brand: "SYM", price: 31466000, oldPrice: 34990000,
        image: "assets/images/SYM Attila Elizabeth.webp",
        engine: "125cc, 4 kỳ", fuel: "1.9 lít/100km", category: "Xe tay ga",
        description: "Attila Elizabeth với thiết kế nữ tính, đường nét mềm mại, giá thành hợp lý phù hợp cho các bạn nữ học sinh, sinh viên.",
        rating: 4.3, stock: 16, color: "Đỏ", year: 2025
    },
    {
        id: 18, name: "SYM Galaxy SR", brand: "SYM", price: 27990000, oldPrice: 29990000,
        image: "assets/images/SYM Galaxy SR.webp",
        engine: "125cc, 4 kỳ", fuel: "1.85 lít/100km", category: "Xe số",
        description: "Mẫu xe số phổ thông bền bỉ, tiết kiệm nhiên liệu, chi phí bảo dưỡng thấp, phù hợp nhu cầu đi lại hằng ngày của gia đình.",
        rating: 4.2, stock: 22, color: "Đen", year: 2026
    },
    {
        id: 19, name: "SYM Jet 14", brand: "SYM", price: 36990000, oldPrice: 38990000,
        image: "assets/images/SYM Jet 14.webp",
        engine: "125cc, 4 kỳ", fuel: "1.95 lít/100km", category: "Xe tay ga",
        description: "SYM Jet 14 sở hữu thiết kế thể thao cùng động cơ vận hành êm ái, mức giá cạnh tranh trong phân khúc xe tay ga phổ thông.",
        rating: 4.3, stock: 13, color: "Đen bóng", year: 2026
    },
    {
        id: 20, name: "SYM Angela Hi", brand: "SYM", price: 29000000, oldPrice: 31990000,
        image: "assets/images/SYM Angela Hi.jpg",
        engine: "125cc, 4 kỳ", fuel: "1.8 lít/100km", category: "Xe tay ga",
        description: "Angela Hi là lựa chọn kinh tế dành cho phái nữ với thiết kế trẻ trung, khả năng vận hành ổn định và tiết kiệm chi phí nhiên liệu.",
        rating: 4.1, stock: 17, color: "Xanh ngọc", year: 2026
    }
];

/* Gắn thuộc tính phụ để phục vụ lọc "Nổi bật / Bán chạy / Mới / Khuyến mãi" */
PRODUCTS.forEach(p => {
    p.discountPercent = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
    p.isFeatured = p.rating >= 4.6;
    p.isBestSeller = p.stock <= 10;
    p.isNew = p.year === 2026;
    p.isPromotion = p.discountPercent >= 5;
});

/* =====================================================
   2. GIỎ HÀNG (LƯU BẰNG LOCALSTORAGE)
   ===================================================== */
const CART_KEY = "motoshop_cart";

function getCart() {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId) {
    const cart = getCart();
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ id: productId, qty: 1 });
    }
    saveCart(cart);
    const product = PRODUCTS.find(p => p.id === productId);
    showToast(`Đã thêm "${product ? product.name : "sản phẩm"}" vào giỏ hàng`);
}

function updateCartCount() {
    const cart = getCart();
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    document.querySelectorAll(".cart-count").forEach(el => {
        el.textContent = totalQty;
    });
}

/* =====================================================
   3. HÀM ĐỊNH DẠNG TIỀN TỆ VÀ SAO ĐÁNH GIÁ
   ===================================================== */
function formatPrice(number) {
    return number.toLocaleString("vi-VN") + " đ";
}

function renderStars(rating) {
    let html = "";
    const fullStars = Math.floor(rating);
    const hasHalf = rating - fullStars >= 0.5;
    for (let i = 0; i < fullStars; i++) html += '<i class="fa-solid fa-star"></i>';
    if (hasHalf) html += '<i class="fa-solid fa-star-half-stroke"></i>';
    const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) html += '<i class="fa-regular fa-star"></i>';
    return html;
}

/* =====================================================
   4. TẠO THẺ SẢN PHẨM (DÙNG CHUNG NHIỀU TRANG)
   'pathPrefix' dùng để xử lý đường dẫn khác nhau
   giữa trang chủ (index.html) và các trang trong /html/
   ===================================================== */
function createProductCard(p, pathPrefix) {
    const detailLink = `${pathPrefix}html/chi-tiet.html?id=${p.id}`;
    let badgeHtml = "";
    if (p.discountPercent > 0) {
        badgeHtml = `<span class="badge">-${p.discountPercent}%</span>`;
    }
    if (p.isNew) {
        badgeHtml += `<span class="badge new">Mới</span>`;
    }

    return `
    <div class="product-card reveal">
        <a href="${detailLink}" class="product-thumb">
            ${badgeHtml}
            <img src="${pathPrefix}${p.image}" alt="${p.name}" loading="lazy">
        </a>
        <div class="product-info">
            <span class="product-brand">${p.brand}</span>
            <a href="${detailLink}"><h3 class="product-name">${p.name}</h3></a>
            <div class="product-rating">
                ${renderStars(p.rating)}
                <span>(${p.rating})</span>
            </div>
            <div class="product-price">
                <span class="price-new">${formatPrice(p.price)}</span>
                <span class="price-old">${formatPrice(p.oldPrice)}</span>
            </div>
            <div class="product-actions">
                <a href="${detailLink}" class="btn btn-outline">Chi tiết</a>
                <button class="btn btn-primary" onclick="addToCart(${p.id})">
                    <i class="fa-solid fa-cart-plus"></i> Thêm giỏ
                </button>
            </div>
        </div>
    </div>`;
}

/* =====================================================
   5. XÁC ĐỊNH VỊ TRÍ FILE HIỆN TẠI ĐỂ CHỈNH ĐƯỜNG DẪN
   ===================================================== */
function getPathPrefix() {
    // Nếu đường dẫn hiện tại chứa "/html/" thì đang ở thư mục con
    // nên cần lùi ra 1 cấp ("../") để trỏ đúng tới index.html, css, js...
    return window.location.pathname.includes("/html/") ? "../" : "";
}

/* =====================================================
   6. RENDER SẢN PHẨM THEO TAB TRÊN TRANG CHỦ
   ===================================================== */
function initHomeProducts() {
    const grid = document.getElementById("home-product-grid");
    if (!grid) return;

    const prefix = getPathPrefix();
    const tabButtons = document.querySelectorAll(".tab-btn");

    function renderTab(tab) {
        let list = [];
        if (tab === "featured") list = PRODUCTS.filter(p => p.isFeatured);
        else if (tab === "bestseller") list = PRODUCTS.filter(p => p.isBestSeller);
        else if (tab === "new") list = PRODUCTS.filter(p => p.isNew);
        else if (tab === "promotion") list = PRODUCTS.filter(p => p.isPromotion);

        list = list.slice(0, 8);
        grid.innerHTML = list.map(p => createProductCard(p, prefix)).join("");
        observeReveal();
    }

    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderTab(btn.dataset.tab);
        });
    });

    renderTab("featured");
}

/* =====================================================
   7. TRANG SẢN PHẨM: LỌC + SẮP XẾP
   ===================================================== */
function initShopPage() {
    const grid = document.getElementById("shop-product-grid");
    if (!grid) return;

    const prefix = getPathPrefix();
    const brandChecks = document.querySelectorAll(".filter-brand");
    const typeChecks = document.querySelectorAll(".filter-type");
    const priceRange = document.getElementById("price-range");
    const priceValue = document.getElementById("price-range-value");
    const sortSelect = document.getElementById("sort-select");
    const resultCount = document.getElementById("result-count");

    function applyFilters() {
        const selectedBrands = Array.from(brandChecks).filter(c => c.checked).map(c => c.value);
        const selectedTypes = Array.from(typeChecks).filter(c => c.checked).map(c => c.value);
        const maxPrice = priceRange ? parseInt(priceRange.value) : 100000000;

        let list = PRODUCTS.filter(p => {
            const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(p.brand);
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(p.category);
            const priceMatch = p.price <= maxPrice;
            return brandMatch && typeMatch && priceMatch;
        });

        const sortVal = sortSelect ? sortSelect.value : "default";
        if (sortVal === "price-asc") list.sort((a, b) => a.price - b.price);
        else if (sortVal === "price-desc") list.sort((a, b) => b.price - a.price);
        else if (sortVal === "newest") list.sort((a, b) => b.year - a.year);
        else if (sortVal === "bestseller") list.sort((a, b) => a.stock - b.stock);

        if (resultCount) resultCount.textContent = list.length;

        if (list.length === 0) {
            grid.innerHTML = `
            <div class="no-result">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Không tìm thấy sản phẩm phù hợp với bộ lọc đã chọn.</p>
            </div>`;
        } else {
            grid.innerHTML = list.map(p => createProductCard(p, prefix)).join("");
        }
        observeReveal();
    }

    [...brandChecks, ...typeChecks].forEach(c => c.addEventListener("change", applyFilters));
    if (sortSelect) sortSelect.addEventListener("change", applyFilters);
    if (priceRange) {
        priceRange.addEventListener("input", () => {
            priceValue.textContent = formatPrice(parseInt(priceRange.value));
            applyFilters();
        });
        priceValue.textContent = formatPrice(parseInt(priceRange.value));
    }

    applyFilters();
}

/* =====================================================
   8. TRANG CHI TIẾT SẢN PHẨM
   ===================================================== */
function initDetailPage() {
    const wrapper = document.getElementById("detail-wrapper");
    if (!wrapper) return;

    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")) || 1;
    const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
	const prefix = getPathPrefix();

    document.title = `${product.name} - MotoShop`;

    document.getElementById("detail-main-img").src = prefix + product.image;
    document.getElementById("detail-brand").textContent = product.brand;
    document.getElementById("detail-title").textContent = product.name;
    document.getElementById("detail-stars").innerHTML = renderStars(product.rating);
    document.getElementById("detail-rating-num").textContent = `(${product.rating} / 5 - ${product.stock + 40} lượt đánh giá)`;
    document.getElementById("detail-price-new").textContent = formatPrice(product.price);
    document.getElementById("detail-price-old").textContent = formatPrice(product.oldPrice);
    document.getElementById("detail-desc").textContent = product.description;
    document.getElementById("detail-engine").textContent = product.engine;
    document.getElementById("detail-fuel").textContent = product.fuel;
    document.getElementById("detail-category").textContent = product.category;
    document.getElementById("detail-color").textContent = product.color;
    document.getElementById("detail-year").textContent = product.year;
    document.getElementById("detail-stock").textContent = `Còn ${product.stock} xe`;
    document.getElementById("breadcrumb-name").textContent = product.name;

    const addBtn = document.getElementById("detail-add-cart");
    const buyBtn = document.getElementById("detail-buy-now");
    if (addBtn) addBtn.addEventListener("click", () => addToCart(product.id));
    if (buyBtn) buyBtn.addEventListener("click", () => {
        addToCart(product.id);
        showToast("Chuyển hướng tới trang thanh toán (mô phỏng)...");
    });

    // Bộ ảnh nhỏ mô phỏng (dùng chung ảnh sản phẩm với hiệu ứng khác nhau)
    const thumbsContainer = document.getElementById("detail-thumbs");
    if (thumbsContainer) {
        const thumbImgs = [product.image, product.image, product.image, product.image];
        thumbsContainer.innerHTML = thumbImgs.map((img, i) =>
            `<img src="${prefix}${img}" class="${i === 0 ? 'active' : ''}" data-index="${i}">`
        ).join("");

        thumbsContainer.querySelectorAll("img").forEach(thumb => {
            thumb.addEventListener("click", () => {
                thumbsContainer.querySelectorAll("img").forEach(t => t.classList.remove("active"));
                thumb.classList.add("active");
                document.getElementById("detail-main-img").src = thumb.src;
            });
        });
    }

    // Sản phẩm liên quan cùng hãng
    const relatedGrid = document.getElementById("related-products");
    if (relatedGrid) {
        const related = PRODUCTS.filter(p => p.brand === product.brand && p.id !== product.id).slice(0, 4);
        relatedGrid.innerHTML = related.map(p => createProductCard(p, prefix)).join("");
    }
}

/* =====================================================
   9. TÌM KIẾM SẢN PHẨM
   ===================================================== */
function initSearch() {
    const inputs = document.querySelectorAll(".search-input");
    inputs.forEach(input => {
        const resultsBox = input.closest(".search-box").parentElement.querySelector(".search-results");
        if (!resultsBox) return;
        const prefix = getPathPrefix();

        input.addEventListener("input", () => {
            const keyword = input.value.trim().toLowerCase();
            if (keyword.length === 0) {
                resultsBox.classList.remove("show");
                return;
            }
            const matches = PRODUCTS.filter(p =>
                p.name.toLowerCase().includes(keyword) || p.brand.toLowerCase().includes(keyword)
            ).slice(0, 6);

            if (matches.length === 0) {
                resultsBox.innerHTML = `<div class="search-empty">Không tìm thấy xe phù hợp với "${input.value}"</div>`;
            } else {
                resultsBox.innerHTML = matches.map(p => `
                    <a href="${prefix}html/chi-tiet.html?id=${p.id}" class="search-result-item">
                        <img src="${prefix}${p.image}" alt="${p.name}">
                        <div class="sr-info">
                            <strong>${p.name}</strong>
                            <span>${formatPrice(p.price)}</span>
                        </div>
                    </a>
                `).join("");
            }
            resultsBox.classList.add("show");
        });

        document.addEventListener("click", (e) => {
            if (!input.parentElement.contains(e.target)) {
                resultsBox.classList.remove("show");
            }
        });
    });
}

/* =====================================================
   10. HERO SLIDER TỰ ĐỘNG
   ===================================================== */
function initHeroSlider() {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dots span");
    const prevBtn = document.querySelector(".hero-arrow.prev");
    const nextBtn = document.querySelector(".hero-arrow.next");
    if (slides.length === 0) return;

    let current = 0;
    let autoTimer;

    function goToSlide(index) {
        slides.forEach(s => s.classList.remove("active"));
        dots.forEach(d => d.classList.remove("active"));
        current = (index + slides.length) % slides.length;
        slides[current].classList.add("active");
        if (dots[current]) dots[current].classList.add("active");
    }

    function startAutoSlide() {
        autoTimer = setInterval(() => goToSlide(current + 1), 5000);
    }

    function resetAutoSlide() {
        clearInterval(autoTimer);
        startAutoSlide();
    }

    dots.forEach((dot, i) => dot.addEventListener("click", () => { goToSlide(i); resetAutoSlide(); }));
    if (nextBtn) nextBtn.addEventListener("click", () => { goToSlide(current + 1); resetAutoSlide(); });
    if (prevBtn) prevBtn.addEventListener("click", () => { goToSlide(current - 1); resetAutoSlide(); });

    goToSlide(0);
    startAutoSlide();
}

/* =====================================================
   11. HEADER ĐỔI MÀU KHI CUỘN + BACK TO TOP + SCROLL REVEAL
   ===================================================== */
function initScrollEffects() {
    const header = document.getElementById("site-header");
    const backToTop = document.getElementById("back-to-top");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            header.classList.add("scrolled");
            if (backToTop) backToTop.style.display = "flex";
        } else {
            header.classList.remove("scrolled");
        }
    });

    if (backToTop) {
        backToTop.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
}

function observeReveal() {
    const items = document.querySelectorAll(".reveal:not(.active)");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    items.forEach(item => observer.observe(item));
}

/* =====================================================
   12. MENU MOBILE
   ===================================================== */
function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", () => {
        nav.classList.toggle("mobile-open");
        const icon = toggle.querySelector("i");
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
    });
}

/* =====================================================
   13. ĐÁNH DẤU MENU ACTIVE THEO TRANG HIỆN TẠI
   ===================================================== */
function initActiveMenu() {
    const links = document.querySelectorAll(".main-nav a");
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    links.forEach(link => {
        const linkPage = link.getAttribute("href").split("/").pop();
        if (linkPage === currentPage) {
            link.classList.add("active");
        }
    });
}

/* =====================================================
   14. ĐỒNG HỒ THỜI GIAN THỰC + NGÀY THÁNG (TASKBAR)
   ===================================================== */
function initClock() {
    const clockEl = document.getElementById("taskbar-clock");
    const dateEl = document.getElementById("taskbar-date");
    if (!clockEl || !dateEl) return;

    function update() {
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, "0");
        const mm = String(now.getMinutes()).padStart(2, "0");
        const ss = String(now.getSeconds()).padStart(2, "0");
        clockEl.textContent = `${hh}:${mm}:${ss}`;

        const days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
        const dayName = days[now.getDay()];
        const dd = String(now.getDate()).padStart(2, "0");
        const mo = String(now.getMonth() + 1).padStart(2, "0");
        const yyyy = now.getFullYear();
        dateEl.textContent = `${dayName}, ${dd}/${mo}/${yyyy}`;
    }

    update();
    setInterval(update, 1000);
}

/* =====================================================
   15. TOAST THÔNG BÁO
   ===================================================== */
function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${message}`;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* =====================================================
   16. FORM LIÊN HỆ (MÔ PHỎNG GỬI)
   ===================================================== */
function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const msgBox = document.getElementById("form-msg");
        msgBox.textContent = "Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.";
        msgBox.classList.add("show");
        form.reset();
        setTimeout(() => msgBox.classList.remove("show"), 4000);
    });
}

/* =====================================================
   17. LOADING SCREEN KHI MỞ TRANG
   ===================================================== */
function initLoadingScreen() {
    window.addEventListener("load", () => {
        const loader = document.getElementById("loading-screen");
        if (loader) {
            setTimeout(() => loader.classList.add("hidden"), 500);
        }
    });
}

/* =====================================================
   18. CHỨC NĂNG ĐĂNG NHẬP / ĐĂNG KÝ (POPUP MODAL)
   ===================================================== */
function initAuthModal() {
    const modal = document.getElementById("auth-modal");
    const openLoginBtn = document.getElementById("open-login-btn");
    const openRegisterBtn = document.getElementById("open-register-btn");
    const closeBtn = document.getElementById("close-auth-btn");
    const tabButtons = document.querySelectorAll(".auth-tab-btn");
    const panels = document.querySelectorAll(".auth-panel");

    if (!modal) return;

    // Hàm mở Modal và chuyển tới Form mong muốn
    function openModal(targetPanelId, activeTabButton) {
        modal.classList.add("show");
        panels.forEach(p => p.classList.remove("active"));
        tabButtons.forEach(b => b.classList.remove("active"));
        
        document.getElementById(targetPanelId).classList.add("active");
        activeTabButton.classList.add("active");
    }

    // Sự kiện click nút từ Dropdown
    openLoginBtn.addEventListener("click", () => {
        openModal("login-form-panel", tabButtons[0]);
    });

    openRegisterBtn.addEventListener("click", () => {
        openModal("register-form-panel", tabButtons[1]);
    });

    // Sự kiện đóng Modal
    closeBtn.addEventListener("click", () => modal.classList.remove("show"));
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.remove("show");
    });

    // Chuyển đổi qua lại giữa 2 Tab ngay trong Popup
    tabButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            tabButtons.forEach(b => b.classList.remove("active"));
            panels.forEach(p => p.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(btn.dataset.target).classList.add("active");
        });
    });

    // Xử lý gửi biểu mẫu mô phỏng (Tận dụng hàm Toast có sẵn của đồ án)
    document.getElementById("form-login-submit").addEventListener("submit", (e) => {
        e.preventDefault();
        modal.classList.remove("show");
        showToast("Đăng nhập tài khoản thành công!");
    });

    document.getElementById("form-register-submit").addEventListener("submit", (e) => {
        e.preventDefault();
        modal.classList.remove("show");
        showToast("Đăng ký tài khoản thành công! Vui lòng kiểm tra email.");
    });
}

/* =====================================================
   19. KHỞI CHẠY TOÀN BỘ KHI DOM SẴN SÀNG
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
    initLoadingScreen();
    updateCartCount();
    initHeroSlider();
    initScrollEffects();
    initMobileMenu();
    initActiveMenu();
    initClock();
    initSearch();
    initContactForm();
    initHomeProducts();
    initShopPage();
    initDetailPage();
	initAuthModal();
    observeReveal();
});
