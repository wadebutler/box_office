/**
 * 2. Counter
 *
 * My counter component is not working.
 * I want to increment by one the count variable each time I click the Increment button.
 */

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>My Counter 2</h1>

      <div>{count}</div>

      {/* on click update count, I could have kept it as a seperate component and passes a function call through props, but it felt like over engineering */}
      <button
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
