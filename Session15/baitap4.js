
// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó

// function beNhat(n1,n2,n3) {
//     if(n1 < n2 && n1 < n3) {
//         return n1;
//     } else if(n2 < n1 && n2 < n3) {
//         return n1;

//     } else {
//         return n3;
//     }
// }


// console.log(beNhat(1,2,3) )

// Bài 2: Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không?


// function check(n) {

//     let co = true;

//  for (let index = 2; index < n; index++) {

//     if(n % index === 0) {
//        co = false;
//     }
//  }
//  if(co) {
//     console.log(`${n} la so nguyen to`)
//  } else {
//     console.log(`${n} khong phai la la so nguyen to`)
//  }

// }
// let input = +(prompt("Nhap so "))
// check(input)

//Bài 3: Cho mảng sau:

// let arr=[1,2,3,4,5,6,7,8,9,10]


// function check(array) {
//     for (let index = 0; index < array.length; index++) {
//         for (let index2 = index + 1; index2 < array.length; index2++) {
//                      if(array[index2] + array [index] === 10) {

//                     console.log(`${array[index2]} + ${array[index]} là 10`)
//                     }
//         }
//     }



// }

// console.log(check(arr));

// check(arr)


// Bài 4: Cho người dùng nhập vào chuỗi kí tự. Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng


// let input = prompt("Nhap chuoi");


// // hello word
// let array = input.toLocaleLowerCase().split("");



// function checkViet (mang) {


//     for (let index = 0; index < mang.length; index++) {
//         let count = 0;

//         for (let j = 0; j < mang.length; j++) {

//             if(mang[index] === mang[j]) {
//                 count++;   
//             }
//         }

//         // mang = mang.filter(e => e !== char);

//         // let arr = [];
//         // for(let k = 0; k < mang.length; k++) {
//         //     if(mang[k] !== char) {
//         //         arr.push(mang[k])
//         //     }
//         // }

//         // index -= count;

//         // if(char && count > 0) {
//             console.log(`ký tự ${mang[index]} xuất hiện ${count} lần`);
//         // }
//     }
// }

// checkViet(array)





let input = prompt("Nhap chuoi");

// Convert input string to lowercase and split it into an array of characters
let array = input.toLocaleLowerCase().split("");

function checkViet(mang) {
    for (let index = 0; index < mang.length; index++) {
        let char = mang[index];
        let count = 0;

        for (let j = 0; j < mang.length; j++) {
            if (char === mang[j]) {
                count++;
            }
        }

        // ello

        // Remove all instances of the current character from the array
        if (count > 0) {
            console.log(`ký tự ${char} xuất hiện ${count} lần`);
            mang = mang.filter(e => e !== char);
            index--; // Adjust index after removal
        }
    }
}

checkViet(array);
