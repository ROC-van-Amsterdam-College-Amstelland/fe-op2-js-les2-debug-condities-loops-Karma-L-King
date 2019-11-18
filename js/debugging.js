//script js - Frond End Essentials les 2 - OP2
//Debugging conditions

//conditions 
//de website ziet er anders uit als je jonger bent dan 10...

function getAge()
{
var myAge=document.getElementById("myAge").value; //de eerste variabele is voor je aangemaakt...

    if() //vul de juiste voorwaarde in!
        {
             //kies code hieronder
        }
    else
        {
             //kies code hieronder
        }
}

function loadChildTheme()
{
 //kies code hieronder
}

function loadTheme()
{
 //kies code hieronder
}

//dit is de code waar je uit kunt kiezen om de website goed te laten werken, let op je moet nog wel e.a. toevoegen!

//myAge < 10
//loadChildTheme(); //hiermee roepen we de functie loadChildTheme aan
//loadTheme(); //hiermee roepen we de functie loadTheme aan
//
    //let op verschillende manieren waarop je een element kan aanroepen
    //document.getElementById("").src = "images/logo-01.png";
    //document.getElementById("").src = "images/logo-02.png";

    // zoek uit in W3Schools wat je op de plaats van de x moet invullen en leg in de comments uit waarom!
    //Tel goed het aantal keren dat de stijl voorkomt
    //document.getElementsByTagName("header")[x].style.backgroundColor = "#00AEEF"; //voor het andere thema sis de kleur #CCCCCC
    //document.getElementsByTagName("body")[x].style.backgroundColor = "yellowgreen"; //voor het andere thema sis de kleur #666666
    //zoek op welk element de class active heeft en welke kleur hier bij hoort in de screenshots
    //document.getElementsByClassName("active")[x].style.backgroundColor = "";

    //zoek op wat de kleur moet zijn in de screenshots
    //document.getElementById("main-nav").style.backgroundColor = "vul de kleur in";

    //zoek op hoe je de kleur van de border kan aanpassen
    //document.getElementById("main-content").style.watmoethier = "#00AEEF"; 

//Voor het tweede deel van de opdracht
//else if{}
//loadNewTheme();


//opdracht 2

function myFirstLoop()
{
    var i; //altijd variabelen declareren, boven de for loop is netter dan erin!

    for (statement1; statement2; statement3) {
        console.log(i); //met console.log zie je de waarde van i terug komen in je watch window (links) en in je console in chrome (via inspect)
      }
}

//opdracht 3

function myNumbers()
{
    //maak hier je code voor opdracht 3
}


//opdracht 4

function myTafel()
{
var i;
var myNumber = document.getElementById("myNumber").value; //vul de juiste id in
var text; //deze variabele gebruiken we om de tafel in te zetten

for (statement1; statement2; statement3) { //Vul de juiste waardes in bij de statements
    text += "" //met += kunnen we steeds een extra waarde aan de variabele toevoegen!
}

  document.getElementById("tafelText").innerHTML = text; //zet de waarde van de variabele text in je website!

}