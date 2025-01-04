import {
  HousePlug,
  LogIn,
  LogOut,
  Menu,
  ShoppingCart,
  UserCog,
} from "lucide-react";
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
  const [menuState, setMenuState] = useState(
    shoppingViewHeaderMenuItems.map((menu) => ({ id: menu.id, isOpen: false }))
  );

  const toggleDropdown = (menuId) => {
    setMenuState((prevState) =>
      prevState.map((menu) => 
        menu.id === menuId
          ? { ...menu, isOpen: !menu.isOpen }
          : { ...menu, isOpen: false }  
      )
    );
  };

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
      : (window.location.href = getCurrentMenuItem.path);
  }

  return (
    <nav className="flex flex-col lg:flex-row lg:items-center gap-6 mb-3 lg:mb-0">
      {shoppingViewHeaderMenuItems.map((menuItem) => {
        const isActive =
          location.pathname === menuItem.path ||
          menuItem.subMenu?.some((sub) => location.pathname === sub.path);

        const isOpen = menuState.find(
          (menu) => menu.id === menuItem.id
        )?.isOpen;

        return (
          <div key={menuItem.id} className="relative group">
            {/* Menu Item */}
            <Label
              onClick={() =>
                menuItem.subMenu
                  ? toggleDropdown(menuItem.id)
                  : handleNavigate(menuItem)
              }
              className={`text-md font-bold py-5 px-2 cursor-pointer transition-colors ${
                isActive ? "text-red-600" : "text-blue-800"
              }`}
            >
              {menuItem.label}
              <span
                className={`absolute left-1/2 bottom-[-6px] transform -translate-x-1/2 h-[2px] bg-red-600 transition-all duration-300 ${
                  isActive ? "w-0" : "w-0 lg:group-hover:w-full"
                }`}
              ></span>
            </Label>

            {/* Dropdown Menu */}
            {menuItem.subMenu && (
              <>
                {/* Mobile Dropdown */}
                <div
                  className={`lg:hidden ${
                    isOpen ? "block" : "hidden"
                  } relative mt-2 bg-blue-700 text-white text-sm font-bold shadow-lg`}
                >
                  {menuItem.subMenu.map((subItem) => (
                    <div
                      key={subItem.id}
                      className="px-4 py-2 hover:bg-blue-900 cursor-pointer"
                      onClick={() => (window.location.href = subItem.path)}
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>

                {/* Desktop Dropdown */}
                <div className="hidden lg:group-hover:block mt-2 absolute lg:left-0 lg:top-full w-64 bg-blue-700 text-white text-sm font-bold shadow-lg">
                  {menuItem.subMenu.map((subItem) => (
                    <div
                      key={subItem.id}
                      className="px-4 py-2 hover:bg-blue-900 cursor-pointer"
                      onClick={() => (window.location.href = subItem.path)}
                    >
                      {subItem.label}
                    </div>
                  ))}
                </div>
              </>
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
      {!user ? (
        <Button
          onClick={() => navigate("auth/login")}
          className="flex items-center gap-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-bold hover:bg-blue-700"
        >
          <LogIn className="w-4 h-4" />
          Đăng nhập
        </Button>
      ) : (
        <>
          <Sheet
            open={openCartSheet}
            onOpenChange={() => setOpenCartSheet(false)}
          >
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

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="bg-black cursor-pointer">
                <AvatarFallback className="bg-black text-white font-extrabold">
                  {user.userName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="right" className="w-56">
              <DropdownMenuLabel>
                Đã đăng nhập {user.userName}
              </DropdownMenuLabel>
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
