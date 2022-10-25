import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aS as createCommentVNode, aA as createVNode } from "./vendor.bd202a0d.js";
import { P as PwNewsCard, h as heroErgozionImg, g as gradientsThemeImg } from "./theme-30-gradients.b73487f6.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./useAvatar.ece45c52.js";
import "./PwMedia.4355971d.js";
import "./PwCategorieChip.3bbd7066.js";
import "./MdiFilterVintage.ade3d284.js";
const participationPippleTallentImg = "" + new URL("participation-pipple-t\xE4llent.7373d17e.png", import.meta.url).href;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwNewsCard.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { PwNewsCard, heroErgozionImg, participationPippleTallentImg, themeGradientsImg: gradientsThemeImg };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "News Card",
    layout: { type: "grid", width: "430px" }
  }, {
    default: withCtx(() => [
      createCommentVNode(" Proposal "),
      createVNode(_component_Variant, { title: "Theme suggestion without image - Gradients" }, {
        default: withCtx(() => [
          createVNode($setup["PwNewsCard"], {
            type: "proposal",
            categorie: "User Interface",
            title: "Gradients",
            date: "01.01.2022",
            text: "Im Battle #24 sollt ihr den aktuellen Design Trends folgen und deren Grenzen ausloten. \n\nDie Kombination aus skeuomorphen Gestaltungstechniken und modernem Styling bietet viele M\xF6glichkeiten Stimmung und Haptik in die Interfaces zu bringen.\n\nDas Battle soll euch die M\xF6glichkeit bieten zu explorieren, neue Techniken und Tools zu erlernen und euch die Chancen aber auch Grenzen des aktuellen Trends bewusst zu machen. \n\nTobt euch aus! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Theme suggestion with image" }, {
        default: withCtx(() => [
          createVNode($setup["PwNewsCard"], {
            type: "proposal",
            categorie: "User Interface",
            title: "Gradients",
            src: $setup.themeGradientsImg,
            date: "01.01.2022"
          }, null, 8, ["src"])
        ]),
        _: 1
      }),
      createCommentVNode(" Submission "),
      createVNode(_component_Variant, { title: "New Upload ErgoZion" }, {
        default: withCtx(() => [
          createVNode($setup["PwNewsCard"], {
            type: "submission",
            categorie: "User Interface",
            title: "Pipple und T\xE4llent",
            src: $setup.participationPippleTallentImg,
            legend: `Battle 23 - Character Design`,
            date: "01.01.2022"
          }, null, 8, ["src"])
        ]),
        _: 1
      }),
      createCommentVNode(" Hero "),
      createVNode(_component_Variant, { title: "Hero ErgoZion UX Design" }, {
        default: withCtx(() => [
          createVNode($setup["PwNewsCard"], {
            type: "hero",
            categorie: "User Interface",
            title: "ErgoZion",
            src: $setup.heroErgozionImg,
            hero: { name: "Jite Waboh", email: "jitewaboh@lagify.com" }
          }, null, 8, ["src", "hero"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Hero ErgoZion Drawing" }, {
        default: withCtx(() => [
          createVNode($setup["PwNewsCard"], {
            type: "hero",
            categorie: "Pencil",
            title: "ErgoZion",
            src: $setup.heroErgozionImg,
            hero: { name: "Jite Waboh", email: "jitewaboh@lagify.com" }
          }, null, 8, ["src", "hero"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/molecules/PwNewsCard.story.vue";
const PwNewsCard_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwNewsCard.story.vue"]]);
export {
  PwNewsCard_story as default
};
