import { av as defineComponent, az as openBlock, aK as createElementBlock, aB as createBaseVNode, aA as createVNode, aC as renderSlot, aO as normalizeClass } from "./vendor.bd202a0d.js";
import { M as MdiClose } from "./MdiClose.5111c6c9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwBanner_vue_vue_type_style_index_0_scoped_82bda85f_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwBanner",
  props: {
    type: { type: String, required: false, default: "neutral" },
    fullscreen: { type: Boolean, required: false, default: false },
    hideCloseBtn: { type: Boolean, required: false, default: false }
  },
  emits: ["close"],
  setup(__props, { expose, emit }) {
    expose();
    const __returned__ = { emit, MdiClose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`banner ${$props.type} ${$props.fullscreen ? "fullscreen" : ""}`)
  }, [
    createBaseVNode("button", {
      class: "btn-tertiary",
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("close"))
    }, [
      createVNode($setup["MdiClose"])
    ]),
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
_sfc_main.__file = "components/atoms/PwBanner.vue";
const PwBanner = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-82bda85f"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwBanner.vue"]]);
export {
  PwBanner as P
};
