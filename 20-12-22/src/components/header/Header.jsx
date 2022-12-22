import "./header.scss";

export const Header = () => {
  const menuItems = [
    { label: "Home", href: "#header", id: 1 },
    { label: "About", href: "#about", id: 2 },
    { label: "Contact Us", href: "#contact", id: 3 },
  ];

  return (
    <header className="Header">
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="https://m.media-amazon.com/images/I/51Cz8vu+GWL.png"
              alt="logo"
            />
          </div>
          <div className="col">
            <nav className="nav">
              <ul role="menu">
                {menuItems.map(function (menuItem) {
                  console.log({ menuItem });

                  return (
                    <li key={menuItem.id} role="menuitem">
                      <a href={menuItem.href}>{menuItem.label}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
