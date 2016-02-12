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

    "title": "Which Game of Thrones House Do You Belong To?",
    "description": "Baratheon, Lannister, Stark, or Greyjoy - the choice is yours.",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "House Baratheon",
        "description": "House Baratheon is the royal house of Westeros and rules over all the seven other kingdoms from King's Landing. Members of House Baratheon strive for power above all else, willing to fight against their own family to win the crown. Members are fearless, brave, and determined, but also known to betray their friends and family for glory. While tough, Baratheons are trusting and easily persuaded, and should be wary of new and unusual people in their lives.",
        "img": "http://www.hbo.com/assets/images/series/game-of-thrones/downloads/baratheon/wallpaper-baratheon-sigil-1600.jpg",
	   "source": "Source: HBO.com",
        },

        /* Result 2 */
        {
        "title": "House Stark",
        "description": "House Stark rules the North from Winterfell. Brave and loyal, with hearts of gold, members of House Stark are willing to die for their loved ones. Unlike members of other Houses, glory, pride, and riches do not distract the Starks from pursuing their goals. Members of House Stark will only resort to violence when necessary, and would never betray an ally. Starks should be cautious of old friends who may not have the best intentions.",
        "img": "http://www.hbo.com/assets/images/series/game-of-thrones/downloads/stark/wallpaper-stark-sigil-1600.jpg",
	    "source": "Source: HBO.com",
        },

        /*  Result 3 */
        {
        "title": "House Lannister",
        "description": "House Lannister, one of the richest and oldest houses in Westeros, rules the West from Casterly Rock. A Lannister is smart and cunning, and always pays his debts. Lannisters tend to be greedy and conniving, willing to trade friends and family for fame and fortune. It would serve the Lannister clan well to put aside their pride, as their egos often cause them harm.",
        "img": "http://www.hbo.com/assets/images/series/game-of-thrones/downloads/lannister/wallpaper-lannister-sigil-1600.jpg",
	    "source": "Source: HBO.com",
        },

        /*  Result 4 */
        {
        "title": "House Greyjoy",
        "description": "Ruling the Iron Islands from the castle at Pyke, Greyjoys are known for sustaining themselves by stealing from others. A Greyjoy is willing to stand up to his enemies, but scared to trust his allies. Members of House Greyjoy tend to be watchful of others and think of themselves before their family members. Greyjoys would be wise to help others, so that others may help them in return.",
        "img": "http://www.hbo.com/assets/images/series/game-of-thrones/downloads/wallpaper-greyjoy-1600.jpg",
	    "source": "HBO.go",
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
       {"question": "What is your alcoholic beverage of choice?",
         "answers": [
             {
                "text": "Red Wine",
                "result": 1
             },

             {
                "text": "Rum",
                "result": 4
             },

             {
                "text": "Champagne",
                "result": 3
             },

		     {
                "text": "Whiskey",
                "result": 2
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
	/* Stop copying right BEFORE this instruction. Include the } and comma */
     {"question": "If you could choose any super power, what would it be?",
         "answers": [
             {
                "text": "Mind Control",
                "result": 3
             },

             {
                "text": "Superhuman Strength",
                "result": 1
             },

             {
                "text": "Flight",
                "result": 2
             },

		     {
                "text": "Invisibility",
                "result": 4
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
             {"question": "What is your favorite food?",
         "answers": [
             {
                "text": "Ice Cream",
                "result": 2
             },

             {
                "text": "Pizza",
                "result": 3
             },

             {
                "text": "Sushi",
                "result": 4
             },

		     {
                "text": "Steak",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
     {"question": "What is your favorite sport?",
         "answers": [
             {
                "text": "Cross Country",
                "result": 4
             },

             {
                "text": "Football",
                "result": 1
             },

             {
                "text": "Skiing",
                "result": 2
             },

		     {
                "text": "Golf",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
       },
       {"question": "What is your favorite TV show?",
         "answers": [
             {
                "text": "How to Get Away with Murder",
                "result": 3
             },

             {
                "text": "Mad Men",
                "result": 2
             },

             {
                "text": "Breaking Bad",
                "result": 4
             },

		     {
                "text": "Walking Dead",
                "result": 1
             },

           ]
         },

             {"question": "What is your favorite school subject?",
         "answers": [
             {
                "text": "Chemistry",
                "result": 1
             },

             {
                "text": "Woodworking",
                "result": 4
             },

             {
                "text": "English",
                "result": 3
             },

		     {
                "text": "Mathematics",
                "result": 2
             },
           ]
         },


             {"question": "What is your spirit animal?",
         "answers": [
             {
                "text": "Giant Squid",
                "result": 4
             },

             {
                "text": "Wolf",
                "result": 2
             },

             {
                "text": "Lion",
                "result": 3
             },

		     {
                "text": "Stag",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */


             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */

	 /* Stop copying right BEFORE this instruction. Include the } and comma */



        /* Paste the rest of the questions beneath this instruction */







    ]
};
