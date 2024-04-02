import { useEffect, useState } from "react"

function useWindowDimensions() {
  function getWindowDimensions() {
    if (typeof window !== 'undefined') {
      // Avoid accessing window here
      const { innerWidth: width, innerHeight: height } = window
      return {
        width,
        height,
        isMobile: width <= 900 ? true : false,
      }
    }
  }

  const [windowDimensions, setWindowDimensions] = useState<any>(
    getWindowDimensions() || false
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowDimensions
}

export default useWindowDimensions
