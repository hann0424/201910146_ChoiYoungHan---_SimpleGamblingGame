//Name: ChoiYoungHan 최용한
//Date: 2023-10-06
//Assignment: Simple Gambling Game

//Any variables you use in your game, should be declared here:
//$100 starting money
let currentMoney = 100;

//The game rules and variables that help you play the game in order.
let gameRuleCount = 1;
let gameCount = 1;

//A variable that will interact with the player.
let bettingAmount = 0;
let bettingRewards = 0;
let userGuessDice = 0;
let dice = 0;

//test용 변수
let testDice = 1;

function PlayGame() {
	//Your game logic here
	//Since the code for the third round is almost identical, I'll only leave a comment for the first round.
	clearAll()

	//if gameCount = 1 , start the game (round1)
	if (gameCount == 1){

		//Tell the player how much you have and receive the value you want to bet through parseint.
		bettingAmount = parseInt(prompt("Current Money : $" + currentMoney + "\nEnter the amount you want to bet."));

		//If you enter an amount larger than the amount held by the player, ask repeatedly using the while statement so that you can only receive it within the amount held.
		while (bettingAmount > currentMoney){
			bettingAmount = parseInt(prompt("Error : You have entered more figures than you have!\nCurrent Money : $" + currentMoney + "\nEnter the amount you want to bet."));
		}
		
		//The player enters the expected number.
		userGuessDice =  parseInt(prompt("You bet $" + bettingAmount + "\nGuess the dice number! (1~6)"));

		//In case the player enters a number outside the range of the dice(1~6), ask repeatedly using the while statement.
		while (userGuessDice > 6 || userGuessDice == 0){
			userGuessDice =  parseInt(prompt("Error : Numbers on the dice must be between 1 and 6!\nYou bet $" + bettingAmount + "\nGuess the dice number! (1~6)"));
		}

		//setting the dice number
		dice = getRandom(6)

		//If the player's input matches the value of dice, add three times the bet value to the current amount with the congratulatory message.
		if (userGuessDice == dice){
			bettingRewards = bettingAmount * 3;
			currentMoney = currentMoney + bettingRewards;
			print ("🎈🎉🎊!!Congratulations!!🎊🎉🎈\n🎲That's correct!!🎲\n🎲 = "+dice+"\n💰the amount obtained : 💸$+"+bettingRewards+"\n💰Current Money : 💸$"+currentMoney);
			
			//Change the value of the gamecount variable to avoid repeating the same round.
			gameCount = 2;
		}

		//If you don't get it right, subtract the bet from the current amount and continue with the game.
		else{
			currentMoney = currentMoney - bettingAmount;
			print("You didn't match the numbers on the dice.\nYou lost the money you bet on..\n🎲 = "+dice+"\n💰the amount obtained : 💸$-"+bettingAmount+"\n💰Current Money : 💸$"+currentMoney);
			gameCount = 2;
		}
		}
	
	//If the above code has been executed successfully and the gamount value has changed, 
	//output the message and prompt the player to press the round2 button.

	//*Even if the player presses the round1 button again, the gamount value has already changed, 
	//so we will continue to print the message below.
	if (gameCount == 2){
		print ("\nCurrent Money : 💸$"+currentMoney);
		print ("🤑The first round is over. Press Round2.");
	}
}

function PlayGame2() {
	clearAll()

	if (gameCount == 2){

		//If the player went bankrupt in the previous round, print out a Game Over message and finish the game.

		//*The game is played using the game count variable, so when the game is over, 
		//the game will no longer proceed even if you press another button.
		if (currentMoney == 0){
			print("       😈Game Over😈");
			print("Current Money : 💸$0 ...");
			print("🤑You lost all your money!!");
			print("\nIf you want to play again, refresh the webpage!");
		}

		else{

		bettingAmount = parseInt(prompt("Current Money : $" + currentMoney + "\nEnter the amount you want to bet."));
		while (bettingAmount > currentMoney){
			bettingAmount = parseInt(prompt("Error : You have entered more figures than you have!\nCurrent Money : $" + currentMoney + "\nEnter the amount you want to bet."));
		}
		
		userGuessDice =  parseInt(prompt("You bet $" + bettingAmount + "\nGuess the dice number! (1~6)"));

		while (userGuessDice > 6 || userGuessDice == 0){
			userGuessDice =  parseInt(prompt("Error : Numbers on the dice must be between 1 and 6!\nYou bet $" + bettingAmount + "\nGuess the dice number! (1~6)"));
		}

		dice = getRandom(6)

		if (userGuessDice == dice){
			bettingRewards = bettingAmount * 3;
			currentMoney = currentMoney + bettingRewards;
			print ("🎈🎉🎊!!Congratulations!!🎊🎉🎈\n🎲That's correct!!🎲\n🎲 = "+dice+"\n💰the amount obtained : 💸$+"+bettingRewards+"\n💰Current Money : 💸$"+currentMoney);
			gameCount = 3;
		}

		else{
			currentMoney = currentMoney - bettingAmount;
			print("You didn't match the numbers on the dice.\nYou lost the money you bet on..\n🎲 = "+dice+"\n💰the amount obtained : 💸$-"+bettingAmount+"\n💰Current Money : 💸$"+currentMoney);
			gameCount = 3;
		}
		}
	}
	
	if (gameCount == 3){
		print ("\nCurrent Money : 💸$"+currentMoney);
		print ("🤑The second round is over. Press Round3.");
	}
}

function PlayGame3() {
	clearAll()

	if (gameCount == 3){

		if (currentMoney == 0){
			print("       😈Game Over😈");
			print("Current Money : 💸$0 ...");
			print("🤑You lost all your money!!");
			print("\nIf you want to play again, refresh the webpage!");
		}

		else{

		bettingAmount = parseInt(prompt("Current Money : $" + currentMoney + "\nEnter the amount you want to bet."));
		while (bettingAmount > currentMoney){
			bettingAmount = parseInt(prompt("Error : You have entered more figures than you have!\nCurrent Money : $" + currentMoney + "\nEnter the amount you want to bet."));
		}
		
		userGuessDice =  parseInt(prompt("You bet $" + bettingAmount + "\nGuess the dice number! (1~6)"));

		while (userGuessDice > 6 || userGuessDice == 0){
			userGuessDice =  parseInt(prompt("Error : Numbers on the dice must be between 1 and 6!\nYou bet $" + bettingAmount + "\nGuess the dice number! (1~6)"));
		}

		dice = getRandom(6)

		if (userGuessDice == dice){
			bettingRewards = bettingAmount * 3;
			currentMoney = currentMoney + bettingRewards;
			print ("🎈🎉🎊!!Congratulations!!🎊🎉🎈\n🎲That's correct!!🎲\n🎲 = "+dice+"\n💰the amount obtained : 💸$+"+bettingRewards+"\n💰Current Money : 💸$"+currentMoney);
			gameCount = 4;
		}

		else{
			currentMoney = currentMoney - bettingAmount;
			print("You didn't match the numbers on the dice.\nYou lost the money you bet on..\n🎲 = "+dice+"\n💰the amount obtained : 💸$-"+bettingAmount+"\n💰Current Money : 💸$"+currentMoney);
			gameCount = 4;
		}
		}
	}
	
	if (gameCount == 4){
		print("\n=================================")
		print("🤑All rounds are over!!");
		print("\nCurrent Money : 💸$"+currentMoney);
		print("\nIf you want to play again, refresh the webpage!");
		print("\n=================================")
	}
}

function PrintGameRule() {
	//print gamerule
	if (gameRuleCount == 1){
		print("This is \n🎰simple gambling game🎲 program.\n\nYou will play a total of three betting games from now on.");
		print("\nThe way to play the game is simple.\n\nFor every play, you check the amount you have and bet as much as you want.");
		print("\nIf you get the number of dice right, you get three times the amount you bet.");
		print("\n🤑Press the GameRule2");

		//Change the number in the gameRuleCount variable to 2 so that there is no response when you press the same button.
		gameRuleCount = 2;
	}
}

function PrintGameRule2() {
	//print gamerule2
	if (gameRuleCount == 2){
		clearAll()

		print("If you get it wrong, you lose all your bets.")
		print("\nThe game ends when you go bankrupt, or after the third round.");
		print("\nYour starting amount is $100.\n\nPlease press the round button in the order of 1, 2, and 3 for the smooth progress of the game.");
	 	print("\nThen please press the Round 1 button to start the game!");
		print("\n🤑Press the Round1!");

		//Change the number in the gameRuleCount variable to 3 so that there is no response when you press the same button.
		gameRuleCount = 3;
	}
}

//Clear working space
function ClearWorkingSpace() {
	clearAll()
}
