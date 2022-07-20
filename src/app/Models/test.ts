export class ResultViewModel{
    Data= new PagingViewModel;
      Message='';
      Success= true;
      IsAuthorized= true
}
export class PagingViewModel{
    PageSize= 2;
        PageIndex= 1;
        Records=4;
        Pages= 2;
        Items: Job[]=[]
}
export class Job{
    ID=1;
    Name= "developer"
}