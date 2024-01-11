// var let const
// var a = 10;
// var a = 20;
// var b = 20;

// var c = a + b;
// console.log(c); // 30

// let a = 10;
// let a = 20;
// let b = 20;
// let c = a + b;
// console.log(c);

// const a = 10;
// const a = 20;
// const b = 20;
// const c = a + b;
// console.log(c);

// Mặc định khi khai báo biến thì sử dụng const
// Khi cần thay đổi giá trị của biến thì sử dụng let

// Đặt tên biến
// danh từ, tiếng anh, camelCase
// const myName = "Lê Trọng Đạt";
// const products = [];
// const productList = [];
// const userList = [];
// const product = {};

// đặt tên hàm
// động từ, tiếng anh, camelCase

// function removeProductById(id){

// }

// function setPermissionByRole(role){

// }
// function getProducts(){

// }

// Kiểu dữ liệu

const myName = "Đạt";
const myAge = 18;
const isMarried = true;
const myInfo = {
    name: "Đat",
    age: 18,
};

const mySkill = ["html", "css", "js"];
console.log(Array.isArray(mySkill));
const myFunc = function () {};
console.log(typeof myFunc);

// nó là gì?
// sử dụng nó như thế nào?
// khi nào sử dụng nó
// tại sao?

// function là gì?

// function name | function declaration
function sum(a, b) {
    return a + b;
}
sum(3, 4);

// function expression
const sum2 = function (a, b) {
    return a + b;
};
sum2(3, 4);
// cú pháp viết tắt của function expression => arrow functio
const sum3 = (a, b) => a + b;
console.log("arrow function", sum3(3, 4));
