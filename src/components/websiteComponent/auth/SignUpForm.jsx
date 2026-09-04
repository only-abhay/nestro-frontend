"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

import CheckboxField from "./CheckboxField";
import SocialButton from "./SocialButton";
import AuthTerms from "./AuthTerms";
import axiosCat from "@/utils/helper";

export default function SignUpForm({ switchToSignin }) {

  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });


  // Handle Input Change
  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm((prev)=>({
      ...prev,
      [name]: value,
    }));

  };


  // Validation
  const validateForm = () => {


    if(!form.name.trim()){
      toast.error("Name is required");
      return false;
    }


    if(form.name.trim().length < 3){
      toast.error("Name must be at least 3 characters");
      return false;
    }


    const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!emailRegex.test(form.email)){
      toast.error("Enter valid email address");
      return false;
    }



    const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&]).{8,}$/;


    if(!passwordRegex.test(form.password)){
      toast.error(
        "Password must contain 8 characters, uppercase, lowercase, number and special character"
      );

      return false;
    }



    const phoneRegex =
    /^[6-9]\d{9}$/;


    if(!phoneRegex.test(form.number)){
      toast.error("Enter valid 10 digit mobile number");
      return false;
    }


    return true;

  };




  // Submit
  const handleSubmit = async(e)=>{

    e.preventDefault();


    if(loading) return;


    if(!validateForm()) return;


    setLoading(true);


    try{


      await axiosCat.post(
        "/user/register",
        form
      );


      toast.success(
        "OTP sent successfully",
        {
          position:"top-right"
        }
      );


      const email = form.email;


      setForm({
        name:"",
        email:"",
        password:"",
        number:"",
      });



      router.push(
        `/verify-otp?email=${email}`
      );


    }
    catch(err){


      toast.error(
        err?.response?.data?.message ||
        "Signup failed",
        {
          position:"top-right"
        }
      );


    }
    finally{

      setLoading(false);

    }


  };





return (

<>


<h2 className="text-[20px] font-medium text-[#2F2B27] mb-1">
 Create account
</h2>


<p className="text-[12px] text-[#8B8680] mb-[22px]">
 Join Nestro and start designing your dream home.
</p>



<form onSubmit={handleSubmit}>


<div className="mb-[14px]">

<label className="block text-[11px] text-[#8B8680] mb-[5px]">
Full Name
</label>


<input

type="text"

name="name"

value={form.name}

disabled={loading}

onChange={handleChange}

placeholder="Rahul"

maxLength={40}

className="
w-full
px-3
py-[10px]
border
border-[#E5DDD5]
rounded-[6px]
bg-[#FAFAF9]
"
/>


</div>





<div className="mb-[14px]">

<label className="block text-[11px] text-[#8B8680] mb-[5px]">
Email Address
</label>


<input

type="email"

name="email"

value={form.email}

disabled={loading}

onChange={handleChange}

autoComplete="email"

placeholder="rahul@email.com"

className="
w-full
px-3
py-[10px]
border
border-[#E5DDD5]
rounded-[6px]
bg-[#FAFAF9]
"

/>


</div>






<div className="mb-[14px]">


<label className="block text-[11px] text-[#8B8680] mb-[5px]">
Password
</label>



<div className="relative">

<input

type={showPassword ? "text" : "password"}

name="password"

value={form.password}

disabled={loading}

onChange={handleChange}

autoComplete="new-password"

placeholder="Min. 8 characters"

className="
w-full
px-3
py-[10px]
pr-10
border
border-[#E5DDD5]
rounded-[6px]
bg-[#FAFAF9]
"

/>


<button

type="button"

onClick={() => setShowPassword(!showPassword)}

className="
absolute
right-3
top-1/2
-translate-y-1/2
text-[#8B8680]
"

>

{

showPassword 
?
<EyeOff size={16}/>
:
<Eye size={16}/>

}

</button>


</div>

</div>






<div className="mb-[14px]">


<label className="block text-[11px] text-[#8B8680] mb-[5px]">
Phone Number
</label>


<input


type="tel"

name="number"

value={form.number}

disabled={loading}

maxLength={10}


onChange={(e)=>{

setForm({

...form,

number:e.target.value.replace(/\D/g,"")

})

}}


placeholder="9876543210"


className="
w-full
px-3
py-[10px]
border
border-[#E5DDD5]
rounded-[6px]
bg-[#FAFAF9]
"

/>


</div>





<CheckboxField

id="terms"

defaultChecked

label={
<>
I agree to the{" "}
<span className="text-[#8B5E3C]">
Terms of Service
</span>
{" "} & Privacy Policy
</>
}

/>





<CheckboxField

id="news"

defaultChecked

label="Send me design tips & exclusive offers"

/>





<button

type="submit"

disabled={loading}

className={`
w-full
py-3
rounded-[6px]
text-[13px]
font-medium
mb-4
flex
items-center
justify-center
gap-2
transition

${
loading
?
"bg-[#BFA48E] cursor-not-allowed"
:
"bg-[#8B5E3C] hover:bg-[#70462D] text-white"
}

`}


>


{

loading ?

<>

<LoaderCircle

size={17}

className="animate-spin"

/>

Creating Account...

</>

:

"Create Account"

}


</button>



</form>





<div className="flex items-center gap-2 mb-4">

<div className="flex-1 h-px bg-[#E5DDD5]" />


<span className="text-[11px] text-[#8B8680]">
or sign up with
</span>


<div className="flex-1 h-px bg-[#E5DDD5]" />


</div>





<SocialButton

icon={<FcGoogle size={16}/>}

text="Continue with Google"

/>




<AuthTerms

text="Already have an account?"

actionText="Sign in"

onClick={switchToSignin}

/>



</>

)

}