import React from "react";

export default function LoadingAnimation() {
  return (
    <div className="text-center mt-10 text-blue-500 max-full">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 mx-auto"></div>
      <p>Loading...</p>
    </div>
  );
}
