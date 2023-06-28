import { useState } from "react";

import Menu from "./components/Menu";
import Title from "./components/Title";
import Categories from "./components/Categories.jsx";

import menu from "./data.js";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu || []);
  const [categories, setCategories] = useState(allCategories || []);

  const filterMenuItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    const filteredMenuItems = menu.filter((item) => item.category === category);
    setMenuItems(filteredMenuItems);
  };

  return (
    <main>
      <section className="menu">
        <Title title="Our Menu" />
        <Categories categories={categories} filterMenuItems={filterMenuItems} />
        <Menu
          menuItems={menuItems}
          categories={categories}
          filterMenuItems={filterMenuItems}
        />
      </section>
    </main>
  );
};
export default App;
