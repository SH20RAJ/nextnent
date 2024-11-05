'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Star, Download, Heart, DollarSign } from 'lucide-react';

const components = [
  {
    id: 1,
    title: "Advanced Data Table",
    description: "Fully featured data table with sorting, filtering, and pagination.",
    image: "/placeholder.svg?height=100&width=200",
    price: 49,
    rating: 4.5,
    downloads: 1200,
    category: "Tables",
    tags: ["data", "sortable", "filterable"],
  },
  {
    id: 2,
    title: "Multi-step Form",
    description: "Customizable multi-step form with validation and progress tracking.",
    image: "/placeholder.svg?height=100&width=200",
    price: 0,
    rating: 4.8,
    downloads: 2500,
    category: "Forms",
    tags: ["form", "validation", "wizard"],
  },
  {
    id: 3,
    title: "Interactive Charts",
    description: "A collection of responsive and interactive chart components.",
    image: "/placeholder.svg?height=100&width=200",
    price: 79,
    rating: 4.7,
    downloads: 1800,
    category: "Data Visualization",
    tags: ["charts", "graphs", "analytics"],
  },
  // Add more components here...
]

const categories = ["All", "Forms", "Tables", "Navigation", "Data Visualization", "Dashboards"]

const topContributors = [
  { name: "Alice", image: "/placeholder.svg?height=32&width=32" },
  { name: "Bob", image: "/placeholder.svg?height=32&width=32" },
  { name: "Charlie", image: "/placeholder.svg?height=32&width=32" },
  { name: "Diana", image: "/placeholder.svg?height=32&width=32" },
]

export function ExplorePageComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortOption, setSortOption] = useState("trending")
  const [priceFilter, setPriceFilter] = useState("all")

  const filteredComponents = components.filter(component => 
    (selectedCategory === "All" || component.category === selectedCategory) &&
    (priceFilter === "all" || (priceFilter === "free" && component.price === 0) || (priceFilter === "paid" && component.price > 0)) &&
    (component.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     component.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     component.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))))

  return (
    (<div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">NextNent</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link
              href="/explore"
              className="text-sm font-medium hover:underline underline-offset-4">
              Explore
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium hover:underline underline-offset-4">
              Docs
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <Button>Sign In</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-muted py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8">Explore Components</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  type="search"
                  placeholder="Search components..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full" />
              </div>
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="free">Free</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="downloads">Most Downloaded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Tabs defaultValue={categories[0]} className="w-full">
              <TabsList className="mb-8">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setSelectedCategory(category)}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredComponents.map((component) => (
                      <Card key={component.id}>
                        <CardHeader>
                          <img
                            src={component.image}
                            alt={component.title}
                            className="w-full h-40 object-cover rounded-md mb-4" />
                          <CardTitle>{component.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-2">{component.description}</p>
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 mr-1" />
                              <span className="text-sm">{component.rating}</span>
                            </div>
                            <div className="flex items-center">
                              <Download className="w-4 h-4 mr-1" />
                              <span className="text-sm">{component.downloads}</span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {component.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center">
                          <span className="font-bold">
                            {component.price === 0 ? "Free" : `$${component.price}`}
                          </span>
                          <div className="flex space-x-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="outline">Preview</Button>
                              </DialogTrigger>
                              <DialogContent>
                                <div className="w-full h-96 bg-muted flex items-center justify-center">
                                  <p>Live preview of {component.title} goes here</p>
                                </div>
                              </DialogContent>
                            </Dialog>
                            <Button>
                              <Heart className="w-4 h-4 mr-2" />
                              Favorite
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Top Contributors</h2>
            <div className="flex space-x-4 mb-8">
              {topContributors.map((contributor) => (
                <Link href="#" key={contributor.name} className="flex flex-col items-center">
                  <Avatar>
                    <AvatarImage src={contributor.image} alt={contributor.name} />
                    <AvatarFallback>{contributor.name[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm mt-2">{contributor.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Sell Your Component on NextNent</h2>
            <p className="mb-6">Join our community of developers and earn from your creations.</p>
            <Button size="lg">
              Start Selling
              <DollarSign className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6">
        <div
          className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2024 NextNent. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>)
  );
}