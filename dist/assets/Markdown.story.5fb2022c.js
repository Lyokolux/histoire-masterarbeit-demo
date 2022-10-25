import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aK as createElementBlock, aL as renderList, aM as Fragment, aA as createVNode } from "./vendor.e1f182eb.js";
import { M as Markdown } from "./Markdown.b212a4a0.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const Markdown_story_vue_vue_type_style_index_0_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Markdown.story",
  setup(__props, { expose }) {
    expose();
    const VARIANTS = [
      { title: "Normal text", content: `Normal text` },
      { title: "Bold", content: `**Important text**` },
      { title: "Italic", content: `*Italic text*` },
      { title: "Bold Italic", content: `***Bold Italic text***` },
      {
        title: "Unordered list",
        content: `- Item 1
- Item 2
- Item 3`
      },
      {
        title: "Ordered list",
        content: `1. Item 1
2. Item 2
3. Item 3`
      },
      {
        title: "Parapgraphs",
        content: `Lorem Ipsum dolor si amet.
    

Lorem Ipsum dolor si amet.`
      },
      {
        title: "Bockquote",
        content: `>We're not designing pages, we're designing systems of components.
>
>-- <cite>Stephen Hay </cite>`
      },
      {
        title: "Code",
        content: `capitalize('hello world');`
      },
      {
        title: "Linkify",
        content: `https://ergosign.de
\u2B06\uFE0F clickable`
      },
      {
        title: "Link",
        content: `[Ergosign](https://ergosign.de "The best UX company")
\u2B06\uFE0F clickable`
      },
      {
        title: "Strikethrough",
        content: `~~Remove shit~~`
      },
      {
        title: "Typographer",
        content: `
<pre style="display: inline">(c)(C)</pre> \u2192 \xA9<br>
<pre style="display: inline">(tm) (TM)</pre> \u2192 \u2122<br>
<pre style="display: inline">(r) (R)</pre> \u2192 \xAE<br>
<pre style="display: inline">+-</pre> \u2192 \xB1<br>
<pre style="display: inline">...</pre> \u2192 \u2026 <br>
<pre style="display: inline">????????</pre> \u2192 ???<br>
<pre style="display: inline">!!!!!</pre> \u2192 !!!<br>
<pre style="display: inline">--</pre> \u2192 &ndash;<br>
<pre <pre style="display: inline">---</pre> \u2192 &mdash;<br>
  \u2192 Read [the file for more](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js)`
      },
      {
        title: "HTML FTW",
        content: `2<sup>2</sup><sub>2</sub>
<mark>mark</mark>
normal and <small>small</small>
<del>not relevant anymore</del> <ins>Inserted instead</ins>
<hr />`
      }
    ].concat([1, 2, 3, 4, 5, 6].map((x) => ({
      title: `Heading ${x}`,
      content: `${"#".repeat(x)} My Title ${x}`
    })));
    const __returned__ = { VARIANTS, Markdown };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Markdown",
    layout: { type: "grid", width: 400 }
  }, {
    default: withCtx(() => [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.VARIANTS, (variant) => {
        return openBlock(), createBlock(_component_Variant, {
          key: variant.title,
          title: variant.title
        }, {
          default: withCtx(() => [
            createVNode($setup["Markdown"], {
              content: variant.content
            }, null, 8, ["content"])
          ]),
          _: 2
        }, 1032, ["title"]);
      }), 128))
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/atoms/Markdown.story.vue";
const Markdown_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/Markdown.story.vue"]]);
export {
  Markdown_story as default
};
