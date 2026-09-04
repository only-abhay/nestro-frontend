"use client";


export default function ErrorPage(){

return (

<div className="
min-h-screen
flex
items-center
justify-center
flex-col
gap-4
">


<h1 className="
text-3xl
font-bold
">

Something went wrong

</h1>


<p className="
text-slate-500
">

Unable to load product

</p>


<button
onClick={()=>window.location.reload()}
className="
bg-black
text-white
px-6
py-3
rounded-xl
"
>

Try Again

</button>


</div>

)

}