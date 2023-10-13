import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faMagnifyingGlass,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faYoutube,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import row from "./row.png";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="flex p-6 pr-0 bg-sky-950">
        <div class="flex">
          <FontAwesomeIcon icon={faPhone} className="text-white ml-5 mt-2" />
          <p class="ml-3 text-white">(222) 555-0118</p>
        </div>

        <p class="ml-20 text-white">
          <FontAwesomeIcon icon={faEnvelope} className="text-white pr-4" />
          michelle.rivera@example.com
        </p>
        <p class="ml-60 text-white">
          Follow Us and get a chance to win 80% off
        </p>
        <div class=" ml-[290px] flex ">
          <p class=" text-white">Follow Us :</p>
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-white ml-5 mt-2"
          />
          <FontAwesomeIcon icon={faYoutube} className="text-white ml-5 mt-2" />
          <FontAwesomeIcon icon={faFacebook} className="text-white ml-5 mt-2" />
          <FontAwesomeIcon icon={faTwitter} className="text-white ml-5 mt-2" />
        </div>
      </div>
      <div className="flex">
        <div>
          <h2 className="mt-[20px] ml-[60px] font-bold text-[30px]">Bandage</h2>
        </div>
        <ul className="flex mt-[35px] ml-40">
          <li className="font-medium ml-10 text-gray-600">Home</li>
          <div>
            <li
              className="ml-8"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              Shop
            </li>
            {isHovering && (
              <div className="">
                <a className="block">######</a>
                <a className="block">######</a>
                <a className="block">######</a>
              </div>
            )}
          </div>

          <li className="font-medium ml-8 text-gray-600">About</li>
          <li className="font-medium ml-8 text-gray-600">Contact</li>
        </ul>
        <div className="flex mt-[35px] ml-[42%]">
          <h2 className="text-blue-400 font-medium">
            <FontAwesomeIcon icon={faUser} className="mr-4 text-blue-400" />
            Login / Register
          </h2>
          <div className="flex ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="ml-[30px] mt-[5px] text-blue-400"
            />

            <p className="ml-6 text-blue-400">
              <FontAwesomeIcon icon={faCartShopping} />1
            </p>

            <p className="ml-6 text-blue-400">
              <FontAwesomeIcon icon={faHeart} />1
            </p>
          </div>
        </div>
      </div>
      <img src={row} alt="sa" className="ml-[100px] mt-20" />
    </>
  );
};

export default Header;
