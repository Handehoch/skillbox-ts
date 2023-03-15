class User {
  public messageCount: number;
  public warningCount: number;
  public registrationDate: Date;

  constructor(messageCount: number, warningCount: number, registrationDate: Date) {
    this.messageCount = messageCount;
    this.warningCount = warningCount;
    this.registrationDate = registrationDate;
  }
}

class TrustedUser {
  constructor(public readonly user: User) {
  }

  public getConfidenceRatio(): number {
    const daysRegistered = Math.floor(
      (new Date().getTime() - this.user.registrationDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return this.user.messageCount * 2 - this.user.warningCount * 100 + daysRegistered;
  }
}

class ConfidenceHelper {
  public static checkConfidenceRatio(confidenceRatio: number): boolean {
    return confidenceRatio >= 0;
  }
}

const users: TrustedUser[] = [
  new TrustedUser(new User(10, 0, new Date(2022, 1, 1))),
  new TrustedUser(new User(100, 3, new Date(2021, 10, 1))),
  new TrustedUser(new User(5, 1, new Date(2022, 2, 1))),
];

const untrustedUsers: TrustedUser[] = users.filter((user) => {
  const confidenceRatio = user.getConfidenceRatio();
  return !ConfidenceHelper.checkConfidenceRatio(confidenceRatio);
});

console.log(untrustedUsers);