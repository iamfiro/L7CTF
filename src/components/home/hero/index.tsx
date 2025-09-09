import s from "./style.module.scss";

export default function Hero() {
  return (
    <section className={s.hero}>
      <img
        className={s.hero_member}
        src="/images/hero/layer7_member.png"
        alt="Layer7 CTF"
      />
      <div className={s.hero_text}>
        <div>
          <span>2025</span>
          <span>WE Hack THE</span>
        </div>
        {/* <img src="/hero_text_3half.svg" alt="Layer7 CTF" /> */}
        <img
          className={s.title_image}
          src="/images/hero/hero_text_2half.svg"
          alt="Layer7 CTF"
        />
        <img
          className={s.title_image}
          src="/images/hero/hero_text_half.svg"
          alt="Layer7 CTF"
        />
        <img
          className={s.title_image}
          src="/images/hero/hero_text.svg"
          alt="Layer7 CTF"
        />
      </div>
    </section>
  );
}
