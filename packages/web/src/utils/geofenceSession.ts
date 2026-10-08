const STORAGE_KEY = "urged.geofence.session";

/** Addresses with a Geocoding request already in flight (shared across mounts). */
const inFlight = new Set<string>();

/** Returns false if this address is cached or another caller is already geocoding it. */
export function claimGeocode(address: string): boolean {
  const key = address.trim();
  if (!key || inFlight.has(key) || readAddressResult(key) !== undefined) {
    return false;
  }
  inFlight.add(key);
  return true;
}

export function releaseGeocode(address: string) {
  inFlight.delete(address.trim());
}

type GeofenceSession = {
  byAddress: Record<string, boolean>;
  gpsInside?: boolean;
  gpsChecked?: boolean;
};

function readSession(): GeofenceSession {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return { byAddress: {} };
    const parsed = JSON.parse(raw) as GeofenceSession;
    return {
      byAddress: parsed.byAddress ?? {},
      gpsInside: parsed.gpsInside,
    };
  } catch {
    return { byAddress: {} };
  }
}

function writeSession(next: GeofenceSession) {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Private mode or quota — in-memory guards still prevent loops.
  }
}

/** `true` inside, `false` outside, `undefined` if this address has not been checked. */
export function readAddressResult(address: string): boolean | undefined {
  const key = address.trim();
  if (!key) return undefined;
  const value = readSession().byAddress[key];
  return typeof value === "boolean" ? value : undefined;
}

export function writeAddressResult(address: string, inside: boolean) {
  const key = address.trim();
  if (!key) return;
  const session = readSession();
  if (session.byAddress[key] === inside) return;
  session.byAddress[key] = inside;
  writeSession(session);
}

export function readGpsInside(): boolean {
  return readSession().gpsInside === true;
}

export function readGpsChecked(): boolean {
  return readSession().gpsChecked === true;
}

export function writeGpsResult(inside: boolean) {
  const session = readSession();
  if (session.gpsChecked && session.gpsInside === inside) return;
  session.gpsChecked = true;
  session.gpsInside = inside;
  writeSession(session);
}
