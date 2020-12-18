import { StaticContentPipe } from './static-content.pipe';

describe('StaticContentPipe', (): void => {
  it('create an instance', (): void => {
    const pipe = new StaticContentPipe();

    expect(pipe).toBeTruthy();
  });
});
