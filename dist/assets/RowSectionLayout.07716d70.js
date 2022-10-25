import { av as defineComponent, az as openBlock, ax as createBlock, ay as withCtx, aC as renderSlot, aF as resolveDynamicComponent } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const RowSectionLayout_vue_vue_type_style_index_0_scoped_67c4b124_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RowSectionLayout",
  props: {
    tag: { type: String, required: false, default: "div" }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "layout" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "title", {}, void 0, true),
      renderSlot(_ctx.$slots, "link", {}, void 0, true),
      renderSlot(_ctx.$slots, "content", {}, void 0, true)
    ]),
    _: 3
  });
}
_sfc_main.__file = "layouts/RowSectionLayout.vue";
const RowSectionLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-67c4b124"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/layouts/RowSectionLayout.vue"]]);
export {
  RowSectionLayout as R
};
