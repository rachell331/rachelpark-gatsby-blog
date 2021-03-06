module.exports = {
  title: `Rachel's Dev Lab ๐งช`,
  description: `๋ ์ด์ฒผ์ ๊ฐ๋ฐ ์คํ์ค ๐งช`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://rachelparkblog.netlify.app/`,
  ogImage: `/intro.001.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `๋ฐ๋ณด๋ผ`,
    bio: {
      role: `๊ฐ๋ฐ์`,
      description: ['๊พธ์คํ ์ฑ์ฅ์ ์ถ๊ตฌํ๋'],
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
      // ===== ๐ซ Don't erase this sample (์ฌ๊ธฐ ์ง์ฐ์ง ๋ง์ธ์!) =====
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
        activity: '์คํํธ์ ์ธํด์ญ ์งํ MVP ๊ฐ๋ฐ ์ฐธ์ฌ',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.12 ~',
        activity: '๊ฐ์ธ ๋ธ๋ก๊ทธ ๊ฐ๋ฐ ๋ฐ ์ด์',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== ๐ซ Don't erase this sample (์ฌ๊ธฐ ์ง์ฐ์ง ๋ง์ธ์!)  =====
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
        title: 'ํ๋ธ๋ฏน์ค(Panomix) MVP ๊ฐ๋ฐ',
        description:
          'ํ์ด์ค๋ถ, ๊ตฌ๊ธ Analytics ๋ฑ ๋ง์ผํ ๋ฐ์ดํฐ๋ฅผ ์ขํฉ ๋ถ์ํ๋ฉฐ, ๋ฐ์ดํฐ๋ฅผ ์๋ํ, ์๊ฐํํ์ฌ ํผํฌ๋จผ์ค ๋ง์ผํ ๋ํ์ฌ์๋๋ค.',
        techStack: ['React', 'Redux', 'Styled-Components', 'AWS(Cognito, Amplify)'],
        thumbnailUrl: 'panomix.png',
        links: {
          post: '/internship',
          github: '',
          demo: '',
        },
      },
      {
        title: 'Prep ์น ๊ฐ๋ฐ',
        description:
          '์กํฐ๋นํฐ๋ฅผ ์๊ฐ, ๊ณต์ , ํ๋งคํ๋ ํ๋ซํผ ์น ์๋น์ค. ํ๋งค๋ถํฐ ์ถ์ฒ๊ธฐ๋ฅ, ์ํ๋ ์กํฐ๋นํฐ ์ ์ฅ ๋ฐ ์ฐธ์ฌ ํ ํ๊ธฐ๋ฅผ ๋จ๊ธธ ์ ์๋ ๋ฑ ๋ค์ํ ์๋น์ค๋ฅผ ์ ๊ณตํฉ๋๋ค.',
        techStack: ['React', 'React Hooks', 'Styled-Components', 'AWS(S3)'],
        thumbnailUrl: 'prep.png',
        links: {
          post: '/prep-project',
          github: 'https://github.com/wecode-bootcamp-korea/26-2nd-Prep-frontend',
          demo:
            'https://drive.google.com/file/d/1WS_sMDCiSXfQGuiVfNW02JQXhA6RRGI5/view?usp=sharing',
        },
      },
      {
        title: 'WASH Korea ์น ๊ฐ๋ฐ',
        description:
          '๊ธฐ๋ณธ์ ์ธ ์ปค๋จธ์ค ์ฌ์ดํธ๋ก์ ์ ํ์ ํ๋งค๋ฅผ ์ํ ๋ค์ํ ์๋น์ค๋ฅผ ์ ๊ณตํ๊ณ  ์๋ ์น ์ฌ์ดํธ๋ฅผ ์ ์ ํ์ฌ ํ๋ก์ ํธ๋ฅผ ์งํํ์์ต๋๋ค. ๊ฐ๋ฐ์ ์ด๊ธฐ ์ธํ๋ถํฐ ์ ๋ถ ์ง์  ๊ตฌํํ์ผ๋ฉฐ, ์ค์  ์ฌ์ฉํ  ์ ์๋ ์๋น์ค ์์ค์ผ๋ก ๊ฐ๋ฐํ ๊ฒ์๋๋ค.',
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
