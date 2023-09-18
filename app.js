console.log("I AM HERE");

function canYouDance() {
  let rateYourself = prompt(
    "On a scale of 1-10, with 10 being the best, how well can you dance?"
  );
  let message;

  while (rateYourself < 1 || rateYourself > 10) {
    rateYourself = prompt(
      "Do it properly or I'm calling the police. Rate your dance ability on a scale of 1-10."
    );
  }

  if (rateYourself <= 4) {
    message = "Welcome! I shall teach you to dance.";
  } else if (rateYourself <= 7) {
    message = "You are a competent dancer, but I have more to teach you.";
  } else if (rateYourself <= 10) {
    message = "YOU KNOW TOO MUCH. I CAN TEACH YOU NOTHING. LEAVE.";
  }

  for (let i = 0; i < rateYourself; i++) {
    document.write("<img src='ghoulies2.png'/>");
  }

  message =
    "<br>You have rated yourself as having a dance ability of " +
    rateYourself +
    " out of 10. " +
    message;
  document.write(message);
}

function dontLeaveMe() {
  const goingNowhere = confirm(
    "Thinking of clicking OK to leave? You're going nowhere, matey."
  );

  if (goingNowhere) {
    dontLeaveMe();
  } else {
    alert("That's right, stay awhile.");
  }
}
