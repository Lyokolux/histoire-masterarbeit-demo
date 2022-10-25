import { av as defineComponent, aU as ref, aw as resolveComponent, ax as createBlock, ay as withCtx, az as openBlock, aA as createVNode } from "./vendor.bd202a0d.js";
import { P as PwCommentSection } from "./PwCommentSection.cae59b50.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import "./PwComment.9be070a2.js";
import "./useAvatar.ece45c52.js";
import "./PwCommentInput.fbd7b4b4.js";
import "./PwInput.560e7f53.js";
import "./PwLoader.3b91ee92.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCommentSection.story",
  setup(__props, { expose }) {
    expose();
    const author = { name: "Jite Waboh", email: "jitewaboh@lagify.com" };
    const FAKE_COMMENTS = [
      { author, message: "Nice try! \u{1F60A}" },
      {
        author,
        message: "Wow, you got my voice! \u{1F44D}",
        isReply: true
      },
      {
        author,
        message: `That gradient is awesome! Are those the Ergosign colors?

Where did you found those lovely illustrations?`,
        references: [{ label: "Shot 1", href: "#" }]
      },
      {
        author,
        message: "Wow, you really spent so less time on those screens? \u{1F605}"
      }
    ].map((x, i) => ({ id: Math.random() * 1e6, ...x }));
    const comments = ref(FAKE_COMMENTS);
    const onPost = (payload) => {
      comments.value.push({
        id: Math.random() * 1e6,
        author,
        message: payload.message
      });
    };
    const onReply = (payload) => {
      const { message, replyTo } = payload;
      const atCommentIndex = comments.value.findIndex(({ id }) => id === replyTo);
      const atRepliesEnd = comments.value.findIndex(({ isReply }, index) => index > atCommentIndex && !isReply);
      const atIndex = atRepliesEnd === -1 ? comments.value.length : Math.max(atCommentIndex, atRepliesEnd);
      comments.value.splice(atIndex, 0, {
        id: Math.random() * 1e6,
        author,
        message,
        isReply: true
      });
    };
    const __returned__ = { author, FAKE_COMMENTS, comments, onPost, onReply, PwCommentSection };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Comment Section" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, {
        title: "example",
        style: "padding: 1rem;"
      }, {
        default: withCtx(() => [
          createVNode($setup["PwCommentSection"], {
            title: "Comments",
            user: $setup.author,
            comments: $setup.comments,
            style: { "padding": "1rem" },
            onSend: $setup.onPost,
            onReply: $setup.onReply
          }, null, 8, ["comments"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/organisms/PwCommentSection.story.vue";
const PwCommentSection_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwCommentSection.story.vue"]]);
export {
  PwCommentSection_story as default
};
