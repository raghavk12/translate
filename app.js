var tempButtom= document.querySelector("#Click-Me");
var textInput= document.querySelector("#txtinput");
var output=document.querySelector("#output");
//var serverLink= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverLink="https://api.funtranslations.com/translate/yoda.json"

function GetTranslation(text){
    return serverLink + "?" + "text=" + text
}


function clickEventHandler()
{
    var textinput = textInput.value;

    fetch(GetTranslation(textinput))
    .then(response => response.json())
    .then(json => 
        {
        var trasnlatedText = json.contents.translated;
        output.innerText = trasnlatedText;

        })
    //output.innerText = "sjsjsj "+ textInput.value;
};

tempButtom.addEventListener("click", clickEventHandler)