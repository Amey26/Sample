export class Product {
    public id: number;
    public name: string;
    public unit: string;
    public quantity: number;
    public rate: number;
    public total: number;
    constructor(
        id: number, 
        name: string, 
        unit: string,
        rate: number) { 
      this.id = id;
      this.name = name;
      this.unit = unit;
      this.rate = rate;
    }
}
