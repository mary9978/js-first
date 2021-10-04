// compute if this is complete number or not
function complete(N){
    let count=0;
    for (let i=1;i<N;i++){
        if (N%i===0) count+=i;
    }
    if (count===N) return("YES")
    else return ("No")
}
console.log(complete(6));