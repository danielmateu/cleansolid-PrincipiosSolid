
type Size = '' | 'S' | 'MD' | 'L' | 'XL';

class Product {

    constructor(
        public name: string = '',
        public price: number = 0,
        // public inStock: boolean = true,
        public size: Size = '',

    ) { }

    isProductAvailable(): boolean {
        if (this.name.length <= 0 || this.price <= 0 || this.size.length <= 0) {
            throw new Error('Name, Price and Size are required')
        }

        return true;
    }

    toString() {
        // No DRY
        // if (this.name.length <= 0) throw new Error('Name is required')
        // if (this.price <= 0) throw new Error('Price is required')
        // if (this.size.length <= 0) throw new Error('Size is required')

        // DRY
        this.isProductAvailable()

        return `name: ${this.name} price: ${this.price} size: ${this.size}`;
    }
}

// funcion autoinvocada
const bluePants = new Product('Blue Pants', 5, 'L');
console.log(bluePants.toString());

