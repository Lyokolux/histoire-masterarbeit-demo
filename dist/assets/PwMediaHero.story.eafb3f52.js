import { av as defineComponent, az as openBlock, aK as createElementBlock, aM as Fragment, aL as renderList, b1 as withModifiers, aA as createVNode, aw as resolveComponent, ax as createBlock, ay as withCtx, b8 as hstEvent } from "./vendor.bd202a0d.js";
import { P as PwMedia } from "./PwMedia.4355971d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { f as firstMediaSrc, s as secondMediaSrc, t as thirdMediaSrc } from "./gradients-3.e3c9186d.js";
const PwMediaHero_vue_vue_type_style_index_0_scoped_654f5c16_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwMediaHero",
  props: {
    medien: { type: Array, required: true }
  },
  emits: ["select"],
  setup(__props, { expose, emit }) {
    expose();
    const __returned__ = { emit, PwMedia };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["onClick"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "media-hero",
    onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $setup.emit("select", 0), ["stop"]))
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.medien, (media, index) => {
      return openBlock(), createElementBlock("button", {
        key: media.src,
        class: "btn-neutral",
        tabindex: "0",
        onClick: withModifiers(($event) => $setup.emit("select", index), ["stop"])
      }, [
        createVNode($setup["PwMedia"], {
          type: media.type,
          src: media.src,
          blurhash: media.blurhash
        }, null, 8, ["type", "src", "blurhash"])
      ], 8, _hoisted_1);
    }), 128))
  ]);
}
_sfc_main$1.__file = "components/molecules/PwMediaHero.vue";
const PwMediaHero = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-654f5c16"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwMediaHero.vue"]]);
const PwMediaHero_story_vue_vue_type_style_index_0_scoped_bc96a181_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwMediaHero.story",
  setup(__props, { expose }) {
    expose();
    const onClick = (...payload) => hstEvent("click", payload);
    const __returned__ = { onClick, PwMediaHero, firstMediaSrc, secondMediaSrc, thirdMediaSrc };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Media Hero" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "with 1 image" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaHero"], {
            firstSrc: $setup.firstMediaSrc,
            onClick: $setup.onClick
          }, null, 8, ["firstSrc"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with 2 images" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaHero"], {
            firstSrc: $setup.firstMediaSrc,
            secondSrc: $setup.secondMediaSrc,
            onClick: $setup.onClick
          }, null, 8, ["firstSrc", "secondSrc"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with 3 images" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaHero"], {
            firstSrc: $setup.firstMediaSrc,
            secondSrc: $setup.secondMediaSrc,
            thirdSrc: $setup.thirdMediaSrc,
            onClick: $setup.onClick
          }, null, 8, ["firstSrc", "secondSrc", "thirdSrc"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/molecules/PwMediaHero.story.vue";
const PwMediaHero_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-bc96a181"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwMediaHero.story.vue"]]);
export {
  PwMediaHero_story as default
};
