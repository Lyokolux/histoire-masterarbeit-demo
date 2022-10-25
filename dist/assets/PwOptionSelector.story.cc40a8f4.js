import { av as defineComponent, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.bd202a0d.js";
import { a as CATEGORIE_OPTIONS } from "./categorie.a6b92ec9.js";
import { P as PwOptionSelector } from "./PwOptionSelector.b53a9d01.js";
import { P as PwCategorieChip } from "./PwCategorieChip.3bbd7066.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./PwInput.560e7f53.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwOptionSelector.story",
  setup(__props, { expose }) {
    expose();
    const selectedOption = ref();
    const __returned__ = { selectedOption, CATEGORIE_OPTIONS, PwOptionSelector, PwCategorieChip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Option Selector",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["PwOptionSelector"], {
            modelValue: $setup.selectedOption,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedOption = $event),
            options: $setup.CATEGORIE_OPTIONS,
            label: "Thema"
          }, null, 8, ["modelValue", "options"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Option slot with Categorie Chips" }, {
        default: withCtx(() => [
          createVNode($setup["PwOptionSelector"], {
            modelValue: $setup.selectedOption,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.selectedOption = $event),
            options: $setup.CATEGORIE_OPTIONS,
            label: "Thema"
          }, {
            option: withCtx(({ option, isSelected }) => [
              createVNode($setup["PwCategorieChip"], {
                categorie: option.label
              }, null, 8, ["categorie"])
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
_sfc_main.__file = "components/molecules/PwOptionSelector.story.vue";
const PwOptionSelector_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwOptionSelector.story.vue"]]);
export {
  PwOptionSelector_story as default
};
