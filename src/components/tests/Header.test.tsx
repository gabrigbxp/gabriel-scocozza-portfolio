import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '@test/test-utils';
import Header from '../Header';

describe('Header', () => {
  const user = userEvent.setup();

  beforeAll(() => {
    window.scrollTo = vi.fn();
    vi.spyOn(document, 'getElementById').mockImplementation((id: string) => {
      const mockElement = document.createElement('div');
      mockElement.id = id;
      mockElement.getBoundingClientRect = vi.fn(() => ({
        top: 100,
        bottom: 200,
        left: 0,
        right: 0,
        width: 100,
        height: 100,
        x: 0,
        y: 100,
        toJSON: () => ({}),
      }));
      return mockElement;
    });
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  describe('rendering', () => {
    beforeEach(() => {
      renderWithProviders(<Header />);
    });

    it('should render header with logo and title', () => {
      expect(screen.getByText("Hi, I'm")).toBeInTheDocument();
      expect(screen.getByText('Gabo')).toBeInTheDocument();
      expect(screen.getByAltText('Picture of Gabriel Gustavo Scocozza')).toBeInTheDocument();
    });

    it('should render navigation menu items', () => {
      expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /techstack/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /weather/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /games/i })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /contact/i })).toBeInTheDocument();
    });

    it('should render download CV button', () => {
      const cvButtons = screen.getAllByRole('link', { name: /download cv/i });
      expect(cvButtons.length).toBeGreaterThan(0);
      const cvButton = cvButtons[0];
      expect(cvButton).toHaveAttribute('href', '/cv.pdf');
      expect(cvButton).toHaveAttribute('target', '_blank');
    });

    it('should scroll to section when menu item is clicked', async () => {
      const aboutButtons = screen.getAllByRole('button', { name: /about/i });
      expect(aboutButtons.length).toBeGreaterThan(0);
      const aboutButton = aboutButtons[0];
      await user.click(aboutButton);

      expect(window.scrollTo).toHaveBeenCalled();
    });
  });
});
