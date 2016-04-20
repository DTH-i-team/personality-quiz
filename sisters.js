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

    "title": "Which sister from Sisterhood of the Traveling Pants are you?",
    "description": "This classic deserves to be watched over and over again (as I did this weekend). Take this quiz to find out which one of the vastly-different sisters you are!",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "Tibby",
        "description": "The edgy one of your friend group, you're definitely not afraid to be yourself. You might have a tough exterior, but we all know you really have a heart of gold. ",
        "img": "http://cdn.playbuzz.com/cdn/4688a78c-e1b3-4bd4-8a60-7ee8f0e1b8c2/0ff1ce91-e05b-4370-84cf-a0616a52a08d.jpg",
	   "source": "playbuzz.com",
        },

        /* Result 2 */
        {
        "title": "Bridget",
        "description": "You're super confident and know exactly what you want. Sometimes you run away from your emotions (literally) but you're always there for the people you care about. ",
        "img": "http://coolspotters.com/files/photos/364306/sisterhood-of-the-traveling-pants-gallery.jpg?1357475886",
	    "source": "coolspotters.com",
        },

        /*  Result 3 */
        {
        "title": "Lena",
        "description": "You might be modest and shy, but your heart is capable of loving fiercely. You're just waiting on the right person to open up to.",
        "img": "http://www.geocities.ws/hi5sofrzdog/lookuplena.jpg",
	    "source": "geocities",
        },

        /*  Result 4 */
        {
        "title": "Carmen",
        "description": "You love intensely and fight for what you want. You're really smart and you're not afraid to show people how you feel. You are a great friend who really understands other people.",
        "img": "https://s-media-cache-ak0.pinimg.com/564x/2f/f8/25/2ff82581071ce664a449079fc02aa4c6.jpg",
	    "source": "pinterest.com",
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
       {"question": "What's your favorite hobby?",
         "answers": [
             {
                "text": "Exercise",
                "result": 2
             },

             {
                "text": "Studying",
                "result": 4
             },

             {
                "text": "Anything on the computer",
                "result": 1
             },

		     {
                "text": "Drawing",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
	/* Stop copying right BEFORE this instruction. Include the } and comma */




        /* Paste the rest of the questions beneath this instruction */


     {"question": "What do you want most in life?",
         "answers": [
             {
                "text": "To learn how to open up to other people",
                "result": 3
             },

             {
                "text": "To gain the approval of my family",
                "result": 4
             },

             {
                "text": "To learn about other people and what they care about",
                "result": 1
             },

		     {
                "text": "To prove myself",
                "result": 2
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
        {"question": "Where do you want to spend the summer?",
        "answers" : [
             {
                "text": "With my family!",
                "result": 4
             },

             {
                "text": "Anything involving exercise and boys",
                "result": 2
             },

             {
                "text": "Not at home, but I have to anyway",
                "result": 1
             },

		     {
                "text": "An exotic foreign country",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
        {"question": "Which member of your friend group are you?",
         "answers": [
             {
                "text": "The shy one",
                "result": 3
             },

             {
                "text": "The smart one",
                "result": 4
             },

             {
                "text": "The pretty one",
                "result": 2
             },

		     {
                "text": "The weird one",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
{"question": "When something bad happens, how do you respond?",
         "answers": [
             {
                "text": "Talk it out",
                "result": 3
             },

             {
                "text": "Throw a rock",
                "result": 4
             },

             {
                "text": "Shut down",
                "result": 2
             },

		     {
                "text": "Pretend like I don't care",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },






    ]
};
