// check if the input number is avval or not
function find_avval(a,b){
    let i=a;
   while (i<b){
       if (aval(i))
       console.log(i,",");
       i++;
   }


}
function aval (n){
    let i = 2
    for(i; i< n ; i++)
        if ( n%i === 0) return false;
    if (i===n)
        return true;
}
find_avval(4,10);