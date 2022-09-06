import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
}

const Meta = ({
  title = "Next JS Training",
  description = "Learn Next JS Fundamentals",
}: MetaProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        type="image/svg+xml"
        href="https://www.bitovi.com/hubfs/favicon.ico"
      />
    </Head>
  );
};

export default Meta;
