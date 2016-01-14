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

    

    "title": "Which TV heroine should you channel this semester?",

    "description": "",



    

    

    /*

    This section lists all of the possible results of the quiz. 

    When the reader finishes, one of these results will be shown.

    */

    

    "results": [

        

        /* Result 1 */

        {

        "title": "Leslie Knope",

        "description": "Three words: Friends, Waffles, Work.", 

        "img": "http://media.salon.com/2012/11/knope_campaign_rect.jpg",

	   "source": "salon",

        },

        

        /* Result 2 */

        {

        "title": "Liz Lemon",

        "description": "You're just trying to have it all: food, sleep and social interaction.", 

        "img": "http://media.tumblr.com/tumblr_mdy8q7rwKk1qa5olf.jpg",

	    "source": "carmichaeldigitalprojects",

        },

        

        /*  Result 3 */

        {

        "title": "Meredith Grey",

        "description": "Plane crashes, near death experiences, losing your best friends Ð nothing can stop you this semester!", 

        "img": "http://cdn1.theodysseyonline.com/files/2015/11/03/6358210837831832421606865759_mg.jpg",

	    "source": "The Odyssey",

        },

        

        /*  Result 4 */

        {

        "title": "Rory Gilmore",

        "description": "Buckle down, you've got a lot of studying ahead of you.", 

        "img": "http://img.allw.mn/content/www/2010/10/7-reasons-the-gilmore-girls-are-overrated/rory-is-brilliant_7-reasons-the-gilmore-girls-are-overrated.jpg",

	    "source": "The Odyssey",

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

       {"question": "Pick a major.", 

         "answers": [

             {

                "text": "Political Science/Public Policy", 

                "result": 1

             },

             

             {

                "text": "Dramatic Art/Communication Studies", 

                "result": 2

             },

             

             {

                "text": "Pre-Med/Sciences", 

                "result": 3

             },

             

		     {

                "text": "Journalism & Media", 

                "result": 4

             },

             

             /* If you need more answer choices, 

             copy and paste a section- from the { to the } and the comma -

             above this instruction, beneath the last choice section. */

         ]

        },  

	/* Stop copying right BEFORE this instruction. Include the } and comma */

        

        

        

        /*This section is for a question with image answer choices*/

        

        /* Start copying right AFTER this instruction 

        {"question": "Write the question here", 

         "answers": [

             {

                "img": "Put a link to an image here. It should start with 'http' and end with '.jpg' or '.png'.",

		        "source": "Source: write the source here", 

                "result": 1

             },

             {

                "img": "Put a link to an image here. It should start with 'http' and end with '.jpg' or '.png'.",

		        "source": "Source: write the source here", 

                "result": 2

             },

             {

                "img": "Put a link to an image here. It should start with 'http' and end with '.jpg' or '.png'.",

		        "source": "Source: write the source here", 

                "result": 3

             },

             {

                "img": "Put a link to an image here. It should start with 'http' and end with '.jpg' or '.png'.",

		        "source": "Source: write the source here", 

                "result": 4

             },

             

             /* If you need more answer choices, 

             copy and paste a section- from the { to the } and the comma -

             above this instruction, beneath the last choice section. 

         ]

        },  

	 /* Stop copying right BEFORE this instruction. Include the } and comma */

      

      

        

        /* Paste the rest of the questions beneath this instruction */

        

        

               {"question": "What's your ideal Friday night?", 

         "answers": [

             {

                "text": "Studying.", 

                "result": 4

             },

             

             {

                "text": "Sitting on the couch, watching Netflix & eating snacks.", 

                "result": 2

             },

             

             {

                "text": "Unwinding at a local bar.", 

                "result": 3

             },

             

		     {

                "text": "Hanging with your squad.", 

                "result": 1

             },

             

             /* If you need more answer choices, 

             copy and paste a section- from the { to the } and the comma -

             above this instruction, beneath the last choice section. */

         ]

        },
        
        {"question": "Pick your weakness.", 

         "answers": [

             {

                "text": "I'm too structured.", 

                "result": 4

             },

             

             {

                "text": "I'm extremely stubborn.", 

                "result": 1

             },

             

             {

                "text": "I'm socially awkward.", 

                "result": 2

             },

             

		     {

                "text": "I bottle my emotions.", 

                "result": 3

             },

             

             /* If you need more answer choices, 

             copy and paste a section- from the { to the } and the comma -

             above this instruction, beneath the last choice section. */

         ]

        },  

        

        
    {"question": "What's your new semester resolution?", 

         "answers": [

             {

                "text": "To learn to control my sarcasm.", 

                "result": 2

             },

             

             {

                "text": "I need to ace that class.", 

                "result": 4

             },

             

             {

                "text": "To balance family with schoolwork.", 

                "result": 3

             },

             

		     {

                "text": "To go above and beyond with my extracurriculars.", 

                "result": 1

             },

             

             /* If you need more answer choices, 

             copy and paste a section- from the { to the } and the comma -

             above this instruction, beneath the last choice section. */

         ]

        },  

       {"question": "Dinner at Lenoir. What do you go for?", 

         "answers": [

             {

                "text": "Waffles", 

                "result": 1

             },

             

             {

                "text": "Pizza", 

                "result": 4

             },

             

             {

                "text": "Sandwich bar", 

                "result": 2

             },

             

		     {

                "text": "Food? I need WINE", 

                "result": 3

             },

             

             /* If you need more answer choices, 

             copy and paste a section- from the { to the } and the comma -

             above this instruction, beneath the last choice section. */

         ]

        },
        
        {"question": "Where do you cram for that test tomorrow?", 

         "answers": [

             {

                "text": "My bed.", 

                "result": 2

             },

             

             {

                "text": "Anywhere I can in between class and shifts at work.", 

                "result": 3

             },

             

             {

                "text": "Somewhere outside, maybe the quad or the arboretum.", 

                "result": 1

             },

             

		     {

                "text": "The UL. It's quiet and open 24 hours.", 

                "result": 4

             },

             

             /* If you need more answer choices, 

             copy and paste a section- from the { to the } and the comma -

             above this instruction, beneath the last choice section. */

         ]

        },
        
        {"question": "Best campus celeb?", 

         "answers": [

             {

                "text": "Aziz Sancar - The Nobel Prize winner.", 

                "result": 3

             },

             

             {

                "text": "The Pit Preacher. He's hilarious.", 

                "result": 2

             },

             

             {

                "text": "Carol Folt.", 

                "result": 4

             },

             

		     {

                "text": "The Whistler.", 

                "result": 1

             },

             

             /* If you need more answer choices, 

             copy and paste a section- from the { to the } and the comma -

             above this instruction, beneath the last choice section. */

         ]

        },
        
]
};