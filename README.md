# mob-spy

<div><span>A super lightweight package for accurately detecting mobile device and orientation. （支持响应式）检测是否是移动端，超准超简便</span><div>

<br/>

[![](https://img.shields.io/npm/l/mob-spy)](https://www.npmjs.com/package/mob-spy)

<br/>

## Install

`npm install mob-spy`

## Usage

### 普通用法

```javascript
import Mob from "mob-spy";

const mob = new Mob();

// log true in PC, and log false in mobile/ipad/pad
console.log(mob.getIsPc);

// log the orientation of the screen when it is in mobile/ipad/pad
// portrait or landscape
console.log(mob.getOrientation);
```

### 响应式用法

```javascript
import Mob from "mob-spy";

const mob = new Mob();

window.onresize = () => {
  mob.onWindowResize();

  // log true in PC, and log false in mobile/ipad/pad
  console.log(mob.getIsPc);

  // log the orientation of the screen when it is in mobile/ipad/pad
  // portrait or landscape
  console.log(mob.getOrientation);
};

// 或者
window.addEventListener("resize", () => {
  mob.onWindowResize();

  // log true in PC, and log false in mobile/ipad/pad
  console.log(mob.getIsPc);

  // log the orientation of the screen when it is in mobile/ipad/pad
  // portrait or landscape
  console.log(mob.getOrientation);
}
```

#### Attributes

| Attribute      | Description                                                      | Type    | Default | Available Vaules   |
| -------------- | ---------------------------------------------------------------- | ------- | ------- | ------------------ |
| getIsPc        | a getter which indicates it is PC or mobile                      | Boolean | true    | true/false         |
| getOrientation | a getter which indicates the orientation of the screen in mobile | String  | ""      | portrait/landscape |
| onWindowResize | function which responsively does detections                      | Funtion | -       | -                  |

# License

MIT
