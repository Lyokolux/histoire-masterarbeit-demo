import { av as defineComponent, aG as computed, az as openBlock, aK as createElementBlock, aM as Fragment, aL as renderList, aB as createBaseVNode, aC as renderSlot, aO as normalizeClass, aT as withKeys, aJ as createTextVNode, aN as toDisplayString } from "./vendor.e1f182eb.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwToggleSwitch_vue_vue_type_style_index_0_scoped_018ed96a_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwToggleSwitch",
  props: {
    modelValue: { type: [Object, String, Number, null], required: false },
    options: { type: Array, required: true }
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
    const __returned__ = { props, emit, localModelValue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "toggle-switch row" };
const _hoisted_2 = ["for", "onClick", "onKeypress"];
const _hoisted_3 = ["id", "value", "name"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.options, (option, index) => {
      return openBlock(), createElementBlock("li", { key: index }, [
        createBaseVNode("label", {
          for: `${option.id}-${option.label}`,
          class: normalizeClass(["pointer text-center", { "selected bold": $setup.localModelValue === option.id }]),
          tabindex: "0",
          onClick: ($event) => $setup.emit("update:modelValue", option),
          onKeypress: withKeys(($event) => $setup.emit("update:modelValue", option), ["enter"])
        }, [
          createBaseVNode("input", {
            id: `${option.id}-${option.label}`,
            value: option.id,
            name: option.label,
            type: "radio"
          }, null, 8, _hoisted_3),
          renderSlot(_ctx.$slots, "option", { option }, () => [
            createTextVNode(toDisplayString(option.label), 1)
          ], true)
        ], 42, _hoisted_2)
      ]);
    }), 128))
  ]);
}
_sfc_main.__file = "components/atoms/PwToggleSwitch.vue";
const PwToggleSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-018ed96a"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwToggleSwitch.vue"]]);
export {
  PwToggleSwitch as P
};
