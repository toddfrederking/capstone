import React from "react";
import ShirtNumberOne from "./ShirtNumberOne";
import ShirtNumberTwo from "./ShirtNumberTwo";
import ShirtNumberThree from "./ShirtNumberThree";
import ShirtNumberFour from "./ShirtNumberFour";
import ShirtNumberFive from "./ShirtNumberFive";
import ShirtNumberSix from './ShirtNumberSix'

function HoodImages (){
  return(
    <div className="hood-images">
    
    <ShirtNumberOne/>
    <ShirtNumberTwo/>
    <ShirtNumberThree/>
    <ShirtNumberFour/>
    <ShirtNumberFive/>
    <ShirtNumberSix/>
  
    </div>

  )
  

}

export default HoodImages;