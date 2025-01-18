import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Fake data for demonstration
  const salesSummary = {
    totalSales: 1256,
    totalRevenue: 35698,
    bestsellingBook: {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      sales: 356,
      revenue: 8956
    }
  };

  const recentOrders = [
    { orderId: 1, customerName: "John Doe", orderTotal: 45.99 },
    { orderId: 2, customerName: "Jane Smith", orderTotal: 79.99 },
    { orderId: 3, customerName: "Alice Johnson", orderTotal: 32.50 }
  ];

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-5">Book Store Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Sales Summary Section */}
        <div className="bg-white p-5 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-3">Sales Summary</h2>
          <p>Total Sales: {salesSummary.totalSales}</p>
          <p>Total Revenue: Rs: {salesSummary.totalRevenue}</p>
          <p>Bestselling Book: {salesSummary.bestsellingBook.title} by {salesSummary.bestsellingBook.author}</p>
          <p>Sales: {salesSummary.bestsellingBook.sales}</p>
          <p>Revenue: Rs: {salesSummary.bestsellingBook.revenue}</p>
        </div>

        {/* Inventory Management Section */}
        <div className="bg-white p-5 rounded-lg shadow-md mr-8">
          <h2 className="text-xl font-semibold mb-3">Inventory Management</h2>
          <Link to="/admin/dashboard/manage" className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600">Manage Books</Link>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white p-5 rounded-lg shadow-md ">
          <h2 className="text-xl font-semibold mb-3">Recent Orders</h2>
          <ul>
            {recentOrders.map(order => (
              <li key={order.orderId}>
                Order #{order.orderId} - {order.customerName} (Rs: {order.orderTotal})
              </li>
            ))}
          </ul>
        </div>

        {/* Book Statistics Section */}
        <div className="bg-white p-5 rounded-lg shadow-md mr-8">
          <h2 className="text-xl font-semibold mb-3">Book Statistics</h2>
          {/* Book statistics components */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
