import Mempelai from "./mempelai";
import CountingSection from "./counting";
import Location from "./location";


export default function WeddingPage() {
  return (
    <div className="bg-[#e6f5ec]">
      {/* Section 1: Mempelai */}
      <Mempelai />

      {/* Section 2: Acara */}
      <CountingSection />

      {/* Section 3: Location */}
      <Location />
    </div>
  );
}
