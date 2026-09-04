import { showrooms } from "@/data/contactData";
import ShowroomCard from "./ShowroomCard";

export default function ShowroomSection() {
  return (
    <div>
      <div className="section-tag">
        Showrooms
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {showrooms.map((showroom) => (
          <ShowroomCard
            key={showroom.city}
            {...showroom}
          />
        ))}
      </div>
    </div>
  );
}