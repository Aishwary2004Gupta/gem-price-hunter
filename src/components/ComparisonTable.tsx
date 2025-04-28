
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, TrendingDown, CheckCircle2 } from "lucide-react";

interface PriceData {
  store: string;
  logo: string;
  price: number;
  shipping: number;
  inStock: boolean;
  isGem: boolean;
  isBestPrice: boolean;
  url: string;
}

interface ComparisonTableProps {
  productId: string;
  prices: PriceData[];
}

const ComparisonTable = ({ productId, prices }: ComparisonTableProps) => {
  // Sort prices by total price (price + shipping)
  const sortedPrices = [...prices].sort((a, b) => {
    return a.price + a.shipping - (b.price + b.shipping);
  });

  return (
    <div className="overflow-x-auto border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Store</TableHead>
            <TableHead>Base Price</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Availability</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedPrices.map((price, index) => (
            <TableRow key={price.store} className={price.isGem ? "bg-blue-50" : ""}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <img
                    src={price.logo}
                    alt={price.store}
                    className="w-6 h-6 object-contain"
                  />
                  <span>{price.store}</span>
                  {price.isGem && (
                    <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20">
                      GeM
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>₹{price.price.toLocaleString()}</TableCell>
              <TableCell>
                {price.shipping === 0 ? (
                  <span className="text-green-600 text-sm">Free</span>
                ) : (
                  `₹${price.shipping.toLocaleString()}`
                )}
              </TableCell>
              <TableCell className="font-medium">
                <div className="flex items-center gap-1">
                  ₹{(price.price + price.shipping).toLocaleString()}
                  {price.isBestPrice && (
                    <Badge className="ml-1 bg-accent text-white">
                      <TrendingDown size={12} className="mr-1" /> Best
                    </Badge>
                  )}
                </div>
              </TableCell>
              <TableCell>
                {price.inStock ? (
                  <span className="flex items-center text-green-600">
                    <CheckCircle2 size={16} className="mr-1" /> In Stock
                  </span>
                ) : (
                  <span className="text-red-500">Out of Stock</span>
                )}
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm" asChild>
                  <a href={price.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-1" /> Go to Store
                  </a>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ComparisonTable;
