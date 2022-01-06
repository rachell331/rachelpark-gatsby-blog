module.exports = {
  title: `Rachel's Dev Lab 🧪`,
  description: `레이첼의 개발 실험실 🧪`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://www.zoomkoding.com`,
  ogImage: `/intro.001.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `박보라`,
    bio: {
      role: `개발자`,
      description: ['꾸준한 성장을 추구하는'],
      thumbnail: `rachel.png`, // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/RachelParkBlog`, // `https://github.com/zoomKoding`,
      linkedIn: ``, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `rachelpark.developer@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2021.04 ~ 2021. 09',
        activity: 'UI/UX Design Web Publisher & Frontend Developer Course',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.10 ~ 2021. 12',
        activity: 'Wecode Intensive Coding Bootcamp',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.12 ~ 2021. 12',
        activity: '스타트업 인턴십 진행 MVP 개발 참여',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.12 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '파노믹스(Panomix) MVP 개발',
        description:'페이스북, 구글 Analytics 등 마케팅 데이터를 종합 분석하며, 데이터를 자동화, 시각화하여 퍼포먼스 마케팅 대행사입니다.',
        techStack: ['React', 'Redux', 'Styled-Components', 'AWS(Cognito, Amplify)'],
        thumbnailUrl: 'panomix.png',  
        links: {
          post: '/internship',
          github: '',
          demo: '',
        },
      },
      {
        title: 'Prep 웹 개발',
        description:'액티비티를 소개, 공유, 판매하는 플랫폼 웹 서비스. 판매부터 추천기능, 원하는 액티비티 저장 및 참여 후 후기를 남길 수 있는 등 다양한 서비스를 제공합니다.',
        techStack: ['React', 'React Hooks', 'Styled-Components', 'AWS(S3)' ],
        thumbnailUrl: 'prep.png',  
        links: {
          post: '/prep-project',
          github: 'https://github.com/wecode-bootcamp-korea/26-2nd-Prep-frontend',
          demo: 'https://drive.google.com/file/d/1WS_sMDCiSXfQGuiVfNW02JQXhA6RRGI5/view?usp=sharing',
        },
      },
      {
        title: 'WASH Korea 웹 개발',
        description:'기본적인 커머스 사이트로서 제품을 판매를 위한 다양한 서비스를 제공하고 있는 웹 사이트를 선정하여 프로젝트를 진행하였습니다. 개발은 초기 세팅부터 전부 직접 구현했으며, 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.',
        techStack: ['React', 'Sass', 'AWS(EC2)'],
        thumbnailUrl: 'wash.png',  
        links: {
          post: '/wash-korea-project',
          github: 'https://github.com/wecode-bootcamp-korea/26-1st-WASH-Korea-frontend',
          demo: 'https://drive.google.com/file/d/1BbsvlZo2QaIZrlAps9iEAxLlXMc7TCYO/view',
        },
      },
    ],
  },
};
