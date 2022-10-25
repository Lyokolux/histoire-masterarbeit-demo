import { av as defineComponent, b0 as useCssVars, aU as ref, aG as computed, aX as onMounted, aY as useEventListener, a_ as watchEffect, b4 as vOnClickOutside, b5 as withDirectives, az as openBlock, ax as createBlock, ay as withCtx, aA as createVNode, aB as createBaseVNode, aK as createElementBlock, aL as renderList, aC as renderSlot, aM as Fragment, aO as normalizeClass, b6 as vShow, b7 as Transition, aT as withKeys, aS as createCommentVNode, aH as unref, aN as toDisplayString, aJ as createTextVNode } from "./vendor.bd202a0d.js";
import { P as PwInput } from "./PwInput.560e7f53.js";
import { M as MdiDone } from "./MdiDone.e7799f10.js";
import { F as FlyoutStateIcon } from "./FlyoutStateIcon.1fc09440.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwCombobox_vue_vue_type_style_index_0_scoped_dca1114f_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCombobox",
  props: {
    modelValue: { type: Array, required: true },
    label: { type: String, required: true },
    options: { type: Array, required: true },
    canCreateNewOptionWithLabel: { type: String, required: false }
  },
  emits: ["update:modelValue", "new-option", "delete-new-option"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    useCssVars((_ctx) => ({
      "dca1114f-optimizedOptionHeight": unref(optimizedOptionHeight)
    }));
    const comboboxRef = ref();
    const inputValue = ref("");
    const isFocused = ref(false);
    const hideSuggestions = () => isFocused.value = false;
    const optionsRef = ref();
    const isCreatingNewTool = ref(false);
    const MAX_HEIGHT = 300;
    const optimizedOptionHeight = computed(() => {
      if (typeof window === "undefined" || !optionsRef.value)
        return;
      const spaceBelow = Math.abs(window.innerHeight - optionsRef.value.getBoundingClientRect().bottom);
      return `${Math.min(spaceBelow - 40, MAX_HEIGHT)}px`;
    });
    const filteredOptions = computed(() => {
      const iv = inputValue.value.trim().toLowerCase();
      if (inputValue.value) {
        return props.options.filter(({ label }) => label.toLowerCase().includes(iv));
      } else {
        return props.options;
      }
    });
    const onSelectionUpdate = (option) => {
      let newValue = [...props.modelValue];
      const isPresentAtIndex = props.modelValue.findIndex(({ id }) => id === option.id);
      if (isPresentAtIndex !== -1) {
        newValue.splice(isPresentAtIndex, 1);
      } else {
        newValue.push(option);
      }
      emit("update:modelValue", newValue);
    };
    onMounted(() => {
      useEventListener(document, "keydown", (ev) => {
        var _a;
        if (ev.key === "Escape" && isFocused.value === true) {
          ev.preventDefault();
          hideSuggestions();
          (_a = comboboxRef.value) == null ? void 0 : _a.input.blur();
        }
      });
    });
    watchEffect(() => {
      var _a;
      if (!isFocused.value) {
        inputValue.value = "";
        isCreatingNewTool.value = false;
        (_a = comboboxRef.value) == null ? void 0 : _a.input.blur();
      }
    });
    const createOptionLabel = computed(() => `${props.canCreateNewOptionWithLabel} ${inputValue.value}`);
    const onNewToolCreation = () => {
      isCreatingNewTool.value = !isCreatingNewTool.value;
      if (isCreatingNewTool.value) {
        emit("new-option", inputValue.value);
        isFocused.value = false;
      } else {
        emit("delete-new-option", inputValue.value);
      }
    };
    const __returned__ = { props, emit, comboboxRef, inputValue, isFocused, hideSuggestions, optionsRef, isCreatingNewTool, MAX_HEIGHT, optimizedOptionHeight, filteredOptions, onSelectionUpdate, createOptionLabel, onNewToolCreation, vOnClickOutside, PwInput, MdiDone, FlyoutStateIcon };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "pw-chip" };
const _hoisted_2 = {
  class: "options",
  ref: "optionsRef"
};
const _hoisted_3 = ["onKeypress", "onClick"];
const _hoisted_4 = ["onKeypress"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return withDirectives((openBlock(), createBlock($setup["PwInput"], {
    modelValue: $setup.inputValue,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.inputValue = $event),
    ref: "comboboxRef",
    class: normalizeClass(["combobox", $setup.isFocused ? "focused" : ""]),
    inputClass: "input-unfocus",
    label: $props.label,
    autocomplete: "off",
    spellcheck: false,
    labelStickLeft: "",
    forceFocus: $props.modelValue.length > 0,
    onFocus: _cache[1] || (_cache[1] = ($event) => $setup.isFocused = true)
  }, {
    after: withCtx(() => [
      createVNode($setup["FlyoutStateIcon"], {
        class: "state-icon",
        open: $setup.isFocused
      }, null, 8, ["open"]),
      createVNode(Transition, {
        name: "fade",
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("ul", {
            class: normalizeClass([{ "hidden": $setup.isFocused }, "row wrap stick"]),
            style: { "padding": "0.3em 0", "gap": "0.3em" }
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($props.modelValue, (option) => {
              return openBlock(), createElementBlock("li", {
                key: option.label
              }, [
                renderSlot(_ctx.$slots, "selected-option", { option }, () => [
                  createBaseVNode("span", _hoisted_1, toDisplayString(option.label), 1)
                ], true)
              ]);
            }), 128))
          ], 2), [
            [vShow, !$setup.isFocused]
          ])
        ]),
        _: 3
      }),
      createVNode(Transition, {
        name: "page",
        persisted: ""
      }, {
        default: withCtx(() => [
          withDirectives(createBaseVNode("ul", _hoisted_2, [
            $setup.filteredOptions.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($setup.filteredOptions, (option) => {
              return openBlock(), createElementBlock("li", {
                key: option.label,
                class: "row items-center",
                tabindex: "0",
                onKeypress: withKeys(($event) => $setup.onSelectionUpdate(option), ["enter"]),
                onClick: ($event) => $setup.onSelectionUpdate(option)
              }, [
                renderSlot(_ctx.$slots, "option", { option }, () => [
                  createTextVNode(toDisplayString(option.label), 1)
                ], true),
                createVNode(Transition, { name: "fade" }, {
                  default: withCtx(() => [
                    $setup.props.modelValue.find(({ id }) => id === option.id) ? (openBlock(), createBlock($setup["MdiDone"], {
                      key: 0,
                      style: { "color": "var(--es-blue)" }
                    })) : createCommentVNode("v-if", true)
                  ]),
                  _: 2
                }, 1024)
              ], 40, _hoisted_3);
            }), 128)) : $props.canCreateNewOptionWithLabel ? (openBlock(), createElementBlock("li", {
              key: 1,
              class: "row items-center",
              tabindex: "0",
              onKeypress: withKeys($setup.onNewToolCreation, ["enter"]),
              onClick: $setup.onNewToolCreation
            }, [
              renderSlot(_ctx.$slots, "option-creation", { label: $setup.createOptionLabel }, () => [
                createTextVNode(toDisplayString($setup.createOptionLabel), 1)
              ], true),
              createVNode(Transition, { name: "fade" }, {
                default: withCtx(() => [
                  $setup.isCreatingNewTool ? (openBlock(), createBlock($setup["MdiDone"], { key: 0 })) : createCommentVNode("v-if", true)
                ]),
                _: 1
              })
            ], 40, _hoisted_4)) : createCommentVNode("v-if", true)
          ], 512), [
            [vShow, $setup.isFocused]
          ])
        ]),
        _: 3
      })
    ]),
    _: 3
  }, 8, ["modelValue", "class", "label", "forceFocus"])), [
    [$setup["vOnClickOutside"], $setup.hideSuggestions]
  ]);
}
_sfc_main.__file = "components/molecules/PwCombobox.vue";
const PwCombobox = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dca1114f"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwCombobox.vue"]]);
export {
  PwCombobox as P
};
