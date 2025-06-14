import type { FreeService } from "../../types/sections/pricing";

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
      <p className="text-gray-600 text-sm mb-2">
        {service.description}
      </p>
    </div>
  );
}