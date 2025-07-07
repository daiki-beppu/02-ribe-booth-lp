import type { TeamMember } from '../../types/sections/team';

// メンバー詳細ページ用の拡張データ
const extendedMemberData: { [key: string]: Partial<TeamMember> } = {
  まるの: {
    title: '見た目は大人、中身は子供　童心✖️熱血エンジニア',
    experience: '電機メーカー　管理職',
    skills: [
      '組み込みC言語',
      'pythonツール開発',
      'pythonゲーム開発',
      '電源回路設計',
      '３Dプリンタ制作',
    ],
    description: 'ものづくりと聞くと、しっぽ振って駆けつける"犬系男子"です🐶✨',
    details: [
      {
        icon: '🐶',
        text: 'ものづくりと聞くと、しっぽ振って駆けつける"犬系男子"です🐶✨',
      },
      {
        icon: '🔥',
        text: '頼られるとめちゃ燃える🔥アイデアを一緒にカタチにしたり、「面白くする」ひと工夫が得意です！',
      },
      {
        icon: '🚀',
        text: '2025年副業開始！ブログ、YOUTUBE、３Dプリンタハンドメイド挑戦中。イラスト副業は収益化達成',
      },
      {
        icon: '🌟',
        text: '日常では家族と推し活を全力集中！笑　今はSnowMan、人狼系Vtuber',
      },
    ],
    message:
      '大人になっても"ワクワク"は忘れたくない！\n遊びも仕事も「オモロい」を追求！\nお話しをして、いっしょに「オモロい」アイデアを形にしてみませんか？',
    portfolio: [
      {
        title: 'エンジニア相談・指導サービス',
        description:
          '研究開発職や電機メーカーのエンジニア職を目指される大学生の方。興味のあるお子様。お気軽にご相談ください',
        technologies: ['相談・指導', '研究開発', '電機メーカー', '大学生向け'],
        type: 'service',
      },
      {
        title: '３Dプリンタ - 学長ライオンハウス',
        description:
          'これからも学長ライオン推し活グッズを色々作りたいです！「こんなのオモロいかも！」とアイデア出たらぜひお話ししに来てください！一緒に作りましょう✨',
        technologies: [
          '３Dプリンタ',
          'ハンドメイド',
          '推し活グッズ',
          'デザイン',
        ],
        type: 'portfolio',
        url: 'https://furima.libecity.com/products/19758',
      },
      {
        title: '３Dプリンタ - オリジナルキーホルダー',
        description:
          '子供の描いた絵をキーホルダーに⭐️身近で人気です✨こちらのブースの物販でもお土産キーホルダーを準備しております！',
        technologies: [
          '３Dプリンタ',
          'オリジナルグッズ',
          'キーホルダー',
          '子供向け',
        ],
        type: 'portfolio',
        url: 'https://skill.libecity.com/services/24847',
      },
      {
        title: 'pythonゲーム開発',
        description:
          '本ブースにて企画中。カミングスーン。個別で作ってみたい相談など、スキルマーケットで受注させていただきます。詳しくはDMへご連絡ください。過去に作った公開できないゲームも、ブース内でしたらお見せします🤫',
        technologies: ['Python', 'ゲーム開発', 'カスタム開発', '受注開発'],
        type: 'portfolio',
      },
      {
        title: 'イラスト副業',
        description:
          '週に1回、30分だけのゆる副業！イラスト副業を初めて１ヶ月で0→1を達成した話',
        technologies: ['イラスト', '副業', '収益化', 'ゆる副業'],
        type: 'portfolio',
        url: 'https://library.libecity.com/articles/01JYTJQ8924K0F62ZK2MVC7BN1',
      },
      {
        title: 'オフ会「フェスを語らう会in梅田🦁」の主催',
        description: '梅田オフィスからフェスを盛り上げる活動を行っております！',
        technologies: ['オフ会主催', 'コミュニティ', 'フェス企画', '梅田'],
        type: 'portfolio',
        url: 'https://libecity.com/room_list?room_id=rd79Od3dcQtscXEJ5Gxe',
      },
    ],
  },
  ももちこ: {
    title: '元鳶職→Webエンジニア',
    experience: '2024年10月未経験転職',
    skills: ['Webアプリ開発', 'フロントエンド', 'プログラミング学習支援'],
    description:
      '鳶職からIT業界への華麗なる転職！プログラミングで人生が変わった経験を、次は誰かに届けたいと考えています！',
    details: [
      {
        icon: '🏗️',
        text: '前職は鳶職！先輩方に心配される程の華奢な体型で、重い鉄骨を運ぶより軽やかにキーボードを叩く方が向いていると悟る😆',
      },
      {
        icon: '🚀',
        text: '土方からIT土方への華麗なる転職！2024年10月に未経験からWebエンジニアに転職成功',
      },
      {
        icon: '🏢',
        text: '設立5期目のITベンチャーでWebエンジニアとして活躍中。ハウスメーカー向けサービスの見た目作りを担当😊',
      },
      {
        icon: '🏠',
        text: '完全在宅勤務&やりたいことを尊重してくれる最高の環境で、毎日「仕事してる感覚」がない✨',
      },
      {
        icon: '📈',
        text: '未経験からスタートしたとは思えないレベルの開発を任せてもらえて、成長実感がハンパない！',
      },
      {
        icon: '🎉',
        text: '毎日が遊びの延長で本当に天職だと感じています。新しいテクノロジーを学ぶのが楽しくて仕方がない！',
      },
    ],
    message:
      '重い鉄骨からキーボードへ！プログラミングで人生が180度変わりました。未経験からでも絶対にエンジニアになれる！その経験とノウハウを次は誰かに届けたいと考えています🚀',
    portfolio: [
      {
        title:
          '【リベシティスキルマーケット】未経験からwebエンジニアを目指す方をサポートします！',
        description:
          'Webエンジニアを目指す初学者向けの伴走型サポートを提供します。私自身が未経験から8ヶ月でエンジニア転職を成功させた経験を活かし、同じ道を歩む方々を全力でサポートします。',
        headerImage: '/images/portfolio/momochico/service-support.PNG',
        technologies: [
          'プログラミング学習支援',
          '転職支援',
          '伴走型サポート',
          '未経験者向け',
        ],
        type: 'service',
        url: 'https://skill.libecity.com/services/27116',
      },
      {
        title: 'ハウスメーカー向けWebサービス',
        description:
          '現在担当している住宅業界向けのWebアプリケーション。フロントエンド開発を中心に、ユーザビリティを重視したUI/UX設計。',
        technologies: ['React', 'TypeScript', 'Next.js', 'CSS', 'UI/UX'],
        type: 'project',
      },
      {
        title: 'このサイトの作成者',
        description:
          '現在ご覧いただいているプログラミングブースのランディングページを制作しました。チームメンバーの魅力を伝えるため、レスポンシブデザインとユーザビリティを重視した設計になっています。',
        headerImage: '/images/portfolio/momochico/porfolio-booth-lp.jpg',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
        type: 'portfolio',
      },
      {
        title: 'Three.js デモサイト',
        description:
          'WebGLとThree.jsを使用したインタラクティブな3Dデモサイトです。フロントエンド技術の学習と実践を目的として制作し、3Dグラフィックスの基礎を習得しました。',
        headerImage: '/images/portfolio/momochico/portfolio-threejs.jpg',
        technologies: ['Three.js', 'WebGL', 'JavaScript', '3D Graphics'],
        type: 'portfolio',
        url: 'https://threejs-demo-rose.vercel.app/',
      },
    ],
  },
  snowdrop: {
    title: 'ものづくり大好き　設計エンジニア',
    experience: '2024年６月 建築→機械設計へ転職',
    skills: ['機械設計', 'AutoCAD', '建築施工'],
    description: 'エンジニアになりたい女の子集まれー😊',
    details: [
      {
        icon: '👩‍👦‍👦',
        text: '男子2人を育てるシングルマザー！本業・育児・家事・副業をこなすスーパー母ちゃん！',
      },
      {
        icon: '⏰',
        text: '常にタスクもりもりなので「タイムマネジメント」は超得意！困難は分割せよ！',
      },
      {
        icon: '🗣️',
        text: 'うちの長男がコミュ力モンスター👾過ぎて、私もつられて言語化力とアイデア力が急成長中！',
      },
      {
        icon: '🔧',
        text: '16年勤めた建材メーカーから転職！現在は機械設計エンジニアとして活躍中！',
      },
      {
        icon: '👊',
        text: 'ものづくり現場ではまだまだ男性社会！女性エンジニアとして戦っています👊',
      },
      {
        icon: '🎨',
        text: '副業では、かごバッグ作家として活躍中！大型イベント出店経験あり。',
      },
    ],
    message:
      'エンジニアになりたい女の子集まれー😊\n自分で考えて、作って、動かす体験をぜひ楽しんでいただきたいです✨',
    portfolio: [
      {
        title:
          '小さいお花🌸の名札ストラップ【緑】♪オフ会などで好印象♡個性的な名札ストラップ',
        description:
          'フリマアプリで販売している、個性的でかわいい名札ストラップ。オフ会などで好印象を与えるオリジナル作品。',
        technologies: ['ハンドメイド', 'デザイン', '名札ストラップ', '手芸'],
        type: 'service',
        url: 'https://furima.libecity.com/products/19986',
      },
      {
        title:
          '【リベシティノウハウ図書館】「40代シングルマザーの転職ストーリー」～きっかけと決意～',
        description:
          '【リベシティノウハウ図書館】\n40代シングルマザーとして建築から機械設計へ転職した体験談。同じ境遇の方への励ましとなるストーリー。',
        technologies: [
          '転職体験談',
          'キャリアチェンジ',
          '40代転職',
          'シングルマザー',
        ],
        type: 'portfolio',
        url: 'https://library.libecity.com/articles/01J5G21BS9VPM3H2KW09G01HTA',
      },
      {
        title: 'かごバッグ作家',
        description:
          'オリジナルデザインのかごバッグを製作・販売。対面販売では、「瀬戸内ハンドメイドマルシェ」などの大型マルシェ出店経験あり！',
        technologies: [
          'ハンドメイド',
          'かごバッグ',
          'マルシェ出店',
          '対面販売',
        ],
        type: 'portfolio',
        url: '#',
      },
    ],
  },
  koba: {
    title: '記憶力としらべ魔の機械設計エンジニア',
    experience: '管理職に昇進しちゃったのでマネジメントも勉強中',
    skills: [
      '機械設計・社内ツール開発（VBA,Python,Windowsバッチファイル作成）',
    ],
    description: 'プログラミングは、「ひみつの会社づくり」！',
    details: [
      {
        icon: '⚙️',
        text: '本業は空調機の機械詳細設計！ミリ単位で板金や鋼材の設計を行なってます！',
      },
      {
        icon: '🖥️',
        text: '2次元CADソフトをメインで使用、最近は3次元CADも学習中！',
      },
      {
        icon: '🤖',
        text: '部内の業務効率化が得意分野！社内ツールを開発。最近はAIも多方面で活用中！',
      },
      {
        icon: '💻',
        text: 'PC（Windows）歴２６年、環境設定や基本的な操作などお困りごとを一緒に解決！',
      },
    ],
    message:
      'プログラミングは、「ひみつの会社づくり」！\nアイデアを考えて、調べて、作り方を決めて、コードを書いて、ちゃんと動くかチェックする。\nまるで社長もエンジニアも自分一人でやる、ものづくりの大冒険です！\nプログラミングを学ぶと、【考える力】、【作る力】、【調べる力】、【やりぬく力】が自然と身に付きます！\n皆さんの大きなチャレンジの第一歩になれるようにお手伝いいたします⭐',
    portfolio: [
      {
        title: 'CADスキル',
        description:
          'CADを使用した機械設計を行なっています！CADオペレータや設計業務に興味のある方はぜひご相談ください。',
        technologies: ['機械設計', '空調機設計', '2次元CAD', '3次元CAD'],
        type: 'service',
      },
      {
        title: '空調機外形図',
        description:
          '空調機の外形設計を行なっています。ミリ単位での精密な設計が得意分野です。',
        technologies: ['機械設計', '空調機設計', '外形図', '精密設計'],
        type: 'portfolio',
      },
      {
        title: '2次元CAD図',
        description:
          '2次元CADソフトをメインで使用した図面作成を行なっています。詳細図面の作成が得意です。',
        technologies: ['2次元CAD', '図面作成', '詳細図面', 'CADオペレータ'],
        type: 'portfolio',
      },
      {
        title: '3次元CAD',
        description:
          '最近は3次元CADも学習中！立体的な設計やレイアウト設計にチャレンジしています。',
        technologies: ['3次元CAD', '立体設計', 'レイアウト設計', 'ブース設計'],
        type: 'portfolio',
      },
      {
        title: '制作ツール紹介',
        description:
          'VBA・Python・Windowsバッチファイルなどを利用したツール開発、その他AI等を使用したPC業務効率化を行なっています。お困りごとがあれば、何でもご相談ください。',
        technologies: [
          'VBA',
          'Python',
          'Windowsバッチファイル',
          'AI活用',
          '業務効率化',
        ],
        type: 'service',
      },
      {
        title: '業務効率化ツール',
        description:
          'プリンターからスキャンした図面を自動処理するツール。フォルダをリアルタイムで監視し、書類の用途に応じて選択式で機能を実行。業務効率化UP！＆手配漏れ削減を実現！',
        technologies: [
          '自動処理',
          'リアルタイム監視',
          '効率化',
          '手配漏れ削減',
        ],
        type: 'project',
      },
      {
        title: '社内不良閲覧ツール',
        description:
          '社内で発生した不良をデータベースに入力し、翌日のPC起動時に各人に自動表示するツール。不良の再発防止＆ミスの周知によるトラブルシューティングを実現！',
        technologies: [
          'データベース',
          '自動表示',
          '不良管理',
          '再発防止',
          'トラブルシューティング',
        ],
        type: 'project',
      },
      {
        title: 'その他制作ツール',
        description:
          'CAD図面情報と手配部材情報の数量確認ツール、図面の一括出力ツール、印鑑・スタンプ自動貼り付けツール、ネットワークドライブ自動割り当てツール（PC初期設定用）等、多数のツールを制作しています。',
        technologies: [
          '数量確認',
          '一括出力',
          '自動貼り付け',
          'ネットワーク設定',
          'PC初期設定',
        ],
        type: 'project',
      },
    ],
  },
};

// 基本メンバーデータをインポート（拡張に必要）
import { teamData } from './team';

// メンバー詳細ページ用のメンバーデータを取得する関数
export const getMemberDetailByName = (name: string): TeamMember | undefined => {
  const baseMember = teamData.members.find((member) => member.name === name);
  if (!baseMember) {
    return;
  }

  const extendedData = extendedMemberData[name];
  if (extendedData) {
    return { ...baseMember, ...extendedData };
  }

  return baseMember;
};

// 詳細ページ用のチームデータ（他のメンバーを見る用）
export const teamDetailData = teamData;
