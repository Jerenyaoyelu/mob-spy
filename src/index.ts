export default class DeviceDetector {
  private isPc: boolean;
  private orientation: string;

  constructor() {
    this.isPc = true;
    this.orientation = "";
    this.__init();
  }

  get getIsPc(): boolean {
    return this.isPc;
  }

  get getOrientation(): string {
    return this.orientation;
  }

  private __init(): void {
    this.detect();
  }

  onWindowResize(): void {
    // 初始化属性
    this.isPc = true;
    this.orientation = "";
    this.detect();
  }

  private detect(): void {
    this.detectSize();
    this.detectOrientation();
    if (!this.orientation) {
      console.log("Oops~orientation检测出错了");
    }
  }

  private detectSize(): void {
    const userAgent = navigator.userAgent;
    const agents: Array<string> = [
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod",
    ];
    const isSafari: boolean =
      userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Version") !== -1;
    // 判断是否为ipad pro的safari浏览器
    if (
      isSafari &&
      userAgent.indexOf("Macintosh") &&
      navigator.maxTouchPoints &&
      navigator.maxTouchPoints > 2
    ) {
      this.isPc = false;
    }

    for (let v = 0; v < agents.length; v += 1) {
      if (userAgent.indexOf(agents[v]) > 0) {
        this.isPc = false;
        break;
      }
    }
  }

  private detectOrientation(): void {
    const screenOrient = window.screen.orientation;
    let angle: null | number = null;
    if (screenOrient) {
      angle = screenOrient.angle;
    } else {
      angle = window.orientation; // 这个属性要被Deprecated了，但是移动设备screen.orientation不支持，它是全支持
    }

    // angle represents how far the user has turned the device counterclockwise from the natural orientation.
    // PC端 natural orientation是横着，故angle为0或者180
    if (
      angle !== undefined &&
      parseInt(String(angle), 10).toString() !== "NaN"
    ) {
      if (this.isPc) {
        this.orientation = [0, 180].includes(angle) ? "landscape" : "portrait";
      } else {
        this.orientation = [0, 180].includes(angle) ? "portrait" : "landscape";
      }
    }
  }
}
