import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aK as createElementBlock, aL as renderList, aM as Fragment, aA as createVNode, aB as createBaseVNode, aJ as createTextVNode, aF as resolveDynamicComponent, aN as toDisplayString } from "./vendor.bd202a0d.js";
import { E as ENTITY_TYPES } from "./entityOptions.6170e7d3.js";
import { M as MdiHourglassBottom, a as MdiHourglassTop, b as MdiFlag } from "./MdiFlag.88c7f7e5.js";
import { M as MdiThumbUp } from "./MdiThumbUp.a04d8930.js";
import { M as MdiCollections } from "./MdiCollections.f10ac754.js";
import { M as MdiChat } from "./MdiChat.134d6b66.js";
import { M as MdiMilitaryTech } from "./MdiMilitaryTech.6cd642b0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./MdiPalette.be13da72.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Chip.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { ENTITY_TYPES, MdiHourglassBottom, MdiHourglassTop, MdiThumbUp, MdiFlag, MdiCollections, MdiChat, MdiMilitaryTech };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "pw-chip" };
const _hoisted_2 = { class: "pw-chip" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Voting ");
const _hoisted_4 = { class: "pw-chip" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Finished ");
const _hoisted_6 = { class: "pw-chip" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" 12 days left ");
const _hoisted_8 = { class: "pw-chip color-rosa" };
const _hoisted_9 = /* @__PURE__ */ createTextVNode(" 6 days left ");
const _hoisted_10 = { class: "pw-chip bg-red color-white" };
const _hoisted_11 = /* @__PURE__ */ createBaseVNode("span", null, "Define Hero", -1);
const _hoisted_12 = { class: "pw-chip" };
const _hoisted_13 = /* @__PURE__ */ createTextVNode(" 16 ");
const _hoisted_14 = { class: "pw-chip" };
const _hoisted_15 = /* @__PURE__ */ createTextVNode(" 24 ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Chip",
    layout: { type: "grid", width: 350 }
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.ENTITY_TYPES, (ChallengeType) => {
        return openBlock(), createBlock(_component_Variant, {
          key: ChallengeType.label,
          title: ChallengeType.label
        }, {
          default: withCtx(() => [
            createBaseVNode("span", _hoisted_1, [
              (openBlock(), createBlock(resolveDynamicComponent(ChallengeType.icon), { class: "mr-sm" })),
              createTextVNode(" " + toDisplayString(ChallengeType.label), 1)
            ])
          ]),
          _: 2
        }, 1032, ["title"]);
      }), 128)),
      createVNode(_component_Variant, { title: "Voting" }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_2, [
            createVNode($setup["MdiThumbUp"], { class: "mr-sm" }),
            _hoisted_3
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Finished" }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_4, [
            createVNode($setup["MdiFlag"], { class: "mr-sm" }),
            _hoisted_5
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Days left" }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_6, [
            createVNode($setup["MdiHourglassTop"], { class: "mr-sm" }),
            _hoisted_7
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Days left with warning" }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_8, [
            createVNode($setup["MdiHourglassBottom"], { class: "mr-sm" }),
            _hoisted_9
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Days left with warning" }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_10, [
            createVNode($setup["MdiMilitaryTech"], { class: "mr-sm" }),
            _hoisted_11
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Participation" }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_12, [
            createVNode($setup["MdiCollections"], {
              class: "mr-sm",
              "aria-label": "Participations"
            }),
            _hoisted_13
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Comments" }, {
        default: withCtx(() => [
          createBaseVNode("span", _hoisted_14, [
            createVNode($setup["MdiChat"], {
              class: "mr-sm",
              "aria-label": "Comments"
            }),
            _hoisted_15
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/Chip.story.vue";
const Chip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Chip.story.vue"]]);
export {
  Chip_story as default
};
