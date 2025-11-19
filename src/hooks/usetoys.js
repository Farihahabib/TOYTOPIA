import axios, { Axios } from "axios"
import { useEffect, useState } from "react"


const usetoys = () =>{
    const [toys, settoys] = useState([])
   const [loading, setloading] = useState(true)
   const [Error, setError] = useState(null)
   useEffect(()=>{
    setloading(true)
 axios('../../toyinfo.json').then(data=>
   settoys(data.data)
 )
 .catch(err => setError(err))
 .finally(()=> setloading(false))
   },[]
 )
 return { toys ,loading ,Error }
}

export default usetoys