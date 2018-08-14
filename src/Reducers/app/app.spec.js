import reducer, {initState} from './index';

jest.mock('./actions', () => {
  return {
    AppActionTypes: {
        UPDATE_FAVOURITES: 'UPDATE_FAVOURITES',
        APPEND_FAVOURITES: 'APPEND_FAVOURITES',
        REMOVE_FAVOURITE: 'REMOVE_FAVOURITE',
        UPDATE_ERROR: 'UPDATE_ERROR',
        UPDATE_KEYWORDS: 'UPDATE_ERROR'
      }
  }
});
describe('app reducer test', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initState);
  });

});