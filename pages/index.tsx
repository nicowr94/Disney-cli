import Categories from "../components/molecules/categories/categories";
import Navigation from "../components/molecules/navigation/navigation";
import Slider from "../components/molecules/slider/slider";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.main}>
        <Slider />
        <Categories/>
      </div>
    </div>
  );
}
