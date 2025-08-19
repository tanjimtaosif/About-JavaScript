function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A+";
    }
    else if (score >= 80 && score <= 89) {
        return "A"
    }
    else if (score >= 70 && score <= 79) {
        return "B+"
    }
    else if (score >= 60 && score <= 69) {
        return "B-"
    }
    else if (score >= 50 && score <= 59) {
        return "C"
    }
    else if (score >= 40 && score <= 49) {
        return "C+"
    }
    else if (score >= 30 && score <= 39) {
        return "D"
    }
    else {
        return "Study hard!!!"
    }
};

console.log(getGrade(75));
