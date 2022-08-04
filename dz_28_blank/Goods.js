class Goods {
	constructor(name, amount,image,count) {
		this.name = name;
		this.amount = amount;
		this.image = image;
		this.count = count;
	}
	go() {
		return `${this.name}, ${this.amount} ${this.image} ${this.count}`;
	}
	draw() {
		return `<div><img src = ${this.image}><br>${this.name} ${this.amount}</div>`;
	}
}