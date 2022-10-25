import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aO as normalizeClass } from "./vendor.e1f182eb.js";
import { P as PwMediaCard } from "./PwMediaCard.e87743fb.js";
import { P as PwParticipationSummary, p as photoshopLogo } from "./Adobe_Photoshop_CC_icon.173ccea6.js";
import { T as THEME_SUGGESTION_DESCRIPTION } from "./text.e54094f8.js";
import { t as theMoonCover } from "./tarot-the-moon-cover.d69e4721.js";
import { l as lowPolyArtGoldfishImg } from "./low-poly-art-goldfish-cover.feab0e4b.js";
import { a as antetypeLogo } from "./Antetype_logo.6ab25a61.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./useCategorieToGradient.d7ebc894.js";
import "./PwMedia.82b20efc.js";
import "./MdiNorthEast.139521af.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwParticipationCard.story",
  setup(__props, { expose }) {
    expose();
    const tools = [
      { name: "Antetype", href: "#", iconHref: antetypeLogo },
      { name: "Adobe Photoshop", href: "#", iconHref: photoshopLogo }
    ];
    const __returned__ = { tools, PwMediaCard, PwParticipationSummary, THEME_SUGGESTION_DESCRIPTION, theMooneCoverImg: theMoonCover, lowPolyArtGoldfishImg };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Participation Card",
    layout: { type: "grid", width: "calc(400px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "The moon" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCard"], {
            categorie: "Pencil",
            src: $setup.theMooneCoverImg
          }, {
            default: withCtx(({ hoverClass }) => [
              createVNode($setup["PwParticipationSummary"], {
                class: normalizeClass(hoverClass),
                title: "The Moon",
                desc: $setup.THEME_SUGGESTION_DESCRIPTION,
                tools: $setup.tools
              }, null, 8, ["class", "desc"])
            ]),
            _: 1
          }, 8, ["src"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Low Poly Art Goldfish" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCard"], {
            categorie: "User Interface",
            src: $setup.lowPolyArtGoldfishImg
          }, {
            default: withCtx(({ hoverClass }) => [
              createVNode($setup["PwParticipationSummary"], {
                class: normalizeClass(hoverClass),
                title: "Low Poly Art Goldfish",
                desc: $setup.THEME_SUGGESTION_DESCRIPTION,
                tools: $setup.tools
              }, null, 8, ["class", "desc"])
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
_sfc_main.__file = "components/molecules/PwParticipationCard.story.vue";
const PwParticipationCard_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwParticipationCard.story.vue"]]);
export {
  PwParticipationCard_story as default
};
