import { StrapiServerConfig } from '@strapi/strapi';

const serverConfig: StrapiServerConfig = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 10000),
  url: env('STRAPI_ADMIN_BACKEND_URL'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
  proxy: true,
});

export default serverConfig;
