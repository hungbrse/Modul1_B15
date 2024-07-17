

// Bài 1: Viết hàm tính bình phương của một số bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.

// function tinhBinhPhuong(number) {

//     let binhPhuong = Math.pow(number,2);
//     return binhPhuong;
// }

// console.log(tinhBinhPhuong(3))


// Bài 2: Viết hàm tính diện tích, hàm tính chu vi hình tròn. Gọi hàm vừa xây dựng được.

// function dienTichHinhTrong(a) {
    

//     let s = Math.PI * (a * a);

//     return s;
    
// }
// console.log(dienTichHinhTrong(5));

// function hamTinhChuVi (r) {
//     let chuVi = 2 * Math.PI * r;

//     return chuVi;
// }

// console.log(hamTinhChuVi(5));

// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Gọi hàm vừa xây dựng được.


// function giaiThua(n) {
//     let giaiThua= 1;
//   for (let index = 1; index <= n; index++) {
//           giaiThua = giaiThua * index  
//   }
//   return giaiThua;
// }
// console.log(giaiThua(6))


// Bài 4: Viết hàm kiểm tra xem ký tự nhập vào có phải là ký tự số không. Nếu là ký tự số hàm trả về true, ngược lại trả về false.

// function check(n) {

//     if(Number.isInteger(n)) {
//         return true;
//     }else {
//         return false;
//     }
// }


// console.log(check(5))


//Bài 5: Viết hàm nhận vào 3 số nguyên bất kỳ, trả về số nguyên có giá trị nhỏ nhất.


// function number (a,b,c ) {

//     if(a > b && a > c) {
//         return a;
//     } else if(b > a && b > c) {
//         return b;
//     }else {
//          return c;
//     }
// }


// console.log(number(1,2,3))


// Bài 6: Viết hàm nhận vào một số,
// kiểm tra xem nếu số đưa vào có phải là nguyên dương không. Nếu là nguyên dương trả về true, ngược lại trả về false.


// function number(n) {
//     if(Number.isInteger(n)  > 0) {
//         return true;
//     } else {
//         return false;

//     }
// }
// console.log(number(3.1))



// Bài 7: Viết hàm truyền vào 2 số nguyên bất kì, thực hiện đổi chỗ hai số nguyên đó.

// function number(n1,n2) {

//     return `${n2} và ${n1} `
// }

// console.log(number(7,1))

// Bài 8: Viết hàm truyền vào mảng số nguyên bất kỳ, sau đó đảo ngược mảng số nguyên đó.



// let array = [1,2,3,4,5,6,7,8,9]
// function number (n) {
//     let array = n.reverse() ;
//     return array;
// }
// console.log(number(array))


// Bài 9: Viết hàm truyền vào một mảng ký tự, và một ký tự bất kỳ, kiểm tra xem ký tự bất kỳ đó có nằm trong mảng không.
// Nếu có trả về số lần xuất hiện của ký tự đó, nếu không trả về -1.



let array = ["hung","dz","hung","dz","sos","vcl","daucatmoi"] ;


function check (array) {

    let tu = "bestYasua";
    let count = 0;

    let co = true;


    for (let index = 0; index < array.length; index++) {
        
        if(array[index] === tu) {
             count ++; 
    } 
}

if(count > 0) {
    console.log(`số lần xuất hiện của ${count}`)
} else {
    console.log(-1)
}




}

console.log(check(array))
