export default async function Sequencial() {
  const slowRes1 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data1 = await slowRes1.json();

  const slowRes2 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data2 = await slowRes2.json();

  const slowRes3 = await fetch("https://procodrr.vercel.app/?sleep=3000");
  const data3 = await slowRes3.json();
  return (
    <section className="mx-20 my-10 h-[70vh] grid justify-center items-center bg-red-600">
      <h2>Sequencial Response</h2>
      <div>
        <p>{JSON.stringify(data1)}</p>
        <p>{JSON.stringify(data1)}</p>
        <p>{JSON.stringify(data1)}</p>
      </div>
    </section>
  );
}
