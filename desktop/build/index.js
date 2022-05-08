var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// app/electron.server.ts
var require_electron_server = __commonJS({
  "app/electron.server.ts"(exports, module2) {
    init_react();
    var import_electron2 = __toESM(require("electron"));
    module2.exports = import_electron2.default;
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_react = require("@remix-run/react");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_react2 = require("@remix-run/react");
var React2 = __toESM(require("react"));

// app/styles/global.css
var global_default = "/build/_assets/global-TYQA6YGS.css";

// app/styles/global-medium.css
var global_medium_default = "/build/_assets/global-medium-5GXXNUSD.css";

// app/styles/global-large.css
var global_large_default = "/build/_assets/global-large-DWD3SAIK.css";

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/root.tsx
var meta = () => ({
  title: "Electron Remixed"
});
var links = () => {
  return [
    {
      rel: "stylesheet",
      href: global_default
    },
    {
      rel: "stylesheet",
      href: global_medium_default,
      media: "print, (min-width: 640px)"
    },
    {
      rel: "stylesheet",
      href: global_large_default,
      media: "screen and (min-width: 1024px)"
    }
  ];
};
function Document({ children, title = `Remix: So great, it's funny!` }) {
  return /* @__PURE__ */ React2.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React2.createElement("head", null, /* @__PURE__ */ React2.createElement("meta", {
    charSet: "utf8"
  }), /* @__PURE__ */ React2.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React2.createElement("meta", {
    httpEquiv: "Content-Security-Policy",
    content: "script-src 'self' 'unsafe-inline';"
  }), /* @__PURE__ */ React2.createElement("title", null, "Electron Remixed - so fun!"), /* @__PURE__ */ React2.createElement(import_react2.Links, null)), /* @__PURE__ */ React2.createElement("body", null, children, /* @__PURE__ */ React2.createElement(import_react2.ScrollRestoration, null), /* @__PURE__ */ React2.createElement(import_react2.Scripts, null), /* @__PURE__ */ React2.createElement(import_react2.LiveReload, null)));
}
function App() {
  return /* @__PURE__ */ React2.createElement(Document, null, /* @__PURE__ */ React2.createElement(import_react2.Outlet, null));
}
function CatchBoundary() {
  const caught = (0, import_react2.useCatch)();
  return /* @__PURE__ */ React2.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React2.createElement("h1", null, caught.status, " ", caught.statusText)));
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ React2.createElement(Document, {
    title: "Uh-oh!"
  }, /* @__PURE__ */ React2.createElement("div", {
    className: "error-container"
  }, /* @__PURE__ */ React2.createElement("h1", null, "App Error"), /* @__PURE__ */ React2.createElement("pre", null, error.message)));
}

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links2,
  loader: () => loader
});
init_react();
var import_react3 = require("@remix-run/react");
var import_electron = __toESM(require_electron_server());

// app/styles/index.css
var styles_default = "/build/_assets/index-BYRTHEEE.css";

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/routes/index.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function loader() {
  return {
    userDataPath: import_electron.app.getPath("userData")
  };
}
function Index() {
  const data = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("h1", null, "Welcome to Remix Run"), /* @__PURE__ */ React.createElement("p", null, data.userDataPath), /* @__PURE__ */ React.createElement(import_react3.NavLink, {
    to: "/jokes"
  }, "JOKES"));
}

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => JokesRoute,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_node = require("@remix-run/node");
var import_react4 = require("@remix-run/react");

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
  }
  db = global.__db;
}

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-HMHWW3JD.css";

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/routes/jokes.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: jokes_default }];
};
var loader2 = async () => {
  const data = {
    jokeListItems: await db.joke.findMany({
      take: 5,
      select: { id: true, name: true },
      orderBy: { createdAt: "desc" }
    })
  };
  return (0, import_node.json)(data);
};
function JokesRoute() {
  const data = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "jokes-layout"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "jokes-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "home-link"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "/",
    title: "Remix Jokes",
    "aria-label": "Remix Jokes"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "logo"
  }, "\u{1F92A}"), /* @__PURE__ */ React.createElement("span", {
    className: "logo-medium"
  }, "J\u{1F92A}KES"))))), /* @__PURE__ */ React.createElement("main", {
    className: "jokes-main"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "jokes-list"
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "."
  }, "Get a random joke"), /* @__PURE__ */ React.createElement("p", null, "Here are a few more jokes to check out:"), /* @__PURE__ */ React.createElement("ul", null, data.jokeListItems.map((joke) => /* @__PURE__ */ React.createElement("li", {
    key: joke.id
  }, /* @__PURE__ */ React.createElement(import_react4.Link, {
    prefetch: "intent",
    to: joke.id
  }, joke.name)))), /* @__PURE__ */ React.createElement(import_react4.Link, {
    to: "new",
    className: "button"
  }, "Add your own")), /* @__PURE__ */ React.createElement("div", {
    className: "jokes-outlet"
  }, /* @__PURE__ */ React.createElement(import_react4.Outlet, null)))));
}

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/routes/jokes/$jokeId.tsx
var jokeId_exports = {};
__export(jokeId_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  action: () => action,
  default: () => JokeRoute,
  loader: () => loader3
});
init_react();
var import_node2 = require("@remix-run/node");
var import_react6 = require("@remix-run/react");

// app/components/joke.tsx
init_react();
var import_react5 = require("@remix-run/react");
function JokeDisplay({ joke, canDelete = true }) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's your hilarious joke:"), /* @__PURE__ */ React.createElement("p", null, joke.content), /* @__PURE__ */ React.createElement(import_react5.Link, {
    to: "."
  }, joke.name, " Permalink"), /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "_method",
    value: "delete"
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button",
    disabled: !canDelete
  }, "Delete")));
}

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/routes/jokes/$jokeId.tsx
var loader3 = async ({ params }) => {
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke) {
    throw new Response("What a joke! Not found.", {
      status: 404
    });
  }
  const data = { joke };
  return (0, import_node2.json)(data);
};
var action = async ({ request, params }) => {
  const form = await request.formData();
  if (form.get("_method") !== "delete") {
    throw new Response(`The _method ${form.get("_method")} is not supported`, { status: 400 });
  }
  const joke = await db.joke.findUnique({
    where: { id: params.jokeId }
  });
  if (!joke) {
    throw new Response("Can't delete what does not exist", {
      status: 404
    });
  }
  await db.joke.delete({ where: { id: params.jokeId } });
  return (0, import_node2.redirect)("/jokes");
};
function JokeRoute() {
  const data = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(JokeDisplay, {
    joke: data.joke
  });
}
function CatchBoundary2() {
  const caught = (0, import_react6.useCatch)();
  const params = (0, import_react6.useParams)();
  switch (caught.status) {
    case 400: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "What you're trying to do is not allowed.");
    }
    case 404: {
      return /* @__PURE__ */ React.createElement("div", {
        className: "error-container"
      }, "Huh? What the heck is ", params.jokeId, "?");
    }
    default: {
      throw new Error(`Unhandled error: ${caught.status}`);
    }
  }
}
function ErrorBoundary2() {
  const { jokeId } = (0, import_react6.useParams)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, `There was an error loading joke by the id ${jokeId}. Sorry.`);
}

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/routes/jokes/index.tsx
var jokes_exports2 = {};
__export(jokes_exports2, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary3,
  default: () => JokesIndexRoute,
  loader: () => loader4
});
init_react();
var import_node3 = require("@remix-run/node");
var import_react7 = require("@remix-run/react");
var loader4 = async () => {
  const count = await db.joke.count();
  const randomRowNumber = Math.floor(Math.random() * count);
  const [randomJoke] = await db.joke.findMany({
    take: 1,
    skip: randomRowNumber
  });
  if (!randomJoke) {
    throw new Response("No random joke found", {
      status: 404
    });
  }
  const data = { randomJoke };
  return (0, import_node3.json)(data);
};
function JokesIndexRoute() {
  const data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Here's a random joke:"), /* @__PURE__ */ React.createElement("p", null, data.randomJoke.content), /* @__PURE__ */ React.createElement(import_react7.Link, {
    to: data.randomJoke.id
  }, '"', data.randomJoke.name, '" Permalink'));
}
function CatchBoundary3() {
  const caught = (0, import_react7.useCatch)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React.createElement("div", {
      className: "error-container"
    }, "There are no jokes to display.");
  }
  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}
function ErrorBoundary3() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "I did a whoopsies.");
}

// route:/Users/lucas/Workspace/inseye/samples/electron-remixed/app/routes/jokes/new.tsx
var new_exports = {};
__export(new_exports, {
  ErrorBoundary: () => ErrorBoundary4,
  action: () => action2,
  default: () => NewJokeRoute
});
init_react();
var import_node4 = require("@remix-run/node");
var import_react8 = require("@remix-run/react");
function validateJokeContent(content) {
  if (content.length < 10) {
    return `That joke is too short`;
  }
}
function validateJokeName(name) {
  if (name.length < 3) {
    return `That joke's name is too short`;
  }
}
var badRequest = (data) => (0, import_node4.json)(data, { status: 400 });
var action2 = async ({ request }) => {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");
  if (typeof name !== "string" || typeof content !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  const fieldErrors = {
    name: validateJokeName(name),
    content: validateJokeContent(content)
  };
  const fields = { name, content };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }
  const joke = await db.joke.create({ data: fields });
  return (0, import_node4.redirect)(`/jokes/${joke.id}`);
};
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const actionData = (0, import_react8.useActionData)();
  const transition = (0, import_react8.useTransition)();
  if (transition.submission) {
    const name = transition.submission.formData.get("name");
    const content = transition.submission.formData.get("content");
    if (typeof name === "string" && typeof content === "string" && !validateJokeContent(content) && !validateJokeName(name)) {
      return /* @__PURE__ */ React.createElement(JokeDisplay, {
        joke: { name, content },
        canDelete: false
      });
    }
  }
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", null, "Add your own hilarious joke"), /* @__PURE__ */ React.createElement(import_react8.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Name:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
    name: "name",
    "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name) || void 0,
    "aria-errormessage": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.name) ? "name-error" : void 0
  })), ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "name-error"
  }, actionData.fieldErrors.name) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", null, "Content:", " ", /* @__PURE__ */ React.createElement("textarea", {
    defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
    name: "content",
    "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content) || void 0,
    "aria-errormessage": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0
  })), ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "content-error"
  }, actionData.fieldErrors.content) : null), /* @__PURE__ */ React.createElement("div", null, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert"
  }, actionData.formError) : null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Add"))));
}
function ErrorBoundary4() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "error-container"
  }, "Something unexpected went wrong. Sorry about that.");
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "faf9e84c", "entry": { "module": "/build/entry.client-R4W3ROD4.js", "imports": ["/build/_shared/chunk-UXKSC7LV.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-YWS3I572.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-EKHIIQRO.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes": { "id": "routes/jokes", "parentId": "root", "path": "jokes", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes-KSMYUF5K.js", "imports": ["/build/_shared/chunk-33X2F7CF.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/jokes/$jokeId": { "id": "routes/jokes/$jokeId", "parentId": "routes/jokes", "path": ":jokeId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes/$jokeId-NOMT6TLV.js", "imports": ["/build/_shared/chunk-74KGINUQ.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/jokes/index": { "id": "routes/jokes/index", "parentId": "routes/jokes", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/jokes/index-P574MN5U.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/jokes/new": { "id": "routes/jokes/new", "parentId": "routes/jokes", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/jokes/new-6E3PRROS.js", "imports": ["/build/_shared/chunk-74KGINUQ.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": true } }, "url": "/build/manifest-FAF9E84C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  },
  "routes/jokes/$jokeId": {
    id: "routes/jokes/$jokeId",
    parentId: "routes/jokes",
    path: ":jokeId",
    index: void 0,
    caseSensitive: void 0,
    module: jokeId_exports
  },
  "routes/jokes/index": {
    id: "routes/jokes/index",
    parentId: "routes/jokes",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: jokes_exports2
  },
  "routes/jokes/new": {
    id: "routes/jokes/new",
    parentId: "routes/jokes",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=index.js.map
