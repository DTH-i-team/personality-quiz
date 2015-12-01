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
    
    "title": "How should you procrastinate for finals?",
    "description": "Let's face it, you did not see the final exams coming. Worry no more, my friend. Take this quiz to find out which activity you'll do when you avoid all that studying.",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Organize your closet by color",
        "description": "Who said procrastinating couldn't be productive? You'll avoid studying but you'll get soooo much done. You'll clean your room like you've never done before, organize your closet by color or theme, and yes, the pictures in your computer will need to be divided in folders.", 
        "img": "http://www.slate.com/content/dam/slate/blogs/the_eye/2014/02/10/140210_EYE_Books%20organized%20by%20color.jpg.CROP.original-original.jpg",
	   "source": "Slate",
        },
        
        /* Result 2 */
        {
        "title": "Harry Potter movie marathon",
        "description": "You've seen the movies a thousand times and you can say the lines by heart, but nothing screams more 'Harry Potter movie marathon' than finals week. It's cold and miserable outside and the library is just way too far. Bye UNC, hi Hogwarts.", 
        "img": "http://i1.tribune.com.pk/wp-content/uploads/2012/12/478162-HarryPotterphotofile-1355215889-179-640x480.jpg",
	    "source": "Tribune",
        },
        
        /*  Result 3 */
        {
        "title": "Visit your relatives who you've been putting off forever",
        "description": "You've been avoiding the inevitable but deep inside you know your relatives are more important than the quiz you have in two days. This is the perfect occasion to visit Aunt Nancy and Uncle Gary because if the questions they ask you get too awkward, you can always say you have to go and study for your finals. It's a win-win situation.", 
        "img": "http://tobeagrandparent.com/wp-content/uploads/2015/11/building-a-relationship-with-grandparents-through-the-internet.jpg",
	    "source": "To Be a Grandparent",
        },
        
        /*  Result 4 */
        {
        "title": "Buy space-cat-themed objects online",
        "description": "It's OK, we all do it. Even if you don't buy anything, you'll spend hours wandering in the magical world of CATS. Chubby cats floating around in the sparkly outer space. Is there anything better? Yes. YouTube videos of cats. You know you'll watch them all.", 
        "img": "http://i.kinja-img.com/gawker-media/image/upload/s--cA-LXtab--/c_scale,fl_progressive,q_80,w_800/ntiaiy4lwnppz265sd9t.jpg",
	    "source": "i09",
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
       {"question": "How do you organize your study time before finals?", 
         "answers": [
             {
                "text": "I've been prepared for finals since I knew the dates", 
                "result": 1
             },
             
             {
                "text": "I leave everything for the last minute", 
                "result": 2
             },
             
             {
                "text": "I'm the one who starts the Google Docs", 
                "result": 3
             },
             
		     {
                "text": "What are finals?", 
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
{"question": "What's your liquor of choice?", 
         "answers": [
             {
                "text": "Whisky on the rocks", 
                "result": 1
             },
             
             {
                "text": "Vodka", 
                "result": 2
             },
             
             {
                "text": "Rum", 
                "result": 3
             },
             
		     {
                "text": "Tequila shots", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        }, 
{"question": "What's your go-to spot for studying?", 
         "answers": [
             {
                "text": "A study room for myself that I've had reserved for weeks", 
                "result": 1
             },
             
             {
                "text": "My usual spot in the Union", 
                "result": 2
             },
             
             {
                "text": "The Undergraduate Library, my favorite spot to do an all-nighter", 
                "result": 3
             },
             
		     {
                "text": "The hallway in front of my classroom before the exam starts", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        }, 
{"question": "What's your favorite TV show?", 
         "answers": [
             {
                "text": "The news", 
                "result": 1
             },
             
             {
                "text": "Game of Thrones", 
                "result": 2
             },
             
             {
                "text": "National Geographic", 
                "result": 3
             },
             
		     {
                "text": "Jersey Shore re-runs", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        }, 
{"question": "What's your favorite place to get late night food on Franklin?", 
         "answers": [
             {
                "text": "What is late night food?", 
                "result": 1
             },
             
             {
                "text": "Toppers", 
                "result": 2
             },
             
             {
                "text": "Linda's", 
                "result": 3
             },
             
		     {
                "text": "B'skis", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        }, 
{"question": "What was your favorite subject in school?", 
         "answers": [
             {
                "text": "Math, Science - all that good stuff", 
                "result": 1
             },
             
             {
                "text": "English", 
                "result": 2
             },
             
             {
                "text": "History", 
                "result": 3
             },
             
		     {
                "text": "Art", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
{"question": "Which famous villain are you?", 
         "answers": [
             {
                "text": "Cruella De Vil", 
                "result": 1
             },
             
             {
                "text": "Voldemort", 
                "result": 2
             },
             
             {
                "text": "Darth Vader", 
                "result": 3
             },
             
		     {
                "text": "The Joker", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },
        
        
        
        
        
        
        
    ]
};
