// console.log('hello world');

// 1
let array1 = [5, 25, 89, 120, 36];

array1.unshift('html', 'css');
array1.push('javascript', 'python');

console.log(array1);

console.log(array1.length);

array1.shift()
array1.pop()

console.log(array1);

// 2
let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი']
console.log(fruits.length);
console.log(fruits.concat('ვაშლი', 'ანანასი'));

fruits.unshift('საზამთრო');
console.log(fruits);
console.log(fruits.length);

fruits.fill('მანგო', 3);
console.log(fruits)

fruits.shift()
fruits.pop()
console.log(fruits);

console.log(fruits.length);
// 3
let array = [1, 2, 3, 4, 5];
let startpoint = 3; 
let deleted = 0;
let itemstoadd = ['a', 'b', 'c']; 

array.splice(startpoint, deleted, ...itemstoadd);

console.log(array); 
//  4
let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(jami =>(
    sum += jami
));

console.log(sum); 
// 5
let array3 = []
for(let i = 1; i<=100; i++){
    array3.push(i)
}

array3.reverse()
console.log(array3);
// 6
let array4 = [2,15,10,24]
array4.splice(2, 1)
console.log(array4);
// 7
let array5 = [12, 25, 3, 6, 8, 14, 7, 23];
let array6 = array5.map((element) => {
return element / 3;
})
console.log(array6);
// 8
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let morethan3 = languages.filter(function(language) {
    return language.length > 3;
});
console.log(morethan3);
// 9
let words = ['madrid', 'rome', 'milan', 'berlin'];
let morn = words.filter(function(words){
return words.includes('m', 'n')
});
console.log(morn);
// 10
let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = [5, 6];
let arr4 = arr1.concat(arr2, arr3)
console.log(arr4);
// 11
// amas ver mivxvdi 

//  12
let array7 =[23,45,32,5,87,7,3,98]
let a = array7.sort((a,b) => b - a)
console.log(a);
// 13
function getinfo() {
    let nameuser = 'anna';
    console.log(nameuser); 
// დალოგვისას მივიღებთ anna-ს რადგან nameuser-ს მნიშვნელობა მიცემული აქვს anna
    function userinfo() {
        let info = `user name is ${nameuser}`;
        console.log(info);
        // დალოგვისას ვიღებთ იმ სახელს რასაც შევიყვანთ და დაგვიწერს user name is და ჩვენ შეყვანილ სიტყვას
    }
    userinfo();
    console.log(info);
}


console.log(nameuser);
// დაგვილოგავს მთლიან ინფორმაციას რასაც ბოლოს მივიღებთ 
getinfo();