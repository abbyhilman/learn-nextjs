import Layout from '../components/layout';
import styles from '../styles/Blog.module.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBolg: Post[];
}
export default function Blog(props: BlogProps) {
  const { dataBolg } = props;
  return (
    <Layout pageTitle="Blog Page">
      {dataBolg.map((blog) => (
        <div key={blog.id} className={styles.card}>
          <h3>{blog.title}</h3>
          <p>{blog.body}</p>
        </div>
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBolg = await res.json();
  return {
    props: {
      dataBolg,
    },
  };
}
