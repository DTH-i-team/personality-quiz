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

    "title": "What kind of spring breaker were you?",
    "description": "Now that we have all reluctantly returned to the realities of college, memories are all that we have left of spring break. What kind of spring breaker were you in your short week off? Did you catch up on sleep or did you have a movie worthy experience?",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "Sprang Break Foreva",
        "description": "You are the James Franco of UNC. You experienced spring break straight out of a Hollywood film. Congrats to you, and good luck with the next six weeks.",
        "img": "http://pedestriantv-prod.s3.amazonaws.com/images%2Farticle%2F2013%2F11%2F02%2Ftumblr_mk1ixdsRgL1rw5yn2o2_500.gif",
	   "source": "Source: junkee.com",
        },

        /* Result 2 */
        {
        "title": "#Indie #Alternative",
        "description": "Your spring break could have been made into a coming-of-age film about a young and enthusiastic group of friends. You spent time with the people who are important to you and you had the time you needed to regroup before knocking the remainder of the semester out of the park.",
        "img": "https://36.media.tumblr.com/c357c9e5bd70e6b521b3e921c3a7c89e/tumblr_o113ytqHAr1v4i1c6o1_500.jpg",
	    "source": "Source: tumblr.com",
        },

        /*  Result 3 */
        {
        "title": "World Traveler",
        "description": "You are adventurous, my friend. Your break was unique and unlike anyone else's. You learned a lot and you experienced things. We are all jealous.",
        "img": "http://www.studiouniversal.co.za/sites/studiouniversal.co.za/files/styles/featured_lg_1x/public/movie/images/the-lizzie-mcguire-movie-2048x1152.jpg?itok=pln5Hibw",
	    "source": "Source: studiouniversal.co.za",
        },

        /*  Result 4 */
        {
        "title": "Hibernator",
        "description": "Your break was a much needed time of relaxation. You are smarter than most and used your time off to give your brain a break. You enjoyed time with your family and you are going to skip through the remainder of the semester, as you deserve.",
        "img": "http://img.timeinc.net/time/daily/2011/1102/360_hibernation_space_0216.jpg",
	    "source": "Source: content.time.com",
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
       {"question": "Where did you spend the majority of your break?",
         "answers": [
             {
                "text": "On the beach",
                "result": 1
             },

             {
                "text": "At home with the fam",
                "result": 4
             },

             {
                "text": "In the car, roadtrippin'",
                "result": 2
             },

		     {
                "text": "Out of the country",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]

        },  /* Stop copying right BEFORE this instruction */



        /*This section is for a question with image answer choices*/

        /* Start copying right AFTER this instruction */


        /* Paste the rest of the questions beneath this instruction */

        {"question": "How many beverages did you consume daily, on average?",
         "answers": [
             {
                "text": "A couple",
                "result": 3
             },

             {
                "text": "I literally do not know",
                "result": 1
             },

             {
                "text": "Zero",
                "result": 4
             },

		     {
                "text": "Please specify what you mean by 'beverages'",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },
{"question": "Who did you spend the most time with over break?",
         "answers": [
             {
                "text": "My best pals",
                "result": 2
             },

             {
                "text": "Strangers",
                "result": 3
             },

             {
                "text": "My momma",
                "result": 4
             },

		     {
                "text": "My cool new friends",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },
{"question": "Which song is the most likely candidate for your spring break anthem?",
         "answers": [
             {
                "text": "'Price Tag' by Jessie J",
                "result": 3
             },

             {
                "text": "'My House' by Flo Rida",
                "result": 4
             },

             {
                "text": "'Shut Up + Dance' by Walk the Moon",
                "result": 2
             },

		     {
                "text": "'679' by Fetty Wap",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },
{"question": "How prepared are you for the remainder of the semester?",
         "answers": [
             {
                "text": "I just need a few deep breaths, but everything is going to be okay",
                "result": 2
             },

             {
                "text": "I sincerely apologize to my GPA",
                "result": 1
             },

             {
                "text": "A few late nights in the library will be required",
                "result": 3
             },

		     {
                "text": "Bring it on",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]

}



    ]
};
