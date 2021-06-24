import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout";
import HomePage from "../containers/Home";

export default function Home() {
  return (
    <Layout title="Welcome to basic boilerplate of Nextjs" description="Welcome to basic boilerplate of Nextjs">
      <HomePage />
    </Layout>
  );
}
