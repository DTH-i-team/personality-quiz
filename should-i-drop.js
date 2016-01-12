/*

INSTRUCTIONS:

This template will be processed by a computer program,

so formatting is VERY important.

Make sure not to delete or switch around any quotes, commas, colons,

parentheses, or brackets.

Do not start new lines (i.e. type Enter) inside a set of double?quotes.

Only start new lines when copying?pasting or on a blank line.

Anything inside these symbols:

/ * * /

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

"title": "Should you drop your class?",

"description": "ConnectCarolina has been known to screw over a student or two with its faulty coding, but not getting enrolled in the class you need isn't the worst thing ConnectCarolina can do to you. It's actually the deceitful course descriptions for electives that make terribly boring classes sound like a rich and engaging yet fun educational expereince that'll really screw you over. So, you took a risk and now you're feeling unsure about what to do. Let us help you figure out what you should do.",



/*

This section lists all of the possible results of the quiz.

When the reader finishes, one of these results will be shown.

*/

"results": [

/* Result 1 */

{

"title": "Drop it!",
"description": "Kid, get out of there while you can. Don't look back. That class will be the end of you. Your GPA will thank you.",
"img": "https://s3.amazonaws.com/media.dth/30619_student_uniono.jpg",
"source": "UNC Virtual Museum",
},

/* Result 2 */

{

"title": "Wait a week & then decide!",

"description": "This class could be the learning experience of a lifetime or a nightmare dressed like a daydream. Give it some time and feel it out before you decide!",

"img": "https://s3.amazonaws.com/media.dth/30622_phillips_hallo.jpg",
"source": "UNC Law",
},

/* Result 3 */

{

"title": "Pass/Fail it!",

"description": "It seems like a difficult class but it'll probably look really good on your transcript. Make it pass/fail to get the credit for half the work.",

"img": "https://s3.amazonaws.com/media.dth/30626_wilsonlibrarysilswebstieo.jpg",
"source": "UNC SILS",
},

/* Result 4 */

{

"title": "Stick with it! You got this!",

"description": "This class is a gift from the Carolina gods. Take your blessings and get that 4.0 this semester.",

"img": "https://s3.amazonaws.com/media.dth/30627_globalcenteruncdthstoryo.jpg",
"source": "UNC Virtual Museum",
},

/*

If you have more than 4 results, copy one of the above sections

and paste it RIGHT AFTER the last one, BEFORE this instruction.

Make sure to copy the whole thing

from the opening bracket { to the closing bracket } and the comma.

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

/* This section is for a question with text answer choices */

/* Start copying right AFTER this instruction */

{"question": "How would you describe your TA?",

"answers": [

{

"text": "Younger than me",

"result": 1

},

{

"text": "Cute and Quirky",

"result": 2

},

{

"text": "Hot as heck",

"result": 3

},

{

"text": "There are no TAs",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

/* Stop copying right BEFORE this instruction. Include the } and comma */

/*This section is for a question with image answer choices*/

/* Start copying right AFTER this instruction 

{"question": "Write the question here",

"answers": [

{

or '.png'.",

"img": "Put a link to an image here. It should start with 'http' and end with '.jpg'

"source": "Source: write the source here",

"result": 1

},

{

or '.png'.",

"img": "Put a link to an image here. It should start with 'http' and end with '.jpg'

"source": "Source: write the source here",

"result": 2

},

{

or '.png'.",

"img": "Put a link to an image here. It should start with 'http' and end with '.jpg'

"source": "Source: write the source here",

"result": 3

},

{

or '.png'.",

"img": "Put a link to an image here. It should start with 'http' and end with '.jpg'

"source": "Source: write the source here",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. 

]

},

/* Stop copying right BEFORE this instruction. Include the } and comma */

/* Paste the rest of the questions beneath this instruction 

{"question": “How would you describe your TA?“,

"answers": [

{

"text": “Younger than me“,

"result": 1

},

{

"text": “Cute and Quirky“,

"result": 2

},

{

"text": “Hot as heck”,

"result": 3

},

{

"text": “There are no TAs“,

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. 

]

},
*/

{"question": "Where is your class located?",

"answers": [

{



"text": "Dey Hall",

"result": 1

},

{

"text": "FedEx Global Center",

"result": 2

},

{

"text": "Phillips Hall",

"result": 3

},

{

"text": "Another building not listed",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

{"question": "What time is the class?",

"answers": [

{



"text": "8 a.m.",

"result": 1

},

{

"text": "Mid-morning",

"result": 2

},

{

"text": "Late afternoon or Evening",

"result": 3

},

{

"text": "Early afternoon",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

{"question": "What is the class number?",

"answers": [

{



"text": "101",

"result": 1

},

{

"text": "102-250",

"result": 2

},

{

"text": "251-399",

"result": 3

},

{

"text": "Above 400",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

{"question": "Is attendance part of your grade?",

"answers": [

{



"text": "Yeah, about 20%",

"result": 1

},

{

"text": "Yeah, about 10%",

"result": 2

},

{

"text": "There's a 'sign-in' sheet",

"result": 3

},

{

"text": "Nope!",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

{"question": "How would you best describe the textbook for the class?",

"answers": [

{



"text": "Thicker than the Bible",

"result": 1

},

{

"text": "Expensive & out of stock",

"result": 2

},

{

"text": "It's the latest edition",

"result": 3

},

{

"text": "No textbook!",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

{"question": "What did your professor do on FDOC?",

"answers": [

{



"text": "Actually taught a lesson the whole time",

"result": 1

},

{

"text": "Actually taught a lesson but let you leave early",

"result": 2

},

{

"text": "I'm not sure - I was texting the whole time",

"result": 3

},

{

"text": "Handed out copies of the syllabus and made corny jokes",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

{"question": "How often does the phrase 'group project' appear in the syllabus?",

"answers": [

{



"text": "More than once",

"result": 1

},

{

"text": "I haven't read the syllabus yet",

"result": 2

},

{

"text": "Once",

"result": 3

},

{

"text": "Not at all!",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

]

};