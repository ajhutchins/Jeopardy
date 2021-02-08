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

    const $checkQuestion = (e) => {
        
    }

    const $card = ('.card').on('click', (event) => {
        $(event.currentTarget).toggleClass('card-back');

        //argument here - playHand(event); - from card toggle example
    })

})