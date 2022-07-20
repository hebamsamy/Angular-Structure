export class BookEditViewModel{
    ID : number = 0;
    Title :string='' ;
    Description :string = '' ;
    isAvaiable:boolean=true ;
    PublisherID :number = 0;
    ImagesUrls :string[]=[] ;
    //"Required","Must Upload Image At least "
    Images :File[]=[];
}