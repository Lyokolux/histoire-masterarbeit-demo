import { az as openBlock, aK as createElementBlock, aB as createBaseVNode, aC as renderSlot } from "./vendor.e1f182eb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const Flyout_vue_vue_type_style_index_0_scoped_017521c2_lang = "";
const _sfc_main = {};
const _hoisted_1 = { style: { "position": "relative" } };
const _hoisted_2 = { class: "flyout-trigger contents" };
const _hoisted_3 = { class: "flyout" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "trigger", {}, void 0, true)
    ]),
    createBaseVNode("div", _hoisted_3, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
_sfc_main.__file = "components/atoms/Flyout.vue";
const Flyout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-017521c2"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Flyout.vue"]]);
export {
  Flyout as F
};
