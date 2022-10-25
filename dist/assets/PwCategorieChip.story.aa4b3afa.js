import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.e1f182eb.js";
import { P as PwCategorieChip } from "./PwCategorieChip.42475d05.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCategorieChip.story",
  setup(__props, { expose }) {
    expose();
    const __returned__ = { PwCategorieChip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Categorie Chip",
    layout: { type: "grid", width: "200px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Pencil" }, {
        default: withCtx(() => [
          createVNode($setup["PwCategorieChip"], { categorie: "Pencil" })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "User Interface" }, {
        default: withCtx(() => [
          createVNode($setup["PwCategorieChip"], { categorie: "User Interface" })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "illustrations" }, {
        default: withCtx(() => [
          createVNode($setup["PwCategorieChip"], { categorie: "Illustrations" })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with custom label" }, {
        default: withCtx(() => [
          createVNode($setup["PwCategorieChip"], {
            label: "A great pixel label",
            categorie: "User Interface"
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/PwCategorieChip.story.vue";
const PwCategorieChip_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwCategorieChip.story.vue"]]);
export {
  PwCategorieChip_story as default
};
