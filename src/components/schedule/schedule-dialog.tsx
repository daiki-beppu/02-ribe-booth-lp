import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { boothData } from '../../data/sections/booth';

interface ScheduleDialogProps {
  type: 'experience' | 'consultation';
  title: string;
  buttonText: string;
}

export function ScheduleDialog({
  type,
  title,
  buttonText,
}: ScheduleDialogProps) {
  const getSlotColor = (slotType: string) => {
    switch (slotType) {
      case 'experience':
        return 'bg-blue-50 border-blue-200 text-blue-700';
      case 'consultation':
        return 'bg-green-50 border-green-200 text-green-700';
      case 'event':
        return 'bg-purple-50 border-purple-200 text-purple-700';
      case 'preparation':
      case 'cleanup':
        return 'bg-gray-50 border-gray-200 text-gray-700';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-700';
    }
  };

  const getSlotIcon = (slotType: string) => {
    switch (slotType) {
      case 'experience':
        return '🚦';
      case 'consultation':
        return '👨‍💻';
      case 'event':
        return '🎮';
      case 'preparation':
        return '🔧';
      case 'cleanup':
        return '📦';
      default:
        return '📋';
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="!max-w-6xl !w-[90vw] md:!w-[80vw] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-400 to-cyan-500 text-white text-xl">
              📅
            </div>
            {title}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p className="text-gray-600 text-sm">
            {boothData.detailedSchedule.description}
          </p>

          <div className="space-y-3">
            {boothData.detailedSchedule.timeSlots
              .filter((slot) => slot.type === type)
              .map((slot) => (
                <div
                  className={`flex items-center rounded-lg border-2 p-3 ${getSlotColor(slot.type)}`}
                  key={`timeslot-${slot.time}-${slot.activity}`}
                >
                  <div className="mr-3 flex-shrink-0">
                    <span className="text-xl">{getSlotIcon(slot.type)}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div className="mb-1 sm:mb-0">
                        <span className="font-bold text-base">{slot.time}</span>
                      </div>
                      <div>
                        <span className="font-medium text-sm">
                          {slot.activity}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          <Separator />

          <div className="rounded-lg bg-indigo-50 p-4">
            <div className="flex items-start">
              <Calendar className="mt-1 mr-3 h-5 w-5 flex-shrink-0 text-indigo-600" />
              <div className="flex-grow">
                <h4 className="font-bold text-base text-indigo-800">
                  事前予約のお申し込み
                </h4>
                <p className="mt-1 text-indigo-700 text-sm">
                  事前予約推奨です。当日参加も可能ですが、混雑時はお待ちいただく場合があります。
                  予約フォームからお申し込みください。
                </p>
                <div className="mt-3">
                  <Button
                    className="bg-indigo-600 text-white hover:bg-indigo-700"
                    onClick={() =>
                      window.open(
                        'https://docs.google.com/forms/d/e/1FAIpQLSczxo5c082Y6JTdNPmzM_lczjt8hvsga08G8WPtkv2S858rrg/viewform',
                        '_blank'
                      )
                    }
                  >
                    予約フォームを開く
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
