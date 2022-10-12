import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading";
import TopBanner from "../../Shared/TopBanner";
import Blog from "./Blog";

const Blogs = () => {
  const [loading, setLoading] = useState(false);

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    setLoading(true);
    (async function () {
      const { data } = await axios.get("blogs.json");
      setBlogs(data);
      setLoading(false);
    })();
  }, []);
  if (loading) return <Loading />;
  return (
    <div className="">
      {/* top  */}
      <TopBanner
        img="https://brtechnosoft.com/wp-content/uploads/2022/02/blogs-banner.jpeg"
        pageName="Read Our Blog"
      />

      <div className=" w-[90%] lg:w-[80%] mx-auto mt-6">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
