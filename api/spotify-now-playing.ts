type SpotifyArtist = {
  name: string;
};

type SpotifyImage = {
  url: string;
};

type SpotifyTrack = {
  name: string;
  duration_ms: number;
  artists: SpotifyArtist[];
  album: {
    name: string;
    images: SpotifyImage[];
  };
  external_urls: {
    spotify: string;
  };
};

type SpotifyNowPlayingResponse = {
  is_playing: boolean;
  progress_ms: number;
  item: SpotifyTrack | null;
};

export default async function handler(req: any, res: any) {
  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

    if (!clientId || !clientSecret || !refreshToken) {
      return res.status(200).json({
        isPlaying: false,
        title: "",
        artist: "",
        album: "",
        albumImageUrl: "",
        songUrl: "",
        progressMs: 0,
        durationMs: 0,
      });
    }

    const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      }),
    });

    const tokenData = await tokenRes.json();

    if (!tokenRes.ok || !tokenData.access_token) {
      return res.status(200).json({
        isPlaying: false,
        title: "",
        artist: "",
        album: "",
        albumImageUrl: "",
        songUrl: "",
        progressMs: 0,
        durationMs: 0,
      });
    }

    const nowPlayingRes = await fetch(
      "https://api.spotify.com/v1/me/player/currently-playing",
      {
        headers: {
          Authorization: `Bearer ${tokenData.access_token}`,
        },
      }
    );

    if (nowPlayingRes.status === 204 || nowPlayingRes.status > 400) {
      return res.status(200).json({
        isPlaying: false,
        title: "",
        artist: "",
        album: "",
        albumImageUrl: "",
        songUrl: "",
        progressMs: 0,
        durationMs: 0,
      });
    }

    const song = (await nowPlayingRes.json()) as SpotifyNowPlayingResponse;

    if (!song.item) {
      return res.status(200).json({
        isPlaying: false,
        title: "",
        artist: "",
        album: "",
        albumImageUrl: "",
        songUrl: "",
        progressMs: 0,
        durationMs: 0,
      });
    }

    return res.status(200).json({
      isPlaying: song.is_playing,
      title: song.item.name,
      artist: song.item.artists.map((artist) => artist.name).join(", "),
      album: song.item.album.name,
      albumImageUrl: song.item.album.images?.[0]?.url || "",
      songUrl: song.item.external_urls.spotify,
      progressMs: song.progress_ms || 0,
      durationMs: song.item.duration_ms || 0,
    });
  } catch (error) {
    return res.status(200).json({
      isPlaying: false,
      title: "",
      artist: "",
      album: "",
      albumImageUrl: "",
      songUrl: "",
      progressMs: 0,
      durationMs: 0,
    });
  }
}