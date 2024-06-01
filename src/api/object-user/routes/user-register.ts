

export default {
  routes: [
    {
      method: 'POST',
      path: '/user-register',
      handler: 'user-register.register',
      config: {
        auth: false
      },
    },
    {
      method: 'GET',
      path: '/user-profile',
      handler: 'user-register.profile',
      config: {
        middlewares: ['global::user-middleware'],
      },
    },
  ],
};