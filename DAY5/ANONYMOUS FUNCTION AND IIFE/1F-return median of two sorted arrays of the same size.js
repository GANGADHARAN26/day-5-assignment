var arr1=[1,3,5,7,9];
var arr2=[2,4,6,8,10];


var median=(function(){
   
   var mergedarray=[...arr1,...arr2].sort((a,b)=>a-b);
   var mid=Math.floor(mergedarray.length/2);
   return (mergedarray[mid-1]+mergedarray[mid])/2;
   
})();
//end-here
console.log(median);