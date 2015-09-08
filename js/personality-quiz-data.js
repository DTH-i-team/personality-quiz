quiz_data = {

    "title": "Which fruit are you?",
    "description": "Everyone likes fruit. Take this quiz to find out which fruit you're most like. It'll be fun, promise.",

    /*
    This is the text that will appear when the user gets their results. 
    */
    "results": [
        {"label": "Pineapple",
        "description": "Pineapples are spiky but also delicious. Nature can be mean like that."},
        
        {"label": "Orange",
        "description": "Did you know that the word 'orange' wa first used for the fruit, and then the color? Oranges are chock-ful of trivia, and vitamin C."},
        
         {"label": "Apple",
        "description": "My favorite type of apple is the caramel apple because it feels sort of healthy but it isn't at all."},
        
        {"label": "Strawberry",
        "description": "Strawberries aren't straws or berries. What's up with that?"}
    ],
        
    /* "effect" describes how that answer adds to the total score for each result. Each number corresponds to one of the possible results, in the same order as listed above. These numbers can be negative, 0, or positive. */
    "questions": [
        {"question": "What is your favorite color?", 
         "answers": [
             {"text": "Red", 
              "effect": [0,0,1,1]
             },
             {"text": "Orange", 
              "effect": [0,1,0,0]
             },
             {"text": "Yellow", 
              "effect": [1,0,0,0]
             }
         ]
        },
        {"question": "Do you consider yourself more sweet or sour?", 
         "answers": [
             {"text": "Sweet", 
              "effect": [0,1,1,0]
             },
             {"text": "Sour", 
              "effect": [1,0,0,1]
             }
         ]
        },        
        {"question": "What's your favorite food?", 
         "answers": [
             {"text": "Pie", 
              "effect": [0,0,1,0]
             },
             {"text": "Salad", 
              "effect": [0,0,0,1]
             },
             {"text": "Pizza", 
              "effect": [1,0,0,0]
             },
             {"text": "Chicken", 
              "effect": [0,1,0,0]
             }
         ]
        }      
    ]

};