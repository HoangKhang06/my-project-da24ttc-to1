//Khai báo mảng đối tượng lưu trữ dữ liệu sản phẩm
const productList = [
	{id: "01", name: "Phin sữa đá", price: 29000, image: "../assets/images/sua-da.jpg", productLink: "product-detail.html"},
	{id: "02", name: "Phin đen đá", price: 29000, image: "../assets/images/den-da.jpg", productLink: "product-detail.html"},
	{id: "03", name: "Bạc xỉu đá", price: 29000, image: "../assets/images/xiu-da.jpg", productLink: "product-detail.html"},
	{id: "04", name: "Phindi hạnh nhân", price: 45000, image: "../assets/images/hanh-nhan.jpg", productLink: "product-detail.html"},
	{id: "05", name: "Phindi kem sữa", price: 45000, image: "../assets/images/kem-sua.jpg", productLink: "product-detail.html"},
	{id: "06", name: "Phindi choco", price: 45000, image: "../assets/images/cho-co.jpg", productLink: "product-detail.html"},
	{id: "07", name: "Trà sen vàng", price: 45000, image: "../assets/images/sen-vang.jpg", productLink: "product-detail.html"},
	{id: "08", name: "Trà thanh đào", price: 45000, image: "../assets/images/thanh-dao.jpg", productLink: "product-detail.html"},
	{id: "09", name: "Trà thạch đào", price: 45000, image: "../assets/images/thach-dao.jpg", productLink: "product-detail.html"},
	{id: "10", name: "Trà thạch vải", price: 45000, image: "../assets/images/thach-vai.jpg", productLink: "product-detail.html"}
];

function addProduct(id, name, price, image, hyperLink)
{
	//Tạo một product item
	//1.Tạo khung chứa 1 item
	const productItem = document.createElement("div");
	productItem.setAttribute("class", "product-item col m-2");

	//2.Tạo khung chứa hình
	const productImage = document.createElement("div");
	productImage.setAttribute("class", "product-image h-75 ratio ratio-1x1 overflow-hidden");

	//3.Tạo đối tượng hình ảnh
	const Image = document.createElement("img");
	Image.setAttribute("src", image);
	Image.setAttribute("alt", image);
	Image.setAttribute("class", "img-fluid object-fit-cover h-100");

	//4.Gán hình vào khung
	productImage.appendChild(Image);

	//5.Tạo khung chứa thông tin
	const productInfo = document.createElement("div");
	productInfo.setAttribute("class", "product-info h-25 text-center");

	//Tạo paragraph 1
	const productName = document.createElement("p");
	const productNameText = document.createTextNode(name);
	productName.appendChild(productNameText);

	//Tạo paragraph 2
	const productPrice = document.createElement("p");
	const productPriceText = document.createTextNode(price);
	productPrice.appendChild(productPriceText);

	//Tạo hyperLink
	const productLink = document.createElement("a");
	const productLinkText = document.createTextNode("Xem chi tiết");
	productLink.appendChild(productLinkText);
	productLink.setAttribute("href", hyperLink);
	productLink.setAttribute("class", "btn btn-info");


	//Gán paragraph 1, 2 và link vào khung
	productInfo.appendChild(productName);
	productInfo.appendChild(productPrice);
	productInfo.appendChild(productLink);

	//6. Gán khung hình và khung thông tin vào product item
	productItem.appendChild(productImage);
	productItem.appendChild(productInfo);

	//Gán product item vào product list
	document.getElementById("product-list").appendChild(productItem);
}