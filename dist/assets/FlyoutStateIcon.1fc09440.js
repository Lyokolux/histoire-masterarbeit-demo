import { az as openBlock, aK as createElementBlock, aB as createBaseVNode, av as defineComponent, ax as createBlock, aO as normalizeClass } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$1 = {};
const _hoisted_1 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _hoisted_4);
}
_sfc_main$1.__file = "assets/icons/MdiExpandMore.vue";
const MdiExpandMore = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiExpandMore.vue"]]);
const FlyoutStateIcon_vue_vue_type_style_index_0_scoped_bd329d2c_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FlyoutStateIcon",
  props: {
    open: { type: Boolean, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = { MdiExpandMore };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["MdiExpandMore"], {
    class: normalizeClass(["state-icon", { "open": $props.open }])
  }, null, 8, ["class"]);
}
_sfc_main.__file = "components/atoms/FlyoutStateIcon.vue";
const FlyoutStateIcon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bd329d2c"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/FlyoutStateIcon.vue"]]);
export {
  FlyoutStateIcon as F
};
