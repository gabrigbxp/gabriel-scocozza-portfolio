import { renderWithProviders } from '@test/test-utils'
import About from '../About'

describe('About', () => {
  describe('rendering', () => {
    it('should render about section', () => {
      const { container } = renderWithProviders(<About />)

      const section = container.querySelector('section#about')
      expect(section).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    it('should use semantic section element', () => {
      const { container } = renderWithProviders(<About />)

      const section = container.querySelector('section#about')
      expect(section).toBeInTheDocument()
    })

    it('should have readable text', () => {
      const { container } = renderWithProviders(<About />)

      const section = container.querySelector('section#about')
      expect(section).toBeInTheDocument()
      expect(section?.textContent).toBeTruthy()
    })
  })
})
