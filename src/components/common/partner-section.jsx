import React, { useState, useEffect } from "react";
import partner1 from "@/assets/partners/dowa.png";
import partner2 from "@/assets/partners/hawa.png";
import partner3 from "@/assets/partners/bifa.png";
import partner4 from "@/assets/partners/fpa.png";
import partner5 from "@/assets/partners/hehe.png";
import partner6 from "@/assets/partners/canadianwood.png";

const PartnerSection = () => {
  const partners = [
    { logo: partner1, name: "Partner 1" },
    { logo: partner2, name: "Partner 2" },
    { logo: partner3, name: "Partner 3" },
    { logo: partner4, name: "Partner 4" },
    { logo: partner5, name: "Partner 5" },
    { logo: partner6, name: "Partner 6" },
  ];
  const repeatedPartners = [...partners, ...partners, ...partners]; 

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Gọi ngay lần đầu khi trang load

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full flex justify-center overflow-hidden">
      {/* Container chứa khung hiển thị logo cho desktop */}
      {!isMobile ? (
        <div className="flex w-full max-w-6xl overflow-hidden">
          <div
            className="flex animate-slide"
            style={{
              width: `${repeatedPartners.length * 100}%`,
            }}
          >
            {repeatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center items-center"
                style={{
                  width: "calc(16.666% - 16px)", // Trên máy tính: 16.666%
                  height: "120px", // Chiều cao của ô
                  margin: "0 8px", // Khoảng cách giữa các ô logo
                  boxSizing: "border-box", // Đảm bảo tính toán đúng khi thêm margin
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain"
                  style={{
                    maxHeight: "100%", // Đảm bảo logo không vượt quá chiều cao của ô
                    maxWidth: "100%", // Đảm bảo logo không vượt quá chiều rộng của ô
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        // Container chứa khung hiển thị logo cho mobile
        <div className="flex w-full max-w-6xl overflow-hidden">
          <div
            className="flex animate-slide-mobile"
            style={{
              width: `${repeatedPartners.length * 100}%`,
            }}
          >
            {repeatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex justify-center items-center"
                style={{
                  width: "calc(50% - 16px)", // Trên mobile: 50%
                  height: "120px", // Chiều cao của ô
                  margin: "0 8px", // Khoảng cách giữa các ô logo
                  boxSizing: "border-box", // Đảm bảo tính toán đúng khi thêm margin
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain"
                  style={{
                    maxHeight: "100%", // Đảm bảo logo không vượt quá chiều cao của ô
                    maxWidth: "100%", // Đảm bảo logo không vượt quá chiều rộng của ô
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0%);
            }
            16.666% {
              transform: translateX(-16.666%);
            }
            33.333% {
              transform: translateX(-33.333%);
            }
            50% {
              transform: translateX(-50%);
            }
            66.666% {
              transform: translateX(-66.666%);
            }
            83.333% {
              transform: translateX(-83.333%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-slide {
            animation: slide 18s linear infinite;
          }

          @keyframes slide-mobile {
            0% {
              transform: translateX(0%);
            }
            25% {
              transform: translateX(-50%);
            }
            50% {
              transform: translateX(-100%);
            }
            75% {
              transform: translateX(-150%);
            }
            100% {
              transform: translateX(-200%);
            }
          }

          .animate-slide-mobile {
            animation: slide-mobile 15s linear infinite; /* Tăng tốc độ animation để cuộn mượt mà */
          }
        `}
      </style>
    </div>
  );
};

export default PartnerSection;
