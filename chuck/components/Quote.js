import { useEffect, useState } from 'react';
import { app, db, incrementCounterDB } from '../firebase';
import { doc, collection, addDoc, getDocs,updateDoc, onSnapshot,increment,getDoc,setDoc } from 'firebase/firestore';


export default function Quote({rawQuote}) {
    const [quote, setQuote] = useState('');
    const [newComment, setNewComment] = useState('');



    useEffect(()=>{
  

       onSnapshot(doc(db, 'quotes', rawQuote.id), (doc) => {
        if (doc.exists()) {
          setQuote({
            ...rawQuote,
            charlieUtterance: doc.data().charlieUttrance,
          });
          console.log("Weszlo", quote)
        }else {
          setQuote({

            charlieUtterance: 0,
          });
        }
        
      });

    

    }, [])

    useEffect(()=>{

    },[quote])

    const dbInstance = collection(db, 'quotes');

    const saveQuotes = async () => {
      // const test = onSnapshot(doc(db,'quotes', '93UcUnm8Ljfdyw5iMlzh'),(doc)=> {
      //   console.log(1)
      //   if (doc.exists()) {
      //     console.log("jest")
      //   }
      //   console.log("nie jest")
      // })

        // const snapShot = await getDocs(dbInstance)
        // const arr = snapShot.docs.map(doc=> {
        //   if(doc.data().id === rawQuote.id ){
        //     console.log("docId",doc.id)
        //   }
        // })

        // Up Testing
        // ==============================================




      // --------------------------------------------------------------------------------------------
        //Update if You have "Documenbt Id" from Firestore

        // const quoteRef = doc(db, 'quotes', rawQuote.id);
        // const quoteRef = doc(db, 'quotes', '0ysL07fk4iQTFtmhk6Bd');
        // await updateDoc(quoteRef, {
        //   charlieUttrance: increment(1),
        // });


      // --------------------------------------------------------------------------------------------
      // Add a new record to DB using SetDoc

      // await await setDoc(doc(db, "quotes", rawQuote.id),{
      //   id: rawQuote.id,
      //   charlieUttrance:increment(1)
      //   })
                            // -----------------------------------------------------------------------
      // Add a new record to DB using addDoc

      // const dbInstance = collection(db, 'quotes');
      //  addDoc(dbInstance, {
      //           id: rawQuote.id,
      //           charlieUttrance:increment(1)
      //       })

                            // ----------------------------------------------------------------------
      // Add a new record to DB using addDoc and get the id after adding as the id is generated on the clients side
    //   const dbInstance = collection(db, 'quotes');
    //   const add = await addDoc(dbInstance, {
    //            id: rawQuote.id,
    //            charlieUttrance:increment(1)
    //        })
    //  console.log(add.id)

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
      // Get All records ID

      //  const snapShot = await getDocs(dbInstance)
      //   const arr = snapShot.docs.map(doc=> doc.id)
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
