module.exports = {
    // apiUrl: 'http://localhost:8080/api/quiz/submit',  // Replace with your actual endpoint
    apiUrl: 'http://elsa-user-score:8080/api/quiz/submit',

    quizId: '68712a0ce8b11d4ba6baa8b9', // constant quizId

    userIds: ['user 1', 'user 2', 'user 3', 'user 4', 'user 5',
                'user 6', 'user 7', 'user 8', 'user 9', 'user 10',
                'user 11', 'user 12', 'user 13', 'user 14', 'user 15',
                'user 16', 'user 17', 'user 18', 'user 19', 'user 20'],
    questionIds: ['question_1', 'question_2', 'question_3', 'question_4', 'question_5',
                    'question_6', 'question_7', 'question_8', 'question_9', 'question_10',
                    'question_11', 'question_12', 'question_13', 'question_14', 'question_15',
                    'question_16', 'question_17', 'question_18', 'question_19', 'question_20'],
    answers: ['A', 'B', 'C'],
    concurrency: 1000
};
