import OAuth2 from 'fetch-mw-oauth2';

// If on Node.js
// @ts-ignore
global.fetch = require('node-fetch');
// @ts-ignore
global.Request = require('node-fetch').Request;

const OAuth2 = require('fetch-mw-oauth2');

const oauth2 = new OAuth2({
  grantType: 'password',
  clientId: 'react-app',
  clientSecret: '12345',
  userName: 'admin',
  password: '12345',
  tokenEndPoint: 'http://localhost:8100/oauth/token'
});