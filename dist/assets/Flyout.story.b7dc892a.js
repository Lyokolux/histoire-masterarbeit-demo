import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode, aD as pushScopeId, aE as popScopeId } from "./vendor.e1f182eb.js";
import { F as Flyout } from "./Flyout.9bf5699f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const Flyout_story_vue_vue_type_style_index_0_scoped_aa84d16e_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Flyout.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { Flyout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-aa84d16e"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "story" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("button", { class: "btn-primary" }, "CTA", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("button", { class: "btn-secondary" }, " Logout ", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Flyout",
    layout: { type: "grid", width: 400 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Default" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["Flyout"], null, {
              trigger: withCtx(() => [
                _hoisted_2
              ]),
              default: withCtx(() => [
                _hoisted_3
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/Flyout.story.vue";
const Flyout_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa84d16e"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Flyout.story.vue"]]);
export {
  Flyout_story as default
};
