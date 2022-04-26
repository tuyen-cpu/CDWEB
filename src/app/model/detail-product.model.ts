export class DetailProduct {
    constructor(
        public id: number,
        public name: string,
        public desc:string,
        public brand:string,
        public price:number,
        public discount:number,
        public urlImg:string,
        public amount:number,
        public description:string[],
         public promotion: string[],
         public urlImgs: string[],
         public description_full: string,
         public description_short: string,
         public category: string,
        ) {}
}
