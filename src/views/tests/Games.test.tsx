import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithProviders } from '@test/test-utils'
import Games from '../Games'

// Mock the Game components to avoid rendering the actual games during tests and prevent file descriptor leaks.
// Error: EMFILE: too many open files, open '...'
vi.mock('../Games/DooM/Game', () => ({
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) =>
    isOpen ? (
      <button data-testid="doom-game" onClick={onClose}>
        DooM Game
      </button>
    ) : null,
}))

vi.mock('../Games/Supaplex/Game', () => ({
  default: ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) =>
    isOpen ? (
      <button data-testid="supaplex-game" onClick={onClose}>
        Supaplex Game
      </button>
    ) : null,
}))

describe('Games', () => {
  const user = userEvent.setup()
  let container: HTMLElement

  beforeEach(() => {
    const { container: c } = renderWithProviders(<Games />)
    container = c
  })

  it('should render games section', () => {
    const section = container.querySelector('section#games')
    expect(section).toBeInTheDocument()
  })

  describe('achievement modal interaction', () => {
    it('should open achievement modal when clicking "How Achieved" link', async () => {
      const howAchievedLink = screen.getByText(/how.*achieved/i)
      expect(howAchievedLink).toBeInTheDocument()

      await user.click(howAchievedLink)
      await waitFor(() => {
        expect(screen.getByTestId('achievement-modal')).toBeInTheDocument()
      })
    })

    it('should close achievement modal when clicking close', async () => {
      const howAchievedLink = screen.getByText(/how.*achieved/i)
      await user.click(howAchievedLink)
      await waitFor(() => {
        expect(screen.getByTestId('achievement-modal')).toBeInTheDocument()
      })

      const closeButton = screen.getByTestId('CloseIcon').closest('button')!
      await user.click(closeButton)
      await waitFor(() => {
        expect(screen.queryByTestId('achievement-modal')).not.toBeInTheDocument()
      })
    })
  })

  describe('accessibility', () => {
    it('should use semantic section element', () => {
      const section = container.querySelector('section#games')
      expect(section).toBeInTheDocument()
    })

    it('should have alt text for game cover images', () => {
      const images = container.querySelectorAll('img')
      images.forEach((img) => {
        expect(img).toHaveAttribute('alt')
      })
    })
  })
})
