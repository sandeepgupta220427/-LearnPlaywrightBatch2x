let a=14,b=14,c=14

if(a===b && a===c && b===c){
    console.log("equilateral triangle")
}

else if(a===b || b===c || a===c){
    console.log("isosceles triangle")
}
else{
    console.log("scalene triangle")
}