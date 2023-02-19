//======================================== 1
// let massiv = [1,2,3,4,5]
// for (let i = 0; i < massiv.length; i++) {
//     console.log(massiv[i])
// }


//======================================== 2
// let massiv = [1,2,3,4,5]

// let result = 0
// for (let i = 0; i < massiv.length; i++) {
//     result += massiv[i]
// }

// console.log(result)


//======================================== 3
// let i = 0;
// while (i < 3) {
//     console.log(`number ${i}`);
//     i++;
// }



//======================================== 4
// let arr = [-2,7,9,5,8,1,12,15,17,3]
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < 10) {
//         console.log(arr[i])
//     }
// }


//======================================== 5
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

//======================================== 6
// let sum = 1;
// for (let i = 0; i <= 100; ++i) {
//     sum += i
// }

// console.log(sum)


//======================================== 7
// let arr = ['BMW', 'Mersedes', 'Opel', 'Mazda', 'FIAT', 'Ferarri', 'Reno']

// let newArr = arr.filter(item => item === item.toUpperCase())

// console.log(newArr)


//======================================== 8
// let arr = [2,3,4,5,6,7];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== 5) {
//         arr[i] *= 2
//     }
//     newArr.push(arr[i])
// } 
// console.log(newArr)

// for (let i = 0; i < arr.length; i++) {
//     if(newArr[i] % 2 === 0) {
//         console.log(newArr[i])
//     }
// }


//======================================== 8
// let arr = [-2, 7, '9б', 'Vlad', 1, 12, 15, 'Ivan', 17, 3]
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'string') {
//         console.log(arr[i])
//     }
// }


//======================================== 9
// let days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

// for (let i = 0; i < days.length; i++) {
//     days.splice(5, 2, 'Выходной', 'Выходной')
// }

// console.log(days)


//======================================== 10
// let arr = ['Наташа','Анастасия','Дмитрий','Максим']

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] !== 'Наташа') {
//         console.log(arr[i])
//     }
// }


//======================================== 11
// let arr = ['Наташа', 'Анастасия', 2, 'Максим', 4]

// for (let i = 0; i < arr.length; i++) {
//     arr.sort()
// }

// console.log(arr)


//======================================== 12
// let sum = 5;
// for (let i = 5; i <= 5; i++) {
//     for(let j = 2; j <= 10; j++) {
//         console.log(`${i} x ${j} = ${i * j}`)
//     }
// }
