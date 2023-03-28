import React from 'react'
import './Search.css'
import { collection, query, where, getDocs } from "firebase/firestore";
import {db} from '../../../firebase'

const Search = () => {
  const [username , setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err , setErr] = useState(false)

const handleSearch = async() =>{
  const q = query(collection(db, 'paciente'), 
  where ('displayName', '==' , name)
  );

  try{



  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    setUser(doc.data())
    });
} catch(err){
  setErr(true)
}
};

  const handleKey = e=>{
    e.code === 'Enter' && handleSearch
  }
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find a user' onKeyDown = {handleKey} onChange={e=>setUsername(e.target.value)}/>
      </div>
      {err && <span>Usuario no encontrado</span>}
      {name && <div className="userChat">
        <img src='' alt=''></img>
        <div className="userChatInfo">
          <span>{name.displayName}</span>
        </div>
      </div> }
    </div>
  )
}

export default Search