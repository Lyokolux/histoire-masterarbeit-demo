import { bc as encode, aU as ref, aG as computed, aH as unref, az as openBlock, aK as createElementBlock, aB as createBaseVNode, av as defineComponent, ax as createBlock, ay as withCtx, aC as renderSlot, aA as createVNode, aS as createCommentVNode, aF as resolveDynamicComponent, aX as onMounted, bd as onUnmounted, b1 as withModifiers, be as watch, a_ as watchEffect, bf as useElementSize, bg as Container, bh as Draggable, aM as Fragment, aL as renderList, aT as withKeys, b5 as withDirectives, b6 as vShow, aO as normalizeClass, aD as pushScopeId, aE as popScopeId, aV as useAttrs, a$ as mergeProps, aN as toDisplayString, bi as common, bj as required, bk as useVuelidate, aJ as createTextVNode, b3 as __nuxt_component_0, aw as resolveComponent } from "./vendor.e1f182eb.js";
import { T as TimeInMS, D as DAYS_FOR_VOTING } from "./battle.8272f3c5.js";
import { P as PwMedia, a as toolToOption, o as optionToSimpleTool, m as mediaToFilePreview } from "./PwMedia.82b20efc.js";
import { a as CATEGORIE_OPTIONS } from "./categorie.a6b92ec9.js";
import { E as ENTITY_TYPES } from "./entityOptions.bfbd57be.js";
import { P as PwInput } from "./PwInput.1d31d636.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { P as PwLoader } from "./PwLoader.243f7311.js";
import { P as PwBanner } from "./PwBanner.f3f0d516.js";
import { P as PwFileDropzoneContent } from "./PwFileDropzoneContent.510e688c.js";
import { P as PwLinkInput } from "./PwLinkInput.a68e2497.js";
import { P as PwToggleSwitch } from "./PwToggleSwitch.c5e84f8b.js";
import { P as PwCombobox } from "./PwCombobox.0a4cdcdd.js";
import { P as PwDatePicker } from "./PwDatePicker.f6f3edc3.js";
import { M as MdiNorthEast } from "./MdiNorthEast.139521af.js";
import { P as PwOptionSelector } from "./PwOptionSelector.ee2bc3de.js";
import { P as PwCategorieChip } from "./PwCategorieChip.42475d05.js";
import { F as FormWrapper } from "./PageFormWrapper.176358e4.js";
import "./MdiPalette.f8b8d90f.js";
import "./MdiClose.8c1d5735.js";
import "./MdiCloudUpload.d6afbe2e.js";
import "./MdiDone.e7df3e69.js";
import "./FlyoutStateIcon.c4d3217f.js";
const TOOLS_FIXTURE = [
  { name: "Adobe After Effects" },
  { name: "Adobe InDesign" },
  { name: "Adobe Photoshop" },
  { name: "Adobe Illustrator" },
  { name: "Adobe Premiere" },
  { name: "Adobe XD" },
  { name: "Affinity Designer" },
  { name: "Affinity Photo" },
  { name: "Affinity Publisher" },
  { name: "Antetype" },
  { name: "Figma" },
  { name: "Framer" },
  { name: "inVision" },
  { name: "Keynote" },
  { name: "Pixel Imator" },
  { name: "Principle" },
  { name: "Procreate" },
  { name: "Sketch" },
  { name: "Vectornator" },
  { name: "Blender" },
  { name: "Cinema 4D" },
  { name: "Houdini" },
  { name: "Pen & Paper" }
].map(({ name }, id) => ({
  id,
  name
}));
var HttpStatusCode = /* @__PURE__ */ ((HttpStatusCode2) => {
  HttpStatusCode2[HttpStatusCode2["CONTINUE"] = 100] = "CONTINUE";
  HttpStatusCode2[HttpStatusCode2["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
  HttpStatusCode2[HttpStatusCode2["PROCESSING"] = 102] = "PROCESSING";
  HttpStatusCode2[HttpStatusCode2["OK"] = 200] = "OK";
  HttpStatusCode2[HttpStatusCode2["CREATED"] = 201] = "CREATED";
  HttpStatusCode2[HttpStatusCode2["ACCEPTED"] = 202] = "ACCEPTED";
  HttpStatusCode2[HttpStatusCode2["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
  HttpStatusCode2[HttpStatusCode2["NO_CONTENT"] = 204] = "NO_CONTENT";
  HttpStatusCode2[HttpStatusCode2["RESET_CONTENT"] = 205] = "RESET_CONTENT";
  HttpStatusCode2[HttpStatusCode2["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
  HttpStatusCode2[HttpStatusCode2["MULTI_STATUS"] = 207] = "MULTI_STATUS";
  HttpStatusCode2[HttpStatusCode2["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
  HttpStatusCode2[HttpStatusCode2["IM_USED"] = 226] = "IM_USED";
  HttpStatusCode2[HttpStatusCode2["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
  HttpStatusCode2[HttpStatusCode2["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
  HttpStatusCode2[HttpStatusCode2["FOUND"] = 302] = "FOUND";
  HttpStatusCode2[HttpStatusCode2["SEE_OTHER"] = 303] = "SEE_OTHER";
  HttpStatusCode2[HttpStatusCode2["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
  HttpStatusCode2[HttpStatusCode2["USE_PROXY"] = 305] = "USE_PROXY";
  HttpStatusCode2[HttpStatusCode2["SWITCH_PROXY"] = 306] = "SWITCH_PROXY";
  HttpStatusCode2[HttpStatusCode2["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
  HttpStatusCode2[HttpStatusCode2["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
  HttpStatusCode2[HttpStatusCode2["BAD_REQUEST"] = 400] = "BAD_REQUEST";
  HttpStatusCode2[HttpStatusCode2["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
  HttpStatusCode2[HttpStatusCode2["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
  HttpStatusCode2[HttpStatusCode2["FORBIDDEN"] = 403] = "FORBIDDEN";
  HttpStatusCode2[HttpStatusCode2["NOT_FOUND"] = 404] = "NOT_FOUND";
  HttpStatusCode2[HttpStatusCode2["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
  HttpStatusCode2[HttpStatusCode2["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
  HttpStatusCode2[HttpStatusCode2["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
  HttpStatusCode2[HttpStatusCode2["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
  HttpStatusCode2[HttpStatusCode2["CONFLICT"] = 409] = "CONFLICT";
  HttpStatusCode2[HttpStatusCode2["GONE"] = 410] = "GONE";
  HttpStatusCode2[HttpStatusCode2["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
  HttpStatusCode2[HttpStatusCode2["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
  HttpStatusCode2[HttpStatusCode2["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
  HttpStatusCode2[HttpStatusCode2["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
  HttpStatusCode2[HttpStatusCode2["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
  HttpStatusCode2[HttpStatusCode2["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
  HttpStatusCode2[HttpStatusCode2["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
  HttpStatusCode2[HttpStatusCode2["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
  HttpStatusCode2[HttpStatusCode2["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
  HttpStatusCode2[HttpStatusCode2["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
  HttpStatusCode2[HttpStatusCode2["LOCKED"] = 423] = "LOCKED";
  HttpStatusCode2[HttpStatusCode2["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
  HttpStatusCode2[HttpStatusCode2["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
  HttpStatusCode2[HttpStatusCode2["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
  HttpStatusCode2[HttpStatusCode2["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
  HttpStatusCode2[HttpStatusCode2["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
  HttpStatusCode2[HttpStatusCode2["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
  HttpStatusCode2[HttpStatusCode2["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
  HttpStatusCode2[HttpStatusCode2["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
  HttpStatusCode2[HttpStatusCode2["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
  HttpStatusCode2[HttpStatusCode2["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
  HttpStatusCode2[HttpStatusCode2["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
  HttpStatusCode2[HttpStatusCode2["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
  HttpStatusCode2[HttpStatusCode2["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
  HttpStatusCode2[HttpStatusCode2["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
  HttpStatusCode2[HttpStatusCode2["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
  HttpStatusCode2[HttpStatusCode2["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
  HttpStatusCode2[HttpStatusCode2["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
  return HttpStatusCode2;
})(HttpStatusCode || {});
var BlurhashEncoding = /* @__PURE__ */ ((BlurhashEncoding2) => {
  BlurhashEncoding2[BlurhashEncoding2["componentX"] = 8] = "componentX";
  BlurhashEncoding2[BlurhashEncoding2["componentY"] = 6] = "componentY";
  BlurhashEncoding2[BlurhashEncoding2["maxWidth"] = 32] = "maxWidth";
  BlurhashEncoding2[BlurhashEncoding2["maxHeight"] = 32] = "maxHeight";
  return BlurhashEncoding2;
})(BlurhashEncoding || {});
const resizeDimensions = (image, maxWidth, maxHeight) => {
  const { width, height } = image;
  if (width > maxWidth && width > height) {
    return {
      width: maxWidth,
      height: height * (maxWidth / width)
    };
  } else if (height > maxHeight) {
    return {
      width: width * (maxHeight / height),
      height: maxHeight
    };
  } else {
    return { width, height };
  }
};
const loadImage = async (src) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => resolve(img);
  img.onerror = (...args) => reject(args);
  img.src = src;
});
const getImageData = (image) => {
  const canvas = document.createElement("canvas");
  const { width, height } = resizeDimensions(image, BlurhashEncoding.maxWidth, BlurhashEncoding.maxHeight);
  const context = canvas.getContext("2d");
  context.drawImage(image, 0, 0, width, height);
  return context.getImageData(0, 0, width, height);
};
const useBlurhashEncode = async (url) => {
  const image = await loadImage(url);
  const imageData = getImageData(image);
  return encode(imageData.data, imageData.width, imageData.height, BlurhashEncoding.componentX, BlurhashEncoding.componentY);
};
const uploadFile = async (file) => {
  var _a;
  file.status = "uploading";
  const placeholder = await useBlurhashEncode(file.url);
  const formData = new FormData();
  formData.append("file", file.file);
  formData.append("id", file.id);
  formData.append("placeholder", placeholder);
  const response = await $fetch("/api/v1/media", {
    method: "POST",
    body: formData
  });
  const isFileUploaded = response.status === HttpStatusCode.OK || response.status === HttpStatusCode.CREATED;
  file.status = isFileUploaded ? "uploaded" : "upload-error";
  file.id = isFileUploaded ? (_a = response.file) == null ? void 0 : _a.hash : file.id;
  return response;
};
const uploadFiles = (files) => {
  return Promise.all(files.filter((x) => x.status !== "uploaded").map(uploadFile));
};
const useFileUploader = () => ({
  uploadFile,
  uploadFiles
});
const asyncFilter = async (arr, predicate) => {
  const results = await Promise.all(arr.map(predicate));
  return arr.filter((_v, index) => results[index]);
};
const addDays = (date, dayAmount) => new Date(new Date(date).setTime(date.getTime() + dayAmount * TimeInMS.DAY));
const DEFAULT_ITEM_PER_CONTAINER = 3;
const useFileDragnDrop = (files, opts) => {
  const {
    containerWidth,
    previewWidth
  } = opts;
  const isDragging = ref(false);
  const itemPerContainer = computed(() => containerWidth && previewWidth ? Math.max(1, Math.trunc(unref(containerWidth) / previewWidth)) : DEFAULT_ITEM_PER_CONTAINER);
  const dragContainerAmount = computed(() => {
    const amount = Math.max(1, Math.ceil((files.value.length + 1) / itemPerContainer.value));
    return amount == Number.POSITIVE_INFINITY ? 1 : amount;
  });
  const getIndexFromDropEventMatrix = (row, col) => {
    if (typeof row === "number" && typeof col === "number" && row + col > 0)
      return row === 0 ? col - 1 : row * itemPerContainer.value + col - 1;
  };
  const getChildPayload = (row, col) => {
    const index = getIndexFromDropEventMatrix(row, col);
    return index !== void 0 ? { payload: files.value[index], index } : void 0;
  };
  const onRowDrop = (addedRowIndex, dropResult) => {
    if (dropResult.type === "drop")
      return;
    const { addedIndex: addedColIndex, payload: { payload: itemToAdd, index: removedIndex } } = dropResult;
    const addedIndex = getIndexFromDropEventMatrix(addedRowIndex, addedColIndex);
    if (removedIndex === void 0 || addedIndex === void 0)
      return files.value;
    const result = files;
    if (removedIndex !== null) {
      result.value.splice(removedIndex, 1)[0];
    }
    if (addedIndex !== null) {
      result.value.splice(addedIndex, 0, itemToAdd);
    }
    return result;
  };
  return {
    isDragging,
    dragContainerAmount,
    itemPerContainer,
    onRowDrop,
    getChildPayload
  };
};
class UploadableFile {
  constructor(file) {
    this.file = file;
    this.id = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
    this.slug = `${file.name}-${file.size}-${file.lastModified}-${file.type}`;
    this.url = URL.createObjectURL(file);
    this.status = "added";
  }
}
const DEFAULT_FILE_FILTER_RULE = () => true;
const useFileList = (initialFiles) => {
  const files = ref(initialFiles != null ? initialFiles : []);
  const addFiles = async (newFiles, rule = DEFAULT_FILE_FILTER_RULE) => {
    const newUploadableFilesCandidate = [...newFiles].map((file) => new UploadableFile(file)).filter((file) => !fileExists(file.slug));
    const newUploadableFiles = await asyncFilter(newUploadableFilesCandidate, rule);
    files.value = files.value.concat(newUploadableFiles);
  };
  const fileExists = (otherId) => {
    return files.value.some(({ slug }) => slug === otherId);
  };
  const removeFile = (file) => {
    const index = files.value.indexOf(file);
    if (index > -1) {
      files.value.splice(index, 1);
    }
  };
  return { files, addFiles, removeFile };
};
const _sfc_main$7 = {};
const _hoisted_1$6 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$5 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0V0z",
  fill: "none"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("path", { d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" }, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$5,
  _hoisted_3$3
];
function _sfc_render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$6, _hoisted_4$3);
}
_sfc_main$7.__file = "assets/icons/MdiDeleteOutline.vue";
const MdiDeleteOutline = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiDeleteOutline.vue"]]);
const PwFilePreview_vue_vue_type_style_index_0_scoped_840cfc96_lang = "";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "PwFilePreview",
  props: {
    file: { type: null, required: true },
    tag: { type: String, required: false, default: "li" },
    displayOnly: { type: Boolean, required: false },
    removable: { type: Boolean, required: false, default: false }
  },
  emits: ["remove"],
  setup(__props, { expose, emit }) {
    expose();
    const __returned__ = { emit, PwMedia, MdiDeleteOutline };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(resolveDynamicComponent($props.tag), { class: "file-preview" }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "before", {}, void 0, true),
      $props.removable ? (openBlock(), createElementBlock("button", {
        key: 0,
        class: "btn btn-tertiary",
        onClick: _cache[0] || (_cache[0] = ($event) => $setup.emit("remove", $props.file))
      }, [
        createVNode($setup["MdiDeleteOutline"])
      ])) : createCommentVNode("v-if", true),
      createVNode($setup["PwMedia"], {
        type: $props.file.file.type,
        src: $props.file.url,
        alt: $props.file.file.name,
        title: $props.file.file.name,
        displayOnly: $props.displayOnly
      }, null, 8, ["type", "src", "alt", "title", "displayOnly"])
    ]),
    _: 3
  });
}
_sfc_main$6.__file = "components/atoms/PwFilePreview.vue";
const PwFilePreview = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-840cfc96"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwFilePreview.vue"]]);
const preventDefaults = (e) => {
  e.preventDefault();
};
const usePreventEventDefaults = (events) => {
  onMounted(() => {
    events.forEach((e) => {
      document.body.addEventListener(e, preventDefaults);
    });
  });
  onUnmounted(() => {
    events.forEach((e) => {
      document.body.removeEventListener(e, preventDefaults);
    });
  });
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "PwDropZone",
  emits: ["files-dropped"],
  setup(__props, { expose, emit }) {
    expose();
    const EVENTS = ["dragenter", "dragover", "dragleave", "drop"];
    usePreventEventDefaults(EVENTS);
    const active = ref(false);
    let inActiveTimeout = void 0;
    const setActive = () => {
      active.value = true;
      clearTimeout(inActiveTimeout);
    };
    const setInactive = () => {
      inActiveTimeout = window.setTimeout(() => {
        active.value = false;
      }, 50);
    };
    const onDrop = (e) => {
      var _a, _b;
      setInactive();
      emit("files-dropped", [...(_b = (_a = e.dataTransfer) == null ? void 0 : _a.files) != null ? _b : []]);
    };
    const __returned__ = { emit, EVENTS, active, inActiveTimeout, setActive, setInactive, onDrop };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$5 = ["data-active", "onDragenter", "onDragover", "onDragleave", "onDrop"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    "data-active": $setup.active,
    onDragenter: withModifiers($setup.setActive, ["prevent"]),
    onDragover: withModifiers($setup.setActive, ["prevent"]),
    onDragleave: withModifiers($setup.setInactive, ["prevent", "stop"]),
    onDrop: withModifiers($setup.onDrop, ["prevent", "stop"])
  }, [
    renderSlot(_ctx.$slots, "default", { dropZoneActive: $setup.active })
  ], 40, _hoisted_1$5);
}
_sfc_main$5.__file = "components/atoms/PwDropZone.vue";
const PwDropZone = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwDropZone.vue"]]);
const _sfc_main$4 = {};
const _hoisted_1$4 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$4 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$4,
  _hoisted_3$2
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _hoisted_4$2);
}
_sfc_main$4.__file = "assets/icons/MdiReplay.vue";
const MdiReplay = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiReplay.vue"]]);
const PwFileUploader_vue_vue_type_style_index_0_scoped_57f2c644_lang = "";
const __default__ = { inheritAttrs: false };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__,
  __name: "PwFileUploader",
  props: {
    files: { type: Array, required: false }
  },
  emits: ["select-cover", "files", "files-added", "files-uploaded", "retry-upload"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const ACCEPTED_FILE = ["image/*", "video/*"];
    const { files, addFiles, removeFile } = useFileList(props.files);
    watch(files, (newVal, oldVal) => {
      emit("files", files.value);
      emit("files-added", newVal.filter(
        (valCandidate) => !oldVal.find((old) => old.slug === valCandidate.slug)
      ));
    });
    const onInputChange = (e) => {
      var _a;
      addFiles((_a = e.target) == null ? void 0 : _a.files);
      e.target.value = null;
    };
    watchEffect(() => {
      emit("files-uploaded", {
        amount: files.value.reduce((acc, { status }) => status === "uploaded" ? acc + 1 : acc, 0),
        all: files.value.every(({ status }) => status === "uploaded"),
        ids: files.value.map(({ id }) => id)
      });
    });
    const input = ref();
    const inputLabel = ref();
    const setFileInputFocus = () => {
      if (input.value[0] && inputLabel.value) {
        input.value[0].focus();
        input.value[0].click();
        inputLabel.value.focus();
      }
    };
    const dragndropContainer = ref();
    const width = useElementSize(dragndropContainer).width;
    const containerWidth = computed(() => Math.max(0, width.value - 2 * 20));
    const { isDragging, itemPerContainer, dragContainerAmount, onRowDrop, getChildPayload } = useFileDragnDrop(files, { previewWidth: 221, containerWidth });
    const getPreviewBadgeNumber = (group, rawIndex, itemPerRow) => (group - 1) * itemPerRow + rawIndex + (group === 1 ? 1 : 0);
    const __returned__ = { emit, ACCEPTED_FILE, props, files, addFiles, removeFile, onInputChange, input, inputLabel, setFileInputFocus, dragndropContainer, width, containerWidth, isDragging, itemPerContainer, dragContainerAmount, onRowDrop, getChildPayload, getPreviewBadgeNumber, Container, Draggable, PwFilePreview, PwDropZone, PwLoader, MdiReplay, PwBanner };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-57f2c644"), n = n(), popScopeId(), n);
const _hoisted_1$3 = ["accept"];
const _hoisted_2$3 = {
  key: 0,
  class: "preview-badge pw-chip text"
};
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", { class: "text-center" }, "Fehler beim Upload:", -1));
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", null, "Erneut versuchen", -1));
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ol", {
    class: normalizeClass(["column wrapper", { "with-content": $setup.files.length > 0 }]),
    ref: "dragndropContainer"
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.dragContainerAmount, (group) => {
      return openBlock(), createBlock($setup["Container"], {
        key: group,
        tag: "li",
        "group-name": "files",
        orientation: "horizontal",
        "drag-class": "dragged",
        "get-child-payload": (col) => $setup.getChildPayload(group - 1, col),
        onDragStart: _cache[0] || (_cache[0] = ($event) => $setup.isDragging = true),
        onDragEnd: _cache[1] || (_cache[1] = ($event) => $setup.isDragging = false),
        onDrop: withModifiers((e) => $setup.onRowDrop(group - 1, e), ["self"])
      }, {
        default: withCtx(() => [
          group === 1 ? (openBlock(), createBlock($setup["PwDropZone"], {
            key: 0,
            class: "dropzone focusable",
            tabindex: "0",
            onFilesDropped: $setup.addFiles,
            onKeyup: withKeys($setup.setFileInputFocus, ["enter"])
          }, {
            default: withCtx(({ dropZoneActive }) => [
              createBaseVNode("label", {
                ref_for: true,
                ref: "inputLabel",
                class: "column justify-center items-center",
                for: "file-input"
              }, [
                dropZoneActive ? renderSlot(_ctx.$slots, "dropzone-active", {
                  key: 0,
                  short: $setup.files.length > 0
                }, void 0, true) : renderSlot(_ctx.$slots, "dropzone", {
                  key: 1,
                  short: $setup.files.length > 0
                }, void 0, true),
                createBaseVNode("input", {
                  ref_for: true,
                  ref: "input",
                  type: "file",
                  id: "file-input",
                  class: "visually-hidden",
                  multiple: "",
                  tabindex: "-1",
                  accept: $setup.ACCEPTED_FILE.join(","),
                  onChange: $setup.onInputChange
                }, null, 40, _hoisted_1$3)
              ], 512)
            ]),
            _: 3
          }, 8, ["onFilesDropped", "onKeyup"])) : createCommentVNode("v-if", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($setup.files.slice((group - 1) * $setup.itemPerContainer - (group >= 2 ? 1 : 0), group * $setup.itemPerContainer - 1), (file, index) => {
            return withDirectives((openBlock(), createBlock($setup["Draggable"], {
              key: file.slug,
              class: "focusable",
              tag: "li"
            }, {
              default: withCtx(() => [
                createVNode($setup["PwFilePreview"], {
                  tag: "div",
                  class: "file-preview",
                  tabindex: "0",
                  displayOnly: "",
                  file,
                  removable: !$setup.isDragging,
                  onRemove: $setup.removeFile
                }, {
                  before: withCtx(() => [
                    group === 1 && index === 0 ? (openBlock(), createElementBlock("div", _hoisted_2$3, " Cover ")) : createCommentVNode("v-if", true),
                    withDirectives(createVNode($setup["PwLoader"], { class: "cover" }, null, 512), [
                      [vShow, file.status === "uploading"]
                    ]),
                    withDirectives(createVNode($setup["PwBanner"], { class: "file-preview-error" }, {
                      default: withCtx(() => [
                        _hoisted_3$1,
                        createBaseVNode("button", {
                          type: "button",
                          class: "btn-tertiary",
                          onClick: ($event) => $setup.emit("retry-upload", [file])
                        }, [
                          createVNode($setup["MdiReplay"], { class: "mr-sm" }),
                          _hoisted_5$1
                        ], 8, _hoisted_4$1)
                      ]),
                      _: 2
                    }, 1536), [
                      [vShow, file.status === "upload-error"]
                    ])
                  ]),
                  _: 2
                }, 1032, ["file", "removable", "onRemove"])
              ]),
              _: 2
            }, 1024)), [
              [vShow, $setup.files.length > 0]
            ]);
          }), 128))
        ]),
        _: 2
      }, 1032, ["get-child-payload", "onDrop"]);
    }), 128))
  ], 2);
}
_sfc_main$3.__file = "components/molecules/PwFileUploader.vue";
const PwFileUploader = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-57f2c644"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/molecules/PwFileUploader.vue"]]);
const PwTextarea_vue_vue_type_style_index_0_scoped_a6496368_lang = "";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PwTextarea",
  props: {
    type: { type: null, required: false, default: "text" },
    label: { type: String, required: false },
    modelValue: { type: [String, null], required: false }
  },
  emits: ["update:modelValue"],
  setup(__props, { expose, emit }) {
    expose();
    const props = __props;
    const attrs = useAttrs();
    const id = Math.round(Math.random() * 10 ** 10).toString();
    const onChange = (payload) => {
      emit("update:modelValue", payload.target.value);
    };
    const __returned__ = { props, emit, attrs, id, onChange };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1$2 = ["for"];
const _hoisted_2$2 = ["value", "placeholder", "type", "id"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  return openBlock(), createElementBlock("label", {
    class: "pw-textarea",
    for: $setup.id
  }, [
    createBaseVNode("textarea", mergeProps({ ...$setup.attrs, class: "focusable" }, {
      value: $props.modelValue,
      onInput: $setup.onChange,
      placeholder: (_a = $setup.attrs["placeholder"]) != null ? _a : "",
      type: $props.type,
      id: $setup.id
    }), null, 16, _hoisted_2$2),
    createBaseVNode("span", null, toDisplayString($props.label), 1)
  ], 8, _hoisted_1$2);
}
_sfc_main$2.__file = "components/atoms/PwTextarea.vue";
const PwTextarea = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-a6496368"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/atoms/PwTextarea.vue"]]);
const useToolField = (params) => {
  var _a;
  const tools = ref(params.initialTools);
  const selectedTools = ref((_a = params.initialSelectedTools) != null ? _a : []);
  const onToolCreation = (name) => {
    const tool = { id: tools.value.length + 1, label: name };
    selectedTools.value.push(tool);
    tools.value.push({
      id: tool.id,
      name,
      href: void 0,
      icon: void 0
    });
    tools.value.sort((a, b) => a.name.localeCompare(b.name));
  };
  const getToolFromOption = (toolOption) => {
    var _a2;
    return (_a2 = tools.value.find(({ id }) => id === toolOption.id)) != null ? _a2 : tools.value[0];
  };
  return {
    tools,
    selectedTools,
    onToolCreation,
    getToolFromOption
  };
};
const validateByRef = (param, type) => common.withParams(
  { type, value: param },
  () => param.value
);
const PwBattleForm_vue_vue_type_style_index_0_scoped_fe5c5579_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwBattleForm",
  props: {
    type: { type: null, required: false },
    prefill: { type: Object, required: false },
    tools: { type: Array, required: true }
  },
  emits: ["success", "update:title", "update:type"],
  setup(__props, { expose, emit }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
    expose();
    const props = __props;
    const uploadFiles2 = useFileUploader().uploadFiles;
    const allFileCorrectlyUploaded = ref(false);
    const updateFileUploadStatus = ({ all, amount, ids }) => {
      allFileCorrectlyUploaded.value = all && amount >= 1;
      userInput.value.fileIds = ids;
    };
    const userInput = ref({
      fileIds: (_c = (_b = (_a = props.prefill) == null ? void 0 : _a.media) == null ? void 0 : _b.map((m) => m.hash)) != null ? _c : [],
      title: (_e = (_d = props.prefill) == null ? void 0 : _d.title) != null ? _e : "",
      description: (_g = (_f = props.prefill) == null ? void 0 : _f.description) != null ? _g : "",
      startDepositAt: (_h = props.prefill) == null ? void 0 : _h.startDepositAt,
      startVotingAt: (_i = props.prefill) == null ? void 0 : _i.startVotingAt,
      endAt: (_j = props.prefill) == null ? void 0 : _j.endAt,
      categorieId: (_l = (_k = props.prefill) == null ? void 0 : _k.categorieId) != null ? _l : void 0,
      tools: (_n = (_m = props.prefill) == null ? void 0 : _m.tools) != null ? _n : [],
      links: (_p = (_o = props.prefill) == null ? void 0 : _o.links) != null ? _p : []
    });
    const type = ref((_q = ENTITY_TYPES.find((x) => x.label === props.type)) != null ? _q : ENTITY_TYPES[0]);
    const isBattle = computed(() => type.value.label === "Battle");
    const isPlayground = computed(() => type.value.label === "Playground");
    watchEffect(() => {
      var _a2;
      return emit("update:title", (_a2 = userInput.value.title) != null ? _a2 : "");
    });
    watchEffect(() => emit("update:type", type.value));
    const rules = {
      fileIds: { required, allFileCorrect: validateByRef(allFileCorrectlyUploaded, "uploadCorrect") },
      title: { required },
      description: { required },
      startDepositAt: { required },
      endAt: { required },
      categorieId: { required },
      tools: {},
      links: {}
    };
    const v$ = useVuelidate(rules, userInput, { $autoDirty: true });
    const formElement = ref();
    const formIsSubmitting = ref(false);
    const form = {
      submit: async () => {
        var _a2;
        if (!v$.value.$invalid) {
          formIsSubmitting.value = true;
          const url = isBattle.value ? `/api/v1/battles` : `/api/v1/playgrounds`;
          const r = await $fetch(
            url,
            {
              method: props.prefill ? "PATCH" : "POST",
              body: {
                id: (_a2 = props.prefill) == null ? void 0 : _a2.id,
                startVotingAt: isBattle ? battleDates.value.at(1) : void 0,
                ...userInput.value
              }
            }
          );
          formIsSubmitting.value = false;
          if (r.status === HttpStatusCode.OK || r.status === HttpStatusCode.CREATED) {
            emit("success", { route: r.battle ? `/app/battles/${r.battle.id}` : `/app/playgrounds/${r.playground.id}` });
          }
        }
      }
    };
    const battleDates = ref([(_r = props.prefill) == null ? void 0 : _r.startDepositAt, (_u = (_s = props.prefill) == null ? void 0 : _s.startVotingAt) != null ? _u : (_t = props.prefill) == null ? void 0 : _t.endAt].filter((x) => x));
    watchEffect(() => {
      userInput.value.startDepositAt = battleDates.value.at(0);
      userInput.value.endAt = battleDates.value.at(1);
      if (isBattle.value && userInput.value.endAt) {
        userInput.value.startVotingAt = battleDates.value.at(1);
        userInput.value.endAt = addDays(userInput.value.endAt, DAYS_FOR_VOTING);
      }
    });
    const minDate = computed(() => {
      var _a2, _b2;
      if (((_a2 = props.prefill) == null ? void 0 : _a2.startDepositAt) && ((_b2 = props.prefill) == null ? void 0 : _b2.startDepositAt) < new Date()) {
        return props.prefill.startDepositAt;
      } else {
        return new Date();
      }
    });
    const localLinks = computed(() => userInput.value.links.map((l) => {
      var _a2;
      return { label: l.name, icon: (_a2 = l.iconHref) != null ? _a2 : void 0, href: l.href };
    }));
    const onNewLink = (link) => {
      var _a2;
      return userInput.value.links.push({ name: link.label, href: (_a2 = link.href) != null ? _a2 : "", iconHref: link.icon });
    };
    const onRemoveLink = (index) => userInput.value.links.splice(index, 1);
    const { tools: localTools, selectedTools: localSelectedTools, onToolCreation, getToolFromOption } = useToolField({ initialTools: props.tools, initialSelectedTools: (_w = (_v = props.prefill) == null ? void 0 : _v.tools) == null ? void 0 : _w.map(toolToOption) });
    watchEffect(() => {
      userInput.value.tools = localSelectedTools.value.map(optionToSimpleTool);
    });
    const __returned__ = { props, emit, uploadFiles: uploadFiles2, allFileCorrectlyUploaded, updateFileUploadStatus, userInput, type, isBattle, isPlayground, rules, v$, formElement, formIsSubmitting, form, battleDates, minDate, localLinks, onNewLink, onRemoveLink, localTools, localSelectedTools, onToolCreation, getToolFromOption, CATEGORIE_OPTIONS, ENTITY_TYPES, PwInput, PwFileUploader, PwFileDropzoneContent, PwTextarea, PwLoader, PwLinkInput, PwToggleSwitch, PwCombobox, PwDatePicker, MdiNorthEast, PwOptionSelector, PwCategorieChip };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-fe5c5579"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  ref: "formElement",
  style: { "font-size": "1.333rem" }
};
const _hoisted_2$1 = { class: "overflow" };
const _hoisted_3 = { class: "type-option row justify-center items-center" };
const _hoisted_4 = {
  class: "overflow",
  tabindex: "-1"
};
const _hoisted_5 = { class: "column" };
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("legend", { class: "visually-hidden" }, "Dates", -1));
const _hoisted_7 = {
  key: 0,
  class: "hint text-s"
};
const _hoisted_8 = {
  key: 1,
  class: "hint text-s"
};
const _hoisted_9 = ["src"];
const _hoisted_10 = ["src"];
const _hoisted_11 = { class: "column" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", { class: "hint text-s" }, "Just copy paste the link(s), or press enter to generate a chip.", -1));
const _hoisted_13 = { class: "row form-actions" };
const _hoisted_14 = ["disabled"];
const _hoisted_15 = { key: 0 };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  var _a, _b;
  const _component_NuxtLink = __nuxt_component_0;
  return openBlock(), createElementBlock("form", _hoisted_1$1, [
    createBaseVNode("fieldset", _hoisted_2$1, [
      createVNode($setup["PwToggleSwitch"], {
        class: "w-100",
        modelValue: $setup.type,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.type = $event),
        options: $setup.ENTITY_TYPES
      }, {
        option: withCtx(({ option }) => [
          createBaseVNode("div", _hoisted_3, [
            (openBlock(), createBlock(resolveDynamicComponent(option.icon), { class: "mr-sm" })),
            createTextVNode(" " + toDisplayString(option.label), 1)
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "options"])
    ]),
    createBaseVNode("fieldset", _hoisted_4, [
      createVNode($setup["PwFileUploader"], {
        files: (_b = (_a = $props.prefill) == null ? void 0 : _a.media) == null ? void 0 : _b.map(unref(mediaToFilePreview)),
        onFilesUploaded: $setup.updateFileUploadStatus,
        onFilesAdded: $setup.uploadFiles,
        onRetryUpload: $setup.uploadFiles
      }, {
        dropzone: withCtx(({ short }) => [
          createVNode($setup["PwFileDropzoneContent"], { shortPreview: short }, null, 8, ["shortPreview"])
        ]),
        _: 1
      }, 8, ["files", "onFilesAdded", "onRetryUpload"])
    ]),
    createVNode($setup["PwInput"], {
      modelValue: $setup.userInput.title,
      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.userInput.title = $event),
      name: "title",
      required: "",
      label: "Title"
    }, null, 8, ["modelValue"]),
    createBaseVNode("fieldset", null, [
      createVNode($setup["PwTextarea"], {
        modelValue: $setup.userInput.description,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $setup.userInput.description = $event),
        name: "description",
        class: "description-field",
        required: "",
        label: "Challenge"
      }, null, 8, ["modelValue"])
    ]),
    createBaseVNode("fieldset", _hoisted_5, [
      _hoisted_6,
      createVNode($setup["PwDatePicker"], {
        date: $setup.battleDates,
        "onUpdate:date": _cache[3] || (_cache[3] = ($event) => $setup.battleDates = $event),
        class: "w-100",
        minDate: $setup.minDate,
        range: "",
        multiCalendars: ""
      }, null, 8, ["date", "minDate"]),
      $setup.isBattle && $setup.userInput.endAt ? (openBlock(), createElementBlock("span", _hoisted_7, "Das Voting endet am " + toDisplayString(_ctx.$d($setup.userInput.endAt, "short")) + ".", 1)) : $setup.isBattle ? (openBlock(), createElementBlock("span", _hoisted_8, "Das Voting endet automatisch 14 Tagen nach dem Enddatum.")) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("fieldset", null, [
      createVNode($setup["PwOptionSelector"], {
        modelValue: $setup.userInput.categorieId,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $setup.userInput.categorieId = $event),
        options: $setup.CATEGORIE_OPTIONS,
        class: "w-100",
        label: "Thema",
        emitId: ""
      }, {
        option: withCtx(({ option }) => [
          createVNode($setup["PwCategorieChip"], {
            categorie: option.label
          }, null, 8, ["categorie"])
        ]),
        _: 1
      }, 8, ["modelValue", "options"])
    ]),
    createBaseVNode("fieldset", null, [
      createVNode($setup["PwCombobox"], {
        modelValue: $setup.localSelectedTools,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $setup.localSelectedTools = $event),
        class: "w-100",
        label: "Application",
        canCreateNewOptionWithLabel: "Use a new tool: ",
        options: $setup.localTools.map(unref(toolToOption)),
        onNewOption: $setup.onToolCreation
      }, {
        option: withCtx(({ option }) => [
          (openBlock(true), createElementBlock(Fragment, null, renderList([$setup.getToolFromOption(option)], (tool) => {
            return openBlock(), createElementBlock("div", {
              class: "tool",
              key: option.label
            }, [
              tool.icon ? (openBlock(), createElementBlock("img", {
                key: 0,
                src: tool.icon,
                alt: ""
              }, null, 8, _hoisted_9)) : createCommentVNode("v-if", true),
              createBaseVNode("span", null, toDisplayString(tool.name), 1)
            ]);
          }), 128))
        ]),
        "selected-option": withCtx(({ option }) => [
          (openBlock(true), createElementBlock(Fragment, null, renderList([$setup.getToolFromOption(option)], (tool) => {
            return openBlock(), createBlock(_component_NuxtLink, {
              key: tool.name,
              href: tool.href,
              class: "chip tool",
              target: "_blank"
            }, {
              default: withCtx(() => [
                tool.icon ? (openBlock(), createElementBlock("img", {
                  key: 0,
                  src: tool.icon,
                  alt: ""
                }, null, 8, _hoisted_10)) : createCommentVNode("v-if", true),
                createBaseVNode("span", null, toDisplayString(tool.name), 1),
                tool.href ? (openBlock(), createBlock($setup["MdiNorthEast"], {
                  key: 1,
                  style: { "--ratio": "1em", "color": "var(--es-blue)" }
                })) : createCommentVNode("v-if", true)
              ]),
              _: 2
            }, 1032, ["href"]);
          }), 128))
        ]),
        _: 1
      }, 8, ["modelValue", "options", "onNewOption"])
    ]),
    createBaseVNode("fieldset", _hoisted_11, [
      createVNode($setup["PwLinkInput"], {
        class: "w-100",
        links: $setup.localLinks,
        name: "links",
        label: "Inspiration & Articles",
        onNew: $setup.onNewLink,
        onRemove: $setup.onRemoveLink
      }, null, 8, ["links"]),
      _hoisted_12
    ]),
    createBaseVNode("div", _hoisted_13, [
      createCommentVNode(" TODO: add btn disabled state "),
      createBaseVNode("button", {
        type: "submit",
        class: "btn-primary",
        "aria-label": "Senden",
        disabled: $setup.v$.$invalid,
        onClick: _cache[6] || (_cache[6] = withModifiers((...args) => $setup.form.submit && $setup.form.submit(...args), ["prevent"]))
      }, [
        !$setup.formIsSubmitting ? (openBlock(), createElementBlock("span", _hoisted_15, "Save")) : (openBlock(), createBlock($setup["PwLoader"], {
          key: 1,
          size: "1em"
        }))
      ], 8, _hoisted_14)
    ])
  ], 512);
}
_sfc_main$1.__file = "components/organisms/PwBattleForm.vue";
const PwBattleForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-fe5c5579"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwBattleForm.vue"]]);
const PwBattleForm_story_vue_vue_type_style_index_0_scoped_f8589484_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwBattleForm.story",
  setup(__props, { expose }) {
    expose();
    const INITIAL_VALUES = {
      title: "Low Poly Art"
    };
    const toolOptions = TOOLS_FIXTURE.map(({ name }, id) => ({
      id,
      name,
      label: name
    }));
    const __returned__ = { INITIAL_VALUES, toolOptions, PwBattleForm, FormWrapper };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "storyContainer row justify-center" };
const _hoisted_2 = { class: "storyContainer row justify-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Battle Form" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Create (Empty)" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createVNode($setup["FormWrapper"], null, {
              default: withCtx(() => [
                createVNode($setup["PwBattleForm"], { toolOptions: $setup.toolOptions }, null, 8, ["toolOptions"])
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "Edit (filled)" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_2, [
            createVNode($setup["FormWrapper"], null, {
              default: withCtx(() => [
                createVNode($setup["PwBattleForm"], {
                  initialValues: $setup.INITIAL_VALUES,
                  toolOptions: $setup.toolOptions
                }, null, 8, ["toolOptions"])
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/organisms/PwBattleForm.story.vue";
const PwBattleForm_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f8589484"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwBattleForm.story.vue"]]);
export {
  PwBattleForm_story as default
};
