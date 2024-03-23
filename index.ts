import inquirer from "inquirer";

const systemgeneratedNo = Math.floor(Math.random()*10);

type anytype = {
    "userGuess":number
}
const answer:anytype = await inquirer.prompt([{
 type: "answer",
 name:"userGuess",
 message:"Guess a number between 1 to 10  nad write it:"
}])
 const {userGuess} = answer;
 console.log(`Guessed number: ${userGuess}, Correct answer: ${systemgeneratedNo}`);
 if(userGuess === systemgeneratedNo){
 console.log("Correct Answer! You win")
 }else{
    console.log("Wrong Answer! Beter luck next time")
 };
    
        
