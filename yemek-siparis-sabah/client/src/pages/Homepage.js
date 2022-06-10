import React, { useEffect, useState } from "react";

import Foods from "../components/Foods";

import { useDispatch, useSelector } from "react-redux";
import { getAllFoods } from "../actions/FoodActions";

function Homepage() {
  // const [foods, setFoods] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3030/getfoods")
  //     .then((response) => setFoods(response.data))
  //     .catch((err) => console.log(err));
  // }, []);

  const dispatch = useDispatch();
  const foodState = useSelector((state) => state.getAllFoodsReducer);
  const { foods, error, loading } = foodState;

  useEffect(() => {
    dispatch(getAllFoods());
  }, []);

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>Loading..</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          foods.map((food) => (
            <div className="col-md-4" key={food._id}>
              <Foods food={food} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Homepage;
