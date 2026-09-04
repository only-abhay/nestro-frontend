import SectionCard from "../common/SectionCard";
import SectionTitle from "../common/SectionTitle";
import PrimaryButton from "../common/PrimaryButton";

import ProfileField from "./ProfileField";


export default function PersonalInfoSection({
  user
}) {

  return (
    <SectionCard>

      <SectionTitle>
        Personal Information
      </SectionTitle>


      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-[14px]
        "
      >

        <ProfileField
          label="First Name"
          defaultValue={user.name}
        />


        <ProfileField
          label="Email"
          defaultValue={user.email}
        />


        <ProfileField
          label="Phone"
          defaultValue={user.number}
        />

      </div>


      <div className="mt-4">

        <PrimaryButton>
          Save Changes
        </PrimaryButton>

      </div>


    </SectionCard>
  );
}