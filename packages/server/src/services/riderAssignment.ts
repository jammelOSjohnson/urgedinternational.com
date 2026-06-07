import User from "../models/User.model.js";

export type RiderUser = {
  Position?: string | null;
  isAvailable?: boolean | null;
  disabled?: boolean | null;
};

export function isRiderAssignable(user: RiderUser | null | undefined): boolean {
  return (
    user != null &&
    user.Position === "Rider" &&
    user.isAvailable === true &&
    user.disabled === false
  );
}

export function shouldValidateRiderChange(
  currentRiderId: string | null | undefined,
  newRiderId: string | null | undefined,
): boolean {
  const current = (currentRiderId ?? "").toString();
  const next = (newRiderId ?? "").toString();
  return next !== "" && next !== current;
}

export function canAssignRider(
  user: RiderUser | null | undefined,
  forceRiderAssignment?: boolean | null,
): boolean {
  if (forceRiderAssignment === true) {
    return true;
  }
  return isRiderAssignable(user);
}

export async function resolveRiderForAssignment(
  riderId?: string | null,
  parish?: string | null,
) {
  if (riderId != null && riderId !== "") {
    const user = await User.findById(riderId);
    return isRiderAssignable(user) ? user : null;
  }

  const query = User.find()
    .where("Position")
    .equals("Rider")
    .where("isAvailable")
    .equals(true)
    .where("disabled")
    .equals(false);

  if (parish != null && parish !== "") {
    query.where("Parish").equals(parish);
  }

  const assignable = await query;
  if (assignable.length === 0) {
    return null;
  }

  const index = Math.floor(Math.random() * assignable.length);
  return assignable[index];
}

export async function assertRiderAssignable(
  riderId: string,
  forceRiderAssignment?: boolean | null,
): Promise<void> {
  if (forceRiderAssignment === true) {
    return;
  }

  const user = await User.findById(riderId);
  if (!isRiderAssignable(user)) {
    throw new Error("Rider is not available for assignment");
  }
}
