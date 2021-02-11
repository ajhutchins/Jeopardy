# ajhutchins.github.io
ajhutchins-app


<h1>How to make A.J.'s Jeopardy Game</h1>

Link: // Put Link Here After Making Live //

Jeopardy_Screen_Shot.png

1. The first step is making our Jeopardy board. To mimic this game, begin with linking the stylesheet, .js file, and the jQuery CDN in the HTML as such. Then add the opening ```<div>```s and title for our game:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="app.js" charset="utf-8"></script>
    <title>Jeopardy Game</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
    <div id="wrapper">
        <div class="wholeGame">
            <h1>JEOPARDY!</h1>
      </div>
  </div>
  </body>
  </html>
  ```
  2. Now, let's add the categories in the .wholeGame ```<div>```:
  
  ```
  <div class="categories">
                <div id="category1">Film</div>
                <div id="category2">Music</div>
                <div id="category3">Art</div>
                <div id="category4">Literature</div>
                <div id="category5">Sports</div>
        </div>
  ```
  
  
  3. We now want to make the columns for the 5 questions to live within - here is the structure of column 1 (you will need to make 5 - make sure to put them all within a "columns" ```<div>```):
  
  ```
  <div class="columns">
                <div id="column1">
                        <div id="question1">
                        </div>
                        <div id="question2">
                        </div>
                        <div id="question3">
                        </div>
                        <div id="question4">
                        </div>
                        <div id="question5">
                        </div>
                    </div>
  ```
  
  4. From here, we need to add a BUTTON above each question, so the user can click on a question box/button to pop-up the question's text-box. That means we will also need some option for the user to choose from. Let's add the buttons to access the question's textbox AND to create answer options for the user to choose.
  
  ```
  <div class="columns">
                <div id="column1">
                    <button id="openQuestion1">100</button>
                        <div id="question1">
                            <div id="question-textbox1">
                                TEXT HERE
                                <div id="question1answers">
                                    <button id="A1">OPTION A</button>
                                        <div id="A1Answer">
                                            ANSWER OPTION A
                                        </div>
                                    <button id="B1">OPTION B</button>
                                        <div id="B1Answer">
                                            ANSWER OPTION B
                                        </div>
                                    <button id="C1">OPTION C</button>
                                        <div id="C1Answer">
                                            ANSWER OPTION C
                                        </div>
                                    <button id="D1">OPTION D</button>
                                        <div id="D1Answer">
                                            ANSWER OPTION D
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
  ```
  
  5. Repeat this formula 5-times within the columns ```<div>``` to create 5 question boxes/buttons, along with 2-4 answer buttons within each. Get creative and write some fun questions and answers in. Make sure to add a number value as the button titles throughout the columns. After going through the motions, you should end up with a columns ```<div>``` that contains all 5-columns, and each column should contain 5 questions for the user to choose from, which then presents multiple option buttons within each chosen question. This is A LOT of HTML, but we now have a solid structure for our gameboard that we can add some fun functions to. You should have something similar to this (this is only column 1 for space-sake):
  
  ```
<body>
    <div id="wrapper">
        <div class="wholeGame">
            <h1>JEOPARDY!</h1>
            <div class="categories">
                <div id="category1">Film</div>
                <div id="category2">Music</div>
                <div id="category3">Art</div>
                <div id="category4">Literature</div>
                <div id="category5">Sports</div>
        </div>
            <div class="columns">
                <div id="column1">
                    <button id="openQuestion1">100</button>
                        <div id="question1">
                            <div id="question-textbox1">
                                In <em>Back to the Future</em>, what year does Marty McFly go back to?
                                <div id="question1answers">
                                    <button id="A1">1940</button>
                                        <div id="A1Answer">
                                            Incorrect!
                                        </div>
                                    <button id="B1">1945</button>
                                        <div id="B1Answer">
                                            Incorrect!
                                        </div>
                                    <button id="C1">1955</button>
                                        <div id="C1Answer">
                                            Correct!
                                        </div>
                                    <button id="D1">1965</button>
                                        <div id="D1Answer">
                                            Incorrect!
                                        </div>
                                    </div>
                            </div>
                        </div>
                    <button id="openQuestion2">200</button>
                        <div id="question2">
                            <div id="question-textbox2">
                                In <em>The Matrix</em>, which pill does Neo take?
                                <div id="question2answers">
                                    <button id="A2">Red Pill</button>
                                        <div id="A2Answer">
                                            Correct!
                                        </div>
                                    <button id="B2">Blue Pill</button>
                                        <div id="B2Answer">
                                            Incorrect!
                                        </div>
                                    </div>
                            </div>
                        </div>
                    <button id="openQuestion3">300</button>
                        <div id="question3">
                            <div id="question-textbox3">
                                In <em>Stand By Me</em>, what are the boys searching for?
                                <div id="question3answers">
                                    <button id="A3">A Dead Body</button>
                                        <div id="A3Answer">
                                            Correct!
                                        </div>
                                    <button id="B3">Hidden Treasure</button>
                                        <div id="B3Answer">
                                            Incorrect!
                                        </div>
                                    <button id="C3">Their Friend</button>
                                        <div id="C3Answer">
                                            Incorrect!
                                        </div>
                                    <button id="D3">Nothing In Particular</button>
                                        <div id="D3Answer">
                                            Incorrect!
                                        </div>
                                    </div>
                            </div>
                        </div>
                    <button id="openQuestion4">400</button>
                        <div id="question4">
                            <div id="question-textbox4">
                                What year was <em>Forest Gump</em> released?
                                <div id="question4answers">
                                    <button id="A4">1992</button>
                                        <div id="A4Answer">
                                            Incorrect!
                                        </div>
                                    <button id="B4">1994</button>
                                        <div id="B4Answer">
                                            Correct!
                                        </div>
                                    <button id="C4">1997</button>
                                        <div id="C4Answer">
                                            Incorrect!
                                        </div>
                                    <button id="D4">1999</button>
                                        <div id="D4Answer">
                                            Incorrect!
                                        </div>
                                    </div>
                            </div>
                        </div>
                    <button id="openQuestion5">500</button>
                        <div id="question5">
                            <div id="question-textbox5">
                                In <em>Harry Potter</em>, what is the name of Voldemort's snake?
                                <div id="question5answers">
                                    <button id="A5">Runespoor</button>
                                        <div id="A5Answer">
                                            Incorrect!
                                        </div>
                                    <button id="B5">Basilisk</button>
                                        <div id="B5Answer">
                                            Incorrect!
                                        </div>
                                    <button id="C5">Ash</button>
                                        <div id="C5Answer">
                                            Incorrect!
                                        </div>
                                    <button id="D5">Nagini</button>
                                        <div id="D5Answer">
                                            Correct!
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
  ```
  
  6. We will want to start adding some functionailty to our gameboard, but our layout is a bit concerning at the moment. Let's hop over to CSS real quick to sort out some of the craziness. Feel free to experiment here with the colors, sizing, etc. that you would like to use. Just remember to ```display: flex;``` the categories and columns so they display next to one another vertically across the page. Otherwise, they will stack on top of one another horizontally. Here's an option you can use to match this formatting exactly:
  
  ```
  @import url('https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@700&display=swap');

body {
    background: blue;
    position: absolute;
    font-family:'Big Shoulders Display', Arial;
}

#wrapper {
    margin-left:auto;
    margin-right:auto;
    width:750px;
}

h1 {
    background: blue;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 2px black;
    font-size: 45px;
    border-radius: 3px;
}

.wholeGame {
    height: 100%;
    width: 100%;
    background-color: darkblue;
    border-radius: 3px;
    border: 2px solid gold;
}

.categories {
    height: 50px;
    flex-basis: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    text-shadow: 2px 2px 2px black;
    border: 2px solid gold;
    padding: 25px 5px;
    font-size:30px;
    border-radius: 3px;
}

#category1, #category2, #category3, #category4, #category5 {
    border: 4px solid black;
    width: 100px;
    height: 50px;
    padding: 20px 22px 20px 22px;
    justify-content: space-between;
    text-align: center;
    border-radius: 3px;
}

#column1, #column2, #column3, #column4, #column5 {
    height: 400px;
    width: 106px;
    flex-basis: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    text-shadow: 2px 2px 2px black;
    border: 2px solid gold;
    flex-direction: column;
    padding: 15px 20px 5px 20px;
    float: left;
    border-radius: 3px;
}
  ```
  
7. Now that our gameboard looks a little bit more like an actual Jeopardy game, let's make our buttons work! Since we are using modals to display the question text-boxes, let's assign a few modal constants to connect with each question (you'll need to make 25 - one for each question):

```
// these constants connect the modal buttons to the specific questions
    const $openButton1 = $('#openQuestion1');
    const $openButton2 = $('#openQuestion2');
    const $openButton3 = $('#openQuestion3');
    const $openButton4 = $('#openQuestion4');
    const $openButton5 = $('#openQuestion5');
    
// these are the modals set up for each question
    const $modal1 = $('#question1');
    const $modal2 = $('#question2');
    const $modal3 = $('#question3');
    const $modal4 = $('#question4');
    const $modal5 = $('#question5');
```

8. Good! Up next is assigning our answer buttons with some modal constants. This way we can pop up another box to tell our user if they are "correct" or "incorrect" once they've chosen an answer(let's make sure to add that to our HTML & CSS as well):

```
// these are the event listeners for each answer for all questions\
    // Q1
    const $buttonA1 = $('#A1Answer');
    const $buttonB1 = $('#B1Answer');
    const $buttonC1 = $('#C1Answer');
    const $buttonD1 = $('#D1Answer');
    // Q2
    const $buttonA2 = $('#A2Answer');
    const $buttonB2 = $('#B2Answer');
    // Q3
    const $buttonA3 = $('#A3Answer');
    const $buttonB3 = $('#B3Answer');
    const $buttonC3 = $('#C3Answer');
    const $buttonD3 = $('#D3Answer');
    // Q4
    const $buttonA4 = $('#A4Answer');
    const $buttonB4 = $('#B4Answer');
    const $buttonC4 = $('#C4Answer');
    const $buttonD4 = $('#D4Answer');
    // Q5
    const $buttonA5 = $('#A5Answer');
    const $buttonB5 = $('#B5Answer');
    const $buttonC5 = $('#C5Answer');
    const $buttonD5 = $('#D5Answer');
```

9. Phewf! Quite a bit of constants, but this will keep our items operating independently from one another.

10. Let's make these buttons do something! To open our question boxes, let's make some functions that connect everything. Since we're using modals, we just need to indicate which modal to display and on which event. And since we want the user to click on each box/option, let's use their click as the event to display our modal box. Once we have that function written, let's add another function WITHIN there to CLOSE the modal we have just opened. Set the same modal's display to none in the closing function:

```
const openQuestion1 = () => {
        $modal1.css('display', 'block');
        $('#A1').click(function() {
            $buttonA1.css('display', 'block');
            const closeAnswerA1 = () => {
                $modal1.css('display', 'none');
              }
        });
        $('#B1').click(function() {
            $buttonB1.css('display', 'block');
            const closeAnswerB1 = () => {
                $modal1.css('display', 'none');
              }
        });
        $('#C1').click(function() {
            $buttonC1.css('display', 'block');
            const closeAnswerC1 = () => {
                $modal1.css('display', 'none');
              }
        });
        $('#D1').click(function() {
            $buttonD1.css('display', 'block');
            const closeAnswerD1 = () => {
                $modal1.css('display', 'none');
              }
        });
        const closeQuestion1 = () => {
            $modal1.css('display', 'none');
          }
    }
```

11. Cool! Just remember that this won't close our windows out automatically - we just have the function created TO close it. Add a ```setTimout()``` function to each so the user doesn't have unlimited time. This doesn't need to be your final timer right now, so don't get hung up. Just get the code added so it works when you want it to. 

12. Now our buttons should be connected to our modals, which just need event listeners to work. Let's add those (make 25):

```
    // these are the event listeners for opening each question modal
    $openButton1.one('click', openQuestion1);
    $openButton2.one('click', openQuestion2);
    $openButton3.one('click', openQuestion3);
    $openButton4.one('click', openQuestion4);
    $openButton5.one('click', openQuestion5);
```

13. Make sure to use ```.one``` instead of ```.on```, since we will need the user to be able to click again to choose their answer WITHIN the modal that we open. We should now be able to click on a question from whichever category, get that question to pop up in a modal, then choose from a set of option buttons within that modal. We should also have a subsequent modal telling us if we are correct or incorrect. Looks pretty close to what we want, huh?

14. One thing that will make our game a whole lot better is indicating to the user which questions they've already answered. For this, let's write a function to toggle the class of each question box so that we can change the CSS in the new class to reflect that it has been clicked.

```
// this will toggle the class of the questions that have already been clicked
    const $crossOutQuestion1 = $('#openQuestion1').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion2 = $('#openQuestion2').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion3 = $('#openQuestion3').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion4 = $('#openQuestion4').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion5 = $('#openQuestion5').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    
    $crossOutQuestion1
    $crossOutQuestion2
    $crossOutQuestion3
    $crossOutQuestion4
    $crossOutQuestion5
```

15. Now add some changes to our CSS so the classes look different once they have been toggled:

```
BEFORE TOGGLE:
#openQuestion1, #openQuestion2, #openQuestion3, #openQuestion4, #openQuestion5, #openQuestion6, #openQuestion7, #openQuestion8, #openQuestion9, #openQuestion10, #openQuestion11, #openQuestion12, #openQuestion13, #openQuestion14, #openQuestion15, #openQuestion16, #openQuestion17, #openQuestion18, #openQuestion19, #openQuestion20, #openQuestion21, #openQuestion22, #openQuestion23, #openQuestion24, #openQuestion25 {
	background-color:darkblue;
	border: 1px solid gold;
	outline: none;
	border-radius: 4px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    left: 50%;
    top: 50%;
    height: 70px;
    width: 100px;
}

AFTER TOGGLE:
.question-done {
	background-color:darkblue;
	border: 1px solid gold;
	outline: none;
	border-radius: 4px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    left: 50%;
    top: 50%;
    height: 70px;
    width: 100px;
    opacity: 50%;
    z-index: -1;
}
```

16. Now that the user can tell which question they've clicked on, let's add a way for them to be able to keep their score. First, add a new ```<div>``` just below our ```<h1>```, then add a variable set to 0:

HTML:
```
          <div id="score">
              Your Score: 
          </div>

```
JS
```
    // This variable sets the initial score at 0 so we can add and subtract from that
    // scorekeeper code used is based on the following: https://github.com/PhuGazie/ScoreKeeper/blob/master/app.js
    var sum = 0;
```
    
17. Now let's incorporate our score into the buttons we've already created. After our ```setTimeout()``` functions in EACH question and answer button, add the positive or negative score that is appropriate. Make sure you then add the html to the new ```<div>``` so it displays nicely under your heading. Here's how question 1 should look now:

```
const openQuestion1 = () => {
        $modal1.css('display', 'block');
        $('#A1').click(function() {
            $buttonA1.css('display', 'block');
            const closeAnswerA1 = () => {
                $modal1.css('display', 'none');
              }
            setTimeout(closeAnswerA1, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B1').click(function() {
            $buttonB1.css('display', 'block');
            const closeAnswerB1 = () => {
                $modal1.css('display', 'none');
              }
              setTimeout(closeAnswerB1, 1250);
              sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C1').click(function() {
            $buttonC1.css('display', 'block');
            const closeAnswerC1 = () => {
                $modal1.css('display', 'none');
              }
              setTimeout(closeAnswerC1, 1250);
              sum = sum + 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D1').click(function() {
            $buttonD1.css('display', 'block');
            const closeAnswerD1 = () => {
                $modal1.css('display', 'none');
              }
              setTimeout(closeAnswerD1, 1250);
              sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion1 = () => {
            $modal1.css('display', 'none');
          }
          setTimeout(closeQuestion1, 15000);
    }
```

18. Nice! Now all we really need to do it END our game! Instead of reaching a point total, let's replicate real Jeopardy by implementing a timer to the whole board - make it so that the user will VERY rarely be able to complete all of the questions before the timer runs out. Once the timer runs out, we'll alert the user that the game is over, what their final score is, and the option to play again.

```
    // This set timeout function ends the game after 2.5 minutes with an alert, which displays your final score and refreshes the page when you click the button within the alert -- window reload function inspired by: https://stackoverflow.com/questions/12173800/refresh-current-page-after-set-timeout-function-call
    setTimeout(function(){alert("Game over! Your Final Score is: " + sum + " Points! Hit 'OK' to play again!")
        window.location.reload();
    }, 150000);
```

There you go! You should now have a fully functioning Jeopardy game. Add some fun questions and mix up the timers to make it easier or harder, depending on your audience. Have fun!
