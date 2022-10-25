import { az as openBlock, aK as createElementBlock, aB as createBaseVNode, av as defineComponent, ax as createBlock, ay as withCtx, aN as toDisplayString, aM as Fragment, aL as renderList, aA as createVNode, aJ as createTextVNode, aS as createCommentVNode, aO as normalizeClass, aF as resolveDynamicComponent, b3 as __nuxt_component_0 } from "./vendor.bd202a0d.js";
import { u as useAvatar } from "./useAvatar.ece45c52.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$3 = {};
const _hoisted_1$3 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$3,
  _hoisted_3$2
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$2);
}
_sfc_main$3.__file = "assets/icons/MdiReply.vue";
const MdiReply = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiReply.vue"]]);
const _sfc_main$2 = {};
const _hoisted_1$2 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$2,
  _hoisted_3$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
}
_sfc_main$2.__file = "assets/icons/MdiOpenInNew.vue";
const MdiOpenInNew = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiOpenInNew.vue"]]);
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
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
}
_sfc_main$1.__file = "assets/icons/MdiEdit.vue";
const MdiEdit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiEdit.vue"]]);
const PwComment_vue_vue_type_style_index_0_scoped_246c3cb0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwComment",
  props: {
    author: { type: Object, required: true },
    message: { type: String, required: true },
    isEditable: { type: Boolean, required: false },
    isReply: { type: Boolean, required: false },
    references: { type: Array, required: false },
    tag: { type: String, required: false, default: "div" }
  },
  emits: ["reply", "edit"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const { src } = useAvatar(props.author.email, 40);
    const __returned__ = { props, emit, src, MdiReply, MdiOpenInNew, MdiEdit };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src", "alt"];
const _hoisted_2 = {
  key: 0,
  class: "references row wrap"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    class: normalizeClass(["comment hover", { "row-gap": $props.references }]),
    tabindex: "0"
  }, {
    default: withCtx(() => [
      createBaseVNode("img", {
        class: "avatar",
        src: $setup.src,
        alt: $props.author.name
      }, null, 8, _hoisted_1),
      createBaseVNode("pre", null, toDisplayString($props.message), 1),
      $props.references ? (openBlock(), createElementBlock("ul", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.references, (reference) => {
          return openBlock(), createElementBlock("li", {
            key: reference.label
          }, [
            createVNode(_component_NuxtLink, {
              to: reference.href,
              class: "link chip",
              tabindex: "0",
              style: { "margin": "2px" }
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(reference.label) + " ", 1),
                createVNode($setup["MdiOpenInNew"], {
                  class: "x15",
                  color: "var(--es-blue)"
                })
              ]),
              _: 2
            }, 1032, ["to"])
          ]);
        }), 128))
      ])) : createCommentVNode("v-if", true),
      $props.isEditable ? (openBlock(), createElementBlock("button", {
        key: 1,
        class: "btn-secondary reply",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("edit"))
      }, [
        createVNode($setup["MdiEdit"], { class: "x20" })
      ])) : createCommentVNode("v-if", true),
      !$props.isReply ? (openBlock(), createElementBlock("button", {
        key: 2,
        class: "btn-secondary reply",
        onClick: _cache[1] || (_cache[1] = ($event) => $setup.emit("reply"))
      }, [
        createVNode($setup["MdiReply"], { class: "x20" })
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 1
  }, 8, ["class"]);
}
_sfc_main.__file = "components/molecules/PwComment.vue";
const PwComment = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-246c3cb0"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwComment.vue"]]);
export {
  PwComment as P
};
