export const pagesData = {
  '/': {
    title: 'Personal info',
    desc: 'Please provide your name, email address and phone number.',
    nextLink: '/plan',
  },
  '/plan': {
    title: 'Select your plan',
    desc: 'You have the option of monthly or yearly billing.',
    prevLink: '/',
    nextLink: '/addons',
  },
  '/addons': {
    title: 'Pick add-ons',
    desc: 'Add-ons help enhance your gaming experience.',
    prevLink: '/plan',
    nextLink: '/summary',
  },
  '/summary': {
    title: 'Finishing up',
    desc: 'Double-check everything looks OK before confirming.',
    prevLink: '/addons',
  },
};
