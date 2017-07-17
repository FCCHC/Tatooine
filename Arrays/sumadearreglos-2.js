var numbers=[1,2,3,4,5,6];

function sum(total,item){
  return total += item;
}

console.log(numbers.reduce(sum));
