import { av as defineComponent, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode, aF as resolveDynamicComponent, aJ as createTextVNode, aN as toDisplayString } from "./vendor.e1f182eb.js";
import { P as PwToggleSwitch } from "./PwToggleSwitch.c5e84f8b.js";
import { E as ENTITY_TYPES } from "./entityOptions.bfbd57be.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./MdiPalette.f8b8d90f.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwToggleSwitch.story",
  setup(__props, { expose }) {
    expose();
    const selectedOption = ref();
    const __returned__ = { selectedOption, PwToggleSwitch, ENTITY_TYPES };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "row justify-center items-center",
  style: { "padding": "10px 20px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Toggle Switch",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["PwToggleSwitch"], {
            modelValue: $setup.selectedOption,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedOption = $event),
            options: $setup.ENTITY_TYPES,
            label: "Duration"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with custom item" }, {
        default: withCtx(() => [
          createVNode($setup["PwToggleSwitch"], {
            modelValue: $setup.selectedOption,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedOption = $event),
            options: $setup.ENTITY_TYPES,
            label: "Duration"
          }, {
            option: withCtx(({ option }) => [
              createBaseVNode("div", _hoisted_1, [
                (openBlock(), createBlock(resolveDynamicComponent(option.icon), { class: "mr-sm" })),
                createTextVNode(" " + toDisplayString(option.label), 1)
              ])
            ]),
            _: 1
          }, 8, ["modelValue", "options"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/atoms/PwToggleSwitch.story.vue";
const PwToggleSwitch_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwToggleSwitch.story.vue"]]);
export {
  PwToggleSwitch_story as default
};
