import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.bd202a0d.js";
import { P as PwMedia } from "./PwMedia.4355971d.js";
import { l as lowPolyArtGoldfishImg } from "./low-poly-art-goldfish-cover.feab0e4b.js";
import { v as videoFixture } from "./tarot-the-empress-video.bc097517.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwMedia.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { PwMedia, imageFixture: lowPolyArtGoldfishImg, videoFixture };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Media" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic image" }, {
        default: withCtx(() => [
          createVNode($setup["PwMedia"], {
            type: "image",
            src: $setup.imageFixture
          }, null, 8, ["src"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Video" }, {
        default: withCtx(() => [
          createVNode($setup["PwMedia"], {
            type: "video/mp4",
            src: $setup.videoFixture
          }, null, 8, ["src"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/PwMedia.story.vue";
const PwMedia_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwMedia.story.vue"]]);
export {
  PwMedia_story as default
};
