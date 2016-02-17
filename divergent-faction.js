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

    "title": "What divergent faction are you in based on your reaction to the d00k game?",
    "description": "To be honest, I’m studying.",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "Erudite",
        "description": "You're probably studying during the game, but that's OK because you'll ace that midterm your professor decided to schedule for the very next day.",
        "img": "http://cdn.movieweb.com/img.news.tops/NEML6N6Qt2HAQM_1_a.jpg",
	       "source": "Source: movieweb.com",
        },

        /* Result 2 */
        {
        "title": "DAUNTLESS",
        "description": "You are fearless and will probably live tweet the game in all caps. You'll be the first to rush Franklin and the last to go home.",
        "img": "https://s-media-cache-ak0.pinimg.com/564x/b2/45/0c/b2450cc171cbcdc31d9b3830934c665d.jpg",
	    "source": "Source: Pinterest",
        },

        /*  Result 3 */
        {
        "title": "Abnegation",
        "description": "You're excited for the game, as long as everyone is having fun. You're going to try your hardest to include everyone, even d00k.",
        "img": "https://latimesherocomplex.files.wordpress.com/2014/01/divergent19.jpg",
	    "source": "Source: herocomplex.latimes.com",
        },

        /*  Result 4 */
        {
        "title": "Amity",
        "description": "You are the peacekeeper. You abstain from trash talking the other team and you want to enjoy the game in the comfort of your own home.",
        "img": "http://filmreviewonline.com/wp-content/uploads/2015/03/Divergent-Insurgent-008.jpg",
	    "source": "Source: filmreviewonline.com",
        },


	{
        "title": “To be honest, you’re candor.“,
        "description": "You’re honest, like really honest. Some may think you’re blunt, but you’ll be the first to point out a bad call.",
        "img": "http://cdn.playbuzz.com/cdn/7e31a66f-43e7-49b0-ba96-235930654b69/279a9377-5161-4abb-8502-573df586cb3d.jpg.",
	    "source": "Source: playbuzz.com",
        },


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
       {"question": "Where do you watch the game?",
         "answers": [
             {
                "text": "I don't, I have to study",
                "result": 1
             },

             {
                "text": "DEAN DOME",
                "result": 2
             },

             {
                "text": "With my friends; I'll let them pick the location",
                "result": 3
             },

		     {
                "text": "To be honest, I don't have a preference",
                "result": 5
             },

]
},
              {"question": "Who do you watch the game with?",
         "answers": [
             {
                "text": "I'm studying",
                "result": 1
             },

             {
                "text": "All of my friends",
                "result": 2
             },

             {
                "text": "I'll watch with anyone; everyone is invited!",
                "result": 3
             },

		     {
                "text": "To be honest, I'll watch the game by myself",
                "result": 5
             },

           ]
         },




              {"question": "Will you rush Franklin after we win?",
         "answers": [
             {
                "text": "I'M STUDYING. Besides, who says we're going to win?",
                "result": 1
             },

             {
                "text": "HEEL YES!",
                "result": 2
             },

             {
                "text": "Probably not, it seems dangerous",
                "result": 4
             },

		     {
                "text": "To be honest, no.",
                "result": 5
             },

]
},


              {"question": "How much do you hate d00k?",
         "answers": [
             {
                "text": "I don't have time to hate Duke, I have to study",
                "result": 1
             },

             {
                "text": "With every fiber of my being",
                "result": 2
             },

             {
                "text": "I don't like the word 'hate'",
                "result": 4
             },

		     {
                "text": "To be honest, a lot.",
                "result": 5
             },
]
},


              {"question": "On a scale of one to ten, how excited are you for the game?",
         "answers": [
             {
                "text": "If I wasn't studying, four",
                "result": 1
             },

             {
                "text": "ELEVEN",
                "result": 2
             },

             {
                "text": "A safe eight",
                "result": 4
             },

		     {
                "text": "To be honest, a lot",
                "result": 5
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  /* Stop copying right BEFORE this instruction */



        /*This section is for a question with image answer choices*/



             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */


        /* Paste the rest of the questions beneath this instruction */

]
};
