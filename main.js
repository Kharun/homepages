// ======================================== 1
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sum = 0;
// for (let salary of Object.values(salaries)) {
//     sum += salary;
// }

// console.log(sum)


// ======================================== 2
// let obj = {name:'Ivan', age: 26}
// console.log(obj.name)


// ======================================== 3
// let obj = {name:'Ivan', age: 26}

// obj.age += 5;
// console.log(obj.age)


// ======================================== 4
// let obj = {name:'Ivan', age: 26, student: true}
// obj = {...obj, student: !obj.student}
// console.log(obj)


// ======================================== 5
// let obj = {name:'ABRACADABRA', age: 15, student: true}

// console.log(obj.name.includes('BRAC'))


// ======================================== 6
// let obj = {name:'Ivan', age: 26, student: true}

// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


// ======================================== 7
// let obj = {name:'Ivan', age: 26, student: true}

// let clone = {}
// for (let key in obj) {
//     clone[key] = obj[key]
// }
// clone.name = 'Kharun'

// console.log(clone)


// ======================================== 8
// let cars = ['bmw', 'honda','mers','lexus']

// let last = cars.pop()
// console.log(cars)


// ======================================== 9
// let cars = ['bmw', 'honda','mers','lexus']
// console.log(cars.pop())


// ======================================== 10
// let cars = ['bmw', 'honda','mers','lexus']
// cars.splice(1, 1, 'toyota')
// console.log(cars)


// ======================================== 11
// let cars = ['bmw', 'honda','mers','lexus']
// cars.unshift('kia')
// console.log(cars)


// ======================================== 11
// let cars = ['bmw', 'honda','mers','lexus']
// console.log(cars.length)