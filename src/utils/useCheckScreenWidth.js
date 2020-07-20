import { useState, useEffect } from "react"

const useCheckScreenWidth = (breakPoint = 1024) => {
  const [isSmallerThanBreakPoint, setIsSmallerThanBreakPoint] = useState(() => {
    //this 'if' fixing the issue of "window is not defined" - ("window" is not available during server side rendering)
    if (typeof window !== "undefined") {
      return window.innerWidth >= breakPoint ? false : true
    }
  })

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth >= breakPoint) setIsSmallerThanBreakPoint(false)
      else setIsSmallerThanBreakPoint(true)
    }

    window.addEventListener("resize", checkScreenWidth)

    return () => {
      window.removeEventListener("resize", checkScreenWidth)
    }
    // eslint-disable-next-line
  }, [])

  return isSmallerThanBreakPoint
}

export default useCheckScreenWidth
