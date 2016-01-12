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
    
    "title": "Which Star Wars' heroine are you?",
    "description": "For those of you who haven't seen the new Star Wars movie, you are sad and you need to reevaluate your life goals. For those of you who have, this quiz will help you find out which kick-butt sci-fi babe you are! (Unless you are all of them in which case you are a goddess)",

    
    
    /*
    This section lists all of the possible results of the quiz. 
    When the reader finishes, one of these results will be shown.
    */
    
    "results": [
        
        /* Result 1 */
        {
        "title": "Leia",
        "description": "The heart, soul and brains of the Resistance, General Leia Organa is the Bomb.com. Old and Botox-ed up or young and incredibly sexy, Leia is one tough chick. You don't have to be an original fan to know how awesome Leia is, she and the original trio are pop culture icons, famous the world-over. You will also be most likely remembered for your rockin' fashion sense and tough commandeering attitude. Don't let the men in your life walk all over you! Take a stand, make a change for yourself, and I can promise that you will be remembered for a long, long time in galaxies far, far away.", 
        "img": "http://vignette2.wikia.nocookie.net/starwars/images/3/30/LeiaOrganaTFA.png/revision/latest/scale-to-width-down/500?cb=20151225164732",
	   "source": "Source: Starwars.wikia.com",
        },
        
        /* Result 2 */
        {
        "title": "Rey",
        "description": "A certified ass-whooper with her double-edged scavver stick and Luke's own lightsaber, Rey (Last name not yet revealed) is 100% the chick I'd like to be. She's got a tragic backstory that we've barely touched on, a fab hairstyle that rivals Leia's classic two curled buns, and a kick-butt attitude that doesn't need your permission or approval! In addition to being grade A awesome, she has not one, but two cool sidekicks! BB-8 and Chewbacca are awesome in their own right and, combined with Rey's technical and piloting know-how, make her the best character of any and all Star Wars reboots. Like her, you know how to keep cool in the Jakku sun while making sure to pack some heat for your frosty battle with the Dark Side. Rock on, Rey!", 
        "img": "https://cdn0.vox-cdn.com/thumbor/EX8M7ujZiWshhBifJkFQMeZc5Ow=/1468x0:3268x1200/1280x854/cdn0.vox-cdn.com/uploads/chorus_image/image/48393289/star_wars_the_force_awakens_rey-3840x1200.0.0.jpg",
	    "source": "Source: Theverge.com",
        },
        
        /*  Result 3 */
        {
        "title": "Captain Phasma",
        "description": "Although not technically a heroine, she's still an epic (evil) badass. Voiced by Gwendoline Christie, or Brienne of Tarth on the popular HBO TV series Game of Thrones, this metallic-clad stormtrooper is fierce with a capital F (She also becomes the butt of a joke between Han Solo and older audiences when she is tossed in the garbage chute of the new death star circa Episode 4, but just don't think about that). Like her, you're Fierce and loyal to your cause, even if it's probably not the right one.", 
        "img": "https://s-media-cache-ak0.pinimg.com/564x/27/18/aa/2718aa80b35efcf616413b2babacbd04.jpg",
	    "source": "Source: Pinterest.com",
        },
        
        /*  Result 4 */
        {
        "title": "Maz Kanata",
        "description": "Kind and quirky, Maz Kanata is the eerily omniscient, but still somehow lovable sideshow character that rounds off the cast of Star Wars heroines. She is the quirky Segway into a slice of Resistance life, and the badass bartender of the cutest little watering hole outside Mos Eisley Cantina. In addition to being cute and tiny with a penchant for adorkable large glasses, Maz is voiced by none other than Lupita N'yong, goddess of the stage and overall shining light of my life. Just like you! You make people stare, you light up a room with your unique personality, and you can definitely handle your own in a bar fight!", 
        "img": "http://vignette2.wikia.nocookie.net/starwars/images/3/37/Maz_Kanata_VD.jpg/revision/latest?cb=20151225003446",
	    "source": "Source: Starwars.wikia.com",
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
       {"question": "Describe your ideal day.", 
         "answers": [
             {
                "text": "Wake up, contemplate the misery of my existence, scavenge for parts among the huge-ass wreckage of an Empire command ship, sell those parts for food that just barely keeps me alive, and play with my droid in the sand while I wait for a family I know deep-down is never coming back for me. Wait, you said ideal day? Oh hold on, I want to change my answer...", 
                "result": 2
             },
             
             {
                "text": "Serving for the glory of the First Order.", 
                "result": 3
             },
             
             {
                "text": "Relaxing on a beach somewhere in the galaxy with my Wookie boyfriend while a certain useless scavenger pays for his exorbitant tab by running my bar and dealing with the extraterrestrial crazies that drink there.", 
                "result": 4
             },
             
		     {
                "text": "Finding my brother and dragging him home from his soul-searching journey, while also hauling my husband and son back home and giving them all a serious talking to! (With some disappointed frowns and well-deserved face-slaps thrown in for good measure) ", 
                "result": 1
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  {"question": "Pick a favorite color.", 
         "answers": [
             {
                "text": "I do not have a favorite color. I do not have a favorite anything. Preferences are meaningless and so is your existence.", 
                "result": 3
             },
             
             {
                "text": "Green Ð everything Jakku wasn't.", 
                "result": 2
             },
             
             {
                "text": "Blue, like Luke's lightsaber.", 
                "result": 1
             },
             
		     {
                "text": "I think this orange looks good with my skin, don't you?", 
                "result": 4
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  {"question": "Who's your Star Wars hubby?", 
         "answers": [
             {
                "text": "The only man for me is Han Solo (Though I'd prefer the 1977 model over this 2015 version).", 
                "result": 1
             },
             
             {
                "text": "I prefer my men with a little more hair on their chest. (Rrrawwarghh!)", 
                "result": 4
             },
             
             {
                "text": "Hit me up with those Resistance boys! The F in Fin stands for Fine, oh my! And the P in Poe means Perfect!", 
                "result": 2
             },
             
		     {
                "text": "General Hux is my commander, but I would follow the orders of Kylo Ren without hesitation as well.", 
                "result": 3
             },
             
             /* If you need more answer choices, 
             copy and paste a section- from the { to the } and the comma -
             above this instruction, beneath the last choice section. */
         ]
        },  {"question": "Use the Force, Luke!", 
         "answers": [
             {
                "text": "Although I supposedly have the force considering I'm sister to a Jedi and the daughter of one of the most feared beings in the galaxy, I haven't shown any signs of being able to use the Force. I would call that a crying shame if I still didn't have hope that one day I will be able to take up my brother's lightsaber and cut those First Order jerks a new one. For now, I suppose I should be content with the fact that I was described as having the power in the new trailer while my brother narrated, but I will be patiently waiting for the day when I too can wield the devastating power my brother and son command.", 
                "result": 1
             },
             
             {
                "text": "I'm kind of new at this, don't rush me! (You will release these restrains and leave this cell with the door open...)", 
                "result": 2
             },
             
             {
                "text": "My clearance level does not extend to a working knowledge of the Force.", 
                "result": 3
             },
             
		     {
                "text": "The Force is all around us. I have no need to use it, only feel it.", 
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
        
        
        
        
        
        
        
    ]
};