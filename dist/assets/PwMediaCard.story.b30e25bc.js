import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode, aO as normalizeClass } from "./vendor.e1f182eb.js";
import { P as PwMediaCard } from "./PwMediaCard.e87743fb.js";
import { l as loopedAnimationThemeImg } from "./theme-26-looped-animation.5efde032.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./useCategorieToGradient.d7ebc894.js";
import "./PwMedia.82b20efc.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwMediaCard.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { PwMediaCard, loopedAnimationThemeImg };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { style: { "position": "relative" } }, [
  /* @__PURE__ */ createBaseVNode("span", {
    class: "pw-chip",
    style: { "position": "absolute", "bottom": "24px", "left": "24px" }
  }, "Visible content")
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", {
  class: "pw-chip",
  style: { "position": "absolute", "top": "24px", "left": "24px" }
}, "Hoverable content", -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Media Card",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCard"], {
            categorie: "User Interface",
            src: $setup.loopedAnimationThemeImg
          }, {
            default: withCtx(({ hoverClass }) => [
              _hoisted_1,
              createBaseVNode("div", {
                class: normalizeClass(hoverClass)
              }, _hoisted_3, 2)
            ]),
            _: 1
          }, 8, ["src"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/atoms/PwMediaCard.story.vue";
const PwMediaCard_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwMediaCard.story.vue"]]);
export {
  PwMediaCard_story as default
};
