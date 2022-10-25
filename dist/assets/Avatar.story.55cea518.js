import { u as useAvatar } from "./useAvatar.ece45c52.js";
import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Avatar.story",
  setup(__props, { expose }) {
    expose();
    const avatarSrc = useAvatar("jitewaboh@lagify.com", 32).src.value;
    const __returned__ = { avatarSrc };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src"];
const _hoisted_2 = ["src"];
const _hoisted_3 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Avatar",
    layout: { type: "grid", width: 150 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("img", {
            src: $setup.avatarSrc,
            style: { "width": "32px", "border-radius": "50%" }
          }, null, 8, _hoisted_1)
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Highlighted" }, {
        default: withCtx(() => [
          createBaseVNode("img", {
            src: $setup.avatarSrc,
            style: { "width": "32px", "border-radius": "50%", "border": "2px solid white" }
          }, null, 8, _hoisted_2)
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Hero" }, {
        default: withCtx(() => [
          createBaseVNode("img", {
            src: $setup.avatarSrc,
            style: { "width": "46px", "border-radius": "50%", "border": "2px solid white" }
          }, null, 8, _hoisted_3)
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/Avatar.story.vue";
const Avatar_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Avatar.story.vue"]]);
export {
  Avatar_story as default
};
