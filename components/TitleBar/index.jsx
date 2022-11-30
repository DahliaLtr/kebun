import Head from "next/head";
import { BiWorld } from "react-icons/bi";

const TitleBar = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href={<BiWorld />}></link>
      </Head>
      {props.children}
    </div>
  );
};

export default TitleBar;
