let result = "";

// Ví dụ 1

const names = ["Dat", "Kien", "Dung", "Chinh"];
// For
/*
for (let index = 0; index < names.length; index++) {
    result += `<div>${names[index]}</div>`;
}
*/

// For in
/*
for (let index in names) {
    result += `<div>${names[index]}</div>`;
}
*/

// for of
// for (let name of names) {
//     result += `<div>${name}</div>`;
// }

// forEach
names.forEach((name, index) => {
    result += `<div>${name} - ${index}</div>`;
});

// ==================================
// Ví dụ 2
// const productList = [
//     { id: 1, name: "Product A", price: 200, status: true, stock: 200 }, // product
//     { id: 2, name: "Product B", price: 300, status: true, stock: 300 }, // product
//     { id: 3, name: "Product C", price: 400, status: true, stock: 300 }, // product
// ];

// For
// for (let index = 0; index < productList.length; index++) {
//     const product = productList[index];
//     result += `<div>${product.name}</div>`;
// }

// For in
document.querySelector("#products").innerHTML = result;
