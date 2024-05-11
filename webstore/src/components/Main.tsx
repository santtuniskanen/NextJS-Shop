import { Button } from "./ui/button";
import Link from "next/link";

function Main() {
    return (
        <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
              alt="Hero Product"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              height="550"
              src="https://img.freepik.com/free-vector/landscape-man-canoe-river_24877-76260.jpg?w=1380&t=st=1715459474~exp=1715460074~hmac=c367ad03b0b8636f2ea5be0c7257a2945a8f91f96306ec982d506cc9b3ce03d4"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Elevate Your Style with Our Premium Products
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover a curated collection of high-quality, stylish products that will transform your everyday
                  life.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-red-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-600 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Products</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Discover our curated selection of the best products for your lifestyle.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-4 shadow-sm">
                <img
                  alt="Product 1"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover"
                  height="300"
                  src="https://img.freepik.com/free-photo/digital-art-portrait-person-listening-music-headphones_23-2151065158.jpg?t=st=1715461377~exp=1715464977~hmac=b17c51a91f07170d44d03208bf891b34ff8d318d639cddb73ca1505194dd230b&w=826"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Premium Headphones</h3>
                  <p className="text-gray-500 dark:text-gray-400">$99.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-4 shadow-sm">
                <img
                  alt="Product 2"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover"
                  height="300"
                  src="https://img.freepik.com/free-vector/ergonomic-workplace-isometric-template_1284-54831.jpg?w=1380&t=st=1715461409~exp=1715462009~hmac=657ecb2ca56a949cf5fb8fa9f4ea3392c79ae520bb3ec9a486b8a8e292775b2f"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Ergonomic Desk Chair</h3>
                  <p className="text-gray-500 dark:text-gray-400">$199.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-4 shadow-sm">
                <img
                  alt="Product 3"
                  className="mx-auto aspect-square overflow-hidden rounded-lg object-cover"
                  height="300"
                  src="https://img.freepik.com/free-vector/protein-shake-illustration_23-2149999487.jpg?w=1380&t=st=1715461521~exp=1715462121~hmac=005645ce938c2d890d47e921ea08c474b72c6692610d91245420d070ead21098"
                  width="300"
                />
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Sustainable Water Bottle</h3>
                  <p className="text-gray-500 dark:text-gray-400">$24.99</p>
                  <Button className="w-full">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Imaginarium</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Imaginarium is the leading online retailer dedicated to providing high-quality, sustainable products
                  that enhance your everyday life. Our mission is to empower our customers to live more mindfully and
                  stylishly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}

export default Main;