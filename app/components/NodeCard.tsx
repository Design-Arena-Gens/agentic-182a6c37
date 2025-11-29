import clsx from "clsx";
import styles from "../styles/NodeCard.module.css";

export type NodeAccent =
  | "cyan"
  | "magenta"
  | "lime"
  | "orange"
  | "purple"
  | "blue";

type NodeCardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  items?: string[];
  accent?: NodeAccent;
  layout?: "tall" | "wide";
};

export function NodeCard({
  title,
  subtitle,
  description,
  items,
  accent = "cyan",
  layout = "wide"
}: NodeCardProps) {
  return (
    <article
      className={clsx(styles.card, styles[layout], styles[`accent-${accent}`])}
    >
      <header className={styles.header}>
        <h3>{title}</h3>
        {subtitle ? <span>{subtitle}</span> : null}
      </header>
      {description ? <p className={styles.description}>{description}</p> : null}
      {items && items.length ? (
        <ul className={styles.items}>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
