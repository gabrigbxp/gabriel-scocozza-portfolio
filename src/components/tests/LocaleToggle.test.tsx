import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@test/test-utils';
import LocaleToggle from '../LocaleToggle';

describe('LocaleToggle', () => {
  it('should render the locale toggle button', () => {
    renderWithProviders(<LocaleToggle />);
    expect(screen.getByTestId('LanguageIcon')).toBeInTheDocument();
  });

  it('should toggle locale when button is clicked', async () => {
    const user = userEvent.setup();
    renderWithProviders(<LocaleToggle />);

    expect(screen.getByText('Español')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /español/i }));
    expect(screen.getByText('English')).toBeInTheDocument();
  });
});
