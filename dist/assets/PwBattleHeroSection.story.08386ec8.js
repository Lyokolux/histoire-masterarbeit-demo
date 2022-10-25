import { av as defineComponent, az as openBlock, aK as createElementBlock, ax as createBlock, ay as withCtx, aJ as createTextVNode, aN as toDisplayString, aF as resolveDynamicComponent, aA as createVNode, aB as createBaseVNode, aO as normalizeClass, aw as resolveComponent } from "./vendor.e1f182eb.js";
import { u as useAvatar } from "./useAvatar.e8fa7cc5.js";
import { P as PwMedia } from "./PwMedia.82b20efc.js";
import { M as MdiFilterVintage } from "./MdiFilterVintage.631bce95.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { t as theMoonCover } from "./tarot-the-moon-cover.d69e4721.js";
import { p as participationDesc } from "./text.e54094f8.js";
const PwBattleHeroSection_vue_vue_type_style_index_0_scoped_b369b1a5_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwBattleHeroSection",
  props: {
    h: { type: Number, required: false, default: 2 },
    battleTitle: { type: String, required: true },
    participationTitle: { type: String, required: true },
    coverSrc: { type: String, required: true },
    desc: { type: String, required: true },
    author: { type: Object, required: false },
    canCongratulate: { type: Boolean, required: false }
  },
  emits: ["congratulate"],
  setup(__props, { expose, emit }) {
    var _a;
    expose();
    const props = __props;
    const avatarSrc = useAvatar((_a = props.author) == null ? void 0 : _a.email, 100).src.value;
    const __returned__ = { props, emit, avatarSrc, PwMedia, MdiFilterVintage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = { class: "gradient-hero column items-center" };
const _hoisted_2 = { class: "text-xl" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "mb" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Kudos ");
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  return openBlock(), createElementBlock("section", _hoisted_1$1, [
    (openBlock(), createBlock(resolveDynamicComponent(`h${$props.h}`), { class: "text-center headline" }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.battleTitle), 1)
      ]),
      _: 1
    })),
    createVNode($setup["PwMedia"], {
      class: "cover",
      type: "image",
      src: $props.coverSrc
    }, null, 8, ["src"]),
    (openBlock(), createBlock(resolveDynamicComponent(`h${$props.h + 1}`), { class: "text-center mt headline" }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.participationTitle), 1)
      ]),
      _: 1
    })),
    createBaseVNode("pre", _hoisted_2, toDisplayString($props.desc), 1),
    createBaseVNode("img", {
      class: "avatar-xl mt-sm",
      src: $setup.avatarSrc
    }, null, 8, _hoisted_3),
    createBaseVNode("span", _hoisted_4, toDisplayString((_b = (_a = $props.author) == null ? void 0 : _a.name) != null ? _b : "Anonym"), 1),
    createBaseVNode("button", {
      class: normalizeClass(["btn-tertiary", { "activated": !$props.canCongratulate }]),
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("congratulate"))
    }, [
      createVNode($setup["MdiFilterVintage"], { class: "mr-sm" }),
      _hoisted_5
    ], 2)
  ]);
}
_sfc_main$1.__file = "components/organisms/PwBattleHeroSection.vue";
const PwBattleHeroSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-b369b1a5"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwBattleHeroSection.vue"]]);
const PwBattleHeroSection_story_vue_vue_type_style_index_0_scoped_e0ef3859_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwBattleHeroSection.story",
  setup(__props, { expose }) {
    expose();
    const user = { name: "Jite Waboh", email: "jitewaboh@lagify.com" };
    const __returned__ = { user, PwBattleHeroSection, theMoonCover, participationDesc };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "storyContainer" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Battle Hero Section" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["PwBattleHeroSection"], {
              battleTitle: "Tarot / Tarot",
              participationTitle: "The Moon",
              coverSrc: $setup.theMoonCover,
              desc: $setup.participationDesc,
              author: $setup.user
            }, null, 8, ["coverSrc", "desc"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/organisms/PwBattleHeroSection.story.vue";
const PwBattleHeroSection_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e0ef3859"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwBattleHeroSection.story.vue"]]);
export {
  PwBattleHeroSection_story as default
};
