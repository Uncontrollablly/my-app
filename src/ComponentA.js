import { useEffect, useState } from "react";

const ComponentA = () => {
  const [list, setList] = useState(["apple", "banana", "peach"]);
  const [winRef, setWinRef] = useState(window);
  const handler = (event) => {
    console.log(event.data, "abc");
  };

  window.addEventListener("message", handler);

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("message", handler);

    return window.removeEventListener("message", handler);
  }, []);

  return (
    <div>
      I am A
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          console.log("onClick", winRef.name);

          winRef.postMessage("This is the message from a", "*");
        }}
      >
        post message
      </button>
      <div>
        <a href="/b">open B</a>
      </div>
      <button
        onClick={() => {
          let winRef = window.open("/b", "abc");
          setWinRef(winRef);
        }}
      >
        open B by button
      </button>
    </div>
  );
};

export default ComponentA;
