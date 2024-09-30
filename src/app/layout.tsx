//import Navbar from '/Users/devmporth/Desktop/VS code projects/AMANDA replacement/a7a/src/app/components/Navbar.js';
import { ChakraProvider } from '@chakra-ui/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ChakraProvider>
        {children}
        </ChakraProvider>
      </body>
    </html>
  );
}