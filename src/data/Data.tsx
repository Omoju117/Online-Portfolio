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
  description: 'グラフィックデザイン・イラストレーションの制作において使用。',
};

// Adobe XD
export const cardInfoAdobeXd: CardInformation = {
  type: 'Tool',
  title: 'Adobe Xd',
  description: 'アプリケーション・Webサイトのデザインにおいて使用。',
};

export const cardInfoAws: CardInformation = {
  type: 'Tool',
  title: 'AWS',
  description:
    '独学で習得中。自家製RESTApiをEBにデプロイし、RDSを利用して運用中。',
};

/* Work */

// 3L museum
export const cardInfo3lMuseum: CardInformation = {
  type: 'Web Media',
  title: '3L museum ↗︎',
  description:
    '幅広い年齢層の人々にアート入門のサポートを提供するWebメディアを運営。サイト設計/プログラミング/デザイン全般/ワークショップ開発を担当。',
};

// Illustration
export const cardInfoIllustration: CardInformation = {
  type: 'Art Work',
  title: 'Illustration',
  description:
    'プライベートでイラストレーション/グラフィックデザインの提供、及び作品制作活動を行う。生涯のライフワーク。',
};

// Application
export const cardInfoTaskList: CardInformation = {
  type: 'Application',
  title: 'D&D TaskList ↗︎',
  description:
    'ドラッグ&ドロップで管理可能なタスクリスト。' +
    ' React+Redux+TypeScript/SpringBoot+MyBatis /AWS(Elastic Beanstalk)',
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
    'AngularとJavaを用いたWebアプリケーションの開発においてフロントとサーバー両方の詳細設計・製造・テストを担当。',
};

/* Books  */
type BooksInfo = {
  no: number;
  title: string;
  purpose: string;
  when: string;
  url: string;
};

export const booksInfoList: BooksInfo[] = [
  {
    no: 1,
    title: 'Java言語で学ぶデザインパターン入門',
    purpose: 'メンテナンス性と拡張性の高い設計を実現するため。',
    when: '2019/04',
    url: 'https://www.amazon.co.jp/%E5%A2%97%E8%A3%9C%E6%94%B9%E8%A8%82%E7%89%88-Java%E8%A8%80%E8%AA%9E%E3%81%A7%E5%AD%A6%E3%81%B6%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%83%91%E3%82%BF%E3%83%BC%E3%83%B3%E5%85%A5%E9%96%80-%E7%B5%90%E5%9F%8E-%E6%B5%A9-ebook/dp/B00I8ATHGW',
  },
  {
    no: 2,
    title: 'Webを支える技術 HTTP,URI,HTML,そしてREST',
    purpose: 'Webがどのように成り立っているかを詳細に理解するため。',
    when: '2019/05',
    url: 'https://www.amazon.co.jp/Web%E3%82%92%E6%94%AF%E3%81%88%E3%82%8B%E6%8A%80%E8%A1%93-HTTP%EF%BC%8CURI%EF%BC%8CHTML%EF%BC%8C%E3%81%9D%E3%81%97%E3%81%A6REST-WEB-PRESS-plus-ebook/dp/B07JK7FZH2',
  },
  {
    no: 3,
    title: 'Spring解体新書',
    purpose: '現場でSpring Bootを使用するにあたり、深く理解したかったため。',
    when: '2019/06',
    url: 'https://www.amazon.co.jp/%E3%80%90%E5%BE%8C%E6%82%94%E3%81%97%E3%81%AA%E3%81%84%E3%81%9F%E3%82%81%E3%81%AE%E5%85%A5%E9%96%80%E6%9B%B8%E3%80%91Spring%E8%A7%A3%E4%BD%93%E6%96%B0%E6%9B%B8-Boot2%E3%81%A7%E5%AE%9F%E9%9A%9B%E3%81%AB%E4%BD%9C%E3%81%A3%E3%81%A6%E5%AD%A6%E3%81%B9%E3%82%8B%EF%BC%81Spring-Security%E3%80%81Spring-JDBC%E3%80%81Spring-MyBatis%E3%81%AA%E3%81%A9%E5%A4%9A%E6%95%B0%E8%A7%A3%E8%AA%AC%EF%BC%81-ebook/dp/B07H6XLXD7',
  },
  {
    no: 4,
    title:
      'リーダブルコード より良いコードを書くためのシンプルで実践的なテクニック',
    purpose:
      '可読性が高いコードを書ける能力を身につけて品質の向上につなげるため。',
    when: '2019/09',
    url: 'https://www.amazon.co.jp/%E3%83%AA%E3%83%BC%E3%83%80%E3%83%96%E3%83%AB%E3%82%B3%E3%83%BC%E3%83%89-%E2%80%95%E3%82%88%E3%82%8A%E8%89%AF%E3%81%84%E3%82%B3%E3%83%BC%E3%83%89%E3%82%92%E6%9B%B8%E3%81%8F%E3%81%9F%E3%82%81%E3%81%AE%E3%82%B7%E3%83%B3%E3%83%97%E3%83%AB%E3%81%A7%E5%AE%9F%E8%B7%B5%E7%9A%84%E3%81%AA%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-Theory-practice-Boswell/dp/4873115655',
  },
  {
    no: 5,
    title: '徹底攻略JavaGold SE8 Gold',
    purpose: 'Javaを深く理解するため。',
    when: '2019/11',
    url: 'https://www.amazon.co.jp/%E5%BE%B9%E5%BA%95%E6%94%BB%E7%95%A5-Java-Gold-%E5%95%8F%E9%A1%8C%E9%9B%86-1Z0-809/dp/4295000035',
  },
  {
    no: 6,
    title: 'JavaScript本格入門 モダンスタイルによる基礎から現場での応用まで',
    purpose: 'JavaScriptを深く理解するため。',
    when: '2020/01',
    url: 'https://www.amazon.co.jp/%E6%94%B9%E8%A8%82%E6%96%B0%E7%89%88JavaScript%E6%9C%AC%E6%A0%BC%E5%85%A5%E9%96%80-%E3%83%A2%E3%83%80%E3%83%B3%E3%82%B9%E3%82%BF%E3%82%A4%E3%83%AB%E3%81%AB%E3%82%88%E3%82%8B%E5%9F%BA%E7%A4%8E%E3%81%8B%E3%82%89%E7%8F%BE%E5%A0%B4%E3%81%A7%E3%81%AE%E5%BF%9C%E7%94%A8%E3%81%BE%E3%81%A7-%E5%B1%B1%E7%94%B0-%E7%A5%A5%E5%AF%9B/dp/477418411X',
  },
  {
    no: 7,
    title: 'JavaScriptコードレシピ集',
    purpose: '現場で自身の能力不足をカバーするためのリファレンスとして。',
    when: '2020/01',
    url: 'https://www.amazon.co.jp/JavaScript-%E3%82%B3%E3%83%BC%E3%83%89%E3%83%AC%E3%82%B7%E3%83%94%E9%9B%86-%E6%B1%A0%E7%94%B0-%E6%B3%B0%E5%BB%B6/dp/4297103680',
  },
  {
    no: 8,
    title: 'Vue.js プロフェッショナルWebプログラミング',
    purpose: 'Vueに興味があったため。',
    when: '2020/03',
    url: 'https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%83%95%E3%82%A7%E3%83%83%E3%82%B7%E3%83%A7%E3%83%8A%E3%83%ABWeb%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0-Vue-js-%E5%B1%B1%E7%94%B0-%E5%85%B8%E6%98%8E/dp/4295200247',
  },
  {
    no: 9,
    title: 'HTML5 & CSS3デザイン きちんと入門',
    purpose:
      '現場で保守性・拡張性の高い画面設計を実現する必要があると感じたため。',
    when: '2020/04',
    url: 'https://www.amazon.co.jp/%E3%81%84%E3%81%A1%E3%81%B0%E3%82%93%E3%82%88%E3%81%8F%E3%82%8F%E3%81%8B%E3%82%8BHTML5-CSS3%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%8D%E3%81%A1%E3%82%93%E3%81%A8%E5%85%A5%E9%96%80-Design-IDEA-%E7%8B%A9%E9%87%8E/dp/4797388544',
  },
  {
    no: 10,
    title: 'はじめてのUIデザイン',
    purpose:
      '自社開発でUI設計を担当した際に、正当な理論に則って設計をするべきだと考えたため。',
    when: '2020/05',
    url: 'https://www.amazon.co.jp/%E3%81%AF%E3%81%98%E3%82%81%E3%81%A6%E3%81%AEUI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-%E6%94%B9%E8%A8%82%E7%89%88-%E6%B1%A0%E7%94%B0-%E6%8B%93%E5%8F%B8-ebook/dp/B087BMJ1Q6',
  },
  {
    no: 11,
    title: 'UIデザインの教科書',
    purpose: '同上。',
    when: '2020/05',
    url: 'https://www.amazon.co.jp/UI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%81%AE%E6%95%99%E7%A7%91%E6%9B%B8%EF%BC%BB%E6%96%B0%E7%89%88%EF%BC%BD-%E3%83%9E%E3%83%AB%E3%83%81%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E6%99%82%E4%BB%A3%E3%81%AE%E3%82%A4%E3%83%B3%E3%82%BF%E3%83%BC%E3%83%95%E3%82%A7%E3%83%BC%E3%82%B9%E8%A8%AD%E8%A8%88-%E5%8E%9F%E7%94%B0-%E7%A7%80%E5%8F%B8/dp/4798155454',
  },
  {
    no: 12,
    title: 'みんなで考え、カイゼンする。UIデザイン',
    purpose: '同上。',
    when: '2020/05',
    url: 'https://www.amazon.co.jp/UI%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3-%E3%81%BF%E3%82%93%E3%81%AA%E3%81%A7%E8%80%83%E3%81%88%E3%80%81%E3%82%AB%E3%82%A4%E3%82%BC%E3%83%B3%E3%81%99%E3%82%8B%E3%80%82-%E6%A0%84%E5%89%8D%E7%94%B0-%E5%8B%9D%E5%A4%AA%E9%83%8E/dp/4844368591',
  },
  {
    no: 13,
    title: '独習Git',
    purpose: 'Gitによるソース管理を深く理解したかったため。',
    when: '2020/09',
    url: 'https://www.amazon.co.jp/%E7%8B%AC%E7%BF%92Git-%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%82%A6%E3%83%9E%E3%83%AA/dp/4798144614',
  },
  {
    no: 14,
    title: 'Angular超入門',
    purpose: '現場でAngularを使用することになったため。',
    when: '2020/10',
    url: 'https://www.amazon.co.jp/Angular%E8%B6%85%E5%85%A5%E9%96%80-%E6%8E%8C%E7%94%B0-%E6%B4%A5%E8%80%B6%E4%B9%83/dp/4798057738',
  },
  {
    no: 15,
    title: 'プログラミングTypeScript',
    purpose: '高いレベルでTypeScriptでの記述ができるようになりたかったため。',
    when: '2020/10',
    url: 'https://www.amazon.co.jp/%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0TypeScript-%E2%80%95%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%AB%E3%81%99%E3%82%8BJavaScript%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-Boris-Cherny/dp/4873119049',
  },
  {
    no: 16,
    title: 'SQL実践入門 高速でわかりやすいクエリの書き方',
    purpose:
      '現場でDBからデータ取得をする際にパフォーマンスを考慮したクエリを記述する必要があると感じたため。',
    when: '2020/10',
    url: 'https://www.amazon.co.jp/SQL%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80%E2%94%80%E2%94%80%E9%AB%98%E9%80%9F%E3%81%A7%E3%82%8F%E3%81%8B%E3%82%8A%E3%82%84%E3%81%99%E3%81%84%E3%82%AF%E3%82%A8%E3%83%AA%E3%81%AE%E6%9B%B8%E3%81%8D%E6%96%B9-WEB-DB-PRESS-plus/dp/4774173010',
  },
  {
    no: 17,
    title: 'エンジニアのための図解思考 再入門講座',
    purpose:
      'バグが発生した際に原因を正確に、効率よく特定する能力を身につける必要があると感じたため。',
    when: '2020/11',
    url: 'https://www.amazon.co.jp/%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%81%AE%E3%81%9F%E3%82%81%E3%81%AE%E5%9B%B3%E8%A7%A3%E6%80%9D%E8%80%83-%E5%86%8D%E5%85%A5%E9%96%80%E8%AC%9B%E5%BA%A7-%E6%83%85%E5%A0%B1%E3%81%AE%E2%80%9C%E6%9C%AC%E8%B3%AA-%E3%82%92%E7%90%86%E8%A7%A3%E3%81%99%E3%82%8B%E3%81%9F%E3%82%81%E3%81%AE%E5%AE%9F%E8%B7%B5%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF-%E9%96%8B%E7%B1%B3/dp/4798122750',
  },
  {
    no: 18,
    title: 'SpringBoot2 応用 AWSへのデプロイまで',
    purpose: 'エンジニアとしてAWSを活用できる能力を身につけたかったため。',
    when: '2021/01',
    url: 'https://www.amazon.co.jp/Spring-Boot-%E5%BF%9C%E7%94%A8-Swagger-UI%E3%80%81MyBatis%E3%81%8B%E3%82%89AWS%E3%81%B8%E3%81%AE%E3%83%87%E3%83%97%E3%83%AD%E3%82%A4%E3%81%BE%E3%81%A7-ebook/dp/B08RL67N9S',
  },
  {
    no: 19,
    title: 'AWSの仕組みと技術がしっかりわかる教科書',
    purpose: '同上。',
    when: '2021/01',
    url: 'https://www.amazon.co.jp/%E5%9B%B3%E8%A7%A3%E5%8D%B3%E6%88%A6%E5%8A%9B-Amazon-Web-Services%E3%81%AE%E3%81%97%E3%81%8F%E3%81%BF%E3%81%A8%E6%8A%80%E8%A1%93%E3%81%8C%E3%81%93%E3%82%8C1%E5%86%8A%E3%81%A7%E3%81%97%E3%81%A3%E3%81%8B%E3%82%8A%E3%82%8F%E3%81%8B%E3%82%8B%E6%95%99%E7%A7%91%E6%9B%B8-%E5%B0%8F%E7%AC%A0%E5%8E%9F/dp/4297108895',
  },
  {
    no: 20,
    title: 'ハンズオンNode.js',
    purpose:
      'Javaだけでなく別のモダンな言語でもサーバーサイドの構築が可能になる必要性があると感じたため。',
    when: '2021/04',
    url: 'https://www.amazon.co.jp/%E3%83%8F%E3%83%B3%E3%82%BA%E3%82%AA%E3%83%B3Node-js-%E4%BB%8A%E6%9D%91-%E8%AC%99%E5%A3%AB/dp/4873119235',
  },
  {
    no: 21,
    title:
      'りあクト！ TypeScriptで始めるつらくないReact開発【Ⅰ. 言語・環境編】',
    purpose:
      'Reactを深く理解して現場で即戦力として対応できる能力を身につけたかったため。',
    when: '2021/05',
    url: 'https://booth.pm/ja/items/2368045',
  },
  {
    no: 22,
    title: 'りあクト！ TypeScriptで始めるつらくないReact開発【Ⅱ. React基礎編】',
    purpose: '同上。',
    when: '2021/05',
    url: 'https://booth.pm/ja/items/2368019',
  },
  {
    no: 23,
    title: 'りあクト！ TypeScriptで始めるつらくないReact開発【Ⅲ. React応用編】',
    purpose: '同上。',
    when: '2021/05',
    url: 'https://booth.pm/ja/items/2367992',
  },
  {
    no: 24,
    title: 'webpack実践入門',
    purpose:
      'フロントサイドのパフォーマンス向上を考慮する際にwebpackの知識は不可欠だと考えたため。',
    when: '2021/06',
    url: 'https://www.amazon.co.jp/webpack-%E5%AE%9F%E8%B7%B5%E5%85%A5%E9%96%80-webpack%E3%81%AE%E5%9F%BA%E7%A4%8E%E3%82%92%E3%81%97%E3%81%A3%E3%81%8B%E3%82%8A%E7%90%86%E8%A7%A3%E3%81%97%E3%81%A6%E4%BD%BF%E3%81%84%E3%81%93%E3%81%AA%E3%81%99-soarflat-ebook/dp/B07X9H8JZZ',
  },
];
