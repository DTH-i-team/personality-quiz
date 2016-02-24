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

    "title": "Which sad Leonardo DiCaprio are you?",
    "description": "It's Oscar season and you know what that means- time to watch Leo fight back tears as someone else walks up on stage to take the award that should have been his.Take this quiz to find out which sad version of Leonardo DiCaprio you are.",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "2014 Oscars Leo",
        "description": "Sorry, but your performance as a cocaine snorting millionaire just didn't cut it. Still, you're not going to let everyone know how upset you are. You may not be a good enough actor to win an academy award, but at least you've got the skill to conceal the overwhelming pain of your sub-par career.",
        "img": "http://umlconnector.com/wp-content/uploads/AE-Sad-Leo.png",
	   "source": "Source: Umiconnector",
        },

        /* Result 2 */
        {
        "title": "Nickelodeon Leo",

        "description": "Maybe the Academy doesn't love you, but the kids do! I know you made that trophy case specifically to fit a tiny gold man, but it can be adjusted for a slime green blimp, right?  Look at it this way - if you can't make it in the film world, you can always guest star in a 'Drake and Josh' reboot.",
	       "img": "http://i.imgur.com/X7bGd5j.jpg",
	        "source": "Source: Imgur",
        },

        /*  Result 3 */
        {
        "title": "'Romeo and Juliet' Leo",
        "description": "Let it all out, buddy. Really, don't hold anything back. No Oscar AND dead girl friend? You're really getting hit from all sides. Maybe you should just go take a nap.",
        "img": "https://media.giphy.com/media/5WmyaeDDlmb1m/giphy-facebook_s.jpg",
	    "source": "Source: Giphy",
        },

        /*  Result 4 */
        {
        "title": "'Inception' Leo",
        "description": "You don't experience sadness the way most people do. You bear it stoically, in bitter and poignant silence while drinking scotch (neat, obviously) and hoisting a gun in the air. It might be dramatic, but who cares? You're in distress. Fortunately, you can always assume this is a just a dream, potentially within another dream. ",
        "img": "https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/6/5/1433499252736/5e8c8b16-537e-4bea-b824-776cc097a9f4-2060x1236.jpeg?w=620&q=85&auto=format&sharp=10&s=179095a20a18ae9c1ed98eb2cf793765",
	    "source": "The Guardian",
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
       {"question": "The luxury cruise liner you scammed your way onto is sinking - what do you do?",
         "answers": [
             {
                "text": "Try to make it onto a lifeboat",
                "result": 1
             },

             {
                "text": "Spend the last few minutes with the love of my life",
                "result": 3
             },

             {
                "text": "Elbow the women and children out of the way and steal a lifeboat all for myself",
                "result": 2
             },

		     {
                "text": "Accept your fate and sink slowly into the frigid water",
                "result": 4
             },

           ]
         },
{"question": "Who would you lose an Oscar to?",
         "answers": [
             {
                "text": "Matthew McConaughey",
                "result": 1
             },

             {
                "text": "Jamie Foxx",
                "result": 4
             },

             {
                "text": "Nicholas Cage",
                "result": 2
             },

		     {
                "text": "Shrek",
                "result": 3
             },

           ]
         },
{"question": "How would you describe yourself at parties?",
         "answers": [
             {
                "text": "I immediately find the quietest corner possible and stick to it",
                "result": 2
             },

             {
                "text": "I show up drunk and things escalate from there",
                "result": 3
             },

             {
                "text": "I'm the one who just hangs out with the dog",
                "result": 1
             },

		     {
                "text": "I stand on the balcony smoking an expensive cigar, gazing down at the masses and meditating on my past",
                "result": 4
          },

        ]
      },
{"question": "Where would you put your Oscar (that is, if you ever won one)?",
         "answers": [
             {
                "text": "On the mantle, where everyone can see it",
                "result": 1
             },

             {
                "text": "In a custom case I encrusted with 50-karat diamonds and Kate Winslet's hair ",
                "result": 3
             },

             {
                "text": "In the trash. I've transcended material possessions and this award is meaningless to me now",
                "result": 4
             },

		     {
                "text": "I would probably use it as a paperweight tbh",
                "result": 2

          },

        ]
      },
{"question": "What's your favorite food?",
         "answers": [
             {
                "text": "Three-day-old Chipotle",
                "result": 2
             },

             {
                "text": "Kale",
                "result": 1
             },

             {
                "text": "Whatever I can catch with my bare hands. I like to live off the land",
                "result": 3
             },

		     {
                "text": "Mac 'n cheese",
                "result": 4
	     },
             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
	/* Stop copying right BEFORE this instruction. Include the } and comma */



        /*This section is for a question with image answer choices*/

        /* Start copying right AFTER this instruction */

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */

	 /* Stop copying right BEFORE this instruction. Include the } and comma */



        /* Paste the rest of the questions beneath this instruction */







    ]
};
