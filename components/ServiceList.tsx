export default function ({ service }: { service: string }) {
  if (typeof window === "undefined") {
    console.log("Service list Render from Server Components");
  } else {
    console.log("Service list Render from Client Components");
  }
  return <li className="bg-gray-400 my-2 w-80 text-center py-1">{service}</li>;
}
