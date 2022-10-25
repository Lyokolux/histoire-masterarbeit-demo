import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aJ as createTextVNode } from "./vendor.e1f182eb.js";
import { P as PwBanner } from "./PwBanner.f3f0d516.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./MdiClose.8c1d5735.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwBanner.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { PwBanner };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" Battle ");
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Battle ");
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Battle ");
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Battle ");
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Battle ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_MdiCloudUpload = resolveComponent("MdiCloudUpload");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Banner" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["PwBanner"], null, {
            default: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "State: Success" }, {
        default: withCtx(() => [
          createVNode($setup["PwBanner"], { type: "success" }, {
            default: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "State: Warning" }, {
        default: withCtx(() => [
          createVNode($setup["PwBanner"], { type: "warning" }, {
            default: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "State: Error" }, {
        default: withCtx(() => [
          createVNode($setup["PwBanner"], { type: "error" }, {
            default: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "fullscreen" }, {
        default: withCtx(() => [
          createVNode($setup["PwBanner"], { fullscreen: "" }, {
            default: withCtx(() => [
              createVNode(_component_MdiCloudUpload, { class: "mr-sm" }),
              _hoisted_5
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
_sfc_main.__file = "components/atoms/PwBanner.story.vue";
const PwBanner_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwBanner.story.vue"]]);
export {
  PwBanner_story as default
};
