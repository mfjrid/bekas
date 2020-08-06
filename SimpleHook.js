import React, { useState, useEffect } from "react";

const Example = () => {
  //  Deklarasi variabel state baru yang kita sebut count
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 10) {
      document.title = `You clicked ${count} times`;
    }
  });

  return (
    <div>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={() => setCount(count + 1)}>Klik saya</button>
    </div>
  );
};

export default Example;
