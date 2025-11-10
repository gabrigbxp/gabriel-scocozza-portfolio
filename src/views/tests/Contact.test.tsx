import { describe, expect, it } from 'vitest'
import { screen } from '@testing-library/react'
import { renderWithProviders } from '@test/test-utils'
import Contact from '../Contact'

describe('Contact', () => {
  describe('rendering', () => {
    it('should render contact section', () => {
      const { container } = renderWithProviders(<Contact />)

      const section = container.querySelector('section#contact')
      expect(section).toBeInTheDocument()
    })

    it('should display title', () => {
      renderWithProviders(<Contact />)

      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument()
    })

    it('should display email button', () => {
      renderWithProviders(<Contact />)

      const emailButton = screen.getByRole('link', { name: /send me an email|envíame un correo/i })
      expect(emailButton).toBeInTheDocument()
      expect(emailButton).toHaveAttribute('href', 'mailto:scocozza.gabriel@gmail.com')
    })

    it('should display LinkedIn link', () => {
      renderWithProviders(<Contact />)

      const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
      expect(linkedinLink).toBeInTheDocument()
      expect(linkedinLink).toHaveAttribute('target', '_blank')
      expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should display GitHub link', () => {
      renderWithProviders(<Contact />)

      const githubLink = screen.getByRole('link', { name: /github/i })
      expect(githubLink).toBeInTheDocument()
      expect(githubLink).toHaveAttribute('target', '_blank')
      expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('should have correct LinkedIn URL', () => {
      renderWithProviders(<Contact />)

      const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
      expect(linkedinLink).toHaveAttribute('href', expect.stringContaining('linkedin.com'))
    })
  })
})

describe('accessibility', () => {
  it('should use semantic section element', () => {
    const { container } = renderWithProviders(<Contact />)

    const section = container.querySelector('section#contact')
    expect(section).toBeInTheDocument()
  })

  it('should have accessible links', () => {
    renderWithProviders(<Contact />)

    const links = screen.getAllByRole('link')
    expect(links.length).toBe(3) // Email, LinkedIn, GitHub

    links.forEach((link) => {
      expect(link).toHaveAttribute('href')
    })
  })

  it('should have external link security attributes', () => {
    renderWithProviders(<Contact />)

    const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')

    const githubLink = screen.getByRole('link', { name: /github/i })
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
