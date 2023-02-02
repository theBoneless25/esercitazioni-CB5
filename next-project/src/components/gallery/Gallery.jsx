import Image from "next/image";
import styles from "./index.module.scss";

const Gallery = () => {
  return (
    <div className={styles.Hero}>
      <h1>Ecco il mio primo progetto in Next.js</h1>
      <div className={styles.containerImage}>
        <Image
          src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png"
          alt="hero image"
          width={200}
          height={200}
          priority
        />
        <Image
          src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png"
          width={200}
          height={200}
          priority
        />
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/180px-Unofficial_JavaScript_logo_2.svg.png"
          alt="hero image"
          width={200}
          height={200}
          priority
        />
      </div>
    </div>
  );
};

export default Gallery;
