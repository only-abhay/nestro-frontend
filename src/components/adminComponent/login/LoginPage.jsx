"use client";

import { useState } from "react";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import axiosCat from "@/utils/helper";
import { ShieldCheck } from "lucide-react";


export default function AdminLogin() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
   const [isAdmin,setIsAdmin] = useState(false)
   console.log(isAdmin , "isAdmin")
  

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    loginAsAdmin: isAdmin,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,

      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      await axiosCat.post("/user/adminlogin",  {
  email: form.email,
  password: form.password,
  loginAsAdmin: isAdmin,
}, {
        withCredentials: true,
      });

      toast.success("Admin Login Successful", {
        position: "top-right",
      });

      setForm({
        email: "",

        password: "",
      });

      router.replace("/admin");
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Admin Login Failed",

        {
          position: "top-right",
        },
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
min-h-screen
bg-[#f5f3f1]
flex
items-center
justify-center
px-5
relative
"
    >
      {/* Background Shape */}

      <div
        className="
absolute
bottom-0
left-0
w-full
h-[220px]
bg-[#8B5E3C]
"
      />

      {/* Login Card */}

      <div
        className="
relative
z-10
w-full
max-w-md
bg-white
rounded-2xl
shadow-xl
px-8
py-10
"
      >
        {/* Header */}

        <div
          className="
mb-8
"
        >
          <div
            className="
w-12
h-1
bg-[#8B5E3C]
mb-5
"
          />

          <h1
            className="
text-2xl
font-semibold
text-[#2F2B27]
"
          >
            Admin Login
          </h1>

          <p
            className="
text-sm
text-[#8B8680]
mt-2
"
          >
            Sign in to access your admin dashboard.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="
space-y-5
"
        >
          {/* Email */}

          <div>
            <label
              className="
block
text-xs
text-[#8B8680]
mb-2
"
            >
              Admin Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              disabled={loading}
              onChange={handleChange}
              placeholder="admin@example.com"
              className="
w-full
h-12
px-4
rounded-lg
border
border-[#E5DDD5]
bg-[#FAFAF9]
text-sm
outline-none
focus:border-[#8B5E3C]
transition
"
            />
          </div>

          {/* Password */}

          <div>
            <label
              className="
block
text-xs
text-[#8B8680]
mb-2
"
            >
              Password
            </label>

            <div
              className="
relative
"
            >
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                disabled={loading}
                onChange={handleChange}
                placeholder="••••••••"
                className="
w-full
h-12
px-4
pr-12
rounded-lg
border
border-[#E5DDD5]
bg-[#FAFAF9]
text-sm
outline-none
focus:border-[#8B5E3C]
transition
"
              />

              <button
                type="button"
                disabled={loading}
                onClick={() => setShowPassword(!showPassword)}
                className="
absolute
right-4
top-1/2
-translate-y-1/2
text-[#8B8680]
"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
     {/* admin login button */}
     <div className="flex justify-between " >
      {/* forget  */}
    
          <div
            className="
            p-2
text-right
text-xs
text-[#8B5E3C]
cursor-pointer
hover:underline
"
          >
            Forgot password?
          </div>
    {/* login as a admin */}
    
           <button
      type="button"
      onClick={() => setIsAdmin(!isAdmin)}
      className={`
        inline-flex
        items-center
        gap-2
        px-3
        py-2
        rounded-md
        text-xs
        font-medium
        transition-all
        duration-200
        cursor-pointer
        border
        ${
          isAdmin
            ? "bg-[#8B5E3C] border-[#8B5E3C] text-white"
            : "bg-white border-[#E5DDD5] text-[#8B5E3C] hover:border-[#8B5E3C]"
        }
      `}
    >
      {/* Checkbox */}
      <span
        className={`
          w-4
          h-4
          rounded
          border
          flex
          items-center
          justify-center
          transition-all
          ${
            isAdmin
              ? "bg-white border-white"
              : "bg-transparent border-[#8B5E3C]"
          }
        `}
      >
        {isAdmin && (
          <span className="text-[#8B5E3C] text-[11px] font-bold">
            ✓
          </span>
        )}
      </span>

      <ShieldCheck size={14} />

      <span>Login as Admin</span>
    </button>


     </div>
          <button
            type="submit"
            disabled={loading}
            className={`

w-full

h-12

rounded-lg

text-sm

font-medium

flex

items-center

justify-center

gap-2

transition


${
  loading
    ? "bg-[#C8AE9B] cursor-not-allowed"
    : "bg-[#8B5E3C] hover:bg-[#70462D] text-white"
}

`}
          >
            {loading ? (
              <>
                <LoaderCircle size={18} className="animate-spin" />
                Checking...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <p
          className="
text-center
text-xs
text-[#8B8680]
mt-8
"
        >
          Admin Panel • Secure Login
        </p>
   
      </div>
    </div>
  );
}
