var numbers=[1,2,3,4,5,6,7,8,9,10];
var result =0;
for (i = 0; i < numbers.length; i++) {
   if(numbers[i]%2==0){
    result += numbers[i];
   }
}

console.log(result);
