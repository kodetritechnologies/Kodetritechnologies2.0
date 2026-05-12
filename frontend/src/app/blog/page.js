import { serviceProvider } from "@/utils/serviceProvider";
import { formatDate } from "@/utils/helpers/dateHelper";
import Link from "next/link";
import Pagination from "@/components/Pagination";

async function page({ searchParams }) {
  const resolvedParams = await searchParams;
  const page = resolvedParams?.page || 1;
  const search = resolvedParams?.search || "";
  const category = resolvedParams?.category || "";
  const tag = resolvedParams?.tag || "";

  const serverProvider = await serviceProvider();

  const fetchCategories = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/configuration/categories/blog"
      );
      return response?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchTags = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/configuration/tages/blog"
      );
      return response?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const fetchBlogs = async (pageNumber, search, category, tag) => {
    try {
      let query = `?page=${pageNumber}`;
      if (search) query += `&search=${encodeURIComponent(search)}`;
      if (category) query += `&category=${encodeURIComponent(category)}`;
      if (tag) query += `&tag=${encodeURIComponent(tag)}`;

      const response = await serverProvider.getMethod(
        `public/cms/posts/type/blog${query}`
      );
      return response?.data || {};
    } catch (error) {
      console.error(error);
      return {};
    }
  };

  const fetchRecentBlogs = async () => {
    try {
      const response = await serverProvider.getMethod(
        "public/cms/posts/recent/blog?count=4"
      );
      return response?.data?.data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const [categories, tags, blogsData, recentBlogs] = await Promise.all([
    fetchCategories(),
    fetchTags(),
    fetchBlogs(page, search, category, tag),
    fetchRecentBlogs(),
  ]);

  const blogs = blogsData?.data || [];

  return (
    <main id="wrapper">
      <section className="section-blog flat-spacing">
        <h3 className="d-none">Perfect Heading SEO</h3>
        <h4 className="d-none">Perfect Heading SEO</h4>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tf-grid-layout sm-col-2">
                {blogs.map((item) => (
                  <article className="article-blog hover-img" key={item._id}>
                    <Link href={`/blog/${item.slug}`} className="blog-image img-style">
                      <img
                        loading="lazy"
                        width="450"
                        height="307"
                        src={item.featured_image?.url || "/assets/images/blog/fashion_blog_post.png"}
                        alt={item.title}
                      />
                    </Link>
                    <div className="blog-content">
                      <p className="entry-date text-caption-01 fw-semibold cl-text-3">
                        {formatDate(item.publish_date || item.createdAt, { includeYear: false, monthFormat: "long" })}
                      </p>
                      <h5 className="entry-title">
                        <Link
                          href={`/blog/${item.slug}`}
                          className="link-underline link"
                        >
                          {item.title}
                        </Link>
                      </h5>
                      <p className="entry-desc cl-text-2">
                        {item.content ? (item.content.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...') : ""}
                      </p>
                    </div>
                  </article>
                ))}
                {blogs.length === 0 && <p>No blogs found.</p>}
              </div>
              <Pagination data={blogsData} />
            </div>
            <div className="col-lg-4 d-none d-lg-block">
              <div className="blog-sidebar sidebar-content-wrap sticky-top">
                <div className="sidebar-item">
                  <div className="sb-search">
                    <form className="form-search-blog" method="GET" action="/blog">
                      <fieldset>
                        <input
                          className="style-stroke-bottom"
                          type="text"
                          name="search"
                          defaultValue={search}
                          placeholder="Search..."
                          required
                        />
                      </fieldset>
                      <button type="submit" className="btn-action link">
                        <i className="icon icon-MagnifyingGlass"></i>
                      </button>
                    </form>
                    {(search || category || tag) && (
                      <Link href="/blog" className="mt-2 d-block text-center text-primary">
                        Clear All Filters
                      </Link>
                    )}
                  </div>
                </div>
                <div className="sidebar-item">
                  <h5 className="sb-title">Categories</h5>
                  <ul className="sb-category">
                    {categories.map((item) => (
                      <li key={item._id}>
                        <Link 
                          href={`/blog?category=${item.slug}${search ? `&search=${search}` : ""}`}
                          className={category === item.slug ? "active text-primary" : ""}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-item">
                  <h5 className="sb-title">Recent Posts</h5>
                  <ul className="sb-recent">
                    {recentBlogs.map((item) => (
                      <li className="recent-item" key={item._id}>
                        <Link href={`/blog/${item.slug}`} className="image">
                          <img
                            loading="lazy"
                            width="90"
                            height="90"
                            src={item.featured_image?.url || "/assets/images/blog/recent_staples.png"}
                            alt={item.title}
                          />
                        </Link>
                        <div className="meta">
                          <p className="meta-date text-caption-01 cl-text-2">
                            {formatDate(item.publish_date || item.createdAt, { includeYear: false, monthFormat: "long" })}
                          </p>
                          <Link
                            href={`/blog/${item.slug}`}
                            className="meta-name link-underline link fw-medium"
                          >
                            {item.title}
                          </Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="sidebar-item">
                  <h5 className="sb-title">Popular Tag</h5>
                  <ul className="sb-tag">
                    {tags.map((item) => (
                      <li key={item._id}>
                        <Link 
                          href={`/blog?tag=${item.slug}${search ? `&search=${search}` : ""}`}
                          className={`text-caption-01 ${tag === item.slug ? "active text-primary" : ""}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;

