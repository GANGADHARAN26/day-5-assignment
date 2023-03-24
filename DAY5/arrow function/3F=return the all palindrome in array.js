var array=["racecar", "level", "hello", "world", "deified"];
var isPalindrome=str => {

    
        var reversed=str.split("").reverse().join("");
        
    return str===reversed;
};
var reversedarray=array.filter(str => isPalindrome(str));
console.log(reversedarray);