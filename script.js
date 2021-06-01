console.log('Hello world!');

// ---------------- 1 -------------------------

// const changeSrt = (str) => {
//   let arr = str.split('');
//   let resArr = [];
//   arr.map((item, idx) => {
//     item.charCodeAt() >= 1072 && item.charCodeAt() <= 1103
//       ? resArr.push(item.toUpperCase())
//       : resArr.push(item.toLowerCase());
//   });
//   return resArr.join('');
// };

// console.log(changeSrt('КаЖдЫй ОхОтНиК'));

// ---------------- 2 --------------

// const removeDuplicates = (arr) => {
//   let res = [];
//   let changeArr = arr.map((item) => item.toLowerCase());

//   for (let item of changeArr) {
//     if (!res.includes(item)) {
//       res.push(item);
//     }
//   }

//   return res;
// };

// console.log(removeDuplicates(['a', 'S', 'A']));

// ----------------- 3 --------------------

// let arr2 = [1, 2, 3, 4, 5];
// let arr1 = [7, 8, 9, 11, 12];
// let arr3;

// if (arr1.length > arr2.length) {
//   arr3 = arr1.map((item, idx) => {
//     return arr2[idx] === undefined ? item + 0 : item + arr2[idx];
//   });
// } else if (arr2.length > arr1.length) {
//   arr3 = arr2.map((item, idx) => {
//     {
//       return arr1[idx] === undefined ? item + 0 : item + arr1[idx];
//     }
//   });
// } else {
//   arr3 = arr1.map((item, idx) => item + arr2[idx]);
// }

// console.log(arr3);

// ----------------- 4 ---------------

// let countIdentic = (arr) => arr.length - new Set(arr).size;
// let arr1 = [7, 8, 9, 11, 12, 7, 10, 10, 11, 7];

// console.log(countIdentic(arr1));

// -------------------- 5 -----------------

let union = (arr1, arr2) => {
  return Array.from(new Set(arr1)).concat(Array.from(new Set(arr2)));
};

let arr1 = [7, 8, 9, 11, 12, 7, 10, 10, 11, 7];
let arr2 = [1, 2, 3, 4, 5, 5, 7];

console.log(union(arr1, arr2));
