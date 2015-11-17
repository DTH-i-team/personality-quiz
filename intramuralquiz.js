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
    
    "title": "Which intramural sport should you play?",
    "description": "If you're thinking about playing an intramural sport next fall semester and can't decide which one to play, take this quiz to find out which one fits you best!",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Soccer",
        "description": "You're social and like being around people, so you'll do well in a team sport like soccer. Don't worry about your skills, you'll be bending it like Beckham in no time!", 
        "img": "http://soccerisland.info/wp-content/uploads/2014/03/soccer-player.jpg",
	   "source": "Source: soccerisland.info",
        },
        
        /* Result 2 */
        {
        "title": "3-on-3 Basketball",
        "description": "You're a straight-up baller who knows how to #BeGreat, so you'll rock the court on a 3 person team! Don't forget your Jordans.", 
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Jordan_by_Lipofsky_16577.jpg",
	    "source": "Source: en.wikipedia.org",
        },
        
        /*  Result 3 */
        {
        "title": "Volleyball",
        "description": "You're a team player who has mad hops and good hand-eye coordination. Don't be afraid to spike on your enemies and bring your A game!", 
        "img": "http://seattletimes.nwsource.com/ABPub/2007/11/08/2004003360.jpg",
	    "source": "Source: photoalbum3.bloguez.com",
        },
        
        /*  Result 4 */
        {
        "title": "Inner Tube Water Polo",
        "description": "You're a lovable goofball who is in it for fun. You keep doing you, Ducky.", 
        "img": "http://www.jber.af.mil/shared/media/photodb/web/111005-F-SO352-008.jpg",
	    "source": "Source: www.jber.af.mil",
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
       {"question": "What's your favorite animal?", 
         "answers": [
             {
                "text": "Duck", 
                "result": 4
             },
             
             {
                "text": "Giraffe", 
                "result": 2
             },
             
             {
                "text": "Dog", 
                "result": 1
             },
             
		     {
                "text": "Monkey", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
        
       {"question": "What best describes you?", 
         "answers": [
             {
                "text": "Straight baller", 
                "result": 2
             },
             
             {
                "text": "Goofy and lovable", 
                "result": 4
             },
             
             {
                "text": "Social butterfly", 
                "result": 1
             },
             
		     {
                "text": "Intense team player", 
                "result": 3
             },
             ],
       },
        
{"question": "Where do you eat lunch?", 
         "answers": [
             {
                "text": "With all my friends in Rams", 
                "result": 1
             },
             
             {
                "text": "Bottom of Lenoir", 
                "result": 2
             },
             
             {
                "text": "I have it delivered to me", 
                "result": 3
             },
             
		     {
                "text": "Somewhere on Franklin", 
                "result": 4
             },
             ]},
{"question": "How would you describe your athletic abilities?", 
         "answers": [
             {
                "text": "I'm good with my hands", 
                "result": 2
             },
             
             {
                "text": "Athletic abilities?", 
                "result": 4
             },
             
             {
                "text": "I've got mad hops", 
                "result": 3
             },
             
		     {
                "text": "I can run for DAYS", 
                "result": 1
             },
             ]},
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        };
	/* Stop copying right BEFORE this instruction. Include the } and comma */
        
        
        
        /*This section is for a question with image answer choices*/
        
        /* Start copying right AFTER this instruction */
    
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
        
	 /* Stop copying right BEFORE this instruction. Include the } and comma */
      
      
        
        /* Paste the rest of the questions beneath this instruction */
        
        
        
