let sentence;;
let length;

document.querySelector("#btn").onclick = function() {

    // console.log("working");
   sentence =  document.querySelector("#text").value;
   length = sentence.length;
   console.log(length);
   document.querySelector("#sen_len").innerHTML = "The length of the sentence is " + length;


}

