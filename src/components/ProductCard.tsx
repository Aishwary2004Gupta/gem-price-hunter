
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles } from "lucide-react";

export interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  minPrice: number;
  maxPrice: number;
  numStores: number;
  savings: number;
  isGemCheaper: boolean;
}

const ProductCard = ({
  id,
  name,
  image,
  minPrice,
  maxPrice,
  numStores,
  savings,
  isGemCheaper,
}: ProductCardProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative pt-4 px-4">
        {isGemCheaper && (
          <Badge className="absolute top-2 right-2 bg-accent text-white flex items-center gap-1">
            <Sparkles size={12} /> GeM Best Price
          </Badge>
        )}
        <div className="h-48 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
      <CardContent className="flex-grow py-4">
        <h3 className="font-medium text-gray-800 line-clamp-2 h-12">{name}</h3>
        <div className="mt-2 text-sm text-gray-600">
          Available at {numStores} stores
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">₹{minPrice.toLocaleString()}</span>
          {maxPrice > minPrice && (
            <span className="text-sm text-gray-500">
              to ₹{maxPrice.toLocaleString()}
            </span>
          )}
        </div>
        {savings > 0 && (
          <div className="mt-1 text-sm text-accent">
            Save up to ₹{savings.toLocaleString()}
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-0">
        <div className="w-full grid gap-2">
          <Link to={`/product/${id}`} className="w-full">
            <Button variant="default" className="w-full">
              Compare Prices
            </Button>
          </Link>
          <Button variant="outline" className="w-full" size="sm" onClick={() => window.location.href = "https://gem.gov.in"}>
            <ExternalLink size={14} className="mr-1" /> View on GeM
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
