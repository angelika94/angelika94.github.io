export class Timer {
  private handle: number;

  readonly interval: number;
  readonly handler: () => any = () => { console.log("No clock event") };

  public isRunning: boolean;

  constructor(interval: number, handler: () => any) {

    this.interval = interval;
    this.handler = handler;
  }

  public start() {

    this.isRunning = true;
    this.handle = window.setInterval(this.handler, this.interval)
  }

  public stop() {

    this.isRunning = false;
    return window.clearInterval(this.handle);
  }
}