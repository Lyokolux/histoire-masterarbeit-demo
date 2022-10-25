import { av as defineComponent, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode } from "./vendor.bd202a0d.js";
import { P as PwLinkInput } from "./PwLinkInput.0bc7c491.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./PwInput.560e7f53.js";
import "./MdiNorthEast.51563140.js";
import "./MdiClose.5111c6c9.js";
const PwLinkInput_story_vue_vue_type_style_index_0_scoped_6c5153b8_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwLinkInput.story",
  setup(__props, { expose }) {
    expose();
    const linkFixtures = [
      { icon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico", label: "Low-Poly Iceberg by Runar Finanger on Dribbble", href: "https://dribbble.com/shots/887818-Low-Poly-Iceberg" },
      { icon: "", label: "Iconify", href: "https://iconify.design/" },
      { icon: "https://stackoverflow.com/favicon.ico", label: "Stack Overflow - Where Developers Learn, Share, & Build Careers", href: "https://stackoverflow.com/" }
    ];
    const input = ref("");
    const links = ref([]);
    const input2 = ref("");
    const links2 = ref([...linkFixtures]);
    const onRemove = (id) => links2.value.splice(id, 1);
    const resetLinks = () => links2.value = [...linkFixtures];
    const __returned__ = { linkFixtures, input, links, input2, links2, onRemove, resetLinks, PwLinkInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Link input",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["PwLinkInput"], {
            modelValue: $setup.input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.input = $event),
            label: "Links und Quellen",
            links: $setup.links
          }, null, 8, ["modelValue", "links"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, {
        title: `${$setup.links2.length} Links`
      }, {
        controls: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-secondary",
            onClick: $setup.resetLinks
          }, "Reset")
        ]),
        default: withCtx(() => [
          createVNode($setup["PwLinkInput"], {
            modelValue: $setup.input2,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.input2 = $event),
            label: "Links und Quellen",
            links: $setup.links2,
            onRemove: $setup.onRemove
          }, null, 8, ["modelValue", "links"])
        ]),
        _: 1
      }, 8, ["title"])
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/molecules/PwLinkInput.story.vue";
const PwLinkInput_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6c5153b8"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwLinkInput.story.vue"]]);
export {
  PwLinkInput_story as default
};
