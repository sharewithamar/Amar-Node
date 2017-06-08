const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');




describe('server', () => {

    describe('GET /', () => {
        it('should return hola response', (done) => {


            /* request(app)
                 .get('/')
                 .expect(404)
                 .expect({
                     error: 'Page not found'
                 })
                 .end(done)*/

            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'Page not found'
                    });
                })
                .end(done)

        });


    })

    describe('GET /users', () => {
        it('should return Max user object', (done) => {

            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Max',
                        course: 'Angular'
                    });
                })
                .end(done)

        });
    })

});



