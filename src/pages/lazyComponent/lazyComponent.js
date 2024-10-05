import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchDataDetails } from "../../redux/reducer/counterReducer";
import { toast } from "react-toastify";
// import { loaderFalse } from "../../redux/reducer/loaderReducer";

function LazyComponent() {
  const allProducts = useSelector((state) => state?.counter?.data);
  const [id, setId] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if data already exists
    if (allProducts && allProducts.length === 0) {
      dispatch(fetchDataDetails());
    }

    // setTimeout(() => dispatch(loaderFalse()), 3000)

    toast.success("This component will only called when it is render.")
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <h1>Lazy Component</h1>
      <h4>This component will only load when it is called.</h4>
      <h2>Dummy Product Details</h2>
      <h4>
        Here product details api is calling in Redux Middleware. If you want
        different product then change the input value.
      </h4>
      <br />
      <input
        min="0"
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <br />
      <br />
      <br />
      <div>
        <div>
          Product Name :- <h3>{allProducts?.[id]?.title}</h3>
          Product Price :- <h3>{allProducts?.[id]?.price}</h3>
        </div>
      </div>
      <br />
      <Link to="/">Home</Link>
    </main>
  );
}

export default LazyComponent;
