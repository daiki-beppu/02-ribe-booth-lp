import type { BoothData } from '../../types/sections/booth';

export const boothData: BoothData = {
  title: {
    desktop: 'M-14\n親子でプログラム\n×\n光る動くおもちゃ作り！',
    mobile: 'M-14\n親子でプログラム\n×\n光る動くおもちゃ作り！',
  },
  description: {
    desktop:
      '「親子でプログラム× 光る動くおもちゃ作り！」現役エンジニアチームが提供する本格プログラミング体験ブースです。\n自由研究から将来のスキルまで、遊びながら本物の力が身につく理想的な学習環境をご用意しています。',
    mobile:
      '現役エンジニアチームが提供する\n本格プログラミング体験ブース！\n自由研究から将来のスキルまで学べます',
  },
  headerIcon: '🎪',
  sections: {
    experience: {
      title: {
        desktop: 'プログラム体験',
        mobile: 'プログラム体験',
      },
      description: {
        desktop: '実際にプログラミングを体験できます💻',
        mobile: '実際にプログラミングを体験💻',
      },
      icon: '💻',
    },
    products: {
      title: {
        desktop: '物販',
        mobile: '物販',
      },
      description: {
        desktop: 'プログラミング関連グッズを販売',
        mobile: 'プログラミング関連\nグッズを販売',
      },
      icon: '🛍️',
    },
    events: {
      title: {
        desktop: '大交流会イベント',
        mobile: '大交流会\nイベント',
      },
      description: {
        desktop: 'ゲーム大会で盛り上がりましょう！',
        mobile: 'ゲーム大会で\n盛り上がりましょう！',
      },
      icon: '🎮',
    },
  },
  activities: [
    {
      title: {
        desktop: '🚦 Arduino LED信号機プログラミング体験',
        mobile: '🚦 Arduino LED信号機\nプログラミング体験',
      },
      description: {
        desktop:
          '夏休みの自由研究として提出できる成果物を15分で作成！お子さんが「かっこいい！」と夢中になる本格体験',
        mobile: '夏休みの自由研究として提出できる\n成果物を15分で作成！',
      },
      icon: '🚦',
      details: [
        '【Step 1】Arduino基板とLEDライトの配線 - 自由研究の実験装置完成！',
        '【Step 2】テンプレート準備で初心者も安心 - 信号機の制御ロジックを学習',
        '【Step 3】LED信号機を実際に制御 - 自由研究レポートの材料が完成！',
        '📝 そのまま提出できる実用的な成果物が作れます',
        '🔧 現役エンジニアチームが設計した本格的な教材を使用',
        '👨‍👩‍👧‍👦 親御さんも一緒に楽しめる親子体験',
        '⏰ 体験時間：30分間（事前予約推奨・1日9回開催）',
        '💰 参加費：完全無料',
      ],
      image: '/images/experience-image2.jpg',
      points: [
        {
          icon: '📝',
          title: {
            desktop: '自由研究として提出可能',
            mobile: '自由研究として提出可能',
          },
          description: {
            desktop: '夏休みの宿題にそのまま使える実用的な成果物が完成します✨',
            mobile: '夏休みの宿題にそのまま使える✨',
          },
          color: 'emerald',
        },
        {
          icon: '🔧',
          title: {
            desktop: '現役エンジニアによる本格教材',
            mobile: '現役エンジニアによる本格教材',
          },
          description: {
            desktop:
              '現役エンジニアが作成した、遊びながら本物の力が身につく教材です📝',
            mobile: '遊びながら力が身につく教材です📝',
          },
          color: 'orange',
        },
        {
          icon: '👨‍👩‍👧‍👦',
          title: {
            desktop: '親子で一緒に楽しめる',
            mobile: '親子で一緒に楽しめる',
          },
          description: {
            desktop:
              'お子様だけでなく、親御さんも一緒に参加できます。家族みんなでプログラミングの楽しさを体験してください👨‍👨‍👦‍👦',
            mobile: '家族みんなで楽しめます👨‍👨‍👦‍👦',
          },
          color: 'pink',
        },
      ],
      steps: [
        {
          title: {
            desktop: '🔧 キット組み立て',
            mobile: '🔧 キット組み立て',
          },
          description: {
            desktop: 'Arduino基板とLEDライトの配線',
            mobile: 'Arduino基板とLEDライトの配線',
          },
          icon: '🔧',
        },
        {
          title: {
            desktop: '💻 プログラム作成',
            mobile: '💻 プログラム作成',
          },
          description: {
            desktop: '信号機の制御ロジックを学習',
            mobile: '信号機の制御ロジックを学習',
          },
          icon: '💻',
        },
        {
          title: {
            desktop: '🚦 信号機を実際に制御',
            mobile: '🚦 信号機を実際に制御',
          },
          description: {
            desktop:
              '自由研究レポートの材料が完成！そのまま提出できる実用的な成果物',
            mobile: '自由研究レポートの材料が完成！',
          },
          icon: '🚦',
        },
      ],
    },
  ],
  consultation: {
    title: {
      desktop: '👨‍💻 現役エンジニアとおしゃべり会',
      mobile: '👨‍💻 現役エンジニアとおしゃべり会',
    },
    description: {
      desktop: '現役エンジニアとお話しましょう😆',
      mobile: '現役エンジニアとお話しましょう😆',
    },
    features: [
      '🎯 プログラミング学習の進め方 - 初心者から上級者まで最適なロードマップをご提案',
      '💼 キャリアチェンジに関する相談 - 元鳶職→Webエンジニアの実体験談もお聞きできます',
      '🔧 技術的な質問・疑問の解決 - AI/LLM、クラウド、マイコン、データ分析など幅広く対応',
      '💰 副業・案件獲得のアドバイス - 実際に20万円/月収益継続中のノウハウを伝授',
      '📈 投資・資産運用の相談 - 投資歴7年→資産4桁・配当3桁達成の実績ベースでアドバイス',
      '🏢 転職・就職活動のサポート - 現役管理職エンジニアによる業界動向解説',
      '📚 継続学習のコツ - 学習モチベーション維持から実践的なスキルアップまで',
      '⏰ 相談時間：30分間（1日6回開催・事前予約推奨）',
      '💰 参加費：完全無料',
    ],
    targets: [
      {
        id: 'A',
        label: {
          desktop: '相談会A',
          mobile: '相談会A',
        },
        target: {
          desktop: '👨‍👩‍👧‍👦 親御さん向け（小学生・中学生・高校生・大学生）',
          mobile: '👨‍👩‍👧‍👦 親御さん向け',
        },
        description: {
          desktop:
            'お子さんの将来とプログラミング学習について一緒に考えましょう',
          mobile:
            'お子さんの将来と\nプログラミング学習について\n一緒に考えましょう',
        },
        topics: [
          '🎯 プログラミング学習の進め方 - 初心者向けロードマップ',
          '🏢 転職・就職活動のサポート - エンジニア業界への道のり',
          '💼 キャリアチェンジに関する相談 - 未経験からの転職体験談',
          '📚 継続学習のコツ - お子さんの未来スキル育成法',
        ],
      },
      {
        id: 'B',
        label: {
          desktop: '相談会B',
          mobile: '相談会B',
        },
        target: {
          desktop: '🔧 専門職向け（キャリアチェンジ希望者・事業者・副業者）',
          mobile: '🔧 専門職向け',
        },
        description: {
          desktop: '製造業・技術職の方のスキルアップと効率化をサポート',
          mobile: '製造業・技術職の方の\nスキルアップと効率化をサポート',
        },
        topics: [
          '🔧 技術的な質問・疑問の解決 - AI/LLM、システム開発など',
          '💰 副業・案件獲得のアドバイス - 実際の収益化ノウハウ',
          '💼 キャリアチェンジに関する相談 - 専門職からエンジニアへ',
          '🎯 プログラミング学習の進め方 - 実務に活かせるスキル習得',
        ],
      },
      {
        id: 'C',
        label: {
          desktop: '相談会C',
          mobile: '相談会C',
        },
        target: {
          desktop:
            '💼 経営者・マネジメント向け（保護者・ママパパ・女性エンジニア応援枠）',
          mobile: '💼 経営者・マネジメント向け',
        },
        description: {
          desktop: '出店の先にある面白いテーマ探し・今後の収益活動について',
          mobile: '面白いテーマ探し・\n今後の収益活動について',
        },
        topics: [
          '📈 投資・資産運用の相談 - 実績ベースでのアドバイス',
          '🏢 転職・就職活動のサポート - 管理職エンジニアの業界解説',
          '👩‍💼 私にもできる？女性エンジニアの世界をのぞいてみよう！',
          '📚 継続学習のコツ - 学習モチベーション維持とスキルアップ',
        ],
      },
    ],
  },
  products: [
    {
      name: '🌱 スタートキット',
      price: '2,980円',
      description:
        '自由研究完成！初心者・お子様向け入門モデル。マイコン＋ボード＋信号機キットで本格プログラミング学習がスタートできます',
      features: [
        '🚦 Arduino UNO互換ボード + LEDライト信号機キット',
        '🔧 基本的なLED制御プログラム（サンプルコード10種類）',
        '📝 自由研究レポート作成ガイド付き（テンプレート込み）',
        '💻 Arduino IDE セットアップガイド',
      ],
      image: '/images/starter-kit.jpg',
    },
    {
      name: '🚀 アドベンチャーキット',
      price: '4,980円',
      description:
        '【限定10個】自由研究グレードアップ！親子で本格学習モデル。スタートキット＋踏切システム＋モーター制御で応用力を身につけます',
      features: [
        '🌱 スタートキットの全内容',
        '🚃 踏切システム追加（サーボモーター制御）',
        '⚙️ モーター制御機能',
      ],
      image: '/images/adventure-kit.jpg',
    },
    {
      name: '💎 マスターキット',
      price: '9,980円',
      description:
        '【限定5個】自由研究→将来スキル！副業・転職を目指す本格派。センサー制御からIoT開発まで、プロレベルの技術習得を目指します',
      features: [
        '🚀 アドベンチャーキットの全内容',
        '🌡️ 3種センサー追加（距離センサー・温度センサー・照度センサー）',
      ],
      image: '/images/master-kit.jpg',
    },
    {
      name: '💡 光るカチューシャ',
      price: '500円',
      description:
        'プログラミングで制御可能な本格IoTアクセサリー！イベント会場での注目度抜群の光るカチューシャです',
      features: [
        '🎪 イベント会場で目立つこと間違いなし',
        '🎁 お土産・記念品として最適',
      ],
      image: '/images/led-headband.jpg',
    },
  ],
  events: [
    {
      name: '🎮 大交流会イベント',
      description:
        'とあるゲームをパクっ...ではなくオマージュしたオリジナルゲームで大会を開催！他の参加者やスタッフと楽しく交流しましょう！',
      prizes: ['🥇 優勝：QUOカード 500円分, オリジナル景品'],
      rules: [
        '⏰ 制限時間内でできるだけ高得点を目指す（1回5分間）',
        '🔄 1人3回まで挑戦可能（間隔を空けてOK）',
        '🏆 最高得点で順位を決定（全参加者での総合ランキング）',
        '⚖️ 同点の場合は先にプレイした方が上位',
        '👨‍👩‍👧‍👦 親子での参加大歓迎（親子合計得点での特別枠あり）',
        '📝 参加時にお名前とご連絡先の記入をお願いします',
      ],
      schedule: '18:30〜19:00（30分間・当日参加OK）',
    },
  ],
  detailedSchedule: {
    title: '📅 詳細タイムスケジュール',
    description:
      'ブースM-14の1日のスケジュールです。事前予約推奨ですが、当日参加も可能です。',
    timeSlots: [
      { time: '10:00-10:30', activity: '体験会1', type: 'experience' },
      { time: '10:30-11:00', activity: '体験会2', type: 'experience' },
      { time: '11:00-11:30', activity: '相談会A1', type: 'consultation' },
      { time: '11:30-12:00', activity: '相談会A2', type: 'consultation' },
      { time: '12:00-12:30', activity: '体験会3', type: 'experience' },
      { time: '12:30-13:00', activity: '体験会4', type: 'experience' },
      { time: '13:00-13:30', activity: '体験会5', type: 'experience' },
      { time: '13:30-14:00', activity: '体験会6', type: 'experience' },
      { time: '14:00-14:30', activity: '相談会B1', type: 'consultation' },
      { time: '14:30-15:00', activity: '相談会B2', type: 'consultation' },
      { time: '15:00-15:30', activity: '体験会7', type: 'experience' },
      { time: '15:30-16:00', activity: '体験会8', type: 'experience' },
      { time: '16:00-16:30', activity: '相談会C1', type: 'consultation' },
      { time: '16:30-17:00', activity: '相談会C2', type: 'consultation' },
      { time: '17:00-17:30', activity: '体験会9', type: 'experience' },
      { time: '17:30-20:00', activity: '大交流会', type: 'event' },
    ],
  },
};
