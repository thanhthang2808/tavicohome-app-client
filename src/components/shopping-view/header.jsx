import { HousePlug, LogIn, LogOut, Menu, ShoppingCart, UserCog } from "lucide-react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Logo from "@/assets/logo-tavicohome.png";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { shoppingViewHeaderMenuItems } from "@/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { logoutUser } from "@/store/auth-slice";
import UserCartWrapper from "./cart-wrapper";
import { useEffect, useState } from "react";
import { fetchCartItems } from "@/store/shop/cart-slice";
import { Label } from "../ui/label";

function MenuItems() {
  const navigate = useNavigate();
  const location = useLocation(); // Lấy đường dẫn hiện tại
  const [searchParams, setSearchParams] = useSearchParams();

  function handleNavigate(getCurrentMenuItem) {
    sessionStorage.removeItem("filters");
    const currentFilter =
      getCurrentMenuItem.id !== "home" &&
      getCurrentMenuItem.id !== "products" &&
      getCurrentMenuItem.id !== "search"
        ? {
            category: [getCurrentMenuItem.id],
          }
        : null;

    sessionStorage.setItem("filters", JSON.stringify(currentFilter));

    location.pathname.includes("listing") && currentFilter !== null
      ? setSearchParams(
          new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
        )
      : window.location.href = getCurrentMenuItem.path;
  }

  return (
    <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
      {shoppingViewHeaderMenuItems.map((menuItem) => {
        const isActive = location.pathname === menuItem.path; // Kiểm tra mục đang hoạt động

        return (
          <div key={menuItem.id} className="relative group h-[64px] flex items-center">
            <Label
              onClick={() => handleNavigate(menuItem)}
              className={`text-md font-bold cursor-pointer relative transition-colors ${
                isActive ? "text-red-600" : "text-blue-800"
              }`}
            >
              {menuItem.label}
              <span
                className={`absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full ${
                  isActive ? "w-0" : "w-0"
                }`}
              ></span>
            </Label>
            {/* Dropdown Menu */}
            {menuItem.subMenu && (
              <div
                className="absolute text-sm font-bold left-0 top-16 hidden w-64 bg-blue-700 shadow-lg group-hover:block group-focus-within:block"
              >
                {menuItem.subMenu.map((subItem) => (
                  <div
                    key={subItem.id}
                    className="px-4 py-2 text-white hover:bg-blue-900 cursor-pointer"
                    onClick={() => window.location.href = subItem.path}
                  >
                    {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}


function HeaderRightContent() {
  const { user } = useSelector((state) => state.auth);
  const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/");
    window.location.reload();
  }

  useEffect(() => {
    if (user?.id) {
      dispatch(fetchCartItems(user.id));
    }
  }, [dispatch, user?.id]);

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4 w-[125px] justify-end">
      {/* Nếu người dùng chưa đăng nhập */}
      {!user ? (
        <Button
          // variant="link"
          onClick={() => navigate("auth/login")}
          className="flex items-center gap-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-bold hover:bg-blue-700" 
        >
          <LogIn className="w-4 h-4" />
          Đăng nhập
        </Button>
      ) : (
        <>
          {/* Giỏ hàng */}
          <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
            <Button
              onClick={() => setOpenCartSheet(true)}
              variant="outline"
              size="icon"
              className="relative"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
                {cartItems?.items?.length || ""}
              </span>
              <span className="sr-only">User cart</span>
            </Button>
            <UserCartWrapper
              setOpenCartSheet={setOpenCartSheet}
              cartItems={cartItems?.items || []}
            />
          </Sheet>

          {/* Avatar và Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="bg-black cursor-pointer">
                <AvatarFallback className="bg-black text-white font-extrabold">
                  {user.userName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-56">
              <DropdownMenuLabel>Đã đăng nhập {user.userName}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate("/account")}>
                <UserCog className="mr-2 h-4 w-4" />
                Tài khoản
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Đăng xuất
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </>
      )}
    </div>
  );
}




function ShoppingHeader() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" width={160} />
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle header menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full max-w-xs">
            <MenuItems />
            <HeaderRightContent />
          </SheetContent>
        </Sheet>
        <div className="hidden lg:block">
          <MenuItems />
        </div>

        <div className="hidden lg:block">
          <HeaderRightContent />
        </div>
      </div>
    </header>
  );
}

export default ShoppingHeader;
