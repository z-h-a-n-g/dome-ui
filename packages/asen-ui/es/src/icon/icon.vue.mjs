import { defineComponent as o, computed as l, openBlock as r, createElementBlock as s, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.css";
const i = o({ name: "lz-icon" }), d = /* @__PURE__ */ o({
  ...i,
  props: {
    type: {}
  },
  setup(t) {
    const e = t, n = l(() => ({ [`lz-icon--${e.type}`]: e.type }));
    return (c, m) => (r(), s("span", {
      class: p(["lz-icon", n.value])
    }, [
      a(c.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
