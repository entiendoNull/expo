const channel = 'main';
const updateId = '0000-1111';
const commitTime = new Date('2023-03-26T04:58:02.560Z');
const checkForUpdateAsync = jest.fn();
const fetchUpdateAsync = jest.fn();
const reload = jest.fn();
const addListener = jest.fn();

export default {
  channel,
  updateId,
  commitTime,
  checkForUpdateAsync,
  fetchUpdateAsync,
  reload,
  addListener,
};
