/*Viết mã javascript*/
/*Khai báo  1 đối tượng lưu thông tin sản phẩm*/
/*
const product={
    name:"Hạt giống Hoa hồng Pháp",
    price:"250k/túi,
    description:"Đây là một loại hoa hồng nổi tiếng ở nước Pháp được nhập khẩu về Việt Nam .... thích ứng với điều kiện khí hậu nhiệt đới",
    image:"../assets/images/rose.webp",
    link:"chi-tiet.html"
};
*/

const products=[
{
    name:"Hạt giống Hoa hồng Pháp",
    price:250,
    description:"Đây là một loại hoa hồng nổi tiếng ở nước Pháp được nhập khẩu về Việt Nam .... thích ứng với điều kiện khí hậu nhiệt đới",
    image:"../assets/images/rose.webp",
    link:"chi-tiet.html"
},
{
    name:"Hạt giống Hoa sen Pháp",
    price:250,
    description:"Đây là một loại hoa hồng nổi tiếng ở nước Pháp được nhập khẩu về Việt Nam .... thích ứng với điều kiện khí hậu nhiệt đới",
    image:"../assets/images/lotus.jpg",
    link:"chi-tiet.html"
},
{
    name:"Hạt giống Hoa hồng Pháp",
    price:250,
    description:"Đây là một loại hoa hồng nổi tiếng ở nước Pháp được nhập khẩu về Việt Nam .... thích ứng với điều kiện khí hậu nhiệt đới",
    image:"../assets/images/rose.webp",
    link:"chi-tiet.html"
}
];
function createItem(obj)
{
                //Xác định khung chứa product-list
                const listProducts = document.getElementById("product-list");

                //Tạo 1 container có class = "item"
                const item = document.createElement("div");
                item.setAttribute("class", "item");

                //Tạo 2 khung chứa Hình ảnh và Thông tin
                //Tạo 1 container chứa hình ảnh có class = "image" ==> chỉ có 1 con là img
                const containerImage = document.createElement("div");
                containerImage.setAttribute("class", "image");

                //Tạo ảnh
                const img = document.createElement("img");
                img.setAttribute("src",obj.image);
                img.setAttribute("alt",obj.name);
                img.setAttribute("style", "width:100%; max-width:150px");

                //Đưa vào khung chứa ảnh
                containerImage.appendChild(img);

                //Tạo 1 container chứa thông tin sản phẩm có class = "info" ==> có 3 <p> và 1 <a>
                const containerInfo = document.createElement("div");
                containerInfo.setAttribute("class", "info");

                 //Tạo <p> chứa tên sản phẩm
                const nameProduct = document.createElement("p");
                nameProduct.innerHTML = obj.name;

                //Tạo <p> chứa giá sản phẩm
                const price = document.createElement("p");
                price.innerHTML = obj.price +"/túi";

                //Tạo <p> chứa mô tả sản phẩm
                const description = document.createElement("p");
                description.innerHTML =obj.descripyion;
                //Tạo <a> chứa liên kết
                const linkProduct = document.createElement("a");
                linkProduct.innerHTML = "Xem chi tiết";
                linkProduct.setAttribute("href", obj.link);

                //Gần 4 con vào khung chứng Info
                containerInfo.appendChild(nameProduct);
                containerInfo.appendChild(price);
                containerInfo.appendChild(description);
                containerInfo.appendChild(linkProduct);

                //Thêm khung chứa image vào Info
                item.appendChild(containerImage);
                item.appendChild(containerInfo);

                //Thêm item vào list product


            listProducts.appendChild(item);

}
function loadAllProducts(objArray)
{
    let i;
    for(i = 0; i<objArray.length; i++)
        {
                createItem(objArray[i])
        }
}