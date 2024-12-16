// src/components/Footer.js
import React from "react";

export default function Footer() {
  return (
    <footer className=" text-c1 p-4 mt-10">
      <div className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dura Garage. All rights reserved.
        </p>
        {/* <p className="text-sm">
          <a href="/privacy-policy" className="hover:text-c3">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms-of-service" className="hover:text-c3">
            Terms of Service
          </a>
        </p> */}
      </div>
    </footer>
  );
}
