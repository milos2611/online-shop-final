import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CategoryModel } from './shared/models/category.model';
import { ProductModel } from './shared/models/product.model';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const cateogry = [
            {
                id: 1, name: 'Laptop', description: 'dasdad', image: "", products: [
                    { id: 0, name: 'ThinkPad', description: "ThinkPad", numberOfProduct: 1, price: 100,image: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Lenovo_ThinkPad_X1_Ultrabook.jpg' },
                ]



            },
            {
                id: 2, name: 'Phone', description: 'Phone', image: "", products: [
                    { id: 0, name: 'Samsung S9', description: "Samsung S9", numberOfProduct: 1, price: 100,image: 'https://icdn9.digitaltrends.com/image/samsung-galaxy-s9-plus-review-maps-1500x1000.jpg' },
                    { id: 1, name: 'iphone  xs', description: "iphone  xs", numberOfProduct: 1, price: 100, image: 'https://c.slashgear.com/wp-content/uploads/2018/09/iphone-xs-iphone-xs-max-review-980x620.jpg' }
                ]
            },
           
            {
                id: 1, name: 'Tablet', description: 'Tablet', image: "", products: [
                    { id: 0, name: 'iPad Pro 11 (2018)', description: "sdada", numberOfProduct: 1, price: 100,image: 'https://o.aolcdn.com/images/dims?quality=85&image_uri=https%3A%2F%2Fo.aolcdn.com%2Fimages%2Fdims%3Fresize%3D2000%252C2000%252Cshrink%26image_uri%3Dhttps%253A%252F%252Fs.yimg.com%252Fos%252Fcreatr-uploaded-images%252F2018-11%252F1570c590-e432-11e8-9bcb-f6b0f31d0ddf%26client%3Da1acac3e1b3290917d92%26signature%3D657c99325e4c36279b678c7a0371ffb6c303c7ae&client=amp-blogside-v2&signature=e83527154007e8208f773b1a02d8daff3643eed7' },
                ]



            },
            {
                id: 2, name: 'Headphone', description: 'Headphone', image: "", products: [
                    { id: 0, name: 'Sony WH-1000XM3', description: "Sony WH-1000XM3", numberOfProduct: 1, price: 100,image: 'https://cnet3.cbsistatic.com/img/62tnFWk2O7f4sPy6HU_RCzJkf28=/830x467/2018/08/30/e7ad8666-7caf-41fd-9349-06fa647fd711/sony-1000xm3-7.jpg' },
                  
                ]
            },
            {
                id: 1, name: 'Mouse', description: 'Mouse', image: "", products: [
                    { id: 0, name: ' Logitech MX Master 2S  ', description: "Logitech MX Master 2S", numberOfProduct: 1, price: 100,image: 'https://www.logitech.com/assets/65106/31/mx-master-2s.png' },
                ]



            }

        ];
        return { cateogry };
    }

    genId(cateogry: CategoryModel[]): number {
        return cateogry.length > 0 ? Math.max(...cateogry.map(hero => hero.id)) + 1 : 11
    }


}