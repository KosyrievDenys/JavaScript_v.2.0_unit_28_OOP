class Goods2 extends Goods {
	constructor(name,amount,image,count,sale) {
		super(name,amount,image,count);
		this.sale = sale;
	}
	draw() {
		return `<div><img src = ${this.image}><br>${this.name} ${this.amount} ${this.count} ${this.sale}</div>`;
	}
}