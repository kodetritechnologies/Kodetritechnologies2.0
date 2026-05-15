import { serviceProvider } from "@/utils/serviceProvider";

async function page() {
  const serverProvider = await serviceProvider();
  const slugs = [
    "my-account",
    "orders-purchases",
    "returns-refunds",
    "shipping-tracking",
    "fees-billing",
    "other-topic",
  ];

  const getFaqs = async () => {
    try {
      const responses = await Promise.all(
        slugs.map((slug) => serverProvider.getMethod(`public/cms/faqs/${slug}`))
      );
      return responses.map((res) => res?.data?.data[0]).filter(Boolean);
    } catch (error) {
      console.error(error);
    }
  };

  const faqs = await getFaqs();

  return (
    <main id="wrapper">
      <section className="flat-spacing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 className="fw-bold">Frequently Asked Questions</h2>
                <p className="cl-text-2">Find answers to common questions about our services and policies.</p>
              </div>
              <ul className="faq-list">
                {faqs?.map((faq, index) => (
                  <li key={faq._id} className="faq-item mb-5" id={faq.slug}>
                    <h4 className="faq_title text-center mb-4">{faq.title}</h4>
                    <div className="faq_wrap" id={faq.slug}>
                      {faq.values?.map((item, idx) => (
                        <div key={idx} className="accordion-faq ">
                          <div
                            className="accordion-title collapsed"
                            data-bs-target={`#faq-${index}-${idx}`}
                            role="button"
                            data-bs-toggle="collapse"
                            aria-expanded="false"
                            aria-controls={`faq-${index}-${idx}`}
                          >
                            <span className="text h6">{item.ques}</span>
                            <span className="icon">
                              <span className="ic-accordion-custom"></span>
                            </span>
                          </div>
                          <div
                            id={`faq-${index}-${idx}`}
                            className="collapse"
                            data-bs-parent={`#${faq.slug}`}
                          >
                            <div className="accordion-body">
                              <p
                                className="cl-text-2"
                                dangerouslySetInnerHTML={{ __html: item.ans }}
                              ></p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
