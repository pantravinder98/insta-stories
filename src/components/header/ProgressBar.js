import { Fragment, useEffect, useState, useRef } from "react";

export const ProgressBar = ({images, getBarNumberToParent}) =>{

    const [progressValue, setProgressValue] = useState(0);
    const [barNumber, setBarNumber] = useState(1);
    const [progressCurrentValue, setprogressCurrentValue] = useState(1);
    
    const moveProgress = (nettie) =>{
        if(barNumber && barNumber <= images.length){
            setProgressValue(0) 
             let inProgress = setInterval(() =>{
                let currentBarId =`progress${barNumber}`;
                // console.log("currentBarId ", typeof(currentBarId));
                let currentValue = document.getElementById(currentBarId).getAttribute("value");
                if(currentValue == 200){
                    clearInterval(inProgress);
                    console.log("hello ",   barNumber);
                    setBarNumber(barNumber + 1);
                }
                else{
                    setProgressValue((value) => value + 1)      
                }
            }, 50)      
        }
    }
    useEffect(() => {
        let currentBarId =`progress${barNumber}`;
        // console.log("ravi ",barNumber);
        document.getElementById(currentBarId).setAttribute("value", progressValue)
    },[progressValue])

    useEffect(() => {
        // console.log("barNumber ",barNumber);
        moveProgress();
        getBarNumberToParent(barNumber);
    },[barNumber] )
     
    
    return(
    <Fragment>
    {
        images ?
        images.map((image, index) => {
            if(index <= images.length){
                return( 
                    <progress className="progressBar"  key={index} id={"progress"+(index + 1)} value={0} max="200"></progress>
                )
            }
        })
        :
        "No Progress Found"
    }   
    </Fragment>
    )
}