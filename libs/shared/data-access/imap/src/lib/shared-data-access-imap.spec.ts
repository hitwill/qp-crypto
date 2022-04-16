import { sharedDataAccessImap } from './shared-data-access-imap';

describe('sharedDataAccessImap', () => {
  it('should work', () => {
    expect(sharedDataAccessImap()).toEqual('shared-data-access-imap');
  });
});
