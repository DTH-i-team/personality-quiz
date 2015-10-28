$(document).ready(function(){
    var quiz = $("#quiz");
    quiz.append("<div id='heading'></div>");
    quiz.append("<div id='questions'></div>");
    quiz.append("<button id='quiz-submit'>See Your Results</button>");
    quiz.append("<div id='quiz-results'><h3></h3><figure><img><figcaption></figcaption></figure><p></p></div>");

    appendHeading();
    appendQuestions(quiz_data.questions);
   
    $("#quiz-submit").click(scoreQuiz);
});

function appendHeading(){
    $("#heading").append("<h1>"+quiz_data.title+"</h1>");
    $("#heading").append("<p>"+quiz_data.description+"</p>");
}

function appendQuestions(questions){
     for (var q in questions){
        var question_div = document.createElement("div");
        question_div.className = "question";
        
        //append question text
        var question = document.createElement("h3");
        question.innerText = questions[q].question;
        $(question_div).append(question);
         
        //append answers
        appendAnswers(q, questions[q].answers, question_div);

        $("#questions").append(question_div);
    }
}

function appendAnswers(q, answers, question_div){
     for (var i in answers){
         var a = answers[i];
         var answer_div = document.createElement("div");
         
         var template;
         if (a.img_src){
            template = document.getElementById("image-option").content;
            template.querySelector("img").src = a.img_src;
            template.querySelector("figcaption").textContent = a.text;
         } else {
            template = document.getElementById("text-option").content;
            template.querySelector("span").textContent = a.text;
         }
         
        var input = template.querySelector("input");
        input.value = i;
        input.name = q;

        var clone = document.importNode(template, true);
        answer_div.appendChild(clone);
         
        $(question_div).append(answer_div);
    }
}

function isCompleted(){
    var questions = $(".question");
    var answers = [];
    //contains indices of the answer chosen
    
    var unanswered = false;
    questions.each(function(i, el){
        var radio_buttons = $(this).find("input");
        radio_buttons.each(function(j, el){
            if (this.checked){
                answers[i] = j;
                return;
            }
        });
        if (typeof(answers[i]) == "undefined"){
            unanswered = true;
            return false;
        }
    });
    if (unanswered){
        return false;
    }
    return answers;
}

function scoreQuiz(){
    var responses = isCompleted();
    if (responses){
        var totals = quiz_data.questions[0].answers[responses[0]].effect;

        for (var i=1;i<responses.length;i++){
            var effect = quiz_data.questions[i].answers[responses[i]].effect;
            for (e in effect){
                totals[e] += effect[e];
            }
        }
        
        var highest = totals[0];
        var highest_t = 0;
        for (var t=1;t<totals.length;t++){
            if (totals[t]>highest){
                highest = totals[t];
                highest_t = t;
            }
        }
        
        showResults(highest_t);
        
    } else {
        $("#quiz-results").text("You missed a question!");
        setTimeout(function(){$("#quiz-results").text("");}, 3000);
    }
}

function showResults(index){
    var result = quiz_data.results[index];
    $("#quiz-results").text(result.label);
    $("#quiz-results img")[0].src = result.img_src;
    $("#quiz-results p").text(result.description);  
    $("#quiz-results figcaption").text(result.text);
}