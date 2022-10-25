import { av as defineComponent, aG as computed, az as openBlock, ax as createBlock, ay as withCtx, aB as createBaseVNode, aK as createElementBlock, aL as renderList, aO as normalizeClass, aT as withKeys, aC as renderSlot, aM as Fragment, aJ as createTextVNode, aN as toDisplayString } from "./vendor.e1f182eb.js";
import { P as PwInput } from "./PwInput.1d31d636.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwOptionSelector_vue_vue_type_style_index_0_scoped_28616f5d_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwOptionSelector",
  props: {
    label: { type: String, required: true },
    options: { type: Array, required: true },
    modelValue: { type: null, required: true },
    emitId: { type: Boolean, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const localModelValue = computed(() => {
      var _a;
      if (props.modelValue === void 0)
        return props.modelValue;
      else if (typeof props.modelValue === "object")
        return props.modelValue.id;
      else
        return (_a = props.options.find((o) => o.id === props.modelValue)) == null ? void 0 : _a.id;
    });
    const __returned__ = { props, emit, localModelValue, PwInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "row wrap",
  style: { "grid-row": "2/3", "gap": "12px" }
};
const _hoisted_2 = ["onClick", "onKeypress"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createBlock($setup["PwInput"], {
    "model-value": (_a = $setup.localModelValue) == null ? void 0 : _a.toString(),
    type: "hidden",
    label: $props.label
  }, {
    after: withCtx(() => [
      createBaseVNode("ul", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option) => {
          return openBlock(), createElementBlock("li", {
            tabindex: "0",
            class: normalizeClass(["pointer", { "selected": option.id === $setup.localModelValue }]),
            onClick: ($event) => $setup.emit("update:modelValue", $setup.props.emitId ? option.id : option),
            onKeypress: withKeys(($event) => $setup.emit("update:modelValue", option), ["enter"])
          }, [
            renderSlot(_ctx.$slots, "option", {
              option,
              isSelected: option.id === $setup.localModelValue
            }, () => [
              createTextVNode(toDisplayString(option.label), 1)
            ], true)
          ], 42, _hoisted_2);
        }), 256))
      ])
    ]),
    _: 3
  }, 8, ["model-value", "label"]);
}
_sfc_main.__file = "components/molecules/PwOptionSelector.vue";
const PwOptionSelector = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-28616f5d"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwOptionSelector.vue"]]);
export {
  PwOptionSelector as P
};
