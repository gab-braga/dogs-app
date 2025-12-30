import { useEffect, useState } from "react";

export default (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changeMatch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    window.addEventListener("resize", changeMatch);
    changeMatch();
    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, []);

  return match;
};
