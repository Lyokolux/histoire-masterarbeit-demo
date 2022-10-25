import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode, aJ as createTextVNode } from "./vendor.e1f182eb.js";
import { M as MdiCloudUpload } from "./MdiCloudUpload.d6afbe2e.js";
import { M as MdiNorthEast } from "./MdiNorthEast.139521af.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Link.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { MdiCloudUpload, MdiNorthEast };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = /* @__PURE__ */ createBaseVNode("a", { class: "link row items-center" }, " Webguide ", -1);
const _hoisted_2 = { class: "link" };
const _hoisted_3 = /* @__PURE__ */ createTextVNode(" Upload Submission ");
const _hoisted_4 = { class: "link" };
const _hoisted_5 = /* @__PURE__ */ createTextVNode(" Upload Submission ");
const _hoisted_6 = { class: "link" };
const _hoisted_7 = /* @__PURE__ */ createTextVNode(" Upload Submission ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Link",
    layout: { type: "grid", width: 350 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Link" }, {
        default: withCtx(() => [
          _hoisted_1
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Link with icon" }, {
        default: withCtx(() => [
          createBaseVNode("a", _hoisted_2, [
            createVNode($setup["MdiCloudUpload"], { class: "mr-sm" }),
            _hoisted_3
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Link external" }, {
        default: withCtx(() => [
          createBaseVNode("a", _hoisted_4, [
            createVNode($setup["MdiCloudUpload"], { class: "mr-sm" }),
            _hoisted_5,
            createVNode($setup["MdiNorthEast"], { color: "var(--es-blue)" })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Link external with icon " }, {
        default: withCtx(() => [
          createBaseVNode("a", _hoisted_6, [
            createVNode($setup["MdiCloudUpload"], { class: "mr-sm" }),
            _hoisted_7,
            createVNode($setup["MdiNorthEast"], { color: "var(--es-blue)" })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/Link.story.vue";
const Link_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Link.story.vue"]]);
export {
  Link_story as default
};
