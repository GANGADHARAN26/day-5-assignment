var array=[1,2,,4,5,6,7,8,9];
sorted=[];
var isPrime =num =>{
    for(var i=2;i<num;i++)
    {
        if(num %i===0)
        {
           return false;
        }
    }
    return num !==1;
}
var sortedarray=array.filter(num=>isPrime(num));
console.log(sortedarray);