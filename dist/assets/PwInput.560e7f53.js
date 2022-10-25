import { av as defineComponent, b0 as useCssVars, aV as useAttrs, aU as ref, aG as computed, a_ as watchEffect, az as openBlock, aK as createElementBlock, aC as renderSlot, aB as createBaseVNode, a$ as mergeProps, aN as toDisplayString, aO as normalizeClass, b1 as withModifiers, aH as unref } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwInput_vue_vue_type_style_index_0_scoped_fab56a74_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwInput",
  props: {
    type: { type: null, required: false, default: "text" },
    label: { type: String, required: false },
    modelValue: { type: [String, null], required: false },
    gap: { type: Boolean, required: false },
    labelStickLeft: { type: Boolean, required: false, default: false },
    forceFocus: { type: Boolean, required: false, default: false },
    inputClass: { type: String, required: false, default: "" },
    autocomplete: { type: null, required: false, default: "on" },
    spellcheck: { type: null, required: false, default: true }
  },
  emits: ["update:modelValue", "paste", "focus", "blur"],
  setup(__props, { expose, emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "fab56a74-colGap": unref(colGap)
    }));
    const attrs = useAttrs();
    const id = Math.round(Math.random() * 10 ** 10).toString();
    const input = ref();
    const focus = ref(false);
    const colGap = computed(() => props.gap ? "10px" : "0");
    watchEffect(() => {
      var _a;
      if (input.value) {
        input.value.value = (_a = props.modelValue) != null ? _a : "";
      }
    });
    const onChange = (payload) => {
      emit("update:modelValue", payload.target.value);
    };
    const onBlur = () => {
      focus.value = false;
      emit("blur");
    };
    const onFocus = () => {
      focus.value = true;
      emit("focus");
    };
    expose({
      input
    });
    const __returned__ = { props, emit, attrs, id, input, focus, colGap, onChange, onBlur, onFocus };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["for"];
const _hoisted_2 = ["value", "placeholder", "type", "autocomplete", "id"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock("label", {
    class: normalizeClass(["pw-input items-center focusable", { "focused": $setup.focus, "label-stick-left": $props.labelStickLeft }]),
    for: $setup.id,
    tabindex: "-1",
    onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $setup.input.focus(), ["stop"]))
  }, [
    renderSlot(_ctx.$slots, "before", {}, void 0, true),
    createBaseVNode("input", mergeProps({ ref: "input" }, { ...$setup.attrs, class: void 0 }, {
      class: `no-focus ${$props.inputClass} ${$props.forceFocus ? "force-focus" : ""}`,
      value: $props.modelValue,
      onFocus: $setup.onFocus,
      onBlur: $setup.onBlur,
      onInput: $setup.onChange,
      onPaste: _cache[0] || (_cache[0] = ($event) => $setup.emit("paste", $event)),
      placeholder: (_a = $setup.attrs["placeholder"]) != null ? _a : " ",
      type: $props.type,
      autocomplete: $props.autocomplete,
      id: $setup.id
    }), null, 16, _hoisted_2),
    createBaseVNode("span", null, toDisplayString($props.label), 1),
    renderSlot(_ctx.$slots, "after", {}, void 0, true)
  ], 10, _hoisted_1);
}
_sfc_main.__file = "components/atoms/PwInput.vue";
const PwInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-fab56a74"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwInput.vue"]]);
export {
  PwInput as P
};
