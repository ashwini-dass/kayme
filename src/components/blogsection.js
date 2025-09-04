import React from "react";

const BlogSection = () => {
  return (
    <div className="blog-area bg-off-white padding-90">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="section-title col-xs-12 text-center">
            <h1>LATEST from blog</h1>
          </div>
          <div className="col-xs-12">
            <div className="blog-slider">
              {/* Blog Item 1 */}
              <div className="sin-blog">
                <div className="blog-image">
                  <a href="#"><img src="assets/img/blog/1.jpg" alt="Blog 1" /></a>
                  <div className="blog-date text-center">
                    <h4>07</h4>
                    <p>May</p>
                  </div>
                </div>
                <div className="blog-details">
                  <div className="blog-meta fix">
                    <p className="author float-left">
                      <a href="#"><i className="zmdi zmdi-account"></i> By Admin</a>
                    </p>
                    <p className="comment-like float-right">
                      <a href="#"><i className="zmdi zmdi-comment-outline"></i> (15)</a>
                      <a href="#"><i className="zmdi zmdi-favorite-outline"></i> (225)</a>
                    </p>
                  </div>
                  <h4 className="blog-title"><a href="#">How to Improve Your Sales Volume</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmodte porincididunvt...</p>
                  <a className="read-more" href="#">Continue Reading</a>
                </div>
              </div>

              {/* Blog Item 2 */}
              <div className="sin-blog">
                <div className="blog-image">
                  <a href="#"><img src="assets/img/blog/2.jpg" alt="Blog 2" /></a>
                  <div className="blog-date text-center">
                    <h4>05</h4>
                    <p>May</p>
                  </div>
                </div>
                <div className="blog-details">
                  <div className="blog-meta fix">
                    <p className="author float-left">
                      <a href="#"><i className="zmdi zmdi-account"></i> By Admin</a>
                    </p>
                    <p className="comment-like float-right">
                      <a href="#"><i className="zmdi zmdi-comment-outline"></i> (15)</a>
                      <a href="#"><i className="zmdi zmdi-favorite-outline"></i> (225)</a>
                    </p>
                  </div>
                  <h4 className="blog-title"><a href="#">Top 10 Marketing for Improving Sales</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmodte porincididunvt...</p>
                  <a className="read-more" href="#">Continue Reading</a>
                </div>
              </div>

              {/* Blog Item 3 */}
              <div className="sin-blog">
                <div className="blog-image">
                  <a href="#"><img src="assets/img/blog/3.jpg" alt="Blog 3" /></a>
                  <div className="blog-date text-center">
                    <h4>21</h4>
                    <p>March</p>
                  </div>
                </div>
                <div className="blog-details">
                  <div className="blog-meta fix">
                    <p className="author float-left">
                      <a href="#"><i className="zmdi zmdi-account"></i> By Admin</a>
                    </p>
                    <p className="comment-like float-right">
                      <a href="#"><i className="zmdi zmdi-comment-outline"></i> (15)</a>
                      <a href="#"><i className="zmdi zmdi-favorite-outline"></i> (225)</a>
                    </p>
                  </div>
                  <h4 className="blog-title"><a href="#">Best Social Media Marketing..</a></h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmodte porincididunvt...</p>
                  <a className="read-more" href="#">Continue Reading</a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
