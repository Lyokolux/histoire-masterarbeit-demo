import { av as defineComponent, aU as ref, az as openBlock, ax as createBlock, ay as withCtx, aB as createBaseVNode, aN as toDisplayString, aK as createElementBlock, aM as Fragment, aL as renderList, aO as normalizeClass, aS as createCommentVNode, aC as renderSlot, aG as computed, b2 as reactive, aH as unref, aw as resolveComponent, aA as createVNode, bl as TransitionGroup, aQ as normalizeProps, aR as guardReactiveProps } from "./vendor.e1f182eb.js";
import { R as RowSectionLayout } from "./RowSectionLayout.838fa5f5.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
import { P as PwMediaCard } from "./PwMediaCard.e87743fb.js";
import { P as PwBattleSummary } from "./PwBattleSummary.6711f6af.js";
import { h as heroErgozionImg, P as PwNewsCard, g as gradientsThemeImg } from "./theme-30-gradients.2fdb5c14.js";
import { l as loopedAnimationThemeImg } from "./theme-26-looped-animation.5efde032.js";
import { m as merchandizeThemeImg } from "./theme-27-merchandise.7a21d501.js";
import { T as THEME_SUGGESTION_DESCRIPTION } from "./text.e54094f8.js";
import { T as TimeInMS } from "./battle.8272f3c5.js";
import "./useCategorieToGradient.d7ebc894.js";
import "./PwMedia.82b20efc.js";
import "./MdiFlag.e978e074.js";
import "./PwCategorieChip.42475d05.js";
import "./Markdown.b212a4a0.js";
import "./MdiCollections.78c0d760.js";
import "./MdiChat.5abc105a.js";
import "./MdiPalette.f8b8d90f.js";
import "./useAvatar.e8fa7cc5.js";
import "./MdiFilterVintage.631bce95.js";
const PwOverviewSection_vue_vue_type_style_index_0_scoped_b5876e0e_lang = "";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PwOverviewSection",
  props: {
    title: { type: String, required: true },
    filterChipsGroup: { type: Array, required: false }
  },
  emits: ["selected"],
  setup(__props, { expose, emit }) {
    var _a, _b;
    expose();
    const props = __props;
    const selectedFilterChipId = ref((_b = (_a = props.filterChipsGroup) == null ? void 0 : _a.map((filterChips) => {
      var _a2;
      return (_a2 = filterChips.at(0)) == null ? void 0 : _a2.id;
    })) != null ? _b : []);
    const onFilterClick = (index, id) => {
      selectedFilterChipId.value[index] = id;
      emit("selected", id, index);
    };
    const __returned__ = { props, emit, selectedFilterChipId, onFilterClick, RowSectionLayout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "text-center" };
const _hoisted_2 = {
  key: 0,
  class: "row wrap justify-around font-bold",
  style: { "row-gap": "2rem" }
};
const _hoisted_3 = ["onClick", "onKeypress"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock($setup["RowSectionLayout"], {
    tag: "section",
    style: { "column-gap": "3rem" }
  }, {
    title: withCtx(() => [
      createBaseVNode("h1", _hoisted_1, toDisplayString($props.title), 1)
    ]),
    link: withCtx(() => [
      $props.filterChipsGroup ? (openBlock(), createElementBlock("div", _hoisted_2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($props.filterChipsGroup, (filterChips, index) => {
          return openBlock(), createElementBlock("ul", {
            class: "chip-list row justify-center items-center wrap",
            key: index
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(filterChips, (chip) => {
              return openBlock(), createElementBlock("li", {
                key: chip.id,
                class: normalizeClass(["pw-chip chip-item pointer", { "selected": $setup.selectedFilterChipId[index] === chip.id }]),
                tabindex: "0",
                onClick: ($event) => $setup.onFilterClick(index, chip.id),
                onKeypress: ($event) => $setup.onFilterClick(index, chip.id)
              }, toDisplayString(chip.labelKey), 43, _hoisted_3);
            }), 128))
          ]);
        }), 128))
      ])) : createCommentVNode("v-if", true)
    ]),
    content: withCtx(() => [
      renderSlot(_ctx.$slots, "content", {}, void 0, true)
    ]),
    _: 3
  });
}
_sfc_main$1.__file = "components/organisms/PwOverviewSection.vue";
const PwOverviewSection = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-b5876e0e"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwOverviewSection.vue"]]);
const NO_FILTER = void 0;
const DEFAULT_FILTER_KEY = "type";
const useFilter = (params) => {
  var _a, _b;
  const filterKey = (_a = params.filterKey) != null ? _a : DEFAULT_FILTER_KEY;
  const selectedType = ref((_b = params.initialFilter) != null ? _b : NO_FILTER);
  const setFilter = (filter) => {
    selectedType.value = filter;
  };
  const items = computed(() => {
    const elements = unref(params.elements);
    if (selectedType.value === NO_FILTER) {
      return elements;
    } else {
      return elements.filter((el) => el[filterKey] === selectedType.value);
    }
  });
  return {
    selectedType,
    setFilter,
    items: reactive(items)
  };
};
const lowPolyArtThemeImg = "/docs/stories/assets/theme-28-low-poly-art.23486236.jpg";
const microInterationsThemeImg = "/docs/stories/assets/theme-29-micro-interactions.97c03bde.jpg";
const PwOverviewSection_story_vue_vue_type_style_index_0_scoped_e564a72d_lang = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PwOverviewSection.story",
  setup(__props, { expose }) {
    expose();
    const NO_FILTER2 = { id: void 0, label: "All" };
    const battleFilters = [
      NO_FILTER2,
      { id: 2, label: "User Interface" },
      { id: 3, label: "Drawing" }
    ];
    const selectedBattleFilter = ref(NO_FILTER2.id);
    const setSelectedFiler = (idSelected) => {
      selectedBattleFilter.value = idSelected;
    };
    const battles = [
      { title: "Looped animation", src: loopedAnimationThemeImg, categorie: "User Interface" },
      { title: "Merchandize", src: merchandizeThemeImg, categorie: "User Interface" },
      { title: "Gradient", src: gradientsThemeImg, categorie: "User Interface" },
      { title: "Micro Interactions", src: microInterationsThemeImg, categorie: "User Interface" },
      { title: "Low Poly Art", src: lowPolyArtThemeImg, categorie: "Pencil" }
    ];
    const filteredBattles = computed(() => {
      var _a;
      if (selectedBattleFilter.value === NO_FILTER2.id) {
        return battles;
      } else {
        const label = (_a = battleFilters.find((b) => b.id === selectedBattleFilter.value)) == null ? void 0 : _a.label;
        return battles.filter((b) => b.categorie === label);
      }
    });
    const news = [
      { categorie: "User Interface", type: "proposal", title: "Gradients", label: "Themenvorschlag", text: THEME_SUGGESTION_DESCRIPTION, date: "01.01.2022" },
      { categorie: "User Interface", type: "hero", title: "ErgoZion", label: "Im Battle #24", src: heroErgozionImg },
      { categorie: "Pencil", type: "proposal", title: "Gradients 2", label: "Themenvorschlag", text: THEME_SUGGESTION_DESCRIPTION, date: "01.01.2022" }
    ];
    const newsFilters = [
      NO_FILTER2,
      { id: "hero", label: "Heroes" },
      { id: "proposal", label: "Themeneinreichung" },
      { id: "upload", label: "New Uploads" }
    ];
    const filteredNews = useFilter({
      elements: news,
      filters: newsFilters.map((el) => el.id)
    });
    const newsItems = filteredNews.items;
    const endAt = new Date(new Date().setTime(new Date().getTime() + 10 * TimeInMS.DAY));
    const __returned__ = { NO_FILTER: NO_FILTER2, battleFilters, selectedBattleFilter, setSelectedFiler, battles, filteredBattles, news, newsFilters, filteredNews, newsItems, endAt, PwOverviewSection, PwMediaCard, PwBattleSummary, PwNewsCard };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Variant = resolveComponent("Variant");
  const _component_Story = resolveComponent("Story");
  return openBlock(), createBlock(_component_Story, { title: "Overview Section" }, {
    default: withCtx(() => [
      createVNode(_component_Variant, { title: "Battles" }, {
        default: withCtx(() => [
          createVNode($setup["PwOverviewSection"], {
            title: "Battles",
            filterChips: $setup.battleFilters,
            class: "wrapper",
            onSelected: $setup.setSelectedFiler
          }, {
            content: withCtx(() => [
              createVNode(TransitionGroup, {
                name: "flip-list",
                class: "battle-list row wrap",
                tag: "ul"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.filteredBattles, (battle, index) => {
                    return openBlock(), createElementBlock("li", {
                      key: battle.title,
                      class: "battle-item flip-list-item"
                    }, [
                      createVNode($setup["PwMediaCard"], {
                        categorie: battle.categorie,
                        src: battle.src
                      }, {
                        default: withCtx(({ hoverClass }) => [
                          createVNode($setup["PwBattleSummary"], {
                            categorie: "User Interface",
                            class: normalizeClass(hoverClass),
                            number: index,
                            type: "Battle",
                            title: battle.title,
                            desc: "A description of the battle",
                            comments: 10,
                            participations: 4,
                            endAt: $setup.endAt
                          }, null, 8, ["class", "number", "title", "endAt"])
                        ]),
                        _: 2
                      }, 1032, ["categorie", "src"])
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      }),
      createVNode(_component_Variant, { title: "News" }, {
        default: withCtx(() => [
          createVNode($setup["PwOverviewSection"], {
            title: "News",
            filterChips: $setup.newsFilters,
            class: "wrapper",
            onSelected: $setup.filteredNews.setFilter
          }, {
            content: withCtx(() => [
              createVNode(TransitionGroup, {
                name: "flip-list",
                class: "battle-list row wrap",
                tag: "ul"
              }, {
                default: withCtx(() => [
                  (openBlock(true), createElementBlock(Fragment, null, renderList($setup.newsItems, (news) => {
                    return openBlock(), createElementBlock("li", {
                      key: news.title,
                      class: "battle-item flip-list-item"
                    }, [
                      createVNode($setup["PwNewsCard"], normalizeProps(guardReactiveProps(news)), null, 16)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onSelected"])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
_sfc_main.__file = "components/organisms/PwOverviewSection.story.vue";
const PwOverviewSection_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-e564a72d"], ["__file", "/Users/alexandre.guidoux/projects/ergosign-pixel-warriors/components/organisms/PwOverviewSection.story.vue"]]);
export {
  PwOverviewSection_story as default
};
