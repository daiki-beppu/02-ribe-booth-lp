import { Badge } from "@/components/ui/badge";
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
      <div className="mb-3">
        <p className="text-gray-600 text-sm mb-1">
          {service.description}
        </p>
      </div>
      {service.image && (
        <div className="mb-3">
          <img
            src={service.image.src}
            alt={service.image.alt}
            className="w-full rounded-lg shadow-md"
          />
        </div>
      )}
      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 text-xs">
        {service.target || "すべての参加者対象"}
      </Badge>
    </div>
  );
}