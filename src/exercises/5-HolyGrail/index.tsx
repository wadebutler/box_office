/**
 * 5. Holy Grail
 *
 * We are in 2021.
 * Using CSS, how would you build the layout seen in the holy-grail.png picture.
 * Feel free to update the html structure and add classNames in this document if needed.
 */

import css from "./style.module.css";

// normally I would break things out into components but when doing something so small it seems unnecessary

const HolyGrail = () => {
  return (
    <div className={css.Container}>
      <header>
        <h1>Header</h1>
      </header>

      <div className={css.ContentContainer}>
        <nav>
          <h3>Menu</h3>

          <ul>
            <li><p>Item 1</p></li>
            <li><p>Item 2</p></li>
            <li><p>Item 3</p></li>
            <li><p>Item 4</p></li>
            <li><p>Item 5</p></li>
          </ul>
        </nav>

        <main>
          <h2>Content</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </main>

        <aside>
          <p>ADS</p>
          <p>ADS</p>
        </aside>
      </div>

      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default HolyGrail;
