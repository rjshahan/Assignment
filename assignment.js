//Kilometer to meter.
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;

}
//var distance = kilometerToMeter(5);
//console.log(distance);



//Budget Calculator.
function budgetCalculator (watch, phone, laptop){
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var totalPrice = watchPrice + phonePrice + laptopPrice;
    return totalPrice;
}
//var result = budgetCalculator(1, 2, 3);
//console.log(result);



//Hotel Cost.
function hotelCost(num){
var rent = 0;
if(num <= 10){
    rent = num * 100;
}
else if(num <= 20) {
    var first = 10 * 100;
    var remaining = num - 10;
    var second = remaining * 80;
    rent = first + secondPart;
}
else{
    var first = 10 * 100;
    var second = 10 * 80;
    var remaining = num - 20;
    var third = remaining * 50;
    rent = first + second + third;
}
return rent;
}
 //var result=hotelCost(25);
 //console.log(result);





//Mega Friend.
function megaFriend(string){
    var largest = string[0];
     for (var i = 0; i < string.length; i++) {
        const element = string[i];
            if( largest.length < element.length){
                largest = element;
            }
        }
        return largest;
}

//var  result = ["shahan","sorif","himangshu","lalu","sun"];
//var largestNumber = megaFriend(result);
//console.log(largestNumber);





//Bonus Part.
function fibonacci(num){
    if(num==0){
        return 0;
    }
    if(num==1){
        return 1;
    }
    else{
        return fibonacci(num-1)+ fibonacci(num-2);
    }
}

//var result= fibonacci(12);
//console.log(result);