import React, { useEffect,useState } from 'react'
import axios from "axios"
import Map from './Map';

function Home() {
    const[data,setData]=useState([]);
    const[name,setName]=useState([]);
    const[gender,setGender]=useState([]);
    const[location,setLocation]=useState([]);
    const[login,setLogin]=useState([]);
    const[picture,setPicture]=useState([]);

   useEffect(() => {
       getUsers()
   }, [])

   const getUsers =async()=>{
    try{
        const res = await axios.get(`https://amber-server2022.herokuapp.com/api/user`)
        //console.log(res)
        setData(res.data[0])
        setName(res.data[0].name)
        setGender(res.data[0].gender)
        setLocation(res.data[0].location)
        setLogin(res.data[0].login)
        setPicture(res.data[0].picture)
        }catch(err){
         console.log(err)
        
        }
}

  
    return (
        <div>
           <div className="lg:flex w-full sm:flex-col md:flex-row lg:flex-row mb-4 ">

<div className="flex-auto w-24 ... mt-10 mx-auto">
   
   <img className="rounded-full mx-auto" src={picture?.large} width={220} height={180} alt="" />
   <div className="flex">
   
         <button className="bg-white m-auto mt-5 border-green-600 border-2 text-black  hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded-lg ">
                {gender}
              </button>
          
     </div>

     <button className="bg-white ml-36 mt-5 border-green-600 border-2 text-black  hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded-lg ">
                {name.title}
              </button>

     <div className="flex">
   
               <button className="bg-white ml-20 mt-5 border-green-600 border-2 text-black  hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded-lg ">
               {name.first}
              </button>
              <button className="bg-white ml-4 mt-5 border-green-600 border-2 text-black  hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded-lg ">
               {name.last}
              </button>
      
     </div>
</div>
<div className="flex-auto w-64 ... mt-10 mx-auto">
    
    <h1 className=" font-light text-xl">{data.email}</h1>
    <h1 className="text-red-600 mt-10 font-light text-3xl">Login Details</h1>
    <div className="flex flex-row border-b-2 border-gray-400 pb-8">
    <div className="flex overflow-auto">
               
                         <div className="w-80">
                      
                      <button  className="bg-white w-56 mx-2  mt-5 border-red-600 border-2 text-black  hover:bg-blue-900 hover:text-white font-bold py-2 px-4 rounded-lg ">
                        Username:{login.username}&#x2192;
                       </button>
                       <button  className="bg-white w-56 mx-2  mt-5 border-red-600 border-2 text-black  hover:bg-blue-900 hover:text-white font-bold py-2 px-4 rounded-lg ">
                        Password:{login.password} &#x2192;
                       </button>
             </div>
                       
                   
                  
            </div>

             
    </div>
    <h1 className="text-green-600 mt-10 font-light text-3xl">Location</h1>
    <div className="flex border-b-2 border-gray-400 pb-8">
        {
            location?.coordinates?.latitude?(<>
             <Map lat={JSON.parse(location?.coordinates?.latitude)} long={JSON.parse(location?.coordinates?.longitude)}/>
             
            </>):(<></>)

        }
   <p className="font-light mt-4"></p>
    </div>
    <h1 className="text-green-600 mt-10 ml-4 font-light text-3xl">Area</h1>
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 border-b-2 border-gray-400 pb-8">
    
    
             <button className="bg-gray-200  mr-4 ml-1 h-12 w-36 text-sm  mt-5 border-green-600 border-2 text-black  hover:bg-green-900 hover:text-white font-bold  px-4 rounded-3xl ">
           City:{location?.city}
              </button>
           
              <button className="bg-gray-200  mr-4 ml-1 h-12 w-36 text-sm  mt-5 border-green-600 border-2 text-black  hover:bg-green-900 hover:text-white font-bold  px-4 rounded-3xl ">
           State:{location?.state}
              </button>
              <button className="bg-gray-200  mr-4 ml-1 h-12 w-44 text-sm  mt-5 border-green-600 border-2 text-black  hover:bg-green-900 hover:text-white font-bold  px-4 rounded-3xl ">
           Country:{location?.country}
              </button>
             
    </div>

    <h1 className="text-green-600 mt-10 font-light text-3xl">TimeZone</h1>
    <div className="flex border-b-2 border-gray-400 pb-8">
    
             <p className="font-light mt-4">GMT {location?.timezone?.offset} {location?.timezone?.description} </p>
    </div>

    
</div>


<div className="  flex-auto w-14 ... mt-10 mx-auto">
<h1 className="text-green-600 mt-10 ml-20 font-light pr-4 text-3xl">Make A Call</h1>
    <div className="flex border-b-2 border-gray-400 mr-10 pb-8">
    
    <button className="bg-green-600 mx-auto  mt-5 border-green-600 border-2 text-white  hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded-lg ">
              {data.cell}
              </button>
    </div>
    <div className="flex border-b-2 border-gray-400 mr-10 pb-8">
    
    <button className="bg-green-600 mx-auto  mt-5 border-green-600 border-2 text-white  hover:bg-green-900 hover:text-white font-bold py-2 px-4 rounded-lg ">
              {data.phone}
              </button>
    </div>

    <h1 className="text-green-600 mt-10 font-light ml-4 pr-4 text-3xl">Date of Birth</h1>
    <div className=" border-b-2 border-gray-400 mr-10 pb-8">
    
       <p className="ml-4 mt-8">{data?.dob?.date}</p><br/>
       <p className="ml-4 mt-8">Age:{data?.dob?.age}</p>
       
    </div>

</div>

</div>
        </div>
    )
}

export default Home
