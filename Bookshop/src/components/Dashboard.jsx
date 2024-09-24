import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100 transition-all duration-300 ease-in-out">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <Metrics />
        <ProductTable />
        <OrderTable />
        <CustomerTable />
      </div>
    </div>
  );
};

const Sidebar = () => (
  <nav className="w-64 bg-gray-800 text-white p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
    <h2 className="text-2xl mb-6">Shop Admin</h2>
    <ul>
      {['Dashboard', 'Products', 'Orders', 'Customers', 'Reports'].map((item) => (
        <li
          key={item}
          className="mb-4 hover:text-green-400 cursor-pointer transition-colors duration-300"
        >
          {item}
        </li>
      ))}
    </ul>
  </nav>
);

const Header = () => (
  <header className="flex justify-between items-center mb-6">
    <h1 className="text-3xl">Admin Dashboard</h1>
    <div className="text-gray-600">Admin</div>
  </header>
);

const Metrics = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
    {[
      { title: 'Total Sales', value: '$10,000' },
      { title: 'Orders', value: '150' },
      { title: 'Customers', value: '120' },
      { title: 'Products', value: '200' },
    ].map((metric) => (
      <MetricCard key={metric.title} {...metric} />
    ))}
  </div>
);

const MetricCard = ({ title, value }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

const ProductTable = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-xl font-semibold mb-4">Products</h2>
    <Table headers={['Product Name', 'Price', 'Stock']} data={productData} />
  </div>
);

const OrderTable = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-xl font-semibold mb-4">Orders</h2>
    <Table headers={['Order ID', 'Customer', 'Total', 'Status']} data={orderData} />
  </div>
);

const CustomerTable = () => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
    <h2 className="text-xl font-semibold mb-4">Customers</h2>
    <Table headers={['Customer Name', 'Email', 'Joined']} data={customerData} />
  </div>
);

const Table = ({ headers, data }) => (
  <table className="min-w-full border-collapse border border-gray-200">
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header} className="border border-gray-300 p-2 bg-gray-50">
            {header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, index) => (
        <tr
          key={index}
          className="hover:bg-gray-100 transition-colors duration-200"
        >
          {Object.values(row).map((cell, i) => (
            <td key={i} className="border border-gray-300 p-2">
              {cell}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

// Sample data for demonstration
const productData = [
  { name: 'Product 1', price: '$25.00', stock: '100' },
  { name: 'Product 2', price: '$15.00', stock: '50' },
];

const orderData = [
  { id: '#001', customer: 'Customer 1', total: '$100.00', status: 'Completed' },
  { id: '#002', customer: 'Customer 2', total: '$50.00', status: 'Pending' },
];

const customerData = [
  { name: 'Customer 1', email: 'customer1@example.com', joined: 'Jan 1, 2021' },
  { name: 'Customer 2', email: 'customer2@example.com', joined: 'Feb 15, 2021' },
];

export default Dashboard;
