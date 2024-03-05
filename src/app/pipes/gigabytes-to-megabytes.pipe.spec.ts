import { GigabytesToMegabytesPipe } from './gigabytes-to-megabytes.pipe';

describe('GigabytesToMegabytesPipe', () => {
  it('create an instance', () => {
    const pipe = new GigabytesToMegabytesPipe();
    expect(pipe).toBeTruthy();
  });
});
