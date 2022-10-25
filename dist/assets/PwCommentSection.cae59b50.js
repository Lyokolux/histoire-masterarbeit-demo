import { av as defineComponent, aU as ref, be as watch, az as openBlock, aK as createElementBlock, aA as createVNode, ay as withCtx, aM as Fragment, aL as renderList, aO as normalizeClass, ax as createBlock, a$ as mergeProps, aS as createCommentVNode, bl as TransitionGroup, aB as createBaseVNode } from "./vendor.bd202a0d.js";
import { P as PwComment } from "./PwComment.9be070a2.js";
import { P as PwCommentInput } from "./PwCommentInput.fbd7b4b4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwCommentSection_vue_vue_type_style_index_0_scoped_7af2adb4_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCommentSection",
  props: {
    user: { type: null, required: true },
    comments: { type: Array, required: true },
    inputLabel: { type: String, required: false }
  },
  emits: ["send", "reply", "edit"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const isReplyingTo = ref(void 0);
    watch(props.comments, () => isReplyingTo.value = void 0);
    const isEditing = ref(void 0);
    watch(props.comments, () => isEditing.value = void 0);
    const __returned__ = { props, emit, isReplyingTo, isEditing, PwComment, PwCommentInput };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "column",
  style: { gap: "10px 0" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", _hoisted_1, [
    createVNode(TransitionGroup, { name: "smooth-appearance" }, {
      default: withCtx(() => [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.comments, (comment) => {
          return openBlock(), createElementBlock("li", {
            key: comment.id,
            class: normalizeClass(["column", { "reply": comment.isReply }]),
            style: { gap: "10px" }
          }, [
            $setup.isEditing !== comment.id ? (openBlock(), createBlock($setup["PwComment"], mergeProps({ key: 0 }, comment, {
              references: [],
              onReply: ($event) => $setup.isReplyingTo = comment.id,
              isEditable: comment.author.email === $props.user.email,
              onEdit: ($event) => {
                $setup.isEditing = comment.id;
                $setup.isReplyingTo = void 0;
              }
            }), null, 16, ["onReply", "isEditable", "onEdit"])) : (openBlock(), createBlock($setup["PwCommentInput"], {
              key: 1,
              user: $props.user,
              message: comment.message,
              label: "Edit",
              onSend: ($event) => {
                $setup.emit("edit", { ...$event, editOn: comment.id });
                $setup.isEditing = void 0;
              }
            }, null, 8, ["user", "message", "onSend"])),
            $setup.isReplyingTo === comment.id ? (openBlock(), createBlock($setup["PwCommentInput"], {
              key: 2,
              class: "reply",
              user: $props.user,
              label: `Reply`,
              onSend: ($event) => {
                $setup.emit("reply", { ...$event, replyTo: comment.id });
                $setup.isReplyingTo = void 0;
              }
            }, null, 8, ["user", "onSend"])) : createCommentVNode("v-if", true)
          ], 2);
        }), 128))
      ]),
      _: 1
    }),
    createBaseVNode("li", null, [
      createVNode($setup["PwCommentInput"], {
        user: $props.user,
        label: $props.inputLabel,
        onSend: _cache[0] || (_cache[0] = ($event) => $setup.emit("send", $event))
      }, null, 8, ["user", "label"])
    ])
  ]);
}
_sfc_main.__file = "components/organisms/PwCommentSection.vue";
const PwCommentSection = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-7af2adb4"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwCommentSection.vue"]]);
export {
  PwCommentSection as P
};
