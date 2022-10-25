import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aK as createElementBlock, aL as renderList, aM as Fragment, aA as createVNode, aB as createBaseVNode, aN as toDisplayString, aF as resolveDynamicComponent, aJ as createTextVNode } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Typography.story",
  setup(__props, { expose }) {
    expose();
    const heading = "Lorem Ipsum Dolor Si Amet";
    const p = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
incididunt ut labore et dolore magna aliqua. Lectus sit amet est placerat in egestas erat imperdiet sed. Lorem
dolor sed viverra ipsum nunc aliquet. Volutpat maecenas volutpat blandit aliquam. Laoreet sit amet cursus sit.`;
    const __returned__ = { heading, p };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Typography",
    layout: { type: "grid", width: 600 }
  }, {
    default: withCtx(() => [
      (openBlock(), createElementBlock(Fragment, null, renderList(6, (h) => {
        return createVNode(_component_Variant, {
          title: `Heading ${h}`
        }, {
          default: withCtx(() => [
            (openBlock(), createBlock(resolveDynamicComponent(`h${h}`), null, {
              default: withCtx(() => [
                createTextVNode(toDisplayString($setup.heading))
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1032, ["title"]);
      }), 64)),
      createVNode(_component_Variant, { title: "Headline" }, {
        default: withCtx(() => [
          createBaseVNode("h1", { class: "headline" }, toDisplayString($setup.heading))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Text" }, {
        default: withCtx(() => [
          createBaseVNode("p", null, toDisplayString($setup.p))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Text Large" }, {
        default: withCtx(() => [
          createBaseVNode("p", { class: "text-l" }, toDisplayString($setup.p))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Text Extra Large" }, {
        default: withCtx(() => [
          createBaseVNode("p", { class: "text-xl" }, toDisplayString($setup.p))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Text Ellipsis" }, {
        default: withCtx(() => [
          createBaseVNode("p", { class: "overflow-ellipsis" }, toDisplayString($setup.p))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Bold" }, {
        default: withCtx(() => [
          createBaseVNode("p", { class: "bold" }, toDisplayString($setup.p))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Regular" }, {
        default: withCtx(() => [
          createBaseVNode("p", null, toDisplayString($setup.p))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Light" }, {
        default: withCtx(() => [
          createBaseVNode("p", { class: "font-light" }, toDisplayString($setup.p))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Secondary" }, {
        default: withCtx(() => [
          createBaseVNode("p", { class: "text-secondary" }, toDisplayString($setup.p))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Center" }, {
        default: withCtx(() => [
          createBaseVNode("p", { class: "text-center" }, toDisplayString($setup.heading))
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Center" }, {
        default: withCtx(() => [
          createBaseVNode("p", { class: "text-center" }, toDisplayString($setup.heading))
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/Typography.story.vue";
const Typography_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Typography.story.vue"]]);
export {
  Typography_story as default
};
