var testGen = {
    wrapper: '',
    listQuestion: '',
    question: '', 
    createWrapper: function(parent) {
        this.wrapper = document.createElement('form');
        this.wrapper.classList.add('wrapper');
        this.wrapper.style.width = '600px';
        parent.appendChild(this.wrapper);
    },
    createHeader: function(textHeader) {
        var header = document.createElement('p');   
        header.innerHTML = textHeader;
        header.style.textAlign = 'center';
        header.style.margin = '20px 0px';
        this.wrapper.appendChild(header);
    },
    createListQuestion: function() {
        this.listQuestion = document.createElement('ol');
        this.listQuestion.classList.add('list');
        this.wrapper.appendChild(this.listQuestion);
    },
    createQuestion: function(textQuestion) {
        var li = document.createElement('li');
        li.innerHTML = textQuestion;
        this.question = document.createElement('ul');
        this.question.setAttribute('type','none');
        li.appendChild(this.question);
        this.listQuestion.appendChild(li);
    },
    createAnswer: function(textAnswer) {
        var li = document.createElement('li');
        var answer = document.createElement('label');
        var check = document.createElement('input');
        check.setAttribute('type','checkbox');
        answer.appendChild(check);
        answer.appendChild(document.createTextNode(textAnswer));
        li.appendChild(answer);
        this.question.appendChild(li);
    },
    createSubmit: function(textSubmit) {
        var submit = document.createElement('input');
        submit.setAttribute('type','submit');
        submit.setAttribute('value',textSubmit);
        submit.style.margin = '30px 0 0 200px';
        submit.style.background = 'LightBlue';
        submit.style.padding = '10px 20px';
        this.wrapper.appendChild(submit);
    }
};

var body = document.querySelector('body');
body.style.fontFamily = 'sans-serif';
body.style.lineHeight = '25px';
testGen.createWrapper(body);
testGen.createHeader('Тест по программированию');
testGen.createListQuestion();
var num_question = 3;
var num_answer = 3;
for (var i=1; i<num_question+1; i++) {
    testGen.createQuestion('Вопрос №'+i);
    for (var j=1; j<num_answer+1; j++)
        testGen.createAnswer('Вариант ответа №'+j);
}
testGen.createSubmit('Проверить мои результаты');

