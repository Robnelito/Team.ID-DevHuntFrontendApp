import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function Header() {
  const [navBar, setNavBar] = useState(false)

  useEffect(() => {
    document.title = 'Landing page'
    let state = true

    window.onscroll = function () {
      myFunction()
    };

    function myFunction() {
      if (document.documentElement.scrollTop > 50) {
        setNavBar(true)
      } else {
        setNavBar(false)
      }
    }
  }, []);

  return (
    <>
      <header
        className={"hiddenElement px-4 flex h-16 text-base justify-between *:flex *:place-items-center poppins-medium"}>
        <div className={"space-x-2 w-1/6"}>
          <img className={"h-[44px]"} src="/LogoTeam.png" alt="lofo"/>
          <span className={"text-lg"}>Team.ID App</span>
        </div>
        <nav className={""}>
          <ul className={"flex space-x-8"}>
            <li>lien 1</li>
            <li>lien 2</li>
            <li>lien 3</li>
            <li>lien 4</li>
            <li>lien 5</li>
          </ul>
        </nav>
        <div className={"w-1/6 flex justify-around"}>
          <button className={"py-2 px-4 rounded-md outline outline-1"}>Log in</button>
          <Link to={"/singUp"}
                className={"py-2 px-4 rounded-md bg-black text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700"}>Sign
            up
          </Link>
        </div>
      </header>
      <div
        className={`fixed w-full h-16 overflow-x-hidden top-4 ${!navBar ? "translate-y-[-100px] opacity-0" : "opacity-100"} transition-all flex justify-center place-items-center poppins-light duration-500`}>
        <div
          className={"flex justify-between h-full space-x-3 w-2/3 bg-[#262626] p-2 rounded-xl text-white *:flex *:place-items-center"}>
          <div className={"w-3/12"}>
            <img className={"h-[44px] rounded-md"} src="/LogoTeam.png" alt="lofo"/>
          </div>
          <nav className={""}>
            <ul className={"flex justify-around w-5/5 space-x-8 *:p-2"}>
              <li>lien 1</li>
              <li>lien 2</li>
              <li>lien 3</li>
              <li>lien 4</li>
              <li>lien 5</li>
            </ul>
          </nav>
          <div className={"w-3/12 flex justify-end"}>
            <div className={"flex space-x-2"}>
              <button className={"py-2 px-4 rounded-md outline outline-1 outline-black"}>Log in</button>
              <Link to={"/singUp"}
                    className={"py-2 px-4 rounded-md bg-black text-white transition-all duration-500 hover:bg-gradient-to-r hover:from-gray-600 hover:to-gray-700"}>Sign
                up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;
