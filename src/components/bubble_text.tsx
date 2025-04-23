import { ReactNode } from "react";
import styles from "../styles/bubble.module.css";

const BubbleText = ({
  text,
  style,
  children,
}: {
  text: string;
  style: string;
  children?: ReactNode;
}) => {
  return (
    <h2 className={style}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={`${child}-${idx}`}>
          {child}
        </span>
      ))}
      {children}
    </h2>
  );
};

export default BubbleText;
