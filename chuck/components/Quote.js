import { useEffect, useState } from 'react';
import { app, db, incrementCounterDB } from '../firebase';
import { doc, collection, addDoc, getDocs,updateDoc, onSnapshot,increment,getDoc,setDoc } from 'firebase/firestore';


export default function Quote({rawQuote}) {
    const [quote, setQuote] = useState('');
    const [newComment, setNewComment] = useState('');



    useEffect(()=>{
        
        setQuote({
                ...rawQuote, charlieUtterance: 0}
            )

    }, [])

    useEffect(()=>{

    },[quote])

    const dbInstance = collection(db, 'quotes');

    const saveQuotes = async () => {
      // --------------------------------------------------------------------------------------------
        //Update if You have "Documenbt Id" from Firestore

        // const quoteRef = doc(db, 'quotes', rawQuote.id);
        // const quoteRef = doc(db, 'quotes', '0ysL07fk4iQTFtmhk6Bd');
        // await updateDoc(quoteRef, {
        //   charlieUttrance: increment(1),
        // });


      // --------------------------------------------------------------------------------------------
      // Add a new record to DB using SetDoc

      await await setDoc(doc(db, "quotes", rawQuote.id),{
        id: rawQuote.id,
        charlieUttrance:increment(1)
        })
                            // -----------------------------------------------------------------------
      // Add a new record to DB using addDoc

      // const dbInstance = collection(db, 'quotes');
      // // addDoc(dbInstance, {
      //           id: rawQuote.id,
      //           charlieUttrance:increment(1)
      //       })

      // --------------------------------------------------------------------------------------------
      // GET a certain record from FireStore

      // const quoteRef = doc(db, 'quotes', '0ysL07fk4iQTFtmhk6Bd');
      // const docSnap = await getDoc(quoteRef);
      //     console.log(docSnap.data())

      // --------------------------------------------------------------------------------------------
      // Get All records

      //  const snapShot = await getDocs(dbInstance)
      //   const arr = snapShot.docs.map(doc=> doc.data())
      //   console.log(arr)

      // --------------------------------------------------------------------------------------------

      
        setQuote({...quote, charlieUtterance: quote.charlieUtterance+1})

          
    }

    const addComment= ()=> {
        console.log(rawQuote.id)
        console.log(newComment)
            addDoc(dbInstance, {
            comment: newComment,
            id:rawQuote.id
        })
    }
    
    return (
        <>
        {quote && <li>
                <p>{quote.value}</p>
                <p>{quote.id}</p>
                <p>{quote.charlieUtterance}</p>
                <button onClick={()=>saveQuotes(quote.id)}>+</button>                    
                <div>
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button onClick={addComment} >Add</button>
              </div>
            </li>}
        
        </>
  )
}
