const products = [
{
    id:"1",
    name:"Honda SH 125i CBS",
    price:73900000,
    description:"Động cơ eSP+ 125cc, thiết kế sang trọng, tiết kiệm nhiên liệu.",
    image:"../assets/images/sh125i.png",
    link:"chi-tiet.html"
},
{
    id:"2",
    name:"Honda SH 160i ABS",
    price:92900000,
    description:"Trang bị hệ thống ABS hiện đại, vận hành mạnh mẽ và an toàn.",
    image:"../assets/images/sh160i.png",
    link:"chi-tiet.html"
},
{
    id:"3",
    name:"Honda SH Mode CBS",
    price:57900000,
    description:"Thiết kế thời trang, phù hợp di chuyển trong đô thị.",
    image:"../assets/images/shmode.png",
    link:"chi-tiet.html"
},
{
    id:"4",
    name:"Honda SH Mode ABS",
    price:62900000,
    description:"Phiên bản cao cấp với hệ thống phanh ABS.",
    image:"../assets/images/shmode-abs.png",
    link:"chi-tiet.html"
},
{
    id:"5",
    name:"Honda SH350i Cao Cấp",
    price:151000000,
    description:"Động cơ 330cc mạnh mẽ, đẳng cấp dẫn đầu phân khúc.",
    image:"../assets/images/sh350i.webp",
    link:"chi-tiet.html"
},
{
    id:"6",
    name:"Honda SH350i Thể Thao",
    price:152000000,
    description:"Phiên bản thể thao cá tính, tích hợp nhiều công nghệ hiện đại.",
    image:"../assets/images/sh350i-sport.jpg",
    link:"chi-tiet.html"
}
];

function createItem(obj)
{
    const listProducts = document.getElementById("product-list");

    const col = document.createElement("div");
    col.setAttribute("class","col-md-4 mb-4");

    const card = document.createElement("div");
    card.setAttribute("class","card h-100 shadow");

    const img = document.createElement("img");
    img.src = obj.image;
    img.alt = obj.name;
    img.className = "card-img-top";
    img.style.height = "250px";
    img.style.objectFit = "cover";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const name = document.createElement("h5");
    name.className = "card-title text-danger";
    name.innerHTML = obj.name;

    const price = document.createElement("h4");
    price.className = "text-primary";
    price.innerHTML = obj.price.toLocaleString('vi-VN') + " đ";

    const description = document.createElement("p");
    description.className = "card-text";
    description.innerHTML = obj.description;

    const btnDetail = document.createElement("a");
    btnDetail.href = obj.link + "?masp=" + obj.id;
    btnDetail.className = "btn btn-outline-primary me-2";
    btnDetail.innerHTML = "Xem chi tiết";

    const btnBuy = document.createElement("button");
    btnBuy.className = "btn btn-danger";
    btnBuy.innerHTML = "Mua ngay";

    cardBody.appendChild(name);
    cardBody.appendChild(price);
    cardBody.appendChild(description);
    cardBody.appendChild(btnDetail);
    cardBody.appendChild(btnBuy);

    card.appendChild(img);
    card.appendChild(cardBody);

    col.appendChild(card);

    listProducts.appendChild(col);
}

function loadAllProducts(arr)
{
    for(let i = 0; i < arr.length; i++)
    {
        createItem(arr[i]);
    }
}