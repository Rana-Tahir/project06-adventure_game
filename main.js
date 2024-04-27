import inquirer from "inquirer";
let condition = true;
while (condition) {
    let randomfunction = Math.floor(Math.random() * 3 + 1);
    let functionNames = ["Rock", "Paper", "Scissor"];
    function startgame() {
        if (randomfunction == 1) {
            return functionNames[0];
        }
        else if (randomfunction == 2) {
            return functionNames[1];
        }
        else {
            return functionNames[2];
        }
    }
    let computer = startgame();
    console.log("*********************************************************************");
    console.log("*********************************************************************");
    let askQuestion = await inquirer.prompt([
        {
            name: "Rock",
            type: "list",
            message: "Select One of the Option:",
            choices: ["Rock", "Paper", "Scissor"]
        }
    ]);
    console.log("*********************************************************************");
    console.log("*********************************************************************");
    askQuestion = askQuestion.Rock;
    if (askQuestion == "Rock" && computer == "Rock") {
        console.log("The match has tied, the computer chose Rock too!");
    }
    else if (askQuestion == "Paper" && computer == "Paper") {
        console.log("The match has tied, the computer chose Paper too!");
    }
    else if (askQuestion == "Scissor" && computer == "Scissor") {
        console.log("The match has tied, the computer chose Scissor too!");
    }
    else if (askQuestion == "Rock" && computer == "Paper") {
        console.log("You Lost!!, the computer chose Paper");
    }
    else if (askQuestion == "Paper" && computer == "Scissor") {
        console.log("You Lost!!, the computer chose Scissor");
    }
    else if (askQuestion == "Scissor" && computer == "Rock") {
        console.log("You Lost!!, the computer chose Rock");
    }
    else if (askQuestion == "Rock" && computer == "Scissor") {
        console.log("You Lost!!, the computer chose Scissor");
    }
    else if (askQuestion == "Paper" && computer == "Rock") {
        console.log("You Lost!!, the computer chose Rock");
    }
    else if (askQuestion == "Scissor" && computer == "Paper") {
        console.log("You Lost!!, the computer chose Paper");
    }
    console.log("*********************************************************************");
    console.log("*********************************************************************");
    let againQuestion = await inquirer.prompt([
        {
            name: "again",
            type: "list",
            message: "Do you want to play again? ",
            choices: ["Yes", "No"]
        }
    ]);
    againQuestion = againQuestion.again;
    if (againQuestion == "Yes") {
        condition = true;
    }
    else {
        condition = false;
    }
}
