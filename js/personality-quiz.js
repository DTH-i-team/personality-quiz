$(document).ready(function(){
    var quiz = $("#quiz");
    quiz.append("<div id='heading'></div>");
    quiz.append("<div id='questions'></div>");
    quiz.append("<button id='submit'>See Your Results</button>");
    quiz.append("<div id='results'></div>");

    appendHeading();
    appendQuestions(quiz_data.questions);
   
    $("#submit").click(scoreQuiz);
});

function appendHeading(){
    $("#heading").append("<h1>"+quiz_data.title+"</h1>");
    $("#heading").append("<p>"+quiz_data.description+"</p>");
}

function appendQuestions(questions){
     for (q in questions){
        var question_div = document.createElement("div");
        question_div.className = "question";
        
        //append question text
        var question = document.createElement("h3");
        question.innerText = questions[q].question;
        $(question_div).append(question);
        
        //append answers
        appendAnswers(questions[q].answers, question_div);

        $("#questions").append(question_div);
    }
}

function appendAnswers(answers, question_div){
     for (a in answers){
        var answer_div = document.createElement("div");

        $(answer_div).append('<input type="radio" name="'+q+'" value="'+a+'">' +answers[a].text+'<br>');
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
        $("#results").text("You missed a question!");
        setTimeout(function(){$("#results").text("");}, 3000);
    }
}

function showResults(index){
    var result = "<h3>"+quiz_data.results[index].label+"</h3> <p>"+quiz_data.results[index].description+"</p>";
    
    $("#results")[0].innerHTML = result;    
}