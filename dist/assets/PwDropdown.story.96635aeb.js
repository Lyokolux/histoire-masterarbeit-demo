import { av as defineComponent, aU as ref, ba as useToggle, aG as computed, aX as onMounted, aY as useEventListener, b4 as vOnClickOutside, b5 as withDirectives, az as openBlock, ax as createBlock, ay as withCtx, aA as createVNode, aK as createElementBlock, aM as Fragment, aL as renderList, b1 as withModifiers, aT as withKeys, aC as renderSlot, b7 as Transition, aS as createCommentVNode, aO as normalizeClass, aJ as createTextVNode, aN as toDisplayString, aw as resolveComponent, aB as createBaseVNode } from "./vendor.bd202a0d.js";
import { P as PwInput } from "./PwInput.560e7f53.js";
import { M as MdiDone } from "./MdiDone.e7799f10.js";
import { F as FlyoutStateIcon } from "./FlyoutStateIcon.1fc09440.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwDropdown_vue_vue_type_style_index_0_scoped_ea62af1b_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwDropdown",
  props: {
    modelValue: { type: null, required: true },
    label: { type: String, required: true },
    options: { type: Object, required: true },
    emitId: { type: Boolean, required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const dropdownRef = ref();
    const [open, toggleOpen] = useToggle(false);
    const localModelValue = computed(() => {
      var _a;
      if (props.modelValue === void 0)
        return props.modelValue;
      else if (typeof props.modelValue === "object")
        return props.modelValue.label;
      else
        return (_a = props.options.find((o) => o.id === props.modelValue)) == null ? void 0 : _a.label;
    });
    const selectOption = (option) => {
      emit("update:modelValue", props.emitId ? option.id : option);
      toggleOpen(false);
    };
    onMounted(() => {
      useEventListener(document, "keydown", (ev) => {
        var _a;
        if (ev.key === "Escape" && open) {
          ev.preventDefault();
          toggleOpen(false);
          (_a = dropdownRef.value) == null ? void 0 : _a.input.blur();
        }
      });
    });
    const __returned__ = { props, emit, dropdownRef, open, toggleOpen, localModelValue, selectOption, vOnClickOutside, PwInput, MdiDone, FlyoutStateIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$1 = {
  key: 0,
  class: "options"
};
const _hoisted_2 = ["onClick", "onKeydown"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock($setup["PwInput"], {
    class: normalizeClass(["dropdown", { "focused": $setup.open }]),
    ref: "dropdownRef",
    readonly: "",
    autocomplete: "off",
    spellcheck: false,
    modelValue: $setup.localModelValue,
    label: $props.label,
    onFocus: _cache[1] || (_cache[1] = () => $setup.toggleOpen(true)),
    onKeypress: _cache[2] || (_cache[2] = withKeys(($event) => $setup.toggleOpen(false), ["escape"]))
  }, {
    after: withCtx(() => [
      createVNode($setup["FlyoutStateIcon"], { open: $setup.open }, null, 8, ["open"]),
      createVNode(Transition, { name: "page" }, {
        default: withCtx(() => [
          $setup.open ? (openBlock(), createElementBlock("ul", _hoisted_1$1, [
            $props.options.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($props.options, (option) => {
              return openBlock(), createElementBlock("li", {
                key: option.id,
                class: "flyout-item",
                tabindex: "0",
                onClick: withModifiers(($event) => $setup.selectOption(option), ["stop", "prevent"]),
                onKeydown: withKeys(($event) => $setup.selectOption(option), ["enter"]),
                onKeypress: _cache[0] || (_cache[0] = withKeys(($event) => $setup.toggleOpen(false), ["escape"]))
              }, [
                renderSlot(_ctx.$slots, "option", { option }, () => [
                  createTextVNode(toDisplayString(option.label), 1)
                ], true),
                createVNode(Transition, { name: "fade" }, {
                  default: withCtx(() => [
                    $setup.localModelValue === option.label ? (openBlock(), createBlock($setup["MdiDone"], {
                      key: 0,
                      style: { "color": "var(--es-blue)" }
                    })) : createCommentVNode("v-if", true)
                  ]),
                  _: 2
                }, 1024)
              ], 40, _hoisted_2);
            }), 128)) : createCommentVNode("v-if", true)
          ])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["modelValue", "class", "label"])), [
    [$setup["vOnClickOutside"], () => $setup.toggleOpen(false)]
  ]);
}
_sfc_main$1.__file = "components/molecules/PwDropdown.vue";
const PwDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-ea62af1b"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwDropdown.vue"]]);
const PwDropdown_story_vue_vue_type_style_index_0_scoped_79a54687_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwDropdown.story",
  setup(__props, { expose }) {
    expose();
    const selectedOption = ref({ id: -1, label: "" });
    const options = [
      { label: "1 Std" },
      { label: "2 Std" },
      { label: "3 Std" },
      { label: "4 Std" },
      { label: "5 Std" },
      { label: "6 Std" },
      { label: "7 Std" },
      { label: "8 Std" },
      { label: "9 Std" },
      { label: "10 Std" },
      { label: "11 Std" },
      { label: "12 Std" },
      { label: "13 Std" }
    ].map((x, i) => ({ ...x, id: i }));
    const __returned__ = { selectedOption, options, PwDropdown };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "storyStyle" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Dropdown" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["PwDropdown"], {
              modelValue: $setup.selectedOption,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedOption = $event),
              options: $setup.options,
              label: "Duration"
            }, null, 8, ["modelValue", "options"])
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/molecules/PwDropdown.story.vue";
const PwDropdown_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-79a54687"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwDropdown.story.vue"]]);
export {
  PwDropdown_story as default
};
