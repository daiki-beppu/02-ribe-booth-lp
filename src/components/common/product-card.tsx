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
        <span className={`font-bold text-2xl ${product.priceColor}`}>
          ¥{product.price.toLocaleString()}
        </span>
      </div>
      <div className="mb-3">
        {product.description.map((desc, index) => (
          <p
            className="mb-1 text-gray-600 text-sm"
            key={`desc-${desc.slice(0, 10)}-${index}`}
          >
            {desc}
            {index < product.description.length - 1 && <br />}
          </p>
        ))}
      </div>
      {product.image && (
        <div className="mb-3">
          <img
            alt={product.image.alt}
            className="w-full rounded-lg shadow-md"
            src={product.image.src}
          />
        </div>
      )}
      <Badge className={`${product.badgeColor} text-xs`}>
        {product.target}
      </Badge>
    </div>
  );
}
