function do_game() {
  var colors = "gold,Thistle,Plum,Violet,Orchid,Fuchsia,Magenta,MediumOrchid,MediumPurple,red,BlueViolet,green,DarkOrchid,DarkMagenta,Purple,Indigo,SlateBlue,orange,MediumSlateBlue".split(",").sort();
  var target = colors[Math.floor(Math.random() * colors.length)];
  var guess_input_text;
  var isend = false;
  var count = 0;
  var s = colors.join();
  while (!isend) {
    guess_input_text = prompt("I am thinking of one of these colors:\n\n" + s + "\n\n what colkor am I think of?", target);
    count += 1;
    isend = check(guess_input_text, target, colors);
  }
  document.getElementById("gg").style.backgroundColor = target;
  s
  alert("Congradulations! You have guess the color!\n\n It tooks you" + count + "guess to finish the game!\n\n You can see the color in the backgrounds");
}

function check(guess_input, target, colors) {
  if (guess_input == target)
    return true;
  else if (colors.indexOf(guess_input) < 0) {
    alert("Sorry,I don't reconginze your color.\n\n please try again.");
    return false;
  } else if (colors.indexOf(guess_input) > colors.indexOf(target)) {
    alert("Sorry,your guess is not correct!\n\nHint:your color is alphabetically higher than mine \n\nplease try again.");
    return false;
  } else {
    alert("Sorry,your guess is not correct!\n\nHint:your color is alphabetically lower than mine \n\nplease try again.");
    return false;
  }
}
