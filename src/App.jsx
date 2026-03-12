import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";

function App(){

const [stage,setStage] = useState("loading");

useEffect(()=>{

if(stage==="loading"){
setTimeout(()=>{
setStage("splash");
},1000);   // loading time
}

if(stage==="splash"){
setTimeout(()=>{
setStage("home");
},1500);   // splash time
}

},[stage]);

if(stage==="loading"){
return <LoadingScreen/>
}

if(stage==="splash"){
return <SplashScreen/>
}

return <Home/>

}

export default App;