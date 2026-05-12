import RecentBlog from "@/components/Blog/RecentBlog";
import { serviceProvider } from "@/utils/serviceProvider";
import { formatDate } from "@/utils/helpers/dateHelper";
import Link from "next/link";
import SharePost from "@/components/Blog/SharePost";

async function page({ params }) {
  const { slug } = await params;
  const serverProvider = await serviceProvider();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:7778";

  const fetchBlog = async () => {
    try {
      const response = await serverProvider.getMethod(`public/cms/posts/${slug}`);
      return response?.data || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const fetchRelatedBlogs = async () => {
    try {
      const response = await serverProvider.getMethod(`public/cms/posts/related/${slug}?count=3`);
      return response?.data?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const [blog, relatedBlogs] = await Promise.all([
    fetchBlog(),
    fetchRelatedBlogs(),
  ]);

  if (!blog) {
    return (
      <div className="container flat-spacing text-center">
        <h3>Blog not found</h3>
        <Link href="/blog" className="tf-btn animate-btn mt-4">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <main id="wrapper">
      <section className="section-blog-single">
        <div className="main-blog-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="blog-image">
                  <img
                    loading="lazy"
                    width="1410"
                    height="600"
                    src={blog.featured_image?.url || "/assets/images/blog/detail-1.jpg"}
                    alt={blog.title}
                  />
                </div>
              </div>
              <div className="col-lg-8 mx-auto">
                <div className="blog-content">
                  <div className="blog-heading">
                    <div className="entry-tag fw-medium">
                      {blog.categories?.[0]?.name || "Fashion"}
                    </div>
                    <h3 className="entry-title">
                      {blog.title}
                    </h3>
                    <div className="entry-meta">
                      <div className="meta-item meta-date">
                        <i className="icon icon-CalendarBlank"></i>
                        <span className="text-body-1">
                          {formatDate(blog.publish_date || blog.createdAt, { includeYear: true, monthFormat: "long" })}
                        </span>
                      </div>
                      <div className="br-line type-vertical"></div>
                    </div>
                  </div>
                  <div
                    className="d-grid gap-12"
                    dangerouslySetInnerHTML={{ __html: blog.content }}
                  >
                  </div>

                  <div className="box-social-tag">
                    <div className="tags-right  d-flex align-items-center flex-wrap gap-8">
                      <p>Tags:</p>
                      {blog.tags?.map((tag) => (
                        <Link
                          key={tag._id}
                          href={`/blog?tag=${tag.slug}`}
                          className="tag-item text-caption-01"
                        >
                          {tag.name}
                        </Link>
                      ))}
                    </div>
                    <SharePost 
                      url={`${baseUrl}/blog/${blog.slug}`} 
                      title={blog.title} 
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <RecentBlog data={relatedBlogs} />
    </main>
  );
}

export default page;
