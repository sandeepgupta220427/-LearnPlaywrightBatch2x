/*
Question 4 — Build Health Reporter
Problem: Given the percentage of test cases passed in a CI build, report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)


Sample Input/Output:
Input: 95
Output: 🟡 Stable — Investigate failures


Input: 65
Output: 🔴 Broken Build — Block deployment
*/

let testcase_pass_perc=95
let build_health;

if(testcase_pass_perc===100){
    build_health="🟢 Green Build"
}
else if(testcase_pass_perc>=90 && testcase_pass_perc<=99){
    build_health="🟡 Stable — Investigate failures"
}
else if(testcase_pass_perc>=70 && testcase_pass_perc<=89){
    build_health="🟠 Unstable"
}
else if(testcase_pass_perc<70 && testcase_pass_perc>=0){
    build_health="🔴 Broken Build — Block deployment"
}
else{
    build_health="Invalid percentage"
}

console.log(`Test Pass %: ${testcase_pass_perc} and Build Health: ${build_health}`)