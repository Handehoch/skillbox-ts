class Job {
  private role: string;
  private salary: number;
  
  constructor(role: string, salary: number) {
    this.role = role;
    this.salary = salary;
  }
  
  public getSalary(): number {
    return this.salary;
  }
  
  public work(personName: string): void {
    console.log(`${personName} сейчас работает как ${this.role}`);
  }
}
  
class Person {
  private name: string;
  private job!: Job;
  
  constructor(name: string) {
    this.name = name;
  }
  
  public setJob(job: Job): void {
    this.job = job;
  }
  
  public getSalary(): number {
    return this.job.getSalary();
  }
  
  public work(): void {
    this.job.work(this.name);
  }
}
  
  const john: Person = new Person("John");
  const mary: Person = new Person("Mary");
  
  const developer: Job = new Job("Разработчик", 100000);
  const designer: Job = new Job("Дизайнер", 80000);
  
  // Назначение первоначальных профессий
  john.setJob(developer);
  mary.setJob(designer);
  
  // Работа сотрудников
  john.work(); // John сейчас работает как Разработчик
  mary.work(); // Mary сейчас работает как Дизайнер
  
  // Переквалификация сотрудников
  john.setJob(designer);
  mary.setJob(developer);
  
  john.work(); // John сейчас работает как Дизайнер
  mary.work(); // Mary сейчас работает как Разработчик