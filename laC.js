/*

    INSTRUCTIONS:

    This template will be processed by a computer program,
    so formatting is VERY important.

    Make sure not to delete or switch around any quotes, commas, colons,
    parentheses, or brackets.

    Do not start new lines (i.e. type Enter) inside a set of double-quotes.
    Only start new lines when copying-pasting or on a blank line.

    Anything inside these symbols:
    / *      * /
    is an instruction. Do not write any quiz information there
    because the program won't look at it.

*/



quiz_data = {

    /*
     This section is the title and description for the whole quiz.
     It'll be shown at the top of the quiz page.
     Write in your own title and description.
     MAKE SURE to keep the quotes at the beginning and end,
     and keep the comma at the end of the line.
    */

    "title": "Quiz: What flavor of La Croix are you?",
    "description": "La Croix: the drink that is all of a sudden sweeping the nation. The sparkling water beverage is advertised as being 100% natural, calorie-free and sugar-free. While it is especially popular with the college crowd and mothers across the board, it appears to be the drink everyone is sipping on. Several Instagram accounts have surfaced resulting from the La Croix phenomena including @lacroixsoverboys, @peopleoflacroix, @hotguysdrinkinglacroix, and @lacroixdoingthings to name a few. Is your thirst for La Croix real? Quench your thirst with this quiz to find out which flavor you are.",


    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "Lime",
        "description": "You're a crowd favorite and well-liked by everyone. You're refreshing, easy to get along with, and an OG La Croix fanatic. ",
        "img": "http://www.lacroixwater.com/wp-content/uploads/2014/08/LAC-Flavor-Detail-Images-LIME-330X310.png",
  "source": "Lacroixwater.com",
        },

        /* Result 2 */
        {
        "title": "Pamplemousse",
        "description": "Fresh, fun and unique. Pamplemousse (AKA Grapefruit) is a popular flavor for sure and the hot topic of conversation. Always front and center and highly coveted by others.",
        "img": "http://www.lacroixwater.com/wp-content/uploads/2014/08/LAC-Flavor-Detail-Images-Grapefruit-330X310.png",
   "source": "Lacroixwater.com",
        },

        /*  Result 3 */
        {
        "title": "Passionfruit",
        "description": "You add a zest to life and pack a punch with your unique flavor. You bring a loud, fun persona to life just like the Passionfruit flavor.",
        "img": "http://www.lacroixwater.com/wp-content/uploads/2014/08/LAC-Flavor-Detail-Images-PassionFruit-330X310.png",
   "source": "Lacroixwater.com",
        },

        /*  Result 4 */
        {
        "title": "Coconut",
        "description": "You're an acquired taste, but always down for a good time. Kind of out there in the La Croix bunch, but the coconut La Croix lovers are die-hard fans.",
        "img": "http://www.lacroixwater.com/wp-content/uploads/2014/08/LAC-Flavor-Detail-Images-Coconut-330X310.png",
   "source": "Lacroixwater.com",
        },

        /*
        If you have more than 4 results, copy one of the above sections
        and paste it RIGHT AFTER the last one, BEFORE this instruction.
        Make sure to copy the whole thing
        from the opening bracket {  to the closing bracket  } and the comma.
        */
    ],


    /*
    This section is where all of the questions of the quiz will go.
    Each question will be shown in order,
    and each answer choice will be shown in order.

    In the "result" area below each answer choice,
    write the number of the result that this answer corresponds to.
    For example, if an answer is for Result 1, put a 1.

    There are two kinds of questions:
    questions with text answer choices and questions with image answer choices.
    The first section has text answers. The second section has image answers.
    For the rest of the questions, copy and paste whichever of the 2 you want.
    */

    "questions": [



        /* This section is for a question with text answer choices  */

       /* Start copying right AFTER this instruction */
       {"question": "What's your summer activity?",
         "answers": [
             {
                "text": "Lay out in a giant float in the pool",
                "result": 1
             },

             {
                "text": "Travel",
                "result": 2
             },

             {
                "text": "Hang out with friends",
                "result": 3
             },

    {
                "text": "Tan on the beach",
                "result": 4
             },
           ]
         },

       {"question": "Pick the word that best describes your personality",
         "answers": [
             {
                "text": "Spunky",
                "result": 3
             },

             {
                "text": "Well-rounded",
                "result": 1
             },

             {
                "text": "Fun",
                "result": 4
             },

    {
                "text": "Unique",
                "result": 2
             },
           ]
         },
       {"question": "Pick a color",
         "answers": [
             {
                "text": "Orange",
                "result": 2
             },

             {
                "text": "White",
                "result": 4
             },

             {
                "text": "Green",
                "result": 1
             },

    {
                "text": "Pink",
                "result": 3
             },
           ]
         },
       {"question": "What's your favorite season?",
         "answers": [
             {
                "text": "Summer",
                "result": 4
             },

             {
                "text": "Winter",
                "result": 3
             },

             {
                "text": "Spring",
                "result": 2
             },

    {
                "text": "Fall",
                "result": 1
             },
           ]
         },
       {"question": "Pick a dream vacation destination",
         "answers": [
             {
                "text": "France",
                "result": 2
             },

             {
                "text": "Brazil",
                "result": 3
             },

             {
                "text": "Florida",
                "result": 1
             },

    {
                "text": "Hawaii",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        }
/* Stop copying right BEFORE this instruction. Include the } and comma */



        /*This section is for a question with image answer choices*/

        /* Start copying right AFTER this instruction */

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -

        },
/* Stop copying right BEFORE this instruction. Include the } and comma */



        /* Paste the rest of the questions beneath this instruction */







    ]
};