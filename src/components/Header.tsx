const Header = () => {
  return (
    <header className="flex justify-between w-full px-16 py-5">
      <div
        className="flex justify-center items-center gap-2 p-1.5 rounded-md"
        style={{ background: "#18191D" }}
      >
        <div className="rounded-full bg-white w-6 h-6 flex justify-center items-center">
          <img src="/icons/Group 185.svg" alt="icon" width="14px" />
        </div>
        <p>ETH/USDT</p>
        <p style={{ color: "#0AC18E" }}>1137.62 +2.62%↑</p>
      </div>
      <div
        className="flex justify-center items-center gap-2 p-1.5 rounded-md"
        style={{ background: "#18191D" }}
      >
        <img src="/icons/avatar.png" alt="icon" />
        <p>zash</p>
        <p>| User ID: 11026666</p>
      </div>
    </header>
  );
};

export default Header;
