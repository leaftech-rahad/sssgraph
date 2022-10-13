import styles from "../styles/Home.module.css";
import Link from "next/link";
const ManDisha = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h2>Yes we miss you too...bandhobi</h2>
          <Link href="/disha">
            <button>
              <a>Go back</a>
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ManDisha;
