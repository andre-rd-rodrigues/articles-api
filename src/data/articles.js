const CATEGORY = {
  tech: 'technology',
  games: 'gaming',
  wellbeing: 'wellbeing',
  finance: 'finance',
  top: 'top',
  recent: 'recent',
  career: 'career',
  all: 'all',
};

const articles = [
  // Tech
  {
    slug: 'transform-your-home-into-a-smart-home-5-ways-to-automate-your-house',
    title:
      'Transform Your Home into a Smart Home: 5 Ways to Automate Your House',
    description:
      'Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house? It might be time to consider automating your home. In this blog post, we&apos;ll give you five ways to transform your home into a smart home, including using smart thermostats, smart lighting, smart appliances, smart security systems, and smart home hubs. Automating your home can make your life easier, save you energy and money, and give you peace of mind. Learn how to get started with home automation today.',
    category: CATEGORY.tech,
    createdAt: '11/25/2022',
    isTopArticle: false,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
    },
    content: {
      html: '<div><h2>Take control of your home</h2><p>Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house? It might be time to consider automating your home.<br /> Home automation refers to the use of technology to control and manage the various systems and devices in your home, such as lighting, heating and cooling, and appliances. Not only can home automation make your life easier and more convenient, it can also help you save energy and money. Here are 5 ways to automate your home!</p</div>',
    },
    writer: 'Andre Rodrigues',
  },

  // Career
  {
    slug: 'navigating-team-conflicts-in-programming-strategies-for-maintaining-mental-well-being',
    title:
      'Navigating Team Conflicts in Programming: Strategies for Maintaining Mental Well-being',
    description:
      'Discover effective strategies for navigating conflicts within a programming team while maintaining mental well-being. Learn the impact of conflicts on mental health and how to overcome it through open communication, active listening, compromise, team building and seeking help when needed.',
    category: CATEGORY.career,
    createdAt: '2022-11-20',
    isTopArticle: false,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },

    writer: 'Andre Rodrigues',
    content: {
      html: '<div><h2>Take control of your home</h2><p>Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house? It might be time to consider automating your home.<br /> Home automation refers to the use of technology to control and manage the various systems and devices in your home, such as lighting, heating and cooling, and appliances. Not only can home automation make your life easier and more convenient, it can also help you save energy and money. Here are 5 ways to automate your home!</p</div>',
    },
  },

  // Finance
  {
    slug: 'passive-income-ideas-for-beginners-how-to-get-started',
    title: 'Passive Income Ideas for Beginners: How to Get Started',
    description:
      'Learn about the different ways to earn passive income as a beginner. From renting out property, to building an online course, to investing in stocks, find the best passive income ideas that align with your skills and resources. Discover how to get started and start earning passive income today!',
    category: CATEGORY.finance,
    createdAt: '2023-01-23',
    isTopArticle: true,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1606191104230-eb69171eaf15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    },
    content: {
      html: '<div><h2>Take control of your home</h2><p>Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house? It might be time to consider automating your home.<br /> Home automation refers to the use of technology to control and manage the various systems and devices in your home, such as lighting, heating and cooling, and appliances. Not only can home automation make your life easier and more convenient, it can also help you save energy and money. Here are 5 ways to automate your home!</p</div>',
    },
    writer: 'Andre Rodrigues',
  },

  // Well-being
  {
    slug: 'breaking-the-cycle-understanding-and-mitigating-the-effects-of-prolonged-screen-time-on-mental-health',
    title:
      'Breaking the Cycle: Understanding and Mitigating the Effects of Prolonged Screen Time on Mental Health',
    description:
      'Discover the negative impact of prolonged screen time on mental health and learn effective strategies to mitigate it, including setting daily limits, taking regular breaks, using blue light filters, practicing good sleep hygiene and staying active.',
    category: CATEGORY.wellbeing,
    createdAt: '2022-12-14',
    isTopArticle: true,
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1555963153-11ff60182d08?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
    },

    writer: 'Andre Rodrigues',
    content: {
      html: '<div><h2>Take control of your home</h2><p>Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house? It might be time to consider automating your home.<br /> Home automation refers to the use of technology to control and manage the various systems and devices in your home, such as lighting, heating and cooling, and appliances. Not only can home automation make your life easier and more convenient, it can also help you save energy and money. Here are 5 ways to automate your home!</p</div>',
    },
  },

  // Gaming
  {
    slug: 'become-a-pro-secrets-to-dominating-in-csgo',
    title: 'Become a Pro: Secrets to Dominating in CS:GO',
    description:
      'Learn how to become a pro in Counter-Strike: Global Offensive (CS:GO) with our insider tips and strategies. From aiming and map knowledge to communication and focus, we cover all the essentials you need to dominate the competition. Improve your gameplay and take your CS:GO skills to the next level with our comprehensive guide. Don&apos;t miss out on the secrets to mastering the game.',
    category: CATEGORY.games,
    createdAt: '2022-12-01',
    isTopArticle: false,
    content: {
      html: '<div><h2>Take control of your home</h2><p>Are you tired of constantly forgetting to turn off the lights or adjust the thermostat when you leave the house? It might be time to consider automating your home.<br /> Home automation refers to the use of technology to control and manage the various systems and devices in your home, such as lighting, heating and cooling, and appliances. Not only can home automation make your life easier and more convenient, it can also help you save energy and money. Here are 5 ways to automate your home!</p</div>',
    },
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1637594439872-44d1b1fe0a0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    },

    writer: 'Andre Rodrigues',
  },
];

module.exports = articles;
