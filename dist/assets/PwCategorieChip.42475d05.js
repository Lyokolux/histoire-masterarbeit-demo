import { av as defineComponent, az as openBlock, aK as createElementBlock, aC as renderSlot, aO as normalizeClass, aJ as createTextVNode, aN as toDisplayString } from "./vendor.e1f182eb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwCategorieChip_vue_vue_type_style_index_0_scoped_df1c0f08_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCategorieChip",
  props: {
    label: { type: String, required: false },
    categorie: { type: [null, String], required: false, default: "dark" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(["pw-chip categorie font-regular", `gradient-${(_a = $props.categorie) == null ? void 0 : _a.replace(" ", "-").toLowerCase()}`])
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createTextVNode(toDisplayString($props.label ? $props.label : $props.categorie), 1)
    ], true)
  ], 2);
}
_sfc_main.__file = "components/atoms/PwCategorieChip.vue";
const PwCategorieChip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-df1c0f08"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwCategorieChip.vue"]]);
export {
  PwCategorieChip as P
};
