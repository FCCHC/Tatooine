var resultado =0;
for (var i = 0; i < process.argv.length; i++) {
  if(process.argv[i]>2){
resultado = resultado + Number(process.argv[i]);
  }
}
console.log(resultado);
