var arr=[1,2,3,4,5,6,7,8,9];
var od=[];
var odd=function(arr){
   for(var i=0;i<arr.length;i++)
   {
          if(arr[i]%2!==0)
          {
             od.push(arr[i]);
          }
   }
   return od;
}
console.log(odd(arr));