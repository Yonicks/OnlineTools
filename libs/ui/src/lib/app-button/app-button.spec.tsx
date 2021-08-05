import { render } from '@testing-library/react';

import AppButton from './app-button';

describe('AppButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppButton text={"Test"} />);
    expect(baseElement).toBeTruthy();
  });
});
