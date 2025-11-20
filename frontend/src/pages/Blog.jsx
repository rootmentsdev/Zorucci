import { useEffect, useState } from "react";

function Blogpage() {
  const [data, setData] = useState(null);

  // URL logic:
  const url = import.meta.env.DEV
    ? "http://localhost:8080/content/blog.json"   // when running npm run dev
    : "/content/blog.json";                       // when running via nginx (production)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch((err) => {
        console.error("Failed to load blog content:", err);
      });
  }, [url]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.content }} />
    </div>
  );
}

export default Blogpage;
