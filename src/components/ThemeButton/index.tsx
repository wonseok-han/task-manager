import { useEffect, useState } from "react";

import { useTheme } from "next-themes";

const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <p>다크 모드</p> : <p>라이트 모드</p>}
      </button>
    </>
  );
};

export default ThemeButton;
