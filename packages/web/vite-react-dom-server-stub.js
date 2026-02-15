/**
 * Stub for react-dom/server so packages that require it (e.g. google-maps-react)
 * don't pull the Node server build into the browser bundle.
 * The browser never needs server rendering; this avoids "Cannot read properties of undefined (reading 'prototype')".
 */
export function renderToString() {
  return "";
}
export function renderToStaticMarkup() {
  return "";
}
export const version = "";
export default { renderToString, renderToStaticMarkup, version };
