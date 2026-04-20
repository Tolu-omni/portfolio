import { useEffect, useState } from "react";

export function useLagosTime() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-NG", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return time;
}