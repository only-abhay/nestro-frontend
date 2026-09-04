import SectionTitle from "../ui/SectionTitle";
import CartStepper from "./CartStepper";

export default function CartHeader() {
  return (
    <div className="space-y-8">

      <SectionTitle title="Cart" />

      <CartStepper />

    </div>
  );
}