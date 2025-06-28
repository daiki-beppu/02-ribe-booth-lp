import { Badge } from "@/components/ui/badge";
import type { Product } from "../../types/sections/pricing";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={`border-l-4 ${product.borderColor} pl-4`}>
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold text-gray-800 text-lg">{product.name}</h4>
        <span className={`text-2xl font-bold ${product.priceColor}`}>
          ¥{product.price.toLocaleString()}
        </span>
      </div>
      <div className="mb-3">
        {product.description.map((desc, index) => (
          <p key={index} className="text-gray-600 text-sm mb-1">
            {desc}
            {index < product.description.length - 1 && <br />}
          </p>
        ))}
      </div>
      {product.image && (
        <div className="mb-3">
          <img
            src={product.image.src}
            alt={product.image.alt}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      )}
      <Badge className={`${product.badgeColor} text-xs`}>
        {product.target}
      </Badge>
    </div>
  );
}
