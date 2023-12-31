import { useEffect } from "react";
const UseTitle = (title: string) => {
  useEffect(() => {
    document.title = `${title}-Online Book Shop.`;
  }, [title]);
};

export default UseTitle;
