import { useEffect } from "react";

export default ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Dogs`;
    document.querySelector("meta[name=description]")
      .setAttribute("content", description || "");
  }, []);

  return <></>;
}