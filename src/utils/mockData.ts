
import { format, subDays } from "date-fns";

// Mock product data
export const mockProducts = [
  {
    id: "1",
    name: "HP 15s Laptop - 11th Gen Intel Core i5, 8GB RAM, 512GB SSD",
    image: "https://m.media-amazon.com/images/I/71RLzW6ETTL._SL1500_.jpg",
    minPrice: 44999,
    maxPrice: 52999,
    numStores: 4,
    savings: 8000,
    isGemCheaper: true,
    category: "electronics",
    description: "HP 15s-du3519TU Core i5 11th Gen 15.6-inch(39.6 cm) FHD Laptop (8GB RAM/512GB SSD/Windows 10/MS Office/Natural Silver/1.75 kg), 15s-du3519TU",
    specifications: {
      processor: "11th Gen Intel Core i5-1135G7",
      ram: "8GB DDR4",
      storage: "512GB SSD",
      display: "15.6-inch FHD (1920 x 1080)",
      operatingSystem: "Windows 10",
      warranty: "1 Year",
      weight: "1.75 kg"
    }
  },
  {
    id: "2",
    name: "Samsung Galaxy Tab S7 FE - 12.4 inch Display, 6GB RAM, 128GB Storage",
    image: "https://m.media-amazon.com/images/I/816QzRyPqHL._SL1500_.jpg",
    minPrice: 39990,
    maxPrice: 44990,
    numStores: 3,
    savings: 5000,
    isGemCheaper: true,
    category: "electronics",
    description: "Samsung Galaxy Tab S7 FE 31.5 cm (12.4 inch) Large Display, Slim Metal Body, Dolby Atmos Sound, S-Pen in Box, RAM 6 GB, ROM 128 GB Expandable, Wi-Fi Tablet, Mystic Black",
    specifications: {
      processor: "Qualcomm Snapdragon 750G",
      ram: "6GB",
      storage: "128GB",
      display: "12.4-inch (31.5cm) TFT LCD",
      operatingSystem: "Android 11",
      battery: "10,090mAh",
      weight: "608g"
    }
  },
  {
    id: "3",
    name: "Godrej Interio Motion Executive Chair - High Back, Black",
    image: "https://m.media-amazon.com/images/I/71H6DF6u9JL._SL1500_.jpg",
    minPrice: 11490,
    maxPrice: 14990,
    numStores: 3,
    savings: 3500,
    isGemCheaper: false,
    category: "furniture",
    description: "Godrej Interio Motion High Back Executive Chair for Office with Adjustable Arms (Black)",
    specifications: {
      material: "Metal frame with mesh back and fabric seat",
      color: "Black",
      dimensions: "76.5D x 76.5W x 115-125H cm",
      weight: "18 kg",
      maxWeight: "100 kg",
      features: "Adjustable armrest, Lumbar support, Synchronized tilting"
    }
  },
  {
    id: "4",
    name: "Canon PIXMA G3060 All-in-One Ink Tank Colour Printer",
    image: "https://m.media-amazon.com/images/I/61+hKR9LbJL._SL1500_.jpg",
    minPrice: 14999,
    maxPrice: 18999,
    numStores: 4,
    savings: 4000,
    isGemCheaper: true,
    category: "office",
    description: "Canon PIXMA G3060 All-in-One Wi-Fi Ink Tank Colour Printer with Borderless Printing, Auto Duplex Printing, Mobile and Cloud Print (Black)",
    specifications: {
      printerType: "Ink Tank",
      functionality: "All-in-One (Print, Scan, Copy)",
      connectivity: "USB, Wi-Fi, Mobile and Cloud Print",
      printSpeed: "Up to 9.1 ipm (Black), Up to 5.0 ipm (Color)",
      printResolution: "Up to 4800 x 1200 dpi",
      pageYield: "Black: 8000 pages | Color: 6000 pages",
      warranty: "1 Year"
    }
  },
  {
    id: "5",
    name: "OnePlus Nord CE 3 Lite 5G - 8GB RAM, 128GB Storage",
    image: "https://m.media-amazon.com/images/I/71AvQd3VzqL._SL1500_.jpg",
    minPrice: 19999,
    maxPrice: 21999,
    numStores: 3,
    savings: 2000,
    isGemCheaper: false,
    category: "electronics",
    description: "OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 128GB Storage)",
    specifications: {
      processor: "Qualcomm Snapdragon 695 5G",
      ram: "8GB",
      storage: "128GB",
      display: "6.72 inches, 120Hz FHD+",
      camera: "108MP Main + 2MP Depth + 2MP Macro, 16MP Front",
      battery: "5000 mAh with 67W SUPERVOOC",
      operatingSystem: "OxygenOS based on Android 13"
    }
  },
  {
    id: "6",
    name: "Adidas Mens Running Shoes - Strutter Footwear, Black/White",
    image: "https://m.media-amazon.com/images/I/71UnNkW+B3L._UL1500_.jpg",
    minPrice: 2999,
    maxPrice: 4999,
    numStores: 4,
    savings: 2000,
    isGemCheaper: true,
    category: "apparel",
    description: "Adidas Men's Strutter Shoes Black Running Shoes-8 UK (EG2655)",
    specifications: {
      material: "Synthetic",
      outerMaterial: "Synthetic",
      soleMaterial: "Rubber",
      closure: "Lace-Up",
      style: "Running",
      color: "Core Black/Cloud White",
      sizes: "UK 6-12"
    }
  },
  {
    id: "7",
    name: "Lenovo IdeaPad Slim 3 - AMD Ryzen 5, 16GB RAM, 512GB SSD",
    image: "https://m.media-amazon.com/images/I/31z9j8YFY9L.jpg",
    minPrice: 49990,
    maxPrice: 54990,
    numStores: 3,
    savings: 5000,
    isGemCheaper: true,
    category: "electronics",
    description: "Lenovo IdeaPad Slim 3 AMD Ryzen 5 5500U 15.6\" FHD Thin & Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit KB/Arctic Grey/1.65Kg)",
    specifications: {
      processor: "AMD Ryzen 5 5500U",
      ram: "16GB DDR4 3200MHz",
      storage: "512GB SSD",
      display: "15.6\" FHD (1920x1080)",
      graphics: "Integrated AMD Radeon Graphics",
      operatingSystem: "Windows 11 Home",
      battery: "Up to 7 hours"
    }
  },
  {
    id: "8",
    name: "Bosch Professional GSB 13 RE Impact Drill Kit with 100 Accessories",
    image: "https://m.media-amazon.com/images/I/51Mv6L8Y9mL._SL1170_.jpg",
    minPrice: 5999,
    maxPrice: 8499,
    numStores: 4,
    savings: 2500,
    isGemCheaper: false,
    category: "tools",
    description: "Bosch Professional GSB 13 RE 600-Watt Impact Drill Kit with 100 Accessories (Blue)",
    specifications: {
      power: "600 Watts",
      noLoadSpeed: "0 - 2800 rpm",
      chuckCapacity: "1.5 - 13 mm",
      weight: "1.8 kg",
      includes: "100 Accessories, Carrying Case",
      drillingCapacity: "Wood: 25mm, Steel: 10mm, Concrete: 13mm",
      warranty: "1 Year"
    }
  },
];

// Mock price data for product details
export const getMockPriceData = (productId: string) => {
  const productIndex = parseInt(productId) - 1;
  const baseProduct = mockProducts[productIndex];
  
  if (!baseProduct) {
    return [];
  }

  const gemPrice = baseProduct.isGemCheaper ? baseProduct.minPrice : baseProduct.minPrice + Math.floor(Math.random() * 1000) + 500;
  
  return [
    {
      store: "GeM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Government_e_Marketplace_Logo.png",
      price: gemPrice,
      shipping: 0,
      inStock: true,
      isGem: true,
      isBestPrice: baseProduct.isGemCheaper,
      url: "#"
    },
    {
      store: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      price: baseProduct.isGemCheaper ? baseProduct.minPrice + Math.floor(Math.random() * 1500) + 500 : baseProduct.minPrice,
      shipping: 40,
      inStock: true,
      isGem: false,
      isBestPrice: !baseProduct.isGemCheaper,
      url: "#"
    },
    {
      store: "Flipkart",
      logo: "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/flipkart-095e08.svg",
      price: baseProduct.minPrice + Math.floor(Math.random() * 2000) + 300,
      shipping: 0,
      inStock: true,
      isGem: false,
      isBestPrice: false,
      url: "#"
    },
    {
      store: "Reliance Digital",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/06/Reliance_Digital_Logo.svg",
      price: baseProduct.minPrice + Math.floor(Math.random() * 1800) + 700,
      shipping: 99,
      inStock: Math.random() > 0.3,
      isGem: false,
      isBestPrice: false,
      url: "#"
    }
  ];
};

// Mock price history data
export const getMockPriceHistory = (productId: string) => {
  const today = new Date();
  const data = [];

  // Generate price data for the last 30 days
  for (let i = 29; i >= 0; i--) {
    const date = subDays(today, i);
    const basePrice = mockProducts[parseInt(productId) - 1]?.minPrice || 10000;
    
    // Generate some price fluctuations
    const gemVariation = Math.sin(i / 5) * 500;
    const amazonVariation = Math.cos(i / 4) * 700 + 500;
    const flipkartVariation = Math.sin(i / 3) * 600 + 700;

    data.push({
      date: date,
      gem: Math.round(basePrice + gemVariation),
      amazon: Math.round(basePrice + amazonVariation),
      flipkart: Math.round(basePrice + flipkartVariation),
    });
  }

  return data;
};

// Featured categories
export const featuredCategories = [
  {
    id: "electronics",
    name: "Electronics",
    image: "https://m.media-amazon.com/images/I/71hb7YOt4IL._SL1500_.jpg",
    count: 438
  },
  {
    id: "office",
    name: "Office Supplies",
    image: "https://m.media-amazon.com/images/I/61iJV2buO+L._SL1500_.jpg",
    count: 297
  },
  {
    id: "furniture",
    name: "Furniture",
    image: "https://m.media-amazon.com/images/I/71Qf7VtYNNL._SL1500_.jpg",
    count: 154
  },
  {
    id: "it",
    name: "IT Equipment",
    image: "https://m.media-amazon.com/images/I/71XkjMXG9pL._SL1500_.jpg",
    count: 211
  }
];

export const statsData = {
  totalProducts: "25,000+",
  pricesCompared: "1.2M+",
  averageSavings: "12%",
  happyUsers: "50K+"
};

export const testimonials = [
  {
    id: 1,
    text: "GemPriceHunter has saved our department lakhs of rupees in procurement costs. We can now easily verify we're getting the best prices on GeM.",
    author: "Ankit Sharma",
    role: "Procurement Manager, Ministry of Electronics",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    text: "As a small business owner, I need to ensure I'm getting the best deals. This tool lets me quickly compare GeM prices with other marketplaces.",
    author: "Priya Patel",
    role: "Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    text: "The price history feature is invaluable for planning large procurement cycles. We can now time our purchases to get maximum value.",
    author: "Rajesh Kumar",
    role: "IT Director, State Government",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg"
  }
];
