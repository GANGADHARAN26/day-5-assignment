var r=[1,2,3,4,5,6,7,8];
var sumof=function(){
    var t=0;
    for(var i=0;i<r.length;i++)
    {
        t=t+r[i];
    }
    return t;
}
console.log(sumof());