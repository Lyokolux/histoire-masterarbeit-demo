import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode, aI as normalizeStyle, aJ as createTextVNode } from "./vendor.e1f182eb.js";
import { M as MdiThumbUp } from "./MdiThumbUp.3608205f.js";
import { M as MdiCloudUpload } from "./MdiCloudUpload.d6afbe2e.js";
import { M as MdiFilterVintage } from "./MdiFilterVintage.631bce95.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Button.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { MdiThumbUp, MdiCloudUpload, MdiFilterVintage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "btn-primary" };
const _hoisted_2 = /* @__PURE__ */ createTextVNode(" Upload Submission ");
const _hoisted_3 = {
  class: "btn-primary",
  disabled: ""
};
const _hoisted_4 = /* @__PURE__ */ createTextVNode(" Upload Submission ");
const _hoisted_5 = { class: "btn-primary activated" };
const _hoisted_6 = /* @__PURE__ */ createTextVNode(" Upload Submission ");
const _hoisted_7 = { class: "btn-secondary" };
const _hoisted_8 = /* @__PURE__ */ createTextVNode(" Vote ");
const _hoisted_9 = {
  class: "btn-secondary",
  disabled: ""
};
const _hoisted_10 = /* @__PURE__ */ createTextVNode(" Vote ");
const _hoisted_11 = { class: "btn-secondary activated" };
const _hoisted_12 = /* @__PURE__ */ createTextVNode(" Vote ");
const _hoisted_13 = { class: "btn-tertiary" };
const _hoisted_14 = /* @__PURE__ */ createTextVNode(" Kudos ");
const _hoisted_15 = {
  class: "btn-tertiary",
  disabled: ""
};
const _hoisted_16 = /* @__PURE__ */ createTextVNode(" Kudos ");
const _hoisted_17 = { class: "btn-tertiary activated" };
const _hoisted_18 = /* @__PURE__ */ createTextVNode(" Kudos ");
const _hoisted_19 = /* @__PURE__ */ createTextVNode(" Upload Submission ");
const _hoisted_20 = {
  class: "btn-primary activated",
  disabled: ""
};
const _hoisted_21 = /* @__PURE__ */ createTextVNode(" Upload Submission ");
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Button",
    layout: { type: "grid", width: 350 }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Button primary" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_1, [
            createVNode($setup["MdiCloudUpload"], { class: "mr-sm" }),
            _hoisted_2
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button primary -- disabled" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_3, [
            createVNode($setup["MdiCloudUpload"], { class: "mr-sm" }),
            _hoisted_4
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button primary -- activated" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_5, [
            createVNode($setup["MdiCloudUpload"], { class: "mr-sm" }),
            _hoisted_6
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button secondary" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_7, [
            createVNode($setup["MdiThumbUp"], { class: "mr-sm" }),
            _hoisted_8
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button secondary -- disabled" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_9, [
            createVNode($setup["MdiThumbUp"], { class: "mr-sm" }),
            _hoisted_10
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button secondary -- activated" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_11, [
            createVNode($setup["MdiThumbUp"], { class: "mr-sm" }),
            _hoisted_12
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button tertiary" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_13, [
            createVNode($setup["MdiFilterVintage"], { class: "mr-sm" }),
            _hoisted_14
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button tertiary -- disabled" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_15, [
            createVNode($setup["MdiFilterVintage"], { class: "mr-sm" }),
            _hoisted_16
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button tertiary -- activated" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_17, [
            createVNode($setup["MdiFilterVintage"], { class: "mr-sm" }),
            _hoisted_18
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button primary - scale 1.5rem" }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-primary",
            style: normalizeStyle({ fontSize: "1.5rem" })
          }, [
            createVNode($setup["MdiCloudUpload"], { class: "mr-sm" }),
            _hoisted_19
          ], 4)
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Button primary - disabled and activated" }, {
        default: withCtx(() => [
          createBaseVNode("button", _hoisted_20, [
            createVNode($setup["MdiCloudUpload"], { class: "mr-sm" }),
            _hoisted_21
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/Button.story.vue";
const Button_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Button.story.vue"]]);
export {
  Button_story as default
};
