# personality-quiz
Files for generating a "Which -whatever- Are You?" type quiz. 

To write the quiz, open the "personality-quiz-data.js" file. This file defines the introductory text, questions, answers, scoring system, and possible results. If you have a code text editor, open it there for more readability. 

The structure of this file is basically a hierarchy. The top-level elements are "title", "description", "results", and "questions". 

- "title" and "description" are just text. 

- "results" is a list of possible results of the quiz. Each item is contained in a set of curly brackets, and it consists of the elements "label" and "description". "label" and "description" are just text.

- "questions" is a list of all the questions in the quiz. Each item is contained in curly brackets and consists of the elements "question" and "answers". "question" is the actual text of the question. 

- "answers" is a list of all the possible answers for that question. Each item is contained in curly brackets and consists of the elements "text" and "effect". "text" is the part that is displayed to the reader.

- "effect" is a list of numbers defining how that answer affects the result of the quiz. Each number corresponds to one of the possible results, in the same order as listed in the "results" element. There must be exactly as many numbers as there are different results. The numbers can be positive, 0, or negative. When you add all the chosen "effect"s together, the result with the highest total will be the final result.

Formatting is VERY important. If the number and placement of curly brackets, square brackets, quote marks, colons, or commas is off, it won't work. (Indentation and spaces won't break the program, but it'll make the file harder to read and edit later without breaking the program, so try to maintain this too.) 
