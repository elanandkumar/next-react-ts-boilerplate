const Layout = ({ children }) => {
  return (
    <>
      <header>
        <a href={'/'}>Home</a>
        <a href={'/about'}>About</a>
      </header>
      {children}
      <footer>This is footer</footer>
    </>
  );
};

export default Layout;
