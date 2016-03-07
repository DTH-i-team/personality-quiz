quiz_data = {

    /*
     This section is the title and description for the whole quiz.
     It'll be shown at the top of the quiz page.
     Write in your own title and description.
     MAKE SURE to keep the quotes at the beginning and end,
     and keep the comma at the end of the line.
    */

    "title": "Which Season 4 House of Cards Presidential candidate are you?",
    "description": "The March 4th release of season 4 of House of Cards has led to a marathon of binge watching episodes this past weekend. With many new faces amongst the characters, it has been a suspenseful season to figure out who will be the Democratic and Republican nominees. Take this quiz to determine which possible Presidential candidate you are most like. DISCLAIMER: Potential spoilers if you have not watched season 4.",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "Frank Underwood",
        "description": "You are cunning, ruthless, and will stop at nothing to be the President of The United States. Even if it means killing a person (or two). Even on the verge of dying, you make a comeback and resume your position at the top. You wield power and always have a strategy to make sure you prevail, and of course, the audience’s favorite.",
        "img": "http://www.batched.com/wp-content/uploads/2015/03/Kevin-Spacey-in-House-of-Cards-Season-2-Chapter-26.jpg",
	   "source": "Source: Batched.com",
        },

        /* Result 2 */
        {
        "title": "Heather Dunbar",
        "description": "You pride yourself on your integrity, and want to stray away from the political corruptness of the past. You don't let other candidates intimidate you, or prevent you from succeeding. In the end, you fall short, but at least you do so with dignity.",
        "img": "https://pbs.twimg.com/profile_images/572236576541794304/Zpb41ivm_400x400.png",
	    "source": "Source: Twitter",
        },

        /*  Result 3 */
        {
        "title": "Will Conway",
        "description": "You're young and new to the game, but this is no disadvantage. You're fresh ideas and clever usage of resources help you manipulate others and increase your strength as a candidate. The people love you, and you are not going to go down without a fight.",
        "img": "http://lovelace-media.imgix.net/uploads/1163/dd187020-c488-0133-bf45-0e694d25c22d.jpeg?w=684&h=513&fit=crop&crop=faces&auto=format&q=70",
	    "source": "Source: Bustle.com",
        },

        /*  Result 4 */
        {
        "title": "Cathy Durant",
        "description": "In a surprise plot twist, you know how to manipulate others who have turned their backs on you, and make them wish they never had. When things don't go your way, you know just how to play things to make sure you get what you want. Although you won't be the President this election, there is no telling what could happen in future election campaigns.",
        "img": "http://tulane.edu/news/newwave/images/House-of-Cards_730.jpg",
	    "source": "Source: Tulane.edu",
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
       {"question": "What's your ideal job?",
         "answers": [
             {
                "text": "President",
                "result": 1
             },

             {
                "text": "Supreme Court Justice",
                "result": 2
             },

             {
                "text": "Secretary of State",
                "result": 3
             },

		     {
                "text": "Joint Chiefs of Staff",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]

        },  /* Stop copying right BEFORE this instruction */






        /* Paste the rest of the questions beneath this instruction */

        {"question": "Would you kill someone that is an imminent threat to your success?",
         "answers": [
             {
                "text": "No, but I would find another way to make them disappear",
                "result": 3
             },

             {
                "text": "Absolutely not",
                "result": 2
             },

             {
                "text": "I would have someone else do it for me",
                "result": 4
             },

		     {
                "text": "Absolutely",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },


{"question": "What's your Greatest Weakness?",
         "answers": [
             {
                "text": "Inexperience?",
                "result": 4
             },

             {
                "text": "Honesty",
                "result": 2
             },

             {
                "text": "Pride",
                "result": 1
             },

		     {
                "text": "Loyalty",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },

{"question": "What's your greatest strength?",
         "answers": [
             {
                "text": "I am likable",
                "result": 3
             },

             {
                "text": "Timing",
                "result": 1
             },

             {
                "text": "Ingenuity",
                "result": 4
             },

		     {
                "text": "My clean record",
                "result": 2
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },

{"question": "What is your drink of choice?",
         "answers": [
             {
                "text": "Bourbon",
                "result": 1
             },

             {
                "text": "Wine",
                "result": 3
             },

             {
                "text": "Water",
                "result": 2
             },

		     {
                "text": "Beer",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },





    ]
};
