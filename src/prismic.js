import Prismic from 'prismic-javascript';

// Prismic API endpoint URL
const apiEndpoint = 'https://my-vue-cms.cdn.prismic.io/api/v2';

// Function to create a Prismic client instance
export const createClient = () => {
  return Prismic.client(apiEndpoint);
};
