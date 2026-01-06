function getGrade(score) {
    // 1. Handle "Invalid" first (Edge cases)
    if (score < 0 || score > 100 || typeof score !== "number") {
        return "Invalid marks X";
    }

    // 2. Use simple order (since we check top-down, we don't need '&&')
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    if (score >= 33) return "E";

    // 3. Anything else left (0 to 32) is a fail
    return "Fail";
}

console.log(getGrade(54)); // "E"
console.log(getGrade(105)); // "Invalid marks X"