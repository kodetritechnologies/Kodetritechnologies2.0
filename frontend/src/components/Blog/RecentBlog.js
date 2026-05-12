import Link from "next/link";
import { formatDate } from "@/utils/helpers/dateHelper";

function RecentBlog({ data = [] }) {
  if (data.length === 0) return null;

  return (
    <section className="section-related flat-spacing">
      <div className="container">
        <div className="sect-heading text-center">
          <h3 className="s-title">Related Posts</h3>
          <p className="s-desc text-body-1 cl-text-2">
            Discover more stories and style tips to keep your fashion
            inspiration flowing.
          </p>
        </div>
        <h4 className="d-none">Perfect SEO</h4>
        <div
          dir="ltr"
          className="tf-grid-layout sm-col-2 lg-col-3 gap-30"
        >
          {data.map((item) => (
            <article className="article-blog hover-img" key={item._id}>
              <Link href={`/blog/${item.slug}`} className="blog-image img-style">
                <img
                  loading="lazy"
                  width="450"
                  height="307"
                  src={item.featured_image?.url || "/assets/images/blog/blog-1.jpg"}
                  alt={item.title}
                />
              </Link>
              <div className="blog-content">
                <p className="entry-date text-caption-01 fw-semibold cl-text-3">
                  {formatDate(item.publish_date || item.createdAt, { includeYear: false, monthFormat: "long" })}
                </p>
                <h5 className="entry-title">
                  <Link href={`/blog/${item.slug}`} className="link-underline link">
                    {item.title}
                  </Link>
                </h5>
                <p className="entry-desc cl-text-2">
                  {item.content ? (item.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...') : ""}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentBlog;
