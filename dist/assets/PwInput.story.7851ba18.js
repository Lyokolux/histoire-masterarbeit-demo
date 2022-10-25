import { av as defineComponent, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.e1f182eb.js";
import { P as PwInput } from "./PwInput.1d31d636.js";
import { M as MdiCollections } from "./MdiCollections.78c0d760.js";
import { M as MdiNotifications } from "./MdiNotifications.84b54055.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwInput_story_vue_vue_type_style_index_0_scoped_ae6c1770_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwInput.story",
  setup(__props, { expose }) {
    expose();
    const input = ref("");
    const __returned__ = { input, PwInput, MdiCollections, MdiNotifications };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Input",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "basic" }, {
        default: withCtx(() => [
          createVNode($setup["PwInput"], {
            modelValue: $setup.input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.input = $event),
            label: "Login"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with before and after content" }, {
        default: withCtx(() => [
          createVNode($setup["PwInput"], {
            modelValue: $setup.input,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.input = $event),
            label: "Login"
          }, {
            before: withCtx(() => [
              createVNode($setup["MdiCollections"], { class: "mr-md" })
            ]),
            after: withCtx(() => [
              createVNode($setup["MdiNotifications"], { class: "ml-md" })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/atoms/PwInput.story.vue";
const PwInput_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ae6c1770"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwInput.story.vue"]]);
export {
  PwInput_story as default
};
