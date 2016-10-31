function fib(n) {
    if (n <= 1) return n;
    console.log(n);
    return fib(n - 1) + fib(n - 2);
}

function palindrome(word, at) {
    if (at >= word.length - at) return true;
    if (word[at] === word[word.length - at - 1]) {
        return palindrome(word, at + 1);
    } else {
        return false;
    }
}

console.log("test palindrome 1:", palindrome("parteretrap", 0));
console.log("test palindrome 2:", palindrome("civic", 0));
console.log("test palindrome 3:", !palindrome("test", 0));

function ruler(n) {
    if (n <= 1) return "-";
    return ruler(n - 1) + "\n" + "-".repeat(n) + "\n" + ruler(n - 1);
}

console.log("test 1:", ruler(1) === "-");
console.log("test 2:", ruler(2) === "-\n--\n-");
console.log("test 3:", ruler(3) === "-\n--\n-\n---\n-\n--\n-");
console.log(ruler(10));
