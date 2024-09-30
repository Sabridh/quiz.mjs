import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let welkom = await userInput.question ( " welkom in onze gepersonaliseerde quiz, ben je er klaar voor? ")

let vraag1 = await userInput.question ("Wat is de hoofdstad van België? ")
let vraag2 = await userInput.question ("Hoeveel zonen heeft songoku? ")
let vraag3 = await userInput.question ("Hoe oud is monkey D Luffy? ")
let vraag4 = await userInput.question ("Wie is nika in One piece? ")
let vraag5 = await userInput.question ("Hoeveel zwaren heeft Zoro? ")

let antwoord1 = ("brussel")
let antwoord2 = ("2")
let antwoord3 = ("19")
let antwoord4 = ("god van de vrijheid en de zon")
let antwoord5 = ("3")



if(vraag1 == antwoord1){
    console.log(" Juist! ");
}else(console.log(" fout de antwoord is brussel. "))
if(vraag2 == antwoord2){
    console.log(" Juist! ");
}else(console.log(" fout de anwtoord is 2"))
if(vraag3 == antwoord3){
    console.log(" Juist! ");
}else(console.log(" fout de anwtoord is 19 "))
if(vraag4 == antwoord4){
    console.log(" Juist! ");
}else(console.log(" fout de antwoord is god van de vrijheid en de zon"))
if(vraag5 == antwoord5){
    console.log(" Juist! ");
}else(console.log(" fout de antwoord is 3 "))
    

process.exit()





