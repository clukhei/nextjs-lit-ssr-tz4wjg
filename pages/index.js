import Head from 'next/head';
import styles from '../styles/Home.module.css';
import '../src/simple-greeter';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lit in Next.js</title>
        <link rel="icon" href="/flame-favicon.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://lit.dev">Lit</a> and{' '}
          <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          The component below is a web component #builtWithLit
        </p>
        <simple-greeter name="Friend"></simple-greeter>
        <p className={styles.description}>
          Check the sources in dev tools to see that the component was server
          rendered and sent to the client with declarative shadow DOM!
        </p>
        <p className={styles.description}>
          See the <code className={styles.code}>next.config.js</code> file for
          how to use the <code className={styles.code}>@lit-labs/nextjs</code>{' '}
          plugin.
        </p>
      </main>
    </div>
  );
}
