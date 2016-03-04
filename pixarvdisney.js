/*

INSTRUCTIONS:

This template will be processed by a computer program,

so formatting is VERY important.

Make sure not to delete or switch around any quotes, commas, colons,

parentheses, or brackets.

Do not start new lines (i.e. type Enter) inside a set of double­quotes.

Only start new lines when copying­pasting or on a blank line.

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

"title": "Disney or Pixar? Which one are you?",

"description": "Zootopia, Disney's new movie, is coming out on Friday, March 4. You never get tired of animated films. In fact, it seems like the older you get, the more you enjoy watching furry creatures talk and make sarcastic jokes. Find out if you’re a Pixar or Disney.",

/*

This section lists all of the possible results of the quiz.

When the reader finishes, one of these results will be shown.

*/

"results": [

/* Result 1 */

{

"title": "Pixar",

"description": "The world is too small for you! A natural adventurer, you seek for something new and exhilarating day by day. Keep at it and... 'To infinity... and beyond!'",

"img": "https://s3.amazonaws.com/media.dth/32296_pixarlogof.jpg",
"source": "Source: Fandom Wikia",

},

/* Result 2 */

{

"title": "Disney",

"description": "You're a classic romantist. Dream on and someday that perfect person will be on your doorstep with a pair of glass slippers or a magic lamp. 'Hakuna Matata!'",

"img":"https://s3.amazonaws.com/media.dth/32293_walt_disney_picturesf.jpg",
"source": "Source: Picgifs.com",

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

questions with text answer choices and questions with image answer

choices.

The first section has text answers. The second section has image

answers.

For the rest of the questions, copy and paste whichever of the 2 you want.

*/

"questions": [

/* This section is for a question with text answer choices */

/* Start copying right AFTER this instruction */

{"question": "What's your dream car?",

"answers": [

{

"text": "A white horse with a shiny black mane.",

"result": 2

},

{

"text": "A flying carpet.",

"result": 2

},

{

"text": "I'm building one in my garage. Top Secret.",

"result": 1

},

{

"text": "I make good use of my trusty feet.",

"result": 1

},

/* If you need more answer choices,

copy and paste a section­ from the { to the } and the comma ­

above this instruction, beneath the last choice section. */

]

}, /* Stop copying right BEFORE this instruction */

{"question": "Who would you spend your leap day with?",

"answers": [

{

"text": "Me, myself and I.",

"result": 1

},

{

"text": "Friends, duh.",

"result": 1

},

{

"text": "I'm taken. I have my girlfriend/boyfriend.",

"result": 2

},

{

"text": "Family.",

"result": 1

},

/* If you need more answer choices,

copy and paste a section­ from the { to the } and the comma ­

above this instruction, beneath the last choice section. */

]

},

{"question": "Favorite garments?",

"answers": [

{

"text": "I prefer nudity.",

"result": 1

},

{

"text": "Ribbons and laces.",

"result": 2

},

{

"text": "Something clunky ­like a robot suit.",

"result": 1

},

{

"text": "A smart suit and a vest.",

"result": 2

},
]
},

{"question": "Which one are you?",

"answers": [

{

"text": "A talking dragon.",

"result": 2

},

{

"text": "A furry rabbit.",

"result": 2

},

{

"text": "A robot.",

"result": 1

},

{

"text": "An alien.",

"result": 1

},
]
},

{"question": "Do you...",

"answers": [



{

"text": "Blindly fight for justice.",

"result": 2

},

{

"text": "Hear both sides of the argument and come to a conclusion.",

"result": 1

},

/* If you need more answer choices,

copy and paste a section­ from the { to the } and the comma ­

above this instruction, beneath the last choice section. */

]

},

/* If you need more answer choices,

copy and paste a section­ from the { to the } and the comma ­

above this instruction, beneath the last choice section. */



/*This section is for a question with image answer choices*/

/* Start copying right AFTER this instruction */

{"question": “Where would you live?“,

"answers": [

{

"img":"https://s3.amazonaws.com/media.dth/32294_mermaid_housef.jpg",



"source": "Source: Stylist UK",

"result": 2

},

{

"img":"https://s3.amazonaws.com/media.dth/32295_toy_story_housef.jpg",



"source": "Source: Pixar Post",

"result": 1

},

{

"img":"https://s3.amazonaws.com/media.dth/32297_bugs_cityf.png",



"source": "Source: Pixar Post",

"result": 1

},

{

"img":"https://s3.amazonaws.com/media.dth/32292_dwarfcottagef.jpg",



"source": "Source: Disney Wikia",

"result": 2

},

/* If you need more answer choices,

copy and paste a section­ from the { to the } and the comma ­

above this instruction, beneath the last choice section. */

]

},

]
};
