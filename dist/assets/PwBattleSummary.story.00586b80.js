import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aQ as normalizeProps, aR as guardReactiveProps, aB as createBaseVNode } from "./vendor.bd202a0d.js";
import { P as PwBattleSummary } from "./PwBattleSummary.6c4b0db3.js";
import { T as TimeInMS } from "./battle.8272f3c5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./MdiFlag.88c7f7e5.js";
import "./PwCategorieChip.3bbd7066.js";
import "./Markdown.a0019ca8.js";
import "./MdiCollections.f10ac754.js";
import "./MdiChat.134d6b66.js";
import "./MdiPalette.be13da72.js";
const PwBattleSummary_story_vue_vue_type_style_index_0_scoped_53408819_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwBattleSummary.story",
  setup(__props, { expose }) {
    expose();
    const basic = {
      number: 24,
      title: "Low Poly Elbphilharmonie",
      desc: "Weiterbildung in Blender (Modelling, Materialeigenschaften, Licht) ",
      type: "Battle",
      categorie: "Graphics",
      participations: 6,
      comments: 42
    };
    const deposit = {
      startVotingAt: new Date(new Date().setTime(new Date().getTime() + 10 * TimeInMS.DAY)),
      endAt: new Date(new Date().setTime(new Date().getTime() + 10 * TimeInMS.DAY))
    };
    const voting = {
      startVotingAt: new Date(new Date().setTime(new Date().getTime() - 10 * TimeInMS.DAY)),
      endAt: new Date(new Date().setTime(new Date().getTime() + 10 * TimeInMS.DAY))
    };
    const finished = {
      startVotingAt: new Date(new Date().setTime(new Date().getTime() - 10 * TimeInMS.DAY)),
      endAt: new Date(new Date().setTime(new Date().getTime() - 10 * TimeInMS.DAY))
    };
    const __returned__ = { basic, deposit, voting, finished, PwBattleSummary };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "in-card" };
const _hoisted_2 = { class: "in-card" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Battle Summary" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic -- deposit" }, {
        default: withCtx(() => [
          createVNode($setup["PwBattleSummary"], normalizeProps(guardReactiveProps({ ...$setup.basic, ...$setup.deposit })), null, 16)
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "in card -- voting" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["PwBattleSummary"], normalizeProps(guardReactiveProps({ ...$setup.basic, ...$setup.voting })), null, 16)
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "in card -- finished" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["PwBattleSummary"], normalizeProps(guardReactiveProps({ ...$setup.basic, ...$setup.finished })), null, 16)
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/PwBattleSummary.story.vue";
const PwBattleSummary_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-53408819"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwBattleSummary.story.vue"]]);
export {
  PwBattleSummary_story as default
};
