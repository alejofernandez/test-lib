import { Helpers } from '../../src/index';

describe('test Helpers', () => {
  it('should return true for 2', () => {
    jest.spyOn(global.console, 'log');
    new Helpers().sayHello(console);
    expect(console.log).toBeCalled();
  });
});
