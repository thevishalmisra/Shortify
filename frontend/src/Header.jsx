function Header() {
  return (
    <header className="w-full bg-base-200 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">
          🔗 Shortify
        </h1>

        {/* Nav Links */}
        <nav className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-primary"></a>
          </nav>

      </div>
    </header>
  );
}

export default Header;
