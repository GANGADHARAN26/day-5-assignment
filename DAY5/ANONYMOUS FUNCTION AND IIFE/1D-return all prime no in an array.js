var nums=[1,2,3,4,5,6,7,8,9];
var primeno=function(){
    for(var i=0;i<nums.length;i++)
    {   if(nums[i]<2){
        nums.splice(i,1);
    }
        for(var j=2;j<i;j++)
        {
               if(nums[i]%j===0){
                   nums.splice(i,1);
               }
        }
    }
    return nums;
}
console.log(primeno());