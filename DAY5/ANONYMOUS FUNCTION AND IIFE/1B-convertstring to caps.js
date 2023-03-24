var r=["this","is","mine"];
var caps=function(){
    var t=[];
    for(var i=0;i<r.length;i++)
    {
        t.push(r[i].toUpperCase());
    }
    return t;
}
console.log(caps());