import { az as openBlock, aK as createElementBlock, aB as createBaseVNode, av as defineComponent, bm as useRoute, ax as createBlock, ay as withCtx, aA as createVNode, aO as normalizeClass, aS as createCommentVNode, aM as Fragment, aL as renderList, aF as resolveDynamicComponent, aJ as createTextVNode, aN as toDisplayString, b3 as __nuxt_component_0, bn as __nuxt_component_1, aD as pushScopeId, aE as popScopeId, aw as resolveComponent } from "./vendor.bd202a0d.js";
import { u as useAvatar } from "./useAvatar.ece45c52.js";
import { F as Flyout } from "./Flyout.72feedef.js";
import { M as MdiNotifications } from "./MdiNotifications.b13f1646.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { M as MdiTrophy, a as MdiPalette } from "./MdiPalette.be13da72.js";
const _sfc_main$4 = {};
const _hoisted_1$3 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createBaseVNode("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" }, null, -1);
const _hoisted_4$3 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _hoisted_4$3);
}
_sfc_main$4.__file = "assets/icons/MdiAdd.vue";
const MdiAdd = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiAdd.vue"]]);
const _sfc_main$3 = {};
const _hoisted_1$2 = {
  class: "mdi-icon",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "currentColor"
};
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("path", { d: "M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _hoisted_4$2);
}
_sfc_main$3.__file = "assets/icons/MdiLogout.vue";
const MdiLogout = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiLogout.vue"]]);
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
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
];
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _hoisted_4$1);
}
_sfc_main$2.__file = "assets/icons/MdiPerson.vue";
const MdiPerson = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/assets/icons/MdiPerson.vue"]]);
const PwHeader_vue_vue_type_style_index_0_scoped_102330b7_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwHeader",
  props: {
    title: { type: String, required: true },
    email: { type: String, required: false },
    name: { type: String, required: false },
    isOrganisator: { type: Boolean, required: false },
    points: { type: Number, required: false },
    naviItems: { type: Array, required: true },
    logoutAction: { type: null, required: true }
  },
  setup(__props, { expose }) {
    expose();
    const props = __props;
    const { src } = useAvatar(props.email, 28);
    const NEW_ROUTE = "/app/new";
    const currentRoute = useRoute();
    const isLinkActive = (route) => currentRoute.path.includes(route);
    const __returned__ = { props, src, NEW_ROUTE, currentRoute, isLinkActive, Flyout, MdiNotifications, MdiAdd, MdiLogout, MdiPerson };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-102330b7"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "row items-center" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("img", {
  class: "logo",
  src: "/logo.png",
  alt: ""
}, null, -1));
const _hoisted_3 = { class: "text-xl" };
const _hoisted_4 = { class: "row font-regular" };
const _hoisted_5 = { class: "row items-center" };
const _hoisted_6 = { class: "btn-neutral mr-md" };
const _hoisted_7 = ["src"];
const _hoisted_8 = {
  class: "column",
  style: { "line-height": "1.25" }
};
const _hoisted_9 = { class: "name font-regular" };
const _hoisted_10 = { class: "text-s font-bold" };
const _hoisted_11 = { class: "text-xl font-light" };
const _hoisted_12 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Profile", -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", null, "Logout", -1));
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_ClientOnly = __nuxt_component_1;
  return openBlock(), createElementBlock("header", null, [
    createBaseVNode("div", _hoisted_1, [
      _hoisted_2,
      $props.isOrganisator ? (openBlock(), createBlock(_component_NuxtLink, {
        key: 0,
        href: $setup.NEW_ROUTE,
        class: normalizeClass(["nav-link", { "router-link-active": $setup.isLinkActive($setup.NEW_ROUTE) }]),
        style: { "font-size": "1.8em" }
      }, {
        default: withCtx(() => [
          createVNode($setup["MdiAdd"])
        ]),
        _: 1
      }, 8, ["class"])) : createCommentVNode("v-if", true)
    ]),
    createBaseVNode("nav", _hoisted_3, [
      createBaseVNode("ul", _hoisted_4, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.naviItems, (naviItem) => {
          return openBlock(), createElementBlock("li", {
            key: naviItem.href
          }, [
            createVNode(_component_NuxtLink, {
              href: naviItem.href,
              class: normalizeClass(["nav-link row items-center", { "router-link-active": $setup.isLinkActive(naviItem.href) }]),
              style: { "gap": "8px" }
            }, {
              default: withCtx(() => [
                naviItem.icon ? (openBlock(), createBlock(resolveDynamicComponent(naviItem.icon), { key: 0 })) : createCommentVNode("v-if", true),
                createTextVNode(" " + toDisplayString(naviItem.labelKey), 1)
              ]),
              _: 2
            }, 1032, ["href", "class"])
          ]);
        }), 128))
      ])
    ]),
    createBaseVNode("div", _hoisted_5, [
      createBaseVNode("button", _hoisted_6, [
        createVNode($setup["MdiNotifications"], { class: "x25" })
      ]),
      createVNode($setup["Flyout"], null, {
        trigger: withCtx(() => [
          createVNode(_component_NuxtLink, {
            class: "nav-link row items-center",
            style: { "gap": "12px" }
          }, {
            default: withCtx(() => [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createBaseVNode("img", {
                    class: "avatar",
                    src: $setup.src,
                    alt: ""
                  }, null, 8, _hoisted_7)
                ]),
                _: 1
              }),
              createBaseVNode("div", _hoisted_8, [
                createBaseVNode("span", _hoisted_9, toDisplayString($props.name), 1),
                createBaseVNode("span", _hoisted_10, toDisplayString($props.points) + " Pkt", 1)
              ])
            ]),
            _: 1
          })
        ]),
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_11, [
            createVNode(_component_NuxtLink, {
              class: normalizeClass(["flyout-item", { "router-link-active": $setup.isLinkActive(`/app/user/${1}`) }]),
              href: `/app/user/${1}`
            }, {
              default: withCtx(() => [
                createVNode($setup["MdiPerson"]),
                _hoisted_12
              ]),
              _: 1
            }, 8, ["class"]),
            createVNode(_component_NuxtLink, {
              class: "flyout-item",
              href: "#",
              onClick: $props.logoutAction,
              onEnter: $props.logoutAction
            }, {
              default: withCtx(() => [
                createVNode($setup["MdiLogout"]),
                _hoisted_13
              ]),
              _: 1
            }, 8, ["onClick", "onEnter"])
          ])
        ]),
        _: 1
      })
    ])
  ]);
}
_sfc_main$1.__file = "components/organisms/PwHeader.vue";
const PwHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-102330b7"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwHeader.vue"]]);
const useNavigation = () => {
  return {
    headerNaviItems: [
      { labelKey: "Overview", href: "/app/overview" },
      { icon: MdiTrophy, labelKey: "Battles", href: "/app/battles" },
      { icon: MdiPalette, labelKey: "Playgrounds", href: "/app/playgrounds" }
    ]
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwHeader.story",
  setup(__props, { expose }) {
    expose();
    const { headerNaviItems } = useNavigation();
    const __returned__ = { headerNaviItems, PwHeader };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Header" }, {
    default: withCtx(() => [
      createVNode($setup["PwHeader"], {
        title: "Overview",
        naviItems: $setup.headerNaviItems,
        name: "Alexandre Guidoux",
        email: "alexandre.guidoux@ergosign.de",
        points: 128
      }, null, 8, ["naviItems"])
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/organisms/PwHeader.story.vue";
const PwHeader_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwHeader.story.vue"]]);
export {
  PwHeader_story as default
};
