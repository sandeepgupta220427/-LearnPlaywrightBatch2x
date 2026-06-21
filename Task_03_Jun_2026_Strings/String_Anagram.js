let str1="act"
let str2="cat"

let str1Arr=Array.from(str1)
let str2Arr=Array.from(str2)


if(str1Arr.sort().join('')===str2Arr.sort().join('')){
    console.log("anagram")
}
else{
    console.log("not anagram")
}