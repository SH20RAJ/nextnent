import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Heart, FolderPlus, Star, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function ComponentViewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">Modern Button Component</h1>
            <p className="text-xl text-gray-600">A versatile and customizable button for your next project</p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Button variant="outline" size="icon">
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <FolderPlus className="h-4 w-4" />
            </Button>
          </div>
        </header>

        {/* Image/Video Section */}
        <section className="mb-8">
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="Component Demo"
              layout="fill"
              objectFit="cover"
              className="bg-gray-200"
            />
            <Button className="absolute bottom-4 right-4" variant="secondary">
              Watch Demo
            </Button>
          </div>
        </section>

        {/* Component Details Section */}
        <section className="mb-8">
          <Card className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <h3 className="font-semibold text-gray-700">Price</h3>
              <p className="text-2xl font-bold text-gray-900">$19.99</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">License</h3>
              <p className="text-gray-900">MIT</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Creator</h3>
              <p className="text-gray-900">John Doe</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-700">Version</h3>
              <p className="text-gray-900">2.1.0</p>
            </div>
          </Card>
        </section>

        {/* Description and Features Section */}
        <section className="mb-8 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Description</h2>
            <div className="prose max-h-64 overflow-y-auto pr-4">
              <p>
                The Modern Button Component is a highly customizable and versatile button solution for your web
                projects. It offers a range of styles, sizes, and animations to fit seamlessly into any design system.
                Built with accessibility in mind, it ensures a great user experience for all visitors.
              </p>
              <p>
                Whether you're building a simple landing page or a complex web application, this button component
                provides the flexibility and performance you need. It's easy to integrate, well-documented, and
                regularly updated to keep up with the latest web standards.
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Key Features</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                <span>Fully customizable styles and animations</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                <span>Responsive design for all screen sizes</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                <span>Accessibility-first approach</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                <span>Easy integration with popular frameworks</span>
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-5 w-5 text-blue-500 mr-2" />
                <span>Comprehensive documentation and examples</span>
              </li>
            </ul>
          </div>
        </section>

        {/* User Interaction Section */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-900">User Reviews</h2>
            <Button>Write a Review</Button>
          </div>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="ml-2 text-gray-600">4.8 out of 5 stars</span>
          </div>
          {/* Add more review content here */}
        </section>

        {/* Related Components Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Related Components</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item) => (
              <Card key={item} className="overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=Component ${item}`}
                  alt={`Related Component ${item}`}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900">Related Component {item}</h3>
                  <p className="text-sm text-gray-600">Brief description</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}