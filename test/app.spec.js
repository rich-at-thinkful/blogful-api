const app = require('../src/app');

describe('App', () => {
  it('GET / responds with default Express 404', () => {
    return supertest(app)
      .get('/')
      .expect(404)
      .then(res => expect(res.text).to.include('Cannot GET /'));
  });
});
