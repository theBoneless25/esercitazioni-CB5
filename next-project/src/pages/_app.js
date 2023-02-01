import "@/styles/globals.css";
import Layouts from "../layouts/Layouts";

export default function App({ Component, pageProps }) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
