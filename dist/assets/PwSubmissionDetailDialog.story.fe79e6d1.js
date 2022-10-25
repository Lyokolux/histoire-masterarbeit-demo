import { av as defineComponent, az as openBlock, ax as createBlock, ay as withCtx, aB as createBaseVNode, aN as toDisplayString, aC as renderSlot, aA as createVNode, aS as createCommentVNode, aO as normalizeClass, ba as useToggle, aw as resolveComponent } from "./vendor.bd202a0d.js";
import { u as useFocusMode } from "./useFocusMode.95fd331d.js";
import { P as PwDialog } from "./PwDialog.dabdcc8f.js";
import { P as PwMediaCarousel } from "./PwMediaCarousel.34453d47.js";
import { P as PwCommentSection } from "./PwCommentSection.cae59b50.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { f as firstMediaSrc, s as secondMediaSrc, t as thirdMediaSrc } from "./gradients-3.e3c9186d.js";
import "./MdiClose.5111c6c9.js";
import "./PwMedia.4355971d.js";
import "./PwComment.9be070a2.js";
import "./useAvatar.ece45c52.js";
import "./PwCommentInput.fbd7b4b4.js";
import "./PwInput.560e7f53.js";
import "./PwLoader.3b91ee92.js";
const PwSubmissionDetailDialog_vue_vue_type_style_index_0_scoped_670bd52d_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwSubmissionDetailDialog",
  props: {
    open: { type: Boolean, required: true },
    name: { type: String, required: true },
    media: { type: Array, required: true },
    mediaFocus: { type: Number, required: false, default: 0 },
    comments: { type: Array, required: true },
    user: { type: null, required: true }
  },
  emits: ["update:open", "update:mediaFocus", "send", "reply", "edit"],
  setup(__props, { expose, emit }) {
    expose();
    const { isFocusModeActivated, toggleFocusMode } = useFocusMode();
    const __returned__ = { emit, isFocusModeActivated, toggleFocusMode, PwDialog, PwMediaCarousel, PwCommentSection };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "mr-auto" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["PwDialog"], {
    class: normalizeClass(["submission-dialog", { "focus-mode": $setup.isFocusModeActivated }]),
    open: $props.open,
    onClose: _cache[4] || (_cache[4] = ($event) => $setup.emit("update:open", false)),
    style: { "--padding": "24px" }
  }, {
    heading: withCtx(() => [
      createBaseVNode("h3", _hoisted_1, toDisplayString($props.name), 1),
      renderSlot(_ctx.$slots, "actions", {}, void 0, true)
    ]),
    content: withCtx(() => [
      createVNode($setup["PwMediaCarousel"], {
        class: "carousel",
        selected: $props.mediaFocus,
        media: $props.media,
        "onUpdate:selected": _cache[0] || (_cache[0] = ($event) => $setup.emit("update:mediaFocus", $event)),
        onFocus: $setup.toggleFocusMode
      }, null, 8, ["selected", "media", "onFocus"])
    ]),
    aside: withCtx(() => [
      !$setup.isFocusModeActivated ? (openBlock(), createBlock($setup["PwCommentSection"], {
        key: 0,
        user: $props.user,
        comments: $props.comments,
        inputLabel: "Comment this asset...",
        "hide-ref": "",
        onSend: _cache[1] || (_cache[1] = ($event) => $setup.emit("send", $event)),
        onReply: _cache[2] || (_cache[2] = ($event) => $setup.emit("reply", $event)),
        onEdit: _cache[3] || (_cache[3] = ($event) => $setup.emit("edit", $event))
      }, null, 8, ["user", "comments", "inputLabel"])) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["class", "open"]);
}
_sfc_main$1.__file = "components/organisms/PwSubmissionDetailDialog.vue";
const PwSubmissionDetailDialog = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-670bd52d"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwSubmissionDetailDialog.vue"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwSubmissionDetailDialog.story",
  setup(__props, { expose }) {
    expose();
    const [showDialog, toggleDialog] = useToggle(true);
    const srcs = [
      { type: "images/", src: firstMediaSrc, blurhash: "" },
      { type: "images/", src: secondMediaSrc, blurhash: "" },
      { type: "images/", src: thirdMediaSrc, blurhash: "" }
    ];
    const author = { name: "Jite Waboh", email: "jitewaboh@lagify.com" };
    const comments = [
      { author, message: "Nice try! \u{1F60A}" },
      {
        author,
        message: `That gradient is awesome! Are those the Ergosign colors?

Where did you found those lovely illustrations?`,
        references: [{ label: "Shot 1", href: "#" }]
      },
      {
        author,
        message: "Wow, you got my voice! \u{1F44D}"
      },
      {
        author,
        message: "Wow, you really spent so less time on those screens? \u{1F605}"
      }
    ].map((x, i) => ({ id: i, ...x }));
    const __returned__ = { showDialog, toggleDialog, srcs, author, comments, PwSubmissionDetailDialog };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Submission Detail Dialog" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-primary",
            onClick: _cache[0] || (_cache[0] = ($event) => $setup.toggleDialog(!$setup.showDialog))
          }, "Toggle dialog"),
          createVNode($setup["PwSubmissionDetailDialog"], {
            open: $setup.showDialog,
            "onUpdate:open": _cache[1] || (_cache[1] = ($event) => $setup.showDialog = $event),
            selectOnOpen: 1,
            name: "Gradients",
            media: $setup.srcs,
            user: $setup.author,
            comments: $setup.comments
          }, null, 8, ["open", "comments"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/organisms/PwSubmissionDetailDialog.story.vue";
const PwSubmissionDetailDialog_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwSubmissionDetailDialog.story.vue"]]);
export {
  PwSubmissionDetailDialog_story as default
};
