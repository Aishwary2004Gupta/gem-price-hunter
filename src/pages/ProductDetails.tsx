
import { useParams } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home, Share2, Heart, AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonTable from "@/components/ComparisonTable";
import PriceHistoryChart from "@/components/PriceHistoryChart";
import ProductCard from "@/components/ProductCard";
import { mockProducts, getMockPriceData, getMockPriceHistory } from "@/utils/mockData";

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Find the product with the matching id
  const product = mockProducts.find((p) => p.id === id);
  
  // Get price comparison data for this product
  const priceData = getMockPriceData(id || "1");
  
  // Get price history data
  const priceHistoryData = getMockPriceHistory(id || "1");
  
  // Get similar products (just excluding the current one)
  const similarProducts = mockProducts
    .filter((p) => p.id !== id && p.category === product?.category)
    .slice(0, 4);

  if (!product) {
    return (
      <div>
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-16 text-center">
          <AlertTriangle className="w-16 h-16 mx-auto text-amber-500 mb-4" />
          <h1 className="text-3xl font-bold mb-2">Product Not Found</h1>
          <p className="mb-6 text-gray-600">The product you're looking for doesn't seem to exist.</p>
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

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
              <BreadcrumbLink href={`/compare?category=${product.category}`}>{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>{product.name.split(' ').slice(0, 2).join(' ')}</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        
        {/* Product Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1 bg-white p-6 rounded-lg border flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-96 max-w-full object-contain"
            />
          </div>
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="text-xs border-primary/20 bg-primary/10">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Badge>
              {product.isGemCheaper && (
                <Badge className="bg-accent text-white">
                  Best Price on GeM
                </Badge>
              )}
            </div>
            <p className="text-gray-600 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h2 className="font-semibold text-xl mb-2">Price Comparison</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-primary">₹{product.minPrice.toLocaleString()}</span>
                {product.maxPrice > product.minPrice && (
                  <span className="text-lg text-gray-500">
                    to ₹{product.maxPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="text-green-600 font-medium mt-1">
                Save up to ₹{product.savings.toLocaleString()}
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="font-semibold text-lg mb-2">Available at {priceData.length} stores</h2>
              <div className="flex flex-wrap gap-3">
                {priceData.map((price) => (
                  <img 
                    key={price.store} 
                    src={price.logo} 
                    alt={price.store} 
                    className="h-8 object-contain"
                  />
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button size="lg" asChild>
                <a href="#comparison" className="scroll-smooth">
                  View Full Price Comparison
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <Heart size={18} className="mr-1" /> Save
              </Button>
              <Button variant="ghost" size="lg">
                <Share2 size={18} className="mr-1" /> Share
              </Button>
            </div>
          </div>
        </div>
        
        {/* Tabs for details */}
        <Tabs defaultValue="comparison" className="mb-12" id="comparison">
          <TabsList className="mb-6">
            <TabsTrigger value="comparison">Price Comparison</TabsTrigger>
            <TabsTrigger value="history">Price History</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
          </TabsList>
          
          <TabsContent value="comparison" className="pt-2">
            <h2 className="text-2xl font-bold mb-6">Compare Prices</h2>
            <ComparisonTable productId={id || "1"} prices={priceData} />
          </TabsContent>
          
          <TabsContent value="history" className="pt-2">
            <h2 className="text-2xl font-bold mb-6">Price History</h2>
            <div className="mb-4">
              <div className="flex justify-end space-x-2">
                <Button variant="outline" size="sm">1 Week</Button>
                <Button variant="outline" size="sm">1 Month</Button>
                <Button variant="default" size="sm">3 Months</Button>
                <Button variant="outline" size="sm">1 Year</Button>
              </div>
            </div>
            <PriceHistoryChart data={priceHistoryData} timeRange="1month" />
            <div className="mt-6 text-center text-gray-600 text-sm">
              Data for the last 30 days. Updated daily.
            </div>
          </TabsContent>
          
          <TabsContent value="specs" className="pt-2">
            <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.specifications && Object.entries(product.specifications).map(([key, value], index) => (
                    <div key={index} className="py-2 border-b">
                      <div className="text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                      <div className="font-medium">{value}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Similar Products */}
        {similarProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {similarProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetails;
