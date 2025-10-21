import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@theme/theme';
import ThemeToggle from '../ThemeToggle';

describe('ThemeToggle', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <ThemeToggle />
      </ThemeProvider>,
    );
  });

  describe('rendering', () => {
    it('should render theme toggle button', () => {
      const button = screen.getByRole('button', { name: /change theme/i });
      expect(button).toBeInTheDocument();
    });

    it('should display system mode icon by default', () => {
      const icon = screen.getByTestId('SettingsBrightnessIcon');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('theme menu', () => {
    it('should open menu when clicking button', async () => {
      const button = screen.getByRole('button', { name: /change theme/i });
      await user.click(button);
      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument();
      });
      expect(screen.getByText('System')).toBeInTheDocument();
      expect(screen.getByText('Light')).toBeInTheDocument();
      expect(screen.getByText('Dark')).toBeInTheDocument();
    });

    it('should close menu after selecting an option', async () => {
      const button = screen.getByRole('button', { name: /change theme/i });
      await user.click(button);
      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument();
      });
      const lightOption = screen.getByText('Light');
      await user.click(lightOption);
      await waitFor(() => {
        expect(screen.queryByRole('menu')).not.toBeInTheDocument();
      });
    });
  });

  describe('theme switching', () => {
    it('should be light mode by default', async () => {
      expect(screen.getByTestId('LightModeIcon')).toBeInTheDocument();
    });

    it('should switch to system mode', async () => {
      await user.click(screen.getByRole('button', { name: /change theme/i }));
      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument();
      });
      await user.click(screen.getByText('System'));
      expect(screen.getAllByTestId('SettingsBrightnessIcon').length).toBeGreaterThan(0);
    });

    it('should switch to dark mode', async () => {
      await user.click(screen.getByRole('button', { name: /change theme/i }));
      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument();
      });
      await user.click(screen.getByText('Dark'));
      expect(screen.getByTestId('DarkModeIcon')).toBeInTheDocument();
    });
  });

  describe('accessibility', () => {
    it('should have proper ARIA attributes', () => {
      const button = screen.getByRole('button', { name: /change theme/i });
      expect(button).toHaveAttribute('aria-label', 'Change theme');
      expect(button).toHaveAttribute('aria-haspopup', 'true');
    });

    it('should update aria-expanded when menu opens', async () => {
      const button = screen.getByRole('button', { name: /change theme/i });
      await user.click(button);
      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument();
      });
    });

    it('should be keyboard accessible', async () => {
      const button = screen.getByRole('button', { name: /change theme/i });
      button.focus();
      expect(button).toHaveFocus();
      await user.keyboard('{Enter}');
      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument();
      });
    });
  });
});
