import React from "react";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-mode">
      <div className="container mx-auto py-1 md:left-20 flex items-center justify-center">
        <p className="text-xs text-center text-dark-content dark:text-light-content">
          Designed in React{" "}
          <a
            className="font-medium"
            href="https://pavanmg.in"
            target="_blank"
            rel="noreferrer noopener"
          >
            by 
          </a>{" "}
          <span className="text-gradient font-medium">Ahad</span>
          <span className="text-gradient font-medium"> Yousaf</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
