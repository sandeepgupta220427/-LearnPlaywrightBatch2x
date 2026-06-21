/*
Question 3 — Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score


Sample Input/Output:
Input: 9
Output: Severity: Critical — Block release


Input: 5
Output: Severity: Medium
*/

let bug_impact_score=5
let severity;

if(bug_impact_score===9 || bug_impact_score===10){
    severity="Critical (block release)"
}
else if(bug_impact_score===7 || bug_impact_score===8){
    severity="High"
}
else if(bug_impact_score===4 || bug_impact_score===5 || bug_impact_score===6 ){
    severity="Medium"
}
else if(bug_impact_score===1 || bug_impact_score===2 || bug_impact_score===3 ){
    severity="Low"
}
else{
    severity="Invalid score"
}

console.log(`Bug Score: ${bug_impact_score} and severity: ${severity}`)