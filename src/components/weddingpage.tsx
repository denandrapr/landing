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
import LocationV2 from "./v2/locationv2";
import { motion } from "framer-motion";
import ImageGalleryV2 from "./v2/imagegalleryv2";
import CountingSectionV2 from "./v2/countingv2";
import FooterV2 from "./v2/footerv2";
import GiftV2 from "./v2/giftv2";
import RsvpV2 from "./v2/rsvpv2";
import ListUcapan from "./v2/listucapan";

export default function WeddingPage() {
  console.log("Supabase Client:", supabase);
  return (
    <div className="bg-black">
      {/* Section 1: Mempelai */}
      {/* <Mempelai /> */}
      <Hero />

      {/* Section 2: Acara */}
      <Bride />
      <Groom />

      {/* Section 3: Location */}
      {/* <Location /> */}
      <LocationV2 />

      <motion.div
        className="w-full z-60"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
      >
        <iframe
          title="Wedding Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.0706208593206!2d112.7348571!3d-7.345966899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb4b0d8c2dff%3A0xb0e6098509d44856!2sGedung%20Graha%20Wisata!5e0!3m2!1sen!2sid!4v1745086170180!5m2!1sen!2sid"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
        ></iframe>
      </motion.div>
      {/* Section 3: Counting */}
      <CountingSectionV2 />

      {/* Section 4: Gallery */}
      <ImageGalleryV2 />

      {/* Section 5: Rsvp */}
      <RsvpV2 />
      <ListUcapan />

      {/* Section 5: Rsvp */}
      <GiftV2 />

      {/* Section 5: Footer */}
      {/* <Footer /> */}
      <FooterV2 />
    </div>
  );
}
