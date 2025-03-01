function Orders() {
  const orders = [
    {
      orderId: 1,
      username: "John Miller",
      date: "27/01/2025",
      status: "Delivered",
      totalPrice: "$200.00",
    },
    {
      orderId: 2,
      username: "Alice Smith",
      date: "29/01/2025",
      status: "Processing",
      totalPrice: "$150.00",
    },
    {
      orderId: 3,
      username: "Bob Johnson",
      date: "30/01/2025",
      status: "Shipped",
      totalPrice: "$300.00",
    },
    {
      orderId: 4,
      username: "Emma Davis",
      date: "01/02/2025",
      status: "Pending",
      totalPrice: "$120.00",
    },
    {
      orderId: 5,
      username: "Michael Brown",
      date: "03/02/2025",
      status: "Delivered",
      totalPrice: "$250.00",
    },
    {
      orderId: 6,
      username: "Sarah Williams",
      date: "04/02/2025",
      status: "Shipped",
      totalPrice: "$400.00",
    },
    {
      orderId: 7,
      username: "David Jones",
      date: "05/02/2025",
      status: "Pending",
      totalPrice: "$150.00",
    },
    {
      orderId: 8,
      username: "Emily Lee",
      date: "06/02/2025",
      status: "Delivered",
      totalPrice: "$200.00",
    },
    {
      orderId: 9,
      username: "Olivia Brown",
      date: "07/02/2025",
      status: "Shipped",
      totalPrice: "$300.00",
    },
    {
      orderId: 10,
      username: "Sophia Wilson",
      date: "08/02/2025",
      status: "Pending",
      totalPrice: "$120.00",
    },
    {
      orderId: 11,
      username: "James Smith",
      date: "09/02/2025",
      status: "Delivered",
      totalPrice: "$250.00",
    },
    {
      orderId: 12,
      username: "Ava Brown",
      date: "10/02/2025",
      status: "Shipped",
      totalPrice: "$400.00",
    },
    {
      orderId: 13,
      username: "Mia Williams",
      date: "11/02/2025",
      status: "Pending",
      totalPrice: "$150.00",
    },
    {
      orderId: 14,
      username: "Alex Smith",
      date: "12/02/2025",
      status: "Delivered",
      totalPrice: "$200.00",
    },
  ];

  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Orders List</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md ">
                    <thead>
                      <tr>
                        <th style={{ width: 200 }}>Order ID</th>
                        <th>Username</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Total Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.orderId}>
                          <td>
                            <strong className="text-black">
                              {String(order.orderId).padStart(2, "0")}
                            </strong>
                          </td>
                          <td>{order.username}</td>
                          <td>{order.date}</td>
                          <td>
                            <span
                              className={`badge ${
                                order.status === "Delivered"
                                  ? "bg-success"
                                  : order.status === "Shipped"
                                  ? "bg-primary"
                                  : order.status === "Processing"
                                  ? "bg-warning"
                                  : "bg-danger"
                              }`}
                            >
                              {order.status}
                            </span>
                          </td>
                          <td>{order.totalPrice}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
