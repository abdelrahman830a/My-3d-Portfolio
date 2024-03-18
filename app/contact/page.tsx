import ContactForm from "@/components/ContactForm";

const Page = () => {
  return (
    <section className="overflow-hidden bg-gray-400/5 py-8 md:px-16">
      <div className="flex flex-col items-center justify-center md:mx-5 lg:mx-40">
        <div className="flex flex-col items-center justify-center gap-2 text-center text-slate-300">
          <h1 className="text-6xl font-bold leading-relaxed text-slate-300 md:leading-loose">
            Want to offer coffee?
          </h1>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Page;

export async function generateStaticParams() {
  return {
    route: "/contact",
  };
}
