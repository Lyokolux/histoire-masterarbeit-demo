import { av as defineComponent, az as openBlock, aK as createElementBlock, aB as createBaseVNode, aN as toDisplayString, aM as Fragment, aL as renderList, ax as createBlock, ay as withCtx, aS as createCommentVNode, aO as normalizeClass, b3 as __nuxt_component_0 } from "./vendor.bd202a0d.js";
import { M as MdiNorthEast } from "./MdiNorthEast.51563140.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwParticipationSummary_vue_vue_type_style_index_0_scoped_74e91ce0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwParticipationSummary",
  props: {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    tools: { type: Array, required: true },
    shrinkIcon: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose }) {
    expose();
    const onToolClick = (url) => {
      window.open(url != null ? url : "#", "_blank");
    };
    const __returned__ = { onToolClick, MdiNorthEast };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "participation-summary" };
const _hoisted_2 = { class: "text-l" };
const _hoisted_3 = {
  class: "row items-end",
  style: { "gap": "12px" }
};
const _hoisted_4 = ["src"];
const _hoisted_5 = {
  key: 1,
  class: "overflow-ellipsis"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h3", null, toDisplayString($props.title), 1),
    createBaseVNode("div", null, [
      createBaseVNode("p", _hoisted_2, toDisplayString($props.desc), 1)
    ]),
    createBaseVNode("div", _hoisted_3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.tools, (tool) => {
        var _a;
        return openBlock(), createBlock(_component_NuxtLink, {
          key: tool.name,
          class: normalizeClass(["chip tool", { "gap-s": $props.shrinkIcon, "link": tool.href }]),
          href: (_a = tool.href) != null ? _a : "#",
          onClick: ($event) => $setup.onToolClick(tool.href)
        }, {
          default: withCtx(() => [
            tool.icon ? (openBlock(), createElementBlock("img", {
              key: 0,
              src: tool.icon,
              alt: ""
            }, null, 8, _hoisted_4)) : createCommentVNode("v-if", true),
            !$props.shrinkIcon || !tool.iconHref ? (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(tool.name), 1)) : createCommentVNode("v-if", true),
            tool.href && !$props.shrinkIcon ? (openBlock(), createBlock($setup["MdiNorthEast"], {
              key: 2,
              color: "var(--es-blue)"
            })) : createCommentVNode("v-if", true)
          ]),
          _: 2
        }, 1032, ["class", "href", "onClick"]);
      }), 128))
    ])
  ]);
}
_sfc_main.__file = "components/atoms/PwParticipationSummary.vue";
const PwParticipationSummary = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-74e91ce0"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwParticipationSummary.vue"]]);
const photoshopLogo = "" + new URL("Adobe_Photoshop_CC_icon.4e8a5535.svg", import.meta.url).href;
export {
  PwParticipationSummary as P,
  photoshopLogo as p
};
