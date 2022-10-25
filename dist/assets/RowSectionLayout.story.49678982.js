import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aD as pushScopeId, aE as popScopeId, aB as createBaseVNode } from "./vendor.bd202a0d.js";
import { R as RowSectionLayout } from "./RowSectionLayout.07716d70.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const RowSectionLayout_story_vue_vue_type_style_index_0_scoped_63c02b0d_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RowSectionLayout.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { RowSectionLayout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-63c02b0d"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "News", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "Link", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "Secondary", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", null, "Content...", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Row Section" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["RowSectionLayout"], { class: "story" }, {
            title: withCtx(() => [
              _hoisted_1
            ]),
            link: withCtx(() => [
              _hoisted_2
            ]),
            secondary: withCtx(() => [
              _hoisted_3
            ]),
            content: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "layouts/RowSectionLayout.story.vue";
const RowSectionLayout_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-63c02b0d"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/layouts/RowSectionLayout.story.vue"]]);
export {
  RowSectionLayout_story as default
};
