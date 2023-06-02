import Image from "next/image";
import styles from "./page.module.css";
import { DataEntry } from "@/components/DataEntry";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <DataEntry />
      </div>
    </main>
  );
}
