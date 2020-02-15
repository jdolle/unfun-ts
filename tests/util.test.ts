import * as util from "../src/util";

describe("toThrow", () => {
  it("should throw whatever it is passed", () => {
    expect(() =>
      util.throwError(new Error("Nothing to see here"))
    ).toThrowErrorMatchingInlineSnapshot(`"Nothing to see here"`);
  });
});
