import { aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const CornerRibbon_story_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {};
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("div", { class: "box" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "corner-ribbon" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "gradient-user-interface h2 uppercase" }, "Voting")
  ])
], -1);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("div", { class: "box2" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "corner-ribbon" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "gradient-user-interface h2 uppercase" }, "Voting")
  ])
], -1);
function _sfc_render(_ctx, _cache) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Corner Ribbon Voting - small",
    layout: { type: "grid", width: 350 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Voting" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Corner Ribbon Voting - big" }, {
        default: withCtx(() => [
          _hoisted_2
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/CornerRibbon.story.vue";
const CornerRibbon_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/CornerRibbon.story.vue"]]);
export {
  CornerRibbon_story as default
};
