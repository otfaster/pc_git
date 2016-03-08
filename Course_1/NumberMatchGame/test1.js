
function do_game(){
  var target;
  var guess_input_text;
  var guess_input;
  var isend=false;
  var count=0;
var rn=Math.random()*100;
target=Math.floor(rn)+1;
while(!isend){
  guess_input_text=prompt("guees a number"+target+"is oaky?");
  guess_input=parseInt(guess_input_text);
  count+=1;
  isend=check(guess_input,target);
}
alert("Congradulations!!!!");

}
  function check(guess_input,target){
   if(guess_input==target)return true;
   else if(guess_input>target){
   alert("is too large");
   return false;}
   else if(guess_input<target){
   alert("is too small");
   return false;}
  }
