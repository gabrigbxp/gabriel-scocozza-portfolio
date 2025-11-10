import { beforeEach, describe, expect, it, vi } from 'vitest'
import { getMuiSpacingPx } from '../muiSpacing'

describe('getMuiSpacingPx', () => {
  const mockGetComputedStyle = (spacingValue: string) => {
    vi.stubGlobal(
      'getComputedStyle',
      vi.fn(() => ({
        getPropertyValue: vi.fn((prop: string) => {
          if (prop === '--mui-spacing') return spacingValue
          return ''
        }),
      })),
    )
  }

  beforeEach(() => {
    // Default mock with MUI's 8px spacing
    mockGetComputedStyle('8px')
  })

  it('should convert MUI spacing to pixels (8px base)', () => {
    const result1 = getMuiSpacingPx(1)
    const result2 = getMuiSpacingPx(2)

    expect(result1).toBe(8)
    expect(result2).toBe(16)
  })

  it('should return undefined when CSS variable is not defined', () => {
    mockGetComputedStyle('')

    const result = getMuiSpacingPx(1)
    expect(result).toBeUndefined()
  })

  it('should handle zero multiplier', () => {
    const result = getMuiSpacingPx(0)
    expect(result).toBe(0)
  })

  it('should handle decimal multipliers', () => {
    const result = getMuiSpacingPx(1.5)
    expect(result).toBe(12) // 8 * 1.5 = 12
  })

  it('should handle negative multipliers', () => {
    const result = getMuiSpacingPx(-2)
    expect(result).toBe(-16) // 8 * -2 = -16
  })
})
