// Default V2 theme
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';

export default function () {
    const questions =[
        {
                type: "radiogroup",
                name: "question1",
                title: "Which of the following is an essential item for starting a campfire?",
                choices: [
                    "Plastic Bottles", "Matches", "Fruit", "Electronics"
                ],
                correctAnswer: "Matches"
            },
        {
                type: "radiogroup",
                name: "question2",
                title: "What is the most appropriate method for purifying water while camping?",
                choices: [
                    "Salt", "Boiling", "Lemon Juice", "Sit in the Sun"
                ],
                correctAnswer: "Boiling"
            },
        {
                type: "radiogroup",
                name: "question3",
                title: "Which type of tent is typically easiest to set up??",
                choices: [
                    "Canvas", "Dome", "Teepee", "Cabin"
                ],
                correctAnswer: "Slip and fall accidents"
            },
        {
                type: "radiogroup",
                name: "question4",
                title: "What should you do with your trash?",
                choices: [
                    "Leave it", "", "quart", "cup"
                ],
                correctAnswer: "tbsp"
            },
        {
                type: "radiogroup",
                name: "question5",
                title: "What is the most common cause of lifeguard injuries?",
                choices: [
                    "Slip and fall accidents", "Pool chemicals", "Sunburns", "Sharks"
                ],
                correctAnswer: "Slip and fall accidents"
            },
        {
                type: "radiogroup",
                name: "question6",
                title: "How much sunscreen should you apply?",
                choices: [
                    "tsp", "tbsp", "quart", "cup"
                ],
                correctAnswer: "tbsp"
            },
        {
                type: "radiogroup",
                name: "question7",
                title: "What is the most common cause of lifeguard injuries?",
                choices: [
                    "Slip and fall accidents", "Pool chemicals", "Sunburns", "Sharks"
                ],
                correctAnswer: "Slip and fall accidents"
            },
        {
                type: "radiogroup",
                name: "question8",
                title: "How much sunscreen should you apply?",
                choices: [
                    "tsp", "tbsp", "quart", "cup"
                ],
                correctAnswer: "tbsp"
            },
        {
                type: "radiogroup",
                name: "question9",
                title: "What is the most common cause of lifeguard injuries?",
                choices: [
                    "Slip and fall accidents", "Pool chemicals", "Sunburns", "Sharks"
                ],
                correctAnswer: "Slip and fall accidents"
            },
        {
                type: "radiogroup",
                name: "question10",
                title: "How much sunscreen should you apply?",
                choices: [
                    "tsp", "tbsp", "quart", "cup"
                ],
                correctAnswer: "tbsp"
            },
    ];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Lifeguard Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Lifeguard Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
            }, {
                type: "text",
                name: "username",
                titleLocation: "hidden",
                isRequired: true
            }]
        }, {
            elements: [questions[nQuestion]]
        }]
    };
    const survey = new Model(surveyJson);

    survey.onComplete.add(function (sender) {
        var questions = sender.getAllQuestions();
        for (var i = 0; i < questions.length; i++) {
            var question = questions[i];
            var correctAnswer = question.correctAnswer;
            var userAnswer = question.value;
            var questionTitle = question.title;
            console.log("Question: " + questionTitle);
            console.log("Correct Answer: " + correctAnswer);
            console.log("User Answer: " + userAnswer);
        }
    });

    return <Survey model={survey} />;
}