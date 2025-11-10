import { describe, expect, it } from 'vitest'
import { iconMap } from '@utils'
import stack from '@views/TechStack/stack.json'

describe('iconMap', () => {
  it('should map icon names to valid paths', () => {
    Object.entries(iconMap).forEach(([name, path]) => {
      expect(name).toBeTruthy()
      expect(path).toBeTruthy()
      expect(typeof path).toBe('string')
      expect(path.length).toBeGreaterThan(0)
    })
  })

  it('should have icons for all stack items', () => {
    const missingIcons: string[] = []

    stack.forEach((item) => {
      if (!iconMap[item.icon]) {
        missingIcons.push(item.icon)
      }
    })

    expect(missingIcons).toEqual([])
  })

  it('should not have duplicate icon paths', () => {
    const paths = Object.values(iconMap)
    const uniquePaths = new Set(paths)

    expect(paths.length).toBe(uniquePaths.size)
  })
})
