import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import DetailCard from "./components/DetailCard";
import { setData } from "./redux/stateSlice";

function App() {
  const { data } = useSelector((state) => state.covidData);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://covidnigeria.herokuapp.com/api")
      .then((res) => {
        dispatch(setData(res.data.data));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, [dispatch]);
  return (
    <div className="w-full h-fit flex flex-col bg-primary-2 gap-y-8 px-20 py-16">
      <h1 className="text-white font-bold text-3xl">COVID-19 DATA</h1>

      {data && (
        <>
          <div className="flex flex-col items-center justify-center w-full h-fit bg-primary-1 py-4 text-white font-bold rounded-lg px-8">
            <div className="flex w-full justify-between">
              <span>Total Confirmed Cases: </span>
              <span>{data.totalConfirmedCases}</span>
            </div>
            <div className="flex w-full justify-between">
              <span>Total Samples Tested: </span>
              <span>{data.totalSamplesTested}</span>
            </div>
            <div className="flex w-full justify-between">
              <span>Total Active Cases: </span>
              <span>{data.totalActiveCases}</span>
            </div>
            <div className="flex w-full justify-between">
              <span>Discharged: </span>
              <span>{data.discharged}</span>
            </div>
            <div className="flex w-full justify-between">
              <span>Death: </span>
              <span>{data.death}</span>
            </div>
          </div>
          {data.states.map((state) => (
            <DetailCard
              key={state._id}
              confirmed_cases={state.confirmedCases}
              discharged={state.discharged}
              death={state.death}
              cases_on_admission={state.casesOnAdmission}
              state={state.state}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;
