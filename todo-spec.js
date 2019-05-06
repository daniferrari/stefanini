describe('Teste frontend Stefanini', function() {

    it('deve possuir titulo = Lançamento de conta', function() {

      browser.get('http://localhost:8080/#!/');
      expect(browser.getTitle()).toEqual('Lançamento de conta');

    });

    it('deve entrar na url http://localhost:8080/#!/', function() {

      expect(browser.getCurrentUrl()).toEqual("http://localhost:8080/#!/");

    });

  });