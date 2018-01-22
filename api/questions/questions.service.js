const QuestionModel = require('./questions.entity');
//const publishService = require('../../event-pubsub/publish');

const addNewQuestion = function(questionInstance, done) {
    questionInstance.save((err, savedQuestion) => {
        if(err) {
            console.error('Error Saving question:', question.label);
            done(err);
        } else {
        //    publishService.onQuestionAdd(parameters);
            done(null, savedQuestion);
        }
    });
};


const getQuestions = function (params, done) {
    let query = {
            "topics": params.topic,
            "difficulty": params.difficulty || "medium"
        },
        fieldOptions = null,
        page = 1,
        limit = typeof params.count !== 'undefined' ? parseInt(params.count, 10) : 10;

    QuestionModel
        .find(query)
        .sort({ "topics": -1})
        .select(fieldOptions)
        .skip((page > 0) ? limit * (page - 1) : 0)
        .limit(limit)
        .exec((err, colln) => {
            if (err) {
                console.error('Error in showing questions list, ERRORS::', err, ' queried  ', query);
                done(err);
                return;
            }


            done(null, colln);
        });
};


module.exports = {
    addNewQuestion,
    getQuestions
};