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
    
    "title": "Which UNC building are you?",
    "description": "UNC has one of the most beautiful campuses in the country so forget about your spirit animal and start searching for your spirit building.",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Student Union",
        "description": "Work Hard & Play Hard: You're hardworking, full of life and despite being 5ever busy you are always a fun time.", 
        "img": "https://s3.amazonaws.com/media.dth/30619_student_uniono.jpg",
	   "source": "UNC Virtual Museum",
        },
        
        /* Result 2 */
        {
        "title": "Phillips Hall",
        "description": " Independent & Strong: Sometimes you feel like you don't belong here because you aren't like everyone else around you but deep down you know you're a true Tar Heel and one of the brightest students Carolina has to offer.", 
        "img": "https://s3.amazonaws.com/media.dth/30622_phillips_hallo.jpg",
	    "source": "UNC Law",
        },
        
        /*  Result 3 */
        {
        "title": "Wilson Library",
        "description": "Beautiful & Misunderstood: Your elegance and grace are often the only things noticed about you despite having so much depth and knowledge to offer.", 
        "img": "https://s3.amazonaws.com/media.dth/30626_wilsonlibrarysilswebstieo.jpg",
	    "source": "UNC SILS",
        },
        
        /*  Result 4 */
        {
        "title": "FedEx Global Education Center",
        "description": "Enigmatic & Educated: Your unconventional beauty marches to the beat of its own drum and causes strangers to find you mysterious while friends say you're an open book.", 
        "img": "https://s3.amazonaws.com/media.dth/30627_globalcenteruncdthstoryo.jpg",
	    "source": "UNC Virtual Museum",
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
       {"question": "What is your “go-to” drink at Starbucks?", 
         "answers": [
             {
                "text": "Something with espresso in it", 
                "result": 1
             },
             
             {
                "text": "I don’t like Starbucks", 
                "result": 2
             },
             
             {
                "text": "The newest seasonal drink", 
                "result": 3
             },
             
		     {
                "text": "Standard drip coffee", 
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
	  Stop copying right BEFORE this instruction. Include the } and comma */
      
      
        
        /* Paste the rest of the questions beneath this instruction */
        
        
	
{"question": "What is your "go-to" selection for Netflix & Chill?", 
         "answers": [
             {
                "text": "Something live action- like New Girl or Scandal", 
                "result": 1
             },
             
             {
                "text": "I make the other person pick.", 
                "result": 2
             },
             
             {
                "text": "Something animated- like Bob's Burgers", 
                "result": 3
             },
             
		     {
                "text": "A documentary", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
{"question": "If you had to study in Davis Library, which floor would you be on?", 
         "answers": [
             {
                "text": "1 or 2", 
                "result": 1
             },
             
             {
                "text": "7 or 8", 
                "result": 2
             },
             
             {
                "text": "3 or 4", 
                "result": 3
             },
             
		     {
                "text": "5 or 6", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
{"question": "How do you feel about the following statement: 'I enjoy the classes I am taking.'", 
         "answers": [
             {
                "text": "Agree", 
                "result": 1
             },
             
             {
                "text": "I don't have feelings", 
                "result": 2
             },
             
             {
                "text": "Disagree", 
                "result": 3
             },
             
		     {
                "text": "Neutral", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
{"question": "Scenario: It is pouring rain but you can only bring one piece of rain gear with you for the whole day. Which do you bring?", 
         "answers": [
             {
                "text": "Rain jacket", 
                "result": 1
             },
             
             {
                "text": "Clear plastic poncho", 
                "result": 2
             },
             
             {
                "text": "Umbrella", 
                "result": 3
             },
             
		     {
                "text": "Rain boots", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
	
      
        
        
        
        
    ]
};
