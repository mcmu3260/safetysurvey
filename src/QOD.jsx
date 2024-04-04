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
                correctAnswer: "Matches, essential for starting a campfire because they provide the necessary ignition source to light the kindling and fuel."
            },
        {
                type: "radiogroup",
                name: "question2",
                title: "What is the most appropriate method for purifying water while camping?",
                choices: [
                    "Salt", "Boiling", "Lemon Juice", "Sit in the Sun"
                ],
                correctAnswer: "Boiling is the most effective method for purifying it, as it kills harmful bacteria, viruses, and parasites"
            },
        {
                type: "radiogroup",
                name: "question3",
                title: "Which type of tent is typically easiest to set up??",
                choices: [
                    "Canvas", "Dome", "Teepee", "Cabin"
                ],
                correctAnswer: "Dome are typically the lightest and easiest to set up due to their simple pole structure "
            },
        {
                type: "radiogroup",
                name: "question4",
                title: "What should you do with your trash?",
                choices: [
                    "Leave it", "Bury it", "Pack it", "Burn it"
                ],
                correctAnswer: "Pack it, helps to minimize the impact on the environment"
            },
        {
                type: "radiogroup",
                name: "question5",
                title: "What should you do if you encounter a wild animal?",
                choices: [
                    "Approach it", "Ignore it", "Scare it", "Offer food"
                ],
                correctAnswer: "Scare wild animals and prevent potential conflicts or encounters while ensuring your safety."
            },
        {
                type: "radiogroup",
                name: "question6",
                title: "Which of the following is an appropriate way to store food while camping?",
                choices: [
                    "Leave it out on a table", "Store it in sealed containers", "Scatter it around the campsite", "Hang it from a tree branch"
                ],
                correctAnswer: "Store it in sealed containers, helps to prevent wildlife from being attracted to the campsite"
            },
        {
                type: "radiogroup",
                name: "question7",
                title: "What is the recommended footwear for hiking in rugged terrain while camping?",
                choices: [ "High heels", "Sandals", "Flip flops", "Hiking boots",
                ],
                correctAnswer: "Hiking Boots provide the necessary support, traction, and protection reducing injury"
            },
        {
                type: "radiogroup",
                name: "question8",
                title: "Which of the following tools is essential for navigation while hiking in the wilderness?",
                choices: [
                    "Compass and map", "Smartphone with GPS", "Binoculars", "Sunglasses"
                ],
                correctAnswer: "Compass and map, provide guidance and direction, when electronics fail"
            },
        {
                type: "radiogroup",
                name: "question9",
                title: "What should you do before setting up a tent on a camping trip?",
                choices: [
                "Inflate the mattress", "Spray insect repellent", "Clear the ground of rocks, sticks, and debris", "Set up a hammock"
                ],
                correctAnswer: "Clear the ground of rocks, sticks, and debris to help to create a flat, comfortable surface"
            },
        {
                type: "radiogroup",
                name: "question10",
                title: "Which of the following is a safe practice when cooking over a campfire?",
                choices: [
                    "Pouring water on the fire to put it out quickly", "Cooking with flammable liquids", "Keeping a bucket of water nearby", "Building the fire close to the tent"
                ],
                correctAnswer: "Keeping a bucket of water nearby is a safe practice while cooking over a campfire as it can be used to quickly extinguish any unexpected flames"
            },
    ];
    const nQuestion = Math.floor((Math.random() * questions.length));
    const surveyJson = {
        title: "Camping Safety",
        showCorrectAnswer: "always",
        showProgressBar: "bottom",
        firstPageIsStarted: true,
        startSurveyText: "Start Quiz",
        pages: [{
            elements: [{
                type: "html",
                html: "You are about to start a quiz on Camping Safety. <br>You will have 30 seconds for every question and 60 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
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

            if (userAnswer!== correctAnswer) {
            var explanation = correctAnswer.split(', ')[1]; // Get the explanation from the correctAnswer string
            alert(`Incorrect answer for question: ${questionTitle}\nCorrect answer: ${correctAnswer.split(', ')[0]}\nExplanation: ${explanation}`);
            }
        }
    });

    return <Survey model={survey} />;
}