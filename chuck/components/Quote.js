import { useEffect, useState } from 'react';
import { app, db, incrementCounterDB } from '../firebase';
import { doc, collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore';


export default function Quote({rawQuote}) {
    const [quote, setQuote] = useState('');
    const [comment, setComment] = useState('');



    useEffect(()=>{
        console.log(rawQuote.id)
        setQuote({
                ...rawQuote, charlieUtterance: 0}
            )

    }, [])

    useEffect(()=>{

    },[quote])

    const dbInstance = collection(db, 'quotes');

    const saveQuotes = (id) => {
        console.log(quote)
        
        setQuote({...quote, charlieUtterance: quote.charlieUtterance+1})
        console.log(quote.charlieUtterance)

        
        // addDoc(dbInstance, {
        //     quote
        // })
    }
    
    return (
        <>
        {quote && <li>
                <p>{quote.value}</p>
                <p>{quote.id}</p>
                <p>{quote.charlieUtterance}</p>
                <button onClick={()=>saveQuotes(quote.id)}>+</button>                    
        
            </li>}
        
        </>
  )
}
