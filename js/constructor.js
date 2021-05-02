


// function User(name, id){
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// User.prototype.exit = function(){
//     console.log(`User ${this.name} go`)
// }

// const ivan = new User('Ivan', 28);
// const alex = new User('alex', 30);

// ivan.exit()

// ivan.hello();
// alex.hello();
// console.log(ivan)
// console.log(alex)

//  rest 


// const log = function (a,b, ...rest){
//     console.log(a,b,rest)
// }

// log('basic', 'rest', 'operator', 'usegae')

// function calcOrDouble(number, basis = 2){
   
//     console.log(number + basis)
// }
// calcOrDouble(3);


// ------= Json -----

// const persone = {
//     name: 'Alex',
//     tel:'+0555337599'
// };



// -----------  promise -------



// console.log('запрос данных...')

// const req = new Promise(function(resolve,reject){
//     setTimeout(() =>{
//         console.log('preparing data...')
    
//         const product = {
//             name: 'tv',
//             price:2000
//         }
    
    
//       resolve(product)
//     },2000)

// })

// req.then((product) => {
//    return new Promise((resolve, reject) => {
//        setTimeout(() => {
//            product.status = 'order'
//            resolve(product)
//        },2000)
//    })
 
// }).then(data => {
//     data.modify = true
//     return data
    
// }).then(data =>{
//     console.log(data)
// })



// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`)
// console.log(res)



// const add = [1,2,3,4,5,6,7,8,9];

// const result = add.reduce((a,b) => a+b)
// console.log(result)


// const obj = {
//     ivan: 'persone',
//     ann:'persone',
//     dog:'animal',
//     cat:'animal'
// };


// const newArr = Object.entries(obj)
// .forEach((item) =>{
//     console.log(item)
// } )

// // .filter(item => item[1] === 'persone')
// // .map(item => item[0])

// console.log(newArr)


// const arr = [1, 2, 3, 4, 5]


// arr.forEach((element) => {
//     element = element + 'akyl'
//     console.log(element)
    
// })




