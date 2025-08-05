const greetingWithWeather = (name , weather)=>{

     if ( weather ==  "sunny"){
        return ` Chao ${name} ! Hom nay troi nang tuyet voi`

     }else if (weather == `rainy`){
        return ` Chao ${name} , Hom nay troi mua , hay mang theo o`

     }else{
        return `Chao ${name} ,Hom nay troi khong xac dinh`
     }

}
console.log(greetingWithWeather("quang" , "sunny"));
console.log(greetingWithWeather("quang" , "rainy"));
console.log(greetingWithWeather("huy" , " "));


