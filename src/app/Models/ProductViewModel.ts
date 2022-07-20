export class ProductViewModel{
    id: number =0;
        title: string = "";
        price: number =0.0;
        description: string="";
        category: string = "";
        image: string="";
        rating:rating=new rating();
}
export class rating {
    rate: number =0.0;
    count: number = 0.0;
}