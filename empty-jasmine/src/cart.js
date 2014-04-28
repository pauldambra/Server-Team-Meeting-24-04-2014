ShoppingCart = function(){
	this.items= {
		A99 : 0,
		B15: 0,
		C40: 0,
		T34: 0		
	};
	this.total = function(){
		var current = 0;
		for(item in this.items){
			if(this.items.hasOwnProperty(item)){
				current += prices[item]*this.items[item];
			};			
		};
		return current;
	}
	this.scan = function(sku) {
		this.items[sku]++; 
	}
}

var prices = {
	A99:50,
	B15:30,
	C40:60,
	T34:99
};