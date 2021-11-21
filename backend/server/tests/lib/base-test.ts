export class BaseTest {
  protected beforeHooks = [];

  constructor(context: string, tests: Array<string>) {
    this.describe(context, () => {
      this.callMiddlewares();
      this.callTests(tests);
    });
  }

  public describe(description: string, fn: (this: Mocha.Suite) => void): Mocha.Suite {
    return describe(description, fn);
  }

  public context(description: string, fn: (this: Mocha.Suite) => void): Mocha.Suite {
    return context(description, fn);
  }

  private callTests(tests: Array<string>) {
    tests.forEach((test) => {
      if (test in this) {
        it(test, (this as any)[test]);
      } else {
        throw new Error(`Class [${(this as any).constructor.name}] doesn't have Function [${test}]`);
      }
    });
  }

  private callMiddlewares() {
    if ('before' in this) {
      before((this as any).before);
    }
    if ('beforeEach' in this) {
      beforeEach((this as any).beforeEach);
    }
    if ('after' in this) {
      after((this as any).after);
    }
    if ('afterEach' in this) {
      afterEach((this as any).afterEach);
    }
  }
}
