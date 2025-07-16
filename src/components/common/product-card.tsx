import { Badge } from '@/components/ui/badge';
import type { Product } from '../../types/sections/pricing';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={`border-l-4 ${product.borderColor} pl-4`}>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="font-bold text-gray-800 text-lg">{product.name}</h4>
        <div className="flex flex-col items-end gap-1">
          <span className={`font-bold text-2xl ${product.priceColor}`}>
            ¥{product.price.toLocaleString()}
          </span>
          {product.badge && (
            <Badge className={`text-xs ${product.badge.color}`}>
              {product.badge.text}
            </Badge>
          )}
        </div>
      </div>
      <div className="mb-3">
        {product.description.slice(1).map((desc, index) => (
          <p
            className="mb-1 text-gray-600 text-sm"
            key={`desc-${desc.slice(0, 10)}-${index}`}
          >
            {desc}
            {index < product.description.length - 2 && <br />}
          </p>
        ))}
      </div>
    </div>
  );
}
