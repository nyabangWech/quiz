const question =[
    {
        question:"which is the largest animal in the world?",
        answers:[
            {text:"shark", correct:false},
            {text:"bluewhale", correct:true},
            {text:"elephant", correct:false},
        ]
    },
    {
        question:"which is the smallest countient in the world?",
        answers:[
            {text:"Asia", correct:false},
            {text:"Austaralia", correct:true},
            {text:"Africa", correct:false},
        ]
    }
];
const quesElement= document.getElementById("ques");
const buttonsanswerElement = document.getElementById("buttonsanswer");
const nextElement = document.getElementById("next");
let current


