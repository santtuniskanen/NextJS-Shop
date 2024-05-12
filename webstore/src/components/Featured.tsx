import { Button } from "./ui/button"

export default function Featured() {
    return (
        <div className="w-full py-12 md:py-24 lg:py-32">
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
              <div className="flex flex-col justify-between space-y-4 border p-4 shadow-sm">
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
              <div className="flex flex-col justify-between space-y-4 border p-4 shadow-sm">
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
              <div className="flex flex-col justify-between space-y-4 border p-4 shadow-sm">
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
        </div>
    )
}