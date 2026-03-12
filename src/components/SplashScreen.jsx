import { useEffect, useState } from "react";

function SplashScreen(){

const [show,setShow] = useState(false)

useEffect(()=>{
setTimeout(()=>{
setShow(true)
},200)
},[])

return(

<div className="h-screen w-full flex items-center justify-center relative overflow-hidden splash-bg">

{/* circles */}

<div className="circle circle1"></div>
<div className="circle circle2"></div>
<div className="circle circle3"></div>

{/* content */}

<div className={show ? "splash-content show flex flex-col items-center" : "splash-content flex flex-col items-center"}>

<img
src="/logo.png"
className="w-[130px] h-[130px] rounded-full object-cover mb-5 logo-glow"
/>

<h1 className="text-5xl font-bold tracking-wider title-glow">
Microsoft Club
</h1>

</div>

</div>

)

}

export default SplashScreen