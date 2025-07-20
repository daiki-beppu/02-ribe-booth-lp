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
        mobile: '大交流会イベント',
      },
      description: {
        desktop: 'メンバーが作ったオリジナルゲームやLT会で盛り上がりましょう！',
        mobile: 'メンバーが作ったオリジナルゲームやLT会盛り上がりましょう！',
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
    targets: [
      {
        id: 'A',
        label: {
          desktop: 'おしゃべり会A',
          mobile: 'おしゃべり会A',
        },
        target: {
          desktop: '👨‍👩‍👧‍👦 小中学校向け（小学生・中学生）',
          mobile: '👨‍👩‍👧‍👦 小中学校向け',
        },
        description: {
          desktop:
            'エンジニアの仕事内容、進路選択、子どもの未来スキル育成について一緒におしゃべりしましょう',
          mobile:
            'エンジニアの仕事、進路、\n子どもの未来スキル育成について\n一緒におしゃべりしましょう',
        },
        topics: ['🚀 エンジニアってどんな仕事？未来のおしごと教えて！'],
      },
      {
        id: 'B',
        label: {
          desktop: 'おしゃべり会B',
          mobile: 'おしゃべり会B',
        },
        target: {
          desktop: '📚 中高生・大学生向け（中学生・高校生・大学生）',
          mobile: '📚 中高生・大学生向け',
        },
        description: {
          desktop:
            'エンジニアの仕事内容、キャリアチェンジ、副業・収益化についておしゃべりしましょう',
          mobile:
            'エンジニアの仕事、キャリアチェンジ、\n副業・収益化について\nおしゃべりしましょう',
        },
        topics: ['🎯 エンジニアになるには？進路＆就職なんでもおしゃべり会'],
      },
      {
        id: 'C',
        label: {
          desktop: 'おしゃべり会C',
          mobile: 'おしゃべり会C',
        },
        target: {
          desktop: '👨‍👩‍👧‍👦 親御さん向け（保護者・ママパパ）',
          mobile: '👨‍👩‍👧‍👦 親御さん向け',
        },
        description: {
          desktop:
            'エンジニアの仕事、キャリア選択、子どもの未来スキル育成についておしゃべりしましょう',
          mobile:
            'エンジニアの仕事、キャリア、\n子どもの未来スキル育成について',
        },
        topics: ['👨‍👩子どもにどんな学びをさせたい？未来スキルの育て方'],
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
      name: '🎮 オリジナルゲーム大会',
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
    {
      name: '🌙 夜LT会',
      description:
        '夜の特別企画！現役エンジニアたちが様々なテーマでライトニングトーク（短いプレゼン）を行います。予約不要でお気軽にご参加ください！',
      themes: [
        '🤖 AIって何ができるの？生成AI・業務効率化・活用術',
        '🎯 未経験からでもOK？リアルな転職体験と学習の道のり',
        '💼 事業をもっと面白く！IT×ものづくりで売上アップ作戦会議',
        '💰 "好き"を形に！遊びと技術の交差点で副業に挑戦しよう',
        '👩‍💼 私にもできる？女性エンジニアの世界をのぞいてみよう！',
      ],

      schedule: '19:30〜21:00（90分間・予約不要）',
    },
  ],
  detailedSchedule: {
    title: '📅 詳細タイムスケジュール',
    description:
      'ブースM-14のおしゃべり会スケジュール（8/9-8/11）です。事前予約推奨ですが、当日参加も可能です。',
    timeSlots: [
      {
        time: '8/9(土) 11:00-11:30',
        activity: 'トークテーマ①（将来）',
        type: 'consultation',
        status: '◯',
        theme: '将来',
      },
      {
        time: '8/9(土) 11:30-12:00',
        activity: 'トークテーマ②（進路）',
        type: 'consultation',
        status: '◯',
        theme: '進路',
      },
      {
        time: '8/9(土) 14:00-14:30',
        activity: 'トークテーマ④（事業）',
        type: 'consultation',
        status: '△',
        theme: '事業',
      },
      {
        time: '8/9(土) 14:30-15:00',
        activity: 'トークテーマ③（教育）',
        type: 'consultation',
        status: '◯',
        theme: '教育',
      },
      {
        time: '8/9(土) 16:00-16:30',
        activity: 'トークテーマ①（将来）',
        type: 'consultation',
        status: '◯',
        theme: '将来',
      },
      {
        time: '8/9(土) 16:30-17:00',
        activity: 'トークテーマ②（進路）',
        type: 'consultation',
        status: '◯',
        theme: '進路',
      },
      {
        time: '8/10(日) 11:00-11:30',
        activity: 'トークテーマ③（教育）',
        type: 'consultation',
        status: '◯',
        theme: '教育',
      },
      {
        time: '8/10(日) 11:30-12:00',
        activity: 'トークテーマ①（将来）',
        type: 'consultation',
        status: '◯',
        theme: '将来',
      },
      {
        time: '8/10(日) 14:00-14:30',
        activity: 'トークテーマ③（教育）',
        type: 'consultation',
        status: '△',
        theme: '教育',
      },
      {
        time: '8/10(日) 14:30-15:00',
        activity: 'トークテーマ①（将来）',
        type: 'consultation',
        status: '◯',
        theme: '将来',
      },
      {
        time: '8/10(日) 16:00-16:30',
        activity: 'トークテーマ②（進路）',
        type: 'consultation',
        status: '◯',
        theme: '進路',
      },
      {
        time: '8/10(日) 16:30-17:00',
        activity: 'トークテーマ③（教育）',
        type: 'consultation',
        status: '◯',
        theme: '教育',
      },
      {
        time: '8/11(月) 11:00-11:30',
        activity: 'トークテーマ④（事業）',
        type: 'consultation',
        status: '◯',
        theme: '事業',
      },
      {
        time: '8/11(月) 11:30-12:00',
        activity: 'トークテーマ③（教育）',
        type: 'consultation',
        status: '◯',
        theme: '教育',
      },
      {
        time: '8/11(月) 14:00-14:30',
        activity: 'トークテーマ①（将来）',
        type: 'consultation',
        status: '△',
        theme: '将来',
      },
      {
        time: '8/11(月) 14:30-15:00',
        activity: 'トークテーマ②（進路）',
        type: 'consultation',
        status: '◯',
        theme: '進路',
      },
    ],
  },
};
