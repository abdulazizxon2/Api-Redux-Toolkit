import React from 'react'

export default function Mahsulot() {
  let getApi1 = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setApiData(json));
  };
  useEffect(() => {
    getApi1();
  }, []);
  return (
    <div>
      <h1>salom</h1>
    </div>
  )
}
