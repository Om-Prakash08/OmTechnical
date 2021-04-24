import React from "react";
import Sdata from "./Sdata";
import Card from "./card";

function Services() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((data, index) => {
                return (
                  <Card key={index} imgsrc={data.imgsrc} title={data.title} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
