import {
  Link,
  Links,
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration, useCatch,
} from "@remix-run/react"
import { ReactNode, useContext, useEffect } from "react";
import { withEmotionCache } from "@emotion/react";
import { ClientStyleContext, ServerStyleContext } from "~/utils/context";
import { Button, Center, ChakraProvider, Flex, Heading, Text } from "@chakra-ui/react";
import { extendedTheme } from "~/utils/theme";

interface DocumentProps {
  children: ReactNode;
}

const Document = withEmotionCache(({ children }: DocumentProps, emotionCache) => {
  const serverStyleData = useContext(ServerStyleContext);
  const clientStyleData = useContext(ClientStyleContext);

  // Only executed on client
  useEffect(() => {
    // re-link sheet container
    emotionCache.sheet.container = document.head;
    // re-inject tags
    const tags = emotionCache.sheet.tags;
    emotionCache.sheet.flush();
    tags.forEach((tag) => {
      (emotionCache.sheet as any)._insertTag(tag);
    });
    // reset cache to reapply global styles
    clientStyleData?.reset();
  }, []);

  return (
    <html lang="en">
    <head>
      <meta charSet="utf8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta httpEquiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
      <title>Electron Remixed</title>
      <Links />
      {serverStyleData?.map(({ key, ids, css }) => (
        <style
          key={key}
          data-emotion={`${key} ${ids.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: css }}
        />
      ))}
    </head>
    <body>
      {children}
      <ScrollRestoration />
      <Scripts />
      {process.env.NODE_ENV === "development" && <LiveReload />}
    </body>
    </html>
  );
});

export default function App() {
  return (
    <Document>
      <ChakraProvider theme={extendedTheme}>
        <Outlet />
      </ChakraProvider>
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <ChakraProvider theme={extendedTheme}>
        <Center bg='red.400' h={200} roundedBottom={50}>
          <Heading size='lg'>
            {caught.status} {caught.statusText}
          </Heading>
        </Center>
        <Flex justify='center' align='center' pt={100}>
          <Button as={Link} to='/' colorScheme={'purple'}>HOME</Button>
        </Flex>
      </ChakraProvider>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Document>
      <ChakraProvider theme={extendedTheme}>
        <Center bg='red.400' h={200} roundedBottom={50}>
          <Heading size='lg'>App Error</Heading>
          <Text as='pre'>{error.message}</Text>
        </Center>
        <Flex justify='center' align='center' pt={100}>
          <Button as={Link} to='/' colorScheme={'purple'}>HOME</Button>
        </Flex>
      </ChakraProvider>
    </Document>
  );
}
