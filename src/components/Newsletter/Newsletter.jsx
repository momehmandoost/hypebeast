import React from "react";
import "./Newsletter.scss";

export const Newsletter = () => {
  return (
    <div className="newlettercontain">
      <div className="newsletter">
        <h3>Subscribe Our Newsletter</h3>
        <form>
          <input type="email" placeholder="Your@Email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
};
