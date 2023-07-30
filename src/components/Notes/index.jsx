import React from "react";

export default function Notes({notes}) {
  return (
    <div className="py-4">
      <span className="text-white">
        <span className="text-primary">Note</span> : {notes}
      </span>
    </div>
  );
}
