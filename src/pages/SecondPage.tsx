// SecondPage.tsx
import React, { useEffect, useState } from "react";
import "../styles/secondPage.css";

const SecondPage: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scrollable-container">
      <div className="background-image">
        {/* Add your content here */}
        <h1>Your Content</h1>
        <p>Присоединитесь к</p>
        <br />
        <p>битве древнейших</p>
      </div>
    </div>
  );
};

export default SecondPage;
