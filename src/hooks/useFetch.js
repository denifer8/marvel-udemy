

import  { useEffect, useState } from 'react'

export default function useFetch(url, options) {
    const [ result, setResult] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const reqApi = async () => {  
               try {
                   const res = await fetch(url, options);
                   const json = await res.json();
                   setResult(json);
                   setLoading(false);
               } catch (err) { 
                   setError(true);
                   setLoading(false);
                   }
                }
                reqApi();
       }, [options, url]);


    
  return {result, loading, error}
};
