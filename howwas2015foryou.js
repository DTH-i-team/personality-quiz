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
    
    "title": "How was 2015 for you?",
    "description": "Did your year live up to what 'Back to the Future' had in mind or nah? Take this quiz to find out!",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Great!! I Don't Want it to End!!",
        "description": "2015 was a breeze for you, filled with good vibes and even greater times. Let's do it again, 2015, it'll be a rager!!!!", 
        "img": "https://giphy.com/gifs/beyonce-nicki-minaj-6kei9VvxiXula",
	   "source": "Giphy",
        },
        
        /* Result 2 */
        {
        "title": "Stressful",
        "description": "Class/work/numerous fanfiction sites kept you up all night and into the wee hours of the morning. You hope 2016 will bring you less credit hours in your shopping cart or stronger coffee.", 
        "img": "https://giphy.com/gifs/e3-2015-sweetrolltxt-MMfROK5szfy",
	    "source": "Giphy",
        },
        
        /*  Result 3 */
        {
        "title": "Eh, Could've Been Better",
        "description": "2015 was the year you were that friend, the friend who says they're 'up for anything' when you really want to go disco ice skating and you end up at the movies...again. But, Inside Out turned out to a cinematic masterpiece so you were pleased either way. 2016 may make you more assertive in your decision making or maybe it'll be more of the same...who cares?", 
        "img": "http://giphy.com/gifs/tvland-happy-animated-gif-meh-tGZRCBAPhCXxm",
	    "source": "Giphy",
        },
        
        /*  Result 4 */
        {
        "title": "Terrible, Horrible, No Good, Very Bad",
        "description": "Let's not talk about it. 2016, here you come.", 
        "img": "https://giphy.com/gifs/hd-gGxSl050qQOJi",
	    "source": "Giphy",
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
       {"question": "Pick a color:", 
         "answers": [
             {
                "text": "Blue", 
                "result": 3
             },
             
             {
                "text": "Yellow", 
                "result": 4
             },
             
             {
                "text": "Hot pink", 
                "result": 1
             },
             
		     {
                "text": "Purple", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	/* Stop copying right BEFORE this instruction. Include the } and comma */
        
        {"question": "Pick a drink:", 
         "answers": [
             {
                "text": "Coffee", 
                "result": 4
             },
             
             {
                "text": "Coca Cola", 
                "result": 3
             },
             
             {
                "text": "Sweet tea", 
                "result": 1
             },
             
		     {
                "text": "5-hour energy", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	 
{"question": "Pick a meal:", 
         "answers": [
             {
                "text": "Hamburger and fries", 
                "result": 3
             },
             
             {
                "text": "Tacos, rice and beans", 
                "result": 1
             },
             
             {
                "text": "Spaghetti and meatballs", 
                "result": 4
             },
             
		     {
                "text": "Ramen noodles", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	 
{"question": "Pick an animal: ", 
         "answers": [
             {
                "text": "Wolf", 
                "result": 4
             },
             
             {
                "text": "Panda", 
                "result": 1
             },
             
             {
                "text": "Jaguar", 
                "result": 3
             },
             
		     {
                "text": "Lion", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	 
{"question": "Pick a Seth Rogen movie: ", 
         "answers": [
             {
                "text": "Pineapple Express", 
                "result": 1
             },
             
             {
                "text": "Neighbors", 
                "result": 2
             },
             
             {
                "text": "The Interview", 
                "result": 3
             },
             
		     {
                "text": "The 40-Year-Old Virgin", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
{"question": "Pick a season: ", 
         "answers": [
             {
                "text": "Fall", 
                "result": 2
             },
             
             {
                "text": "Winter", 
                "result": 4
             },
             
             {
                "text": "Spring", 
                "result": 1
             },
             
		     {
                "text": "Summer", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
{"question": "Pick a city:", 
         "answers": [
             {
                "text": "New York", 
                "result": 2
             },
             
             {
                "text": "London", 
                "result": 4
             },
             
             {
                "text": "Pawnee", 
                "result": 1
             },
             
		     {
                "text": "Chapel Hill", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	/* 
{"question": "You’re at the club, what’s your go to dance move?", 
         "answers": [
             {
                "text": "A soft yet confident head bob", 
                "result": 1
             },
             
             {
                "text": "Krump", 
                "result": 2
             },
             
             {
                "text": "Running man", 
                "result": 4
             },
             
		     {
                "text": "Cabbage patch", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. 
         ]
        },  
	/* 
        
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
        
        
        
        
        
        
        
    ]
};