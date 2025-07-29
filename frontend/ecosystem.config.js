const dotenv = require('dotenv');
dotenv.config({ path: "./.env.deploy" });

const { DEPLOY_USER, DEPLOY_HOST, DEPLOY_REF, DEPLOY_REPOSITORY, DEPLOY_PATH } = process.env;

module.exports = {
  // Настройка деплоя
  deploy: {
    production: {
      user: DEPLOY_USER,
      host: DEPLOY_HOST,
      ref: DEPLOY_REF,
      repo: DEPLOY_REPOSITORY,
      path: DEPLOY_PATH,
      'post-deploy': 'cd frontend && pwd && npm ci && NODE_OPTIONS=--openssl-legacy-provider npm run build',
    },
  },
}
