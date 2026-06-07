import { describe, it } from "node:test";
import assert from "node:assert/strict";
import {
  canAssignRider,
  isRiderAssignable,
  shouldValidateRiderChange,
} from "../dist/services/riderAssignment.js";

const assignableRider = {
  Position: "Rider",
  isAvailable: true,
  disabled: false,
};

const disabledRider = {
  Position: "Rider",
  isAvailable: true,
  disabled: true,
};

const unavailableRider = {
  Position: "Rider",
  isAvailable: false,
  disabled: false,
};

const disabledAndUnavailableRider = {
  Position: "Rider",
  isAvailable: false,
  disabled: true,
};

describe("isRiderAssignable", () => {
  it("returns true for an available, enabled rider", () => {
    assert.equal(isRiderAssignable(assignableRider), true);
  });

  it("returns false for a disabled rider", () => {
    assert.equal(isRiderAssignable(disabledRider), false);
  });

  it("returns false for an unavailable rider", () => {
    assert.equal(isRiderAssignable(unavailableRider), false);
  });

  it("returns false when both disabled and unavailable", () => {
    assert.equal(isRiderAssignable(disabledAndUnavailableRider), false);
  });

  it("returns false for non-rider positions", () => {
    assert.equal(
      isRiderAssignable({ ...assignableRider, Position: "Admin" }),
      false,
    );
  });

  it("returns false for null", () => {
    assert.equal(isRiderAssignable(null), false);
  });
});

describe("canAssignRider", () => {
  it("allows assignable riders without override", () => {
    assert.equal(canAssignRider(assignableRider), true);
  });

  it("blocks disabled riders without override", () => {
    assert.equal(canAssignRider(disabledRider), false);
  });

  it("allows disabled riders with forceRiderAssignment", () => {
    assert.equal(canAssignRider(disabledAndUnavailableRider, true), true);
  });
});

describe("shouldValidateRiderChange", () => {
  it("validates when rider changes to a new id", () => {
    assert.equal(shouldValidateRiderChange("rider-a", "rider-b"), true);
  });

  it("does not validate when rider stays the same", () => {
    assert.equal(shouldValidateRiderChange("rider-a", "rider-a"), false);
  });

  it("does not validate when rider is cleared", () => {
    assert.equal(shouldValidateRiderChange("rider-a", ""), false);
  });
});
