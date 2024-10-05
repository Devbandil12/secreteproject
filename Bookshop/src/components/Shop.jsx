// Shop.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Header"
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";

const items = [
    {
        id: 1,
        productName: "Apple iPhone 14",
        price: "$999",
        image: "https://mockuptree.com/wp-content/uploads/edd/2024/09/Free-iPhone-16-Pro-Mockup-960x640.jpg"
      },
      {
        id: 2,
        productName: "Samsung Galaxy S23",
        price: "$899",
        image: "https://fscl01.fonpit.de/userfiles/7446224/image/samsung-galaxy-s23-series-cmd7/NextPit-samsung-galaxy-s23-ultra-hands-on-cmd7.jpg",
      },
      {
        id: 3,
        productName: "Google Pixel 7",
        price: "$799",
        image: "https://th.bing.com/th/id/OIP.C3RdJxqV2qYbJnKJlu-53wHaE7?rs=1&pid=ImgDetMain"
      },
  // Add more items as needed
];

const Shop = () => {
    const [products, setProducts] = useState(items);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const shopName = "My Awesome Shop";
const shopInfo=useSelector(s=>s.Shop);
const dispatch =useDispatch()
    const addProduct = () => {
        if (productName && productPrice && productImage) {
            const newProduct = {
                id: products.length + 1, // Simple ID generation
                productName,
                price: productPrice,
                image: productImage
            };
            setProducts([...products, newProduct]);
            clearFields();
        }
    };

    const editProduct = (index) => {
        setProductName(products[index].productName);
        setProductPrice(products[index].price);
        setProductImage(products[index].image);
        setEditingIndex(index);
    };

    const updateProduct = () => {
        const updatedProducts = [...products];
        updatedProducts[editingIndex] = {
            ...updatedProducts[editingIndex],
            productName,
            price: productPrice,
            image: productImage
        };
        setProducts(updatedProducts);
        clearFields();
    };

    const removeProduct = (index) => {
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };

    const clearFields = () => {
        setProductName('');
        setProductPrice('');
        setProductImage('');
        setEditingIndex(null);
    };

    return (
        <>
        <Header 
        menu={menuicon}
        title={shopName}
        Cart={<MdDashboard/>}
        Cartpath={"/dashboard"}
        profile={<IoIosNotifications/>}
        profilePath={"/notification"}
     />
        <div className="max-w-3xl mx-auto p-5 bg-white rounded-lg shadow-lg">
       
            <div className="flex mb-5">
                <input
                    type="text"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Enter product name"
                    className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                <input
                    type="text"
                    value={productPrice}
                    onChange={(e) => setProductPrice(e.target.value)}
                    placeholder="Enter product price"
                    className="flex-grow p-2 border border-gray-300 mx-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                <input
                    type="text"
                    value={productImage}
                    onChange={(e) => setProductImage(e.target.value)}
                    placeholder="Enter product image URL"
                    className="flex-grow p-2 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                <button
                    onClick={editingIndex !== null ? updateProduct : addProduct}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
                    >
                    {editingIndex !== null ? 'Update' : 'Add'}
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, index) => (
                    <div key={product.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <img src={product.image} alt={product.productName} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold text-gray-800 mt-2">{product.productName}</h2>
                        <p className="text-gray-600">{product.price}</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => editProduct(index)}
                                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition duration-200"
                                >
                                Edit
                            </button>
                            <button
                                onClick={() => removeProduct(index)}
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
                                </>
    );
};

export default Shop;
