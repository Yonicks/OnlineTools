import { render } from '@testing-library/react';

import SampleAppStart from './sample-app-start';

describe('SampleAppStart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SampleAppStart />);
    expect(baseElement).toBeTruthy();
  });
});
