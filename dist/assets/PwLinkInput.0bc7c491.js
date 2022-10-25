import { av as defineComponent, aU as ref, aG as computed, az as openBlock, ax as createBlock, ay as withCtx, aK as createElementBlock, aM as Fragment, aL as renderList, b1 as withModifiers, aB as createBaseVNode, aA as createVNode, aT as withKeys, aS as createCommentVNode, aJ as createTextVNode, aN as toDisplayString, bb as useFetch, b3 as __nuxt_component_0 } from "./vendor.bd202a0d.js";
import { P as PwInput } from "./PwInput.560e7f53.js";
import { M as MdiNorthEast } from "./MdiNorthEast.51563140.js";
import { M as MdiClose } from "./MdiClose.5111c6c9.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const PwLinkInput_vue_vue_type_style_index_0_scoped_681af6b4_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwLinkInput",
  props: {
    links: { type: Array, required: true },
    label: { type: String, required: true }
  },
  emits: ["new", "remove"],
  setup(__props, { expose, emit }) {
    expose();
    const PwInputRef = ref();
    const inputRef = computed(() => {
      var _a;
      return (_a = PwInputRef.value) == null ? void 0 : _a.input;
    });
    const userInput = ref("");
    const input = {
      getInstance: () => inputRef.value,
      submit: async (val) => {
        const cleanedValue = (val ? val : userInput.value).split(",")[0].trim();
        if (cleanedValue.length > 0) {
          const { data } = await useFetch(`/api/v1/links/generate/${cleanedValue}`, { key: new Date().toISOString() }, "$FuaxnzuafH");
          if (data.value) {
            const { link } = data.value;
            emit("new", {
              icon: link.faviconSrc,
              label: link.title,
              href: link.url
            });
          }
          input.clearInput();
        }
      },
      removeLast: () => {
        const inputElement = input.getInstance();
        if (inputElement.value.trim().length === 0) {
          emit("remove", -1);
        }
      },
      clearInput: () => {
        var _a;
        userInput.value = (_a = userInput.value.split(",").at(1)) != null ? _a : "";
      }
    };
    const onDeleteKeypress = () => {
      if (userInput.value.length === 0) {
        input.removeLast();
      }
    };
    const __returned__ = { emit, PwInputRef, inputRef, userInput, input, onDeleteKeypress, PwInput, MdiNorthEast, MdiClose };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  key: 0,
  class: "link-container row wrap mr-sm"
};
const _hoisted_2 = ["onClick", "onKeypress"];
const _hoisted_3 = ["src"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  return openBlock(), createBlock($setup["PwInput"], {
    modelValue: $setup.userInput,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.userInput = $event),
    ref: "PwInputRef",
    label: $props.label,
    onPaste: _cache[2] || (_cache[2] = ($event) => $setup.input.submit($event.clipboardData.getData("Text"))),
    onKeydown: [
      _cache[3] || (_cache[3] = withKeys(withModifiers(($event) => $setup.input.submit(), ["stop", "prevent"]), ["enter"])),
      withKeys(withModifiers($setup.onDeleteKeypress, ["stop"]), ["delete"])
    ]
  }, {
    after: withCtx(() => [
      $props.links.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.links, (link, index) => {
          return openBlock(), createBlock(_component_NuxtLink, {
            class: "chip link",
            href: link.href,
            key: link.href,
            target: "_blank",
            onClick: _cache[0] || (_cache[0] = withModifiers(() => {
            }, ["stop"]))
          }, {
            default: withCtx(() => [
              createBaseVNode("button", {
                class: "btn-secondary btn-chip",
                onClick: withModifiers(($event) => $setup.emit("remove", index), ["stop", "prevent"]),
                onKeypress: withKeys(withModifiers(($event) => $setup.emit("remove", index), ["prevent"]), ["enter"])
              }, [
                createVNode($setup["MdiClose"], { class: "pointer" })
              ], 40, _hoisted_2),
              link.icon ? (openBlock(), createElementBlock("img", {
                key: 0,
                class: "favicon",
                src: link.icon,
                alt: ""
              }, null, 8, _hoisted_3)) : createCommentVNode("v-if", true),
              createTextVNode(" " + toDisplayString(link.label) + " ", 1),
              createVNode($setup["MdiNorthEast"], { color: "var(--es-blue)" })
            ]),
            _: 2
          }, 1032, ["href"]);
        }), 128))
      ])) : createCommentVNode("v-if", true)
    ]),
    _: 1
  }, 8, ["modelValue", "label", "onKeydown"]);
}
_sfc_main.__file = "components/molecules/PwLinkInput.vue";
const PwLinkInput = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-681af6b4"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwLinkInput.vue"]]);
export {
  PwLinkInput as P
};
