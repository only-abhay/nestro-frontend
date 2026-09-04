import PasswordField from "./PasswordField";
import PrimaryButton from "../common/PrimaryButton";


export default function PasswordSection() {

  return (
    <div
      className="
      border
      border-[#E8E0D5]
      rounded-lg
      p-3
      "
    >

      <h4
        className="
        text-xs
        font-medium
        mb-3
        "
      >
        Change Password
      </h4>


      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-3
        mb-3
        "
      >

        <PasswordField
          label="Current Password"
        />

        <PasswordField
          label="New Password"
        />

      </div>


      <PrimaryButton>
        Update Password
      </PrimaryButton>


    </div>
  );
}