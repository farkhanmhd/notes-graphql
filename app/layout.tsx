import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import { Metadata } from "next";
import theme from "./theme";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "Notes Application",
  description: "A simple notes application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Providers>
            <Header />
            {children}
          </Providers>
        </ChakraProvider>
      </body>
    </html>
  );
}
