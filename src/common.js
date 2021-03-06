export default {
  sidebarMenu: [
    {accountType: 'ALL', accountStatus: 'ALL', description: 'Dashboard', icon: 'fa fa-tachometer', path: 'dashboard', flag: false, subMenu: null},
    {accountType: 'ALL', accountStatus: 'ALL', description: 'My Visited Places', icon: 'fa fa-map-marker', path: 'places', flag: false, subMenu: null},
    {accountType: 'ALL', accountStatus: 'ALL', description: 'My Temperature', icon: 'fa fa-chart-line', path: 'temperature/p', flag: false, subMenu: null},
    {accountType: 'ALL', accountStatus: 'ALL', description: 'My Rides', icon: 'fa fa-car', path: 'rides/p', flag: false, subMenu: null},
    {accountType: 'AGENCY_LEVEL_1', accountStatus: 'ALL', description: 'Patients', icon: 'fa fa-users', path: 'patients', flag: false, subMenu: null},
    {accountType: 'AGENCY_LEVEL_1', accountStatus: 'ALL', description: 'Tracing', icon: 'fa fa-sitemap', path: 'tracing', flag: false, subMenu: null},
    {accountType: 'AGENCY_LEVEL_1', accountStatus: 'ALL', description: 'Temperature Summary', icon: 'fa fa-chart-line', path: 'temperature', flag: false, subMenu: null},
    {accountType: 'ADMIN', accountStatus: 'ALL', description: 'Accounts', icon: 'fa fa-users', path: 'admin/accounts', flag: false, subMenu: null}
  ],
  profileMenu: [{
    title: 'My Profile',
    icon: 'fa fa-cog',
    route: '/profile'
  }, {
    title: 'Invite Friends',
    icon: 'fa fa-users',
    route: '/referrals'
  }],
  APP_NAME: 'BirdsEye',
  APP_NAME_HTML: 'BirdsEye',
  APP_EMAIL: 'support@increment.ltd',
  COMPANY: 'Increment Technologies',
  COMPANY_URL: 'http://www.increment.ltd',
  COPYRIGHT: 'BirdsEye ' + new Date().getFullYear(),
  USER_TYPE: [{
    title: 'USER'
  }, {
    title: 'AGENCY'
  }],
  plan: false,
  header: ['status', 'notification'], // 'messenger', '',
  settingsMenu: [
    {title: 'Profile', type: 'profile', allowed: ['cellular_number', 'address', 'sex', 'birth_date']},
    {title: 'Account', type: 'account', allowed: []}
  ],
  referral: {
    message: 'and let\'s be one in fighting COVID-19. ',
    emailMessage: '.They can trace and have an birdseye view for COVID-19. Let\'s spread the good news!'
  },
  socialMedia: {
    facebook: 'birdseyeph'
  },
  pusher: {
    channel: 'birdseye',
    notifications: 'Notifications',
    messages: 'Message',
    validation: 'Validation'
  },
  vehicleTypes: [{
    label: 'Bus',
    value: 'bus'
  }, {
    label: 'Plane',
    value: 'plane'
  }, {
    label: 'Jeepney',
    value: 'jeep'
  }, {
    label: 'Private Car',
    value: 'private_car'
  }, {
    label: 'Van',
    value: 'van'
  }, {
    label: 'Motorcycle',
    value: 'motorcycle'
  }]
}
