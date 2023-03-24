var arra=[1,2,3,4,5,6,2,7,8,9,6,4,];
var repeats=function()
{
   
   for(var i=0;i<arra.length;i++)
   {
    for(var j=0;j<arra.length;j++)
    {
        if(arra[i]===arra[j] && i!=j)
        {
            arra.splice(j,1);
        }
    }
   }
   return arra;
}
console.log(arra);