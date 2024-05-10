namespace Fruits{
    export class ind_fruit{
        public name : string;
        public color : string;
        public price : number;
        constructor(n:string,c:string,p:number){
            this.name = n;
            this.color = c;
            this.price = p;
        }
        get Name(){
            return this.name;
        }
        set Name(n:string){
            this.name = n;
        }
    }
}