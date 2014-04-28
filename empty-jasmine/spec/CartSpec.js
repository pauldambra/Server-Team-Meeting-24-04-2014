describe("Shopping Cart", function() {

  beforeEach(function() {
  });

  it('should have a total of 0 when you start', function() {
  	var cart = new ShoppingCart();
  	expect(cart.total()).toEqual(0);
  });

  it('should have a total of 50 when you scan an A99', function(){
  	var cart = new ShoppingCart();
  	cart.scan('A99');
  	expect(cart.total()).toEqual(50);
  });

  it('should have a total of 30 when you scan an B15', function(){
  	var cart = new ShoppingCart();
  	cart.scan('B15');
  	expect(cart.total()).toEqual(30);
  });

   it('should have a total of 99 when you scan an T34', function(){
  	var cart = new ShoppingCart();
  	cart.scan('T34');
  	expect(cart.total()).toEqual(99);
  });

  it('should have a total of 80 when you scan a B15 and an A99', function(){
  	var cart = new ShoppingCart();
  	cart.scan('A99');
  	cart.scan('B15');
  	expect(cart.total()).toEqual(80);
  });

  it('should have a total of 100 when you scan 2 x A99', function(){
  	var cart = new ShoppingCart();
  	cart.scan('A99');
  	cart.scan('A99');
  	expect(cart.total()).toEqual(100);
  });

  it('should have a total of 120 when you scan 2 x C40', function(){
  	var cart = new ShoppingCart();
  	cart.scan('C40');
  	cart.scan('C40');
  	expect(cart.total()).toEqual(120);
  });

  describe('can calcualte special offer prices', function() {
  	it('should sell 3 x A99 for 130', function() {
  		var cart = new ShoppingCart();
  		cart.scan('A99');
  		cart.scan('A99');
  		cart.scan('A99');
  		expect(cart.total()).toEqual(130);
  	});
  });
});
