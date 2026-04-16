import AskModel from "@/components/AskModel";
import CompareModel from "@/components/CompareModel";
import BoxIcon from "@/components/Home/BoxIcon";
import Category from "@/components/Home/Category";
import Collection from "@/components/Home/Collection";
import Gallery from "@/components/Home/Gallery";
import Lookbook from "@/components/Home/Lookbook";
import Slider from "@/components/Home/Slider";
import Testimonial from "@/components/Home/Testimonial";
import TopPick from "@/components/Home/TopPick";
import TopTrending from "@/components/Home/TopTrending";
import NewsletterModel from "@/components/NewsletterModel";
import QuickAddModel from "@/components/QuickAddModel";
import QuickViewModel from "@/components/QuickViewModel";
import RegisterModel from "@/components/RegisterModel";
import Search from "@/components/Search";
import ShareModel from "@/components/ShareModel";
import ShoppingCart from "@/components/ShoppingCart";
import SignInModel from "@/components/SignInModel";
import SizeGuideModel from "@/components/SizeGuideModel";

function page() {
  return (
    <>
      <main id="wrapper">
        <Slider />
        <Category />
        <TopPick />
        <Collection />
        <TopTrending />
        <Lookbook />
        <Testimonial />
        <Gallery />
        <BoxIcon />
      </main>
      <SizeGuideModel />
      <ShareModel />
      <AskModel />
      <CompareModel />
      <QuickAddModel />
      <QuickViewModel />
      <Search />
      <ShoppingCart />
      <RegisterModel />
      <SignInModel />
      <NewsletterModel />
    </>
  );
}

export default page;
