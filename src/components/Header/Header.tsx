import reactLogo from 'assets/react.svg';

const Header = () => (
  <nav className="w-full py-4 px-2 shadow-md dark:shadow-gray-700 dark:shadow-sm">
    <div className="container mx-auto flex justify-between items-center">
      <span className="flex flex-col md:flex-row md:items-end ">
        <span className="text-4xl font-medium mb-1 md:mb-0 md:mr-3">Welcome</span>
        <span className="font-mono block overflow-hidden border-r-2 border-secondary-600 whitespace-nowrap pr-1 animate-typewriter ">
          I&apos;m Hossein Ahmadi
        </span>
      </span>
      <img src={reactLogo} alt="React logo" />
    </div>
  </nav>
);

export default Header;
