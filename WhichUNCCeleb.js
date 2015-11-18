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
    
    "title": "Which UNC celeb are you?",
    "description": "",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Roy Williams",
        "description": "Just like Roy, you’re a natural leader. You’ve got a good head on your shoulders and you are high key a baller. Your fashion sense is unique and legendary. Also, if I had to guess, I’d probably say that you’re 65 years old and 5’10.”", 
        "img": "http://s3.amazonaws.com/media.dth/26596_1213_uncvswmbasketball_conway034f.jpg",
	   "source": “The Daily Tar Heel”,
        },
        
        /* Result 2 */
        {
        "title": "Carol Folt",
        "description": "Sweet, sweet Carol. People love receiving mass emails from you. Your strong willed yet maternal essence is a comfort to everyone you come into contact with. You are a princess. And you may or may not resemble Edna Mode.", 
        "img": "https://dailytarheel.smugmug.com/PhotosfromTheDailyTarHeel/October-13/i-XRDDCrQ/0/S/folt2_sweeney-S.jpg",
	    "source": “The Daily Tar Heel”,
        },
        
        /*  Result 3 */
        {
        "title": "Kennedy Meeks",
        "description": "No one has to tell you twice that you’re a baller. One of these days, LeBron will envy your skill and success. Don’t be surprised when you catch people taking selfies of you behind your back.”, 
        "img": "http://s3.amazonaws.com/media.dth/26333_img_3011f.jpg",
	    "source": “The Daily Tar Heel”,
        },
        
        /*  Result 4 */
        {
        "title": "Pit Preacher Gary",
        "description": "You’re strong willed and stubborn, just like Gary. You love wearing a ball cap and carrying around a lawn chair. Some people might be thrown off by your thunderous, pervasive voice, but hey—at least you’re speaking your mind.", 
        "img": "http://s3.amazonaws.com/media.dth/25182_0922_pit_preacher_collins041f.jpg",
	    "source": “The Daily Tar Heel”,
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
       {"question": "What is your favorite thing to eat for dinner?", 
         "answers": [
             {
                "text": "Communion bread with wine", 
                "result": 4
             },
             
             {
                "text": "Spaghetti", 
                "result": 3
             },
             
             {
                "text": "The anguish of Duke’s basketball team", 
                "result": 1
             },
             
	     {
                "text": "Grilled chicken with risotto", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	/* Stop copying right BEFORE this instruction. Include the } and comma */
        
        {"question": "What’s your swaggest pair of kicks?", 
         "answers": [
             {
                "text": "JORDANS", 
                "result": 3
             },
             
             {
                "text": "Loafers", 
                "result": 1
             },
             
             {
                "text": "New balance sneaks", 
                "result": 4
             },
             
		     {
                "text": "Fall booties", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	 
{"question": "Where do you prefer to study?", 
         "answers": [
             {
                "text": "Davis Library", 
                "result": 1
             },
             
             {
                "text": "Wilson Library", 
                "result": 2
             },
             
             {
                "text": "Does watching Grey’s Anatomy count as studying for bio?", 
                "result": 3
             },
             
		     {
                "text": "The pit", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
{"question": "One late night as you are walking home from the library, Shia Labeouf leaps out from behind a large bush. Immediately you…", 
         "answers": [
             {
                "text": "Dunk on him", 
                "result": 3
             },
             
             {
                "text": "Regard him warmly and comment on the weather", 
                "result": 2
             },
             
             {
                "text": "Grab him by the rat tail", 
                "result": 4
             },
             
		     {
                "text": "Punch him swiftly in the gut and then leave calmly", 
                "result": 1
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
{"question": "Which Harry Potter character are you?", 
         "answers": [
             {
                "text": "Voldemort", 
                "result": 4
             },
             
             {
                "text": "Dumbledore", 
                "result": 1
             },
             
             {
                "text": "The man himself, Harry Potter", 
                "result": 3
             },
             
		     {
                "text": "Mrs. Weasley", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
{"question": "Your preferred mode of transportation?", 
         "answers": [
             {
                "text": "Biking", 
                "result": 2
             },
             
             {
                "text": "Razor scooter", 
                "result": 3
             },
             
             {
                "text": "Car", 
                "result": 1
             },
             
		     {
                "text": “Teleporting”, 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	 
{"question": "Who is your favorite late night talk show host?", 
         "answers": [
             {
                "text": "Jimmy Fallon", 
                "result": 1
             },
             
             {
                "text": "Stephen Colbert", 
                "result": 2
             },
             
             {
                "text": "Seth Myers", 
                "result": 3
             },
             
		     {
                "text": "Jimmy Kimmel", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	 
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
             above this instruction, beneath the last choice section. */
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