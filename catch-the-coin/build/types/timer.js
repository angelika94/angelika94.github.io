export class Timer {
    constructor(interval, handler) {
        this.handler = () => { console.log("No clock event"); };
        this.interval = interval;
        this.handler = handler;
    }
    start() {
        this.isRunning = true;
        this.handle = window.setInterval(this.handler, this.interval);
    }
    stop() {
        this.isRunning = false;
        return window.clearInterval(this.handle);
    }
}
