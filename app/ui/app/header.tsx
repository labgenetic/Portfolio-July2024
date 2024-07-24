import BurgerMenu from "../components/burgerMenu";
import Menu from "../components/menu";
import MiniMenu from "../components/miniMenu";
import RoundImage from "../components/roundImage";


export default function Header() {
  return (
    <header className="flex items-center px-4 justify-between w-full p-2 unselectable">
      <RoundImage/>
      <Menu/>
      <BurgerMenu/>
      <MiniMenu/>      
    </header>
      )
}