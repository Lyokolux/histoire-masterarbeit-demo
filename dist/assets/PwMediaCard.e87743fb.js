import { av as defineComponent, az as openBlock, aK as createElementBlock, aB as createBaseVNode, ax as createBlock, aS as createCommentVNode, aO as normalizeClass, aC as renderSlot } from "./vendor.e1f182eb.js";
import { u as useCategorieToGradient } from "./useCategorieToGradient.d7ebc894.js";
import { P as PwMedia } from "./PwMedia.82b20efc.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwMediaCard_vue_vue_type_style_index_0_scoped_46c7e17a_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwMediaCard",
  props: {
    src: { type: String, required: false },
    categorie: { type: null, required: false }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const battleGradient = useCategorieToGradient(props.categorie);
    const __returned__ = { props, battleGradient, PwMedia };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "media-card focusable",
  tabindex: "0"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    createBaseVNode("div", {
      class: normalizeClass(["cover", $setup.battleGradient.className])
    }, [
      $props.src ? (openBlock(), createBlock($setup["PwMedia"], {
        key: 0,
        type: "image",
        src: $props.src,
        alt: "",
        tabindex: "-1"
      }, null, 8, ["src"])) : createCommentVNode("v-if", true)
    ], 2),
    renderSlot(_ctx.$slots, "default", {
      hoverClass: "show-on-hover",
      visibleClass: "show-always"
    }, void 0, true)
  ]);
}
_sfc_main.__file = "components/atoms/PwMediaCard.vue";
const PwMediaCard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-46c7e17a"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwMediaCard.vue"]]);
export {
  PwMediaCard as P
};
