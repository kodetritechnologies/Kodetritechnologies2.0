function page() {
  return (
    <main id="wrapper">
      <section className="section-term-user flat-spacing">
        <div className="container">
          <div className="content">
            <div className="term-item">
              <h5 className="term-title">1. Shipping Methods</h5>
              <div className="text-wrap">
                <p className="term-text cl-text-2">
                  We offer the following shipping methods for domestic and
                  international orders:
                </p>
                <p className="term-text cl-text-2">
                  <span>Standard Shipping - USPS:</span>
                  Estimated delivery within [...] business days for domestic
                  orders and [...] business days for international orders.{" "}
                  <br />
                  <span>Expedited Shipping - DHL:</span>
                  Estimated delivery within [...] &nbsp;business days for
                  domestic orders and [...] business days for international
                  orders. Additional charges ($5-$10) may apply. <br />
                  <span>Free Shipping - USPS:</span>
                  Orders over a certain amount qualify for free standard
                  shipping within the continental United States
                </p>
                <p className="term-text cl-text-2">
                  Please clarify shipping costs, and shipping transit time if
                  you have&nbsp;
                </p>
              </div>
            </div>

            <div className="term-item">
              <h5 className="term-title">
                2. Processing and Cancellation Time
              </h5>
              <div className="text-wrap">
                <p className="term-text cl-text-2">
                  Orders are typically processed and shipped within [...]
                  business days after payment confirmation. Please note that
                  orders placed on weekends or holidays will be processed on the
                  next business day.&nbsp;
                </p>
                <p className="term-text cl-text-2">
                  Please note that{" "}
                  <span>
                    once your order is processed for shipping with a tracking
                    number, we are unable to cancel your order.&nbsp;
                  </span>{" "}
                  <br />
                  You can <span>cancel the order within 6 hours</span> after the
                  order was placed by contacting us via email address:
                  [contact@amerce.com]
                </p>
              </div>
            </div>
            <div className="term-item">
              <h5 className="term-title">3. Shipping Costs</h5>
              <p className="term-text cl-text-2">
                Shipping costs are calculated based on the weight of the
                package, destination, and selected shipping method. The shipping
                cost will be displayed at checkout before the final payment.
              </p>
            </div>
            <div className="term-item">
              <h5 className="term-title">4. International Shipping</h5>
              <div className="text-wrap">
                <p className="term-text cl-text-2">
                  For international orders, please note that customs duties,
                  taxes, and any additional fees imposed by the destination
                  country are the responsibility of the customer. We are not
                  responsible for delays due to customs clearance processes.
                </p>
                <p className="term-text cl-text-2">
                  We reserve the right to update our shipping policy at any
                  time. Any changes to our shipping policy will be communicated
                  on our website. <br />
                  We kindly ask our customers to read and take notes before
                  making a purchase. We will automatically assume that the
                  customer has accepted all the terms outlined above.
                </p>
              </div>
            </div>
            <div className="term-item">
              <div className="text-wrap">
                <p className="term-text cl-text-2">
                  If you have any questions or concerns regarding our shipping
                  policy, please feel free to contact us at{" "}
                  <a
                    href="mailto:contact@amerce.com"
                    className="link body-text fw-medium"
                  >
                    contact@amerce.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
