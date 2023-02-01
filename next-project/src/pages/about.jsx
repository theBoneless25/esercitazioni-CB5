import styles from "@/styles/Home.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>Grazie per aver visitato</h2>
      <h1>IL MIO PRIMO PROGETTO SU</h1>
      <img
        className={styles.imageAbout}
        src="https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS.jpg"
        alt="nextlogo"
      />
    </div>
  );
};

export default About;
