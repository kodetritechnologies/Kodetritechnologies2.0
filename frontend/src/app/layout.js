import "../../public/style.css";
import Header from "@/components/partials/Header";
import Footer from "@/components/partials/Footer";
import ScriptLoader from "@/components/partials/ScriptLoader";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "@/utils/context/AuthContext";
import { QuickViewProvider } from "@/utils/context/QuickViewContext";

import AskModel from "@/components/AskModel";
import CompareModel from "@/components/CompareModel";
import NewsletterModel from "@/components/NewsletterModel";
import QuickAddModel from "@/components/QuickAddModel";
import QuickViewModel from "@/components/QuickViewModel";
import RegisterModel from "@/components/RegisterModel";
import Search from "@/components/Search";
import ShareModel from "@/components/ShareModel";
import ShoppingCart from "@/components/ShoppingCart";
import SignInModel from "@/components/SignInModel";
import SizeGuideModel from "@/components/SizeGuideModel";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/fonts/fonts.css" />
        <link rel="stylesheet" href="/assets/icon/icomoon/style.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" type="text/css" href="/assets/css/styles.css" />
      </head>
      <body>
        <AuthContextProvider>
          <QuickViewProvider>
            <ScriptLoader />
            <Header />
            {children}
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
            <Toaster position="top-right" />
            <Footer />
            <Script
              src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
              crossOrigin="anonymous"
              strategy="beforeInteractive"
            />
            <Script
              src="/assets/js/plugin/jquery.min.js"
              strategy="beforeInteractive"
            />
            <Script
              src="/assets/js/plugin/swiper-bundle.min.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugin/bootstrap-select.min.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugin/count-down.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugin/infinityslide.js"
              strategy="afterInteractive"
            />
            <Script
              src="/assets/js/plugin/wow.min.js"
              strategy="afterInteractive"
            />
            <Script src="/assets/js/carousel.js" strategy="afterInteractive" />
            <Script src="/assets/js/main.js" strategy="afterInteractive" />
          </QuickViewProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
