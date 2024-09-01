/* eslint-disable max-len */
/* eslint-disable no-console */
const DaysOfWeek = {
  MONDAY: 1,
  TUESDAY: 2,
  WEDNESDAY: 3,
  THURSDAY: 4,
  FRIDAY: 5,
  SATURDAY: 6,
  SUNDAY: 7,
};

function getDayName(dayNumber) {
  switch (dayNumber) {
    case DaysOfWeek.MONDAY: return 'Monday';
    case DaysOfWeek.TUESDAY: return 'Tuesday';
    case DaysOfWeek.WEDNESDAY: return 'Wednesday';
    case DaysOfWeek.THURSDAY: return 'Thursday';
    case DaysOfWeek.FRIDAY: return 'Friday';
    case DaysOfWeek.SATURDAY: return 'Saturday';
    case DaysOfWeek.SUNDAY: return 'Sunday';
    default: return 'Invalid day number';
  }
}

console.log(getDayName(1)); // Output: Monday
console.log(getDayName(5)); // Output: Friday

const OrderStatus = {
  PENDING: 'Pending',
  SHIPPED: 'Shipped',
  DELIVERED: 'Delivered',
  CANCELED: 'Canceled',
};

class Order {
  constructor(id) {
    this.id = id;
    this.status = OrderStatus.PENDING;
  }

  markAsShipped() {
    if (this.status === OrderStatus.PENDING) {
      this.status = OrderStatus.SHIPPED;
    } else {
      console.log('Order cannot be shipped. Current status:', this.status);
    }
  }

  markAsDelivered() {
    if (this.status === OrderStatus.SHIPPED) {
      this.status = OrderStatus.DELIVERED;
    } else {
      console.log('Order cannot be delivered. Current status:', this.status);
    }
  }

  cancelOrder() {
    if (this.status !== OrderStatus.DELIVERED) {
      this.status = OrderStatus.CANCELED;
    } else {
      console.log('Order cannot be canceled. Current status:', this.status);
    }
  }

  getStatusDescription() {
    switch (this.status) {
      case OrderStatus.PENDING: return 'The order is pending and awaiting shipment.';
      case OrderStatus.SHIPPED: return 'The order has been shipped and is on its way.';
      case OrderStatus.DELIVERED: return 'The order has been delivered to the customer.';
      case OrderStatus.CANCELED: return 'The order has been canceled and will not be processed.';
      default: return 'Unknown status';
    }
  }
}

const order1 = new Order(101);
console.log(order1.getStatusDescription()); // Output: The order is pending and awaiting shipment.

order1.markAsShipped();
console.log(order1.getStatusDescription()); // Output: The order has been shipped and is on its way.

order1.markAsDelivered();
console.log(order1.getStatusDescription()); // Output: The order has been delivered to the customer.

order1.cancelOrder(); // Output: Order cannot be canceled. Current status: Delivered

const order2 = new Order(102);
order2.cancelOrder();
console.log(order2.getStatusDescription()); // Output: The order has been canceled and will not be processed.
