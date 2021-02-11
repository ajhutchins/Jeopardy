# ajhutchins.github.io
ajhutchins-app


<h1>How to make A.J.'s Jeopardy Game</h1>

Link: // Put Link Here After Making Live //


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
  
  5. Repeat this formula 5-times within the columns ```<div>``` to create 5 question boxes/buttons, along with 2-4 answer buttons within each. Get creative and write some fun questions and answers in.
