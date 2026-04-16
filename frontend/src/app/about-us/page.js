import MainAbout from "@/components/About-us/MainAbout";
import Member from "@/components/About-us/Member";
import WhyChoose from "@/components/About-us/WhyChoose";
import Testimonial from "@/components/Home/Testimonial";

function page() {
  return (
    <main id="wrapper">
      <MainAbout />
      <WhyChoose />
      <Testimonial />
      <Member />
    </main>
  );
}

export default page;
