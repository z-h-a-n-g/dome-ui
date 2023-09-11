import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    LzButton: typeof components.Button;
    LzIcon: typeof components.Icon;
  }
}
export { };

