let str="madam"
let strRev=""
for(let i=str.length-1;i>=0;i--){
    strRev+=str.charAt(i)
}

console.log(strRev)

if(str===strRev){
    console.log("Palindrome")
}
else{
    console.log("Not Palindrome")
}