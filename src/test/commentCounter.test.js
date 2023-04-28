const commentCounter = require('./commentCounter.js');

const comments = [
  {
    comment: 'Not bad',
    creation_date: '2023-04-27',
    username: 'Ferizad',
  },
  {
    comment: 'Not bad',
    creation_date: '2023-04-27',
    username: 'Ferizad',
  },
  {
    comment: 'good',
    creation_date: '2023-04-28',
    username: 'Layla',
  },
];

const comments1 = [
  {
    comment: 'Not bad',
    creation_date: '2023-04-27',
    username: 'Ferizad',
  },
  {
    comment: 'Not bad',
    creation_date: '2023-04-27',
    username: 'Ferizad',
  },
  {
    comment: 'bad',
    creation_date: '2023-04-28',
    username: 'mohammad',
  },
  {
    comment: 'nice',
    creation_date: '2023-04-28',
    username: 'ahmad',
  },
  {
    comment: 'perfect',
    creation_date: '2023-04-28',
    username: 'mahtab',
  },
];

describe('API', () => {
  test('The number of comment should be 3.', () => {
    expect(commentCounter(comments)).toBe(3);
  });
  test('The number of comment should be 5.', () => {
    expect(commentCounter(comments1)).toBe(5);
  });
});