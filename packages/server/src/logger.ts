type LogLevel = "info" | "warn" | "error";

type LogFields = Record<string, unknown> & {
  event: string;
};

function writeLog(level: LogLevel, fields: LogFields) {
  const entry = {
    severity: level.toUpperCase(),
    level,
    timestamp: new Date().toISOString(),
    ...fields,
  };
  const line = JSON.stringify(entry);
  if (level === "error") {
    console.error(line);
  } else if (level === "warn") {
    console.warn(line);
  } else {
    console.log(line);
  }
}

export const log = {
  info: (fields: LogFields) => writeLog("info", fields),
  warn: (fields: LogFields) => writeLog("warn", fields),
  error: (fields: LogFields) => writeLog("error", fields),
};
