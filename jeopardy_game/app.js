console.log('hello world');

/*
[ x ] user sees grid of options (5 categories (across top), each with 5 Qs in vertical column)

[ x ] when user clicks on a Q, it pops up in a modal to reveal the Q & 4 button options for the user to choose one
    [ x ] add a timer so the user doesn't have unlimited time to choose answer
        -- 15-seconds to choose an answer, but user currently doesn't see it
    [ x ] if user clicks correct answer, display 'correct!' and add appropriate points to total
    [ x ] if user clicks incorrect answer, display 'incorrect!' and subtract appropriate points from total
    [ x ] once clicked, make card un-clickable now

[ x ] give the game a timer so it ends after a certain time
    [ x ] display the user's final score
    [ x ] reload the page on a "Play again" button so they can play again

*/

$(() => {

    // This variable sets the initial score at 0 so we can add and subtract from that
    // scorekeeper code used is based on the following: https://github.com/PhuGazie/ScoreKeeper/blob/master/app.js
    var sum = 0;
    // var gameOver = ['.question-done'];
     
    // This set timeout function ends the game after 2.5 minutes with an alert, which displays your final score and refreshes the page when you click the button within the alert -- window reload function inspired by: https://stackoverflow.com/questions/12173800/refresh-current-page-after-set-timeout-function-call
    setTimeout(function(){alert("Game over! Your Final Score is: " + sum + " Points! Hit 'OK' to play again!")
        window.location.reload();
    }, 150000);


    // This section will theoretically play the Jeopardy theme song - inspired by: https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click -- but debating whether or not I actually want to use
    // var jeopardySound = new Audio('https://open.spotify.com/embed/track/7HiPgTQFj0L2XHrSC97F1W');
    // jeopardySound.play();
    
    // function beginSong(){
    //     jeopardySound = new sound("https://youtu.be/IkdmOVejUlI");
    // }
    // beginSong()


    // these functions display each modal button when it is clicked, allows the answers to be clicked, and gives a time limit for how long each modal is open

    // Question Box 1 and access to 4 answers
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

    // Question Box 2 and access to 2 answers
    const openQuestion2 = () => {
        $modal2.css('display', 'block');
        $('#A2').click(function() {
            $buttonA2.css('display', 'block');
            const closeAnswerA2 = () => {
                $modal2.css('display', 'none');
            }
            setTimeout(closeAnswerA2, 1250);
            sum = sum + 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B2').click(function() {
            $buttonB2.css('display', 'block');
            const closeAnswerB2 = () => {
                $modal2.css('display', 'none');
            }
            setTimeout(closeAnswerB2, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion2 = () => {
            $modal2.css('display', 'none');
          }
          setTimeout(closeQuestion2, 15000);
    }

    // Question Box 3 and access to 4 answers
    const openQuestion3 = () => {
        $modal3.css('display', 'block');
        $('#A3').click(function() {
            $buttonA3.css('display', 'block');
            const closeAnswerA3 = () => {
                $modal3.css('display', 'none');
            }
            setTimeout(closeAnswerA3, 1250);
            sum = sum + 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B3').click(function() {
            $buttonB3.css('display', 'block');
            const closeAnswerB3 = () => {
                $modal3.css('display', 'none');
            }
            setTimeout(closeAnswerB3, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C3').click(function() {
            $buttonC3.css('display', 'block');
            const closeAnswerC3 = () => {
                $modal3.css('display', 'none');
            }
            setTimeout(closeAnswerC3, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D3').click(function() {
            $buttonD3.css('display', 'block');
            const closeAnswerD3 = () => {
                $modal3.css('display', 'none');
            }
            setTimeout(closeAnswerD3, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion3 = () => {
            $modal3.css('display', 'none');
          }
          setTimeout(closeQuestion3, 15000);
    }

    // Question Box 4 and access to 4 answers
    const openQuestion4 = () => {
        $modal4.css('display', 'block');
        $('#A4').click(function() {
            $buttonA4.css('display', 'block');
            const closeAnswerA4 = () => {
                $modal4.css('display', 'none');
            }
            setTimeout(closeAnswerA4, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B4').click(function() {
            $buttonB4.css('display', 'block');
            const closeAnswerB4 = () => {
                $modal4.css('display', 'none');
            }
            setTimeout(closeAnswerB4, 1250);
            sum = sum + 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C4').click(function() {
            $buttonC4.css('display', 'block');
            const closeAnswerC4 = () => {
                $modal4.css('display', 'none');
            }
            setTimeout(closeAnswerC4, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D4').click(function() {
            $buttonD4.css('display', 'block');
            const closeAnswerD4 = () => {
                $modal4.css('display', 'none');
            }
            setTimeout(closeAnswerD4, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion4 = () => {
            $modal4.css('display', 'none');
          }
          setTimeout(closeQuestion4, 15000);
    }

    // Question Box 5 and access to 4 answers
    const openQuestion5 = () => {
        $modal5.css('display', 'block');
        $('#A5').click(function() {
            $buttonA5.css('display', 'block');
            const closeAnswerA5 = () => {
                $modal5.css('display', 'none');
            }
            setTimeout(closeAnswerA5, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B5').click(function() {
            $buttonB5.css('display', 'block');
            const closeAnswerB5 = () => {
                $modal5.css('display', 'none');
            }
            setTimeout(closeAnswerB5, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C5').click(function() {
            $buttonC5.css('display', 'block');
            const closeAnswerC5 = () => {
                $modal5.css('display', 'none');
            }
            setTimeout(closeAnswerC5, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D5').click(function() {
            $buttonD5.css('display', 'block');
            const closeAnswerD5 = () => {
                $modal5.css('display', 'none');
            }
            setTimeout(closeAnswerD5, 1250);
            sum = sum + 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion5 = () => {
            $modal5.css('display', 'none');
          }
          setTimeout(closeQuestion5, 15000);
    }

    // Question Box 6 and access to 4 answers
    const openQuestion6 = () => {
        $modal6.css('display', 'block');
        $('#A6').click(function() {
            $buttonA6.css('display', 'block');
            const closeAnswerA6 = () => {
                $modal6.css('display', 'none');
            }
            setTimeout(closeAnswerA6, 1250);
            sum = sum + 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B6').click(function() {
            $buttonB6.css('display', 'block');
            const closeAnswerB6 = () => {
                $modal6.css('display', 'none');
            }
            setTimeout(closeAnswerB6, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C6').click(function() {
            $buttonC6.css('display', 'block');
            const closeAnswerC6 = () => {
                $modal6.css('display', 'none');
            }
            setTimeout(closeAnswerC6, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D6').click(function() {
            $buttonD6.css('display', 'block');
            const closeAnswerD6 = () => {
                $modal6.css('display', 'none');
            }
            setTimeout(closeAnswerD6, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion6 = () => {
            $modal6.css('display', 'none');
          }
          setTimeout(closeQuestion6, 15000);
    }

    // Question Box 7 and access to 4 answers
    const openQuestion7 = () => {
        $modal7.css('display', 'block');
        $('#A7').click(function() {
            $buttonA7.css('display', 'block');
            const closeAnswerA7 = () => {
                $modal7.css('display', 'none');
            }
            setTimeout(closeAnswerA7, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B7').click(function() {
            $buttonB7.css('display', 'block');
            const closeAnswerB7 = () => {
                $modal7.css('display', 'none');
            }
            setTimeout(closeAnswerB7, 1250);
            sum = sum + 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C7').click(function() {
            $buttonC7.css('display', 'block');
            const closeAnswerC7 = () => {
                $modal7.css('display', 'none');
            }
            setTimeout(closeAnswerC7, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D7').click(function() {
            $buttonD7.css('display', 'block');
            const closeAnswerD7 = () => {
                $modal7.css('display', 'none');
            }
            setTimeout(closeAnswerD7, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion7 = () => {
            $modal7.css('display', 'none');
          }
          setTimeout(closeQuestion7, 15000);
    }

    // Question Box 8 and access to 4 answers
    const openQuestion8 = () => {
        $modal8.css('display', 'block');
        $('#A8').click(function() {
            $buttonA8.css('display', 'block');
            const closeAnswerA8 = () => {
                $modal8.css('display', 'none');
            }
            setTimeout(closeAnswerA8, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B8').click(function() {
            $buttonB8.css('display', 'block');
            const closeAnswerB8 = () => {
                $modal8.css('display', 'none');
            }
            setTimeout(closeAnswerB8, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C8').click(function() {
            $buttonC8.css('display', 'block');
            const closeAnswerC8 = () => {
                $modal8.css('display', 'none');
            }
            setTimeout(closeAnswerC8, 1250);
            sum = sum + 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D8').click(function() {
            $buttonD8.css('display', 'block');
            const closeAnswerD8 = () => {
                $modal8.css('display', 'none');
            }
            setTimeout(closeAnswerD8, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion8 = () => {
            $modal8.css('display', 'none');
          }
          setTimeout(closeQuestion8, 15000);
    }

    // Question Box 9 and access to 4 answers
    const openQuestion9 = () => {
        $modal9.css('display', 'block');
        $('#A9').click(function() {
            $buttonA9.css('display', 'block');
            const closeAnswerA9 = () => {
                $modal9.css('display', 'none');
            }
            setTimeout(closeAnswerA9, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B9').click(function() {
            $buttonB9.css('display', 'block');
            const closeAnswerB9 = () => {
                $modal9.css('display', 'none');
            }
            setTimeout(closeAnswerB9, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C9').click(function() {
            $buttonC9.css('display', 'block');
            const closeAnswerC9 = () => {
                $modal9.css('display', 'none');
            }
            setTimeout(closeAnswerC9, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D9').click(function() {
            $buttonD9.css('display', 'block');
            const closeAnswerD9 = () => {
                $modal9.css('display', 'none');
            }
            setTimeout(closeAnswerD9, 1250);
            sum = sum + 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion9 = () => {
            $modal9.css('display', 'none');
          }
          setTimeout(closeQuestion9, 15000);
    }

    // Question Box 10 and access to 4 answers
    const openQuestion10 = () => {
        $modal10.css('display', 'block');
        $('#A10').click(function() {
            $buttonA10.css('display', 'block');
            const closeAnswerA10 = () => {
                $modal10.css('display', 'none');
            }
            setTimeout(closeAnswerA10, 1250);
            sum = sum + 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B10').click(function() {
            $buttonB10.css('display', 'block');
            const closeAnswerB10 = () => {
                $modal10.css('display', 'none');
            }
            setTimeout(closeAnswerB10, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C10').click(function() {
            $buttonC10.css('display', 'block');
            const closeAnswerC10 = () => {
                $modal10.css('display', 'none');
            }
            setTimeout(closeAnswerC10, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D10').click(function() {
            $buttonD10.css('display', 'block');
            const closeAnswerD10 = () => {
                $modal10.css('display', 'none');
            }
            setTimeout(closeAnswerD10, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion10 = () => {
            $modal10.css('display', 'none');
          }
          setTimeout(closeQuestion10, 15000);
    }

    // Question Box 11 and access to 4 answers
    const openQuestion11 = () => {
        $modal11.css('display', 'block');
        $('#A11').click(function() {
            $buttonA11.css('display', 'block');
            const closeAnswerA11 = () => {
                $modal11.css('display', 'none');
            }
            setTimeout(closeAnswerA11, 1250);
            sum = sum + 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B11').click(function() {
            $buttonB11.css('display', 'block');
            const closeAnswerB11 = () => {
                $modal11.css('display', 'none');
            }
            setTimeout(closeAnswerB11, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C11').click(function() {
            $buttonC11.css('display', 'block');
            const closeAnswerC11 = () => {
                $modal11.css('display', 'none');
            }
            setTimeout(closeAnswerC11, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D11').click(function() {
            $buttonD11.css('display', 'block');
            const closeAnswerD11 = () => {
                $modal11.css('display', 'none');
            }
            setTimeout(closeAnswerD11, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion11 = () => {
            $modal11.css('display', 'none');
          }
          setTimeout(closeQuestion11, 15000);
    }

    // Question Box 12 and access to 4 answers
    const openQuestion12 = () => {
        $modal12.css('display', 'block');
        $('#A12').click(function() {
            $buttonA12.css('display', 'block');
            const closeAnswerA12 = () => {
                $modal12.css('display', 'none');
            }
            setTimeout(closeAnswerA12, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B12').click(function() {
            $buttonB12.css('display', 'block');
            const closeAnswerB12 = () => {
                $modal12.css('display', 'none');
            }
            setTimeout(closeAnswerB12, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C12').click(function() {
            $buttonC12.css('display', 'block');
            const closeAnswerC12 = () => {
                $modal12.css('display', 'none');
            }
            setTimeout(closeAnswerC12, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D12').click(function() {
            $buttonD12.css('display', 'block');
            const closeAnswerD12 = () => {
                $modal12.css('display', 'none');
            }
            setTimeout(closeAnswerD12, 1250);
            sum = sum + 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion12 = () => {
            $modal12.css('display', 'none');
          }
          setTimeout(closeQuestion12, 15000);
    }

    // Question Box 13 and access to 4 answers
    const openQuestion13 = () => {
        $modal13.css('display', 'block');
        $('#A13').click(function() {
            $buttonA13.css('display', 'block');
            const closeAnswerA13 = () => {
                $modal13.css('display', 'none');
            }
            setTimeout(closeAnswerA13, 1250);
            sum = sum + 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B13').click(function() {
            $buttonB13.css('display', 'block');
            const closeAnswerB13 = () => {
                $modal13.css('display', 'none');
            }
            setTimeout(closeAnswerB13, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C13').click(function() {
            $buttonC13.css('display', 'block');
            const closeAnswerC13 = () => {
                $modal13.css('display', 'none');
            }
            setTimeout(closeAnswerC13, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D13').click(function() {
            $buttonD13.css('display', 'block');
            const closeAnswerD13 = () => {
                $modal13.css('display', 'none');
            }
            setTimeout(closeAnswerD13, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion13 = () => {
            $modal13.css('display', 'none');
          }
          setTimeout(closeQuestion13, 15000);
    }

    // Question Box 14 and access to 4 answers
    const openQuestion14 = () => {
        $modal14.css('display', 'block');
        $('#A14').click(function() {
            $buttonA14.css('display', 'block');
            const closeAnswerA14 = () => {
                $modal14.css('display', 'none');
            }
            setTimeout(closeAnswerA14, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B14').click(function() {
            $buttonB14.css('display', 'block');
            const closeAnswerB14 = () => {
                $modal14.css('display', 'none');
            }
            setTimeout(closeAnswerB14, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C14').click(function() {
            $buttonC14.css('display', 'block');
            const closeAnswerC14 = () => {
                $modal14.css('display', 'none');
            }
            setTimeout(closeAnswerC14, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D14').click(function() {
            $buttonD14.css('display', 'block');
            const closeAnswerD14 = () => {
                $modal14.css('display', 'none');
            }
            setTimeout(closeAnswerD14, 1250);
            sum = sum + 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion14 = () => {
            $modal14.css('display', 'none');
          }
          setTimeout(closeQuestion14, 15000);
    }

    // Question Box 15 and access to 4 answers
    const openQuestion15 = () => {
        $modal15.css('display', 'block');
        $('#A15').click(function() {
            $buttonA15.css('display', 'block');
            const closeAnswerA15 = () => {
                $modal15.css('display', 'none');
            }
            setTimeout(closeAnswerA15, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B15').click(function() {
            $buttonB15.css('display', 'block');
            const closeAnswerB15 = () => {
                $modal15.css('display', 'none');
            }
            setTimeout(closeAnswerB15, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C15').click(function() {
            $buttonC15.css('display', 'block');
            const closeAnswerC15 = () => {
                $modal15.css('display', 'none');
            }
            setTimeout(closeAnswerC15, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D15').click(function() {
            $buttonD15.css('display', 'block');
            const closeAnswerD15 = () => {
                $modal15.css('display', 'none');
            }
            setTimeout(closeAnswerD15, 1250);
            sum = sum + 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion15 = () => {
            $modal15.css('display', 'none');
          }
          setTimeout(closeQuestion15, 15000);
    }

    // Question Box 16 and access to 4 answers
    const openQuestion16 = () => {
        $modal16.css('display', 'block');
        $('#A16').click(function() {
            $buttonA16.css('display', 'block');
            const closeAnswerA16 = () => {
                $modal16.css('display', 'none');
            }
            setTimeout(closeAnswerA16, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B16').click(function() {
            $buttonB16.css('display', 'block');
            const closeAnswerB16 = () => {
                $modal16.css('display', 'none');
            }
            setTimeout(closeAnswerB16, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C16').click(function() {
            $buttonC16.css('display', 'block');
            const closeAnswerC16 = () => {
                $modal16.css('display', 'none');
            }
            setTimeout(closeAnswerC16, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D16').click(function() {
            $buttonD16.css('display', 'block');
            const closeAnswerD16 = () => {
                $modal16.css('display', 'none');
            }
            setTimeout(closeAnswerD16, 1250);
            sum = sum + 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion16 = () => {
            $modal16.css('display', 'none');
          }
          setTimeout(closeQuestion16, 15000);
    }

    // Question Box 17 and access to 4 answers
    const openQuestion17 = () => {
        $modal17.css('display', 'block');
        $('#A17').click(function() {
            $buttonA17.css('display', 'block');
            const closeAnswerA17 = () => {
                $modal17.css('display', 'none');
            }
            setTimeout(closeAnswerA17, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B17').click(function() {
            $buttonB17.css('display', 'block');
            const closeAnswerB17 = () => {
                $modal17.css('display', 'none');
            }
            setTimeout(closeAnswerB17, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C17').click(function() {
            $buttonC17.css('display', 'block');
            const closeAnswerC17 = () => {
                $modal17.css('display', 'none');
            }
            setTimeout(closeAnswerC17, 1250);
            sum = sum + 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D17').click(function() {
            $buttonD17.css('display', 'block');
            const closeAnswerD17 = () => {
                $modal17.css('display', 'none');
            }
            setTimeout(closeAnswerD17, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion17 = () => {
            $modal17.css('display', 'none');
          }
          setTimeout(closeQuestion17, 15000);
    }

    // Question Box 18 and access to 4 answers
    const openQuestion18 = () => {
        $modal18.css('display', 'block');
        $('#A18').click(function() {
            $buttonA18.css('display', 'block');
            const closeAnswerA18 = () => {
                $modal18.css('display', 'none');
            }
            setTimeout(closeAnswerA18, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B18').click(function() {
            $buttonB18.css('display', 'block');
            const closeAnswerB18 = () => {
                $modal18.css('display', 'none');
            }
            setTimeout(closeAnswerB18, 1250);
            sum = sum + 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C18').click(function() {
            $buttonC18.css('display', 'block');
            const closeAnswerC18 = () => {
                $modal18.css('display', 'none');
            }
            setTimeout(closeAnswerC18, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D18').click(function() {
            $buttonD18.css('display', 'block');
            const closeAnswerD18 = () => {
                $modal18.css('display', 'none');
            }
            setTimeout(closeAnswerD18, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion18 = () => {
            $modal18.css('display', 'none');
          }
          setTimeout(closeQuestion18, 15000);
    }

    // Question Box 19 and access to 4 answers
    const openQuestion19 = () => {
        $modal19.css('display', 'block');
        $('#A19').click(function() {
            $buttonA19.css('display', 'block');
            const closeAnswerA19 = () => {
                $modal19.css('display', 'none');
            }
            setTimeout(closeAnswerA19, 1250);
            sum = sum + 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B19').click(function() {
            $buttonB19.css('display', 'block');
            const closeAnswerB19 = () => {
                $modal19.css('display', 'none');
            }
            setTimeout(closeAnswerB19, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C19').click(function() {
            $buttonC19.css('display', 'block');
            const closeAnswerC19 = () => {
                $modal19.css('display', 'none');
            }
            setTimeout(closeAnswerC19, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D19').click(function() {
            $buttonD19.css('display', 'block');
            const closeAnswerD19 = () => {
                $modal19.css('display', 'none');
            }
            setTimeout(closeAnswerD19, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion19 = () => {
            $modal19.css('display', 'none');
          }
          setTimeout(closeQuestion19, 15000);
    }

    // Question Box 20 and access to 4 answers
    const openQuestion20 = () => {
        $modal20.css('display', 'block');
        $('#A20').click(function() {
            $buttonA20.css('display', 'block');
            const closeAnswerA20 = () => {
                $modal20.css('display', 'none');
            }
            setTimeout(closeAnswerA20, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B20').click(function() {
            $buttonB20.css('display', 'block');
            const closeAnswerB20 = () => {
                $modal20.css('display', 'none');
            }
            setTimeout(closeAnswerB20, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C20').click(function() {
            $buttonC20.css('display', 'block');
            const closeAnswerC20 = () => {
                $modal20.css('display', 'none');
            }
            setTimeout(closeAnswerC20, 1250);
            sum = sum + 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D20').click(function() {
            $buttonD20.css('display', 'block');
            const closeAnswerD20 = () => {
                $modal20.css('display', 'none');
            }
            setTimeout(closeAnswerD20, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion20 = () => {
            $modal20.css('display', 'none');
          }
          setTimeout(closeQuestion20, 15000);
    }

    // Question Box 21 and access to 4 answers
    const openQuestion21 = () => {
        $modal21.css('display', 'block');
        $('#A21').click(function() {
            $buttonA21.css('display', 'block');
            const closeAnswerA21 = () => {
                $modal21.css('display', 'none');
            }
            setTimeout(closeAnswerA21, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B21').click(function() {
            $buttonB21.css('display', 'block');
            const closeAnswerB21 = () => {
                $modal21.css('display', 'none');
            }
            setTimeout(closeAnswerB21, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C21').click(function() {
            $buttonC21.css('display', 'block');
            const closeAnswerC21 = () => {
                $modal21.css('display', 'none');
            }
            setTimeout(closeAnswerC21, 1250);
            sum = sum - 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D21').click(function() {
            $buttonD21.css('display', 'block');
            const closeAnswerD21 = () => {
                $modal21.css('display', 'none');
            }
            setTimeout(closeAnswerD21, 1250);
            sum = sum + 100;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion21 = () => {
            $modal21.css('display', 'none');
          }
          setTimeout(closeQuestion21, 15000);
    }

    // Question Box 22 and access to 4 answers
    const openQuestion22 = () => {
        $modal22.css('display', 'block');
        $('#A22').click(function() {
            $buttonA22.css('display', 'block');
            const closeAnswerA22 = () => {
                $modal22.css('display', 'none');
            }
            setTimeout(closeAnswerA22, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B22').click(function() {
            $buttonB22.css('display', 'block');
            const closeAnswerB22 = () => {
                $modal22.css('display', 'none');
            }
            setTimeout(closeAnswerB22, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C22').click(function() {
            $buttonC22.css('display', 'block');
            const closeAnswerC22 = () => {
                $modal22.css('display', 'none');
            }
            setTimeout(closeAnswerC22, 1250);
            sum = sum + 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D22').click(function() {
            $buttonD22.css('display', 'block');
            const closeAnswerD22 = () => {
                $modal22.css('display', 'none');
            }
            setTimeout(closeAnswerD22, 1250);
            sum = sum - 200;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion22 = () => {
            $modal22.css('display', 'none');
          }
          setTimeout(closeQuestion22, 15000);
    }

    // Question Box 23 and access to 4 answers
    const openQuestion23 = () => {
        $modal23.css('display', 'block');
        $('#A23').click(function() {
            $buttonA23.css('display', 'block');
            const closeAnswerA23 = () => {
                $modal23.css('display', 'none');
            }
            setTimeout(closeAnswerA23, 1250);
            sum = sum + 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B23').click(function() {
            $buttonB23.css('display', 'block');
            const closeAnswerB23 = () => {
                $modal23.css('display', 'none');
            }
            setTimeout(closeAnswerB23, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C23').click(function() {
            $buttonC23.css('display', 'block');
            const closeAnswerC23 = () => {
                $modal23.css('display', 'none');
            }
            setTimeout(closeAnswerC23, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D23').click(function() {
            $buttonD23.css('display', 'block');
            const closeAnswerD23 = () => {
                $modal23.css('display', 'none');
            }
            setTimeout(closeAnswerD23, 1250);
            sum = sum - 300;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion23 = () => {
            $modal23.css('display', 'none');
          }
          setTimeout(closeQuestion23, 15000);
    }

    // Question Box 24 and access to 4 answers
    const openQuestion24 = () => {
        $modal24.css('display', 'block');
        $('#A24').click(function() {
            $buttonA24.css('display', 'block');
            const closeAnswerA24 = () => {
                $modal24.css('display', 'none');
            }
            setTimeout(closeAnswerA24, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B24').click(function() {
            $buttonB24.css('display', 'block');
            const closeAnswerB24 = () => {
                $modal24.css('display', 'none');
            }
            setTimeout(closeAnswerB24, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C24').click(function() {
            $buttonC24.css('display', 'block');
            const closeAnswerC24 = () => {
                $modal24.css('display', 'none');
            }
            setTimeout(closeAnswerC24, 1250);
            sum = sum - 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D24').click(function() {
            $buttonD24.css('display', 'block');
            const closeAnswerD24 = () => {
                $modal24.css('display', 'none');
            }
            setTimeout(closeAnswerD24, 1250);
            sum = sum + 400;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion24 = () => {
            $modal24.css('display', 'none');
          }
          setTimeout(closeQuestion24, 15000);
    }

    // Question Box 25 and access to 4 answers
    const openQuestion25 = () => {
        $modal25.css('display', 'block');
        $('#A25').click(function() {
            $buttonA25.css('display', 'block');
            const closeAnswerA25 = () => {
                $modal25.css('display', 'none');
            }
            setTimeout(closeAnswerA25, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#B25').click(function() {
            $buttonB25.css('display', 'block');
            const closeAnswerB25 = () => {
                $modal25.css('display', 'none');
            }
            setTimeout(closeAnswerB25, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#C25').click(function() {
            $buttonC25.css('display', 'block');
            const closeAnswerC25 = () => {
                $modal25.css('display', 'none');
            }
            setTimeout(closeAnswerC25, 1250);
            sum = sum + 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        $('#D25').click(function() {
            $buttonD25.css('display', 'block');
            const closeAnswerD25 = () => {
                $modal25.css('display', 'none');
            }
            setTimeout(closeAnswerD25, 1250);
            sum = sum - 500;
              $('#score').html("Your Score: " + sum + " Points");
        });
        const closeQuestion25 = () => {
            $modal25.css('display', 'none');
          }
          setTimeout(closeQuestion25, 15000);
     
    }


    // const giveFinalScore = () => {
    //     $modal26.css('display', 'block')
        // if('#score' >= 5500){
        //     alert ('Game Over! You\'re a genius! Your Final Score is: ' + sum)
        //   }else{
        //     alert ('Game Over! Your Final Score is: ' + sum)
        // }
    // }
    

    // if statement to end the game
    // if('#openQuestion1' === '.question-done'){
    //     if('#openQuestion2' === '.question-done'){
    //         if('#openQuestion3' === '.question-done') {
    //             if('#openQuestion4' === '.question-done'){
    //                 if('#openQuestion5' === '.question-done'){
    //                     if('#openQuestion6' === '.question-done'){
    //                         if('#openQuestion7' === '.question-done'){
    //                             if('#openQuestion8' === '.question-done'){
    //                                 if('#openQuestion9' === '.question-done'){
    //                                     if('#openQuestion10' === '.question-done'){
    //                                         if('#openQuestion11' === '.question-done'){
    //                                             if('#openQuestion12' === '.question-done'){
    //                                                 alert ('Game Over! Your Final Score is: ' + sum)
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // } 
    
    
    // if('#openQuestion1' === '.question-done' && '#openQuestion2' === '.question-done' && '#openQuestion3' === '.question-done' && '#openQuestion4' === '.question-done' && '#openQuestion5' === '.question-done' && '#openQuestion6' === '.question-done' && '#openQuestion7' === '.question-done' && '#openQuestion8' === '.question-done' && '#openQuestion9' === '.question-done' && '#openQuestion10' === '.question-done' && '#openQuestion11' === '.question-done' && '#openQuestion12' === '.question-done' && '#openQuestion13' === '.question-done' && '#openQuestion14' === '.question-done' && '#openQuestion15' === '.question-done' && '#openQuestion16' === '.question-done' && '#openQuestion17' === '.question-done' && '#openQuestion18' === '.question-done' && '#openQuestion19' === '.question-done' && '#openQuestion20' === '.question-done' && '#openQuestion21' === '.question-done' && '#openQuestion22' === '.question-done' && '#openQuestion23' === '.question-done' && '#openQuestion24' === '.question-done' && '#openQuestion25' === '.question-done'){
    //     alert ('Game Over! Your Final Score is: ' + sum)
    // }

    // these constants connect the modal buttons to the specific questions
    const $openButton1 = $('#openQuestion1');
    const $openButton2 = $('#openQuestion2');
    const $openButton3 = $('#openQuestion3');
    const $openButton4 = $('#openQuestion4');
    const $openButton5 = $('#openQuestion5');
    const $openButton6 = $('#openQuestion6');
    const $openButton7 = $('#openQuestion7');
    const $openButton8 = $('#openQuestion8');
    const $openButton9 = $('#openQuestion9');
    const $openButton10 = $('#openQuestion10');
    const $openButton11 = $('#openQuestion11');
    const $openButton12 = $('#openQuestion12');
    const $openButton13 = $('#openQuestion13');
    const $openButton14 = $('#openQuestion14');
    const $openButton15 = $('#openQuestion15');
    const $openButton16 = $('#openQuestion16');
    const $openButton17 = $('#openQuestion17');
    const $openButton18 = $('#openQuestion18');
    const $openButton19 = $('#openQuestion19');
    const $openButton20 = $('#openQuestion20');
    const $openButton21 = $('#openQuestion21');
    const $openButton22 = $('#openQuestion22');
    const $openButton23 = $('#openQuestion23');
    const $openButton24 = $('#openQuestion24');
    const $openButton25 = $('#openQuestion25');
    
    // these are the "modals" set up for each question
    const $modal1 = $('#question1');
    const $modal2 = $('#question2');
    const $modal3 = $('#question3');
    const $modal4 = $('#question4');
    const $modal5 = $('#question5');
    const $modal6 = $('#question6');
    const $modal7 = $('#question7');
    const $modal8 = $('#question8');
    const $modal9 = $('#question9');
    const $modal10 = $('#question10');
    const $modal11 = $('#question11');
    const $modal12 = $('#question12');
    const $modal13 = $('#question13');
    const $modal14 = $('#question14');
    const $modal15 = $('#question15');
    const $modal16 = $('#question16');
    const $modal17 = $('#question17');
    const $modal18 = $('#question18');
    const $modal19 = $('#question19');
    const $modal20 = $('#question20');
    const $modal21 = $('#question21');
    const $modal22 = $('#question22');
    const $modal23 = $('#question23');
    const $modal24 = $('#question24');
    const $modal25 = $('#question25');

    const $modal26 = $('#endGame');
    

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
    // Q6
    const $buttonA6 = $('#A6Answer');
    const $buttonB6 = $('#B6Answer');
    const $buttonC6 = $('#C6Answer');
    const $buttonD6 = $('#D6Answer');
    // Q7
    const $buttonA7 = $('#A7Answer');
    const $buttonB7 = $('#B7Answer');
    const $buttonC7 = $('#C7Answer');
    const $buttonD7 = $('#D7Answer');
    // Q8
    const $buttonA8 = $('#A8Answer');
    const $buttonB8 = $('#B8Answer');
    const $buttonC8 = $('#C8Answer');
    const $buttonD8 = $('#D8Answer');
    // Q9
    const $buttonA9 = $('#A9Answer');
    const $buttonB9 = $('#B9Answer');
    const $buttonC9 = $('#C9Answer');
    const $buttonD9 = $('#D9Answer');
    // Q10
    const $buttonA10 = $('#A10Answer');
    const $buttonB10 = $('#B10Answer');
    const $buttonC10 = $('#C10Answer');
    const $buttonD10 = $('#D10Answer');
    // Q11
    const $buttonA11 = $('#A11Answer');
    const $buttonB11= $('#B11Answer');
    const $buttonC11 = $('#C11Answer');
    const $buttonD11 = $('#D11Answer');
    // Q12
    const $buttonA12 = $('#A12Answer');
    const $buttonB12 = $('#B12Answer');
    const $buttonC12 = $('#C12Answer');
    const $buttonD12 = $('#D12Answer');
    // Q13
    const $buttonA13 = $('#A13Answer');
    const $buttonB13 = $('#B13Answer');
    const $buttonC13 = $('#C13Answer');
    const $buttonD13 = $('#D13Answer');
    // Q14
    const $buttonA14 = $('#A14Answer');
    const $buttonB14 = $('#B14Answer');
    const $buttonC14 = $('#C14Answer');
    const $buttonD14 = $('#D14Answer');
    // Q15
    const $buttonA15 = $('#A15Answer');
    const $buttonB15 = $('#B15Answer');
    const $buttonC15 = $('#C15Answer');
    const $buttonD15 = $('#D15Answer');
    // Q16
    const $buttonA16 = $('#A16Answer');
    const $buttonB16 = $('#B16Answer');
    const $buttonC16 = $('#C16Answer');
    const $buttonD16 = $('#D16Answer');
    // Q17
    const $buttonA17 = $('#A17Answer');
    const $buttonB17 = $('#B17Answer');
    const $buttonC17 = $('#C17Answer');
    const $buttonD17 = $('#D17Answer');
    // Q18
    const $buttonA18 = $('#A18Answer');
    const $buttonB18 = $('#B18Answer');
    const $buttonC18 = $('#C18Answer');
    const $buttonD18 = $('#D18Answer');
    // Q19
    const $buttonA19 = $('#A19Answer');
    const $buttonB19 = $('#B19Answer');
    const $buttonC19 = $('#C19Answer');
    const $buttonD19 = $('#D19Answer');
    // Q20
    const $buttonA20 = $('#A20Answer');
    const $buttonB20 = $('#B20Answer');
    const $buttonC20 = $('#C20Answer');
    const $buttonD20 = $('#D20Answer');
    // Q21
    const $buttonA21 = $('#A21Answer');
    const $buttonB21 = $('#B21Answer');
    const $buttonC21 = $('#C21Answer');
    const $buttonD21 = $('#D21Answer');
    // Q22
    const $buttonA22 = $('#A22Answer');
    const $buttonB22 = $('#B22Answer');
    const $buttonC22 = $('#C22Answer');
    const $buttonD22 = $('#D22Answer');
    // Q23
    const $buttonA23 = $('#A23Answer');
    const $buttonB23 = $('#B23Answer');
    const $buttonC23 = $('#C23Answer');
    const $buttonD23 = $('#D23Answer');
    // Q24
    const $buttonA24 = $('#A24Answer');
    const $buttonB24 = $('#B24Answer');
    const $buttonC24 = $('#C24Answer');
    const $buttonD24 = $('#D24Answer');
    // Q25
    const $buttonA25 = $('#A25Answer');
    const $buttonB25 = $('#B25Answer');
    const $buttonC25 = $('#C25Answer');
    const $buttonD25 = $('#D25Answer');

    // these are the event listeners for opening each question modal
    $openButton1.one('click', openQuestion1);
    $openButton2.one('click', openQuestion2);
    $openButton3.one('click', openQuestion3);
    $openButton4.one('click', openQuestion4);
    $openButton5.one('click', openQuestion5);
    $openButton6.one('click', openQuestion6);
    $openButton7.one('click', openQuestion7);
    $openButton8.one('click', openQuestion8);
    $openButton9.one('click', openQuestion9);
    $openButton10.one('click', openQuestion10);
    $openButton11.one('click', openQuestion11);
    $openButton12.one('click', openQuestion12);
    $openButton13.one('click', openQuestion13);
    $openButton14.one('click', openQuestion14);
    $openButton15.one('click', openQuestion15);
    $openButton16.one('click', openQuestion16);
    $openButton17.one('click', openQuestion17);
    $openButton18.one('click', openQuestion18);
    $openButton19.one('click', openQuestion19);
    $openButton20.one('click', openQuestion20);
    $openButton21.one('click', openQuestion21);
    $openButton22.one('click', openQuestion22);
    $openButton23.one('click', openQuestion23);
    $openButton24.one('click', openQuestion24);
    $openButton25.one('click', openQuestion25);

    // these are the event listeners for each answer button
    // $buttonA1.on('click', openAnswer1);
    // $buttonB1.on('click', openAnswer2);
    // $buttonC1.on('click', openAnswer3);
    // $buttonD1.on('click', openAnswer4);



    // this will tell us exactly where we've clicked on the page
    const $crossOutQuestion1 = $('#openQuestion1').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
        
        console.log(event);
        console.log(event.currentTarget);
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
    const $crossOutQuestion6 = $('#openQuestion6').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion7 = $('#openQuestion7').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion8 = $('#openQuestion8').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion9 = $('#openQuestion9').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion10 = $('#openQuestion10').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion11 = $('#openQuestion11').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion12 = $('#openQuestion12').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion13 = $('#openQuestion13').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion14 = $('#openQuestion14').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion15 = $('#openQuestion15').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion16 = $('#openQuestion16').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion17 = $('#openQuestion17').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion18 = $('#openQuestion18').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion19 = $('#openQuestion19').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion20 = $('#openQuestion20').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion21 = $('#openQuestion21').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion22 = $('#openQuestion22').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion23 = $('#openQuestion23').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion24 = $('#openQuestion24').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })
    const $crossOutQuestion25 = $('#openQuestion25').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-done');
    })

    $crossOutQuestion1
    $crossOutQuestion2
    $crossOutQuestion3
    $crossOutQuestion4
    $crossOutQuestion5
    $crossOutQuestion6
    $crossOutQuestion7
    $crossOutQuestion8
    $crossOutQuestion9
    $crossOutQuestion10
    $crossOutQuestion11
    $crossOutQuestion12
    $crossOutQuestion13
    $crossOutQuestion14
    $crossOutQuestion15
    $crossOutQuestion16
    $crossOutQuestion17
    $crossOutQuestion18
    $crossOutQuestion19
    $crossOutQuestion20
    $crossOutQuestion21
    $crossOutQuestion22
    $crossOutQuestion23
    $crossOutQuestion24
    $crossOutQuestion25

})