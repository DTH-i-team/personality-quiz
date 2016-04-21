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

    "title": "What kind of asshole commenter are you??",
    "description": "Discover your true self.",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "State fan",
        "description": "A toothless bear in a pickup truck delivers your paper to your shitty mountain cabin each morning",
        "img": "http://www.accwbbdigest.com/1213/photos/dwhoops_130307_2013_acc_1st_ncsu_56_clemson_45_027.jpg",
	   "source": "Source: Acc Women's Basketball Digest",
        },

        /* Result 2 */
        {
        "title": "That guy who will 'never read the DTH again'",
        "description": "See you tomorrow at 6 a.m., friend!",
        "img": "http://fyi.libmedia.nymc.edu/wp-content/uploads/2015/11/6_AM_FNaF2.jpg",
	    "source": "Dottie",
        },

        /*  Result 3 */
        {
        "title": "Offended, elderly grandfather",
        "description": "What are you doing on the Internet, raisin ass?",
        "img": "http://memorycareaz.com/care/wp-content/uploads/2010/11/Grandfather-on-computer.jpg",
	    "source": "Source: Ing",
        },

        /*  Result 4 */
        {
        "title": "Guy who drags the entire article over one misplaced comma",
        "description": "We're surprised and proud you can even read above a 3rd grade level.",
        "img": "http://cdn.theatlantic.com/static/mt/assets/science/bender-applause_medium.gif",
	    "source": "Source: Cnn",
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
       {"question": "Do you self identity as:",
         "answers": [
             {
                "text": "A rabid raccoon on the steps of the DTH office",
                "result": 1
             },

             {
                "text": "The funniest person you know",
                "result": 2
             },

             {
                "text": "young and #hip'",
                "result": 3
             },

		     {
                "text": "tired, but still awake enough to complain about literally everything",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]

        },  /* Stop copying right BEFORE this instruction */



        /*This section is for a question with image answer choices*/

        /* Start copying right AFTER this instruction */
        {"question": "Choose an emoji.",
         "answers": [
             {
                "img": "http://cdn.shopify.com/s/files/1/0185/5092/products/persons-0057.png",
		        "source": "Source: CDN",
                "result": 2
             },
             {
                "img": "https://tapintothenuttyirishman.files.wordpress.com/2014/10/41766-9895484028glass-of-beer-emoji.png",
		        "source": "Source: Tapintothenuttyirshman",
                "result": 1
             },
             {
                "img": "http://cdn.shopify.com/s/files/1/0185/5092/products/persons-0033.png",
		        "source": "Source: CDN",
                "result": 3
             },
             {
                "img": "http://images.mic.com/3wbactzdl39nsaibg9bmqsh50fubjvgmnu1hlzk3ibn73vs03gt2uztvs77cxkud.jpg",
		        "source": "Source: TechMic",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  /* Stop copying right BEFORE this instruction */



        /* Paste the rest of the questions beneath this instruction */

        {"question": "What does your personality mimic?",
         "answers": [
             {
                "text": "A bratty kid, screaming on the floor of Target",
                "result": 2
             },

             {
                "text": "The crunch of a cockroach as it's mushed under an old boot",
                "result": 1
             },

             {
                "text": "Paige's shrieks",
                "result": 4
             },

		     {
                "text": "Kelly's shrieks",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },
{"question": "What millennial thing are you most likely to do??",
         "answers": [
             {
                "text": "Walk into oncoming traffic because you're looking at your phone",
                "result": 2
             },

             {
                "text": "Wear headphones without actually playing music, just so no one will talk to you",
                "result": 4
             },

             {
                "text": " Break up with a significant other after arguing over Apple vs. Android ",
                "result": 1
             },

		     {
                "text": "Forget about your own birthday until Facebook sends you as a reminder",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },
{"question": "If someone makes a post you disagree with, how do you respond?",
         "answers": [
             {
                "text": "Argue with them until they make an accidental grammar mistake",
                "result": 4
             },

             {
                "text": " Type out a long, angry response that the poster will like and never respond to",
                "result": 1
             },

             {
                "text": "Use a lot of unnecessary punctuation and ALL CAPS to communicate your disappointment in the modern world of journalism.......!!!!!!",
                "result": 3
             },

		     {
                "text": "Tweet negative things about the speakers from an anonymous account",
                "result": 2
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       }


             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */






    ]
};
