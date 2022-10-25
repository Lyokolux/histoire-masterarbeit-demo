import { av as defineComponent, aG as computed, az as openBlock, aK as createElementBlock, aC as renderSlot, aO as normalizeClass, aA as createVNode, aI as normalizeStyle, aS as createCommentVNode, aJ as createTextVNode, aD as pushScopeId, aE as popScopeId, aB as createBaseVNode } from "./vendor.e1f182eb.js";
import { M as MdiCloudUpload } from "./MdiCloudUpload.d6afbe2e.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwFileDropzoneContent_vue_vue_type_style_index_0_scoped_46a17218_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwFileDropzoneContent",
  props: {
    shortPreview: { type: Boolean, required: false, default: false }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const iconRatio = computed(() => props.shortPreview ? "2.5em" : "5em");
    const __returned__ = { props, iconRatio, MdiCloudUpload };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-46a17218"), n = n(), popScopeId(), n);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = /* @__PURE__ */ createTextVNode("Drag and Drop ");
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("br", null, null, -1));
const _hoisted_4 = /* @__PURE__ */ createTextVNode("or browse.");
const _hoisted_5 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4
];
const _hoisted_6 = { key: 1 };
const _hoisted_7 = {
  key: 2,
  class: "text-secondary"
};
const _hoisted_8 = {
  key: 3,
  class: "text-secondary"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["dropzone-content pointer column justify-center items-center", { "short": $props.shortPreview }])
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createVNode($setup["MdiCloudUpload"], {
        style: normalizeStyle(`--ratio: ${$setup.iconRatio};`)
      }, null, 8, ["style"]),
      $props.shortPreview ? (openBlock(), createElementBlock("span", _hoisted_1, _hoisted_5)) : createCommentVNode("v-if", true),
      !$props.shortPreview ? (openBlock(), createElementBlock("span", _hoisted_6, "Drag and Drop your files or browse to upload them.")) : createCommentVNode("v-if", true),
      !$props.shortPreview ? (openBlock(), createElementBlock("span", _hoisted_7, "Your upload will look best with 4:3 ratio and a minimum resolution of 1600px in width.")) : createCommentVNode("v-if", true),
      !$props.shortPreview ? (openBlock(), createElementBlock("span", _hoisted_8, "\xA0Upload graphics as PNG, JPG or GIF and videos as MP4.")) : createCommentVNode("v-if", true)
    ], true)
  ], 2);
}
_sfc_main.__file = "components/atoms/PwFileDropzoneContent.vue";
const PwFileDropzoneContent = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-46a17218"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwFileDropzoneContent.vue"]]);
export {
  PwFileDropzoneContent as P
};
