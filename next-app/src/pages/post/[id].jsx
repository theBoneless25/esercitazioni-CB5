import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { GET } from "@/utils/api";
import styles from "@/styles/post.module.scss";
import Image from "next/image";

export default function () {
  const router = useRouter();
  let { id } = router.query;

  const [postData, setPostData] = useState({});

  useEffect(() => {
    if (router.isReady) GET(`posts/${id}`).then((data) => setPostData(data));
  }, [router.isReady]);

  return (
    <div className={styles.dPost}>
      <img
        src={
          "https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png"
        }
        alt={postData.title}
      />
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
}
