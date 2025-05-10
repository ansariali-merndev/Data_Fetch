export default async function Parallel() {
  const [res1, res2, res3] = await Promise.all([
    fetch("https://procodrr.vercel.app/?sleep=5000"),
    fetch("https://procodrr.vercel.app/?sleep=5000"),
    fetch("https://procodrr.vercel.app/?sleep=5000"),
  ]);

  const [data1, data2, data3] = await Promise.all([
    res1.json(),
    res2.json(),
    res3.json(),
  ]);
  return (
    <section className="mx-20 my-10 h-[70vh] grid justify-center items-center bg-red-600">
      <h2>Parallel Response</h2>
      <div>
        <p>{JSON.stringify(data1)}</p>
        <p>{JSON.stringify(data1)}</p>
        <p>{JSON.stringify(data1)}</p>
      </div>
    </section>
  );
}
