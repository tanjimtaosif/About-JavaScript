function rps(user, computer) {
    // 1. Check for draw
    if (user === computer) return "draw";

    // 2. Check for user winning
    if (user === "rock" && computer === "scissor") return "user";
    if (user === "scissor" && computer === "paper") return "user";
    if (user === "paper" && computer === "rock") return "user";

    // 3. If none of the above, computer must be the winner
    return "computer";
}

// Testing the code
console.log(rps("rock", "scissor")); // "user"
console.log(rps("scissor", "rock")); // "computer"
console.log(rps("paper", "paper"));  // "draw"