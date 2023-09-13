console.log("I AM HERE");

let canYouDance = prompt("On a scale of 1-10, with 10 being the best, how well can you dance?");

if (canYouDance <= 4) {
message = "Welcome! I shall teach you to dance.";
} else if (canYouDance <=7) {
    message = "You are a competent dancer, but I have more to teach you."
} else if (canYouDance <=10) {
    message = "YOU KNOW TOO MUCH. I CAN TEACH YOU NOTHING. LEAVE."
} else {
    message = "If you're not going to do this properly, I'm not going to bother with you."
}

message = "You have rated yourself as having a dance ability of " + canYouDance + " out of 10. " + message;
document.write(message)



