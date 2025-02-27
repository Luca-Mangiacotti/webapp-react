import Logo from "./UI/Logo";
export default function Header() {
  return (
    <header className=" p-4 text-center shadow-2xl  sticky top-0 bg-gradient-to-b from-gray-800 to-gray-300 min-h-full">
      <Logo />
    </header>
  );
}
