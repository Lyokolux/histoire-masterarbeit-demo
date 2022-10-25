import { av as defineComponent, b9 as da, az as openBlock, ax as createBlock } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwDatePicker_vue_vue_type_style_index_0_scoped_deb9c9b2_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwDatePicker",
  props: {
    date: { type: [Date, Array, null], required: false },
    range: { type: Boolean, required: false, default: false },
    multiCalendars: { type: Boolean, required: false, default: false },
    enableTimePicker: { type: Boolean, required: false, default: false },
    min: { type: Date, required: false }
  },
  emits: ["update:date"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const formatDate = (date) => date.toLocaleString("de", { month: "2-digit", day: "2-digit", year: "numeric" }).replace(",", " - ");
    const __returned__ = { props, emit, formatDate, DatePicker: da };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["DatePicker"], {
    class: "dp font-regular",
    "model-value": $props.date,
    autoApply: "",
    arrowNavigation: "",
    range: $props.range,
    multiCalendars: $props.multiCalendars,
    dark: true,
    enableTimePicker: $props.enableTimePicker,
    minDate: _ctx.minDate,
    format: $setup.formatDate,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:date", $event))
  }, null, 8, ["model-value", "range", "multiCalendars", "enableTimePicker", "minDate"]);
}
_sfc_main.__file = "components/molecules/PwDatePicker.vue";
const PwDatePicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-deb9c9b2"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwDatePicker.vue"]]);
export {
  PwDatePicker as P
};
