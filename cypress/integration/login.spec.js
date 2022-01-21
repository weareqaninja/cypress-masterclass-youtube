import auth from '../support/actions/AuthActions'

describe('Login', function () {
    it('User should be logged in', function () {
        auth.go()
        auth.fillForm('papito@qa.ninja', 'pwd123')
        auth.submit()
        
        auth.userShouldLoggedIn()
    })

    it('Incorrect password', function () {
        auth.go()
        auth.fillForm('papito@qa.ninja', '123456')
        auth.submit()

        auth.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
    })

    it('User not found', function () {
        auth.go()
        auth.fillForm('papito@404.com.br', '123456')
        auth.submit()

        auth.alert().should('contain', 'Oops! Email e/ou senha incorretos.')
    })
})