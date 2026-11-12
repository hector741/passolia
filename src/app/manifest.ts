import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Passólia",
    short_name: "Passólia",
    description: "Organização para a vida cotidiana.",
    lang: "pt-BR",
    start_url: "/hoje",
    display: "standalone",
    background_color: "#F7F4EF",
    theme_color: "#5B4BC4",
    icons: [
      {
        src: "/brand/passolia-icone-192px.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/passolia-icone-512px.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
