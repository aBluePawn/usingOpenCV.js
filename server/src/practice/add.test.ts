import { add } from "./add";

describe(add, () => {
  it("adds", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
