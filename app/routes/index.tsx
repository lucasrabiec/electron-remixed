import { NavLink, useLoaderData } from "@remix-run/react"
import { LinksFunction } from "@remix-run/node";

import { app } from "~/electron.server"
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export function loader() {
  return {
    userDataPath: app.getPath("userData"),
  }
}

export default function Index() {
  const data = useLoaderData()
  return (
    <main>
      <h1>Welcome to Remix Run</h1>
      <p>{data.userDataPath}</p>
      <NavLink to={'/jokes'}>JOKES</NavLink>
    </main>
  )
}
