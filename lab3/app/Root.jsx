import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import stylesheet from "./styles/global.css?url";
import NavBar from "./Components/globalComponents/NavBar";
import Footer from "./Components/globalComponents/Footer";

import { BookOffersContextProvider } from "./contexts/BookOffersContext";
import {UserProvider} from "./Contexts/UserContext.jsx";

export const links = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&" +
        "family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Syne:wght@400..800&display=swap",
  },
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="container">
          <NavBar /> {/* globalny NavBar */}
          <div className="content-container">
            {children}
            <ScrollRestoration />
            <Scripts />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return (
      <UserProvider>
        <BookOffersContextProvider>
          <Outlet />
        </BookOffersContextProvider>
      </UserProvider>
  );
}

export function ErrorBoundary({ error }) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
