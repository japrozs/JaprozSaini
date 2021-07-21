import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    <script defer data-domain="japrozsaini.me" src="https://plausible.io/js/plausible.js"></script>
                    <title>Japroz Saini</title>
                </Head>
                <body>
                    {/* Make Color mode to persists when you refresh the page. */}
                    <ColorModeScript
                        initialColorMode={theme.config.initialColorMode}
                    />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
