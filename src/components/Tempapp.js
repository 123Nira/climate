import React, { useEffect, useState} from 'react';
import "./css/style.css";

const Tempapp=()=>{

const [city, setCity] = useState(null);
const [search, setSearch] = useState(null);


useEffect(()=>{
const fetchApi=async()=>{

const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=15af16a1afbce4b95fa0ac2cc0979cf8`
const response=await fetch(url)

const resJson=await response.json();
 setCity(resJson.main);
};
fetchApi()

},[search] )


    return(
      <>
     <div className="box">
      <h1>Weather Reports</h1>
       <div className="inputData">
         <input type ="search" value={search}
        placeholder="Enter City,State and Country"
         className="inputField"
         onChange={(event)=>{ setSearch(event.target.value)

         }} />
       </div>
   
   {
     !city ? (
       <p className="errorMsg">Data Not Found</p>
     ) :(
       <div>
       <div className="info">
        <h2 className="location"> 
        <i className="fas fa-street-view"></i>{search}
        </h2>
         <h1 className="temp">
        {city.temp}
         </h1>
         <h3 className="tempmin_max">Min: {city.temp}°Cel | Max :{city.temp}°Cel
         </h3>
     </div>
     <div className="wave-one"></div>
     <div className="wave-two"></div>
     <div className="wave-three"></div>
       </div>
    
     )
   }
     
     </div>
      </>
    )
}

export default Tempapp;
