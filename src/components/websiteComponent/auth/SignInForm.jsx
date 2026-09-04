"use client";

import { useEffect, useState } from "react";
import { Eye, EyeOff, Apple, LoaderCircle } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import SocialButton from "./SocialButton";
import AuthTerms from "./AuthTerms";
import axiosCat from "@/utils/helper";

export default function SignInForm({ switchToSignup }) {
  const [lscart, setLsCart] = useState(null);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    setLsCart(cart);
  }, []);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
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
      const response = await axiosCat.post("/user/login", form);

      toast.success("Login Successful", {
        position: "top-right",
      });

      setForm({
        email: "",
        password: "",
      });
      let cart = [];

      if (lscart) {
        cart = JSON.parse(lscart).cart;
      }
      const Postedcart = await axiosCat.post("/cart/sync-cart", {
        cart_data: cart,
        user_id: response.data.data,
      });
      if (Postedcart.data.success) {
        localStorage.removeItem("cart");
        let sale_total = 0;
        let original_total = 0;
        const latestcart = Postedcart.data.cart;
        const NewCart = latestcart.map((item) => {
          original_total += item.productId.originalPrice * item.quantity;
          sale_total += item.productId.salePrice * item.quantity;
          return {
            id: item.productId._id,
            name: item.productId.name,
            salePrice: item.productId.salePrice,
            originalPrice: item.productId.originalPrice,
            thumbnail: item.productId.thumbnail,
            qty: item.quantity,
          };
        });
        const CartData = {
          cart: NewCart,
          original_total,
          sale_total,
        };
        localStorage.setItem("cart", JSON.stringify(CartData));
      }
      router.push("/");
    } catch (err) {
      toast.error(err?.response?.data?.message || "Login Failed", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="text-[20px] font-medium text-[#2F2B27] mb-1">
        Welcome back
      </h2>

      <p className="text-[12px] text-[#8B8680] mb-[22px]">
        Sign in to your Nestro account to continue.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-[14px]">
          <label className="block text-[11px] text-[#8B8680] mb-[5px]">
            Email address
          </label>

          <input
            type="email"
            name="email"
            value={form.email}
            disabled={loading}
            onChange={handleChange}
            placeholder="rahul@email.com"
            className="
w-full
px-3
py-[10px]
border
border-[#E5DDD5]
rounded-[6px]
bg-[#FAFAF9]
text-[13px]
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
              placeholder="••••••••"
              className="
w-full
px-3
py-[10px]
pr-10
border
border-[#E5DDD5]
rounded-[6px]
bg-[#FAFAF9]
text-[13px]
"
            />

            <button
              type="button"
              disabled={loading}
              onClick={() => setShowPassword(!showPassword)}
              className="
absolute
right-3
top-1/2
-translate-y-1/2
text-[#8B8680]
"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>

        <div
          className="
text-right
text-[11px]
text-[#8B5E3C]
mb-[14px]
cursor-pointer
"
        >
          Forgot password?
        </div>

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
    ? "bg-[#BFA48E] cursor-not-allowed"
    : "bg-[#8B5E3C] hover:bg-[#70462D] text-white"
}

`}
        >
          {loading ? (
            <>
              <LoaderCircle size={17} className="animate-spin" />
              Signing In...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 h-px bg-[#E5DDD5]" />

        <span className="text-[11px] text-[#8B8680]">or continue with</span>

        <div className="flex-1 h-px bg-[#E5DDD5]" />
      </div>

      <SocialButton icon={<FcGoogle size={16} />} text="Continue with Google" />

      <SocialButton icon={<Apple size={16} />} text="Continue with Apple" />

      <AuthTerms
        text="Don't have an account?"
        actionText="Create one free"
        onClick={switchToSignup}
      />
    </>
  );
}
