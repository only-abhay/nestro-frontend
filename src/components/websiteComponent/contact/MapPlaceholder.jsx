import { Map } from "lucide-react";

export default function MapPlaceholder() {
  return (
    <div className="bg-[#221A14] rounded-xl h-[180px] sm:h-[220px] flex items-center justify-center text-[#C6A27E] text-sm">
      <Map
        size={22}
        className="mr-2"
      />
      View on Google Maps
    </div>
  );
}