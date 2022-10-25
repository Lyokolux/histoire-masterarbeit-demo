import { av as defineComponent, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.bd202a0d.js";
import { P as PwComment } from "./PwComment.9be070a2.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./useAvatar.ece45c52.js";
const PwComment_story_vue_vue_type_style_index_0_scoped_39de3811_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwComment.story",
  setup(__props, { expose }) {
    expose();
    const author = { name: "Jite Waboh", email: "jitewaboh@lagify.com" };
    const multiline = `That gradient is awesome! Are those the Ergosign colors?

Where did you found those lovely illustrations?`;
    const references = [
      { label: "Shot 1", href: "#" },
      { label: "Shot 2", href: "#" },
      { label: "Shot 3", href: "#" }
    ];
    const __returned__ = { author, multiline, references, PwComment };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Comment",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Text comment" }, {
        default: withCtx(() => [
          createVNode($setup["PwComment"], {
            author: $setup.author,
            message: "You really spent so less time on those screens? \u{1F605}"
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Multiline text comment" }, {
        default: withCtx(() => [
          createVNode($setup["PwComment"], {
            author: $setup.author,
            message: $setup.multiline
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Text comment with a reference" }, {
        default: withCtx(() => [
          createVNode($setup["PwComment"], {
            author: $setup.author,
            message: "You really spent so less time on those screens? \u{1F605}",
            references: $setup.references.slice(0, 1)
          }, null, 8, ["references"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Text comment with references" }, {
        default: withCtx(() => [
          createVNode($setup["PwComment"], {
            author: $setup.author,
            message: "You really spent so less time on those screens? \u{1F605}",
            references: $setup.references
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "A reply" }, {
        default: withCtx(() => [
          createVNode($setup["PwComment"], {
            author: $setup.author,
            isReply: "",
            message: "You really spent so less time on those screens? \u{1F605}",
            references: $setup.references.slice(0, 1)
          }, null, 8, ["references"])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Editable" }, {
        default: withCtx(() => [
          createVNode($setup["PwComment"], {
            author: $setup.author,
            isEditable: "",
            message: "You really spent so less time on those screens? \u{1F605}",
            references: $setup.references.slice(0, 1)
          }, null, 8, ["references"])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/molecules/PwComment.story.vue";
const PwComment_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-39de3811"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwComment.story.vue"]]);
export {
  PwComment_story as default
};
