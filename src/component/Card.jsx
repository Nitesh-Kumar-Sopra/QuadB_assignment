// import React from 'react'
import{ useNavigate} from "react-router-dom";
const Card = ({details}) => {
    const navigate=useNavigate();
   // console.log(cardetails);
   const btnclick=()=>{
    navigate("/Details",{state:{details}});
   
   }
  return (
   <>
    
<div className="w-full m-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="p-8 rounded-t-lg" src={details.image?.original} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{details.name}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <h3>Rating-<span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                {details.rating.average || 5.0}
            </span></h3>
           
        </div>
        <div className="flex justify-center">
           
        <button onClick={btnclick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">see more datails</button>
        </div>
    </div>
</div>

   </>
  )
}

export default Card;