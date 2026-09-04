"use client";

import { useState } from "react";
import axiosCat from "@/utils/helper";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function AddressForm({
  onClose,
}) {
    const router = useRouter()
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    country: "India",
    pincode: "",
    addressType: "Home",
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axiosCat.post(
        "/user/address",
        form
      );

      toast.success(response.data.message);

    router.refresh()

      onClose();

    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitHandler}
      className="space-y-5"
    >
      <div className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={form.fullName}
          onChange={handleChange}
          required
          className="border rounded-lg p-3 w-full"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="border rounded-lg p-3 w-full"
        />

      </div>

      <textarea
        rows={4}
        name="addressLine"
        placeholder="Address"
        value={form.addressLine}
        onChange={handleChange}
        required
        className="border rounded-lg p-3 w-full resize-none"
      />

      <div className="grid md:grid-cols-3 gap-4">

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          required
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="state"
          placeholder="State"
          value={form.state}
          onChange={handleChange}
          required
          className="border rounded-lg p-3"
        />

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={form.pincode}
          onChange={handleChange}
          required
          className="border rounded-lg p-3"
        />

      </div>

      <div className="grid md:grid-cols-2 gap-4">

        <select
          name="addressType"
          value={form.addressType}
          onChange={handleChange}
          className="border rounded-lg p-3"
        >
          <option>Home</option>
          <option>Office</option>
          <option>Other</option>
        </select>

        <input
          type="text"
          name="country"
          value={form.country}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

      </div>

      <label className="flex items-center gap-2">

        <input
          type="checkbox"
          name="isDefault"
          checked={form.isDefault}
          onChange={handleChange}
        />

        Set as Default Address

      </label>

      <button
        disabled={loading}
        className="
        w-full
                   bg-[#8b5e3c]
            hover:bg-[#2c2016]

        text-white
        py-3
        rounded-lg
        font-semibold
        "
      >
        {loading
          ? "Saving..."
          : "Save Address"}
      </button>
    </form>
  );
}