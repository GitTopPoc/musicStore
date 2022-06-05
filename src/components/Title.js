import React from "react";

export default function Title({ name, category }) {
  return (
    <div className="text-center pt-4">
      <h1 className="text-capitalize font-weight-bold">
        {name} <span> {category}</span>
      </h1>
    </div>
  );
}
