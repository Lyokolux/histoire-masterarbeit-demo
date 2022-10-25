import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, b8 as hstEvent, az as openBlock, aA as createVNode } from "./vendor.bd202a0d.js";
import { P as PwCommentInput } from "./PwCommentInput.fbd7b4b4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./PwInput.560e7f53.js";
import "./useAvatar.ece45c52.js";
import "./PwLoader.3b91ee92.js";
const PwCommentInput_story_vue_vue_type_style_index_0_scoped_392ba142_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCommentInput.story",
  setup(__props, { expose }) {
    expose();
    const user = { name: "Jite Waboh", email: "jitewaboh@lagify.com" };
    const __returned__ = { user, PwCommentInput, hstEvent };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Comment Input",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "default comment input" }, {
        default: withCtx(() => [
          createVNode($setup["PwCommentInput"], {
            user: $setup.user,
            message: "You really spent so less time on those screens? \u{1F605}",
            onSend: _cache[0] || (_cache[0] = ($event) => $setup.hstEvent("send", $event))
          })
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/molecules/PwCommentInput.story.vue";
const PwCommentInput_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-392ba142"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwCommentInput.story.vue"]]);
export {
  PwCommentInput_story as default
};
