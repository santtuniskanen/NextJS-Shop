import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full py-12 md:py-24 lg:py-32">
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
              Discover a curated collection of high-quality, stylish products
              that will transform your everyday life.
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
    </div>
  );
}
