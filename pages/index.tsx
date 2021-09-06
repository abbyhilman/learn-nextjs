import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout pageTitle="Home Page">
      <Image src="/user.png" width={125} height={125} alt="profile" />
      <h1 className={styles['title-homepage']}>Welcome Abby</h1>
    </Layout>
  );
}
