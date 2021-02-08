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

    // these functions display each modal button when it is clicked
    const openQuestion1 = () => {
        $modal1.css('display', 'block');
    }
    const openQuestion2 = () => {
        $modal2.css('display', 'block');
    }
    const openQuestion3 = () => {
        $modal3.css('display', 'block');
    }
    const openQuestion4 = () => {
        $modal4.css('display', 'block');
    }
    const openQuestion5 = () => {
        $modal5.css('display', 'block');
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
        $button1A.css('display', 'block');
    }
    const openAnswer2 = () => {
        $button1B.css('display', 'block');
    }
    const openAnswer3 = () => {
        $button1C.css('display', 'block');
    }
    const openAnswer4 = () => {
        $button1D.css('display', 'block');
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
    
    const $button1A = $('#A1Answer');
    const $button1B = $('#B1Answer');
    const $button1C = $('#C1Answer');
    const $button1D = $('#D1Answer');

    // these are the event listeners for opening each modal
    $openButton1.on('click', openQuestion1);
    $button1A.on('click', openAnswer1);
    $button1B.on('click', openAnswer2);
    $button1C.on('click', openAnswer3);
    $button1D.on('click', openAnswer4);
    $openButton2.on('click', openQuestion2);
    $openButton3.on('click', openQuestion3);
    $openButton4.on('click', openQuestion4);
    $openButton5.on('click', openQuestion5);
    $openButton6.on('click', openQuestion6);
    $openButton7.on('click', openQuestion7);
    $openButton8.on('click', openQuestion8);
    $openButton9.on('click', openQuestion9);
    $openButton10.on('click', openQuestion10);
    $openButton11.on('click', openQuestion11);
    $openButton12.on('click', openQuestion12);
    $openButton13.on('click', openQuestion13);
    $openButton14.on('click', openQuestion14);
    $openButton15.on('click', openQuestion15);
    $openButton16.on('click', openQuestion16);
    $openButton17.on('click', openQuestion17);
    $openButton18.on('click', openQuestion18);
    $openButton19.on('click', openQuestion19);
    $openButton20.on('click', openQuestion20);
    $openButton21.on('click', openQuestion21);
    $openButton22.on('click', openQuestion22);
    $openButton23.on('click', openQuestion23);
    $openButton24.on('click', openQuestion24);
    $openButton25.on('click', openQuestion25);



    // this will tell us exactly where we've clicked on the page
    const $checkQuestions = $('.question').on('click', (event) => {
        
        // $(event.currentTarget).toggleClass('question-back');
        
        // console.log('clicked a question');
        console.log(event);
        console.log(event.currentTarget);
        // $(".question").hide();
        
        //argument here - playHand(event); - from card toggle example
    })

})