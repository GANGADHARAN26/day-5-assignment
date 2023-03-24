var array=[1,2,3,4,5,6,7,8,9];
var k=3;
(function rotate(){
     var rotated=array.splice(k).concat(array.slice(0,k));
     console.log( rotated);
})();