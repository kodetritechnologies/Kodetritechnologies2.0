import { serviceProvider } from "@/utils/serviceProvider";
import Link from "next/link";

async function Footer() {
  const serverProvider = await serviceProvider();
  const getAddress = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/configuration/footerSetting/address",
      );
      return response?.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getQuickLinks = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/configuration/footerSetting/quick_links",
      );
      return response?.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getSupportLinks = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/configuration/footerSetting/support_links",
      );
      return response?.data;
    } catch (error) {
      console.error(error);
    }
  };

  const getSocialLinks = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/configuration/footerSetting/social_links",
      );
      return response?.data;
    } catch (error) {
      console.error(error);
    }
  };

  const address = await getAddress();
  const quickLinks = await getQuickLinks();
  const supportLinks = await getSupportLinks();
  const socialLinks = await getSocialLinks();

  const transformContent = (html) => {
    if (!html) return "";
    return html
      .replace(/<link/g, "<a")
      .replace(/<\/link>/g, "</a>")
      .replace(/classname=/g, "class=");
  };

  return (
    <footer className="tf-footer">
      <div className="footer-inner flat-spacing position-relative">
        <div className="br-line fake-className top-0"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="footer-infor d-flex flex-column align-items-start mb-lg-0">
                <a href="index-2.html" className="logo-site mb-16">
                  <img
                    loading="lazy"
                    width="150"
                    height="30"
                    src="/assets/images/logo/logo.svg"
                    alt="Image"
                  />
                </a>
                <p className="lh-26 cl-text-2">{address?.value?.address}</p>
                <Link
                  href="mailto:hi.amere@gmail.com"
                  className="cl-text-2 link mb-8"
                >
                  {address?.value?.email}
                </Link>
                <Link
                  href={`tel:${address?.value?.mobile}`}
                  className="cl-text-2 link mb-16"
                >
                  {address?.value?.mobile}
                </Link>
                <ul className="tf-social-icon-2">
                  <li>
                    {socialLinks?.value?.facebook && (
                      <Link href={socialLinks?.value?.facebook} target="_blank">
                        <i className="icon icon-FacebookLogo"></i>
                      </Link>
                    )}
                  </li>
                  <li>
                    {socialLinks?.value?.x && (
                      <Link href={socialLinks?.value?.x} target="_blank">
                        <i className="icon icon-XLogo"></i>
                      </Link>
                    )}
                  </li>
                  <li>
                    {socialLinks?.value?.instagram && (
                      <Link
                        href={socialLinks?.value?.instagram}
                        target="_blank"
                      >
                        <i className="icon icon-InstagramLogo"></i>
                      </Link>
                    )}
                  </li>
                  {socialLinks?.value?.linkedin && (
                    <li>
                      <Link href={socialLinks?.value?.linkedin} target="_blank">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-col-block footer-wrap-1 mx-xl-auto">
                <p className="footer-heading footer-heading-mobile">
                  Quick Links
                </p>
                <div className="tf-collapse-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: transformContent(quickLinks?.value?.content),
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-2">
              <div className="footer-col-block footer-wrap-2 mx-xl-auto">
                <p className="footer-heading footer-heading-mobile">
                  Support Links
                </p>
                <div className="tf-collapse-content">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: transformContent(supportLinks?.value?.content),
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="footer-col-block footer-wrap-3 mb-0">
                <p className="footer-heading footer-heading-mobile">
                  NEWSLETTER
                </p>
                <div className="tf-collapse-content">
                  <p className="footer-desc cl-text-2">
                    Subscribe for store updates and discounts.
                  </p>
                  <form className="form-sub">
                    <fieldset>
                      <input
                        type="email"
                        placeholder="Enter your e-mail"
                        required
                      />
                    </fieldset>
                    <button type="submit" className="btn-action">
                      <i className="icon icon-ArrowUpRight"></i>
                    </button>
                  </form>
                  <p className="text-remember cl-text-2">
                    By clicking subcribe, you agree to the
                    <Link
                      href="/term-and-condition"
                      className="text-main link link-underline"
                    >
                      Terms of Service
                    </Link>
                    and
                    <Link
                      href="/privacy-policy"
                      className="text-main link link-underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="br-line sm-d-none"></div>
          <div className="inner-bottom">
            <p className="text-nocopy cl-text-2">
              ©2026 Amerce. All Rights Reserved.
            </p>
            <ul className="tf-list payment-list">
              <li>
                <img
                  loading="lazy"
                  width="38"
                  height="24"
                  src="/assets/images/payment/visa.svg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="38"
                  height="24"
                  src="/assets/images/payment/master-card.svg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="38"
                  height="24"
                  src="/assets/images/payment/amex.svg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="38"
                  height="24"
                  src="/assets/images/payment/paypal.svg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="38"
                  height="24"
                  src="/assets/images/payment/water.svg"
                  alt="Image"
                />
              </li>
              <li>
                <img
                  loading="lazy"
                  width="38"
                  height="24"
                  src="/assets/images/payment/discover.svg"
                  alt="Image"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
