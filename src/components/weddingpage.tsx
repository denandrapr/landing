import Mempelai from "./mempelai";
import CountingSection from "./counting";
import Location from "./location";
import ImageGallery from "./imagegallery";
import Footer from "./footer";
import supabase from "@/config/supabaseclient";
import Rsvp from "./rsvp";
import Gift from "./gift";

export default function WeddingPage() {
  console.log("Supabase Client:", supabase);
  return (
    <div className="bg-[#e6f5ec]">
      {/* Section 1: Mempelai */}
      <Mempelai />

      {/* Section 2: Acara */}
      <CountingSection />

      {/* Section 3: Location */}
      <Location />

      {/* Section 4: Gallery */}
      <ImageGallery />

      {/* Section 5: Rsvp */}
      <Rsvp />

      {/* Section 5: Rsvp */}
      <Gift />

      {/* Section 5: Footer */}
      <Footer />
    </div>
  );
}
