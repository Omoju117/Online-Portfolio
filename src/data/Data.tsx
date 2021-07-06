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
    '幅広い年齢層の人々にアート入門のサポートを提供するWebメディアを運営。その中でサイトデザイン、アートワークショップ開発を担当。',
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
  title: 'Drag & Drop_ TaskList ↗︎',
  description:
    'ドラッグアンドドロップで管理可能なタスクリスト。React + TypeScript製。',
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
