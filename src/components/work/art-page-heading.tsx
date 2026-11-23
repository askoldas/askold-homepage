import { ArtVideo } from "./art-video";
import styles from "./art-page-heading.module.css";

export function ArtPageHeading({ kind }: { kind: "work" | "services" }) {
  const work = kind === "work";
  const name = work ? "bonsai" : "capital";
  return <header className={`${styles.heading} container`}>
    <div className={styles.copy}><h1>{work ? <>Work you can<br />look into.</> : <>Design with<br />a clear purpose.</>}</h1><p>{work ? "Different businesses, different requirements. Selected websites and interfaces, with the thinking and scope behind them." : "Visual identity, web design and custom development, connected from the start. Work with me on a complete project or a focused part of your brand or website."}</p></div>
    <div className={styles.art}><ArtVideo playback="loop" src={`/media/art/${name}.mp4`} poster={`/media/art/${name}-poster.webp`} label={work ? "bonsai animation" : "classical capital animation"} /></div>
  </header>;
}
