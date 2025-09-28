import s from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  padding?: number;
  gap?: number;
  className?: string;
}

export default function Section({
  children,
  padding,
  gap = 48,
  className,
}: Props) {
  return (
    <section
      className={`${s.container} ${className}`}
      style={{ paddingBlock: padding, gap }}
    >
      {children}
    </section>
  );
}
