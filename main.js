//darsda ishlangan masala

// let jamoa = +prompt("Nechta jamoa qabul qilinadi");
// function oyin(x) {
//   let oyinlar = 0;
//   for (let i = 0; i < 2; i++) {
//     if (x % 2 == 0) {
//       oyinlar = oyinlar + x / 2;
//       oyinlar = oyinlar + oyinlar - 1;
//     } else {
//       oyinlar = oyinlar + (x - 1) / 2 ;
//       oyinlar = oyinlar + oyinlar ;
//     }

//     return oyinlar;
//   }
// }
// alert(oyin(jamoa));

///masalalar leetcode dan

//masala 1
// Hersi o'zining birinchi mashinasi uchun pul tejashni xohlaydi. U har kuni Leetcode bankiga pul qo'yadi.
// U birinchi kuni dushanba kuni $1 qo'yish bilan boshlanadi. Seshanbadan yakshanbagacha har kuni u avvalgi kunga qaraganda 1 dollar ko'proq kiritadi.
//  Har keyingi dushanba kuni u avvalgi dushanbaga qaraganda 1 dollar ko'proq kiritadi.
// Berilgan n, n-kun oxirida Leetcode bankida bo'ladigan umumiy pul miqdorini qaytaring.
//javob
// function tejash(x) {
//   let hafta = 0;
//   let jami = 0;
//   let dushanba = 0;
//   let rost = true;
//   while (rost) {
//     rost;
//     dushanba++;
//     jami += dushanba + 6;
//     if (hafta == 10) {
//       rost = false;
//     }
//     hafta++;
//   }
//   return `Sizda 9 hafta ichida ${jami} $ pul yigildi`;
// }

// alert(tejash());

//masala 2
// X butun soni berilgan bo'lsa, agar x a bo'lsa, true qiymatini qaytaring
// palindrom
// , aks holda false.
//javob
// let son = +prompt("Son kiritng")
// let arr = son.toString().split("");
// function palindrom(n) {
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] == n[i + 2]) {
//       return true
//     }else {
//       return false
//     }
//   }
// }
// alert(palindrom(arr));

//masala 3
// Satrlar massivi orasidan eng uzun umumiy prefiks qatorini topish funksiyasini yozing.
// Agar umumiy prefiks bo'lmasa, bo'sh "" qatorini qaytaring.
//javob
// let arr1 = ["Nodirebk", "Negmatov", "Nematov"];
// let arr2 = arr1.
// function umumiy(x) {
//   let newMas = "";
//   let arr = x.split("")
//   for (let i = 0; i < x.length; i++) {
//     let mas = x[i];
//     for (let z = 0; z < mas[i.length]; z++) {
//       if (mas[i[z]] == mas[i + (1)[z]] && mas[i + (1)[z]] == mas[i + (2)[z]]) {
//         newMas.push(mas[i[z]]);
//       }
//     }
//   }
//   return newMas;
// }
// console.log(umumiy(arr1));

//masala 4
// Faqat '(', ')', '{', '}', '[' va ']' belgilarni o'z ichiga olgan s qatori berilgan bo'lsa, kiritish qatori to'g'ri yoki yo'qligini aniqlang.
// Kirish qatori to'g'ri bo'ladi, agar:
// Ochiq qavslar bir xil turdagi qavslar bilan yopilishi kerak.
// Ochiq qavslar to'g'ri tartibda yopilishi kerak.
// Har bir yopiq qavsda bir xil turdagi mos keladigan ochiq qavs mavjud.
//Javob
// function qavs(x) {
//   let odd = ")";
//   let tort = "]";
//   let katta = "}";
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] == "(" && x[i + 1] == odd || x[i] == "[" && x[i + 1] == tort || x[i] == "{" && x[i + 1] == katta) {
//         return true
//     }else{
//         return false
//     }
//   }
// }
// alert(qavs("("));

//masala 5
// Ikkita p va q ikkilik daraxtlarning ildizlarini hisobga olib, ular bir xil yoki bir xil emasligini tekshirish uchun funktsiya yozing.
// Ikki binar daraxt, agar ular strukturaviy jihatdan bir xil bo'lsa va tugunlar bir xil qiymatga ega bo'lsa, bir xil hisoblanadi.
//javob
// function daraxtlar() {
//   let p = [1, 2, 3];
//   let q = [1, 2, 3];
//   let quti = 0;
//   for (let i = 0; i < p.length; i++) {
//     if (p[i] == q[0] && p[i + 1] == q[1] && p[i + 2] == q[2]) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// alert(daraxtlar());

//masala 6
// function ogri() {
//   let arr = [1, 2, 3, 4, 5, 3, 2];
//   let nat = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] ) {
//       if (arr[i + 2]) {
//         let qosh = arr[i] + arr[i + 2];
//         nat += qosh;
//       }
//     }
//   }
// }
// console.log(ogri());

//masala 7
// function qoshish(a, b) {
//   return a + b;
// }
// alert(qoshish(10,11))

//masala 8
// function tengmi (a,b){
//   if (a == b){
//     return true
//   }else {
//     return false
//   }
// }
// alert(tengmi(10,10))

//masala 9
// function Nima(x) {
//   if (x == undefined) {
//   } else if (x == "") {
//     return "String";
//   } else if (x == false || x == true) {
//     return "Boolen";
//   } else if (x == [] || x == {} || x == null) {
//     return "object";
//   } else {
//     return "number";
//   }
// }
// alert(Nima(false));

//masala 10
//   function nechinchi(a, n) {
//     if (n < 0 || n >= a.length) {
//       return "Index out of range";
//     } else {
//       return a.charAt(n);
//     }
//   }

// alert(nechinchi("Nodirebk", 4));

//masala 11
// function torta(a) {
//   let str = "";
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > a[i.length - 5] || a[+i] == 4) {
//       str.push(a[i]);
//     }
//   }
//   return str;
// }
// alert(torta("1234"))

//masala 12
// function uchta(a) {
//   let str = "";
//   if (a.length == a[0] || a.length == a[1] || a.length == a[2]) {
//     str = `${a[0]}${a[1]} ${a[2]}`;
//   }
//   return str;
// }
// alert(uchta("nsajinfg"));

//masala 13
// function yarimi(a, b, c, d, e, f) {
//   let nat = (((a + b - c) * d) / e) ** f;
// }
// alert(yarimi(12,12,34,456,12,5))

//masala 14
// function qoshilishi(a, b) {
//   return `${a}${b}`;
// }
// alert(qoshilishi("ofijsdiuj","suhgyuds"))

//masala 15
// function juft (x){
//     if(x % 2 == 0){
//         return true
//     }else {
//         return false
//     }
// }
// alert(juft(-4))

//masala 16
// function nechtaBor (a,b){
//     let quti = 0
//     for (let i =0; i < b.length;i++){
//         if (b[i] == a){
//             quti++
//         }
//     }
//     return quti
// }
// alert(nechtaBor("a","Salom dunyo bugun b=nechta odam darsga keldi"))

//masla 17
// function kichikmi(a, b) {
//   if (a < b) {
//     return a / b;
//   } else {
//     return a * b;
//   }
// }
// alert(kichikmi(12,40))

//masala 18
// function yaxlitla (a){
//     let nat = Math.round(a)
//     return nat
// }
// alert(yaxlitla(12.32342))

//masala 19
// let son = prompt("son kiritng")
// let str = String(son).split("")
// function ajrat (a){
//     let nat = a.join(",")
//     return nat
// }
// console.log(ajrat(str));

//masala 20
// function bittasi(a, n) {
//   let arr = a.split("");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == n) {
//       return arr[i];
//     }
//   }
// }
// alert(bittasi([1, 2, 3, 4, 56], 1));

//masala 21
// let arr = [1, 2, 3, 4, 5];
// function uchta(a) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       a[i] == arr.length - arr.length - 1 &&
//       a[i] == arr.length - arr.length - 2 &&
//       a[i] == arr.length - arr.length - 3
//     ) {
//       newArr.push(a[i]);
//     } else {
//       newArr.pop(a[i]);
//     }
//   }
//   return newArr;
// }
// alert(uchta(arr));

// masala 22
// function tortburchakYuzi(a, b) {
//     console.log(a * b);
// }

// tortburchakYuzi(
//   +prompt("To'rtburchakning 1-tomonini kiriting."),
//   +prompt("To'rtburchakning 2-tomonini kiriting.")
// );

// masala 23
// function stringQoshish(a) {
//   console.log("Something " + a);
// }

// stringQoshish(prompt("Biror string qiymat yozing"));

// masala 24
// function kvadrat(a) {
//     console.log(a * a);
// }

// kvadrat(+prompt("Kvadratning tomonini kiriting."))
// masala 25
// function noldan(a) {
//     if (a <= 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// noldan(+prompt("Hohlagan biror son kiriting."))

// masala 26
// function burchak(a) {
//     console.log(
//         (a-2)*180
//     );
// }

// burchak(+prompt("Ucburchak nechta burchakligini kiritng."))

// masala 27
// function achko(a, b) {
//   console.log(a * 2 + b * 3);
// }

// achko(
//   +prompt("2 achkoli gollar sonini kiriting."),
//   +prompt("3 achkolik gollar sonini kiriting.")
// );

// masala 28
// function edabit(a) {
//     console.log(String(a) + "Edabit");
// }

// edabit(prompt("Hohlagan sozingizni kiriting."))

// masala 29
// function yigindi(a, b) {
//     if (a + b < 100) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// yigindi(+prompt("Birinchi sonni kiriting."), +prompt("Ikkinchi sonni kiriting."))

// masala 30
// function printArray(a) {
//     console.log(Array(a));
// }

// printArray(+prompt("Biror son kiriting."))

//masala 31
// let arr = [1,2,3,4,5,6]
// let nat = arr.length
// alert(nat)

//masala 32
// function myFunction(a) {
//   let newArr = [];
//   newArr.push(a[0]);
//   newArr.push(a[1]);
//   newArr.push(a[2]);
//   return newArr;
// }
// alert(myFunction([1,2,3,4,5]))

//masala 33
// function oxirgi(a, n) {
//   if (n >= a.length) {
//     return a;
//   } else {
//     return a.slice(a.length - n);
//   }
// }
// alert(oxirgi([1, 2, 3, 4, 5, 6, 7], 3));

//masala 34
// function myFunction(a) {
//   return a.length;
// }

//masala 35
// function negativ(a) {
//   let quti = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] <= 0) {
//       quti++;
//     }
//   }
//   return quti;
// }
// alert(negativ([1, 2, -3, 4, -5]));

//masala 36
// function kattasidan (a){
//     return array.sort((a, b) => b - a);
// }
// alert(kattasidan([2,1,4,5,6,1]))

//masala 37
// function sum (a){
//     let jami = 0
//     for(let i =0; i<a.length;i++){
//        if(a[i+1]){
//         jami = jami + a[i]+a[i+1]
//        }
//     }
//     return jami
// }
// alert(sum([1,23,45,5654,12]))

//masala 38
// function sum(a) {
//   let quti = 0;
//   let jami = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i + 1]) {
//       quti++;
//       jami = jami + a[i] + a[i + 1];
//     }
//   }
//   return jami / quti;
// }
// alert(sum([12,14,5,65,465,3]))

//masala 39
// function uzini(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > arr[i + 1].length) {
//       return arr[i];
//     }
//   }
// }
// console.log(uzini(["nodirbek", "olma"]));

//masala 40
// function myFunction(arr) {
//   return arr.every((element) => element === arr[0]);
// }
// alert(myFunction([1, 1, 1, 1, 1, 1]));
