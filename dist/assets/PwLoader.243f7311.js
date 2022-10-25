import { av as defineComponent, b0 as useCssVars, az as openBlock, aK as createElementBlock } from "./vendor.e1f182eb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwLoader_vue_vue_type_style_index_0_scoped_39fec482_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwLoader",
  props: {
    size: { type: String, required: false, default: "80px" },
    color: { type: String, required: false, default: "var(--text-color)" }
  },
  setup(__props, { expose }) {
    expose();
    useCssVars((_ctx) => ({
      "39fec482-size": __props.size
    }));
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "loader" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1);
}
_sfc_main.__file = "components/atoms/PwLoader.vue";
const PwLoader = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39fec482"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwLoader.vue"]]);
export {
  PwLoader as P
};
