import { av as defineComponent, az as openBlock, aK as createElementBlock, aC as renderSlot, aB as createBaseVNode, aT as withKeys, aN as toDisplayString, aD as pushScopeId, aE as popScopeId, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, aA as createVNode } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwCheckbox_vue_vue_type_style_index_0_scoped_06f94344_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwCheckbox",
  props: {
    label: { type: String, required: false },
    id: { type: String, required: true },
    name: { type: String, required: false },
    modelValue: { type: [String, Number, Boolean, null], required: true }
  },
  emits: ["update:modelValue", "uncheck", "check"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const updateValue = () => {
      if (props.modelValue) {
        emit("uncheck", props.id);
      } else {
        emit("check", props.id);
      }
      emit("update:modelValue", props.modelValue === props.id ? "" : props.id);
    };
    const __returned__ = { props, emit, updateValue };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-06f94344"), n = n(), popScopeId(), n);
const _hoisted_1 = ["for"];
const _hoisted_2 = ["id", "name", "value", "data-checked"];
const _hoisted_3 = ["onKeyup"];
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  class: "icon",
  viewBox: "0 0 24 24",
  "aria-hidden": "true"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    class: "truthy",
    fill: "none",
    d: "M3.73,11.91 9.1,17.28 20.00,4.59"
  })
], -1));
const _hoisted_5 = [
  _hoisted_4
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock("label", {
    class: "pw-field row items-center",
    for: $props.id
  }, [
    renderSlot(_ctx.$slots, "before", {}, void 0, true),
    createBaseVNode("input", {
      type: "checkbox",
      id: $props.id,
      name: (_a = $props.name) != null ? _a : $props.id,
      value: $props.id,
      "data-checked": $props.modelValue === $props.id ? "" : void 0,
      onChange: $setup.updateValue
    }, null, 40, _hoisted_2),
    createBaseVNode("div", {
      class: "checkbox",
      tabindex: "0",
      onKeyup: [
        withKeys($setup.updateValue, ["enter"]),
        withKeys($setup.updateValue, ["space"])
      ]
    }, _hoisted_5, 40, _hoisted_3),
    createBaseVNode("div", null, toDisplayString($props.label), 1),
    renderSlot(_ctx.$slots, "after", {}, void 0, true)
  ], 8, _hoisted_1);
}
_sfc_main$1.__file = "components/atoms/PwCheckbox.vue";
const PwCheckbox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-06f94344"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwCheckbox.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCheckbox.story",
  setup(__props, { expose }) {
    expose();
    const modelValue = ref(true);
    const __returned__ = { modelValue, PwCheckbox };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Checkbox",
    layout: { type: "grid", width: "200px" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createVNode($setup["PwCheckbox"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
            id: "option1",
            label: "Option"
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Size 0.6" }, {
        default: withCtx(() => [
          createVNode($setup["PwCheckbox"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.modelValue = $event),
            id: "option1",
            label: "Option",
            style: { "--size": "0.6" }
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Size 1.5" }, {
        default: withCtx(() => [
          createVNode($setup["PwCheckbox"], {
            modelValue: $setup.modelValue,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.modelValue = $event),
            id: "option1",
            label: "Option",
            style: { "--size": "1.5" }
          }, null, 8, ["modelValue"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/PwCheckbox.story.vue";
const PwCheckbox_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwCheckbox.story.vue"]]);
export {
  PwCheckbox_story as default
};
