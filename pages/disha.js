import styles from "../styles/Home.module.css";
import Link from "next/link";
const Disha = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h2>Once a famous Manus said: i kittam...</h2>
          <Link href="/mamDisha">
            <button>
              <a>click me</a>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Disha;
