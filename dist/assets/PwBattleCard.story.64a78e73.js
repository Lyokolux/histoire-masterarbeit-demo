import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aO as normalizeClass } from "./vendor.bd202a0d.js";
import { P as PwMediaCard } from "./PwMediaCard.7822edf8.js";
import { P as PwBattleSummary } from "./PwBattleSummary.6c4b0db3.js";
import { T as THEME_SUGGESTION_DESCRIPTION } from "./text.e54094f8.js";
import { l as loopedAnimationThemeImg } from "./theme-26-looped-animation.5efde032.js";
import { m as merchandizeThemeImg } from "./theme-27-merchandise.7a21d501.js";
import { T as TimeInMS } from "./battle.8272f3c5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./useCategorieToGradient.86df58bf.js";
import "./PwMedia.4355971d.js";
import "./MdiFlag.88c7f7e5.js";
import "./PwCategorieChip.3bbd7066.js";
import "./Markdown.a0019ca8.js";
import "./MdiCollections.f10ac754.js";
import "./MdiChat.134d6b66.js";
import "./MdiPalette.be13da72.js";
const PwBattleCard_story_vue_vue_type_style_index_0_scoped_40794041_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwBattleCard.story",
  setup(__props, { expose }) {
    expose();
    const endAt = new Date(new Date().setTime(new Date().getTime() + 10 * TimeInMS.DAY));
    const __returned__ = { endAt, PwMediaCard, PwBattleSummary, THEME_SUGGESTION_DESCRIPTION, loopedAnimationThemeImg, merchandizeThemeImg };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Battle Card",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Battle Matze" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCard"], {
            categorie: "User Interface",
            src: $setup.loopedAnimationThemeImg
          }, {
            default: withCtx(({ hoverClass }) => [
              createVNode($setup["PwBattleSummary"], {
                categorie: "User Interface",
                class: normalizeClass(hoverClass),
                number: 42,
                type: "Battle",
                title: "Looped animation",
                desc: $setup.THEME_SUGGESTION_DESCRIPTION,
                comments: 10,
                participations: 4,
                endAt: $setup.endAt
              }, null, 8, ["class", "desc", "endAt"])
            ]),
            _: 1
          }, 8, ["src"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Battle 2" }, {
        default: withCtx(() => [
          createVNode($setup["PwMediaCard"], {
            categorie: "User Interface",
            src: $setup.merchandizeThemeImg
          }, {
            default: withCtx(({ hoverClass }) => [
              createVNode($setup["PwBattleSummary"], {
                categorie: "User Interface",
                class: normalizeClass(hoverClass),
                number: 42,
                type: "Battle",
                title: "Merchandize",
                desc: $setup.THEME_SUGGESTION_DESCRIPTION,
                comments: 10,
                participations: 4,
                endAt: $setup.endAt
              }, null, 8, ["class", "desc", "endAt"])
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
_sfc_main.__file = "components/molecules/PwBattleCard.story.vue";
const PwBattleCard_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-40794041"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwBattleCard.story.vue"]]);
export {
  PwBattleCard_story as default
};
