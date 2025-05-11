import ServiceList from "@/components/ServiceList";
import ServiceItem from "@/components/ServicesItem";

export default function Services() {
  const services: string[] = [
    "Web Development",
    "App Development",
    "Full Stack Development",
    "Cloud Engineer",
    "Frontend Engineer",
  ];
  return (
    <section className="mx-20 my-10">
      <h2 className="text-center text-4xl capitalize font-semibold">
        Our Services
      </h2>
      <ServiceList>
        {services.map((item: string, index: number) => (
          <ServiceItem key={index} serviceName={item} />
        ))}
      </ServiceList>
    </section>
  );
}
