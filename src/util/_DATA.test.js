const {_saveQuestionAnswer} = require("./_DATA");
describe("_saveQuestionAnswer", () => {

    it("should return true for correct details", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        });

        expect(response).toBeTruthy();
    });

    it("generateUID generates unique IDs", async() => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        });
        console.log('response >>>',response)
          expect(response).toBe(true);
          
        })
 

    it("should return error for false details", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: undefined,
            answer: "optionOne"
        }).catch(e => e);

        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
});
