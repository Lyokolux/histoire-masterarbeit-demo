import { av as defineComponent, aV as useAttrs, aW as useSlots, aX as onMounted, aY as useEventListener, aU as ref, aZ as useFocusTrap, a_ as watchEffect, az as openBlock, aK as createElementBlock, aB as createBaseVNode, aC as renderSlot, aA as createVNode, aS as createCommentVNode, a$ as mergeProps, ax as createBlock, ay as withCtx, aJ as createTextVNode, aN as toDisplayString, aF as resolveDynamicComponent } from "./vendor.e1f182eb.js";
import { M as MdiClose } from "./MdiClose.8c1d5735.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwDialog_vue_vue_type_style_index_0_scoped_200217f3_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwDialog",
  props: {
    title: { type: String, required: false, default: void 0 },
    headingLevel: { type: Number, required: false, default: 1 },
    closeBtn: { type: Boolean, required: false, default: true },
    open: { type: Boolean, required: false, default: false }
  },
  emits: ["close", "click-primary"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const attrs = useAttrs();
    const slots = useSlots();
    onMounted(() => {
      useEventListener(window, "keydown", (e) => {
        if (props.open && e.key === "Escape") {
          emit("close");
        }
      });
    });
    const dialog = ref();
    onMounted(() => {
      const { activate, deactivate } = useFocusTrap(dialog, {});
      watchEffect(() => {
        if (props.open) {
          activate();
        } else {
          deactivate();
        }
      });
    });
    const __returned__ = { props, emit, attrs, slots, dialog, MdiClose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["aria-hidden", "open"];
const _hoisted_2 = {
  class: "row items-center w-100",
  style: { "gap": "0 10px" }
};
const _hoisted_3 = { class: "column w-100" };
const _hoisted_4 = { key: 0 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("dialog", mergeProps($setup.attrs, {
    class: ["dialog", { "open": $props.open }],
    ref: "dialog",
    "aria-hidden": !$props.open,
    open: $props.open
  }), [
    createBaseVNode("header", _hoisted_2, [
      renderSlot(_ctx.$slots, "heading", {}, () => [
        $props.title ? (openBlock(), createBlock(resolveDynamicComponent(`h${$props.headingLevel}`), {
          key: 0,
          class: "w-100"
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString($props.title), 1)
          ]),
          _: 1
        })) : createCommentVNode("v-if", true)
      ], true),
      renderSlot(_ctx.$slots, "actions", {}, void 0, true),
      $props.closeBtn ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "btn-secondary",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("close"))
      }, [
        createVNode($setup["MdiClose"], { class: "x20" })
      ])) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("section", _hoisted_3, [
      renderSlot(_ctx.$slots, "content", { class: "content" }, void 0, true)
    ]),
    $setup.slots.aside && !!$setup.slots.aside() ? (openBlock(), createElementBlock("section", _hoisted_4, [
      renderSlot(_ctx.$slots, "aside", {}, void 0, true)
    ])) : createCommentVNode("v-if", true)
  ], 16, _hoisted_1);
}
_sfc_main.__file = "components/atoms/PwDialog.vue";
const PwDialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-200217f3"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwDialog.vue"]]);
export {
  PwDialog as P
};
