import { av as defineComponent, aG as computed, az as openBlock, aK as createElementBlock, aB as createBaseVNode, aN as toDisplayString, ax as createBlock, ay as withCtx, aJ as createTextVNode, aF as resolveDynamicComponent, aA as createVNode, aS as createCommentVNode, aO as normalizeClass } from "./vendor.e1f182eb.js";
import { T as TimeInMS, W as WARNING_AT_DAYS_LEFT } from "./battle.8272f3c5.js";
import { b as MdiFlag, M as MdiHourglassBottom, a as MdiHourglassTop } from "./MdiFlag.e978e074.js";
import { P as PwCategorieChip } from "./PwCategorieChip.42475d05.js";
import { M as Markdown } from "./Markdown.b212a4a0.js";
import { M as MdiCollections } from "./MdiCollections.78c0d760.js";
import { M as MdiChat } from "./MdiChat.5abc105a.js";
import { M as MdiTrophy, a as MdiPalette } from "./MdiPalette.f8b8d90f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const useDaysLeft = (limit) => Math.round(new Date(new Date(limit).getTime() - new Date().getTime()).getTime() / TimeInMS.DAY);
const PwBattleSummary_vue_vue_type_style_index_0_scoped_65ff23a5_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwBattleSummary",
  props: {
    h: { type: Number, required: false, default: 2 },
    number: { type: Number, required: true },
    title: { type: String, required: true },
    type: { type: null, required: true },
    desc: { type: String, required: true },
    categorie: { type: null, required: true },
    participations: { type: Number, required: false },
    comments: { type: Number, required: false },
    startVotingAt: { type: Date, required: false },
    endAt: { type: Date, required: true },
    hideChip: { type: Boolean, required: false }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const state = computed(() => {
      const currentDate = new Date();
      if (currentDate < props.endAt) {
        if (props.startVotingAt && currentDate > props.startVotingAt) {
          return {
            phaseKey: "Voting",
            daysBeforeEnd: useDaysLeft(props.endAt)
          };
        } else {
          return {
            phaseKey: "Deposit",
            daysBeforeEnd: props.startVotingAt ? useDaysLeft(props.startVotingAt) : useDaysLeft(props.endAt)
          };
        }
      } else {
        return {
          icon: MdiFlag,
          phaseKey: "Finished",
          daysBeforeEnd: 0
        };
      }
    });
    const isWarningTime = state.value.daysBeforeEnd >= 0 && state.value.daysBeforeEnd <= WARNING_AT_DAYS_LEFT;
    const __returned__ = { props, state, isWarningTime, MdiFlag, PwCategorieChip, Markdown, MdiCollections, MdiChat, MdiHourglassBottom, MdiHourglassTop, MdiTrophy, MdiPalette };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "battle-summary" };
const _hoisted_2 = { class: "text-l" };
const _hoisted_3 = { class: "desc" };
const _hoisted_4 = {
  class: "visible row wrap justify-end",
  style: { "gap": "12px" }
};
const _hoisted_5 = { class: "pw-chip" };
const _hoisted_6 = {
  key: 2,
  class: "pw-chip ml-auto"
};
const _hoisted_7 = {
  key: 3,
  class: "pw-chip"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("span", _hoisted_2, toDisplayString($props.type) + " #" + toDisplayString($props.number), 1),
    (openBlock(), createBlock(resolveDynamicComponent(`h${$props.h}`), null, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.title), 1)
      ]),
      _: 1
    })),
    createBaseVNode("div", _hoisted_3, [
      createVNode($setup["Markdown"], {
        class: "overflow-line-ellipsis text-l",
        content: $props.desc
      }, null, 8, ["content"])
    ]),
    createBaseVNode("div", _hoisted_4, [
      $props.categorie !== void 0 && !$props.hideChip ? (openBlock(), createBlock($setup["PwCategorieChip"], {
        key: 0,
        categorie: $props.categorie
      }, null, 8, ["categorie"])) : createCommentVNode("v-if", true),
      createBaseVNode("span", _hoisted_5, [
        $props.type === "Battle" ? (openBlock(), createBlock($setup["MdiTrophy"], {
          key: 0,
          class: "mr-sm"
        })) : createCommentVNode("v-if", true),
        $props.type === "Playground" ? (openBlock(), createBlock($setup["MdiPalette"], {
          key: 1,
          class: "mr-sm"
        })) : createCommentVNode("v-if", true),
        createTextVNode(" " + toDisplayString($props.type), 1)
      ]),
      $setup.state.phaseKey !== "Finished" ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(["pw-chip", { "color-rosa": $setup.isWarningTime && $setup.state.daysBeforeEnd >= 0 }])
      }, [
        (openBlock(), createBlock(resolveDynamicComponent($setup.isWarningTime ? $setup.state.daysBeforeEnd < 0 ? $setup.MdiFlag : $setup.MdiHourglassBottom : $setup.MdiHourglassTop), { class: "mr-sm" })),
        createBaseVNode("span", null, toDisplayString($setup.state.daysBeforeEnd) + " days left", 1)
      ], 2)) : createCommentVNode("v-if", true),
      $props.participations !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_6, [
        createVNode($setup["MdiCollections"], {
          class: "mr-sm",
          "aria-label": "Participations"
        }),
        createTextVNode(toDisplayString($props.participations), 1)
      ])) : createCommentVNode("v-if", true),
      $props.comments !== void 0 ? (openBlock(), createElementBlock("span", _hoisted_7, [
        createVNode($setup["MdiChat"], {
          class: "mr-sm",
          "aria-label": "Comments"
        }),
        createTextVNode(toDisplayString($props.comments), 1)
      ])) : createCommentVNode("v-if", true)
    ])
  ]);
}
_sfc_main.__file = "components/atoms/PwBattleSummary.vue";
const PwBattleSummary = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-65ff23a5"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwBattleSummary.vue"]]);
export {
  PwBattleSummary as P
};
