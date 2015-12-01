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
    
    "title": "What holiday drink are you?",
    "description": "Ever wonder if you’re more of a chilly spiked egg nog or a warm red Starbucks cup? Find out here.",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Peppermint Mocha",
        "description": "You're the life of the party! A crowd favorite, people look forward to being around you, especially during this time of year. Even though you may get too excited the day after Thanksgiving and sing (or rather, scream) carols at the top of your lungs every year, it's always a joy to spend the holidays with someone so special.", 
        "img": "http://vignette2.wikia.nocookie.net/starbuckscoffee/images/b/bc/Starbucks_Peppermint_Mocha.jpg/revision/latest?cb=20141206032413",
	   "source": "Starbucks",
        },
        
        /* Result 2 */
        {
        "title": "Hot chocolate",
        "description": "You give everybody who knows you that warm and fuzzy feeling. A true friend, you're the perfect person to cuddle and watch a holiday movie with this season. The gifts you give are always thoughtful ones that come from the heart (even though you're pretty sure witnessed your friend regift a sweater you gave her back in 2012).", 
        "img": "http://globalassets.starbucks.com/assets/f6d9e4e674cd4859b6f66a3a34b1e973.jpg",
	    "source": "Starbucks",
        },
        
        /*  Result 3 */
        {
        "title": "Sparkling Apple Cider",
        "description": "You radiate class around this time of year and throw the best holiday parties of anyone you know. You send out holiday cards months in advance. You're also the person who cries a little too much after midnight when friends and family are saying how much they love each other.", 
        "img": "http://media1.onsugar.com/files/2013/12/30/860/n/1922729/d6212e6ead69a625_188073205.jpg.xxxlarge_2x.jpg",
	    "source": "POPSUGAR",
        },
        
        /*  Result 4 */
        {
        "title": "Egg nog",
        "description": "You are the pinnacle of the season. It's as if you stepped right out of a made-for-TV Hallmark channel holiday drama - cute and cheesy and just who everyone needs around this time of year. Whether or not you're actually that delightful is questionable, but you're a classic that people absolutely love anyways!", 
        "img": "http://foodnetwork.sndimg.com/content/dam/images/food/fullset/2011/10/19/0/CC_Eggnog-Recipe-1_s4x3.jpg",
	    "source": "Food Network",
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
       {"question": "How do you feel about snow?", 
         "answers": [
             {
                "text": "I love it!", 
                "result": 2
             },
             
             {
                "text": "It's pretty fun, I guess.", 
                "result": 4
             },
             
             {
                "text": "I could do without it.", 
                "result": 1
             },
             
		     {
                "text": "NOOOOOOOOOO.", 
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
        {"question": "Choose where you'd want to spend the holidays the most.", 
         "answers": [
             {
                "img": "https://40.media.tumblr.com/708528742e266ee9950ac74a2e88df26/tumblr_ng8ja8aRei1smx7x5o1_500.jpg",
		        "source": "Tumblr", 
                "result": 1
             },
             {
                "img": "http://hbu.h-cdn.co/assets/cm/15/05/54c91a21e0d74_-_fireplace-xlg-34818044.jpg",
		        "source": "House Beautiful", 
                "result": 2
             },
             {
                "img": "http://img1.myhomeideas.timeinc.net/sites/default/files/image/2007/12/1670887-beach-table-xl.jpg",
		        "source": "My Home Ideas", 
                "result": 3
             },
             {
                "img": "http://cache.desktopnexus.com/thumbseg/29/29411-bigthumbnail.jpg",
		        "source": "Desktop Nexus", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	 /* Stop copying right BEFORE this instruction. Include the } and comma */
      
      
        
        /* Paste the rest of the questions beneath this instruction */ 
{"question": "Say you had to do the "adult thing" and attend an office holiday party. How would you inevitably end up embarrassing yourself?", 
         "answers": [
             {
                "text": "Showing off dance moves that I find impressive but that nobody else thinks are cool", 
                "result": 4
             },
             
             {
                "text": "Bringing my father as my plus one", 
                "result": 2
             },
             
             {
                "text": "Spilling punch all over myself while flirting with an attractive coworker", 
                "result": 1
             },
             
		     {
                "text": "Baking something with peanuts in it and accidentally serving it to someone with an allergy", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        }, 
{"question": "What's your favorite dessert at this time of year?", 
         "answers": [
             {
                "text": "Milk and cookies", 
                "result": 2
             },
             
             {
                "text": "Pies", 
                "result": 3
             },
             
             {
                "text": "Candy canes", 
                "result": 1
             },
             
		     {
                "text": "Fruit cake", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
{"question": "What’s the best part of the holiday season?", 
         "answers": [
             {
                "text": "Spending time with loved ones", 
                "result": 4
             },
             
             {
                "text": "Giving and receiving gifts", 
                "result": 1
             },
             
             {
                "text": "Going to fun parties", 
                "result": 3
             },
             
		     {
                "text": "Curling up in a sweater by the fire", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
{"question": "You're walking around the store doing some last minute shopping.You're on a super tight budget this year and have five bucks to buy your friend a gift. What do you pick up?", 
         "answers": [
             {
                "text": "A CD or DVD", 
                "result": 3
             },
             
             {
                "text": "A dessert, like a box of mini-cupcakes or a big cookie", 
                "result": 2
             },
             
             {
                "text": "A light-up singing card", 
                "result": 1
             },
             
		     {
                "text": "Just give them the $5 and a hug", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
{"question": "With whom do you like to celebrate most?", 
         "answers": [
             {
                "text": "Family", 
                "result": 4
             },
             
             {
                "text": "Friends", 
                "result": 1
             },
             
             {
                "text": "A significant other", 
                "result": 3
             },
             
		     {
                "text": "I like spending some time alone", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
{"question": "How do you feel about holiday decorations?", 
         "answers": [
             {
                "text": "Putting up string lights is too much effort and I won't do it again.", 
                "result": 3
             },
             
             {
                "text": "I put out scented pinecones. That's good enough, right?", 
                "result": 2
             },
             
             {
                "text": " I love decorations as long as I don't have to put them up myself!", 
                "result": 1
             },
             
	    {
                "text": "I own so many ceramic Santa Clauses it seems almost unhealthy.", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        };
        
        
        
        
        
        
        
    

