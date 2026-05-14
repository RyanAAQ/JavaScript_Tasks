const orderStatus = (order) => {

  order.status = "delivered";

  return order;
}

const order = {id: 1, status: "pending" }

console.log(orderStatus(order))


