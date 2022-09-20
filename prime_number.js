function identifyPrime(num) {
  
    let count=0;
    
    for(let i=1; i<=num; i++){
        if(num%i===0){
            count++;
        }
    }
    if(count==2){
        return true;
    }
    return false
}
let answer= identifyPrime(3);
if(answer==true){
        console.log("Prime");
    } else{
        console.log("Not Prime");
    }