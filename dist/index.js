"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DeviceDetector = /** @class */ (function () {
    function DeviceDetector() {
        this.isPc = true;
        this.orientation = "";
        this.__init();
    }
    DeviceDetector.prototype.__init = function () {
        this.detectSize();
        if (!this.isPc) {
            this.detectOrientation();
            if (!this.orientation) {
                console.log("Oops~orientation检测出错了");
            }
        }
    };
    DeviceDetector.prototype.detectSize = function () {
        var userAgent = navigator.userAgent;
        var agents = [
            "Android",
            "iPhone",
            "SymbianOS",
            "Windows Phone",
            "iPad",
            "iPod",
        ];
        var isSafari = userAgent.indexOf("Safari") !== -1 && userAgent.indexOf("Version") !== -1;
        // 判断是否为ipad pro的safari浏览器
        if (isSafari &&
            userAgent.indexOf("Macintosh") &&
            navigator.maxTouchPoints &&
            navigator.maxTouchPoints > 2) {
            this.isPc = false;
        }
        for (var v = 0; v < agents.length; v += 1) {
            if (userAgent.indexOf(agents[v]) > 0) {
                this.isPc = false;
                break;
            }
        }
    };
    DeviceDetector.prototype.detectOrientation = function () {
        var screenOrient = window.screen.orientation;
        var angle = null;
        if (screenOrient) {
            angle = screenOrient.angle;
        }
        else {
            angle = window.orientation; // 这个属性要被Deprecated了，但是移动设备screen.orientation不支持，它是全支持
        }
        if (angle !== undefined &&
            parseInt(String(angle), 10).toString() !== "NaN") {
            this.orientation = [0, 180].includes(angle) ? "portrait" : "landscape";
        }
    };
    return DeviceDetector;
}());
exports.default = DeviceDetector;
