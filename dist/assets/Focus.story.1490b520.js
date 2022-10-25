import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode, aJ as createTextVNode } from "./vendor.e1f182eb.js";
import { M as MdiNorthEast } from "./MdiNorthEast.139521af.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Focus.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { MdiNorthEast };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("p", {
  class: "chip focusable",
  tabindex: "0"
}, " Some focusable content ", -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("button", { class: "btn-tertiary" }, " Already focusable as button ", -1);
const _hoisted_3 = {
  class: "row items-center link",
  tabindex: "0",
  style: { "gap": "8px" }
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Link blue focus ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Focus",
    layout: { type: "grid", width: 350 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Element" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Already focusable" }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Link focusable" }, {
        default: withCtx(() => [
          createBaseVNode("a", _hoisted_3, [
            _hoisted_4,
            createVNode($setup["MdiNorthEast"], { style: { "--ratio": "1em", "color": "var(--es-blue)" } })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/Focus.story.vue";
const Focus_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Focus.story.vue"]]);
export {
  Focus_story as default
};
