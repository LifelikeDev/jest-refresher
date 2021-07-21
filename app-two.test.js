//-------- having some other functions invoked before or after each/all tests are run

// beforeEach(() => initNotification());
// afterEach(() => endNotification());

// beforeAll(() => initNotification());
// afterAll(() => endNotification());

//-------- having some other function invoked before a particular test or block of tests (instead of all tests) run

const initNotification = () => {
  console.log("initializing test...");
};

const endNotification = () => {
  console.log("test ended...");
};

describe("Test mode...", () => {
  beforeEach(() => initNotification());
  afterEach(() => endNotification());

  test("User is defined", () => {
    const user1 = "Romeo";
    expect(typeof user1).toBe("string");
  });

  test("User is present", () => {
    const user1 = "Romeo";
    expect(user1).toBeDefined();
    expect(user1).toBe("Romeo");
  });
});
