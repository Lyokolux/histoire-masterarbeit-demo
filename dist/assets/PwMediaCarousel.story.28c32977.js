import { av as defineComponent, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.e1f182eb.js";
import { P as PwMediaCarousel } from "./PwMediaCarousel.c45d76db.js";
import { f as firstMediaSrc, s as secondMediaSrc, t as thirdMediaSrc } from "./gradients-3.e3c9186d.js";
import { v as videoFixture } from "./tarot-the-empress-video.bc097517.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./PwMedia.82b20efc.js";
const PwMediaCarousel_story_vue_vue_type_style_index_0_scoped_9d6681de_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwMediaCarousel.story",
  setup(__props, { expose }) {
    expose();
    const srcs = [
      { type: "image", src: firstMediaSrc, blurhash: "" },
      { type: "image", src: secondMediaSrc, blurhash: "" },
      { type: "image", src: thirdMediaSrc, blurhash: "" }
    ];
    const withVideo = [
      { type: "image", src: firstMediaSrc, blurhash: "" },
      { type: "video/mp4", src: videoFixture }
    ];
    const selected = ref(0);
    const __returned__ = { srcs, withVideo, selected, PwMediaCarousel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Media Carousel" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "with 1 image" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCarousel"], {
            selected: $setup.selected,
            "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.selected = $event),
            media: $setup.srcs.slice(0, 1)
          }, null, 8, ["selected", "media"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with 2 images" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCarousel"], {
            selected: $setup.selected,
            "onUpdate:selected": _cache[1] || (_cache[1] = ($event) => $setup.selected = $event),
            media: $setup.srcs.slice(0, 2)
          }, null, 8, ["selected", "media"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with 3 images" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCarousel"], {
            selected: $setup.selected,
            "onUpdate:selected": _cache[2] || (_cache[2] = ($event) => $setup.selected = $event),
            media: $setup.srcs.slice(0, 3)
          }, null, 8, ["selected", "media"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with 1 image and 1 video" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCarousel"], {
            selected: $setup.selected,
            "onUpdate:selected": _cache[3] || (_cache[3] = ($event) => $setup.selected = $event),
            media: $setup.withVideo
          }, null, 8, ["selected"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/molecules/PwMediaCarousel.story.vue";
const PwMediaCarousel_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-9d6681de"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwMediaCarousel.story.vue"]]);
export {
  PwMediaCarousel_story as default
};
