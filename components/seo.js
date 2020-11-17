import Head from 'next/head';

export default function SEO({ title = 'Travel Logger' }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Website to log places travelled to" />
      <link rel="icon" href="/favicon.ico" />
      <link
        href="https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
        rel="stylesheet"
      />
    </Head>
  );
}
