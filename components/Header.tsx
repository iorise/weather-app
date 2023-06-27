interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <div
      className={`relative z-[2] text-white text-2xl m-auto w-full items-center justify-center text-center font-bold ${className}`}
    >
      <div>
        <h1>Weather App</h1>
      </div>
    </div>
  );
};

export default Header;
