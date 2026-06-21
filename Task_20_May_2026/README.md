# Task — 20 May 2026

Daily practice problems applying `if` / `else if` / `else` to QA-flavoured scenarios.

## Files

| File | Topic |
|------|-------|
| `Question1.js` | HTTP status code categorizer |
| `Question2.js` | Test case pass/fail verdict |
| `Question3.js` | Bug severity classifier |
| `Question4.js` | Build health reporter |
| `Question5.js` | Login lockout after failed attempts |

---

## Question 1 — HTTP Status Code Categorizer

Given an HTTP status code, print which category it belongs to.

- `200–299` → Success
- `300–399` → Redirection
- `400–499` → Client Error
- `500–599` → Server Error
- Anything else → Invalid

**Sample Input/Output:**

```
Input: 404
Output: Client Error

Input: 200
Output: Success
```

---

## Question 2 — Test Case Pass/Fail Verdict

Compare actual result with expected result and print the test verdict.

**Sample Input/Output:**

```
expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials
```

Emoji reference: https://emojipedia.org/check-mark-button

---

## Question 3 — Bug Severity Classifier

Given a bug's impact score (1–10), classify the severity.

- `9–10` → Critical (block release)
- `7–8` → High
- `4–6` → Medium
- `1–3` → Low
- Anything else → Invalid score

**Sample Input/Output:**

```
Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium
```

---

## Question 4 — Build Health Reporter

Given the percentage of test cases passed in a CI build, report build health.

- `100%` → Green Build
- `90–99%` → Stable (investigate failures)
- `70–89%` → Unstable
- Below `70%` → Broken Build (block deployment)

**Sample Input/Output:**

```
Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment
```

---

## Question 5 — Login Lockout After Failed Attempts

Track failed login attempts. Lock the account after 3 failed attempts.

**Sample Input/Output:**

```
Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful
```
