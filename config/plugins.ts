export default () => ({
  documentation: {
    enabled: true,
    config: {
      openapi: '3.0.0',
      info: {
        version: '1.0.1',
        title: 'SUMMER SCHOOL DOCUMENTATION',
        description: '',
        termsOfService: 'YOUR_TERMS_OF_SERVICE_URL',
        // contact: {
        //   name: 'TEAM',
        //   email: 'contact-email@something.io',
        //   url: 'mywebsite.io'
        // },
        license: {
          name: 'Apache 2.0',
          url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        },
      },
      servers: [
        {
          url: "http://localhost:1337/api",
          description: "Development server"
        },
        {
          url: "https://summerschool.fashional.pro/api",
          description: "Live server"
        },
      ],
    },
  }
});
