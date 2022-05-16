import { useEffect, useState } from "react";

import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const handleChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Switch.Group>
        <Switch
          checked={theme === "dark" ? true : false}
          onChange={handleChange}
          className={`${
            theme === "dark" ? "bg-blue-600" : "bg-gray-200"
          } relative inline-flex h-10 w-32 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              theme === "dark" ? "translate-x-24" : "translate-x-1"
            } inline-block h-6 w-6 transform rounded-full bg-white transition-transform`}
          />
          <Switch.Description className="ml-3">다크모드</Switch.Description>
        </Switch>
      </Switch.Group>
    </>
  );
};

export default ThemeSwitch;
