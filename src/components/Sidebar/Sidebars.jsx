import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ onSelectCategory }) => {
  const [isActive, setIsActive] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  // Toggle the sidebar class
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  // Handle category selection
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  const categories = [
    {
      name: "Electronics",
      submenu: ["Computers", "Phones", "Televisions"],
    },
    {
      name: "Home Decor",
      submenu: ["Furniture", "Lighting", "Wall Art"],
    },
    {
      name: "Fashion",
      submenu: ["Men", "Women", "Kids"],
    },
    {
      name: "Books",
      submenu: ["Fiction", "Non-fiction", "Comics"],
    },
  ];
  

    // Filter categories based on search term
    const filteredCategories = categories
    .map((category) => {

      // If the category name matches, include all its submenus
      if (category.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return category;
      }

      // Otherwise, filter the submenus
      const filteredSubmenu = category.submenu.filter((submenu) =>
        submenu.toLowerCase().includes(searchTerm.toLowerCase())
      );

      // Include the category only if it has matching submenus
      if (filteredSubmenu.length > 0) {
        return { ...category, submenu: filteredSubmenu };
      }

      return null; 
    })
    .filter(Boolean);

  
    return (
    <div className="side-bar-container">
      {/* Sidebar Toggle */}
      <div className={isActive ? "side-menu-header active" : "side-menu-header"}>
        <FontAwesomeIcon onClick={handleToggle} icon={faBars} />
      </div>

      {/* Sidebar Menu */}
      <div className={isActive ? "side-menu active" : "side-menu"}>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Dynamic Menu */}
        {filteredCategories.map((category) => (
          <div key={category.name}>
            <input type="checkbox" id={category.name} />
            <label className="icon-handler" htmlFor={category.name}>
              {category.name}
              {isActive && (
                <FontAwesomeIcon onClick={handleToggle} icon={faTimes} />
              )}
            </label>

            <div className="submenu">
              {category.submenu.map((submenu) => (
                <a
                  key={submenu}
                  onClick={() => handleCategoryClick(submenu)}
                  href="#"
                  className={activeCategory === submenu ? "active" : ""}
                >
                  {submenu}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

