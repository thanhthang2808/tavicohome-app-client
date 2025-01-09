import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SupplierCard = ({ supplier }) => {
    return (
        <div className="flex flex-col bg-white shadow-lg rounded-lg cursor-pointer overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <img src={supplier.logo} alt={`${supplier.userName} logo`} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">{supplier.userName}</h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{supplier.background}</p>
                <p className="text-sm text-gray-800 mt-2">Contact: <span className="font-medium text-blue-500">{supplier.contactInfo}</span></p>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-sm text-yellow-500 font-medium">Rating: {supplier.rating.toFixed(1)}</span>
                </div>
            </div>
        </div>
    );
};

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);
    const sampleSuppliers = [
        {
            id: 1,
            userName: 'Supplier One',
            logo: 'https://via.placeholder.com/150',
            background: 'We are the leading supplier of widgets.',
            contactInfo: 'contact@supplierone.com',
            rating: 4.5
        },
        {
            id: 2,
            userName: 'Supplier Two',
            logo: 'https://via.placeholder.com/150',
            background: 'We provide high-quality gadgets.',
            contactInfo: 'contact@suppliertwo.com',
            rating: 4.0
        },
        {
            id: 3,
            userName: 'Supplier Three',
            logo: 'https://via.placeholder.com/150',
            background: 'Your trusted partner for all things tech.',
            contactInfo: 'contact@supplierthree.com',
            rating: 4.8
        }
    ];

    useEffect(() => {
        axios.get('/api/suppliers')
            .then(response => {
                if (Array.isArray(response.data)) {
                    setSuppliers(response.data); // Đảm bảo chỉ gán nếu là mảng
                } else {
                    console.error('Invalid data format:', response.data);
                    setSuppliers(sampleSuppliers); // Dùng dữ liệu mẫu nếu có lỗi
                }
            })
            .catch(error => {
                console.error('There was an error fetching the suppliers!', error);
                setSuppliers(sampleSuppliers);
            });
    }, []);
    

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Supplier List</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {suppliers.map(supplier => (
                        <SupplierCard key={supplier.id} supplier={supplier} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SupplierList;
