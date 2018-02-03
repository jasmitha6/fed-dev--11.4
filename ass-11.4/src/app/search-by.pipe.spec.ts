import { SearchByPipe } from './search-by.pipe';
// unit testing for checking whether pipe is working correctly or not
describe('SearchByPipe', () => {
  it('create an instance', () => {
    const pipe = new SearchByPipe();
    expect(pipe).toBeTruthy();
  });
});
