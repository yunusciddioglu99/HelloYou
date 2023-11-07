var readlinesync = require('readline-sync');

console.log("Hello, My name is Yunus Ciddioglu and this is my text game in js. Please enjoy.")
var start = readlinesync.question("Please press 1 to begin")
if (start==1){
    GameRetry();
}


function GameRetry(){
    question1();
    
    function question1(){     /////////   QUESTION  1 
    console.log("You find yourself suddenly transported to a mysterious isekai realm. As you look around, the air is filled with magical energy, and the path splits before you. Which way do you choose")
    console.log("1. Follow the well-lit path.")
    var answer1 = readlinesync.question("2. Venture into the dark forest.")
    if (answer1==1){
    question2();
}
else if (answer1==2){
    question3();
}
else{
    console.log("Please only type 1 or 2")
    question1();

}
}



function question2(){       /////////   QUESTION   2
    console.log("You follow the well-lit path, and it leads you to a friendly village filled with kind-hearted beings. They offer to help you find a way home. What do you do?")
    console.log("1. Accept their offer.")
    var answer2 = readlinesync.question("2. Politely decline and continue your journey")
    if (answer2==1){
        goodending1();   
    }
    else if (answer2==2){
        question3();
    }
    else{
        console.log("Please only type 1 or 2")
        question2();

    }
}



function goodending1(){  /////////      GOOD ENDING 1
    console.log("The villagers guide you to a mystical portal, and with their help, you return to your world. You have successfully escaped the fantasy world.")
    console.log("Ending: Good Ending 1")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry();
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        goodending1();
    }
}

function question3(){     /////////   QUESTION   3
    console.log("You go in the dark forest. in the dark forest, you encounter a menacing creature. What's your move?")
    console.log("1. Fight the creature.")
    var answer3 = readlinesync.question("2. Try to sneak past it.")
    if (answer3==1){
        badending1();    
    }
    else if (answer3==2){
        question4();
    }
    else{
        console.log("Please only type 1 or 2")
        question3();

    }
}


function badending1(){  /////////    BAD ENDING 1
    console.log("You bravely fight the creature, but it overpowers you and you meet a tragic end.")
    console.log("Ending: Bad Ending 1")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        badending1()
    }
}


function question4(){     /////////   QUESTION      4
    console.log("You choose to sneak past the creature, and you find a hidden cave. Inside, you discover a treasure chest. What will you do?")
    console.log("1. Open the treasure chest.")
    var answer4 = readlinesync.question("2. Leave the cave and continue your journey.")
    if (answer4==1){
        badending2();    
    }
    else if (answer4==2){
        question5();
    }
    else{
        console.log("Please only type 1 or 2")
        question4();

    }
}

function badending2(){  /////////   BAD ENDING 2
    console.log("As you open the chest, you trigger a trap, and the cave collapses, sealing your fate forever.")
    console.log("Ending: Bad Ending 2")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        badending2()
    }
}


function question5(){     /////////   QUESTION   5
    console.log("You venture deeper into the dark forest and find an abandoned castle. The entrance is guarded by a magical barrier. What will you do?")
    console.log("1. Attempt to break the barrier.")
    var answer5 = readlinesync.question("2. Ignore the castle and keep exploring the forest.")
    if (answer5==1){
        question6();   
    }
    else if (answer5==2){
        question8();    
    }
    else{
        console.log("Please only type 1 or 2")
        question5();

    }
}


function question6(){     /////////   QUESTION    6
    console.log("You break the barrier and head inside. There you find some good loot and gear yourself. What do you decidde to do now?")
    console.log("1. Go back and try to defeat the creature you came across earlier")
    var answer6 = readlinesync.question("2. Keep going with your journey")
    if (answer6==1){
        question7();   
    }
    else if (answer6==2){
        question9(); 
    }
    else{
        console.log("Please only type 1 or 2")
        question6();

    }
}


function question7(){     /////////   QUESTION    7
    console.log("You go back and defeat the monster. Suddenly a strange man appears before you. He offers to make you the strongest. You decide to")
    console.log("1. Accept his offer")
    var answer7 = readlinesync.question("2. Decline and keep hunting monsters")
    if (answer7==1){
        trueending();   
    }
    else if (answer7==2){
        badending3();
    }
    else{
        console.log("Please only type 1 or 2")
        question7();

    }
}

function trueending(){  /////////    TRUE ENDING
    console.log("The man trains you and you end up becoming the strongest as he said. You and him end up going around and saving people, which grands you the title Legendary Hero. You decide maybe it isn't so bad here and decide to stay in this new world")
    console.log("Ending: True Ending")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        trueending()
    }
}


function badending3(){  /////////   BAD ENDING 3
    console.log("After a while you get overpowered by the monsters in the forest and die.")
    console.log("Ending: Bad Ending 3")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        badending3()
    }
}


function question8(){     /////////   QUESTION  8
    console.log("You keep exploring the forest and come across a wise old wizard. He offers to guide you home. What's your decision?")
    console.log("1. Trust the wizard's guidance.")
    var answer8 = readlinesync.question("2. Decline and search for another way.")
    if (answer8==1){
        goodending2();   
    }
    else if (answer8==2){
        question9();
    }
    else{
        console.log("Please only type 1 or 2")
        question8();

    }
}


function goodending2(){   /////////   GOOD ENDING 2
    console.log("The wizard opens a portal back to your world.")
    console.log("Ending: Good Ending 2")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        goodending2()
    }
}



function question9(){     /////////   QUESTION   9
    console.log("After a while you finally escape the forest, where you find a bar. You decide to")
    console.log("1. Enter the bar")
    var answer9 = readlinesync.question("2. Ignore it and keep walking")
    if (answer9==1){
        question10();   
    }
    else if (answer9==2){
        question11(); 
    }
    else{
        console.log("Please only type 1 or 2")
        question9();

    }
}


function question10(){     /////////   QUESTION    10
    console.log("You meet some adventurers, they invite you to join a quest. You decide to")
    console.log("1. Accept")
    var answer10 = readlinesync.question("2. Decline")
    if (answer10==1){
        badending4();   
    }
    else if (answer10==2){
        question11();
    }
    else{
        console.log("Please only type 1 or 2")
        question10();

    }
}

function badending4(){   /////////   BAD ENDING 4
    console.log("You join the adventurers on their quest, but it ends in disaster, and you meet an untimely end")
    console.log("Ending: Bad Ending 4")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        badending4()
    }
}



function question11(){     /////////   QUESTION    11
    console.log("You continue with your journey and find a shrine. You decide to")
    console.log("1. Go inside the shrine")
    var answer11 = readlinesync.question("2. Ignore the shrine and move on")
    if (answer11==1){
        goodending3();   
    }
    else if (answer11==2){
        question12();
    }
    else{
        console.log("Please only type 1 or 2")
        question11();

    }
}


function question12(){     /////////   QUESTION     12
    console.log("Right as you are about to walk away from the shrine, a talking bird comes up to you. He offers you to become your friend. Do you accept?")
    console.log("1. Yes")
    var answer12 = readlinesync.question("2. No")
    if (answer12==1){
        question13();   
    }
    else if (answer12==2){
        question20();  
    }
    else{
        console.log("Please only type 1 or 2")
        question12();

    }
}



function question13(){     /////////   QUESTION       13
    console.log("You accept the birds offer. The bird proceeds to guide you through this strange world. After a while you end up in the capital of the country you were teleported to. You enter the city. Which way do you decide to go?")
    console.log("1. Left")
    var answer13 = readlinesync.question("2. Right")
    if (answer13==1){
        question14();   
    }
    else if (answer13==2){
        jokeending4();     
    }
    else{
        console.log("Please only type 1 or 2")
        question13();

    }
}


function jokeending4(){   /////////   JOKE  ENDING   4
    console.log("You end up in a sketchy alleyway and get stabbed by a random homeless person")
    console.log("Ending: Joke Ending 4")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        jokeending4()
    }
}

function question14(){     /////////   QUESTION      14
    console.log("You go left and end up in a weapon shop. You decide to buy a weapon and gear to better prepare yourself for the outside world. Now you decide to")
    console.log("1. Talk to some locals")
    var answer14 = readlinesync.question("2. Leave the city")
    if (answer14==1){
        question15();   
    }
    else if (answer14==2){
        question16();
    }
    else{
        console.log("Please only type 1 or 2")
        question14();

    }
}
 

function question15(){     /////////   QUESTION        15
    console.log("You talk to some locals and after some time you find someone who offers you a potion, he says this potion will grant the person who drinks it with infinite knowledge. You decide to")
    console.log("1. Trust the local and drink the potion")
    var answer15 = readlinesync.question("2. Decline the offer and leave")
    if (answer15==1){
        jokeending1();   
    }
    else if (answer15==2){
        question16();
    }
    else{
        console.log("Please only type 1 or 2")
        question15();

    }
}


function jokeending1(){   /////////   JOKE ENDING 1
    console.log("The potion instantly kills you.")
    console.log("Ending: Joke Ending 1")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        jokeending1()
    }
}


function question16(){     /////////   QUESTION    16
    console.log("You decide to leave the city. After days of exploring you end up in a desert. There's a temple in front of you. Your bird friend warns you that it's probably a trap. You decide to ")
    console.log("1. Ignore his warning and head in.")
    var answer16 = readlinesync.question("2. Listen to his warning.")
    if (answer16==1){
        question17();   
    }
    else if (answer16==2){
        question18();
    }
    else{
        console.log("Please only type 1 or 2")
        question16();

    }
}

function question17(){     /////////   QUESTION      17
    console.log("You head in the temple. Inside there are 2 chests. You decide")
    console.log("1. Take the 1st chest")
    var answer17 = readlinesync.question("2. Take the 2nd chest")
    if (answer17==1){
        jokeending2();   
    }
    else if (answer17==2){
        jokeending2();
    }
    else{
        console.log("Please only type 1 or 2")
        question17();

    }
}


function jokeending2(){   /////////   JOKE ENDING   2
    console.log("Both chests were traps. They explode the moment you open them.")
    console.log("Ending: Joke Ending 2")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        jokeending2()
    }
}


function question18(){     /////////   QUESTION   18
    console.log("You listen to his warning and skip the temple. While your walking you fall into quicksand. You try to ")
    console.log("1. Swim out")
    var answer18 = readlinesync.question("2. Ask your bird friend for help.")
    if (answer18==1){
        badending5();   
    }
    else if (answer18==2){
        question19();
    }
    else{
        console.log("Please only type 1 or 2")
        question18();

    }
}

function badending5(){   /////////   BAD  ENDING   5
    console.log("You end up drowning in the quicksand because you weren't strong enough to swim out.")
    console.log("Ending: Bad Ending 5")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        badending5()
    }
}


function question19(){     /////////   QUESTION     19
    console.log("Your bird friend transforms into a huge bird and picks you up.  As you descend onto the sky your friend makes you an offer. He says he'll show you a way to go back home. Do you")
    console.log("1. Accept his offer")
    var answer19 = readlinesync.question("2. Decline his offer")
    if (answer19==1){
        bestending();   
    }
    else if (answer19==2){
        jokeending3();
    }
    else{
        console.log("Please only type 1 or 2")
        question19();

    }
}


function bestending(){   /////////    BEST ENDING
    console.log("You accept his offer. After some time flying you end up back at the place you began this adventure from. The bird lifts his wings and the portal opens up. You head home as you two say farewell to eachother")
    console.log("Ending: Best Ending")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        bestending()
    }
}


function jokeending3(){   /////////   JOKE  ENDING   3
    console.log("You decline his offer, the bird gets mad and throws you from the sky to the ground. Killing you")
    console.log("Ending: Joke Ending 3")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        jokeending3()
    }
}


function question20(){     /////////   QUESTION     20
    console.log("You decline his offer. He warns you to be careful and flies away. You shrug it off and continue with your journey. After some time walking you find what seems like the same portal you came through. You decide ")
    console.log("1. Try and fixing it")
    var answer20 = readlinesync.question("2. Ignore it")
    if (answer20==1){
        goodending4();   
    }
    else if (answer20==2){
        question21();
    }
    else{
        console.log("Please only type 1 or 2")
        question20();

    }
}


function question21(){     /////////   QUESTION  21
    console.log("You ignore it, but as you are leaving the portal randomly opens up. from within the portal is a vortex that's trying to suck you in. You quickly")
    console.log("1. Hang onto a tree beside you")
    var answer21 = readlinesync.question("2. Accept your fate and get sucked in")
    if (answer21==1){
        question22();   
    }
    else if (answer21==2){
        jokeending5();
    }
    else{
        console.log("Please only type 1 or 2")
        question21();

    }
}


function question22(){     /////////   QUESTION
    console.log("After hanging on for dear life the portal closes and your finally safe. After that strange event you decide")
    console.log("1. To give up")
    var answer22 = readlinesync.question("2. Still keep trying to find a way home")
    if (answer22==1){
        secretending();   
    }
    else if (answer22==2){
        badending6();
    }
    else{
        console.log("Please only type 1 or 2")
        question22();

    }
}


function secretending(){   /////////   SECRET ENDING
    console.log("You give up trying to go home. you decide to live your life here. You start a family and grow old and die happy.    ")
    console.log("Ending: Secret Ending")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        secretending()
    }
}


function badending6(){   /////////   BAD ENDING  6
    console.log("In your journey to go home you eventually die trying.")
    console.log("Ending: Bad Ending 6")
    var Retry = readlinesync.question("You have reached an ending, if you want to try again, please type 1")
    if (Retry==1){
        GameRetry()
    }
    else if (Retry!=1){
        console.log("Please only type 1")
        badending6()
    }
}


}