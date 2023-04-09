const {_saveQuestionAnswer, _saveQuestion} = require("./_DATA");

describe("_saveQuestionAnswer function", () => {

    it("should return true for correct details", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: "8xf0y6ziyjabvozdd253nd",
            answer: "optionOne"
        });
        expect(response).toBeTruthy();
    });

    it("should return error for false details", async () => {
        const response = await _saveQuestionAnswer({
            authedUser: "sarahedo",
            qid: undefined,
            answer: "optionOne"
        }).catch(e => e);
        expect(response).toBe("Please provide authedUser, qid, and answer");
    });
});

describe("_saveQuestion function", () => {
    it("_saveQuestion should render when saved question is returned and all expected fields are correctly formatted data", async () => {
        const data = {
            author: 'sarahedo',
            optionOneText: 'Option 1',
            optionTwoText: 'Option 2',
           
          };
      const response = await _saveQuestion(data);
      expect(response.author).toBe();
      expect(response.optionOne['text']).toBe('Option 1');
      expect(response.optionTwo['text']).toBe('Option 2');
    });
  
    it("_saveQuestion should render when saved question is returned and all expected fields are incorrectly formatted data", async () => {
      await expect(_saveQuestion(1, 2)).rejects.toEqual(
        "Please provide optionOneText, optionTwoText, and author"
      );
    });
  });