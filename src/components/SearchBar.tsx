
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  className?: string;
  variant?: "default" | "hero";
}

const SearchBar = ({ className = "", variant = "default" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/compare?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex w-full max-w-2xl ${
        variant === "hero" ? "flex-col sm:flex-row gap-2" : "flex-row"
      } ${className}`}
    >
      <div className="relative flex-grow">
        <Input
          type="search"
          placeholder="Search for products, brands, or categories..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`pr-10 ${
            variant === "hero"
              ? "h-14 text-lg border-2 focus:border-primary"
              : ""
          }`}
        />
        <Search
          size={variant === "hero" ? 20 : 16}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </div>
      <Button
        type="submit"
        className={variant === "hero" ? "h-14 px-8" : ""}
        disabled={!query.trim()}
      >
        Compare Prices
      </Button>
    </form>
  );
};

export default SearchBar;
