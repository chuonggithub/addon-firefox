//variables
var button = document.getElementById('button');
var input = document.getElementById('in');
var output = document.getElementById('out');

//button event
button.onclick = function() {ascii_to_hex()};
output.onclick = function() {copy()};

//enter key
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("button").click();
  }
});

//convert ascii to hex
function ascii_to_hex() {
	var outResult = '';
	var inValue = input.value;
	for (var i = 0; i < inValue.length; i++) {
		outResult += inValue.charCodeAt(i).toString(16).toUpperCase();
	}
	output.value = outResult;
}

//copy
function copy() {
  output.select();
  output.setSelectionRange(0, 99999)
  document.execCommand("copy");
  noti();
}

//error
function noti(){
	button.style.background = "#4169E1";
	button.innerText = "Đã copy";
	setTimeout(function(){
		button.style.background = "#32CD32";
		button.innerText = "Mã hóa";
	}, 1200)
}