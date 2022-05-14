export class Bill {
  constructor(
    public id: number,
    public shippingCost: number,
    public total: number,
    public status: number, // 0: dang giao, 1:da giao, 2:huy
    public createdDate: Date,
    public updatedDate: Date
  ) {}
}
