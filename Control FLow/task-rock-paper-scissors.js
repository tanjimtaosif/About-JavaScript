function rps(user, computer) {
    if (user === computer) return "It's a tie"
    if (user === "rock" && computer === "scissor") return "User wins! Rock beats Scissor";
    if (user === "paper" && computer === "rock") return "User wins! Paper beats Rock";
    if (user === "scissor" && computer === "paper") return "User wins! Scissor beats Paper";

    return "Computer wins!!!"
}
console.log(rps("rock", "rock"));