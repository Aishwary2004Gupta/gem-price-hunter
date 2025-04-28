
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Home, Filter, SortDesc } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import ProductCard from "@/components/ProductCard";
import { mockProducts } from "@/utils/mockData";

const CompareResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category");
  
  const [sortBy, setSortBy] = useState("relevance");
  const [filterGem, setFilterGem] = useState(false);
  const [filterAmazon, setFilterAmazon] = useState(false);
  const [filterFlipkart, setFilterFlipkart] = useState(false);
  
  // Filter products based on search query and category
  let filteredProducts = [...mockProducts];
  
  if (query) {
    filteredProducts = filteredProducts.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase())
    );
  }
  
  if (category) {
    filteredProducts = filteredProducts.filter(product =>
      product.category === category
    );
  }
  
  // Apply filters
  if (filterGem) {
    filteredProducts = filteredProducts.filter(product => product.isGemCheaper);
  }
  
  // Apply sorting
  if (sortBy === "priceLow") {
    filteredProducts.sort((a, b) => a.minPrice - b.minPrice);
  } else if (sortBy === "priceHigh") {
    filteredProducts.sort((a, b) => b.minPrice - a.minPrice);
  } else if (sortBy === "savings") {
    filteredProducts.sort((a, b) => b.savings - a.savings);
  }

  const title = category
    ? `${category.charAt(0).toUpperCase() + category.slice(1)} Products`
    : query
    ? `Search Results for "${query}"`
    : "All Products";

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <Home size={16} className="mr-1" /> Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>
                Compare
              </BreadcrumbLink>
            </BreadcrumbItem>
            {(query || category) && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    {category ? category.charAt(0).toUpperCase() + category.slice(1) : query}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Search & Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <SearchBar />
        </div>
        
        {/* Filters & Results */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-3 flex items-center">
                    <Filter size={18} className="mr-2" /> Filters
                  </h3>
                  <Separator className="mb-4" />
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Marketplaces</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="gem" 
                            checked={filterGem}
                            onCheckedChange={(checked) => setFilterGem(!!checked)}
                          />
                          <label
                            htmlFor="gem"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            GeM Best Price
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="amazon" 
                            checked={filterAmazon}
                            onCheckedChange={(checked) => setFilterAmazon(!!checked)}
                          />
                          <label
                            htmlFor="amazon"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Amazon
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox 
                            id="flipkart"
                            checked={filterFlipkart}
                            onCheckedChange={(checked) => setFilterFlipkart(!!checked)}
                          />
                          <label
                            htmlFor="flipkart"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Flipkart
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Price Range</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <input
                            type="number"
                            placeholder="Min"
                            className="w-full p-2 text-sm border rounded"
                          />
                        </div>
                        <div>
                          <input
                            type="number"
                            placeholder="Max"
                            className="w-full p-2 text-sm border rounded"
                          />
                        </div>
                      </div>
                      <Button className="w-full mt-2" size="sm">Apply</Button>
                    </div>
                    
                    <div>
                      <h4 className="font-medium mb-2">Categories</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="electronics" />
                          <label
                            htmlFor="electronics"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Electronics
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="office" />
                          <label
                            htmlFor="office"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Office Supplies
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="furniture" />
                          <label
                            htmlFor="furniture"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Furniture
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="it" />
                          <label
                            htmlFor="it"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            IT Equipment
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Results */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-600">
                  Showing {filteredProducts.length} results
                </p>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-sm">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="priceLow">Price: Low to High</SelectItem>
                    <SelectItem value="priceHigh">Price: High to Low</SelectItem>
                    <SelectItem value="savings">Highest Savings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <h3 className="text-2xl font-bold mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
            
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>
                  Previous
                </Button>
                <Button variant="outline">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default CompareResults;
