import { av as defineComponent, aU as ref, a_ as watchEffect, az as openBlock, ax as createBlock, ay as withCtx, aA as createVNode, aB as createBaseVNode, aN as toDisplayString, aO as normalizeClass, ba as useToggle, aw as resolveComponent } from "./vendor.bd202a0d.js";
import { u as useFocusMode } from "./useFocusMode.95fd331d.js";
import { P as PwDialog } from "./PwDialog.dabdcc8f.js";
import { P as PwCategorieChip } from "./PwCategorieChip.3bbd7066.js";
import { P as PwMediaCarousel } from "./PwMediaCarousel.34453d47.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { f as firstMediaSrc, s as secondMediaSrc, t as thirdMediaSrc } from "./gradients-3.e3c9186d.js";
import "./MdiClose.5111c6c9.js";
import "./PwMedia.4355971d.js";
const PwBattleDetailDialog_vue_vue_type_style_index_0_scoped_e15740d7_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwBattleDetailDialog",
  props: {
    open: { type: Boolean, required: true },
    categorie: { type: null, required: true },
    name: { type: String, required: true },
    media: { type: Array, required: true },
    selectOnOpen: { type: Number, required: false, default: void 0 }
  },
  emits: ["update:open"],
  setup(__props, { expose, emit }) {
    var _a;
    expose();
    const props = __props;
    const selected = ref((_a = props.selectOnOpen) != null ? _a : 0);
    watchEffect(() => selected.value = props.selectOnOpen);
    const { isFocusModeActivated, toggleFocusMode } = useFocusMode();
    const __returned__ = { props, emit, selected, isFocusModeActivated, toggleFocusMode, PwDialog, PwCategorieChip, PwMediaCarousel };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mr-auto" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["PwDialog"], {
    class: "container",
    open: $props.open,
    onClose: _cache[1] || (_cache[1] = ($event) => $setup.emit("update:open", false)),
    style: { "--padding": "24px" }
  }, {
    heading: withCtx(() => [
      createVNode($setup["PwCategorieChip"], { categorie: $props.categorie }, null, 8, ["categorie"]),
      createBaseVNode("h3", _hoisted_1, toDisplayString($props.name), 1)
    ]),
    content: withCtx(() => [
      createVNode($setup["PwMediaCarousel"], {
        class: normalizeClass(["carousel", { "focus-mode": $setup.isFocusModeActivated }]),
        selected: $props.selectOnOpen,
        "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $props.selectOnOpen = $event),
        media: $props.media,
        onFocus: $setup.toggleFocusMode
      }, null, 8, ["class", "selected", "media", "onFocus"])
    ]),
    _: 1
  }, 8, ["open"]);
}
_sfc_main$1.__file = "components/organisms/PwBattleDetailDialog.vue";
const PwBattleDetailDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-e15740d7"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwBattleDetailDialog.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwBattleDetailDialog.story",
  setup(__props, { expose }) {
    expose();
    const [showDialog, toggleDialog] = useToggle(true);
    const srcs = [
      { src: firstMediaSrc, blurhash: "" },
      { src: secondMediaSrc, blurhash: "" },
      { src: thirdMediaSrc, blurhash: "" }
    ];
    const __returned__ = { showDialog, toggleDialog, srcs, PwBattleDetailDialog };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Battle Detail Dialog" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-primary",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.toggleDialog(!$setup.showDialog))
          }, "Toggle dialog"),
          createVNode($setup["PwBattleDetailDialog"], {
            open: $setup.showDialog,
            "onUpdate:open": _cache[1] || (_cache[1] = ($event) => $setup.showDialog = $event),
            selectOnOpen: 1,
            categorie: "User Interface",
            name: "Gradients",
            images: $setup.srcs
          }, null, 8, ["open"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/organisms/PwBattleDetailDialog.story.vue";
const PwBattleDetailDialog_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwBattleDetailDialog.story.vue"]]);
export {
  PwBattleDetailDialog_story as default
};
