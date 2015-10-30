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
    
    "title": "What basic Halloween costume are you?",
    "description": "Some people put in too much thought for Halloween costumes (here's looking at you, Freudian slip,) but others like to keep it classic. Take this quiz and find out your basic Halloween costume identity!",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Donald Trump",
        "description": "You're full of opinions. You're aware of political trends, and you're going to spend the night calling everything &quot;yuge&quot; and yelling &quot;make America great again.&quot; You respect the Trump's love for cold hard cash, and you know making fun of him will be a hit in Chapel Hill.", 
        "img": "http://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2015/09/21/103014035-Untitled-3.530x298.jpg?v=1442870395",
	   "source": "Source: CNBC",
        },
        
        /* Result 2 */
        {
        "title": "Sexy Cat",
        "description": "Here's to you, Sexy Cat. You know what works, and that's wearing the same costume year after year. You keep it simple in all black by drawing on some whiskers, and you look good doing it. You'll spend the night making cute animal faces for pictures and strutting your stuff on Franklin.", 
        "img": "https://s-media-cache-ak0.pinimg.com/736x/0c/a1/21/0ca1212ff16e1340ac73474d00052378.jpg",
	    "source": "Source: Pinterest",
        },
        
        /*  Result 3 */
        {
        "title": "Minion",
        "description": "Minions have been a hit for the past, like, seven Halloweens, but you aren't ashamed. You like to look goofy and enjoy a cute group costume that offends no one. You love kids movies and are generally a nice person. You judge the sexy cats of the world.",
	    "source": "Source: write the source of the image here",
        },
        
        /*  Result 4 */
        {
        "title": "Ceiling Fan",
        "description": "Due to a lack of caring, you will wake up the morning of Halloween with nothing to wear. You will quickly google &quot;funny dyi Halloween costume fast&quot; and come upon the ceiling fan. You wear normal clothes with a piece of paper that says &quot;GO CEILINGS!&quot; You don't like to be left out but you're way too cool to go all out with your costumes. ", 
        "img":" http://cdn.instructables.com/FJN/ST1Z/HNE421LC/FJNST1ZHNE421LC.MEDIUM.jpg",
	    "source": "Source: Instructables",
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
       {"question": "What is your favorite kind of Halloween candy?", 
         "answers": [
             {
                "text": "candy corn, obviously", 
                "result": 3
             },
             
             {
                "text": "whatever, it's candy", 
                "result": 4
             },
             
             {
                "text": "I prefer cash", 
                "result": 1
             },
             
		     {
                "text": "do they make halloween blow pops?", 
                "result": 2
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  
        /* Stop copying right BEFORE this instruction. Include the } and comma */
        
        
        
        /*This section is for a question with image answer choices*/
        
        /* Start copying right AFTER this instruction */
//        {"question": "Write the question here", 
//         "answers": [
//             {
//                "img": "Put a link to an image here. It should start with 'http' and end with '.jpg' or '.png'.",
//		        "source": "Source: write the source here", 
//                "result": 1
//             },
//             {
//                "img": "Put a link to an image here. It should start with 'http' and end with '.jpg' or '.png'.",
//		        "source": "Source: write the source here", 
//                "result": 2
//             },
//             {
//                "img": "Put a link to an image here. It should start with 'http' and end with '.jpg' or '.png'.",
//		        "source": "Source: write the source here", 
//                "result": 3
//             },
//             {
//                "img": "Put a link to an image here. It should start with 'http' and end with '.jpg' or '.png'.",
//		        "source": "Source: write the source here", 
//                "result": 4
//             },
//             
//             /* If you need more answer choices, 
//             copy and paste a section- from the { to the } and the comma -
//             above this instruction, beneath the last choice section. */
//         ]
//        },  /* Stop copying right BEFORE this instruction */
        
      
        
        /* Paste the rest of the questions beneath this instruction */
        
        
 
         {"question": "What is your favorite holiday other than Halloween?", 
         "answers": [
             {
                "text": "payday", 
                "result": 1
             },
             
             {
                "text": "my birthday", 
                "result": 2
             },
             
             {
                "text": "Christmas, of course", 
                "result": 3
             },
             
		     {
                "text": "Labor day... I hate working", 
                "result": 4
             },
            ]
         },
               {"question": "What is the most important part of picking a costume?", 
         "answers": [
             {
                "text": "how I look in it", 
                "result": 2
             },
             
             {
                "text": "it needs to be culturally relevant", 
                "result": 1
             },
             
             {
                "text": "whatever my friends can do with me", 
                "result": 3
             },
             
		     {
                "text": "minimum effort, maximum humor", 
                "result": 4
             },]},
               {"question": "What is your favorite thing about Halloween?", 
         "answers": [
             {
                "text": "candy", 
                "result": 3
             },
             
             {
                "text": "showing off my great sense of humor", 
                "result": 4
             },
             
             {
                "text": "getting the chance to be someone else", 
                "result": 1
             },
             
		     {
                "text": "parties!!!", 
                "result": 2
             },]},
               {"question": "What do you think of this quiz?", 
         "answers": [
             {
                "text": "not enough pop cultural references ", 
                "result": 1
             },
             
             {
                "text": "it was so cute", 
                "result": 3
             },
             
             {
                "text": "Sorry but it just wasn't very funny", 
                "result": 4
             },
             
		     {
                "text": "why am I still here?", 
                "result": 2
             },       ]}
        
        
        
        
    ]
};
