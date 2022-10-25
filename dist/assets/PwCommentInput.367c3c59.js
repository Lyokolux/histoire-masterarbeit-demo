import { az as openBlock, aK as createElementBlock, aB as createBaseVNode, av as defineComponent, aU as ref, aX as onMounted, a_ as watchEffect, ax as createBlock, ay as withCtx, aA as createVNode, b7 as Transition } from "./vendor.e1f182eb.js";
import { P as PwInput } from "./PwInput.1d31d636.js";
import { u as useAvatar } from "./useAvatar.e8fa7cc5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { P as PwLoader } from "./PwLoader.243f7311.js";
const _sfc_main$1 = {};
const _hoisted_1$1 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$1 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("path", { d: "M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3
];
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4);
}
_sfc_main$1.__file = "assets/icons/MdiSend.vue";
const MdiSend = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiSend.vue"]]);
const PwCommentInput_vue_vue_type_style_index_0_scoped_6837c13f_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwCommentInput",
  props: {
    user: { type: Object, required: true },
    label: { type: String, required: false },
    message: { type: String, required: false, default: "" },
    isSending: { type: Boolean, required: false, default: false }
  },
  emits: ["send"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    let avatarSrc = ref("");
    onMounted(() => {
      avatarSrc.value = useAvatar(props.user.email, 40).src.value;
    });
    const localMessage = ref(props.message);
    watchEffect(() => localMessage.value = props.message);
    const send = () => {
      emit("send", { message: localMessage.value });
      localMessage.value = "";
    };
    const __returned__ = { props, emit, avatarSrc, localMessage, send, PwInput, MdiSend, PwLoader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = ["src"];
const _hoisted_2 = ["disabled"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createBlock($setup["PwInput"], {
    modelValue: $setup.localMessage,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.localMessage = $event),
    class: "comment-input items-center",
    label: (_a = $props.label) != null ? _a : "Enter a comment...",
    gap: ""
  }, {
    before: withCtx(() => [
      createBaseVNode("img", {
        class: "avatar",
        src: $setup.avatarSrc,
        alt: ""
      }, null, 8, _hoisted_1)
    ]),
    after: withCtx(() => [
      createVNode(Transition, { name: "fade" }, {
        default: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-primary reply ml-auto",
            disabled: $setup.localMessage.length === 0,
            onClick: $setup.send
          }, [
            !$props.isSending ? (openBlock(), createBlock($setup["MdiSend"], {
              key: 0,
              class: "x20",
              "aria-label": "Send"
            })) : (openBlock(), createBlock($setup["PwLoader"], {
              key: 1,
              size: "2em"
            }))
          ], 8, _hoisted_2)
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["modelValue", "label"]);
}
_sfc_main.__file = "components/molecules/PwCommentInput.vue";
const PwCommentInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6837c13f"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwCommentInput.vue"]]);
export {
  PwCommentInput as P
};
