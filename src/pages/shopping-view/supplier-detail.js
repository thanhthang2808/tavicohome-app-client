import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductCard = ({ product }) => {
    // Sample data for testing
    const sampleProduct = {
        id: 1,
        name: 'Sample Product',
        description: 'This is a sample product description.',
        price: 19.99,
        image: 'https://via.placeholder.com/150'
    };

    // Use sample data if product is not provided
    product = product || sampleProduct;
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{product.description}</p>
                <p className="text-sm text-gray-800 mt-2">Price: <span className="font-medium text-blue-500">${product.price}</span></p>
            </div>
        </div>
    );
};

const SupplierDetail = ({ supplierId }) => {
    const [supplier, setSupplier] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`/api/suppliers/${supplierId}`)
            .then(response => {
                setSupplier(response.data.supplier);
                setProducts(response.data.products);
            })
            .catch(error => {
                console.error('There was an error fetching the supplier details!', error);
            });
    }, [supplierId]);

    if (!supplier) {
        return <p className="text-center text-gray-500">Loading supplier details...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Supplier Info Section */}
                <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8 border border-gray-200">
                    <div className="relative">
                        <img src={supplier.backgroundImage} alt="Background" className="w-full h-60 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    </div>
                    <div className="p-6 flex flex-col md:flex-row items-center md:items-start">
                        <img src={supplier.logo} alt={`${supplier.userName} logo`} className="w-24 h-24 rounded-full border-4 border-white -mt-12 md:mt-0" />
                        <div className="ml-0 md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                            <h1 className="text-2xl font-bold text-gray-800">{supplier.userName}</h1>
                            <p className="text-gray-600 mt-2">{supplier.description}</p>
                            <p className="text-gray-800 mt-2">Contact: <span className="font-medium text-blue-500">{supplier.contactInfo}</span></p>
                        </div>
                        <div className="ml-0 md:ml-auto mt-4 md:mt-0 text-center md:text-right">
                            <p className="text-gray-800 font-medium">Products: {supplier.productCount}</p>
                            <p className="text-yellow-500 font-medium mt-2">Rating: {supplier.rating.toFixed(1)}</p>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupplierDetail;
