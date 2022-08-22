import React from "react";

const DetailCard = ({
  state,
  confirmed_cases,
  cases_on_admission,
  discharged,
  death,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-fit bg-primary-1 py-4 px-8 text-white font-bold rounded-lg">
      <span>{state}</span>
      <div className="flex w-full justify-between">
        <span>Confirmed Cases:</span>
        <span>{confirmed_cases}</span>
      </div>
      <div className="flex w-full justify-between">
        <span>Cases on admission:</span>
        <span>{cases_on_admission}</span>
      </div>
      <div className="flex w-full justify-between">
        <span>Discharged:</span>
        <span>{discharged}</span>
      </div>
      <div className="flex w-full justify-between">
        <span>Death:</span>
        <span>{death}</span>
      </div>
    </div>
  );
};

export default DetailCard;
