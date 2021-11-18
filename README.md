# mob-spy

<div><span>A super lightweight package for accurately detecting mobile device and orientation. 检测是否是移动端，超准超简便</span><div>

<br/>

[![](https://img.shields.io/npm/l/mob-spy)](https://www.npmjs.com/package/mob-spy)

<br/>

## Install

`npm install mob-spy`

## Usage

```javascript
import Mob from "mob-spy";

const mob = new Mob();

// log true in PC, and log false in mobile/ipad/pad
console.log(mob.isPc);

// log the orientation of the screen when it is in mobile/ipad/pad
// portrait or landscape
console.log(mob.orientation);
```

#### Attributes

| Attribute   | Description                                       | Type    | Default | Available Vaules   |
| ----------- | ------------------------------------------------- | ------- | ------- | ------------------ |
| isPc        | indicates it is PC or mobile                      | Boolean | true    | true/false         |
| orientation | indicates the orientation of the screen in mobile | String  | ""      | portrait/landscape |

# License

MIT
