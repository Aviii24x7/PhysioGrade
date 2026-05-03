import { Helmet } from "react-helmet-async";
import { site } from "../config/site";

type Props = {
  title: string;
  description?: string;
  path?: string; // canonical path, defaults to current
  image?: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
};

export function Seo({ title, description, path, image, noIndex, jsonLd }: Props) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const desc = description ?? site.shortPitch;
  const url = `${site.url}${path ?? (typeof window !== "undefined" ? window.location.pathname : "/")}`;
  const og = image ?? `${site.url}/og-image.jpg`;
  const ld = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={og} />
      <meta property="og:site_name" content={site.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={og} />

      {ld.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}
