console.log('hello world');

/*
- user sees grid of options (5 categories (across top), each with 5 Qs in vertical column)
    -- use table to design?

- when user clicks on a Q, it toggles the card to the other side and reveals the Q & 4 options of answers for the user to see
    -- try to make the Q card take up the screen so the user can read it
    -- add a timer so the user doesn't have unlimited time to choose answer
    -- if user clicks correct answer, display 'correct!'
    -- if user clicks incorrect answer, display 'incorrect!'
    -- make that card un-clickable now

- add a "final jeopardy" bar at the bottom
    -- add a timer to this so that the final jeopardy question automatically triggers after 5-minutes



*/

$(() => {

    // these functions display each modal button when it is clicked, allows the answers to be clicked, and gives a time limit for how long each modal is open
    const openQuestion1 = () => {
        $modal1.css('display', 'block');
        // .on('click', (e) => {
        //     $(e.currentTarget).hide();
        // });
        $('#A1').click(function() {
            $buttonA1.css('display', 'block');
            const closeAnswerA1 = () => {
                $modal1.css('display', 'none');
              }
            setTimeout(closeAnswerA1, 3000);
        });
        $('#B1').click(function() {
            $buttonB1.css('display', 'block');
            const closeAnswerB1 = () => {
                $modal1.css('display', 'none');
              }
              setTimeout(closeAnswerB1, 3000);
        });
        $('#C1').click(function() {
            $buttonC1.css('display', 'block');
            const closeAnswerC1 = () => {
                $modal1.css('display', 'none');
              }
              setTimeout(closeAnswerC1, 3000);
        });
        $('#D1').click(function() {
            $buttonD1.css('display', 'block');
            const closeAnswerD1 = () => {
                $modal1.css('display', 'none');
              }
              setTimeout(closeAnswerD1, 3000);
        });
        const closeQuestion1 = () => {
            $modal1.css('display', 'none');
            // $(currentTarget).toggleClass('.question1Fin');
          }
          setTimeout(closeQuestion1, 15000);
    }

    const openQuestion2 = () => {
        $modal2.css('display', 'block');
        $('#A2').click(function() {
            $buttonA2.css('display', 'block');
            const closeAnswerA2 = () => {
                $modal2.css('display', 'none');
            }
            setTimeout(closeAnswerA2, 3000);
        });
        $('#B2').click(function() {
            $buttonB2.css('display', 'block');
            const closeAnswerB2 = () => {
                $modal2.css('display', 'none');
            }
            setTimeout(closeAnswerB2, 3000);
        });
        const closeQuestion2 = () => {
            $modal2.css('display', 'none');
          }
          setTimeout(closeQuestion2, 15000);
    }

    const openQuestion3 = () => {
        $modal3.css('display', 'block');
        $('#A3').click(function() {
            $buttonA1.css('display', 'block');
        });
        const closeQuestion3 = () => {
            $modal1.css('display', 'none');
          }
          setTimeout(closeQuestion3, 15000);
    }

    const openQuestion4 = () => {
        $modal4.css('display', 'block');
        $('#A4').click(function() {
            $buttonA1.css('display', 'block');
        });
        const closeQuestion4 = () => {
            $modal1.css('display', 'none');
          }
          setTimeout(closeQuestion4, 15000);
    }

    const openQuestion5 = () => {
        $modal5.css('display', 'block');
        const closeQuestion5 = () => {
            $modal1.css('display', 'none');
          }
          setTimeout(closeQuestion5, 15000);
    }
    const openQuestion6 = () => {
        $modal6.css('display', 'block');
    }
    const openQuestion7 = () => {
        $modal7.css('display', 'block');
    }
    const openQuestion8 = () => {
        $modal8.css('display', 'block');
    }
    const openQuestion9 = () => {
        $modal9.css('display', 'block');
    }
    const openQuestion10 = () => {
        $modal10.css('display', 'block');
    }
    const openQuestion11 = () => {
        $modal11.css('display', 'block');
    }
    const openQuestion12 = () => {
        $modal12.css('display', 'block');
    }
    const openQuestion13 = () => {
        $modal13.css('display', 'block');
    }
    const openQuestion14 = () => {
        $modal14.css('display', 'block');
    }
    const openQuestion15 = () => {
        $modal15.css('display', 'block');
    }
    const openQuestion16 = () => {
        $modal16.css('display', 'block');
    }
    const openQuestion17 = () => {
        $modal17.css('display', 'block');
    }
    const openQuestion18 = () => {
        $modal18.css('display', 'block');
    }
    const openQuestion19 = () => {
        $modal19.css('display', 'block');
    }
    const openQuestion20 = () => {
        $modal20.css('display', 'block');
    }
    const openQuestion21 = () => {
        $modal21.css('display', 'block');
    }
    const openQuestion22 = () => {
        $modal22.css('display', 'block');
    }
    const openQuestion23 = () => {
        $modal23.css('display', 'block');
    }
    const openQuestion24 = () => {
        $modal24.css('display', 'block');
    }
    const openQuestion25 = () => {
        $modal25.css('display', 'block');
    }


    const openAnswer1 = () => {
        $buttonA1.css('display', 'block');
    }
    const openAnswer2 = () => {
        $buttonB1.css('display', 'block');
    }
    const openAnswer3 = () => {
        $buttonC1.css('display', 'block');
    }
    const openAnswer4 = () => {
        $buttonD1.css('display', 'block');
    }
    // const openAnswer5 = () => {
    //     $modal5.css('display', 'block');
    // }
    // const openAnswer6 = () => {
    //     $modal6.css('display', 'block');
    // }
    // const openAnswer7 = () => {
    //     $modal7.css('display', 'block');
    // }
    // const openAnswer8 = () => {
    //     $modal8.css('display', 'block');
    // }
    // const openAnswer9 = () => {
    //     $modal9.css('display', 'block');
    // }
    // const openAnswer10 = () => {
    //     $modal10.css('display', 'block');
    // }
    // const openAnswer11 = () => {
    //     $modal11.css('display', 'block');
    // }
    // const openAnswer12 = () => {
    //     $modal12.css('display', 'block');
    // }
    // const openAnswer13 = () => {
    //     $modal13.css('display', 'block');
    // }
    // const openAnswer14 = () => {
    //     $modal14.css('display', 'block');
    // }
    // const openAnswer15 = () => {
    //     $modal15.css('display', 'block');
    // }
    // const openAnswer16 = () => {
    //     $modal16.css('display', 'block');
    // }
    // const openAnswer17 = () => {
    //     $modal17.css('display', 'block');
    // }
    // const openAnswer18 = () => {
    //     $modal18.css('display', 'block');
    // }
    // const openAnswer19 = () => {
    //     $modal19.css('display', 'block');
    // }
    // const oopenAnswer20 = () => {
    //     $modal20.css('display', 'block');
    // }
    // const openAnswer21 = () => {
    //     $modal21.css('display', 'block');
    // }
    // const openAnswer22 = () => {
    //     $modal22.css('display', 'block');
    // }
    // const openAnswer23 = () => {
    //     $modal23.css('display', 'block');
    // }
    // const openAnswer24 = () => {
    //     $modal24.css('display', 'block');
    // }
    // const openAnswer25 = () => {
    //     $modal25.css('display', 'block');
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
    

    // these are the event listeners for each answer for all questions
    const $buttonA1 = $('#A1Answer');
    const $buttonB1 = $('#B1Answer');
    const $buttonC1 = $('#C1Answer');
    const $buttonD1 = $('#D1Answer');
    const $buttonA2 = $('#A2Answer');
    const $buttonB2 = $('#B2Answer');
    const $buttonA3 = $('#A3Answer');
    const $buttonB3 = $('#B3Answer');
    const $buttonC3 = $('#C3Answer');
    const $buttonD3 = $('#D3Answer');
    const $buttonA4 = $('#A4Answer');
    const $buttonB4 = $('#B4Answer');
    const $buttonC4 = $('#C4Answer');
    const $buttonD4 = $('#D4Answer');
    const $buttonA5 = $('#A5Answer');
    const $buttonB5 = $('#B5Answer');
    const $buttonC5 = $('#C5Answer');
    const $buttonD5 = $('#D5Answer');
    const $buttonA6 = $('#A6Answer');
    const $buttonB6 = $('#B6Answer');
    const $buttonC6 = $('#C6Answer');
    const $buttonD6 = $('#D6Answer');

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
    const $crossOutQuestion1 = $('.question').on('click', (event) => {
        $(event.currentTarget).toggleClass('question-back');
        
        // console.log('clicked a question');
        console.log(event);
        console.log(event.currentTarget);
        // $(".question").hide();
        
        //argument here - playHand(event); - from card toggle example
    })

})