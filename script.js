const dictionary = {

    "rizz":"Your ability to attract someone.",

    "sus":"Suspicious.",

    "cap":"Lie.",

    "bet":"Okay!",

    "slay":"Doing something amazingly.",

    "goat":"Greatest Of All Time.",

    "drip":"Stylish clothes.",

    "mid":"Average.",

    "npc":"Acts like a robot.",

    "ate":"Did something really well."

};

function searchWord(){

    let word=document
        .getElementById("wordInput")
        .value
        .toLowerCase();

    let result=document.getElementById("result");

    if(dictionary[word]){

        result.innerHTML=`<h2>${word}</h2>
        <p>${dictionary[word]}</p>`;

    }

    else{

        result.innerHTML="Word not found.";

    }

}