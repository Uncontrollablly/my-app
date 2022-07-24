import { useEffect } from "react";

const ComponentB = () => {
  const handler = (event) => {
    console.log(event.data);
  };

  window.addEventListener("message", handler);

  useEffect(() => {
    window.addEventListener("message", handler);

    return window.removeEventListener("message", handler);
  }, []);

  return (
    <div>
      I am B
      <button
        onClick={() => window.postMessage("This is the message from b", "*")}
      >
        post message
      </button>
    </div>
  );
};
export default ComponentB;
