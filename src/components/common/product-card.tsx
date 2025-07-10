import { Badge } from '@/components/ui/badge';
import type { Product } from '../../types/sections/pricing';

const LIMITED_REGEX = /【限定(\d+)個】/;

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const descriptionText = product.description.join(' ');
  const limitedMatch = LIMITED_REGEX.exec(descriptionText);
  const isLimited = limitedMatch !== null;
  return (
    <div className={`border-l-4 ${product.borderColor} pl-4`}>
      <div className="mb-2 flex items-center justify-between">
        <h4 className="font-bold text-gray-800 text-lg">{product.name}</h4>
        <div className="flex items-center gap-2">
          {isLimited && (
            <Badge className="bg-red-500 text-white text-xs hover:bg-red-600">
              {limitedMatch?.[1] ? `限定${limitedMatch[1]}` : '限定'}
            </Badge>
          )}
          <span className={`font-bold text-2xl ${product.priceColor}`}>
            ¥{product.price.toLocaleString()}
          </span>
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
