// 1-task
  

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 4, 6, 7, 5]
// let even_number = 0
// let odd_number = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         even_number ++
//     } 
//     else {
//         odd_number ++
//     }   
// }
// console.log("Ummumiy juft sonlar nechtaligi " + even_number);
// console.log("Ummumiy toq sonlar nechtaligi  " + odd_number);


// 2-task  bu usulda minus sonlarni tekshirmaydi yani minus toq songa tekshirmaydi va qo'shmaydi


// let prompt_number = prompt("Sonni kiriting ... ?")
// let array = [1, 2, 3,-13, 4, 5, 6, 7, 8, 9, -8]
// let even_number = 0
// let odd_number = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         even_number += array[i]
//     }
//     else if (array[i] % 2 == 1) {
//         odd_number += array[i]
//     }   
// }
// let total = array.reduce((a,b) => a+b, 0)
// console.log(even_number + " Juft sonlar yig'indisi");
// console.log(odd_number + " Toq sonlar yig'indisi");
// console.log((total - prompt_number) + " Array ichidagi sonlar yig'indisi bilan Promptdan kiritilgan son farqi");


// 2-task 2-usul


// let prompt_number = prompt("Sonni kiriting ... ?")
// let array = [1, 2, 3,-13, 4, 5, 6, 7, 8, 9, -8]
// let even_number = 0
// let odd_number = 0
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         even_number += array[i]
//     }
//     else {
//         odd_number += array[i]
//     }   
// }
// console.log(even_number + " Juft sonlar yig'indisi");
// console.log(odd_number + " Toq sonlar yig'indisi");
// console.log(((odd_number + even_number) - prompt_number) + " Array ichidagi sonlar yig'indisi bilan Promptdan kiritilgan son farqi");


// 3-task


// let prompt_number_1 = +prompt("1 - sonni kiriting")
// let prompt_number_2 = +prompt("2 - sonni kiriting")
// let even_number = 0
// let odd_number = 0
// if (prompt_number_1 < prompt_number_2) {
//     for (let i = (prompt_number_1 + 1); i < prompt_number_2; i++) {
//         if (i % 2 == 0) {
//             even_number += i
//         }
//     }
//     console.log(even_number);
// }
// else if (prompt_number_1 > prompt_number_2) {
//     for (let i = prompt_number_2; i < prompt_number_1; i++) {
//         if (i % 2 == 0) {
//             odd_number += i
//         }
//     }
//     console.log(odd_number + "  Bu joyda 1-son katta lekin shunda ham tekshirib qo'ydim 2- son katta bo'lishi kk");

// }


// 4-task


// function dif(params) {
//     const obj_1 = {number1: 1, number3: 3, number5: 5}
//     const obj_2 = {number2: 2, number4: 4, number6: 6}
//     const new_obj = Object.assign(obj_1,obj_2)
//     let new_obj2 = []
//     for (const value in new_obj) {
//         new_obj2.push(new_obj[value])    
//     }
//     let min_num = Math.min(...new_obj2)
//     let max_num = Math.max(...new_obj2)
//     console.log(Math.abs(max_num - params) + "  Objectning katta valuesidan shuncha farq qiladi");
//     console.log(Math.abs(min_num - params) + "  Objectning kichik valuesidan shuncha farq qiladi");

// }
// dif(5)


// 5-task 


// function value_fn(params){
//     let array = []
//     for (const value in params) {
//         array.push(params[value])
//     }
//     console.log(array);
// }
// value_fn({number1: 1, number3: 3, number5: 5})


// function key_fn(params){
//     let array = []
//     for (const key in params) {
//         array.push(key)
//     }
//     console.log(array);
// }
// key_fn({number1: 1, number3: 3, number5: 5})


// 6-task
// let arr = [1, 3, 2, 0, 4, 5]
// let new_arr = []
// for(let i = 0; i < arr.length; i++){
//     if(!new_arr.includes(arr[i]))
//     new_arr.push(arr[i])
// }
// let max_number = [0]
// let min_number = [0]
// for (let i = 0; i < new_arr.length; i++) {
//     if (max_number <= new_arr[i]) {
//         max_number = i
//     }
//     if (min_number >= new_arr[i]) {
//         min_number = i
//     }
// }
// [new_arr[max_number], new_arr[min_number]] = [new_arr[min_number], new_arr[max_number]];
// console.log(arr);
// console.log(new_arr);


// 7-task


// function getInitialOdds(n){
//     let massiv = []
//     for (let i = 0; i < (n*2); i++){
//         if(i % 2 == 1)
//         massiv.push(i)
//     }
//     console.log(massiv);
// }
// getInitialOdds(3)


// 8-task


// let array = [2,7,11,15]
// for (let i = 0; i < array.length; i++) {
//     for (let j = i+1; j < array.length; j++) {
//         if (array[i]+array[j]=== 9) {
//             console.log(array[i],array[j]);
//         }
//     }
// }


// 9-task


// let arr = [1, 3, 2, 2, 3 ]
// let new_arr = []
// for(let i = 0; i < arr.length; i++){
//     if(!new_arr.includes(arr[i]))
//     new_arr.push(arr[i])
// }
// console.log(new_arr);


// 10-task


// function getLevel(n) {
//     let pow_result = Math.pow(2,n)
//     let massiv = []
//     for(let i = 0;i <= pow_result; i++){
//         for(let j = 1; j <= n; j++){
//             if(Math.pow(2,j)==i){
//                 massiv.push(i)
//             }

//         }
//     }
//     console.log(massiv);
// }
// getLevel(5)