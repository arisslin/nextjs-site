import styles from './page.module.css';

export default function Home() {
  return (
    <main>
      <h1 className={styles.siteTitle}>Site Title</h1>
      <nav className={styles.navList}>
        <li>test</li>
      </nav>
    </main>
  );
}
