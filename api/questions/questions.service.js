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

/**
 * Assumptions:
 * 1. ignore if the id is not available, just make a log
 * 2. increase the attempt data
 * 3. modify the difficulty level ( there should be a separate service , but as of now we are keeping it simple
 *
 * @param data ( ideally a question object )
 * @param done ( callback function for future use )
 */
const updateQuestionAnalytics = (data, done) => {

};


module.exports = {
    addNewQuestion,
    getQuestions
};