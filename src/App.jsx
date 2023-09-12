import { useEffect, useState } from 'react'
import { PAYS } from './Donne/monde'
import './App.css'
import Menu from './Page/Menu'
const Logo = ()=>{
  return(
    <div className="relative py-4 flex justify-center items-center px-20">
      <div className='border-r-8 absolute left-0 top-2 animate-spin rounded-full border-indigo-900 w-16 h-16 shadow-inner shadow-pink-900'></div>
      <div className='border-r-8 absolute left-4 top-10 animate-spin rounded-full border-blue-900 w-16 h-16 shadow-inner shadow-pink-900'></div>
      <div className='border-r-8 absolute -left-4 top-10 rounded-full animate-spin  border-lime-900 w-16 h-16 shadow-inner shadow-orange-900'></div>
    </div>
  )
}
function App() {
  const res = [];
  PAYS.forEach((element)=>{
    element = {...element,api:"https://flagsapi.com/"+element.alpha2Code+"/flat/64.png"};
    res.push(element)
  });
  const [monde,setMonde] = useState(res);
  const [text,setText] = useState('');
  const [message,setMessage] = useState('');
  function retour(event){
    console.log(event);
  }
  const recherche = (event)=>{
    const less = event.target.value;
    const regex = RegExp(text.toLowerCase());
    const gres = monde.filter(item=>regex.test(item.name.toLowerCase()))
    if(text.length>0)
    {
      if(gres.length>0)
      {
        setMonde(gres)
      }
      else{
        setMonde(res)
      }
    }
    else{
      setMonde(res)
    }
  }
  const recherching = (data)=>{
    setMonde(data);
  }
  const region = (data)=>{
    setMessage(data);
  }
  return (
   <div className="">
        <div className="media">
          <div className="col-span-4">
          </div>
          <div className="col-span-4">
            <div className="text-center">
              {
                message!==""&&(
                  <p className="text-[22px] text-indigo-900 font-bold ">Les  {monde.length} pays en {message} </p>
                )
              }
              {
                message===""&&(
                  <p className="text-[22px] text-indigo-900 font-bold "> 
                  Tous les {monde.length} dans le monde
                </p>
                )
              }
                
            </div>
            <div className="px-10 py-5">
              <div className="relative">
                <input type="text" className='input' onKeyDown={recherche} onChange={((e)=>setText(e.target.value))} value={text} placeholder='recherche...'/>
                <i className="fas fa-search absolute left-2 top-2 fa-lg"></i>
              </div>
            </div>
          </div>
          <div className="col-span-4 relative">
            <Logo/>
          </div>
        </div>
        <div className=" py-2">
          <Menu donne={monde}   rech={recherching} cont={region} />
        </div>
   </div>
  )
}

export default App
