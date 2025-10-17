import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.svg";
import logoname from "../Images/logoname.svg";
import dropdown from "../Images/dropdown.svg";
import cart from "../Images/cart.svg";
import menu from "../Images/menu.svg";

const Header = () => {
  const [show, setShow] = useState(false);

  const showMenu = () => {
    setShow(true);
  };

  const closeMenu = () => {
    setShow(false);
  };

  return (
    <nav className="w-full ">
      <div className="max-w-[1290px] w-full mx-auto flex items-center justify-between py-3 px-2 md:px-4 lg:px-6 ">
        <div className="flex items-center relative">
          <img
            src={logo}
            alt="img"
            className="w-[119px] h-[67px] max-[426px]:w-[80px]"
          />
          <img
            src={logoname}
            alt="img"
            className="w-[111px] h-[27px] absolute top-[50%] transform -translate-y-[50%] left-[100px] max-[426px]:left-[67px]"
          />
        </div>
        <div className="max-[1071px]:hidden ">
          <nav>
            <ul className="w-[521.66px] flex justify-between max-[1208px]:w-[100%] max-[1208px]:gap-[20px] ">
              <li className="flex items-center gap-[3px] ">
                <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                  Home
                </Link>
                <img src={dropdown} alt="img" />
              </li>
              <li>
                <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                  About Us
                </Link>
              </li>
              <li className="flex items-center  gap-[3px]">
                <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                  Shop
                </Link>
                <img src={dropdown} alt="img" />
              </li>
              <li className="flex items-center  gap-[3px]">
                <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                  Blog
                </Link>
                <img src={dropdown} alt="img" />
              </li>
              <li className="flex items-center  gap-[3px]">
                <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                  Pages
                </Link>
                <img src={dropdown} alt="img" />
              </li>
              <li>
                <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-[25px] max-[1071px]:hidden ">
          <div className="relative">
            <img
              src={cart}
              alt="img"
              className="w-[19.329999923706055px] h-[17px] "
            />
            <span className="w-[16px] h-[16px] rounded-[16px] bg-[#212121] text-[12px] font-[Oswald] text-[#FFFFFF]  flex justify-center items-center absolute top-[-12px] right-[-10px]">
              1
            </span>
          </div>
          <div>
            <Link className="font-[Oswald] font-[600] bg-[#FFC222] text-[17px] text-[#FFFFFF] w-[181.91px] h-[57px] rounded-[7px] flex justify-center  items-center hover:bg-[#fcb605ad]">
              Contact Us
            </Link>
          </div>
          <div>
            <img src={menu} alt="img" className="w-[31px] h-[18px]" />
          </div>
        </div>
        <div className="min-[1071px]:hidden block">
          {show ? (
            <img
              src={menu}
              alt="img"
              className="w-[31px] h-[18px]"
              onClick={() => closeMenu()}
            />
          ) : (
            <img
              src={menu}
              alt="img"
              className="w-[31px] h-[18px]"
              onClick={() => showMenu()}
            />
          )}
        </div>
        {show ? (
          <div className="w-[200px]  h-fit p-[20px] absolute right-[30px] top-[70px] shadow-[0px_0px_0px_.1px_black] rounded-[10px]  min-[1071px]:hidden block z-1 bg-white">
            <nav>
              <ul>
                <li className="flex items-center gap-[3px] justify-center p-[10px]">
                  <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                    Home
                  </Link>
                  <img src={dropdown} alt="img" />
                </li>
                <li className="flex justify-center items-center p-[10px]">
                  <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                    About Us
                  </Link>
                </li>
                <li className="flex items-center  gap-[3px] justify-center p-[10px]">
                  <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                    Shop
                  </Link>
                  <img src={dropdown} alt="img" />
                </li>
                <li className="flex items-center  gap-[3px] justify-center p-[10px]">
                  <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                    Blog
                  </Link>
                  <img src={dropdown} alt="img" />
                </li>
                <li className="flex items-center  gap-[3px] justify-center p-[10px]">
                  <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                    Pages
                  </Link>
                  <img src={dropdown} alt="img" />
                </li>
                <li className="flex justify-center items-center p-[10px]">
                  <Link className="font-[Oswald] font-[500] text-[18px] text-[#212121] hover:text-[#616161]">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-[25px] justify-center">
              <div className="relative">
                <img
                  src={cart}
                  alt="img"
                  className="w-[19.329999923706055px] h-[17px] "
                />
                <span className="w-[16px] h-[16px] rounded-[16px] bg-[#212121] text-[12px] font-[Oswald] text-[#FFFFFF]  flex justify-center items-center absolute top-[-12px] right-[-10px]">
                  1
                </span>
              </div>
              <div>
                <Link className="font-[Oswald] font-[600] bg-[#FFC222] text-[17px] text-[#FFFFFF] w-[100px] h-[40px] rounded-[7px] flex justify-center  items-center hover:bg-[#fcb605ad]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Header;
