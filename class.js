// class is BluePrint of Object

// class division {
//     constructor(first,second){
//         this.first = first
//         this.second = second
//     }

//     divisionofnum() {
//         return this.first/this.second
//     }

//     divisionnew(){
//         console.log('division is' + this.divisionofnum());
//     }
// }
//     var m =new division(20,10)
//     m.divisionnew()

// class ferenhit{
//     constructor (f){
//     this.f=f 
//     }

// FerenhitTocles(){
//     console.log("f="+(this.f-32)/1.8);
//     }
// }
// var fre = new ferenhit(32)
// fre.FerenhitTocles()

class multiplication{
    constructor (num){
    this.num = num
    }
    multi(num){
    console.log('ans='+( this.num)*num);
    }
}
var mul= new multiplication(5)
mul.multi(10)
 