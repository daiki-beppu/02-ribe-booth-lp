import { Badge } from '@/components/ui/badge';
import { isResponsiveText } from '../../types/common/responsive-text';
import type { FreeService } from '../../types/sections/pricing';
import ResponsiveText from './responsive-text';

interface FreeServiceItemProps {
  service: FreeService;
}

export default function FreeServiceItem({ service }: FreeServiceItemProps) {
  return (
    <div className={`border-l-4 ${service.borderColor} pl-4`}>
      <div className="mb-2">
        <h4 className="font-bold text-gray-800 text-lg">
          {service.icon} {service.title}
        </h4>
      </div>
      <div className="mb-3">
        {isResponsiveText(service.description) ? (
          <ResponsiveText
            as="p"
            className="mb-1 text-gray-600 text-sm"
            desktop={service.description.desktop}
            mobile={service.description.mobile}
          />
        ) : (
          <p className="mb-1 text-gray-600 text-sm">{service.description}</p>
        )}
      </div>
      {service.image && (
        <div className="mb-3">
          <img
            alt={service.image.alt}
            className="w-full rounded-lg shadow-md"
            src={service.image.src}
          />
        </div>
      )}
      <Badge className="bg-green-100 text-green-800 text-xs hover:bg-green-200">
        {service.target || 'すべての参加者対象'}
      </Badge>
    </div>
  );
}
