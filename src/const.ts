export const menu: Record<string, { title: string; icon: string }> = {
  info: {
    title: 'Contacts',
    icon: './icons/info.svg',
  },
  about: {
    title: 'About',
    icon: './icons/about.svg',
  },
  skills: {
    title: 'Tech Stack',
    icon: './icons/gear.svg',
  },
  examples: {
    title: 'Examples',
    icon: './icons/slider.svg',
  },
  exp: {
    title: 'Experience',
    icon: './icons/exp.svg',
  },
  edu: {
    title: 'Education',
    icon: './icons/edu.svg',
  },
  print: {
    title: 'Print',
    icon: './icons/print.svg',
  },
}

export const contacts = [
  {
    icon: './icons/email.svg',
    href: 'mailto:mrHoft@ya.ru',
    title: 'mrHoft@ya.ru',
  },
  {
    icon: './icons/telegram.svg',
    href: 'https://t.me/mrHoft',
    title: '@mrHoft',
  },
  {
    icon: './icons/discord.svg',
    href: 'https://discord.gg/mr.hoft',
    title: 'mr.hoft',
  },
  {
    icon: './icons/github.svg',
    href: 'https://github.com/mrHoft',
    title: 'mrHoft',
  },
]

type TExp = {
  period: string
  title: string
  desc?: string
  href?: string
  projects: {
    title: string
    desc?: string
    href: string
  }[]
}

export const exp: TExp[] = [
  {
    period: '2025',
    title: 'RSS React 2025Q1',
    href: 'https://rs.school/',
    projects: [
      {
        title: 'Restman',
        href: 'https://restman-app.vercel.app/',
        desc: 'React, Next',
      },
      {
        title: 'Monkey Wrench characters',
        href: 'http://195.133.52.167:3081/',
        desc: 'TS, React, SSR, ORM',
      },
    ],
  },
  {
    period: '2024 - 2025',
    title: 'Cavex',
    projects: [
      {
        title: 'Cavex CRM',
        desc: 'Turborepo, Express, Postgresql, Vite, React, PWA',
        href: 'https://app.nobey.ru/',
      },
    ],
  },
  {
    period: '2023 - 2025',
    title: 'European University in St. Petersburg',
    href: 'https://eusp.org/',
    projects: [
      {
        title: '"Прожито" project',
        desc: 'Turborepo, Next, React',
        href: 'https://prozhito.org/',
      },
      {
        title: '"Прожито" archive',
        desc: 'Turborepo, Next, React',
        href: 'https://archive.prozhito.org/',
      },
    ],
  },
  {
    period: '2023 - 2024',
    title: 'RSS Frontend JS 2023Q4',
    href: 'https://rs.school/',
    projects: [
      {
        title: 'Nonograms game',
        href: 'https://github.com/mrHoft/wrenched',
        desc: 'Webpack, templator, canvas, core js',
      },
      {
        title: 'Magic seeds',
        href: 'https://magic-seeds.netlify.app/',
        desc: 'Vite, React, Mobx',
      },
      {
        title: 'Puzzle',
        href: 'https://github.com/mrHoft/puzzle',
        desc: 'Vite, TS, MVC',
      },
      {
        title: 'Fun chat',
        href: 'https://rolling-scopes-school.github.io/mrhoft-JSFE2023Q4/fun-chat/',
        desc: 'Vite, TS, MVC, Websocket, custom parser',
      },
      {
        title: 'Async race',
        href: 'https://github.com/mrHoft/RSSchool/tree/main/packages/async-race',
        desc: 'Vite, TS, MVC, Websocket, custom parser',
      },
      {
        title: 'Coffee house',
        href: 'https://rolling-scopes-school.github.io/mrhoft-JSFE2023Q4/coffee-house/',
        desc: 'layout from figma project',
      },
      {
        title: 'World news',
        href: 'https://rolling-scopes-school.github.io/mrhoft-JSFE2023Q4/news-api/',
        desc: 'Webpack, TS, MVC',
      },
      {
        title: 'Hangman game',
        href: 'https://rolling-scopes-school.github.io/mrhoft-JSFE2023Q4/hangman/',
        desc: 'custom templator, core js',
      },
    ],
  },
  {
    period: '2022 - 2023',
    title: 'Y.Practicum',
    desc: 'Middle frontend-developer',
    href: 'https://practicum.yandex.ru/',
    projects: [
      {
        title: 'web-messenger',
        desc: 'TS, Templator, MVC, HOC, Websocket, Webpack, Docker',
        href: 'https://github.com/mrHoft/pet-chat',
      },
      {
        title: 'Fast Paws game',
        desc: 'TS, React, Redux, OAuth, SSR, Node, Express, Postgres, Proxy, Helmet, Lerna, Vite, Nginx, Docker, Compose',
        href: 'https://github.com/fastPaws-game/fastPaws',
      },
    ],
  },
]

type TEdu = { title: string; href?: string; course?: string; desc?: string }

export const edu: TEdu[] = [
  {
    title: 'RSSchool',
    href: 'https://app.rs.school/certificate/7d8czm6m',
    course: 'NodeJS 2025Q2',
  },
  {
    title: 'RSSchool',
    href: 'https://app.rs.school/certificate/m2svb7rr',
    course: 'React 2025Q1',
  },
  {
    title: 'RSSchool',
    href: 'https://app.rs.school/certificate/nehax0ao',
    course: 'Frontend 2023Q4',
  },
  {
    title: 'Y.Practicum',
    href: 'https://drive.google.com/file/d/1LhYPyJ304XXBK46uxsqkpT5WMUCzunlK/view',
    course: 'Middle frontend-developer',
  },
  {
    title: 'PSKhK UT-1',
    desc: 'The “programmer” certificate was received along with a diploma of a geodesist at the initiative of a computer science teacher for winning Olympiads.',
  },
  {
    title: 'Self-development',
    desc: 'W3Schools, freecodecamp.org, codewars.com, learn.javascript, javascript.info and other. My hand book is MDN Web Docs.',
  },
]

export const lang = ['Russian (native)', 'English (B1)']

export const skills = [
  {
    icon: './icons/html.svg',
    stack: ['HTML5'],
    value: 85,
  },
  {
    icon: './icons/css3.svg',
    stack: ['CSS3', 'SCSS', 'CSS in JS'],
    value: 90,
  },
  {
    icon: './icons/js.svg',
    stack: ['JavaScript', 'TypeScript'],
    value: 80,
  },
  {
    icon: './icons/node.svg',
    stack: ['Node.js', 'Express.js', 'Deno'],
    value: 75,
  },
  {
    icon: './icons/react.svg',
    stack: ['React', 'Redux', 'Next'],
    value: 90,
  },
  {
    icon: './icons/vue.svg',
    stack: ['Vue', 'Nuxt'],
    value: 60,
  },
  {
    icon: './icons/angular.svg',
    stack: ['Angular'],
    value: 60,
  },
  {
    icon: './icons/redux.svg',
    stack: ['Redux', 'MobX'],
    value: 80,
  },
  {
    icon: './icons/game.svg',
    stack: ['Three.js', 'Pixi.js', 'Spine.js'],
    value: 75,
  },
  {
    icon: './icons/webpack.svg',
    stack: ['Webpack', 'Rollup', 'Vite'],
    value: 85,
  },
  {
    icon: './icons/test.svg',
    stack: ['Jest', 'Vitest'],
    value: 60,
  },
  {
    icon: './icons/sql.svg',
    stack: ['Postgres', 'TypeORM', 'Strapi'],
    value: 60,
  },
  {
    icon: './icons/docker.svg',
    stack: ['Docker', 'Compose'],
    value: 75,
  },
  {
    icon: './icons/linux.svg',
    stack: ['Unix systems', 'Nginx'],
    value: 75,
  },
  {
    icon: './icons/cloud.svg',
    stack: ['aws'],
    value: 50,
  },
  {
    icon: './icons/llm.svg',
    stack: ['completion', 'generate'],
    value: 50,
  },
]

type TProject = {
  id: number
  title: string
  src: string
  left?: string
  right?: string
  href: string
}

export const projects: TProject[] = [
  {
    id: 1,
    title: 'Wrenched',
    src: './projects/wrenched.jpg',
    href: 'https://mrhoft.github.io/wrenched/',
    left: 'Nonograms game',
  },
  {
    id: 2,
    title: 'Cavex CRM',
    src: './projects/cavex.jpg',
    right:
      'Lightweight and fast cross-platform CRM: Production, Stock, Defects, Repairs, Returns, Catalog, Sales, Orders, Bids, Shipments, Accounting, Management.',
    href: 'https://app.daytec.ru',
  },
  {
    id: 3,
    title: 'Prozhito',
    src: './projects/prozhito.jpg',
    href: 'https://prozhito.org/',
    left: 'A project on documentary heritage and public archiving.',
  },
  {
    id: 4,
    title: 'Greet card',
    src: './projects/greetcard.jpg',
    href: 'https://greet-card.vercel.app/',
    right: 'A greeting card with a message and an interactive animation.',
  },
  {
    id: 5,
    title: 'Medley world',
    src: './projects/medley.jpg',
    href: 'https://medley.deno.dev/',
    left: 'Cross-platform online game.',
  },
]
