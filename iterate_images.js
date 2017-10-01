function process_click(response,id) {
	eval_response(response,id);
	update_image();
  var gameLen=speakPrompt.length;
  rocketX+=100/gameLen;
  document.getElementById("rocket").style.left=rocketX+"%";
}

function eval_response(response,id) {
  response=response.innerHTML;
	if(response === imageAnswerKey[i]) {
	 score++;
	}
  console.log("dysscore:"+dysScore);
	if(i == (imageArray.length - 1)){
    document.getElementById("overlay").style.opacity=0.95;
    document.getElementById("overlay").style.zIndex=3;
    document.getElementById("overText").style.display="block";

    document.getElementById("overText").innerHTML="Congrats! You got "+score+" right!";	
    if(dysScore>4) document.getElementById("book").style.display="block";
  }

  if(id===dysAnswers[i]) dysScore++;

}

function update_image() {
  i = (i + 1) % imageArray.length;
  change_image();
  change_buttons();
  change_prompt();

}

function change_image() {
  document.getElementById("test_img").src = imageArray[i];
}

function change_prompt(){
	document.getElementById("prompt").innerHTML= promptArray[i];
	if(speakPrompt[i]){
		responsiveVoice.speak(promptArray[i],"US English Female",{rate: 0.8});
	}
}

function change_buttons() {
  document.getElementById("button1").innerHTML = buttonArrays[0][i];
  document.getElementById("button2").innerHTML = buttonArrays[1][i];
  document.getElementById("button3").innerHTML = buttonArrays[2][i];
}

var dysAnswers=[1,0,1,1,1,0,1,1];
var speakPrompt = [false,false,false,true,true,true,true,true];
var imageAnswerKey = ["EATING","TREE","A PENCIL","JAIL","WILD","ASTRONAUT","MOOD","BAT"];
var promptArray = ["What is this boy doing ?", "I am a ...","What am I ?","What rhymes with WHALE?","What rhymes with CHILD?","Who walks on the moon?","What rhymes with FOOD?","What rhymes with CAT?"];
var imageArray = ["eating.jpg", "Tree.jpg","pencil.jpg","whale.jpg","child.jpg","astronaut.jpg","Food.jpg","cat.jpg"];
var buttonArrays = [["EATING", "CHEREE","A PENCIL","JAIL","FIELD","ASTERONOT","WOOD","BAT"],
["EETING", "ROOT","A  PENSEL","TALL","BILLED","ASTRONAUT","MOOD","MATE"],
["SLEEPING", "TREE","A  MARKER","LAUGH","WILD","PILOT","ROD","GATE"]];
var i = 0;
var score = 0;
var dysScore=0;
var rocketX=0;