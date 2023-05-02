/* 
Using the Fetch API natively inside the component provides us with the ability to cache and revalidate the requests as per our requirement. Therefore, the previous utils like getStaticProps and getServerSideProps can be implemented via a single API, as seen below:
*/

async function getData() {
  const index = Math.floor(Math.random() * 200);
  let URL = `https://jsonplaceholder.typicode.com/todos/${index}`;

  // Generates statically like getStaticProps.
  //   const res = await fetch(URL, { cache: "force-cache" });

  // Generates server-side upon every request like getServerSideProps.
  // fetch(URL, { cache: 'no-store' });

  // Generates statically but revalidates every 20 seconds
  const res = await fetch(URL, { next: { revalidate: 20 } });

  //   const res = await fetch(
  //     `https://jsonplaceholder.typicode.com/todos/${index}`
  //   );

  return res.json();
}

// We’ll call this function directly inside of our React component by making it async:
export default async function Page() {
  const data = await getData();
  return <p>{JSON.stringify(data)}</p>;
}
