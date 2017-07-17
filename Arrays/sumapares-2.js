var numbers=[1,2,3,4,5,6,7,8,9,10];

function sum (total, item){
  if(item%2==0){
    total+=item;
  }
  return total;
}

console.log(numbers.reduce(sum,0));
