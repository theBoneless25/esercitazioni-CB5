import PostCard from "../postCard";
import styles from "./index.module.scss";

const CardList = ({ postList }) => {
  return (
    <div className={styles.CardList}>
      {postList.map((post) => (
        <div key={post.id}>
          <PostCard data={post} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CardList;
