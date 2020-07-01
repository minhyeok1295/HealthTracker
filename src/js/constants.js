export const APP_NAME = 'Health Tracker';

export const ADMIN_ACCOUNT_TYPE = 'admin';
export const USER_ACCOUNT_TYPE = 'user';
export const ACCOUNT_TYPES = {
  admin: ADMIN_ACCOUNT_TYPE,
  user: USER_ACCOUNT_TYPE,
};

export const USERS = {
  useruser: {
    firstName: 'Ben',
    lastName: 'John',
    hash: 'useruser',
    reminders: {
      medicalReminders: [],
      mentalReminders: [],
      physicalReminders: [
        {
          name: 'Go for 30 minute run',
          time: 12,
          note: 'call Jack to check if he wants to come',
        },
        {
          name: 'Go for 30 minute run',
          time: 12,
          note: 'call Jack to check if he wants to come',
        },
      ],
      otherReminders: null,
    },
  },
  adminadmin: { firstName: 'IAmAdmin', lastName: 'John', hash: 'adminadmin' },
};

export const PAGE_ADDRESS = [
  '/overview',
  '/trends',
  '/reminders',
  '/calendar',
  '/check-in',
  '/overview/logWeight',
  '/overview/logWater',
  '/overview/logCalories',
  '/overview/logMood',
  '/overview/logSleep',
  '/overview/logStress',
  '/overview/logMedical',
  '/overview/logSick',
  '/reminders/add',
];

export const LOCATIONS = {
  'loc 1': {
    id: 'loc 1',
    name: "Queen's Park",
    isAvaliable: true,
    address: '111 Wellesley St W, Toronto, ON',
    country: 'Canada',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Looking_down_University_Avenue_Toronto_August_2012.jpg/1200px-Looking_down_University_Avenue_Toronto_August_2012.jpg',
    maxOccupancy: 53,
    currOccupancy: 52,
    description: 'some information about the park',
  },
};

export const PHYSICAL_TIP = [
  'Eat a high protein breakfast',
  'Lower Carbohydrates',
  'Avoid sugary drinks and fruit juice',
  'Drink sufficient water every day',
  'Choose weight-loss-friendly foods',
  'Eat slowly, Chew slowly',
  'Weigh your self every day',
  'Lift weights at least three times per week',
  'Cardiovascular exercise every day',
  'Get good quality of Sleep',
];

export const MENTAL_TIP = [
  'Avoid alcohol, smoking, and drugs',
  'Get enough of sunlight',
  'Do something fun or enjoyable',
  'Build self-confidence',
  'Socialize with others',
  'Ask for help if you need one',
  'Relax and take a break',
  'Exercise may help you get rid of worries',
  'Learn how to deal with Stress',
  'Set goals, describe to yourself what you really want',
  'Start today',
];

export const MOODLIST = [
  { value: 'angry', icon: 'https://image.flaticon.com/icons/svg/3084/3084520.svg' },
  { value: 'sad', icon: 'https://image.flaticon.com/icons/svg/3084/3084540.svg' },
  { value: 'thoughtful', icon: 'https://image.flaticon.com/icons/svg/3084/3084437.svg' },
  { value: 'soso', icon: 'https://image.flaticon.com/icons/svg/3084/3084473.svg' },
  { value: 'happy', icon: 'https://image.flaticon.com/icons/svg/3084/3084424.svg' },
  { value: 'lovely', icon: 'https://image.flaticon.com/icons/svg/3084/3084622.svg' },
];

export const SYMPTOM_OPTION = [
  'Fever or chills',
  'Cough',
  'Difficulty breathing',
  'Fatigue',
  'Muscle or body aches',
  'Headaches',
  'Sore throat',
  'Congestion or runny nose',
  'Nausea or vomiting',
  'Diarrhea',
  'Bluish lips or face',
];
