import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aK as createElementBlock, aL as renderList, aM as Fragment, aB as createBaseVNode, aO as normalizeClass } from "./vendor.e1f182eb.js";
import { C as CATEGORIE } from "./categorie.a6b92ec9.js";
import { u as useCategorieToGradient } from "./useCategorieToGradient.d7ebc894.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const TileBackground_story_vue_vue_type_style_index_0_scoped_1deb0df0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "TileBackground.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { CATEGORIE, useCategorieToGradient };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Tile background",
    layout: { type: "grid", width: "calc(200px + 2rem)" }
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList(["hero", "dark", ...$setup.CATEGORIE], (gradient) => {
        return openBlock(), createBlock(_component_Variant, {
          title: gradient,
          key: gradient
        }, {
          default: withCtx(() => [
            createBaseVNode("div", {
              class: normalizeClass(["story-tile", $setup.useCategorieToGradient(gradient).className])
            }, null, 2)
          ]),
          _: 2
        }, 1032, ["title"]);
      }), 128))
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/atoms/TileBackground.story.vue";
const TileBackground_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1deb0df0"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/TileBackground.story.vue"]]);
export {
  TileBackground_story as default
};
