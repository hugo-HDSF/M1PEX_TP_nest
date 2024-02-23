export class Product {
  id: string;
  name: string;
  price: string;
  description: string;

  constructor(data: {
    id: string;
    name: string;
    price: string;
    description: string;
  }) {
    this.id = data.id;
    this.name = data.name;
    this.price = data.price;
    this.description = data.description;
  }
}
