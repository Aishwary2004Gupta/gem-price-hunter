
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, ArrowDownCircle, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockProducts, featuredCategories, statsData, testimonials } from "@/utils/mockData";

const Index = () => {
  const [activeTab, setActiveTab] = useState("trending");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-pattern py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge
            variant="outline"
            className="mb-4 px-3 py-1 border-primary/20 bg-primary/10"
          >
            The #1 Price Comparison for GeM Products
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Save Money on Government e-Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Compare prices across GeM, Amazon, Flipkart, and more to find the
            best deals on products for your office or home
          </p>
          <SearchBar variant="hero" className="mx-auto" />
          <div className="mt-6 text-sm text-gray-500">
            Popular: Laptops, Office Chairs, Printers, Smartphones
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">{statsData.totalProducts}</p>
              <p className="mt-2 text-gray-600">Products Tracked</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{statsData.pricesCompared}</p>
              <p className="mt-2 text-gray-600">Prices Compared</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{statsData.averageSavings}</p>
              <p className="mt-2 text-gray-600">Average Savings</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{statsData.happyUsers}</p>
              <p className="mt-2 text-gray-600">Happy Users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">
                Featured Products
              </h2>
              <p className="mt-2 text-gray-600">
                Compare prices across multiple stores
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex space-x-2">
              <Button
                variant={activeTab === "trending" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("trending")}
              >
                Trending
              </Button>
              <Button
                variant={activeTab === "bestdeals" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("bestdeals")}
              >
                Best Deals
              </Button>
              <Button
                variant={activeTab === "newest" ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveTab("newest")}
              >
                Newest
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button size="lg" asChild>
              <Link to="/compare">
                Browse All Products <ArrowRight size={16} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            Browse by Category
          </h2>
          <p className="mt-2 text-gray-600 text-center mb-10">
            Find the best prices across different product categories
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <Link key={category.id} to={`/compare?category=${category.id}`}>
                <Card className="overflow-hidden hover:shadow-md transition-shadow h-full">
                  <div className="h-40 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <CardTitle>{category.name}</CardTitle>
                    <CardDescription>{category.count} products</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            How It Works
          </h2>
          <p className="mt-2 text-gray-600 text-center mb-12">
            Simple steps to find the best prices across marketplaces
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowDownCircle className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Search Products</h3>
              <p className="text-gray-600">
                Enter the product name or browse categories to find what you're looking for
              </p>
            </div>
            <div className="text-center">
              <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="text-secondary h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compare Prices</h3>
              <p className="text-gray-600">
                See real-time prices from GeM, Amazon, Flipkart and more in one place
              </p>
            </div>
            <div className="text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Save Money</h3>
              <p className="text-gray-600">
                Choose the best option and save money on your purchases
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">
            What Our Users Say
          </h2>
          <p className="mt-2 text-gray-600 text-center mb-12">
            Join thousands of satisfied users saving money every day
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="h-full">
                <CardContent className="pt-6">
                  <p className="text-gray-600 mb-6">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">
            Start Saving Today
          </h2>
          <p className="mt-4 text-lg opacity-90 mb-8">
            Join thousands of users who are already saving money by comparing GeM prices with other marketplaces
          </p>
          <SearchBar 
            className="mx-auto bg-white rounded-md p-1" 
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
