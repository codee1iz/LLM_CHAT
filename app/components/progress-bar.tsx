import React, { useEffect, useState } from "react";
import styles from "./progress-bar.module.scss";

const SEGMENTS = 10;

export function ProgressBar({ show }: { show: boolean }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!show) {
      setProgress(0);
      return;
    }
    setProgress(1);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < SEGMENTS) return prev + 1;
        return 1;
      });
    }, 120);
    return () => clearInterval(interval);
  }, [show]);

  return (
    <div className={styles.progressBarDigitalContainer}>
      {Array.from({ length: SEGMENTS }).map((_, i) => (
        <div
          key={i}
          className={
            i < progress
              ? styles.progressBarSegmentActive
              : styles.progressBarSegment
          }
        />
      ))}
    </div>
  );
} 