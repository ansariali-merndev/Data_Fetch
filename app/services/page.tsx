"use client";
import ServiceList from "@/components/ServiceList";

export default function Services() {
  const services: string[] = [
    "Web Development",
    "App Development",
    "Full Stack Develpent",
    "Cloud Enginner",
    "Fronted Enginner",
  ];
  return (
    <section className="mx-20 my-10">
      <h2 className="text-center text-4xl capitalize font-semibold">
        All Services Here
      </h2>
      <ul className="flex flex-col items-center mt-8">
        {services.map((item: string, index: number) => (
          <ServiceList key={index} service={item} />
        ))}
      </ul>
    </section>
  );
}
