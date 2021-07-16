// ----カードに記述する情報の型
export type CardInformation = {
  type: string;
  title: string;
  description: string;
};

/* Skill */

// React
export const cardInfoReact: CardInformation = {
  type: 'Programming Language',
  title: 'React',
  description:
    '社内開発、及び当ポートフォリオや自家製アプリケーションで使用。今後最も習熟していきたいモダンJSフレームワーク。',
};

// TypeScript
export const cardInfoTypeScript: CardInformation = {
  type: 'Programming Language',
  title: 'TypeScript',
  description:
    '大手建設会社向けWebアプリケーションの開発において約1年間使用。また、当ポートフォリオや自家製アプリケーションにも使用。最も好きな言語。',
};

// Java
export const cardInfoJava: CardInformation = {
  type: 'Programming Language',
  title: 'Java',
  description:
    '開発エンジニアとして仕事を始めてから2年半使用している言語。Oracleが提供している資格であるJava Goldを2020年9月に取得。',
};

// Angular
export const cardInfoAngular: CardInformation = {
  type: 'Programming Language',
  title: 'Angular',
  description: '大手建設会社向けWebアプリケーションの開発において約1年間使用。',
};

// Adobe Photoshop
export const cardInfoPhotoshop: CardInformation = {
  type: 'Tool',
  title: 'Photoshop',
  description: 'デザイン・イラストレーションの制作において使用。',
};

// Adobe XD
export const cardInfoAdobeXd: CardInformation = {
  type: 'Tool',
  title: 'Adobe Xd',
  description: 'アプリケーション・Webサイトのデザインにおいて使用。',
};

/* Work */

// 3L museum
export const cardInfo3lMuseum: CardInformation = {
  type: 'Web Media',
  title: '3L museum ↗︎',
  description:
    '幅広い年齢層の人々にアート入門のサポートを提供するWebメディアを運営。サイト設計/プログラミング/デザイン/ワークショップ開発を担当。',
};

// Illustration
export const cardInfoIllustration: CardInformation = {
  type: 'Art Work',
  title: 'Illustration',
  description:
    'プライベートでイラストレーションの提供、及び作品制作活動をしています。生涯のライフワーク。',
};

// Application
export const cardInfoTaskList: CardInformation = {
  type: 'Application',
  title: 'D&D TaskList ↗︎',
  description:
    'ドラッグ&ドロップで管理可能なタスクリスト。' +
    ' React + TypeScript/SpringBoot + MyBatis/AWS(EC2)',
};

/* About */

// ----経歴情報の型
export type CareerDescription = {
  when: string;
  careerEvent: string;
  description: string;
};

export const graduateSeijo: CareerDescription = {
  when: '2018/03/31',
  careerEvent: '成城大学文芸学部卒業',
  description:
    '4年間芸術について専攻した大学を卒業。その後、横浜市の公務員試験を受験するために就職浪人する。',
};

export const joinedNicCo: CareerDescription = {
  when: '2019/01/01 ~',
  careerEvent: 'エヌアイシィ株式会社入社',
  description:
    '公務員試験を経て自分のキャリアを見つめ直し、Javaエンジニアとして現職に入社。',
};

export const developedCreditCardSystem: CareerDescription = {
  when: '2019/04/01 ~ 2020/09/30',
  careerEvent: 'クレジットカードシステムの開発',
  description:
    'Javaエンジニアとしてサーバーサイドの開発に詳細設計・製造・テストのポジションで参画。',
};

export const inHouseDevelopment: CareerDescription = {
  when: '2020/04 ~ 2020/06',
  careerEvent: '自社Webアプリの開発',
  description:
    '社内で開発しているReact製のWebアプリケーションの開発とUIの改善を行う。',
};

export const developedConstructionSystem: CareerDescription = {
  when: '2020/10/01 ~ ',
  careerEvent: '建設会社用Webシステムの開発',
  description:
    'AngularとJavaを用いたWebアプリケーションの開発においてフロントとサーバー両方の製造・テストを担当。',
};

/* Books  */
type BooksInfo = {
  no: number;
  title: string;
  purpose: string;
  when: string;
};

export const booksInfoList: BooksInfo[] = [
  {
    no: 1,
    title: 'Java言語で学ぶデザインパターン入門',
    purpose: 'メンテナンス性と拡張性の高い設計を実現するため。',
    when: '2019/04',
  },
  {
    no: 2,
    title: 'Webを支える技術 HTTP,URI,HTML,そしてREST',
    purpose: 'Webがどのように成り立っているかを詳細に理解するため。',
    when: '2019/05',
  },
  {
    no: 3,
    title: 'Spring解体新書',
    purpose: '現場でSpring Bootを使用するにあたり、深く理解したかったため。',
    when: '2019/06',
  },
  {
    no: 4,
    title:
      'リーダブルコード より良いコードを書くためのシンプルで実践的なテクニック',
    purpose:
      '可読性が高いコードを書ける能力を身につけて品質の向上につなげるため。',
    when: '2019/09',
  },
  {
    no: 5,
    title: '徹底攻略JavaGold SE8 Gold',
    purpose: 'Javaを深く理解するため。',
    when: '2019/11',
  },
  {
    no: 6,
    title: 'JavaScript本格入門 モダンスタイルによる基礎から現場での応用まで',
    purpose: 'JavaScriptを深く理解するため。',
    when: '2020/01',
  },
  {
    no: 7,
    title: 'JavaScriptコードレシピ集',
    purpose: '現場で自身の能力不足をカバーするためのリファレンスとして。',
    when: '2020/01',
  },
  {
    no: 8,
    title: 'Vue.js プロフェッショナルWebプログラミング',
    purpose: 'Vueに興味があったため。',
    when: '2020/03',
  },
  {
    no: 9,
    title: 'HTML5 & CSS3デザイン きちんと入門',
    purpose:
      '現場で保守性・拡張性の高い画面設計を実現する必要があると感じたため。',
    when: '2020/04',
  },
  {
    no: 10,
    title: 'はじめてのUIデザイン',
    purpose:
      '自社開発でUI設計を担当した際に、正当な理論に則って設計をするべきだと考えたため。',
    when: '2020/05',
  },
  {
    no: 11,
    title: 'UIデザインの教科書',
    purpose: '同上。',
    when: '2020/05',
  },
  {
    no: 12,
    title: 'みんなで考え、カイゼンする。UIデザイン',
    purpose: '同上。',
    when: '2020/05',
  },
  {
    no: 13,
    title: '独習Git',
    purpose: 'Gitによるソース管理を深く理解したかったため。',
    when: '2020/09',
  },
  {
    no: 14,
    title: 'Angular超入門',
    purpose: '現場でAngularを使用することになったため。',
    when: '2020/10',
  },
  {
    no: 15,
    title: 'プログラミングTypeScript',
    purpose: '高いレベルでTypeScriptでの記述ができるようになりたかったため。',
    when: '2020/10',
  },
  {
    no: 16,
    title: 'SQL実践入門 高速でわかりやすいクエリの書き方',
    purpose:
      '現場でDBからデータ取得をする際にパフォーマンスを考慮したクエリを記述する必要があると感じたため。',
    when: '2020/10',
  },
  {
    no: 17,
    title: 'エンジニアのための図解思考 再入門講座',
    purpose:
      'バグが発生した際に原因を正確に、効率よく特定する能力を身につける必要があると感じたため。',
    when: '2020/11',
  },
  {
    no: 18,
    title: 'SpringBoot2 応用 AWSへのデプロイまで',
    purpose: 'エンジニアとしてAWSを活用できる能力を身につけたかったため。',
    when: '2021/01',
  },
  {
    no: 19,
    title: 'AWSの仕組みと技術がしっかりわかる教科書',
    purpose: '同上。',
    when: '2021/01',
  },
  {
    no: 20,
    title: 'ハンズオンNode.js',
    purpose:
      'Javaだけでなく別のモダンな言語でもサーバーサイドの構築が可能になる必要性があると感じたため。',
    when: '2021/04',
  },
  {
    no: 21,
    title:
      'りあクト！ TypeScriptで始めるつらくないReact開発【Ⅰ. 言語・環境編】',
    purpose:
      'Reactを深く理解して現場で即戦力として対応できる能力を身につけたかったため。',
    when: '2021/05',
  },
  {
    no: 22,
    title: 'りあクト！ TypeScriptで始めるつらくないReact開発【Ⅱ. React基礎編】',
    purpose: '同上。',
    when: '2021/05',
  },
  {
    no: 23,
    title: 'りあクト！ TypeScriptで始めるつらくないReact開発【Ⅲ. React応用編】',
    purpose: '同上。',
    when: '2021/05',
  },
  {
    no: 24,
    title: 'webpack実践入門',
    purpose:
      'フロントサイドのパフォーマンス向上を考慮する際にwebpackの知識は不可欠だと考えたため。',
    when: '2021/06',
  },
];
