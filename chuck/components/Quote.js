import { useEffect, useState } from 'react';
import { app, db } from '../firebase';
import { doc, collection, addDoc, getDocs, onSnapshot } from 'firebase/firestore';

export default function Quote({rawQuote}) {
    const [quote, setQuote] = useState(null);
    
    return (
        <>
       <li>
                <p>{rawQuote.value}</p>
                <p>{rawQuote.id}</p>            
            </li>
        
        </>
  )
}
