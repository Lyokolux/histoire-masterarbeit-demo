import { av as defineComponent, az as openBlock, aK as createElementBlock, aB as createBaseVNode, aO as normalizeClass, aN as toDisplayString, aS as createCommentVNode, aA as createVNode, aJ as createTextVNode, aM as Fragment, aw as resolveComponent, ax as createBlock, ay as withCtx } from "./vendor.e1f182eb.js";
import { u as useAvatar } from "./useAvatar.e8fa7cc5.js";
import { M as MdiMilitaryTech } from "./MdiMilitaryTech.29698cdd.js";
import { M as MdiTrophy, a as MdiPalette } from "./MdiPalette.f8b8d90f.js";
import { M as MdiChat } from "./MdiChat.5abc105a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwUserDisplay_vue_vue_type_style_index_0_scoped_621b7bdb_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwUserDisplay",
  props: {
    user: { type: Object, required: false },
    heroCount: { type: Number, required: false },
    battleCount: { type: Number, required: false },
    playgroundCount: { type: Number, required: false },
    commentCount: { type: Number, required: false }
  },
  setup(__props, { expose }) {
    var _a;
    expose();
    const props = __props;
    const { src } = useAvatar((_a = props.user) == null ? void 0 : _a.email, 100);
    const __returned__ = { props, src, MdiMilitaryTech, MdiTrophy, MdiPalette, MdiChat };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = ["src"];
const _hoisted_2 = {
  key: 0,
  class: "font-regular",
  style: { "font-size": "1.15rem" }
};
const _hoisted_3 = {
  class: "row wrap items-center",
  style: { "gap": "12px" }
};
const _hoisted_4 = { class: "pw-chip gradient-hero text-black" };
const _hoisted_5 = { class: "pw-chip" };
const _hoisted_6 = { class: "pw-chip" };
const _hoisted_7 = { class: "pw-chip" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  return openBlock(), createElementBlock(Fragment, null, [
    createBaseVNode("img", {
      class: normalizeClass(["avatar", { "anonym": !$props.user }]),
      src: $setup.src,
      alt: ""
    }, null, 10, _hoisted_1$1),
    $props.user ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($props.user.name), 1)) : createCommentVNode("v-if", true),
    createBaseVNode("ul", _hoisted_3, [
      createBaseVNode("li", _hoisted_4, [
        createVNode($setup["MdiMilitaryTech"], { class: "mr-sm" }),
        createTextVNode(" " + toDisplayString((_a = $props.heroCount) != null ? _a : 0), 1)
      ]),
      createBaseVNode("li", _hoisted_5, [
        createVNode($setup["MdiTrophy"], { class: "mr-sm" }),
        createTextVNode(" " + toDisplayString((_b = $props.battleCount) != null ? _b : 0), 1)
      ]),
      createBaseVNode("li", _hoisted_6, [
        createVNode($setup["MdiPalette"], { class: "mr-sm" }),
        createTextVNode(" " + toDisplayString((_c = $props.playgroundCount) != null ? _c : 0), 1)
      ]),
      createBaseVNode("li", _hoisted_7, [
        createVNode($setup["MdiChat"], { class: "mr-sm" }),
        createTextVNode(" " + toDisplayString((_d = $props.commentCount) != null ? _d : 0), 1)
      ])
    ])
  ], 64);
}
_sfc_main$1.__file = "components/molecules/PwUserDisplay.vue";
const PwUserDisplay = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-621b7bdb"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwUserDisplay.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwUserDisplay.story",
  setup(__props, { expose }) {
    expose();
    const user = { name: "Jite Waboh", email: "jitewaboh@lagify.com" };
    const __returned__ = { user, PwUserDisplay };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "column items-center",
  style: { "gap": "12px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "User Display",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["PwUserDisplay"], { user: $setup.user })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/molecules/PwUserDisplay.story.vue";
const PwUserDisplay_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwUserDisplay.story.vue"]]);
export {
  PwUserDisplay_story as default
};
