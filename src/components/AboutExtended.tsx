import { useEffect, useState } from "react";
import { skills } from "../data/portfolio";

type SpotifyNowPlaying = {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  progressMs: number;
  durationMs: number;
};

export default function AboutExtended() {
  const [spotify, setSpotify] = useState<SpotifyNowPlaying | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    const fetchNowPlaying = async () => {
      try {
        const res = await fetch("/api/spotify-now-playing");
        const data = await res.json();

        if (mounted) {
          setSpotify(data);
        }
      } catch {
        if (mounted) {
          setSpotify(null);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    fetchNowPlaying();
    const interval = setInterval(fetchNowPlaying, 15000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const progressPercent =
    spotify && spotify.durationMs > 0
      ? Math.min((spotify.progressMs / spotify.durationMs) * 100, 100)
      : 0;

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section id="about-extended" className="reveal">
      <div className="container split-grid">
        <article className="panel interactive-block reveal reveal-delay-1">
          <div className="panel-body">
            <div className="section-head" style={{ marginBottom: 20 }}>
              <div>
                <h2>About Me</h2>
              </div>
            </div>

            <div className="about-copy">
              <p>
                I’m a product-focused developer who likes making interfaces feel
                effortless. I care about structure, visual rhythm, and apps that
                don’t just work — they feel right.
              </p>
              <p>
                My thing is building modern experiences with React, clean
                architecture, and strong frontend systems. I can take a concept
                from rough idea to something launch-ready.
              </p>
              <p>
                Outside of code, I’m inspired by music, motion, culture, design
                systems, and products that know how to leave an impression.
              </p>
            </div>

            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>

        <aside className="panel interactive-block spotify-card reveal reveal-delay-2">
          <div className="panel-body">
            <div className="spotify-top">
              <div className="spotify-badge">
                <span className="spotify-dot"></span>
                <span>Now Playing</span>
              </div>

              {spotify?.songUrl ? (
                <a
                  className="theme-toggle"
                  href={spotify.songUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Spotify
                </a>
              ) : (
                <button className="theme-toggle" type="button">
                  Spotify
                </button>
              )}
            </div>

            <div className="track">
              <div
                className="album"
                style={
                  spotify?.albumImageUrl
                    ? {
                        backgroundImage: `url(${spotify.albumImageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }
                    : undefined
                }
              ></div>

              <div>
                {loading ? (
                  <>
                    <h3>Loading...</h3>
                    <p>Checking Spotify</p>
                  </>
                ) : spotify?.isPlaying ? (
                  <>
                    <h3>{spotify.title}</h3>
                    <p>{spotify.artist}</p>
                  </>
                ) : (
                  <>
                    <h3>Nothing playing right now</h3>
                    <p>Open Spotify and play something</p>
                  </>
                )}
              </div>
            </div>

            <div className="progress">
              <div className="bar">
                <span style={{ width: `${progressPercent}%` }}></span>
              </div>
              <div className="tiny">
                {spotify
                  ? `${formatTime(spotify.progressMs)} / ${formatTime(
                      spotify.durationMs
                    )}`
                  : "0:00 / 0:00"}
              </div>
            </div>

            <div className="small-grid">
              <div className="small-card">
                <h4>Status</h4>
                <p className="tiny">
                  {spotify?.isPlaying ? "Currently playing" : "Idle"}
                </p>
              </div>
              <div className="small-card">
                <h4>Artist</h4>
                <p className="tiny">{spotify?.artist || "Unknown"}</p>
              </div>
              <div className="small-card">
                <h4>Album</h4>
                <p className="tiny">{spotify?.album || "Unknown"}</p>
              </div>
              <div className="small-card">
                <h4>Link</h4>
                <p className="tiny">
                  {spotify?.songUrl ? (
                    <a href={spotify.songUrl} target="_blank" rel="noreferrer">
                      Open in Spotify
                    </a>
                  ) : (
                    "Unavailable"
                  )}
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}