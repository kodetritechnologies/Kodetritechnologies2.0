import BoxIcon from "@/components/Home/BoxIcon";
import Category from "@/components/Home/Category";
import Collection from "@/components/Home/Collection";
import Slider from "@/components/Home/Slider";
import Testimonial from "@/components/Home/Testimonial";
import TopPick from "@/components/Home/TopPick";
import TopTrending from "@/components/Home/TopTrending";

function page() {
  return (
    <>
      <main id="wrapper">
        <Slider />
        <Category />
        <TopPick />
        <Collection />
        <TopTrending />
        <Testimonial />
        <BoxIcon />
      </main>
    </>
  );
}

export default page;
