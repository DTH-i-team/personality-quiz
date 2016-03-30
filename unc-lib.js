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

    "title": "Quiz: which UNC library are you?",
    "description": "Are you more Davis or Wilson? Take this quiz to find out!",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "Wilson",
        "description": "You're an old soul, and you love to stick to tradition. You're one-of-a-kind, like the rare book collection!",
        "img": "https://upload.wikimedia.org/wikipedia/commons/e/eb/Louis_Round_Wilson_Library.JPG",
	   "source": "Source: Wikipedia",
        },

        /* Result 2 */
        {
        "title": "Davis",
        "description": "You're a social butterfly. You're never alone and you're always occupying a group study room!",
        "img": "http://library.unc.edu/wp-content/uploads/2015/05/davis.jpg",
	    "source": "Source: UNC Libraries",
        },

        /*  Result 3 */
        {
        "title": "Undergraduate Library",
        "description": "You're traditional and reliable, just like IT services in the basement of the UL. You can be loud at times, but you're there for your friends 24/7!",
        "img": "https://upload.wikimedia.org/wikipedia/commons/9/96/House_Undergraduate_Library_UNC-CH_2014-04-25.jpg",
	    "source": "Source: Wikimedia",
        },

        /*  Result 4 */
        {
        "title": "Health Sciences Library",
        "description": "You're overlooked at times, but people still love you. You're an A+ student and you're definitely an overachiever!",
        "img": "http://ourblog.web.unc.edu/files/2013/11/hsl.jpg",
	    "source": "Source: The Blog of the Office of Undergraduate Research",
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
       {"question": "When you go to the library, do you...",
         "answers": [
             {
                "text": "Study",
                "result":4
             },

             {
                "text": "Watch Netflix",
                "result": 2
             },

             {
                "text": "Read",
                "result": 1
             },

		     {
                "text": "Sleep",
                "result": 3
             },
           ]
          },
{"question": "What is your spirit animal?",
         "answers": [
             {
                "text": "Honey Badger",
                "result": 3
             },

             {
                "text": "Wolf",
                "result": 2
             },

             {
                "text": "Campus Squirrel",
                "result": 1
             },

		     {
                "text": "Frog",
                "result": 4
             },
           ]
          },
{"question": "Who is going to win the NCAA Championship?",
         "answers": [
             {
                "text": "UNC",
                "result": 2
             },

             {
                "text": "Oklahoma",
                "result": 4
             },

             {
                "text": "Syracuse",
                "result": 3
             },

		     {
                "text": "Villanova",
                "result": 1
             },
           ]
          },
{"question": "How do you take notes in class?",
         "answers": [
             {
                "text": "I don't.",
                "result": 2
             },

             {
                "text": "I type them.",
                "result": 3
             },

             {
                "text": "I write them.",
                "result": 1
             },

		     {
                "text": "I write them, then type them later.",
                "result": 4
             },
           ]
          },
{"question": "Which Hogwarts house are you in?",
         "answers": [
             {
                "text": "Gryffindor",
                "result":2
             },

             {
                "text": "Hufflepuff",
                "result": 3
             },

             {
                "text": "Ravenclaw",
                "result": 4
             },

		     {
                "text": "Slytherin",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        } /* Stop copying right BEFORE this instruction */



        /*This section is for a question with image answer choices*/


        /* Paste the rest of the questions beneath this instruction */







    ]
};
