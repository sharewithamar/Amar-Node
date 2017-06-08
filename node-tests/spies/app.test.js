const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {

    var db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        let spy = expect.createSpy();
        // spy();
        spy('Amar', 28);
        // expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith('Amar', 28);

    });

    it('should call saveUser with user object', () => {
        let email = "sharewithamar@gmail.com"
        let password = "123243";
        app.handleSignUp(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});

    });

});