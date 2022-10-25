import { av as defineComponent, az as openBlock, ax as createBlock, ay as withCtx, aB as createBaseVNode, aO as normalizeClass, aC as renderSlot, aF as resolveDynamicComponent, aK as createElementBlock, aG as computed, aN as toDisplayString, aA as createVNode, aS as createCommentVNode, b1 as withModifiers, aJ as createTextVNode } from "./vendor.e1f182eb.js";
import { u as useAvatar } from "./useAvatar.e8fa7cc5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { t as toGradientCSS, P as PwMedia } from "./PwMedia.82b20efc.js";
import { P as PwCategorieChip } from "./PwCategorieChip.42475d05.js";
import { M as MdiFilterVintage } from "./MdiFilterVintage.631bce95.js";
const NewsCardLayout_vue_vue_type_style_index_0_scoped_4af3e049_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NewsCardLayout",
  props: {
    tag: { type: String, required: false, default: "section" },
    bgClass: { type: String, required: false, default: "" },
    opacity: { type: Boolean, required: true, default: true }
  },
  setup(__props, { expose }) {
    expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "news-card-layout" }, {
    default: withCtx(() => [
      createBaseVNode("div", {
        class: normalizeClass(["bg", [$props.bgClass, $props.opacity ? "opacity" : ""]])
      }, null, 2),
      createBaseVNode("header", null, [
        renderSlot(_ctx.$slots, "head", {}, void 0, true),
        renderSlot(_ctx.$slots, "title", {}, void 0, true)
      ]),
      renderSlot(_ctx.$slots, "main", {}, void 0, true),
      renderSlot(_ctx.$slots, "footer", {}, void 0, true)
    ]),
    _: 3
  });
}
_sfc_main$2.__file = "layouts/NewsCardLayout.vue";
const NewsCardLayout = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-4af3e049"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/layouts/NewsCardLayout.vue"]]);
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
_sfc_main$1.__file = "assets/icons/MdiFavorite.vue";
const MdiFavorite = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiFavorite.vue"]]);
const PwNewsCard_vue_vue_type_style_index_0_scoped_5e4764f4_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwNewsCard",
  props: {
    type: { type: null, required: true },
    title: { type: String, required: true },
    src: { type: String, required: false },
    text: { type: String, required: false },
    legend: { type: String, required: false },
    hero: { type: Object, required: false },
    categorie: { type: null, required: false },
    canCongratulate: { type: Boolean, required: false }
  },
  emits: ["congratulate"],
  setup(__props, { expose, emit }) {
    var _a;
    expose();
    const props = __props;
    const label = computed(() => {
      if (props.type === "Hero") {
        return `Hero`;
      } else if (props.type === "Submission") {
        return `Submission`;
      } else if (props.type === "Proposal") {
        return `Proposal`;
      }
    });
    const gradientCssClass = computed(() => {
      var _a2;
      if (props.type === "Hero") {
        return toGradientCSS(props.type);
      } else if (props.type === "Proposal") {
        return toGradientCSS("dark");
      } else {
        return toGradientCSS((_a2 = props.categorie) != null ? _a2 : "dark");
      }
    });
    const { src: avatarSrc } = useAvatar((_a = props.hero) == null ? void 0 : _a.email, 32);
    const __returned__ = { props, emit, label, gradientCssClass, avatarSrc, NewsCardLayout, PwCategorieChip, MdiFilterVintage, MdiFavorite, PwMedia };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "overflow-ellipsis" };
const _hoisted_2 = {
  key: 1,
  class: "description"
};
const _hoisted_3 = {
  key: 0,
  class: "row justify-between"
};
const _hoisted_4 = {
  key: 0,
  class: "row items-center"
};
const _hoisted_5 = ["src"];
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Kudos ");
const _hoisted_7 = {
  key: 1,
  class: "row justify-end"
};
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Like ");
const _hoisted_9 = {
  key: 2,
  class: "row justify-between items-center ensure-min-height"
};
const _hoisted_10 = { class: "text-secondary" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["NewsCardLayout"], {
    class: normalizeClass(["news-card", { "text-black": $props.type == "Hero" }]),
    bgClass: $setup.gradientCssClass,
    opacity: $props.type !== "Hero",
    tabindex: "0"
  }, {
    head: withCtx(() => [
      createBaseVNode("span", {
        class: normalizeClass({ "text-secondary": $props.type !== "Hero" })
      }, toDisplayString($setup.label), 3),
      createVNode($setup["PwCategorieChip"], {
        class: "self-end",
        categorie: $setup.props.categorie,
        style: { marginTop: "-4px" }
      }, null, 8, ["categorie"])
    ]),
    title: withCtx(() => [
      createBaseVNode("h2", _hoisted_1, toDisplayString($props.title), 1)
    ]),
    main: withCtx(() => [
      $props.src ? (openBlock(), createBlock($setup["PwMedia"], {
        key: 0,
        type: "image",
        class: "cover",
        src: $props.src,
        alt: ""
      }, null, 8, ["src"])) : $props.text ? (openBlock(), createElementBlock("pre", _hoisted_2, toDisplayString($props.text), 1)) : createCommentVNode("v-if", true)
    ]),
    footer: withCtx(() => [
      $props.type === "Hero" ? (openBlock(), createElementBlock("div", _hoisted_3, [
        $props.hero ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createBaseVNode("img", {
            class: "avatar",
            src: $setup.avatarSrc,
            alt: ""
          }, null, 8, _hoisted_5),
          createBaseVNode("span", null, toDisplayString($props.hero.name), 1)
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("button", {
          class: normalizeClass(["btn-tertiary row items-center h-only", { "activated": !$props.canCongratulate }]),
          onClick: [
            _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["prevent"])),
            _cache[1] || (_cache[1] = ($event) => $setup.emit("congratulate"))
          ]
        }, [
          createVNode($setup["MdiFilterVintage"], { class: "mr-10 x17" }),
          _hoisted_6
        ], 2)
      ])) : $props.type === "Proposal" ? (openBlock(), createElementBlock("div", _hoisted_7, [
        createBaseVNode("button", {
          class: "btn-tertiary row items-center h-only",
          onClick: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["prevent"]))
        }, [
          createVNode($setup["MdiFavorite"], { class: "mr-10 x17" }),
          _hoisted_8
        ])
      ])) : $props.type === "Submission" ? (openBlock(), createElementBlock("div", _hoisted_9, [
        createBaseVNode("span", _hoisted_10, toDisplayString($props.legend), 1)
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 1
  }, 8, ["class", "bgClass", "opacity"]);
}
_sfc_main.__file = "components/molecules/PwNewsCard.vue";
const PwNewsCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5e4764f4"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwNewsCard.vue"]]);
const heroErgozionImg = "/docs/stories/assets/hero-23-ergozion.8970158a.jpg";
const gradientsThemeImg = "/docs/stories/assets/gradients-2.c264afd0.jpg";
export {
  PwNewsCard as P,
  gradientsThemeImg as g,
  heroErgozionImg as h
};
