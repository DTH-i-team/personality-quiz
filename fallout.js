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

    "title": "Which Fallout 4 companion are you?",
    "description": "Instead of trying to get a head start on my homework last night, I decided to play more Fallout 4. The ultimate goal in Bethesda's open-world RPG, besides becoming the most kick-ass Vault Dweller in the Commonwealth, is to recruit all the possible NPC companions and make your Minutemen settlements the happiest radioactive farms this side of the nuclear apocalypse. Unfortunately — or fortunately, depending on how you like to play — the companions are all very different characters with different likes and dislikes that you have to cater to in order to recruit them. From Piper the post-apocalyptic newsy to Curie the disease-curing robot-turned artificial human, all the companions are different and loveable in their own special ways. They all also have different perks to make gameplay easier, or harder when they walk over a landmine right in front of you  — I'm looking at you, Dogmeat. So which companion are you most like? Take the quiz to find out. Please note: I am aware that this is not a full list of all the companions as that would take an ungodly amount of time to write and test for.",



    /*
    This section lists all of the possible results of the quiz.
    When the reader finishes, one of these results will be shown.
    */

    "results": [

        /* Result 1 */
        {
        "title": "Nick Valentine",
        "description": "You're the suave synth detective and one of the only non-romanceable characters in the game. Despite having to rescue you from the apocalyptic version of the Boston mafia, you're definitely one of the stronger characters in the game. The brain of an old pre-war cop in the body of a metal man, you're dedicated to finding out the truth and helping the underdogs, no mater how dire the situation. You're nice to have around in a fight even if I'm not entirely sure why stimpaks work on you considering your made of metal. ",
        "img": "http://0.media.dorkly.cvcdn.com/78/20/0cedb3ee0485b6fce8a2bb96db388969.jpg",
	   "source": "Dorkly.com",
        },

        /* Result 2 */
        {
        "title": "Piper",
        "description": "You're a kick-butt gal with a penchant for truth, justice, and freedom of speech! You're not afraid to stand up against "the man" (or any would-be synths, for that matter) and you're always going to fight for the little guy in the desolation of the wasteland. Your life is a little rough and your firm believes probably aren't making it any easier, but you have the moral high ground when it comes to morality issues, something a lot of people in a post-apocalyptic world often leave behind.",
        "img": "https://staticdelivery.nexusmods.com/mods/1151/images/721-2-1447612631.jpg",
	    "source": "Nexusmods.com",
        },

        /*  Result 3 */
        {
        "title": "Dogmeat",
        "description": "Real talk: you're kind of annoying. You always run ahead, you're a little too eager to please, and you rarely ever find anything useful digging through the radioactive dirt, but despite all that you're a good friend and always willing to wait for me while I search every crushed and ratty desk and broken container for Nuke Cola bottle caps — the currency of the post-apocalyptic world. Plus you're an awfully cute little doggy, unlike the wild mutts that attack me every time I venture out into the wasteland.",
        "img": "http://cdn.gamer-network.net/2015/usgamer/Fallout-4-Dogmeat.jpg",
	    "source": "Cdn.gamer-network.net",
        },

        /*  Result 4 */
        {
        "title": "Paladin Danse",
        "description": "A fierce warrior with a dark secret, you're definitely one of the best-looking NPC's in the game and a member of the Brotherhood of Steel, one of the four powerful factions fighting over the future of the Commonwealth. I don't really trust you — especially because you're leader is a shady character with a giant scratch on his face and this manic look in his eyes — but that doesn't mean I'm not willing to work with you and help you cleanse the Commonwealth of its feral ghouls, Super Mutants, and just general raider rabble. Regardless, your devotion to me, and to your cause, is stronger than steel. ;)",
        "img": "http://vignette1.wikia.nocookie.net/fallout/images/d/d6/Danse.jpg/revision/latest?cb=20151211181324",
	    "source": "Fallout.wikia.com",
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
       {"question": "Name your dream job.",
         "answers": [
             {
                "text": "Reporter.",
                "result": 2
             },

             {
                "text": "Soldier.",
                "result": 4
             },

             {
                "text": "Detective.",
                "result": 1
             },

		     {
                "text": "Lapdog.",
                "result": 3
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

	 /* Stop copying right BEFORE this instruction. Include the } and comma */



        /* Paste the rest of the questions beneath this instruction */


     {"question": "You wake up from being cryogenically frozen for 200 years by a scary government entity. Your entire family is dead, your son is missing, and the entire world has been bombed to all hell. What do you do first?",
         "answers": [
             {
                "text": "Take a nap - being frozen sure makes you tired!",
                "result": 3
             },

             {
                "text": "Grab a gun and start kicking all the butt that gets in your way",
                "result": 4
             },

             {
                "text": "Put on your Sherlock Holmes hat, whip out your Nancy Drew magnifying glass and get on the case of your missing son!",
                "result": 1
             },

		     {
                "text": "Print your first edition of the Post-Apocalyptic Weekly! Extra, Extra, read all about it! Entire world destroyed in huge atomic blast!",
                "result": 2
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

        {"question": "What's your favorite pastime activity?": [
             {
                "text": "Kicking butt and taking names.",
                "result": 4
             },

             {
                "text": "Investigating Commonwealth wrongdoings.",
                "result": 2
             },

             {
                "text": "Solving the case of the lost Diamond City homeplate.",
                "result": 1
             },

		     {
                "text": "Chasing your tail in circles.",
                "result": 3
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

        {"question": "Where is your ideal Minutemen Settlement?",
         "answers": [
             {
                "text": "Sanctuary Hills, where else? They've got a nice doghouse that's about your size.",
                "result": 3
             },

             {
                "text": "Boston Airport, near the glorious Prydwen, the Brotherhood of Steel's epic warship!",
                "result": 4
             },

             {
                "text": "Diamond City: the center of all scandal and gossip in the Commonwealth!",
                "result": 2
             },

		     {
                "text": "Also Diamond city because there's an awful lot of crime there to keep any good detective busy.",
                "result": 1
             },

             /* If you need more answer choices,
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },




    ]
};
