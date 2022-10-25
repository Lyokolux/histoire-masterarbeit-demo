import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.e1f182eb.js";
import { F as FlyoutStateIcon } from "./FlyoutStateIcon.c4d3217f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FlyoutStateIcon.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { FlyoutStateIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Flyout State Icon",
    layout: { type: "grid", width: 150 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Closed" }, {
        default: withCtx(() => [
          createVNode($setup["FlyoutStateIcon"], { open: false })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Open" }, {
        default: withCtx(() => [
          createVNode($setup["FlyoutStateIcon"], { open: true })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/FlyoutStateIcon.story.vue";
const FlyoutStateIcon_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/FlyoutStateIcon.story.vue"]]);
export {
  FlyoutStateIcon_story as default
};
