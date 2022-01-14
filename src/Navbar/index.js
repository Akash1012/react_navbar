import React from "react";
import "../App.css";

const NavBar1 = () => {
  const menu = [
    {
      label: "Home",
      url: "/",
      title: "Home",
    },
    {
      label: "About",
      url: "/about",
      title: "About",
    },
    {
      label: "Products",
      url: "/products",
      title: "Products",
      children: [
        {
          label: "Products1",
          url: "/Products1",
          title: "Products1",
        },
        {
          label: "Products2",
          url: "/Products2",
          title: "Products2",
        },
      ],
    },
    {
      label: "Services",
      url: "/services",
      title: "Services",
      children: [
        {
          label: "Services1",
          url: "/Services1",
          title: "Services1",
        },
        {
          label: "Services2",
          url: "/Services2",
          title: "Services2",
        },
      ],
    },
    {
      label: "Contact",
      url: "/contact",
      title: "Contact",
    },
  ];

  const [data, setData] = React.useState(menu);

  return (
    <header className="menu-bar">
      <img src="./Lays.png" alt="Image" />
      <nav>
        <ul class="nav__links">
          {data.map((d) => {
            return (
              <>
                <li>
                  <a href={d.url}>{d.label}</a>
                  <div className="sub_nav_1">
                    <ul>
                      {d.children &&
                        d.children.map((ch) => {
                          return (
                            <li>
                              <a href={ch.url}>{ch.label}</a>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                </li>
              </>
            );
          })}
          <li>
            <a href="#">Services</a>
            <div className="sub_nav_1">
              <ul className="sub_nav_ul">
                <li>
                  <a href="#">Product 1</a>
                </li>
                <li>
                  <a href="#">Product 2</a>
                </li>
                <li>
                  <a href="#">Product 3</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
      <a href="#" class="cta">
        <button>Need Help</button>
      </a>
    </header>
  );
};

export default NavBar1;
