let backendHost: string;
if (!process.env.BACKEND_HOST) {
  throw new Error("Please define: BACKEND_HOST");
} else {
  backendHost = process.env.BACKEND_HOST;
}

let backendPort: number;
if (!process.env.BACKEND_PORT) {
  throw new Error("Please define: BACKEND_PORT");
} else {
  backendPort = parseInt(process.env.BACKEND_PORT);
}

let oktaClientId: string;
if (!process.env.OKTA_CLIENTID) {
  throw new Error("Please define: OKTA_CLIENTID");
} else {
  oktaClientId = process.env.OKTA_CLIENTID;
}

let oktaIssuer: string;
if (!process.env.OKTA_ISSUER) {
  throw new Error("Please define: OKTA_ISSUER");
} else {
  oktaIssuer = process.env.OKTA_ISSUER;
}

export { backendHost, backendPort, oktaClientId, oktaIssuer };
