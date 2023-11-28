const products = [
    { id: 1, name: "Apple", price: 100 }, // product
    { id: 2, name: "Orange", price: 200 }, // product
    { id: 3, name: "Banana", price: 300 }, // product
    { id: 4, name: "Kiwi", price: 400 }, // product
];
//  hieern thị ra màn hình
let result = "";
products.forEach(
    (product) => (result += `<div class="btn" data-id="${product.id}">${product.name}</div>`)
);

document.querySelector("#app").innerHTML = result;

//  B1: lấy ra các button
const btns = document.querySelectorAll(".btn");

// B2: lặp qua các button
btns.forEach((btn) => {
    // B2: lấy ra id của sản phẩm
    const id = btn.dataset.id;
    // B2: lắng nghe sự kiện click
    btn.addEventListener("click", function () {
        // B3: tìm ra sản phẩm có id trùng với id của button
        const result = products.find((product) => product.id === Number(id));
        // B3: hiển thị ra màn hình
        document.querySelector(
            "#result"
        ).innerHTML = `name: ${result.name}, price: ${result.price}`;
    });
});
