import styles from '../styles/Home.module.css'

interface dataProps {
  data:any;
};

const Home = (props:dataProps) => {
  console.log(props)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Hello world {props?.data?.title}
        </h1>
      </main>
    </div>
  )
}
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}

export default Home;
