import { av as defineComponent, aU as ref, b2 as reactive, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode, aN as toDisplayString, aS as createCommentVNode, b3 as __nuxt_component_0 } from "./vendor.bd202a0d.js";
import { P as PwCombobox } from "./PwCombobox.dafe7de9.js";
import { M as MdiNorthEast } from "./MdiNorthEast.51563140.js";
import { a as antetypeLogo } from "./Antetype_logo.6ab25a61.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./PwInput.560e7f53.js";
import "./MdiDone.e7799f10.js";
import "./FlyoutStateIcon.1fc09440.js";
const PwCombobox_story_vue_vue_type_style_index_0_scoped_e0233244_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCombobox.story",
  setup(__props, { expose }) {
    expose();
    const modelValue = ref([]);
    const toolOptions = reactive([
      { label: "Adobe After Effects" },
      { label: "Adobe InDesign" },
      { label: "Adobe Photoshop" },
      { label: "Adobe Illustrator" },
      { label: "Adobe Premiere" },
      { label: "Adobe XD" },
      { label: "Affinity Designer" },
      { label: "Affinity Photo" },
      { label: "Affinity Publisher" },
      { label: "Antetype" },
      { label: "Figma" },
      { label: "Framer" },
      { label: "inVision" },
      { label: "Keynote" },
      { label: "Pixel Imator" },
      { label: "Principle" },
      { label: "Procreate" },
      { label: "Sketch" },
      { label: "Vectornator" },
      { label: "Blender" },
      { label: "Cinema 4D" },
      { label: "Houdini" },
      { label: "Pen & Paper" }
    ].map((x, i) => ({ id: i, iconSrc: antetypeLogo, href: "#", ...x })));
    const onNewOption = (optionName) => {
      const newOption = { id: toolOptions.length, label: optionName };
      modelValue.value.push(newOption);
      toolOptions.push({ id: toolOptions.length, label: newOption, href: void 0 });
    };
    const __returned__ = { modelValue, toolOptions, onNewOption, PwCombobox, MdiNorthEast };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "storyStyle" };
const _hoisted_2 = { class: "storyStyle" };
const _hoisted_3 = { class: "storyStyle" };
const _hoisted_4 = ["src"];
const _hoisted_5 = { class: "storyStyle" };
const _hoisted_6 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_NuxtLink = __nuxt_component_0;
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Combobox" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["PwCombobox"], {
              modelValue: $setup.modelValue,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
              options: $setup.toolOptions,
              label: "Select the tool(s)"
            }, null, 8, ["modelValue", "options"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "can create option" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["PwCombobox"], {
              modelValue: $setup.modelValue,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.modelValue = $event),
              options: $setup.toolOptions,
              label: "Select the tool(s)",
              canCreateNewOptionWithLabel: "Register a new tool: ",
              onNewOption: $setup.onNewOption
            }, null, 8, ["modelValue", "options"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "custom selected options" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["PwCombobox"], {
              modelValue: $setup.modelValue,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.modelValue = $event),
              options: $setup.toolOptions,
              label: "Select the tool(s)",
              canCreateNewOptionWithLabel: "Register a new tool: ",
              onNewOption: $setup.onNewOption
            }, {
              "selected-option": withCtx(({ option }) => [
                createVNode(_component_NuxtLink, {
                  href: option.href,
                  class: "chip tool",
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      src: option.iconSrc,
                      alt: ""
                    }, null, 8, _hoisted_4),
                    createBaseVNode("span", null, toDisplayString(option.label), 1),
                    option.href ? (openBlock(), createBlock($setup["MdiNorthEast"], {
                      key: 0,
                      style: { "--ratio": "1em", "color": "var(--es-blue)" }
                    })) : createCommentVNode("v-if", true)
                  ]),
                  _: 2
                }, 1032, ["href"])
              ]),
              _: 1
            }, 8, ["modelValue", "options"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "custom selected options" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createVNode($setup["PwCombobox"], {
              modelValue: $setup.modelValue,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $setup.modelValue = $event),
              options: $setup.toolOptions,
              label: "Select the tool(s)",
              canCreateNewOptionWithLabel: "Register a new tool: ",
              onNewOption: $setup.onNewOption
            }, {
              option: withCtx(({ option }) => [
                createVNode(_component_NuxtLink, {
                  href: option.href,
                  class: "chip tool",
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    createBaseVNode("img", {
                      src: option.iconSrc,
                      alt: ""
                    }, null, 8, _hoisted_6),
                    createBaseVNode("span", null, toDisplayString(option.label), 1),
                    option.href ? (openBlock(), createBlock($setup["MdiNorthEast"], {
                      key: 0,
                      style: { "--ratio": "1em", "color": "var(--es-blue)" }
                    })) : createCommentVNode("v-if", true)
                  ]),
                  _: 2
                }, 1032, ["href"])
              ]),
              _: 1
            }, 8, ["modelValue", "options"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/molecules/PwCombobox.story.vue";
const PwCombobox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e0233244"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwCombobox.story.vue"]]);
export {
  PwCombobox_story as default
};
