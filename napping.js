quiz_data = {

    /*
     This section is the title and description for the whole quiz.
     It'll be shown at the top of the quiz page. 
     Write in your own title and description. 
     MAKE SURE to keep the quotes at the beginning and end,
     and keep the comma at the end of the line.
    */
    
    "title": "Do you have what it takes to be a professional napper?",
    "description": "Do you appreciate the artistic value of napping? Are you a shut-eye enthusiast? Take this quiz to find out where you stand amongst the nappers of the world.",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Professional napper",
        "description": "You are a napper of the highest quality. Your talents have been tuned to perfection. You should consider competing at a professional level. It's intimidating, honestly.", 
        "img": "https://s-media-cache-ak0.pinimg.com/736x/9c/8a/31/9c8a31f91196cc2b4c50aa1f2806a652.jpg",
	   "source": "Source: Crushed Tees",
        },
        
        /* Result 2 */
        {
        "title": "Amateur napper",
        "description": "Your napping skills are highly developed. Before you know it, you may be able to go pro. Keep up the hard work and stay dedicated. We're all rooting for you.", 
        "img": "http://www.picgifs.com/clip-art/activities/sleeping/clip-art-sleeping-840170.jpg",
	    "source": "Source: Picgifs.com",
        },
        
        /*  Result 3 */
        {
        "title": "Napper-in-training",
        "description": "You have not yet come to the realization that napping is a beautiful art, but you're headed in the right direction. Becoming a skilled napper takes time and perserverance. Don't give up! The hard work will pay off.", 
        "img": "http://www.picgifs.com/clip-art/activities/sleeping/clip-art-sleeping-561147.jpg",
	    "source": "Source: Picgifs.com",
        },
        
        /*  Result 4 */
        {
        "title": "Beginner napper",
        "description": "You have some work to do. It is hard to understand the art of napping if you are not willing to dedicate yourself to it. In order to rise in the ranks of nappers, you will need to treat the lifestyle with a little more respect.", 
        "img": "http://zucci.com.au/wp-content/uploads/2015/12/Work-in-Progress.jpg",
	    "source": "Source: Zucci.com",
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
       {"question": "At what point in the day do you first consider taking a nap?", 
         "answers": [
             {
                "text": "The very moment that I wake up in the morning", 
                "result": 1
             },
             
             {
                "text": "During lecture as the professor begins his monotonic spiel", 
                "result": 2
             },
             
             {
                "text": "After eating way too much for dinner", 
                "result": 3
             },
             
		     {
                "text": "I'm happy to wait until bed time--naps are for the weak", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]

        },  /* Stop copying right BEFORE this instruction */
        
        
        
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
        },   Stop copying right BEFORE this instruction */
        
      
        
        /* Paste the rest of the questions beneath this instruction */
        
        {"question": "How long do you nap for, on average?", 
         "answers": [
             {
                "text": "20 minutes", 
                "result": 3
             },
             
             {
                "text": "90 minutes", 
                "result": 2
             },
             
             {
                "text": "Depends on how much time I can fit into my schedule", 
                "result": 4
             },
             
		     {
                "text": "2 hours", 
                "result": 1
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

        {"question": "What kind of dreams take place during your naps?", 
         "answers": [
             {
                "text": "People have dreams during naps?", 
                "result": 4
             },
             
             {
                "text": "I literally cannot even comprehend what my brain is doing while I'm napping", 
                "result": 2
             },
             
             {
                "text": "Vivid, epic dreams that I am disappointed to wake up from", 
                "result": 1
             },
             
		     {
                "text": "Um, normal dreams? I do not understand this question", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },

{"question": "How many texts do you usually wake up to after a nap?", 
         "answers": [
             {
                "text": "Like, three", 
                "result": 3
             },
             
             {
                "text": "No one texts me because I'm always napping", 
                "result": 1
             },
             
             {
                "text": "Napping does not interfere with my ability to answer texts", 
                "result": 4
             },
             
		     {
                "text": "Ten to fifteen", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
},
{"question": "How do you feel as you wake up from a nap?", 
         "answers": [
             {
                "text": "I feel as though I am waking up from a strange, wonderful coma", 
                "result": 1
             },
             
             {
                "text": "I feel refreshed and ready to go", 
                "result": 3
             },
             
             {
                "text": "I'm hungry", 
                "result": 2
             },
             
		     {
                "text": "I feel embarrassed for falling asleep in the middle of the day", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
},
        
        
        
        
        
    ]
};