import { useCallback } from 'react'
import { toggleFullscreen } from 'store/jsDos'
import { useAppDispatch, useAppSelector } from './useRedux'

const useModalFullscreen = () => {
  const dispatch = useAppDispatch()
  const isFullscreen = useAppSelector((store) => store.jsDos.isFullscreen)
  const toggle = useCallback(() => dispatch(toggleFullscreen()), [dispatch])
  return { isFullscreen, toggleFullscreen: toggle } as const
}

export default useModalFullscreen
