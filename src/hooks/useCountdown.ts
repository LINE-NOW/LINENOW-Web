import { useEffect, useState } from "react";

type countdownFormat = "MMSS";

interface Countdown {
  total: number;
  leftMinutes: number;
  leftSeconds: number;
}

interface useCountdownProps {
  targetDate: string;
}

const useCountdown = ({ targetDate }: useCountdownProps) => {
  const target = new Date(targetDate);

  const [countdown, setCountdown] = useState<Countdown>(calculateTime(target));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCountdown = calculateTime(target);
      setCountdown(newCountdown);

      if (newCountdown.total <= 0) {
        clearInterval(intervalId);
        return;
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  const getTime = (format: countdownFormat) => {
    switch (format) {
      case "MMSS":
        return `${countdown.leftMinutes}:${countdown.leftSeconds}`;
      default:
        return `${countdown.leftMinutes}분 ${countdown.leftSeconds}초`;
    }
  };

  return { countdown, getTime };
};

export default useCountdown;

// 목표 날짜까지의 남은 시간을 계산하는 함수
function calculateTime(targetDate: Date): Countdown {
  const now = new Date();
  const target = new Date(targetDate);
  const total = Math.max(target.getTime() - now.getTime(), 0);
  const leftMinutes = Math.floor(total / (1000 * 60));
  const leftSeconds = Math.floor((total % (1000 * 60)) / 1000);
  return { total, leftMinutes, leftSeconds };
}
