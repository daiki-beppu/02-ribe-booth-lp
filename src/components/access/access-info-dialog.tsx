import { Bus, Clock, MapPin, Train } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils.ts';
import type { AccessInfoData } from '../../types/access-info';

interface AccessInfoDialogProps {
  data: AccessInfoData;
}

export default function AccessInfoDialog({ data }: AccessInfoDialogProps) {
  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <div className="mb-8 text-center">
        <h2 className="mb-4 font-bold text-3xl text-gray-800">
          {data.venue.name} へのアクセス
        </h2>
        <Card
          className="inline-block cursor-pointer border-blue-200 bg-blue-50 transition-colors hover:bg-blue-100"
          onClick={() => {
            const query = encodeURIComponent(data.venue.address);
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${query}`,
              '_blank'
            );
          }}
        >
          <CardContent className="px-6 py-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <p className="font-medium text-blue-800 text-lg">
                {data.venue.address}
              </p>
            </div>
            <p className="mt-1 text-blue-600 text-sm">
              クリックでGoogleマップを開く
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 交通手段 */}
      <div className="space-y-6">
        {/* 電車でのアクセス */}
        <div>
          <div className="rounded-t-lg bg-gradient-to-r from-blue-500 to-blue-600 p-4 text-white">
            <h3 className="flex items-center justify-center gap-2 font-bold text-xl">
              <Train className="h-6 w-6" />
              電車でのアクセス（推奨）
            </h3>
          </div>
          <Card className="rounded-t-none border-blue-200">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {data.transportation.train.routes.map((route, index) => (
                  <div
                    className={`rounded-lg border-2 p-4 ${
                      index === 0
                        ? 'border-green-400 bg-green-50'
                        : 'border-gray-200 bg-gray-50'
                    }`}
                    key={`train-route-${route.line}-${index}`}
                  >
                    <div className="mb-2 text-center">
                      <Badge
                        className={cn(
                          'bg-green-500 text-white text-xs',
                          index !== 0 ? 'invisible' : ''
                        )}
                      >
                        最短ルート
                      </Badge>
                    </div>

                    <div className="text-center">
                      <Badge
                        className="mb-3 border-blue-500 font-medium text-blue-600 text-sm"
                        variant="outline"
                      >
                        {route.line}
                      </Badge>
                      <p className="mb-2 font-bold text-lg">{route.station}</p>
                      <div className="mb-2 flex items-center justify-center gap-2 text-base text-gray-700">
                        <Clock className="h-5 w-5 text-green-600" />
                        <span className="font-medium">{route.walkingTime}</span>
                      </div>
                      {route.description && (
                        <p className="rounded bg-white p-2 text-gray-600 text-sm">
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
          <div className="rounded-t-lg bg-gradient-to-r from-purple-500 to-purple-600 p-4 text-white">
            <h3 className="flex items-center justify-center gap-2 font-bold text-xl">
              <Bus className="h-6 w-6" />
              バスでのアクセス
            </h3>
          </div>
          <Card className="rounded-t-none border-purple-200">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {data.transportation.bus.routes.map((route, index) => (
                  <div
                    className="rounded-lg border-2 border-purple-200 bg-purple-50 p-5"
                    key={`bus-route-${route.from}-${index}`}
                  >
                    <div className="space-y-3 text-center">
                      <Badge className="bg-purple-500 font-medium text-sm text-white">
                        約{route.time}
                      </Badge>
                      <div className="space-y-2">
                        <div className="font-bold text-gray-800 text-lg">
                          {route.from}
                        </div>
                        <div className="flex items-center justify-center">
                          <div className="h-px flex-1 bg-purple-300" />
                          <Bus className="mx-3 h-6 w-6 text-purple-600" />
                          <div className="h-px flex-1 bg-purple-300" />
                        </div>
                        <div className="font-bold text-gray-800 text-lg">
                          {route.to}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3">
                <p className="flex items-center justify-center gap-2 text-center text-sm text-yellow-800">
                  <MapPin className="h-4 w-4" />
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
