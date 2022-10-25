import { az as openBlock, aK as createElementBlock, aB as createBaseVNode, av as defineComponent, aU as ref, a_ as watchEffect, aG as computed, aA as createVNode, ay as withCtx, ax as createBlock, aS as createCommentVNode, aM as Fragment, aw as resolveComponent } from "./vendor.bd202a0d.js";
import { P as PwInput } from "./PwInput.560e7f53.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _sfc_main$3 = {};
const _hoisted_1$2 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("g", null, [
  /* @__PURE__ */ createBaseVNode("rect", {
    fill: "none",
    height: "24",
    width: "24"
  })
], -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("g", null, [
  /* @__PURE__ */ createBaseVNode("path", { d: "M19,4h-1V2h-2v2H8V2H6v2H5C3.89,4,3.01,4.9,3.01,6L3,20c0,1.1,0.89,2,2,2h14c1.1,0,2-0.9,2-2V6C21,4.9,20.1,4,19,4z M19,20 H5V10h14V20z M9,14H7v-2h2V14z M13,14h-2v-2h2V14z M17,14h-2v-2h2V14z M9,18H7v-2h2V18z M13,18h-2v-2h2V18z M17,18h-2v-2h2V18z" })
], -1);
const _hoisted_4$1 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$1);
}
_sfc_main$3.__file = "assets/icons/MdiCalendarMonth.vue";
const MdiCalendarMonth = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiCalendarMonth.vue"]]);
const _sfc_main$2 = {};
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
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" }, null, -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("path", { d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" }, null, -1);
const _hoisted_5 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_5);
}
_sfc_main$2.__file = "assets/icons/MdiSchedule.vue";
const MdiSchedule = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiSchedule.vue"]]);
const PwSimpleDatePicker_vue_vue_type_style_index_0_scoped_5204d44b_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwSimpleDatePicker",
  props: {
    name: { type: String, required: true },
    date: { type: [Date, String], required: false },
    withHour: { type: [Boolean, String], required: false, default: false },
    required: { type: Boolean, required: false, default: false },
    min: { type: String, required: false },
    max: { type: String, required: false }
  },
  emits: ["update:date"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const localDate = ref("");
    const localTime = ref("");
    const setLocalDateFromDate = (date) => {
      localDate.value = date.toISOString().slice(0, 10);
    };
    const setLocalTimeFromDate = (date) => {
      localTime.value = date.toISOString().slice(11, 16);
    };
    const setPickerDateToDate = (dateInput) => {
      const date = new Date(dateInput);
      setLocalDateFromDate(date);
      setLocalTimeFromDate(date);
    };
    watchEffect(() => {
      if (props.date) {
        setPickerDateToDate(props.date);
      }
    });
    const dateISOInput = computed(() => {
      const date = localDate.value ? new Date(localDate.value).toISOString().slice(0, 10) : void 0;
      if (date) {
        const [hours, minutes] = localTime.value ? localTime.value.split(":") : ["00", "00"];
        return new Date(`${date}T${hours}:${minutes}:00.000Z`);
      } else {
        return void 0;
      }
    });
    watchEffect(() => {
      emit("update:date", dateISOInput.value);
    });
    const __returned__ = { props, emit, localDate, localTime, setLocalDateFromDate, setLocalTimeFromDate, setPickerDateToDate, dateISOInput, PwInput, MdiCalendarMonth, MdiSchedule };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createVNode($setup["PwInput"], {
      modelValue: $setup.localDate,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.localDate = $event),
      type: "date",
      name: `${$props.name}-date`,
      label: "Date",
      required: $props.required,
      min: $props.min,
      max: $props.max
    }, {
      after: withCtx(() => [
        createVNode($setup["MdiCalendarMonth"], { class: "picker-icon x20" })
      ]),
      _: 1
    }, 8, ["modelValue", "name", "required", "min", "max"]),
    $props.withHour ? (openBlock(), createBlock($setup["PwInput"], {
      key: 0,
      modelValue: $setup.localTime,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.localTime = $event),
      name: `${$props.name}-time`,
      type: "time",
      label: "Uhrzeit",
      required: $props.required
    }, {
      after: withCtx(() => [
        createVNode($setup["MdiSchedule"], { class: "picker-icon x20" })
      ]),
      _: 1
    }, 8, ["modelValue", "name", "required"])) : createCommentVNode("v-if", true)
  ], 64);
}
_sfc_main$1.__file = "components/molecules/PwSimpleDatePicker.vue";
const PwSimpleDatePicker = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-5204d44b"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwSimpleDatePicker.vue"]]);
const PwSimpleDatePicker_story_vue_vue_type_style_index_0_scoped_060fce24_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwSimpleDatePicker.story",
  setup(__props, { expose }) {
    expose();
    const dateInput = new Date();
    const __returned__ = { dateInput, PwSimpleDatePicker };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = {
  class: "row",
  style: { "gap": "10px" }
};
const _hoisted_2 = {
  class: "row",
  style: { "gap": "10px" }
};
const _hoisted_3 = {
  class: "row",
  style: { "gap": "10px" }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, {
    title: "Simple Date Picker",
    layout: { type: "grid", width: "calc(812px + 2rem)" }
  }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Basic" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["PwSimpleDatePicker"], {
              name: "simple-date-picker",
              withHour: ""
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Predefined at now" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["PwSimpleDatePicker"], {
              date: $setup.dateInput,
              "onUpdate:date": _cache[0] || (_cache[0] = ($event) => $setup.dateInput = $event),
              name: "simple-date-picker",
              withHour: ""
            }, null, 8, ["date"])
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Date only" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createVNode($setup["PwSimpleDatePicker"], { name: "simple-date-picker" })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  }, 8, ["layout"]);
}
_sfc_main.__file = "components/molecules/PwSimpleDatePicker.story.vue";
const PwSimpleDatePicker_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-060fce24"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwSimpleDatePicker.story.vue"]]);
export {
  PwSimpleDatePicker_story as default
};
