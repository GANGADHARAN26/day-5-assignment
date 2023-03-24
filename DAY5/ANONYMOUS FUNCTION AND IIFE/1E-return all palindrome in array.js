var array=["racecar", "level", "hello", "world", "deified"];
//var arrar1=["rar","mam","fsdf","uuuu"];
var palindromes=(function(){
    var result=[];
    for(var i=0;i<array.length;i++)

    {
        var reversed=array[i].split("").reverse().join("");
        if(array[i]===reversed)
        {
            result.push(array[i]);
        }
    }
    return result;
})
console.log(palindromes(array));