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
    
    "title": "Which 2000's computer game are you?",
    "description": "Halloween on Franklin Street had me reminiscing about the good old days. My childhood years of romping through the garden, playing house with my sister, and settling down in front of my computer and hacking away at the keyboard to avoid getting eaten by a mean digital shark. Yeah, I get hooked early.  I don't really know what happened, but suddenly I was on CartoonNetwork.com scrolling through their vast library of arcade games looking for the ones I played as a kid. Rather than fight the urge to gleefully play all my favorite games from my childhood, I decided to compile some of my favorites — both those found online and those kept in a plastic CD-ROM case.   	Before we start, keep in mind that these are my games, friends. If you're mad I didn't include this or that game, my apologies.  	(Bonus points if you got the reference to the game I mentioned in the first paragraph!)",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Barbie's Swan Lake",
        "description": "This game plays how cotton candy tastes. Frighteningly sweet with the potential to make you sick. Just like you! Not that you'll make people sick, er, I mean, I hope not . . . ", 
        "img": "http://38.media.tumblr.com/tumblr_loesk8WXpY1qg9cr9.png.",
	   "source": "Viralrumors.com",
        },
        
        /* Result 2 */
        {
        "title": "Typer Shark",
        "description": "This game made me want to tear my hair out when I was little. And I think you might be balding a little, man. Take it easy, relax if you can. And whatever you do, for God's sake, don't play this game. Stress reliever it is not.", 
        "img": "http://cdn.ghstatic.com/images/deluxe/300x150/200259.jpg.",
	    "source": "Gatehouse.com",
        },
        
        /*  Result 3 */
        {
        "title": "Nancy Drew",
        "description": "You're a tough, spunky girl with a whole lot of passion. You're not scared by bullies, not intimidated by challenging puzzles, and you're certainly not scared of any ghost dogs! Okay, maybe just a little.", 
        "img": "http://www.encore.com/images/Product/medium/2948.jpg.",
	    "source": "Encore.com",
        },
        
        /*  Result 4 */
        {
        "title": "Trick or Treat Beat",
        "description": "You prefer the tricks in life, but you wouldn't say no to some candy. Hanging out with your friends is number one on your list of awesome things to do, right on up there with gathering the gang and ding-dong-ditching the neighbors.", 
        "img": "http://i.cdn.turner.com/v5cache/CARTOON/site/Images/i27/trickortreatbeat.jpg.",
	    "source": "Cartoonnetwork.com",
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
       {"question": "What's your favorite time of day?", 
         "answers": [
             {
                "text": "Early bird gets the worm!", 
                "result": 1
             },
             
             {
                "text": "I'm not awake until my eleventh cup of coffee.", 
                "result": 3
             },
             
             {
                "text": "It's five o'clock somewhere!", 
                "result": 2
             },
             
		     {
                "text": "I am the night.", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	/* Stop copying right BEFORE this instruction. Include the } and comma */
        
        
        
        /*This section is for a question with image answer choices*/
        
       
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
     
	 /* Stop copying right BEFORE this instruction. Include the } and comma */
      
      
        
        /* Paste the rest of the questions beneath this instruction */
        
        
     {"question": "You're Sherlock Holmes! Who's your sidekick?", 
         "answers": [
             {
                "text": "Benedict Cumberbatch", 
                "result": 2
             },
             
             {
                "text": "I work alone", 
                "result": 4
             },
             
             {
                "text": "John Watson, of course!", 
                "result": 1
             },
             
		     {
                "text": "I am a strong independent individual who don't need no sidekick!", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        }, 
        {"question": "Your friend comes to you with a dead body. What do you do?", 
         "answers": [
             {
                "text": "Shovel at the ready.", 
                "result": 2
             },
             
             {
                "text": "Kill your friend, now you have two dead bodies.", 
                "result": 4
             },
             
             {
                "text": "Just who do you think I am?!", 
                "result": 1
             },
             
		     {
                "text": "Solve the murder! But quietly, in case it's your friend.", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        }, 
        {"question": "Do you love The Daily Tar Heel?", 
         "answers": [
             {
                "text": "Yes.", 
                "result": 2
             },
             
             {
                "text": "Of course!", 
                "result": 1
             },
             
             {
                "text": "Is that even a question?", 
                "result": 4
             },
             
		     {
                "text": "#LoveMyDTH", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },    
        
        
        
        
    ]
};
