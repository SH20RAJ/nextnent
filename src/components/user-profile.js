import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, MessageSquare, Package, Collection, Heart, Star, Download, Clock } from "lucide-react"

export default function UserProfilePage() {
  const [activeTab, setActiveTab] = useState("components")

  const user = {
    name: "Jane Doe",
    username: "@janedoe",
    avatar: "/placeholder.svg?height=128&width=128",
    bio: "UI/UX Designer & Developer | Creating beautiful and functional components",
    joinDate: "January 2020",
    stats: {
      components: 42,
      downloads: 1337,
      reviews: 56,
      favorites: 89,
    },
  }

  const components = [
    { id: 1, name: "Modern Button", description: "A versatile and customizable button component", image: "/placeholder.svg?height=100&width=100&text=Button" },
    { id: 2, name: "Responsive Card", description: "Flexible card component for various content types", image: "/placeholder.svg?height=100&width=100&text=Card" },
    { id: 3, name: "Dynamic Form", description: "Customizable form with built-in validation", image: "/placeholder.svg?height=100&width=100&text=Form" },
  ]

  const collections = [
    { id: 1, name: "UI Essentials", image: "/placeholder.svg?height=100&width=100&text=UI" },
    { id: 2, name: "Dashboard Components", image: "/placeholder.svg?height=100&width=100&text=Dashboard" },
  ]

  const favorites = [
    { id: 1, name: "Animated Loader", creator: "John Smith", image: "/placeholder.svg?height=100&width=100&text=Loader" },
    { id: 2, name: "Color Picker", creator: "Emma Wilson", image: "/placeholder.svg?height=100&width=100&text=Color" },
  ]

  const reviews = [
    { id: 1, componentName: "Sleek Navbar", rating: 5, text: "Excellent component, very easy to customize!" },
    { id: 2, componentName: "Modal Dialog", rating: 4, text: "Great functionality, but could use more styling options." },
  ]

  const activities = [
    { id: 1, action: "Downloaded", target: "Responsive Grid System" },
    { id: 2, action: "Added to Favorites", target: "Animated Progress Bar" },
    { id: 3, action: "Reviewed", target: "Custom Select Dropdown" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="mb-8 flex flex-col md:flex-row items-center md:items-start">
          <Avatar className="w-32 h-32 mb-4 md:mb-0 md:mr-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex-grow text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-xl text-gray-600 mb-2">{user.username}</p>
            <p className="text-gray-700 mb-2">{user.bio}</p>
            <p className="text-sm text-gray-500">Active since {user.joinDate}</p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Button variant="outline">
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
            <Button>
              <MessageSquare className="mr-2 h-4 w-4" /> Message
            </Button>
          </div>
        </header>

        {/* Stats Section */}
        <section className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <Package className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <p className="text-2xl font-bold text-gray-900">{user.stats.components}</p>
                  <p className="text-gray-600">Components</p>
                </div>
                <div>
                  <Download className="h-8 w-8 mx-auto mb-2 text-green-500" />
                  <p className="text-2xl font-bold text-gray-900">{user.stats.downloads}</p>
                  <p className="text-gray-600">Downloads</p>
                </div>
                <div>
                  <Star className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <p className="text-2xl font-bold text-gray-900">{user.stats.reviews}</p>
                  <p className="text-gray-600">Reviews</p>
                </div>
                <div>
                  <Heart className="h-8 w-8 mx-auto mb-2 text-red-500" />
                  <p className="text-2xl font-bold text-gray-900">{user.stats.favorites}</p>
                  <p className="text-gray-600">Favorites</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Tabs and Content Display Section */}
        <Tabs defaultValue="components" className="mb-8">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="components">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component) => (
                <Card key={component.id}>
                  <CardContent className="p-4">
                    <img src={component.image} alt={component.name} className="w-full h-32 object-cover mb-4 rounded" />
                    <h3 className="text-lg font-semibold mb-2">{component.name}</h3>
                    <p className="text-gray-600">{component.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="collections">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collections.map((collection) => (
                <Card key={collection.id}>
                  <CardContent className="p-4">
                    <img src={collection.image} alt={collection.name} className="w-full h-32 object-cover mb-4 rounded" />
                    <h3 className="text-lg font-semibold">{collection.name}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="favorites">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favorites.map((favorite) => (
                <Card key={favorite.id}>
                  <CardContent className="p-4">
                    <img src={favorite.image} alt={favorite.name} className="w-full h-32 object-cover mb-4 rounded" />
                    <h3 className="text-lg font-semibold mb-1">{favorite.name}</h3>
                    <p className="text-gray-600">by {favorite.creator}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="reviews">
            <div className="space-y-6">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{review.componentName}</h3>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Activity Feed Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Recent Activity</h2>
          <Card>
            <CardContent className="p-4">
              {activities.map((activity) => (
                <div key={activity.id} className="flex items-center mb-4 last:mb-0">
                  <Clock className="h-5 w-5 mr-3 text-blue-500" />
                  <p className="text-gray-700">
                    <span className="font-semibold">{activity.action}</span> {activity.target}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <nav className="space-x-4">
            <a href="#" className="hover:text-gray-700">Settings</a>
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Help</a>
          </nav>
        </footer>
      </main>
    </div>
  )
}