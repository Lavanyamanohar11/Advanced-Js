//I'm using IIFE

(function(){

    var totalScore = 0;

    function Question(question, answers, correctAns){
        this.question = question;
        this.answers = answers;
        this.correctAns = correctAns;
    }

    Question.prototype.displayQuestion = function(){
        console.log(this.question);
        for(var i=0; i< this.answers.length; i++){
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(){
        var answer = prompt('Type the correct number(eg.0,1 etc). Type "exit" to end.')
        if(answer.trim() === 'exit')
            return;
        if(this.correctAns === parseInt(answer)){
            console.log('Correct Ans!');
            totalScore++;
        }
        else{
            console.log('Wrong Ans :(');
        }
        console.log('Your Score: '+ totalScore);
        console.log('-------------------------');
        AskQue();
    }

    var q1 = new Question('What\'s ur name? ',['Lav','Bheem','Hattori'], 0);
    var q2 = new Question('Like ice-cream? ', ['no', 'yes'], 1);
    var q3 = new Question('Which year? ', ['first', 'second','third'], 2);

    var questions = [q1, q2, q3];

    function AskQue(){
        var n = Math.floor( Math.random()*questions.length);
        questions[n].displayQuestion();
        questions[n].checkAnswer();
    }

    AskQue();

})();




