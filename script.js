function initialize() {
  cardText1 = document.getElementById("card-text1");
  cardText2 = document.getElementById("card-text2");
  cardText3 = document.getElementById("card-text3");
  cardText4 = document.getElementById("card-text4");
  cardText5 = document.getElementById("card-text5");

  text = "";
}

function display(num) {
  if (num == 1) 
    cardText1.innerHTML = text;

  else if (num == 2) 
    cardText2.innerHTML = text;

  else if (num == 3) 
    cardText3.innerHTML = text;

  else if (num == 4) 
    cardText4.innerHTML = text;

  else if (num == 5) 
    cardText5.innerHTML = text;
}


function changeText(num) {
  if (num == 1) {
    text = "Our ugly sweater cookies taste better than they look!! With their wonderful shapes tothe matriculate designs, our cookies are very delicious for all audiences";
    display(num);
  }
  else if (num == 2) {
    text = "Craving pizza during Christmas time instead of the typical gingerbread houses? Say no more. Attend this session to learn to make this vegan Christmas pizza.";
    display(num);
  }
  else if (num == 3) {
    text = "Not sure what to eat for Christmas?Want to wake up and cook a dish that will amaze your family with your skilled cooking skills? Attend this session to learn to make our traditional Christmas Breakfast Casserole.";
    display(num);
  }
  else if (num == 4) {
    text = "Want to put a twist into creating the average Cinnamon Rolls. Join us to create our first ever tasty Sweet Potato Cinnamon Rolls. You'll be shocked how good these two combinations go together.";
    display(num);
  }
  else if (num == 5) {
    text = "Our Cuicidati Cookies have high reputation in the Convention! Don't miss our on this session. Join us to learn to cook such delicious cookies with chocolate, vanilla, and a taste of colorful sprinkles!";
    display(num);
  }
}

function startRockGame() {
  RockLeft = 5;
    PaperLeft = 5;
    ScissorsLeft = 5;
    outputRockLeft = document.getElementById("RockLeft");
    outputPaperLeft = document.getElementById("PaperLeft");
    outputScissorsLeft = document.getElementById("ScissorsLeft");

    ComputerRockLeft = 5;
    ComputerPaperLeft = 5;
    ComputerScissorsLeft = 5;
    //It returns the element object. It returns the number of items left.
    outputComputerRockLeft = document.getElementById("computerRockLeft");
    outputComputerPaperLeft = document.getElementById("computerPaperLeft");
    outputComputerScissorsLeft = document.getElementById("computerScissorsLeft");

    outputplayerLog = document.getElementById("playerLog");
    outputLog = document.getElementById("log");

    //Since this is initialize, playMove, playerLog, and log are empty since no moves have been made yet.
    weapons = ['Rock', 'Paper', 'Scissors'];
    playerMove = '';
    playerLog = '';
    log = '';
    displayRPS();
}
function useRock()
{
    if (RockLeft > 0)
    {
      playerLog = 'You played Rock!';
      playerMove = 'Rock';
      //Computer picks one of the three options in weapons which is ['Rock', 'Paper', 'Scissors'];
      computerMove = weapons[Math.floor(Math.random() * 3) + 1];
      //We have to set conditions for each type of move. If player plays rock, we have to create an if, else if, and else statement about the three possibilities of choices that the computer can make and the results of the round.
      if (playerMove == 'Rock')
      {
          if (computerMove == 'Rock')
          {
              log += 'Tie! You both played Rock!<br />'
              displayRPS();
          }
          else if (computerMove == 'Paper')
          {
              log += 'You lost! You played Rock. Computer played Paper.<br />'
              RockLeft--;
              ComputerRockLeft++;
              displayRPS();
          }
          else
          {
              log += 'You won! You played Rock. Computer played Scissors.<br />'
              ScissorsLeft++;
              ComputerScissorsLeft--;
              displayRPS();
          }
      }
    }
    else
    {
      //This is stated if the number of rocks left in player is 0. Since player currently has 0 rocks, he or she cannot play rocks.
      playerLog = 'You have ran out of Rocks! Play something else!'
      displayRPS();
    }
}

//This is the same as the useRock() function but for paper.
function usePaper()
{
  if (PaperLeft > 0)
  {
    playerLog = 'You played Paper!';
    playerMove = 'Paper';

    computerMove = weapons[Math.floor(Math.random() * 3)];
    if (playerMove == 'Paper')
    {
        if (computerMove == 'Rock')
        {
            log += 'You Won! You played Paper. Computer played Rock.<br />'
            RockLeft++;
            ComputerRockLeft--;
            displayRPS();
        }
        else if (computerMove == 'Paper')
        {
            log += 'Tie! You played Paper. Computer played Paper.<br />'
            displayRPS();
        }
        else
        {
            log += 'You lost! You played Paper. Computer played Scissors.<br />'
            PaperLeft--;
            ComputerPaperLeft++;
            displayRPS();
        }
    }
  }
  else
  {
    playerLog = 'You have ran out of Paper! Play something else!'
    displayRPS();
  }
}

//This is the same as the useRock() function but for scissors.
function useScissors()
{
  if (ScissorsLeft > 0)
  {
    playerLog = 'You played Scissors!';
    playerMove = 'Scissors';

    computerMove = weapons[Math.floor(Math.random() * 3)];
    if (playerMove == 'Scissors')
    {
        if (computerMove == 'Rock')
        {
            log += 'You lost! You played Scissors. Computer played Rock.<br />'
            ComputerScissorsLeft++;
            ScissorsLeft--;
            displayRPS();
        }
        else if (computerMove == 'Paper')
        {
            log += 'You won! You played Scissors. Computer played Paper.<br />'
            PaperLeft++;
            ComputerPaperLeft--;
            displayRPS();
        }
        else
        {
            log += 'Tie! You played Scissors. Computer played Scissors.<br />'
            displayRPS();
        }
    }
  }
  else
  {
    playerLog = 'You have ran out of Scissors! Play something else!'
    displayRPS();
  }
}

function reset()
{
    RockLeft = 5;
    PaperLeft = 5;
    ScissorsLeft = 5;
    outputRockLeft = document.getElementById("RockLeft");
    outputPaperLeft = document.getElementById("PaperLeft");
    outputScissorsLeft = document.getElementById("ScissorsLeft");

    ComputerRockLeft = 5;
    ComputerPaperLeft = 5;
    ComputerScissorsLeft = 5;
    //It returns the element object. It returns the number of items left.
    outputComputerRockLeft = document.getElementById("computerRockLeft");
    outputComputerPaperLeft = document.getElementById("computerPaperLeft");
    outputComputerScissorsLeft = document.getElementById("computerScissorsLeft");

    outputplayerLog = document.getElementById("playerLog");
    outputLog = document.getElementById("log");

    //Since this is initialize, playMove, playerLog, and log are empty since no moves have been made yet.
    weapons = ['Rock', 'Paper', 'Scissors'];
    playerMove = '';
    playerLog = '';
    log = '';
    displayRPS();
}

function displayRPS()
{
    //On the player's screen, it will say how many of rocks, papers, and scissors the player has currently. For rocks for example, it will say "Rocks Left: _" and the RockLeft variable will state the number of rocks left. Same goes for papers and scissors.
    outputRockLeft.innerHTML = 'Rocks Left: ' + RockLeft;
    outputPaperLeft.innerHTML = 'Paper Left: ' + PaperLeft;
    outputScissorsLeft.innerHTML = 'Scissors Left: ' + ScissorsLeft;

    //This is very similar to the code right above. This code is for keeping track of number of items left for Computer.
    outputComputerRockLeft.innerHTML = 'Rocks Left: ' + ComputerRockLeft;
    outputComputerPaperLeft.innerHTML = 'Paper Left: ' + ComputerPaperLeft;
    outputComputerScissorsLeft.innerHTML = 'Scissors Left: ' + ComputerScissorsLeft;

    //It displays the log on the bottom. It says what move Player played, what move Rock played, and who won.
    outputplayerLog.innerHTML = playerLog;
    outputLog.innerHTML = log;
}







function startMoney()
{
  value = 0;
  numPenny = 0;
  numNickel = 0;
  numDime = 0;
  numQuarter = 0;
  dinero = document.getElementById("Total Value")
  totalPenny = document.getElementById("Total Penny") 
  totalNickel = document.getElementById("Total Nickel")
  totalDime = document.getElementById("Total Dime") 
  totalQuarter = document.getElementById("Total Quarter")
}

function displayMoney()
{
  dinero.innerHTML = value.toFixed(2);
  totalPenny.innerHTML = numPenny;
  totalNickel.innerHTML = numNickel;
  totalDime.innerHTML = numDime;
  totalQuarter.innerHTML = numQuarter;
  
}
  
function addPenny()
{
  numPenny++;
  value += 0.01;
  displayMoney();
}

function subtractPenny()
{
  numPenny--;
  //value -= 0.01;
  if (numPenny >= 0 )
  {
    value -= 0.01;
  }
  if(numPenny < 0)
  {
    numPenny = 0;
    //value = 0;
  }
  displayMoney();
}

function addNickel()
{
  numNickel++;
  value += 0.05;
  displayMoney();
}

function subtractNickel()
{
  numNickel--;
  //value -= 0.05;
  if (numNickel >= 0 )
  {
    value -= 0.05;
  }
  if(numNickel < 0)
  {
    numNickel = 0;
    //value = 0;
  }
  displayMoney();
}

function addDime()
{
  numDime++;
  value += 0.1;
  displayMoney();
}

function subtractDime()
{
  numDime--;
 // value -= 0.1;
  if (numDime >= 0 )
  {
    value -= 0.1;
  }
  if(numDime < 0)
  {
    numDime = 0;
   // value = 0;
  }
  displayMoney();
}

function addQuarter()
{
  numQuarter++;
  value += 0.25;
  displayMoney();
}

function subtractQuarter()
{
  numQuarter--;
  //value -= 0.25;
  if (numQuarter >= 0 )
  {
    value -= 0.25;
  }
  if(numQuarter < 0)
  {
    numQuarter = 0;
    //value = 0;
  }
  displayMoney();
}

function resetMoney()
{
  value = 0;
  numPenny = 0;
  numNickel = 0;
  numDime = 0;
  numQuarter = 0;
  displayMoney();
}












function startHotCold(){
        // generate random number
        randomNum = Math.floor(Math.random()*(Math.floor(100)-Math.ceil(1)) + 1);

        // temporarily print random number to log for testing
        // console.log(randomNum);

        // declare and initialize player's current guess and the number of remaining guesses
        currentGuess = 50;
        guessRemaining = 5;

        // guessedNumbers - string that will include all of the previous guesses with their responses
        guessedNumbers = "";

        // response - string that includes the hot/cold responses for corresponding guesses 
        response = "";

        // variables that get the HTML elements for the user's current guess, number of guesses left, and their hot/hold message
        guess = document.getElementById("cGuess");
        guessLeft = document.getElementById("guessesCountDown");
        message = document.getElementById("response");

        displayHotCold();
      }

      function displayHotCold() {

        guess.innerHTML = currentGuess;
        guessLeft.innerHTML = guessRemaining;
        message.innerHTML = response;
      }

      function findDifference() {
        return Math.abs(currentGuess-randomNum)
      }
      function hotOrColdChart() {
        if (guessRemaining == 1 && findDifference() != 0) {
          response = "You lost! The number was " + randomNum;

          guessRemaining++;
        }
        else if (findDifference() == 0) {
          response = "You won!";
          guessRemaining++;
        }
        else if (findDifference() <= 5) {
          response = "Very Hot";
        }
        else if (findDifference() >= 6 && findDifference() <= 8) {
          response = "Hot";
        }
        else if (findDifference() >= 9 && findDifference() <= 15) {
          response = "Very Warm";
        }
        else if (findDifference() >= 16 && findDifference() <= 20) {
          response = "Warm";
        }
        else if (findDifference() >= 21 && findDifference() <= 30) {
          response = "Cool";
        }
        else if (findDifference() >= 31 && findDifference() <= 40) {
          response = "Very Cool";
        }
        else if (findDifference() >= 41 && findDifference() <= 55) {
          response = "Cold";
        }
        else if (findDifference() > 55) {
          response = "Very Cold";
        }
      }

      function commit() {
        hotOrColdChart();

        if (response != "Very Hot") {
          guessRemaining -= 1;
        }

        guessedNumbers += "The guess was --> " + currentGuess + " : " + response +" / ";
        console.log(guessedNumbers);

        display();
      }

      function resetHotCold() {
        randomNum = Math.floor(Math.random()*(Math.floor(100)-Math.ceil(1)) + 1);
        console.log(randomNum);
        guessedNumbers = "";
        response = "";
        guessRemaining = 5;
        currentGuess = 50;
        displayHotCold();
      }

      function addN(n) {
        if (currentGuess >= 1 && currentGuess <= 100-n) {
          currentGuess += n;
        }
        displayHotCold();
      }

      function subtractN(n) {
        if (currentGuess >= 1+n && currentGuess <= 100) {
          currentGuess -= n;
        }
        displayHotCold();
      }
