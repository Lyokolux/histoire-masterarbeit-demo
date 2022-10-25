import { av as defineComponent, aP as md, az as openBlock, ax as createBlock, aF as resolveDynamicComponent } from "./vendor.bd202a0d.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Markdown",
  props: {
    content: { type: String, required: true },
    tag: { type: String, required: false, default: "p" }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const config = {
      breaks: true,
      html: true,
      linkify: true,
      typographer: true
    };
    const renderer = md(config);
    const __returned__ = { props, config, renderer };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), {
    innerHTML: $setup.renderer.render($props.content)
  }, null, 8, ["innerHTML"]);
}
_sfc_main.__file = "components/atoms/Markdown.vue";
const Markdown = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Markdown.vue"]]);
export {
  Markdown as M
};
