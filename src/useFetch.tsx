import { useEffect, useState } from "react"

export const useFetch = <TResponse,>(url: string, options: RequestInit) => {
  const [value, setValue] = useState<TResponse>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal
    let isCurrentRender = true

    setLoading(true)

    fetch(url, { signal, ...options })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json() as Promise<TResponse>
      })
      .then((data) => {
        if (isCurrentRender) setValue(data)
      })
      .catch(console.log)
      .finally(() => {
        setLoading(false)
      })

    return () => {
      controller.abort()
      isCurrentRender = false
    }
  }, [options, url])

  return { value, loading }
}
