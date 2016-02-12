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

"title": "How should you love yourself this week?",

"description": "Valentine's Day is a time to celebrate and spread love, and that includes loving yourself. Besides making (or avoiding) Valentine's Day plans with bae (or friends) this week, find a new way to show yourself the love and self?care we all deserve.",

/*

This section lists all of the possible results of the quiz.

When the reader finishes, one of these results will be shown.

*/

"results": [

/* Result 1 */

{

"title": "Workout a lil' bit",

"description": "Hitting the gym for just 20 minutes will boost your self?-confidence. And nothing says loving yourself like having self?-esteem.",

"img":"http://giphy.com/gifs/nicki?minaj?anaconda?rwLHPoT3Vunvy",

"source": "Giphy.com",

},

/* Result 2 */

{

"title": "Online Shopping",

"description": "Retail therapy is no crime (unless you've stolen someone's identity). Don't let those little brown bebe boots (29 DOLLARS!!!) in your shopping cart keep collecting virtual dust. Order them today— you'll have something to look forward to in the mail!",

"img":"http://giphy.com/gifs/90s?clueless?cher?horowitz?MEgGD8bV72hfq",

"source": "Giphy.com",
},

/* Result 3 */

{

"title": "Hydrate every morning",

"description": "Drink a full glass of water each morning before you do ANYTHING. Hydration is key to physical health, which your emotional health tends to measure.",

"img": "http://giphy.com/gifs/water?glass?jEn9zDTW5jaSc",
"source": "Giphy.com";

},

/* Result 4 */

{

"title": "Stick with it! You got this!",

"description": "Rub your whole body down each night with some lotion after your evening shower. Lathering up with lotion at the end of the day is a great way to keep your skin glowing and remind yourself that your body is a wonderland.",

"img":"http://giphy.com/gifs/reaction?6aiIvESLiA9WM",

"source": "Giphy.com";

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

{"question": "What has you stressing this week?",

"answers": [

{

"text": "The UNC?-Duke Ticket Lottery",

"result": 1

},

{

"text": "Finding an internship",

"result": 2

},

{

"text": "School work",

"result": 3

},

{

"text": "This week's cold temps!",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},

/* Stop copying right BEFORE this instruction. Include the } and comma */


/*This section is for a question with image answer choices*/

/* Start copying right AFTER this instruction */

{"question": "Which UNCelebrity would you go to for advice?",

"answers": [

{

"img": "https://s3.amazonaws.com/media.dth/26329_img_8222o.jpg",
"source": "Source: DTH/Chris Griffin",

"result": 1

},

{

"img": "https://s3.amazonaws.com/media.dth/25673_1023_carolfolt_hemmer115o.jpg",
"source": "Source: DTH/Catherine Hemmer",
"result": 2

},

{

"img":"https://s3.amazonaws.com/media.dth/30310_1104_ramses_zhenwei_zhang_233o.jpg",
"source": "Source: DTH/Zhenwei Zhang",
"result": 3

},

{

"img": "https://s3.amazonaws.com/media.dth/9618_1703518801o.jpg",
"source": "Source: DTH/Jordan Lawrence",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},




{"question": "Which music artist is your inner? goddess?",

"answers": [

{

"text": "Nicki Minaj",

"result": 1

},

{

"text": "Beyonce",

"result": 2

},

{

"text": "Madonna",

"result": 3

},
{

"text": "Lana del Rey",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},



{"question": "What is your relationship status?",

"answers": [

{

"text": "Single :)",

"result": 1

},

{

"text": "Single :(",

"result": 2

},

{

"text": "Cuffed",

"result": 3

},
{

"text": "Complicated",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},



{"question": "What's your sign?",

"answers": [

{

"text": "Aries, Gemini, Scorpio",

"result": 1

},

{

"text": "Sagittarius, Aquarius, Taurus",

"result": 2

},

{

"text": "Leo, Capricorn, Virgo",

"result": 3

},
{
"text": "Cancer, Libra, Pisces",

"result": 4

},

/* If you need more answer choices,

copy and paste a section? from the { to the } and the comma ?

above this instruction, beneath the last choice section. */

]

},



]

};
