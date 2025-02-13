import { useEffect, useState } from "react"

function UseFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setPending(true)
      try {
        const res = await fetch(url);
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json();
        setData(data);
        setPending(false)
      } catch (err) {
        setError(err.message)
        setPending(false)
      }
    } 
    fetchData()
  }, [url])

  return {data, error, isPending}
}

export default UseFetch