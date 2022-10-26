import { useEffect, useState } from 'react';
import Quote from '../components/Quote';

export default function quotes() {
    const [quotes, setQuotes] = useState(null)
    const fetchData = () => {
        fetch('https://api.chucknorris.io/jokes/search?query=hand')
        .then((res) => res.json())
        .then((json) => setQuotes(json));
    }

useEffect(()=> {
    fetchData()
},[])

  return (
    <div>
        <h1> Quotes </h1>
        <div>
            <ul>
                {quotes && quotes.result.map((quote, index)=> {
                    return <Quote rawQuote={quote} key={index}/>
                })}
            </ul>
        </div>
    </div>
  )
}

