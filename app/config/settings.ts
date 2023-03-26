const settings = {
  dev: {
    apiUrl: "https://strapi-done-with-it.onrender.com/api",
  },
  staging: {
    apiUrl: "https://strapi-done-with-it.onrender.com/api",
  },
  prod: {
    apiUrl: "https://strapi-done-with-it.onrender.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  return settings.prod;
};

export default getCurrentSettings;
