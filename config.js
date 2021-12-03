// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Jaron',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '4aeeeb887c34d6a85375058dca3e64aa',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '33.647036',
  defaultLongitude: '-112.051005',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://mail.google.com/',
    },
    {
      id: '3',
      name: 'Airtable',
      icon: 'database',
      link: 'https://airtable.com',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-cart',
      link: 'https://amazon.com',
    },
    {
      id: '5',
      name: 'Reddit',
      icon: 'glasses',
      link: 'https://reddit.com',
    },
    {
      id: '6',
      name: 'YouTube',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'film',
  secondListIcon: 'download',

  // Links
  lists: {
    firstList: [
      {
        name: 'Plex',
        link: 'https://app.plex.tv/desktop',
      },
      {
        name: 'Tautulli',
        link: 'https://leapy-tautulli.cp10.cloudboxes.io/',
      },
      {
        name: 'Overseer',
        link: 'https://leapy-overseerr.cp10.cloudboxes.io/',
      },
      {
        name: 'Radarr',
        link: 'https://leapy-radarr.cp10.cloudboxes.io/',
      },
      {
        name: 'Sonarr',
        link: 'https://leapy-sonarr.cp10.cloudboxes.io/',
      },
    ],
    secondList: [
      {
        name: 'Cloudboxes.io',
        link: 'https://cloudboxes.io/dashboard',
      },
      {
        name: 'qBittorrent',
        link: 'http://leapy-qbittorrent.cp10.cloudboxes.io/',
      },
      {
        name: 'BTN',
        link: 'https://broadcasthe.net/',
      },
      {
        name: 'PTP',
        link: 'https://passthepopcorn.me/',
      },
      {
        name: 'AB',
        link: 'https://animebytes.tv/',
      },
    ],
  },
};
