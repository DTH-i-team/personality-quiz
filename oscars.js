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

    "title": "Which embarrassing Oscars moment are you?",
    "description": "Do you find yourself in a constant state of embarrassment? Whether it is from tripping up the stairs, or cursing in front of your Grandma, you always find a way to make a fool out of yourself. Take this quiz to see what notorious Academy Awards moment you are.",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "Jennifer Lawrence tripping on stage",
        "description": "You seem to trip on everything in sight, whether it's yourself, others, or even up the stairs. It would be no surprise for you to trip on stage at the Oscars, but it would still be wildly embarrassing.",
        "img": "http://i4.mirror.co.uk/incoming/article1730010.ece/ALTERNATES/s615/Actress%20Jennifer%20Lawrence%20takes%20a%20tumble%20after%20winning%20the%20Best%20Actress%20award%20for%20%22Silver%20Linings%20Playbook%22%20during%20the%20Oscars%20held%20at%20the%20Dolby%20Theatre.jpg",
	   "source": "Source: Crushed Tees",
        },

        /* Result 2 */
        {
        "title": "John Travolta mispronouncing Idina Menzel’s name",
        "description": "Like Travolta, you aren't good at remembering names, or pronouncing them. You constantly find yourself using the excuse 'I'm not good with names, or faces.' Having to announce someone at the Oscars with a difficult name would be your worst nightmare because you would more than likely mess it up.",
        "img": "http://www.slate.com/content/dam/slate/articles/arts/low_concept/2014/03/john_travolta_called_idina_menzel_adele_dazeem_what_s_your_travolta_name/travolta2.jpg.CROP.promo-mediumlarge.jpg",
	    "source": "Source: Picgifs.com",
        },

        /*  Result 3 */
        {
        "title": "Gwyneth Paltrow crying through her entire acceptance speech",
        "description": "You sometimes can be overly emotional, just like Gwyneth Paltrow during her Best Actress acceptance speech at the Oscars. Not being able to control your emotions could lead to unstoppable crying, and snot-rocketing that would cause you even more embarrassment. If you won an Oscar, you would definitely be bawling on stage as you accepted.",
        "img": "http://i.dailymail.co.uk/i/pix/2015/02/20/0001042700000CB2-2919695-image-a-64_1424447407259.jpg",
	    "source": "Source: Picgifs.com",
        },

        /*  Result 4 */
        {
        "title": "Melissa Leo dropping the F-bomb in her acceptance speech",
        "description": "You commonly find yourself in situations where you make an inappropriate comment, or say something you immediately regret. Like Melissa Leo accidentally cursing in her acceptance speech, your first reaction to winning an oscar would be of a similar nature.",
        "img": "http://i.dlisted.com/files/oscarleos1.jpg",
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
       {"question": "What is the reason you are most likely to embarrass yourself?",
         "answers": [
             {
                "text": "Tripping",
                "result": 1
             },

             {
                "text": "Unable to remember someone's name",
                "result": 2
             },

             {
                "text": "Being overly emotional",
                "result": 3
             },

		     {
                "text": "Saying something inappropriate",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]

        },  /* Stop copying right BEFORE this instruction */


       {"question": "What would your first reaction be to embarrassing yourself?",
         "answers": [
             {
                "text": "Laugh it off and try to make a joke of it",
                "result": 1
             },

             {
                "text": "Run away",
                "result": 2
             },

             {

                "text": "Curse",
                "result": 4
             },
             "text": "Cry",
             "result": 3
		     {

             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]

        },

       {"question": "What is most likely to occur on your way to class?",
         "answers": [
             {

                "text": "You listen to (explicit) music",
                "result": 4
             },

             {
                "text": "Someone says hey to you, but you don't recognize them",
                "result": 2
             },

             {
                "text": "Stressing out about an exam or grade",
                "result": 3
             },

		     {
           "text": "You stumble on a brick or down the stairs",
           "result": 1
             },
           ]
         },

       {"question": "What would be the soundtrack of your embarrassing moment?",
         "answers": [
             {
                "text": "'Oops!...I Did It Again' by Britney Spears",
                "result": 1
             },

             {
               "text": "'Sorry' by Justin Bieber",
               "result": 3
             },

             {

                "text": "'Bad' by Michael Jackson",
                "result": 2
             },

		     {
                "text": "'No Control' by One Direction",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]

        }
             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */

        /*This section is for a question with image answer choices*/




    ]
};
