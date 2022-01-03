module.exports = {
  title: `Rachel's Dev Lab `,
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
      thumbnail: 'rachel.png', // Path to the image in the 'asset' folder
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
        date: '2021.12 ~',
        activity: '개인 블로그 개발 및 운영',
        links: {
          post: '',
          github: 'https://github.com/RachelParkBlog/zoomkoding-gatsby-blog',
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
        title: '워시 코리아 웹 개발',
        description:'기본적인 커머스 사이트로서 제품을 판매를 위한 다양한 서비스를 제공하고 있는 웹 사이트를 선정하여 프로젝트를 진행하였습니다. 개발은 초기 세팅부터 전부 직접 구현했으며, 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.',
        techStack: ['React', 'Sass', 'AWS(EC2)'],
        thumbnailUrl: 'warsh_korea.gif',  
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/wecode-bootcamp-korea/26-1st-WASH-Korea-frontend',
          demo: 'https://drive.google.com/file/d/1BbsvlZo2QaIZrlAps9iEAxLlXMc7TCYO/view',
        },
      },
    ],
  },
};
