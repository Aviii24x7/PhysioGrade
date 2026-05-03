import { Helmet } from "react-helmet-async";
import { site } from "../config/site";

type Props = {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
  keywords?: string;
};

const defaultKeywords =
  "physiotherapy Palwal, physiotherapist Palwal, physiotherapy centre Palwal, Physio Grade, physiograde, physiotherapist Ballabgarh, physiotherapy Haryana, back pain treatment Palwal, sciatica treatment, knee pain physiotherapy, sports injury rehab Palwal, home visit physiotherapy Palwal, Dr Mukesh Kumar physiotherapist, Dr Renu physiotherapist";

export function Seo({ title, description, path, image, noIndex, jsonLd, keywords }: Props) {
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const desc = description ?? site.shortPitch;
  const canonicalPath = path ?? (typeof window !== "undefined" ? window.location.pathname : "/");
  const url = `${site.url}${canonicalPath}`;
  const og = image ?? `${site.url}/og-image.jpg`;
  const ld = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <meta name="keywords" content={keywords ?? defaultKeywords} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Geo meta — helps local search */}
      <meta name="geo.region" content="IN-HR" />
      <meta name="geo.placename" content="Palwal, Haryana, India" />
      <meta name="geo.position" content={`${site.coords.lat};${site.coords.lng}`} />
      <meta name="ICBM" content={`${site.coords.lat}, ${site.coords.lng}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={og} />
      <meta property="og:site_name" content={site.name} />

      {/* Twitter */}
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
