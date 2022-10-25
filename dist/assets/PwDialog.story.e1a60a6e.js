import { av as defineComponent, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode, aB as createBaseVNode, aD as pushScopeId, aE as popScopeId } from "./vendor.bd202a0d.js";
import { P as PwDialog } from "./PwDialog.dabdcc8f.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./MdiClose.5111c6c9.js";
const PwDialog_story_vue_vue_type_style_index_0_scoped_49537d6d_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwDialog.story",
  setup(__props, { expose }) {
    expose();
    const showDialog = ref(true);
    const __returned__ = { showDialog, PwDialog };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-49537d6d"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "placeholder" }, " Content ", -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "placeholder" }, " Action 1 ", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "placeholder" }, " Action 2 ", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "placeholder" }, " Content ", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "placeholder" }, " Content ", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "placeholder" }, " Aside ", -1));
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Dialog" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-primary",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.showDialog = !$setup.showDialog)
          }, "Toggle dialog"),
          createVNode($setup["PwDialog"], {
            class: "bounds",
            title: "My Dialog",
            open: $setup.showDialog,
            onClose: _cache[1] || (_cache[1] = ($event) => $setup.showDialog = false)
          }, {
            content: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
          }, 8, ["open"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "with actions" }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-primary",
            onClick: _cache[2] || (_cache[2] = ($event) => $setup.showDialog = !$setup.showDialog)
          }, "Toggle dialog"),
          createVNode($setup["PwDialog"], {
            class: "bounds",
            title: "My Dialog",
            open: $setup.showDialog,
            onClose: _cache[3] || (_cache[3] = ($event) => $setup.showDialog = false)
          }, {
            actions: withCtx(() => [
              _hoisted_2,
              _hoisted_3
            ]),
            content: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
          }, 8, ["open"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "placeholders aside content" }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-primary",
            onClick: _cache[4] || (_cache[4] = ($event) => $setup.showDialog = !$setup.showDialog)
          }, "Toggle dialog"),
          createVNode($setup["PwDialog"], {
            class: "bounds",
            title: "My Dialog",
            open: $setup.showDialog,
            onClose: _cache[5] || (_cache[5] = ($event) => $setup.showDialog = false)
          }, {
            content: withCtx(() => [
              _hoisted_5
            ]),
            aside: withCtx(() => [
              _hoisted_6
            ]),
            _: 1
          }, 8, ["open"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/PwDialog.story.vue";
const PwDialog_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-49537d6d"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwDialog.story.vue"]]);
export {
  PwDialog_story as default
};
