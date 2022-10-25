import { av as defineComponent, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.bd202a0d.js";
import { P as PwDatePicker } from "./PwDatePicker.39343b5a.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwDatePicker.story",
  setup(__props, { expose }) {
    expose();
    const date = ref(new Date());
    const doubleDate = ref([]);
    const __returned__ = { date, doubleDate, PwDatePicker };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Date Picker",
    layout: { type: "grid", width: "100%" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic with predefined date" }, {
        default: withCtx(() => [
          createVNode($setup["PwDatePicker"], {
            date: $setup.date,
            "onUpdate:date": _cache[0] || (_cache[0] = ($event) => $setup.date = $event)
          }, null, 8, ["date"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Battle date range" }, {
        default: withCtx(() => [
          createVNode($setup["PwDatePicker"], {
            date: $setup.doubleDate,
            "onUpdate:date": _cache[1] || (_cache[1] = ($event) => $setup.doubleDate = $event),
            range: "",
            multiCalendars: ""
          }, null, 8, ["date"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/molecules/PwDatePicker.story.vue";
const PwDatePicker_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwDatePicker.story.vue"]]);
export {
  PwDatePicker_story as default
};
