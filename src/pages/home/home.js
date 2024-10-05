import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../redux/reducer/counterReducer";
import "./home.css";
import { Link } from "react-router-dom";
import {
  removeLocalStorageItem,
  setLocalStorageItem,
} from "../../services/storage";
import { MidSizeButton } from "../../core/sub_components/buttons/buttons";

export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="home-main-container">
      <div>React Boiler Plate Home Page</div>
      <hr />
      <div>
        <Link to="/protected">Link to Protected Page</Link>
      </div>
      <div>It will redirect here if you are not Authanticated</div>
      <div>
        <div className="home-buttons-group">
          <span
            className="home-button"
            onClick={() => setLocalStorageItem("token", "wyb")}
          >
            <MidSizeButton text="Click Here for Authentication" />
          </span>
          <span
            className="home-button"
            onClick={() => removeLocalStorageItem("token")}
          >
            <MidSizeButton text="Click Here for Un-Authentication" />
          </span>
        </div>
      </div>
      <div>
        <hr />
        <div>
          <h2>Redux Setup</h2>

          <div>
            <div className="home-buttons-group">
              <span
                className="home-button"
                onClick={() => dispatch(increment())}
              >
                <MidSizeButton text="Increment By Redux" />
              </span>
              <pre> {count} </pre>
              <span
                className="home-button"
                onClick={() => dispatch(decrement())}
              >
                <MidSizeButton text="Decrement By Redux" />
              </span>
            </div>
          </div>
        </div>
        <br />
        <div>
          <Link to="fetch/3">Fetch Data</Link>
        </div>
      </div>
    </div>
  );
}
