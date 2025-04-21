import styles from "../styles/bubble.module.css";

const BubbleText = ({ text, style }: { text: string; style: string }) => {
  return (
    <h2 className={style}>
      {text.split("").map((child, idx) => (
        <span className={styles.hoverText} key={`${child}-${idx}`}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
