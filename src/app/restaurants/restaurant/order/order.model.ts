class Order {
  public id: number;
  constructor(
    public address: string,
    public number: number,
    public complement: string,
    public orderItems: OrderItems[] = []
  ) {}
}

class OrderItems {
  constructor(
    public quantity: number,
    public menuId: string
  ) {}
}

export {Order, OrderItems}