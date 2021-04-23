
// // let ngocTrinh = {
// //     name: "NgocTrinh",
// //     age: 32,
// //     address: "HCM",
    
// //     shopping: function(){

// //     },

// //     play: function(){

// //     },
// // };
//     class Person{
//         name;
//         age;
//         address;
//         favorites;

//         constructor(_name, _age, _address, _favorites){
//             this.name = _name;
//             this.age = _age;
//             this.address = _address;
//             this.favorites = _favorites;
//             console.log(this);
//         }

//         speak(){
//             console.log(this.name + "," + this.age + "tuổi"+ "nói gì đấy");
//         }
//         study(){
//             console.log("học gì đấy");   
//         }
// }

// let person_1 = new Person("person 1", 20, "HN", ["game"]);
// let person_2 = new Person("person 2", 32, "HP", ["music"]);

// console.log(person_1, person_2);


// person_2.speak(); // person 2 30 tuổi nói gì đấy
// person_1.speak(); // person 1 20 tuổi nói gì đấy

// //Practice// Hãy set-up class NYC với các thuộc tính và phương thức sau:

// /*
//     name;
//     characters;
//     appearances;
//     age;
//     address;

//     boyfriends:[];

//     askForGift() ---> in ra "name" + đòi quà
//     introduce() ---> họ tên "name" , tuổi "age", ngoại hình "appearances"

//  */

//     class oldLover extends Person{
    
//         characters;
//         appearances;
//         boyfriend;

//         constructor(_name, _age, _address, _characters,_appearances,_boyfriend,){
//             super(_name,_age,_address);

//             this.characters= _characters;
//             this._appearances = _appearances;
//             this._boyfriend = _boyfriend;

//             console.log(this);

//         }

//         askForGift(){
//             console.log(this.name + "đòi quà" );
//         }
//         introduce(){
//             console.log(
//             `họ tên $(this.name),
//             tuổi  $(this.age),
//             ngoại hình $(this.appearances),`
//             )
//         }
// }
// let ngocTrinh2 = new oldLover(
//     "Ngọc Trinh2",
//     20,
//     "HN",
//     "Nice", 
//     "Ngon",
//     ["Đại gia"]);


// console.log(ngocTrinh2);

// class Animal{
//     name;
//     constructor(name){
//         this.name = name;
//     }
// }
// class Mammal extends Animal{
//     leg;
//     constructor(name, leg){
//         super(name);
//         this.leg = leg;
//     }
// }
// class Dog extends Mammal{
//     fur;
//     constructor(name, fur){
//         super(name, 4);
//         this.fur =fur;
//     }
// }
// class Reptile extends Animal{
//     weight;
//     constructor(name, weight){
//         super(name);
//         this.weight = weight;
//     };
        
// }
// class Snake extends Reptile{
//     poison;
//         constructor(name, weight, poison){
//         super(name, weight);
//         this.poison = poison;
//         };
        
// }

// let Shiba = new Dog("Cậu Vàng", "vàng");

// console.log(Shiba instanceof Animal);

/* hãy cài đặt các class sau
    Person
    name;
    age;
    introduce() --> in ra màn hình
        tôi là "nam"
        năm nay tôi "age" tuổi
    Boy kế thừa Person
        handsome
        girlfriend: chỉ nhận Object được tạo từ class Girl
    Girl kế thừa Person
        beauty;
        boyfriend: chỉ nhận Object được tạo từ class Boy

    Pet
        name;
        species;
        owner;// chỉ nhận Object được tạo từ Person
*/

