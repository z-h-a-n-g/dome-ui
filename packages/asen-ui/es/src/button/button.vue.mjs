import { defineComponent as e, computed as r, openBlock as s, createElementBlock as u, normalizeClass as p, renderSlot as a } from "vue";
import "./style/index.css";
const c = e({ name: "lz-button" }), d = /* @__PURE__ */ e({
  ...c,
  props: {
    type: {}
  },
  setup(o) {
    const t = o, n = r(() => ({ [`lz-button--${t.type}`]: t.type }));
    return (l, m) => (s(), u("button", {
      class: p(["lz-button", n.value])
    }, [
      a(l.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
