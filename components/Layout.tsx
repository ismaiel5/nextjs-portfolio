import Head from "next/head";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      {props.children}
    </>
  );
};

export default Layout;
