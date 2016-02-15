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

    "title": "Are you more Lenoir or Rams?",
    "description": "Everyone with a meal plan has a favorite based on their schedule and other preferences, but which dining hall matches your personality?",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {"title": "You're so Lenoir!",
        "description": "You go above and beyond expectations but only on certain days and hours, which can sometimes be inconvenient to those around you.",
        },

        /* Result 2 */
        {
        "title": "You're so Rams!",
        "description": "You’re a socialite who is always there for your friends when they need you.",
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
       {"question": "Which city would you live in?",
         "answers": [
             {
                "text": "New York City",
                "result": 2
             },

             {
                "text": "Paris",
                "result": 3
             },

             {
                "text": "Hong Kong",
                "result": 4
             },

		     {
                "text": "Chicago",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

        {"question": "Which fruit do you connect with spiritually?",
         "answers": [
             {
                "text": "Strawberry",
                "result": 3
             },

             {
                "text": "Apple",
                "result": 2
             },

             {
                "text": "Banana",
                "result": 1
             },

		     {
                "text": "Orange",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

        {"question": "At which UNC landmark would you have your wedding?",
         "answers": [
             {
                "text": "Old Well",
                "result": 1
             },

             {
                "text": "Wilson Library",
                "result": 4
             },

             {
                "text": "Bell Tower",
                "result": 2
             },

		     {
                "text": "The Pit",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

        {"question": "Where do you nap on campus besides your dorm room?",
         "answers": [
             {
                "text": "Davis Library",
                "result": 1
             },

             {
                "text": "In class",
                "result": 2
             },

             {
                "text": "Graham Memorial Hall",
                "result": 3
             },

		     {
                "text": "The quad",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

        {"question": "If you were a song, which would you be?",
         "answers": [
             {
                "text": "Hello by Adele",
                "result": 2
             },

             {
                "text": "Sorry by Justin Bieber",
                "result": 1
             },

             {
                "text": "Stressed Out by twenty one pilots",
                "result": 4
             },

		     {
                "text": "Pillowtalk by Zayn",
                "result": 3
             },


]
},





    ]
};
