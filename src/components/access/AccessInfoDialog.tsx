import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Train, Bus, Clock } from "lucide-react";
import type { AccessInfoData } from "../../types/access-info";

interface AccessInfoDialogProps {
  data: AccessInfoData;
}

export default function AccessInfoDialog({ data }: AccessInfoDialogProps) {
  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          {data.venue.name} へのアクセス
        </h2>
        <Card
          className="bg-blue-50 border-blue-200 inline-block cursor-pointer hover:bg-blue-100 transition-colors"
          onClick={() => {
            const query = encodeURIComponent(data.venue.address);
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${query}`,
              "_blank",
            );
          }}
        >
          <CardContent className="px-6 py-3">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <p className="text-lg font-medium text-blue-800">
                {data.venue.address}
              </p>
            </div>
            <p className="text-sm text-blue-600 mt-1">
              クリックでGoogleマップを開く
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 交通手段 */}
      <div className="space-y-6">
        {/* 電車でのアクセス */}
        <div>
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-xl flex items-center justify-center gap-2">
              <Train className="w-6 h-6" />
              電車でのアクセス（推奨）
            </h3>
          </div>
          <Card className="border-blue-200 rounded-t-none">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {data.transportation.train.routes.map((route, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-2 ${
                      index === 0
                        ? "border-green-400 bg-green-50"
                        : "border-gray-200 bg-gray-50"
                    }`}
                  >
                    {index === 0 && (
                      <div className="text-center mb-2">
                        <Badge className="bg-green-500 text-white text-xs">
                          最短ルート
                        </Badge>
                      </div>
                    )}
                    <div className="text-center">
                      <Badge
                        variant="outline"
                        className="border-blue-500 text-blue-600 mb-3 text-sm font-medium"
                      >
                        {route.line}
                      </Badge>
                      <p className="font-bold text-lg mb-2">{route.station}</p>
                      <div className="flex items-center justify-center gap-2 text-base text-gray-700 mb-2">
                        <Clock className="w-5 h-5 text-green-600" />
                        <span className="font-medium">{route.walkingTime}</span>
                      </div>
                      {route.description && (
                        <p className="text-sm text-gray-600 bg-white p-2 rounded">
                          {route.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* バスでのアクセス */}
        <div>
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 rounded-t-lg">
            <h3 className="font-bold text-xl flex items-center justify-center gap-2">
              <Bus className="w-6 h-6" />
              バスでのアクセス
            </h3>
          </div>
          <Card className="border-purple-200 rounded-t-none">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.transportation.bus.routes.map((route, index) => (
                  <div
                    key={index}
                    className="p-5 rounded-lg border-2 border-purple-200 bg-purple-50"
                  >
                    <div className="text-center space-y-3">
                      <Badge className="bg-purple-500 text-white text-sm font-medium">
                        約{route.time}
                      </Badge>
                      <div className="space-y-2">
                        <div className="text-lg font-bold text-gray-800">
                          {route.from}
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="h-px bg-purple-300 flex-1"></div>
                          <Bus className="mx-3 text-purple-600 w-6 h-6" />
                          <div className="h-px bg-purple-300 flex-1"></div>
                        </div>
                        <div className="text-lg font-bold text-gray-800">
                          {route.to}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 text-center flex items-center justify-center gap-2">
                  <MapPin className="w-4 h-4" />
                  バス停「幕張メッセ中央」で下車してください
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
