import type { AccessInfoData } from "../types/access-info";

export const accessInfoData: AccessInfoData = {
  venue: {
    name: "幕張メッセ",
    address: "〒261-8550 千葉県千葉市美浜区中瀬2-1",
    building: "国際展示場",
    floor: "1-3ホール",
    boothNumber: "M-14",
  },
  transportation: {
    train: {
      title: "電車でのアクセス",
      routes: [
        {
          line: "JR京葉線",
          station: "海浜幕張駅",
          walkingTime: "徒歩約5分",
          description: "最も便利なアクセス方法です",
        },
        {
          line: "JR総武線快速",
          station: "幕張本郷駅",
          walkingTime: "バス約17分",
          description: "「幕張メッセ中央」バス停下車",
        },
        {
          line: "京成千葉線",
          station: "京成幕張本郷駅",
          walkingTime: "バス約18分",
          description: "「幕張メッセ中央」バス停下車",
        },
      ],
    },
    car: {
      title: "お車でのアクセス",
      parking: "駐車場完備（有料）",
      directions: [
        "東関東自動車道「湾岸習志野IC」から約5分",
        "京葉道路「幕張IC」から約10分",
        "東京湾アクアライン「木更津金田IC」から約50分",
      ],
    },
    bus: {
      title: "バスでのアクセス",
      routes: [
        {
          from: "東京駅八重洲口前",
          to: "幕張メッセ中央",
          time: "約40分",
        },
        {
          from: "羽田空港",
          to: "幕張メッセ中央",
          time: "約45分",
        },
      ],
    },
  },
  mapInfo: {
    nearbyLandmarks: [
      "イオンモール幕張新都心",
      "QVCマリンフィールド（ZOZOマリンスタジアム）",
      "幕張プリンスホテル",
      "ホテルニューオータニ幕張",
    ],
    entranceInfo: "1-3ホール入口からお入りください",
  },
  eventDates: "2025年8月9日（土）〜11日（月）",
  contactInfo: "ブース内でお気軽にお声かけください",
};
