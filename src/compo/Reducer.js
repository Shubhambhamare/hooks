import { useState, useEffect } from "react";


function Effect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(0);

  useEffect(() => {
    setName(() => count * 2);
  }, [count]);
  console.log("use Effect") 

  return (
    <div>
        <h1>useEffect</h1>
      <h4>Count{count}</h4>
      <button onClick={() => setCount((count) => count + 1)}>Click Here</button>
      
      <h4>Count by useEffect {name}</h4>
    </div>
  );
}
export default Effect;