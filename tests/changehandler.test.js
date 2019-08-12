let { ChangeHandler } = require("../src/changehandler");

describe("Tests for ChangeHandler", function() {
  // Set up a test below...
  it("amountDue is set based on an argument", function() {
    // Remember, you can arrange, act, and assert...start small
    let vendingMachine = new ChangeHandler(105);

    expect(vendingMachine.amountDue).toBe(105);
  });
  it("cashTendered is set to zero", () => {
    let vendingMachine = new ChangeHandler(100);

    expect(vendingMachine.cashTendered).toBe(0);
  });
  it("penny = 1", () => {
    const vendingMachine = new ChangeHandler(105);

    vendingMachine.insertCoin("penny");

    expect(vendingMachine.cashTendered).toBe(1);
  });
  it("nickel = 5", () => {
    const vendingMachine = new ChangeHandler(105);

    vendingMachine.insertCoin("nickel");

    expect(vendingMachine.cashTendered).toBe(5);
  });
  it("dime = 10", () => {
    const vendingMachine = new ChangeHandler(105);

    vendingMachine.insertCoin("dime");

    expect(vendingMachine.cashTendered).toBe(10);
  });
  it("quarter = 25", () => {
    const vendingMachine = new ChangeHandler(105);

    vendingMachine.insertCoin("quarter");

    expect(vendingMachine.cashTendered).toBe(25);
  });
  it("returns true if cashtendered is greater than amountDue", () => {
    const vendingMachine = new ChangeHandler(105);

    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");

    expect(vendingMachine.isPaymentSufficient()).toBe(true);
  });
  it("returns false if cashtendered is less than amountDue", () => {
    const vendingMachine = new ChangeHandler(130);

    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");

    expect(vendingMachine.isPaymentSufficient()).toBe(false);
  });
  it("returns true if cashtendered is equal to amountDue", () => {
    const vendingMachine = new ChangeHandler(125);

    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");

    expect(vendingMachine.isPaymentSufficient()).toBe(true);
  });
  it("tests if 32 change produces 1 quarter 1 nickel and 2 pennies", () => {
    const vendingMachine = new ChangeHandler(100);

    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");

    expect(vendingMachine.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 1,
      pennies: 2
    });
  });
  it("tests if 10 change produces 1 dime", () => {
    const vendingMachine = new ChangeHandler(90);

    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");

    expect(vendingMachine.giveChange()).toEqual({
      quarters: 0,
      dimes: 1,
      nickels: 0,
      pennies: 0
    });
  });
  it("tests if 27 change produces 1 quarter 2 pennies", () => {
    const vendingMachine = new ChangeHandler(100);

    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");

    expect(vendingMachine.giveChange()).toEqual({
      quarters: 1,
      dimes: 0,
      nickels: 0,
      pennies: 2
    });
  });
  it("tests if 68 change produces 2 quarter 1 dime 1 nickel 3 pennies", () => {
    const vendingMachine = new ChangeHandler(100);

    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("quarter");
    vendingMachine.insertCoin("dime");
    vendingMachine.insertCoin("nickel");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");
    vendingMachine.insertCoin("penny");

    expect(vendingMachine.giveChange()).toEqual({
      quarters: 2,
      dimes: 1,
      nickels: 1,
      pennies: 3
    });
  });
});
