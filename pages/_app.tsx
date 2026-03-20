import { DarkModeProvider } from "../contexts/darkMode/darkMode.provider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
