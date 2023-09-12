import React, { useEffect, useState } from "react";
import Card from "./Card";
import Plus from "./Plus";
function Menu(props, index) {
  const [envoye, setEvoye] = useState(props.donne);
  const [afrique, setAfrique] = useState(false);
  const [amerique, setAmerique] = useState(false);
  const [asie, setAsie] = useState(false);
  const [europe, setEurope] = useState(false);
 const afriCheck = (e)=>{
  setAfrique(e.target.checked)
  const vue = e.target.checked;
    const plus = envoye.filter(item=>item.region==="Africa")
    if(vue)
    {
      props.rech(plus);
      props.cont("Afrique")
      setAmerique(false);
      setAsie(false);
      setEurope(false);
    }
    else{
      props.rech(envoye)
      props.cont("")

    }
 }
const amerCheck = (e)=>{
  const vue = e.target.checked;
  setAmerique(vue)
  const plus = envoye.filter(item=>item.region==="Americas");
  if(vue)
  {
    props.rech(plus);
    props.cont("Amerique")
    setAfrique(false)
    setEurope(false)
    setAsie(false)
  }
  else{
    props.rech(envoye)
    props.cont("")

  }
}
const asieCheck = (e)=>{
  const vue = e.target.checked;
  setAsie(vue)
  const plus = envoye.filter(item=>item.region==="Asia" || item.region==="Oceania")
  if(vue)
  {
    props.rech(plus);
    props.cont("Asiatique et Oceanie")
    setAfrique(false)
    setAmerique(false)
    setEurope(false);
  }
  else{
    props.rech(envoye)
    props.cont("")
  }
} 
const europeCheck = (e)=>{
  const vue = e.target.checked;
  setEurope(vue)
  const plus = envoye.filter(item=>item.region==="Europe")
  if(vue)
  {
    props.rech(plus);
    props.cont("Européen")
    setAfrique(false)
    setAsie(false)
    setAmerique(false)
  }
  else{
    props.rech(envoye)
    props.cont("")
  }
}
  return (
    <div className="relative">
      <div className="py-4 z-30 relative sm:px-2 md:px-20 flex justify-between items-center bg-blue-400 sticky top-0">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name=""
            id=""
            checked={afrique}
            onChange={afriCheck}
          />
          <p className="text-white font-bold">Africain</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name=""
            id=""
            checked={amerique}
            onChange={amerCheck}
          />
          <p className="text-white font-bold">Americain</p>
        </div>
        <div className="flex items-center  space-x-2">
          <input
            type="checkbox"
            name=""
            id=""
            checked={asie}
            onChange={asieCheck}
          />
          <p className="text-white font-bold">Asiatique</p>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name=""
            id=""
            checked={europe}
            onChange={europeCheck}
          />
          <p className="text-white font-bold">Europe</p>
        </div>
      </div>
      <div className="media">
        <div className="col-span-6">
          <Plus></Plus>
        </div>
        <div className="col-span-6"></div>
      </div>
      <div className="py-2">
        <div className="media gap-3">
          {props.donne.map((element, index) => {
            return (
              <div className="col-span-3">
                <Card name={element} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
