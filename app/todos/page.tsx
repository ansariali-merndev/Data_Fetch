type todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function Todos() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    {
      next: {
        revalidate: 5000,
      },
    }
  );
  const todos: todo[] = await response.json();
  return (
    <section className="mx-20 my-10 grid items-center justify-center">
      <h2 className="text-center capitalize text-4xl font-semibold text-gray-400">
        Todos page
      </h2>
      <ul className="grid justify-center gap-4">
        {todos.map((item: todo, index: number) => (
          <li className="flex gap-4" key={index}>
            <input type="checkbox" checked={item.completed} readOnly />
            <h2>{item.title}</h2>
          </li>
        ))}
      </ul>
    </section>
  );
}
