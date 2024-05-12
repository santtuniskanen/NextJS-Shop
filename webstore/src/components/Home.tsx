import Featured from "./Featured";
import Hero from "./Hero";

function HomePage() {
  return (
    <main className="flex-1">
      <Hero />
      <Featured />
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
            <img
              alt="About Us"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="https://img.freepik.com/free-vector/ecommerce-web-page-concept-illustration_114360-8204.jpg?t=st=1715459575~exp=1715463175~hmac=33aa5d8618f6adb01946ad29e3cf7730d267059c98d5eda6250fd57a4bc4c7a3&w=1380"
              width="550"
            />
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                About Imaginarium
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Imaginarium is the leading online retailer dedicated to
                providing high-quality, sustainable products that enhance your
                everyday life. Our mission is to empower our customers to live
                more mindfully and stylishly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
