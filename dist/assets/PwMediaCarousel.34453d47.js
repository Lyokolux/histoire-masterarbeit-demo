import { av as defineComponent, az as openBlock, aK as createElementBlock, aM as Fragment, aL as renderList, ax as createBlock, a$ as mergeProps, aT as withKeys, aB as createBaseVNode, aA as createVNode } from "./vendor.bd202a0d.js";
import { P as PwMedia } from "./PwMedia.4355971d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwMediaCarousel_vue_vue_type_style_index_0_scoped_654c0d6d_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwMediaCarousel",
  props: {
    media: { type: Array, required: true },
    selected: { type: Number, required: false }
  },
  emits: ["update:selected", "focus"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const __returned__ = { props, emit, PwMedia };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "media-container",
  tabindex: "-1"
};
const _hoisted_2 = { class: "media-list" };
const _hoisted_3 = ["onKeypress", "onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.media, (item, index) => {
      return openBlock(), createBlock($setup["PwMedia"], mergeProps({
        key: item.src,
        class: "media-main",
        tabindex: index === $props.selected ? 0 : -1
      }, item, {
        class: { "selected": index === $props.selected },
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("focus")),
        onKeypress: _cache[1] || (_cache[1] = withKeys(($event) => $setup.emit("focus"), ["enter"]))
      }), null, 16, ["tabindex", "class"]);
    }), 128)),
    createBaseVNode("ul", _hoisted_2, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.media, (item, index) => {
        return openBlock(), createElementBlock("li", {
          key: item.src,
          tabindex: "0",
          onKeypress: withKeys(($event) => $setup.emit("update:selected", index), ["enter"]),
          onClick: ($event) => $setup.emit("update:selected", index)
        }, [
          createVNode($setup["PwMedia"], mergeProps({
            class: ["media-item", { "selected": index === $props.selected }],
            displayOnly: "",
            tabindex: "-1"
          }, item), null, 16, ["class"])
        ], 40, _hoisted_3);
      }), 128))
    ])
  ]);
}
_sfc_main.__file = "components/molecules/PwMediaCarousel.vue";
const PwMediaCarousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-654c0d6d"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwMediaCarousel.vue"]]);
export {
  PwMediaCarousel as P
};
