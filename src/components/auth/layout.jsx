import React from 'react';
import { Outlet } from 'react-router-dom';
import backgroundImage from '@/assets/wood-bg.jpg';
import logo from '@/assets/logo-tavicohome.png';
import tavicoLogo from '@/assets/Logo-TAVICO.webp';
import { Mail, MapPin, Phone } from 'lucide-react';

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Phần bên trái với ảnh nền */}
      <div
        className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12 bg-cover bg-center bg-opacity-50"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="text-center text-white bg-gray-900 bg-opacity-60 p-10 rounded-xl shadow-xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-600 drop-shadow-xl">
            Thế Giới Gỗ và Nội Thất
          </h1>
          <h1 className="text-4xl font-extrabold tracking-tight text-red-600 drop-shadow-xl mb-5">
            TAVICO HOME
          </h1>
          <div className="mb-2 flex justify-center cursor-pointer mb-5" onClick = {() => window.location.href = '/'}>
          <img src={logo} alt="TAVICO HOME Logo" className="w-48" />
        </div>
          <p className="text-md max-w-full mx-auto text-gray-100">
            <MapPin size={24} className="inline-block text-yellow-400 mr-2" />
            Số 81 Đường Điểu Xiển - KP.9 - P.Tân Biên - Tp. Biên Hòa - Đồng Nai
          </p>
          <p className="text-md max-w-md mx-auto text-gray-100">
            <Phone size={24} className="inline-block text-yellow-400 mr-2" />
            Hotline Tavico Home: <span className="font-semibold text-yellow-400">0855 555 595</span> - <span className="font-semibold text-yellow-400">0988 951 579</span>
          </p>
          <p className="text-md max-w-md mx-auto text-gray-100">
            <Mail size={24} className="inline-block text-yellow-400 mr-2" />
            Email: <span className="font-semibold text-yellow-400">tavicohome@gmail.com</span>
          </p>
        </div>
      </div>

      {/* Phần bên phải chứa form đăng nhập hoặc đăng ký */}
      <div className="flex flex-1 flex-col justify-center bg-background px-6 py-12 sm:px-8 lg:px-10">
        {/* Logo công ty */}
        <div className="mb-2 flex justify-center cursor-pointer" onClick = {() => window.location.href = '/'}>
          <img src={tavicoLogo} alt="TAVICO Logo" className="w-14" />
        </div>

        {/* Nội dung form */}
        <div className="bg-white shadow-lg rounded-lg max-w-md mx-auto w-full p-8 space-y-6">
          {/* Outlet sẽ hiển thị form đăng nhập hoặc đăng ký */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
