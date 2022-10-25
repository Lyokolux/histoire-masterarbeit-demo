import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.e1f182eb.js";
import { P as PwFileDropzoneContent } from "./PwFileDropzoneContent.510e688c.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./MdiCloudUpload.d6afbe2e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwFileDropzoneContent.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { PwFileDropzoneContent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "File Dropzone content" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["PwFileDropzoneContent"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/PwFileDropzoneContent.story.vue";
const PwFileDropzoneContent_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwFileDropzoneContent.story.vue"]]);
export {
  PwFileDropzoneContent_story as default
};
