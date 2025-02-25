import Booking from "@/components/booking";
import ContactInfo from "@/components/contact-info";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Hero />
      <Services />
      <div className="container mx-auto py-12 px-4 flex justify-center items-center min-h-[calc(100vh-64px)]">
        <ContactInfo />
      </div>{" "}
      <Booking />
    </main>
  );
}
