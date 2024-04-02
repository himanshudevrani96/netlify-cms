import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
export function useWindowLocation() {
  const [currentURL, setCurrentURL] = useState('')
  const [baseURL, setBaseURL] = useState('')
  const router = useRouter()

  useEffect(() => {
    setCurrentURL(window.location.href)
    setBaseURL(window.location.origin)
  }, [router.asPath])

  return { currentURL, baseURL }
}
