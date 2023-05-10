import React from "react";

export const Controls = ({ currentItem, totalItem, onChange }) => {
  return (
    <section>
      <button
        type="button"
        disabled={currentItem === 1}
        onClick={() => onChange(-1)}
      >
        Back
      </button>
      <button
        type="button"
        disabled={currentItem === totalItem}
        onClick={() => onChange(+1)}
      >
        Go
      </button>
    </section>
  );
};
