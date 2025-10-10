import s from "./light.module.scss";

export default function Light() {
  return (
    <>
      <div className={s.light} />
      <div className={s.light_center} />
      <div className={s.light_right} />
    </>
  );
}
