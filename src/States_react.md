import { useEffect, useState } from "react"

const Card = ({title}) =>{ 
  const [like, setLike] = useState(false)
  const [count,setCount] = useState(0)

  useEffect(()=>{
    console.log(`${title} e ${like}`)
  }), [like]
  return(
    <div className="text-white font-bold text-lg" onClick={()=>setCount(count+1)}>

      <p>{title} {count? count : null}</p>
      <button className="bg-red-400 p-2 w-40 rounded-sm text-center cursor-pointer hover:text-red-800" onClick={()=> setLike(!like)} >
        {like? "👶" : '🧒'}
      </button>
    </div>
  )
}

const App = () =>{
  
  return(
    <div className="flex justify-around items-center h-screen">

<Card  title="Bom dia" />
<Card title="Boa tarde"/>
<Card title="Bom Noite"/>
    </div>
  )
}


export default App