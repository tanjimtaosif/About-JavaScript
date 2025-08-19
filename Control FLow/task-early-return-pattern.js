function getGrade(score) {
    if (score >= 90 && score <= 100) return "A+";
    if (score >= 80 && score <= 89)  return "A";
    if (score >= 70 && score <= 79) return "B+";
    if (score >= 60 && score <= 69)  return "B-";
    if (score >= 50 && score <= 59) return "C";
    if (score >= 40 && score <= 49) return "C+";
    if (score >= 30 && score <= 39) return "D"
    return "Study hard!!!"
};

console.log(getGrade(75));
