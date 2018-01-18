const stubService = require('./stub.service');
const StubModel = require('./stub.entity');

const addNewStub = function(stubData, done) {
    let stub = new StubModel();

    stub.questionStub = stubData.questionStub;
    stub.correctResponse = stubData.correctResponse;
    stub.questionQuery = stubData.questionQuery;
    stub.topic = stubData.topic;
    stub.distractors.numberOfDistractors = stubData.distractors.numberOfDistractors;
    stub.distractors.distractorQuery = stubData.distractors.distractorQuery;
    stub.distractors.distractorList = [];
    stubData.distractors.distractorList.forEach((st) => {
        stub.distractors.distractorList.push(st);
    });

    stubService.addNewStub(stub, done);
};

const getStub = function(params, done) {
    done(null, 'mock');
};

module.exports = {
    addNewStub,
    getStub
}