import { av as defineComponent, aV as useAttrs, az as openBlock, aK as createElementBlock, a$ as mergeProps, aT as withKeys, aB as createBaseVNode } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const useMediaUrl = (hash) => hash ? `/api/v1/media/${hash}` : void 0;
const toGradientCSS = (s) => `gradient-${s.replace(" ", "-").replace(/^\w|-\w/g, (c) => c.toLowerCase())}`;
const mediaToFilePreview = (media) => ({
  id: media.hash.toString(),
  slug: media.name,
  url: useMediaUrl(media.hash),
  status: "uploaded",
  file: {
    name: media.name,
    type: media.mimeType
  }
});
const toolToOption = (tool) => ({
  id: tool.id,
  label: tool.name
});
const optionToSimpleTool = (t) => ({
  name: t.label
});
const isImage = (mimeType) => mimeType.startsWith("image");
const PwMedia_vue_vue_type_style_index_0_scoped_a2f5338e_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwMedia",
  props: {
    type: { type: String, required: true },
    src: { type: String, required: true },
    blurhash: { type: String, required: false },
    displayOnly: { type: Boolean, required: false, default: false }
  },
  emits: ["select"],
  setup(__props, { expose, emit }) {
    expose();
    const attrs = useAttrs();
    const __returned__ = { emit, attrs, isImage };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src"];
const _hoisted_2 = ["controls"];
const _hoisted_3 = ["src", "type"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.isImage($props.type) ? (openBlock(), createElementBlock("img", mergeProps({
    key: 0,
    src: $props.src
  }, $setup.attrs, {
    alt: "",
    tabindex: "0",
    onKeypress: _cache[0] || (_cache[0] = withKeys(($event) => $setup.emit("select"), ["enter"]))
  }), null, 16, _hoisted_1)) : (openBlock(), createElementBlock("video", mergeProps({
    key: 1,
    controls: !$props.displayOnly
  }, $setup.attrs, { playsinline: "" }), [
    createBaseVNode("source", {
      src: $props.src,
      type: $props.type
    }, null, 8, _hoisted_3)
  ], 16, _hoisted_2));
}
_sfc_main.__file = "components/atoms/PwMedia.vue";
const PwMedia = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-a2f5338e"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwMedia.vue"]]);
export {
  PwMedia as P,
  toolToOption as a,
  mediaToFilePreview as m,
  optionToSimpleTool as o,
  toGradientCSS as t
};
