"use client";

import { useState, useEffect } from 'react';

const Clock = () => {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setDateTime(new Date());

    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!dateTime) {
    return null;
  }

  const formattedTime = dateTime.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const formattedDate = dateTime.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="fixed bg-base-200/50 m-5 mt-16 px-6 py-2 items-center justify-center rounded-xl">
      <p>{formattedTime}</p>
      {/* <p>{formattedDate}</p> */}
    </div>
  );
};

export default Clock;