import Mempelai from "./mempelai";
import CountingSection from "./counting";
import Location from "./location";
import ImageGallery from "./imagegallery";
import Footer from "./footer";
import supabase from "@/config/supabaseclient";
import Rsvp from "./rsvp";
import Gift from "./gift";
import Hero from "./v2/hero";
import Bride from "./v2/bride";
import Groom from "./v2/groom";

export default function WeddingPage() {
  console.log("Supabase Client:", supabase);
  return (
    <div className="bg-[#e6f5ec]">
      {/* Section 1: Mempelai */}
      {/* <Mempelai /> */}
      <Hero />

      {/* Section 2: Acara */}
      {/* <CountingSection /> */}
      <Bride />
      <Groom />

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
