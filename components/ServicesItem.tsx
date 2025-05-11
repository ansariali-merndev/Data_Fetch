export default function ServiceItem({ serviceName }: { serviceName: string }) {
  if (typeof window === "undefined") {
    console.log("Server Side Render");
  } else {
    console.log("Client Side Render");
  }
  return (
    <>
      <li>{serviceName}</li>
    </>
  );
}
