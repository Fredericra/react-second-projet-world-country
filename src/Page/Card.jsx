import React from 'react'
function Card({name,key}) {
    return (
        <div className="card2 px-2 rounded-md py-2 z-10">
            <div className="pl-10 text-right pr-4">
                {key}
                <div className="bg-indigo-400 px-2 shadow-lg shadow-indigo-600 rounded-tl-lg">
                <p className="font-bold text-white">{name.name} </p>
                </div>
            </div>
            
            <div  className="card outline outline-2 cursor-pointer h-[260px] outline-indigo-400 rounded-md hover:outline-4 duration-1000 px-5 py-2 space-y-3">
                <div className="flex justify-end">
                    <img src={name.api} alt={name.api} />
                </div>
                <div  className="flex justify-end text-fuchsia-950" >
                    <p className="space-x-2 font-bold ">
                        <span className="underline">Native</span>
                        <span className="">{name.nativeName} </span>
                    </p>
                </div>
                <div className="flex justify-start px-2 text-blue-950">
                    <p className="space-x-2 font-bold ">
                        <span className="underline">Capital</span>
                        <span className="">{name.capital} </span>
                    </p>
                </div>
                <div className="flex justify-start px-2 text-blue-950">
                    <p className="space-x-2 font-bold ">
                        <span className="underline">Langue native</span>
                        <span className="">{name.languages.length===1&& name.languages.map((item,index)=>{
                            return(
                                <span className="">{item.nativeName} </span>
                            )
                        })} </span>
                         <span className="">{name.languages.length>1&& name.languages.map((item,index)=>{
                            return(
                                <span className="text-sm">{item.nativeName} <span className="">|</span> </span>
                            )
                        })} </span>
                    </p>
                </div>
                <div className="">
                    
                </div>
            </div>
            <div className="card1 duration-1000 hidden">
                <div className="outline shadow-sm outline-2 cursor-pointer h-[260px] outline-indigo-400 rounded-md hover:outline-4 duration-1000 px-5 py-2 space-y-3">
                    <div className="px-2 py-2">
                        <p className="font-bold space-x-2 text-indigo-950">
                            <span className="underline">Surface</span>
                            <span className="">{name.area} km2 </span>
                        </p>
                    </div>
                    <div className="px-2 py-2">
                        <p className="font-bold space-x-2 text-indigo-950">
                            <span className="underline">Population</span>
                            <span className="">{name.population} <i className="fas fa-users"></i> </span>
                        </p>
                    </div>
                    <div className="px-2 py-2">
                        {
                           name.currencies.map((item)=>{
                            return(
                                <div className="font-bold text-indigo-900">
                                    <p className="space-x-2">
                                        <span className="underline">Billet</span>
                                        <span className="">{item.name} </span>
                                    </p>
                                    <p className="space-x-2">
                                        <span className="underline">Code</span>
                                        <span className="">{item.code} </span>
                                    </p>
                                    <p className="space-x-2">
                                        <span className="underline">Logo</span>
                                        <span className="">{item.symbol===""?'aucun':item.symbol} </span>
                                    </p>
                                </div>
                            )
                           })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
