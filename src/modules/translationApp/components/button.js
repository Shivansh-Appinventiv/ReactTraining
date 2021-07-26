import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button type={`button`} className={`langButtons`} onClick={onClick}>
      {children}
    </button>
  );
}
