function do_game() {
  var colors = "Lavender,Thistle,Plum,Violet,Orchid,Fuchsia,Magenta,MediumOrchid,MediumPurple,Amethyst,BlueViolet,DarkViolet,DarkOrchid,DarkMagenta,Purple,Indigo,SlateBlue,DarkSlateBlue,MediumSlateBlue".split(",").sort();
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
  alert("Congradulations!!!!");
}

function check(guess_input, target, colors) {
  if (guess_input == target)
    return true;
  else if (colors.indexOf(guess_input) < 0) {
    alert("Sorry,I don't reconginze your color.\n\n please try again.");
    return false;
  } else {
    alert("Sorry,You pick the wrong color.\n\n please try again.");
    return false;
  }
}
