export let BASE_URL = "https://app.vwo.com";

export function formatUpperCaseString(sname) {
    return sname.toUpperCase();
}

let fname = "Pankaj";// This is not exported. That's why you can not import this in to other classes.
