import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faLinkedin, faTiktok } from '@fortawesome/free-brands-svg-icons';
import SimpleBar from "simplebar-react";
import 'simplebar/dist/simplebar.min.css'; // Import CSS của SimpleBar

function ShoppingLayout() {
  return (
    <SimpleBar style={{ maxHeight: '100vh' }}> {/* Bọc toàn bộ nội dung trang trong SimpleBar */}
      <div className="flex flex-col bg-white overflow-hidden">
        <ShoppingHeader />

        <main className="flex flex-col w-full mt-[64px]">
          <Outlet />
        </main>
        <footer className="bg-[#01182f] text-white py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center">
              <div className="w-full md:w-1/3 mb-4 md:mb-0">
                <h2 className="text-lg font-bold mb-2 text-red-500">CÔNG TY CỔ PHẦN TAVICO HOME</h2>
                <p className="text-sm">
                  Số 81 Đường Điểu Xiển - KP.9 - P.Tân Biên - Tp. Biên Hòa - Tỉnh Đồng Nai
                </p>
                <p className="text-sm">Hotline: 0855 555 595 - 0988 951 579</p>
                <p className="text-sm">
                  Email: <a href="mailto:tavicohome@gmail.com" className="text-blue-400 hover:underline">tavicohome@gmail.com</a>
                </p>
              </div>
              <div className="w-full md:w-1/3 mb-4 md:mb-0 text-center">
                <h3 className="text-lg font-bold mb-2">Kết nối với chúng tôi</h3>
                <div className="flex justify-center space-x-4">
                  <a href="https://www.facebook.com/Thegioinoithatgotay" aria-label="Facebook" target="_blank" className="text-blue-500 hover:text-blue-600 text-xl">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                  <a href="https://www.tiktok.com/@tavicohome" aria-label="Instagram" target="_blank" className="text-white hover:text-gray-400 text-xl">
                    <FontAwesomeIcon icon={faTiktok} />
                  </a>
                  <a href="https://www.youtube.com/@noithattavico" aria-label="YouTube" target="_blank" className="text-red-500 hover:text-red-700 text-xl">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                  <a href="https://www.linkedin.com/company/tavico-home/" aria-label="LinkedIn" target="_blank" className="text-blue-600 hover:text-blue-700 text-xl">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <iframe
                  src="https://www.google.com/maps/d/embed?mid=1dmULERaD6nIEp9FVrsIaVf_-MjFFamE&ehbc=2E312F"
                  width="100%"
                  height="150"
                  className="rounded"
                  title="Google Maps"
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
              <p>© {new Date().getFullYear()} TAVICO HOME. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </SimpleBar>
  );
}

export default ShoppingLayout;
