import { d as defineComponent, u as useCssVars, r as ref, a8 as toRefs, a9 as useRouter, o as openBlock, e as createElementBlock, f as createVNode, w as withCtx, a as unref, I as Icon, n as normalizeClass, g as createBaseVNode, z as createTextVNode, t as toDisplayString, F as Fragment, p as renderList, q as createBlock, h as createCommentVNode, U as markRaw, bo as useFocus, k as watch, bp as refDebounced, c as computed, y as withDirectives, ab as vModelText, m as withKeys, a0 as withModifiers, _ as __vitePreload, bq as flexsearch_bundle } from "./vendor.e1f182eb.js";
import { u as useStoryStore } from "./story.c4010c74.js";
import { B as BaseEmpty } from "./BaseEmpty.a5746c24.js";
import { o as onKeyboardShortcut } from "./bundle-main.a22e9d89.js";
import { _ as _export_sfc, u as useScrollOnActive, B as BaseListItemLink } from "./MobileOverlay.6061262e.js";
import "./GenericMountStory.eab1b17e.js";
function pipeline(a, b, c, d) {
  if (a && (b && (a = replace(a, b)), this.matcher && (a = replace(a, this.matcher)), this.stemmer && 1 < a.length && (a = replace(a, this.stemmer)), d && 1 < a.length && (a = collapse(a)), c || "" === c)) {
    const b2 = a.split(c);
    return this.filter ? filter$1(b2, this.filter) : b2;
  }
  return a;
}
const regex_whitespace = /[\p{Z}\p{S}\p{P}\p{C}]+/u;
const regex_normalize = /[\u0300-\u036f]/g;
function normalize(a) {
  return a.normalize && (a = a.normalize("NFD").replace(regex_normalize, "")), a;
}
function replace(a, b) {
  for (let c = 0, d = b.length; c < d && (a = a.replace(b[c], b[c + 1]), !!a); c += 2)
    ;
  return a;
}
function regex(a) {
  return new RegExp(a, "g");
}
function collapse(a) {
  let b = "", c = "";
  for (let d, e = 0, f = a.length; e < f; e++)
    (d = a[e]) !== c && (b += c = d);
  return b;
}
function filter$1(a, b) {
  const c = a.length, d = [];
  for (let e = 0, f = 0; e < c; e++) {
    const c2 = a[e];
    c2 && !b[c2] && (d[f++] = c2);
  }
  return d;
}
const regex_a = regex("[\xE0\xE1\xE2\xE3\xE4\xE5]"), regex_e = regex("[\xE8\xE9\xEA\xEB]"), regex_i = regex("[\xEC\xED\xEE\xEF]"), regex_o = regex("[\xF2\xF3\xF4\xF5\xF6\u0151]"), regex_u = regex("[\xF9\xFA\xFB\xFC\u0171]"), regex_y = regex("[\xFD\u0177\xFF]"), regex_n = regex("\xF1"), regex_c = regex("[\xE7c]"), regex_s = regex("\xDF"), regex_and = regex(" & "), pairs$1 = [regex_a, "a", regex_e, "e", regex_i, "i", regex_o, "o", regex_u, "u", regex_y, "y", regex_n, "n", regex_c, "k", regex_s, "s", regex_and, " and "];
function encode$2(a) {
  return a = "" + a, pipeline.call(this, normalize(a).toLowerCase(), !a.normalize && pairs$1, regex_whitespace, false);
}
const regex_strip = /[^a-z0-9]+/, soundex = { b: "p", v: "f", w: "f", z: "s", x: "s", \u00DF: "s", d: "t", n: "m", c: "k", g: "k", j: "k", q: "k", i: "e", y: "e", u: "o" };
function encode$1(a) {
  a = encode$2.call(this, a).join(" ");
  const b = [];
  if (a) {
    const c = a.split(regex_strip), d = c.length;
    for (let e, f = 0, g = 0; f < d; f++)
      if ((a = c[f]) && (!this.filter || !this.filter[a])) {
        e = a[0];
        let c2 = soundex[e] || e, d2 = c2;
        for (let b2 = 1; b2 < a.length; b2++) {
          e = a[b2];
          const f2 = soundex[e] || e;
          f2 && f2 !== d2 && (c2 += f2, d2 = f2);
        }
        b[g++] = c2;
      }
  }
  return b;
}
var charset = { encode, rtl: false, tokenize: "" };
const regex_ae = regex("ae"), regex_oe = regex("oe"), regex_sh = regex("sh"), regex_th = regex("th"), regex_ph = regex("ph"), regex_pf = regex("pf"), pairs = [regex_ae, "a", regex_oe, "o", regex_sh, "s", regex_th, "t", regex_ph, "f", regex_pf, "f", regex("(?![aeo])h(?![aeo])"), "", regex("(?!^[aeo])h(?!^[aeo])"), ""];
function encode(a, b) {
  return a && (a = encode$1.call(this, a).join(" "), 2 < a.length && (a = replace(a, pairs)), !b && (1 < a.length && (a = collapse(a)), a && (a = a.split(" ")))), a;
}
const filter = ["a", "about", "above", "after", "again", "against", "all", "also", "am", "an", "and", "any", "are", "aren't", "as", "at", "be", "because", "been", "before", "being", "below", "both", "but", "by", "can", "cannot", "can't", "come", "could", "couldn't", "did", "didn't", "do", "does", "doesn't", "doing", "dont", "down", "during", "each", "even", "few", "first", "for", "from", "further", "get", "go", "had", "hadn't", "has", "hasn't", "have", "haven't", "having", "he", "hed", "her", "here", "here's", "hers", "herself", "hes", "him", "himself", "his", "how", "how's", "i", "id", "if", "ill", "im", "in", "into", "is", "isn't", "it", "it's", "itself", "i've", "just", "know", "let's", "like", "make", "me", "more", "most", "mustn't", "my", "myself", "new", "no", "nor", "not", "now", "of", "off", "on", "once", "only", "or", "other", "ought", "our", "our's", "ourselves", "out", "over", "own", "same", "say", "see", "shan't", "she", "she'd", "shell", "shes", "should", "shouldn't", "so", "some", "such", "than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "time", "to", "too", "until", "up", "us", "very", "want", "was", "wasn't", "way", "we", "wed", "well", "were", "weren't", "we've", "what", "what's", "when", "when's", "where", "where's", "which", "while", "who", "whom", "who's", "why", "why's", "will", "with", "won't", "would", "wouldn't", "you", "you'd", "you'll", "your", "you're", "your's", "yourself", "yourselves", "you've"];
const stemmer = { ational: "ate", iveness: "ive", fulness: "ful", ousness: "ous", ization: "ize", tional: "tion", biliti: "ble", icate: "ic", ative: "", alize: "al", iciti: "ic", entli: "ent", ousli: "ous", alism: "al", ation: "ate", aliti: "al", iviti: "ive", ement: "", enci: "ence", anci: "ance", izer: "ize", alli: "al", ator: "ate", logi: "log", ical: "ic", ance: "", ence: "", ness: "", able: "", ible: "", ment: "", eli: "e", bli: "ble", ful: "", ant: "", ent: "", ism: "", ate: "", iti: "", ous: "", ive: "", ize: "", al: "", ou: "", er: "", ic: "" };
const matcher = {};
var language = { filter, stemmer, matcher };
const _hoisted_1$1 = ["data-selected"];
const _hoisted_2$1 = { class: "htw-flex-1" };
const _hoisted_3 = { class: "htw-flex" };
const _hoisted_4 = { class: "htw-ml-auto htw-opacity-40" };
const _hoisted_5 = {
  key: 0,
  class: "htw-flex htw-items-center htw-gap-0.5 htw-opacity-60"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SearchItem",
  props: {
    result: {
      type: Object,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "7333f29c": __props.result.iconColor
    }));
    const el = ref();
    const { selected } = toRefs(props);
    useScrollOnActive(selected, el);
    const router = useRouter();
    onKeyboardShortcut(["enter"], () => {
      if (!props.selected)
        return;
      router.push(props.result.route);
      emit("close");
    });
    const defaultIcons = {
      story: "carbon:cube",
      variant: "carbon:cube"
    };
    const kindLabels = {
      story: "Story",
      variant: "Variant"
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "el",
        ref: el,
        "data-test-id": "search-item",
        "data-selected": unref(selected) ? "" : void 0
      }, [
        createVNode(BaseListItemLink, {
          to: __props.result.route,
          "is-active": unref(selected),
          class: "htw-px-6 htw-py-4 htw-gap-4",
          onNavigate: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
        }, {
          default: withCtx(() => {
            var _a, _b;
            return [
              createVNode(unref(Icon), {
                icon: (_a = __props.result.icon) != null ? _a : defaultIcons[__props.result.kind],
                class: normalizeClass(["htw-w-4 htw-h-4", [
                  !unref(selected) ? [
                    __props.result.iconColor ? "bind-icon-color" : {
                      "htw-text-primary-500": __props.result.kind === "story",
                      "htw-text-gray-500": __props.result.kind === "variant"
                    }
                  ] : []
                ]])
              }, null, 8, ["icon", "class"]),
              createBaseVNode("div", _hoisted_2$1, [
                createBaseVNode("div", _hoisted_3, [
                  createTextVNode(toDisplayString(__props.result.title) + " ", 1),
                  createBaseVNode("span", _hoisted_4, toDisplayString(kindLabels[__props.result.kind]), 1)
                ]),
                ((_b = __props.result.path) == null ? void 0 : _b.length) ? (openBlock(), createElementBlock("div", _hoisted_5, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(__props.result.path, (p, index) => {
                    return openBlock(), createElementBlock("div", {
                      key: index,
                      class: "htw-flex htw-items-center htw-gap-0.5"
                    }, [
                      index > 0 ? (openBlock(), createBlock(unref(Icon), {
                        key: 0,
                        icon: "carbon:chevron-right",
                        class: "htw-w-4 htw-h-4 htw-mt-0.5 htw-opacity-50"
                      })) : createCommentVNode("", true),
                      createBaseVNode("span", null, toDisplayString(p), 1)
                    ]);
                  }), 128))
                ])) : createCommentVNode("", true)
              ])
            ];
          }),
          _: 1
        }, 8, ["to", "is-active"])
      ], 8, _hoisted_1$1);
    };
  }
});
var SearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3fb261e4"]]);
let searchData$1 = { "index": { "reg": '{"0":1,"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1,"8":1,"9":1,"10":1,"11":1,"12":1,"13":1,"14":1,"15":1,"16":1,"17":1,"18":1,"19":1,"20":1,"21":1,"22":1,"23":1,"24":1,"25":1,"26":1,"27":1,"28":1,"29":1,"30":1,"31":1,"32":1,"33":1,"34":1,"35":1,"36":1,"37":1,"38":1,"39":1,"40":1,"41":1,"42":1,"43":1,"44":1,"45":1,"46":1,"47":1,"48":1,"49":1,"50":1,"51":1,"52":1,"53":1,"54":1,"55":1,"56":1,"57":1,"58":1,"59":1,"60":1,"61":1,"62":1,"63":1,"64":1,"65":1,"66":1,"67":1,"68":1,"69":1,"70":1,"71":1,"72":1,"73":1,"74":1,"75":1,"76":1,"77":1,"78":1,"79":1,"80":1,"81":1,"82":1,"83":1,"84":1,"85":1,"86":1,"87":1,"88":1,"89":1,"90":1,"91":1,"92":1,"93":1,"94":1,"95":1,"96":1,"97":1,"98":1,"99":1,"100":1,"101":1,"102":1,"103":1,"104":1,"105":1,"106":1,"107":1,"108":1,"109":1,"110":1,"111":1,"112":1,"113":1,"114":1,"115":1,"116":1,"117":1,"118":1,"119":1,"120":1,"121":1,"122":1,"123":1,"124":1,"125":1,"126":1,"127":1,"128":1,"129":1,"130":1,"131":1,"132":1,"133":1,"134":1,"135":1,"136":1,"137":1,"138":1,"139":1,"140":1,"141":1,"142":1,"143":1,"144":1,"145":1,"146":1,"147":1,"148":1,"149":1,"150":1,"151":1,"152":1,"153":1,"154":1,"155":1,"156":1,"157":1,"158":1,"159":1,"160":1,"161":1,"162":1,"163":1,"164":1,"165":1,"166":1,"167":1,"168":1,"169":1,"170":1,"171":1,"172":1,"173":1,"174":1,"175":1,"176":1,"177":1,"178":1,"179":1,"180":1,"181":1,"182":1,"183":1,"184":1,"185":1,"186":1,"187":1,"188":1,"189":1,"190":1,"191":1,"192":1,"193":1,"194":1,"195":1,"196":1,"197":1,"198":1,"199":1,"200":1,"201":1,"202":1,"203":1}', "text.cfg": '{"doc":0,"opt":1}', "text.map": '[{"p":[0,1,8,9,10,11,12,13,14,15,16,17,18,19,68,69,70,71,72,73,74,75,76,77,101,102,103,104,136,137,138,179,180,181,188,189,190,191,192,193,194],"pa":[0,1,68,69,70,71,72,73,74,75,76,77,101,102,103,104,136,137,138,179,180,181,188,189,190,191,192,193,194],"pak":[0,1],"pake":[0,1],"r":[2,3],"ro":[2,3],"rof":[2,3],"a":[4,5,6,7],"af":[4,5,6,7],"afa":[4,5,6,7],"afat":[4,5,6,7],"afata":[4,5,6,7],"afatar":[4,5,6,7],"po":[8,9,10,11,12,13,14,15,16,17,18,19],"pot":[8,9,10,11,12,13,14,15,16,17,18,19],"poto":[8,9,10,11,12,13,14,15,16,17,18,19],"potom":[8,9,10,11,12,13,14,15,16,17,18,19],"k":[20,21,22,23,24,25,26,27,28,29,30,31,32,78,79,80,81,82,83,84,85,86,139,140,141,142,143,144,145,146,147,148,149,150,151,152,195,196],"ke":[20,21,22,23,24,25,26,27,28,29,83,84,85,86],"kep":[20,21,22,23,24,25,26,27,28,29],"ko":[30,31,32,139,140,141,142,143,144,145,146,147,148,149,150,151,152,195,196],"kor":[30,31,32],"korm":[30,31,32],"korme":[30,31,32],"kormer":[30,31,32],"f":[33,34,35,36,37,38,39,40,41,91,92],"fl":[33,34,35,36,37],"fle":[33,34,35,36,37],"fleo":[33,34,35,36,37],"fleot":[33,34,35,36,37],"fo":[38,39,40,41],"fok":[38,39,40,41],"foko":[38,39,40,41],"fokos":[38,39,40,41],"l":[42,43,44,45,46,158,159,160],"le":[42,43,44,45,46,158,159,160],"lem":[42,43,44,45,46,158,159,160],"lemk":[42,43,44,45,46,158,159,160],"m":[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,96,97,98,99,100,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175],"ma":[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"mar":[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"mark":[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"markt":[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"markto":[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"marktof":[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"marktofm":[47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67],"pam":[68,69,70,71,72,73],"pame":[68,69,70,71,72,73],"pamer":[68,69,70,71,72,73],"pat":[74,75,76,77,136,137,138,188,189,190,191,192,193,194],"patl":[74,75,76,77,136,137,138,188,189,190,191,192,193,194],"patle":[74,75,76,77,136,137,138,188,189,190,191,192,193,194],"ka":[78,79,80,81,82],"kat":[78,79,80,81,82],"kate":[78,79,80,81,82],"katek":[78,79,80,81,82],"kateko":[78,79,80,81,82],"katekor":[78,79,80,81,82],"katekore":[78,79,80,81,82],"kek":[83,84,85,86],"kekp":[83,84,85,86],"kekpo":[83,84,85,86],"kekpos":[83,84,85,86],"t":[87,88,89,90,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,153,154,155,156,157],"te":[87,88,89,90,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"tea":[87,88,89,90],"teal":[87,88,89,90],"tealo":[87,88,89,90],"tealok":[87,88,89,90],"fe":[91,92],"fel":[91,92],"fele":[91,92],"e":[93,94,95,197,198],"em":[93,94,95],"emp":[93,94,95],"empo":[93,94,95],"empot":[93,94,95],"me":[96,97,98,99,100,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175],"met":[96,97,98,99,100,161,162,163,164,165,166,167,168,169],"mete":[96,97,98,99,100,161,162,163,164,165,166,167,168,169],"metea":[96,97,98,99,100,161,162,163,164,165,166,167,168,169],"par":[101,102,103,104,179,180,181],"part":[101,102,103,104,179,180,181],"parte":[101,102,103,104,179,180,181],"partek":[101,102,103,104,179,180,181],"parteke":[101,102,103,104,179,180,181],"partekep":[101,102,103,104,179,180,181],"partekepa":[101,102,103,104,179,180,181],"partekepat":[101,102,103,104,179,180,181],"partekepate":[101,102,103,104,179,180,181],"partekepateo":[101,102,103,104,179,180,181],"partekepateom":[101,102,103,104,179,180,181],"to":[105,106,107],"tok":[105,106,107],"tokl":[105,106,107],"tokle":[105,106,107],"tel":[108,109,110,111,112,113,114,115,116,117],"tele":[108,109,110,111,112,113,114,115,116,117],"tep":[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"tepo":[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"tepok":[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"tepokr":[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"tepokra":[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"tepokraf":[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"tepokrafe":[118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135],"kom":[139,140,141,142,143,144,145,146,147,148,149,150,151,152,195,196],"komp":[139,140,141,142,143],"kompo":[139,140,141,142,143],"kompop":[139,140,141,142,143],"kompopo":[139,140,141,142,143],"kompopos":[139,140,141,142,143],"kome":[144,145,146,147,148,149,150,151,152,195,196],"komem":[144,145,146,147,148,149,150,151,152,195,196],"komemt":[144,145,146,147,148,149,150,151,152,195,196],"ta":[153,154,155],"tat":[153,154,155],"tate":[153,154,155],"tr":[156,157],"tro":[156,157],"trop":[156,157],"tropt":[156,157],"tropto":[156,157],"troptof":[156,157],"troptofm":[156,157],"mef":[170,171,172,173,174,175],"mefs":[170,171,172,173,174,175],"o":[176,177,178,186,187,199,200,201],"op":[176,177,178],"opt":[176,177,178],"opte":[176,177,178],"opteo":[176,177,178],"opteom":[176,177,178],"s":[182,183,184,185,202,203],"se":[182,183,184,185],"sem":[182,183,184,185],"semp":[182,183,184,185],"sempl":[182,183,184,185],"semple":[182,183,184,185],"os":[186,187],"ose":[186,187],"oser":[186,187],"ea":[197,198],"eat":[197,198],"eate":[197,198],"eater":[197,198],"of":[199,200,201],"ofe":[199,200,201],"ofer":[199,200,201],"oferf":[199,200,201],"oferfe":[199,200,201],"oferfef":[199,200,201],"so":[202,203],"sop":[202,203],"sopm":[202,203],"sopme":[202,203],"sopmes":[202,203],"sopmese":[202,203],"sopmeseo":[202,203],"sopmeseom":[202,203]},{"f":[0,1,23,24,73,89,95,98,190,191,192],"fo":[0,1,23,73,190,191,192],"for":[0,1,190,191,192],"form":[0,1,190,191,192],"s":[2,3,35,36,37,59,70,71,72,74,75,76,77,85,86,101,102,103,104,105,106,107,133,176,177,178,195,196,199,200,201],"se":[2,3,85,86,133,176,177,178,195,196,199,200,201],"sek":[2,3,133,195,196,199,200,201],"sekt":[2,3,195,196,199,200,201],"sekte":[2,3,195,196,199,200,201],"sekteo":[2,3,195,196,199,200,201],"sekteom":[2,3,195,196,199,200,201],"p":[5,21,22,28,49,51,54,55,84,88,90,94,97,108,109,110,111,112,113,114,115,116,117,130,140,153,154,155,157],"pa":[5,21,28,54,84,88,94,97,108,109,110,111,112,113,114,115,116,117,140,157],"pas":[5,69,84,88,94,97,140,157],"pase":[5,69,84,88,94,97,140,157],"pasek":[5,69,84,88,94,97,140,157],"e":[6,7,39,50,62,63,64,65,66,67,119,120,121,122,123,124,125,150,151,152,158,159,160,166,167,168,169,193,194],"ek":[6],"ekl":[6],"ekle":[6],"eklek":[6],"eklekt":[6],"eklekte":[6],"eklektet":[6],"er":[7,166,167,168,169,193,194],"ero":[7,166,167,168,169,193,194],"pat":[21],"patl":[21],"patle":[21],"pl":[22,90],"pla":[22,90],"plak":[22,90],"plakr":[22],"plakro":[22],"plakrom":[22],"plakromt":[22],"fot":[23],"fote":[23],"fotem":[23],"fotemk":[23],"fe":[24,89,95,98],"fem":[24],"feme":[24],"femes":[24],"femese":[24],"femeset":[24],"t":[25,26,27,34,60,61,91,92,145,147,148,182,183,184,185,186,187,188,189,198,202,203],"ta":[25,26,27,182,183,184,185],"tas":[25,26,27],"par":[28,54],"part":[28],"parte":[28],"partek":[28],"parteke":[28],"partekep":[28],"partekepa":[28],"partekepat":[28],"partekepate":[28],"partekepateo":[28],"partekepateom":[28],"ko":[29,56],"kom":[29],"kome":[29],"komem":[29],"komemt":[29],"komemts":[29],"r":[30,31,32,131],"re":[30,31,32,131],"rep":[30,31,32],"repo":[30,31,32],"repom":[30,31,32],"te":[34,60,145,147,148,186,187,188,189,198,202,203],"tef":[34,198],"tefa":[34,198],"tefao":[34,198],"tefaol":[34,198],"tefaolt":[34,198],"st":[35,36,37,59,70,71,72],"sta":[35,36,37,70,71,72],"stat":[35,36,37,70,71,72],"state":[35,36,37,70,71,72],"el":[39],"ele":[39],"elem":[39],"eleme":[39],"elemem":[39],"elememt":[39],"a":[40,149],"al":[40],"alr":[40],"alre":[40],"alrea":[40],"alreat":[40],"alreate":[40],"l":[41,57,58,132],"le":[41,57,58,132],"lem":[41,57,58],"lemk":[41,57,58],"mo":[48,146],"mor":[48],"morm":[48],"morma":[48],"mormal":[48],"po":[49,51,55,130],"pol":[49,51,130],"polt":[49,51,130],"et":[50,150],"eta":[50],"etal":[50],"etale":[50],"etalek":[50],"o":[52,53],"om":[52],"omo":[52],"omor":[52],"omort":[52],"omorte":[52],"omorter":[52],"omortere":[52],"omorteret":[52],"or":[53],"ort":[53],"orte":[53],"orter":[53],"ortere":[53],"orteret":[53],"para":[54],"parap":[54],"parapk":[54],"parapkr":[54],"parapkra":[54],"parapkraf":[54],"parapkrafs":[54],"pok":[55],"poko":[55],"pokot":[55],"pokote":[55],"k":[56,99,100,134,135,136,137,138,161,162,163,164,165,170,171,172,173,174,175,179,180,181],"kot":[56],"kote":[56],"lemke":[57],"lemkef":[57],"lemkefe":[57],"str":[59],"stre":[59],"strek":[59],"streke":[59],"streket":[59],"streketr":[59],"streketro":[59],"streketrok":[59],"tep":[60],"tepo":[60],"tepok":[60],"tepokr":[60],"tepokra":[60],"tepokraf":[60],"tepokrafe":[60],"tepokrafer":[60],"tm":[61],"tml":[61],"ea":[62,63,64,65,66,67,119,120,121,122,123,124,125],"eat":[62,63,64,65,66,67,119,120,121,122,123,124,125],"eate":[62,63,64,65,66,67,119,120,121,122,123,124],"eatem":[62,63,64,65,66,67,119,120,121,122,123,124],"eatemk":[62,63,64,65,66,67,119,120,121,122,123,124],"fol":[73],"fols":[73],"folsk":[73],"folskr":[73],"folskre":[73],"folskrem":[73],"so":[74,75,76,77,101,102,103,104],"som":[74,75,76,77,101,102,103,104],"soma":[74,75,76,77,101,102,103,104],"somar":[74,75,76,77,101,102,103,104],"somare":[74,75,76,77,101,102,103,104],"ke":[78,79,80,81,82,134,135],"kep":[78,79,80,81,82],"ses":[85,86],"sese":[85,86],"fet":[89,95,98],"plake":[90],"plakeo":[90],"plakeol":[90],"plakeolt":[90],"plakeolte":[90],"plakeolter":[90],"plakeolters":[90],"tr":[91,92],"tro":[91,92],"trop":[91,92],"trops":[91,92],"tropso":[91,92],"tropsom":[91,92],"tropsome":[91,92],"fete":[98],"feteo":[98],"ka":[99,100,136,137,138,141,161,162,163,164,165,170,171,172,173,174,175,179,180,181],"kar":[99,100,136,137,138,161,162,163,164,165,170,171,172,173,174,175,179,180,181],"kart":[99,100,136,137,138,170,171,172,173,174,175,179,180,181],"sf":[105,106,107],"sfe":[105,106,107],"sfet":[105,106,107],"sfetk":[105,106,107],"pak":[108,109,110,111,112,113,114,115,116,117],"pakr":[108,109,110,111,112,113,114,115,116,117],"pakro":[108,109,110,111,112,113,114,115,116,117],"pakrom":[108,109,110,111,112,113,114,115,116,117],"pakromt":[108,109,110,111,112,113,114,115,116,117],"eatl":[125],"eatle":[125],"eatlem":[125],"eatleme":[125],"tes":[126,127,128,129,145,147,148,186,187],"test":[126,127,128,129,145,147,148],"rek":[131],"reko":[131],"rekol":[131],"rekola":[131],"rekolar":[131],"lek":[132],"lekt":[132],"seko":[133],"sekom":[133],"sekomt":[133],"sekomta":[133],"sekomtar":[133],"sekomtare":[133],"kem":[134,135],"kemt":[134,135],"kemte":[134,135],"kemter":[134,135],"kam":[141],"kos":[142,143],"kost":[142,143],"kosto":[142,143],"kostom":[142,143],"m":[146],"mol":[146],"molt":[146],"molte":[146],"moltel":[146],"moltele":[146],"moltelem":[146],"molteleme":[146],"ete":[150],"etet":[150],"eteta":[150],"etetap":[150],"etetapl":[150],"etetaple":[150],"em":[151,152,158,159,160],"emp":[151,152,158,159,160],"empo":[151,152,158,159,160],"empot":[151,152,158,159,160],"pe":[153,154,155],"pek":[153,154,155],"peke":[153,154,155],"peker":[153,154,155],"karo":[161,162,163,164,165],"karos":[161,162,163,164,165],"karose":[161,162,163,164,165],"karosel":[161,162,163,164,165],"sel":[176,177,178],"sele":[176,177,178],"selek":[176,177,178],"selekt":[176,177,178],"selekto":[176,177,178],"selektor":[176,177,178],"tat":[182,183,184,185],"tate":[182,183,184,185],"tesp":[186,187],"tespl":[186,187],"tespla":[186,187],"tet":[188,189,202,203],"teta":[188,189,202,203],"tetal":[188,189,202,203]},{"0":[85],"1":[62,86,119],"2":[63,120],"3":[64,115,121,160],"4":[65,122],"5":[66,123],"6":[67,124],"fr":[0,1],"fra":[0,1],"frap":[0,1],"frape":[0,1],"fraper":[0,1],"p":[3,79,95,100,106,159,177,182,183,184,185,187,200],"pa":[3,100,106,154,155,159,177,187,200],"pas":[3,75,100,102,106,154,159,177,187],"pase":[3,75,100,102,106,154,159,177,187],"pasek":[3,75,100,102,106,154,159,177,187],"pr":[9,10,11,18,19],"pre":[9,10,11,18,19],"prem":[9,10,11,18,19],"prema":[9,10,11,18,19],"premar":[9,10,11,18,19],"premare":[9,10,11,18,19],"s":[12,13,14,142,143,193,194],"se":[12,13,14,142,143,193,194],"sek":[12,13,14,193,194],"seko":[12,13,14],"sekom":[12,13,14],"sekomt":[12,13,14],"sekomta":[12,13,14],"sekomtar":[12,13,14],"sekomtare":[12,13,14],"t":[15,16,17,48,146,152,171,172,180],"te":[15,16,17,48,146,152,171,172,180],"ter":[15,16,17],"tert":[15,16,17],"terte":[15,16,17],"tertea":[15,16,17],"tertear":[15,16,17],"terteare":[15,16,17],"l":[25,26,27,52,53,127,181],"le":[25,26,27,52,53],"lef":[25,26,27],"left":[25,26,27],"f":[30,31,32,44,61,71,82,107,162,163,164,165,167,168,169],"fo":[30,31,32],"fot":[30,31,32],"fote":[30,31,32],"fotem":[30,31,32],"fotemk":[30,31,32],"e":[35,36,37,45,46,51,72,76,77,81,97,103,109,113,114,128,129,174,175,192,196],"ek":[35,36,37,113],"eko":[35,36,37,113],"ekom":[35,36,37,113],"fokosa":[40,41],"fokosap":[40,41],"fokosapl":[40,41],"fokosaple":[40,41],"fe":[44,82,107,162,163,164,165,167,168,169],"fet":[44,82,107,162,163,164,165,167,168,169],"es":[45,46,128,196],"est":[45,46,128],"este":[45,46],"ester":[45,46],"esterm":[45,46],"esterma":[45,46],"estermal":[45,46],"tes":[48,146],"test":[48,146],"et":[51,192],"eta":[51],"etal":[51],"etale":[51],"etalek":[51],"les":[52,53],"lest":[52,53],"ft":[61],"ftf":[61],"so":[70],"sok":[70],"soke":[70],"sokes":[70],"fa":[71],"far":[71],"farm":[71],"farme":[71],"farmem":[71],"farmemk":[71],"er":[72,109,174,175],"ero":[72,109,174,175],"eror":[72],"em":[76,77,97,103],"pe":[79,95,112,182,183,184,185],"pem":[79,112],"pemk":[79,112],"pemke":[79,112],"pemkel":[79,112],"o":[80,111],"os":[80,111],"ose":[80,111],"oser":[80,111],"el":[81,114,129],"elo":[81,114],"elos":[81,114],"elost":[81,114],"elostr":[81,114],"elostra":[81,114],"elostrat":[81,114],"elostrate":[81,114],"elostrateo":[81,114],"elostrateom":[81,114],"elostrateoms":[81,114],"a":[89,90,116],"ak":[89],"akt":[89],"akte":[89],"akteo":[89],"akteom":[89],"akteoms":[89],"as":[90],"ase":[90],"aset":[90],"asete":[90],"k":[91,92,117,191],"ko":[91,92],"kom":[91,92],"komt":[91,92],"komte":[91,92],"komtem":[91,92],"komtemt":[91,92],"pef":[95],"pefo":[95],"pefor":[95],"pefore":[95],"ema":[97],"emak":[97],"emake":[97],"sr":[104],"sre":[104],"srem":[104],"sremk":[104],"ta":[110],"tar":[110],"tark":[110],"ekoms":[113],"3t":[115],"am":[116],"ame":[116],"amem":[116],"amema":[116],"amemat":[116],"amemate":[116],"amemateo":[116],"amemateom":[116],"kr":[117,141,191],"kra":[117],"kraf":[117],"krafe":[117],"krafek":[117],"krafeks":[117],"la":[127],"lar":[127],"lark":[127],"larke":[127],"estr":[128],"estra":[128],"ele":[129],"elep":[129],"eleps":[129],"elepse":[129],"elepses":[129],"kre":[141,191],"krea":[141,191],"kreat":[141,191],"kreate":[141,191],"sel":[142,143],"sele":[142,143],"selek":[142,143],"selekt":[142,143],"selekte":[142,143],"selektet":[142,143],"r":[149],"re":[149],"rep":[149],"repl":[149],"reple":[149],"tef":[152],"tefa":[152],"tefao":[152],"tefaol":[152],"tefaolt":[152],"pat":[155,200],"patl":[155,200],"patle":[155,200],"tem":[171,172],"teme":[171,172],"lo":[181],"lof":[181],"pek":[182,183,184,185],"peke":[182,183,184,185],"peker":[182,183,184,185],"tea":[188,189,202,203],"teal":[188,189,202,203],"tealo":[188,189,202,203],"tealok":[188,189,202,203],"ete":[192],"etet":[192],"sekt":[193,194],"sekte":[193,194],"sekteo":[193,194],"sekteom":[193,194],"esa":[196],"esam":[196],"esamp":[196],"esampl":[196],"esample":[196],"patles":[200],"m":[201],"me":[201],"mef":[201],"mefs":[201]},{"1":[162,165,167],"2":[138,163,168],"3":[164,169],"5":[86],"6":[85],"pas":[1,92,183,189,194,203],"pase":[1,92,183,189,194,203],"pasek":[1,92,183,189,194,203],"t":[10,13,19,75],"te":[10,13,19,75],"tes":[10,13,16,19],"tesa":[10,13,16,19],"tesap":[10,13,16,19],"tesapl":[10,13,16,19],"tesaple":[10,13,16,19],"tesaplet":[10,13,16,19],"a":[11,14,17,95],"ak":[11,14,17],"akt":[11,14,17],"akte":[11,14,17],"aktef":[11,14,17],"aktefa":[11,14,17],"aktefat":[11,14,17],"aktefate":[11,14,17],"aktefatet":[11,14,17],"s":[18,30,31,32,171,172],"sk":[18],"ska":[18],"skal":[18],"skale":[18],"f":[26,27,46,147,148,154],"fe":[26,27,46,147,148,154,192],"fet":[26,27,46,147,148,154],"sm":[30,31,32],"sma":[30,31,32],"smal":[30,31,32],"k":[36,76,77,90,103,107],"kl":[36],"klo":[36],"klos":[36],"klose":[36],"kloset":[36],"o":[37,141,142,143,173],"op":[37,141,142,143,173],"ope":[37],"opem":[37],"e":[44,80,104,111,191],"ek":[44,104],"eko":[44,104],"ekom":[44,104],"tep":[75],"tepo":[75],"tepos":[75],"tepose":[75],"teposet":[75],"ka":[76,77,103],"kar":[76,77,103],"kart":[76,77,103],"em":[80,111,191],"emt":[80,111],"emte":[80,111],"emter":[80,111],"emterf":[80,111],"emterfa":[80,111],"emterfak":[80,111],"emterfake":[80,111],"ko":[82,90,107],"kos":[82,107],"kost":[82,107],"kosto":[82,107],"kostom":[82,107],"kom":[90],"komt":[90],"komte":[90],"komtem":[90],"komtemt":[90],"p":[92,203],"pa":[92,183,203],"am":[95],"amt":[95],"ekoms":[104],"l":[128],"la":[128],"lar":[128],"lark":[128],"larke":[128],"m":[137,180],"ma":[137],"mat":[137],"mats":[137],"matse":[137],"opt":[141,142,143],"opte":[141,142,143],"opteo":[141,142,143],"opteom":[141,142,143],"opteoms":[142,143],"lemks":[160],"so":[171,172],"sok":[171,172],"soke":[171,172],"sokes":[171,172],"sokest":[171,172],"sokeste":[171,172],"sokesteo":[171,172],"sokesteom":[171,172],"opl":[173],"oplo":[173],"oploa":[173],"oploat":[173],"erk":[174,175],"erko":[174,175],"sl":[178],"slo":[178],"slot":[178],"mo":[180],"mom":[180],"po":[181],"pol":[181],"pole":[181],"pr":[184],"pre":[184],"pret":[184],"prete":[184],"pretef":[184],"pretefe":[184],"pretefem":[184],"pretefeme":[184],"pretefemet":[184],"emp":[191],"empt":[191],"empte":[191],"fel":[192],"fele":[192],"felet":[192]},{"1":[18],"a":[19,147,181,184],"am":[19],"amt":[19],"fa":[26,27],"far":[26,27],"farm":[26,27],"farme":[26,27],"farmem":[26,27],"farmemk":[26,27],"ek":[46],"eko":[46],"ekom":[46],"f":[76,77,171,172,178],"fo":[76],"fot":[76],"fote":[76],"fotem":[76],"fotemk":[76],"fe":[77,171,172,178],"fem":[77],"feme":[77],"femes":[77],"femese":[77],"femeset":[77],"l":[82],"la":[82],"lap":[82],"lape":[82],"lapel":[82],"af":[95],"aft":[95],"afte":[95],"after":[95],"em":[104,162,163,164,165,167,168,169],"e":[107,162,163,164,165,173],"et":[107],"ete":[107],"etem":[107],"r":[148,155],"re":[148],"ref":[148],"refe":[148],"refer":[148],"refere":[148],"referem":[148],"referemk":[148],"referemke":[148],"referemkes":[148],"pr":[154],"pre":[154],"pret":[154],"prete":[154],"pretef":[154],"pretefe":[154],"pretefem":[154],"pretefeme":[154],"pretefemet":[154],"ra":[155],"ram":[155],"ramk":[155],"ramke":[155],"ema":[162,163,164,165,167,168,169],"emak":[162,163,164,165,167,168,169],"emake":[162,163,164,165,167,168,169],"emakes":[163,164,168,169],"fet":[171,172,178],"feto":[171],"fetot":[171],"er":[173],"erk":[173],"erko":[173],"s":[174,175],"se":[174,175],"seo":[174,175],"seom":[174,175],"ar":[181],"art":[181],"at":[184],"o":[185],"om":[185],"oml":[185],"omle":[185]},{"5":[18],"5r":[18],"5re":[18],"5rem":[18],"ak":[19],"akt":[19],"akte":[19],"aktef":[19],"aktefa":[19],"aktefat":[19],"aktefate":[19],"aktefatet":[19],"k":[95,104,178],"ko":[95,181],"kom":[95],"komt":[95],"komte":[95],"komtem":[95],"komtemt":[95],"ka":[104,178],"kar":[104],"kart":[104],"r":[147],"re":[147],"ref":[147],"refe":[147],"refer":[147],"refere":[147],"referem":[147],"referemk":[147],"referemke":[147],"a":[165],"am":[165],"amt":[165],"e":[171,172],"em":[171,172],"ema":[171,172],"emak":[171,172],"emake":[171,172],"s":[173],"se":[173],"seo":[173],"seom":[173],"o":[174],"os":[174],"t":[175],"tr":[175],"tra":[175],"traf":[175],"trafe":[175],"trafem":[175],"trafemk":[175],"kat":[178],"kate":[178],"katek":[178],"kateko":[178],"katekor":[178],"katekore":[178],"kol":[181],"kolt":[181],"koltf":[181],"koltfe":[181],"koltfes":[181],"m":[184],"mo":[184],"mof":[184]},{"kr":[171],"kra":[171],"krat":[171],"krate":[171],"kratem":[171],"kratemt":[171],"kratemts":[171],"t":[174],"te":[174],"tes":[174],"tese":[174],"tesek":[174],"tesekm":[174],"ke":[178],"kep":[178],"keps":[178]},{"p":[32],"pe":[32],"pek":[32],"fete":[165],"feteo":[165]},{}]', "text.ctx": "[{}]" }, "idMap": { "0": { "id": "layouts-pageformwrapper-story-vue", "kind": "story" }, "1": { "id": "layouts-pageformwrapper-story-vue:layouts-pageformwrapper-story-vue-0", "kind": "variant" }, "2": { "id": "layouts-rowsectionlayout-story-vue", "kind": "story" }, "3": { "id": "layouts-rowsectionlayout-story-vue:layouts-rowsectionlayout-story-vue-0", "kind": "variant" }, "4": { "id": "components-atoms-avatar-story-vue", "kind": "story" }, "5": { "id": "components-atoms-avatar-story-vue:components-atoms-avatar-story-vue-0", "kind": "variant" }, "6": { "id": "components-atoms-avatar-story-vue:components-atoms-avatar-story-vue-1", "kind": "variant" }, "7": { "id": "components-atoms-avatar-story-vue:components-atoms-avatar-story-vue-2", "kind": "variant" }, "8": { "id": "components-atoms-button-story-vue", "kind": "story" }, "9": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-0", "kind": "variant" }, "10": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-1", "kind": "variant" }, "11": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-2", "kind": "variant" }, "12": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-3", "kind": "variant" }, "13": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-4", "kind": "variant" }, "14": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-5", "kind": "variant" }, "15": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-6", "kind": "variant" }, "16": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-7", "kind": "variant" }, "17": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-8", "kind": "variant" }, "18": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-9", "kind": "variant" }, "19": { "id": "components-atoms-button-story-vue:components-atoms-button-story-vue-10", "kind": "variant" }, "20": { "id": "components-atoms-chip-story-vue", "kind": "story" }, "21": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-0", "kind": "variant" }, "22": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-1", "kind": "variant" }, "23": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-2", "kind": "variant" }, "24": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-3", "kind": "variant" }, "25": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-4", "kind": "variant" }, "26": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-5", "kind": "variant" }, "27": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-6", "kind": "variant" }, "28": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-7", "kind": "variant" }, "29": { "id": "components-atoms-chip-story-vue:components-atoms-chip-story-vue-8", "kind": "variant" }, "30": { "id": "components-atoms-cornerribbon-story-vue", "kind": "story" }, "31": { "id": "components-atoms-cornerribbon-story-vue:components-atoms-cornerribbon-story-vue-0", "kind": "variant" }, "32": { "id": "components-atoms-cornerribbon-story-vue:components-atoms-cornerribbon-story-vue-1", "kind": "variant" }, "33": { "id": "components-atoms-flyout-story-vue", "kind": "story" }, "34": { "id": "components-atoms-flyout-story-vue:components-atoms-flyout-story-vue-0", "kind": "variant" }, "35": { "id": "components-atoms-flyoutstateicon-story-vue", "kind": "story" }, "36": { "id": "components-atoms-flyoutstateicon-story-vue:components-atoms-flyoutstateicon-story-vue-0", "kind": "variant" }, "37": { "id": "components-atoms-flyoutstateicon-story-vue:components-atoms-flyoutstateicon-story-vue-1", "kind": "variant" }, "38": { "id": "components-atoms-focus-story-vue", "kind": "story" }, "39": { "id": "components-atoms-focus-story-vue:components-atoms-focus-story-vue-0", "kind": "variant" }, "40": { "id": "components-atoms-focus-story-vue:components-atoms-focus-story-vue-1", "kind": "variant" }, "41": { "id": "components-atoms-focus-story-vue:components-atoms-focus-story-vue-2", "kind": "variant" }, "42": { "id": "components-atoms-link-story-vue", "kind": "story" }, "43": { "id": "components-atoms-link-story-vue:components-atoms-link-story-vue-0", "kind": "variant" }, "44": { "id": "components-atoms-link-story-vue:components-atoms-link-story-vue-1", "kind": "variant" }, "45": { "id": "components-atoms-link-story-vue:components-atoms-link-story-vue-2", "kind": "variant" }, "46": { "id": "components-atoms-link-story-vue:components-atoms-link-story-vue-3", "kind": "variant" }, "47": { "id": "components-atoms-markdown-story-vue", "kind": "story" }, "48": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-0", "kind": "variant" }, "49": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-1", "kind": "variant" }, "50": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-2", "kind": "variant" }, "51": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-3", "kind": "variant" }, "52": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-4", "kind": "variant" }, "53": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-5", "kind": "variant" }, "54": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-6", "kind": "variant" }, "55": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-7", "kind": "variant" }, "56": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-8", "kind": "variant" }, "57": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-9", "kind": "variant" }, "58": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-10", "kind": "variant" }, "59": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-11", "kind": "variant" }, "60": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-12", "kind": "variant" }, "61": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-13", "kind": "variant" }, "62": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-14", "kind": "variant" }, "63": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-15", "kind": "variant" }, "64": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-16", "kind": "variant" }, "65": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-17", "kind": "variant" }, "66": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-18", "kind": "variant" }, "67": { "id": "components-atoms-markdown-story-vue:components-atoms-markdown-story-vue-19", "kind": "variant" }, "68": { "id": "components-atoms-pwbanner-story-vue", "kind": "story" }, "69": { "id": "components-atoms-pwbanner-story-vue:components-atoms-pwbanner-story-vue-0", "kind": "variant" }, "70": { "id": "components-atoms-pwbanner-story-vue:components-atoms-pwbanner-story-vue-1", "kind": "variant" }, "71": { "id": "components-atoms-pwbanner-story-vue:components-atoms-pwbanner-story-vue-2", "kind": "variant" }, "72": { "id": "components-atoms-pwbanner-story-vue:components-atoms-pwbanner-story-vue-3", "kind": "variant" }, "73": { "id": "components-atoms-pwbanner-story-vue:components-atoms-pwbanner-story-vue-4", "kind": "variant" }, "74": { "id": "components-atoms-pwbattlesummary-story-vue", "kind": "story" }, "75": { "id": "components-atoms-pwbattlesummary-story-vue:components-atoms-pwbattlesummary-story-vue-0", "kind": "variant" }, "76": { "id": "components-atoms-pwbattlesummary-story-vue:components-atoms-pwbattlesummary-story-vue-1", "kind": "variant" }, "77": { "id": "components-atoms-pwbattlesummary-story-vue:components-atoms-pwbattlesummary-story-vue-2", "kind": "variant" }, "78": { "id": "components-atoms-pwcategoriechip-story-vue", "kind": "story" }, "79": { "id": "components-atoms-pwcategoriechip-story-vue:components-atoms-pwcategoriechip-story-vue-0", "kind": "variant" }, "80": { "id": "components-atoms-pwcategoriechip-story-vue:components-atoms-pwcategoriechip-story-vue-1", "kind": "variant" }, "81": { "id": "components-atoms-pwcategoriechip-story-vue:components-atoms-pwcategoriechip-story-vue-2", "kind": "variant" }, "82": { "id": "components-atoms-pwcategoriechip-story-vue:components-atoms-pwcategoriechip-story-vue-3", "kind": "variant" }, "83": { "id": "components-atoms-pwcheckbox-story-vue", "kind": "story" }, "84": { "id": "components-atoms-pwcheckbox-story-vue:components-atoms-pwcheckbox-story-vue-0", "kind": "variant" }, "85": { "id": "components-atoms-pwcheckbox-story-vue:components-atoms-pwcheckbox-story-vue-1", "kind": "variant" }, "86": { "id": "components-atoms-pwcheckbox-story-vue:components-atoms-pwcheckbox-story-vue-2", "kind": "variant" }, "87": { "id": "components-atoms-pwdialog-story-vue", "kind": "story" }, "88": { "id": "components-atoms-pwdialog-story-vue:components-atoms-pwdialog-story-vue-0", "kind": "variant" }, "89": { "id": "components-atoms-pwdialog-story-vue:components-atoms-pwdialog-story-vue-1", "kind": "variant" }, "90": { "id": "components-atoms-pwdialog-story-vue:components-atoms-pwdialog-story-vue-2", "kind": "variant" }, "91": { "id": "components-atoms-pwfiledropzonecontent-story-vue", "kind": "story" }, "92": { "id": "components-atoms-pwfiledropzonecontent-story-vue:components-atoms-pwfiledropzonecontent-story-vue-0", "kind": "variant" }, "93": { "id": "components-atoms-pwinput-story-vue", "kind": "story" }, "94": { "id": "components-atoms-pwinput-story-vue:components-atoms-pwinput-story-vue-0", "kind": "variant" }, "95": { "id": "components-atoms-pwinput-story-vue:components-atoms-pwinput-story-vue-1", "kind": "variant" }, "96": { "id": "components-atoms-pwmedia-story-vue", "kind": "story" }, "97": { "id": "components-atoms-pwmedia-story-vue:components-atoms-pwmedia-story-vue-0", "kind": "variant" }, "98": { "id": "components-atoms-pwmedia-story-vue:components-atoms-pwmedia-story-vue-1", "kind": "variant" }, "99": { "id": "components-atoms-pwmediacard-story-vue", "kind": "story" }, "100": { "id": "components-atoms-pwmediacard-story-vue:components-atoms-pwmediacard-story-vue-0", "kind": "variant" }, "101": { "id": "components-atoms-pwparticipationsummary-story-vue", "kind": "story" }, "102": { "id": "components-atoms-pwparticipationsummary-story-vue:components-atoms-pwparticipationsummary-story-vue-0", "kind": "variant" }, "103": { "id": "components-atoms-pwparticipationsummary-story-vue:components-atoms-pwparticipationsummary-story-vue-1", "kind": "variant" }, "104": { "id": "components-atoms-pwparticipationsummary-story-vue:components-atoms-pwparticipationsummary-story-vue-2", "kind": "variant" }, "105": { "id": "components-atoms-pwtoggleswitch-story-vue", "kind": "story" }, "106": { "id": "components-atoms-pwtoggleswitch-story-vue:components-atoms-pwtoggleswitch-story-vue-0", "kind": "variant" }, "107": { "id": "components-atoms-pwtoggleswitch-story-vue:components-atoms-pwtoggleswitch-story-vue-1", "kind": "variant" }, "108": { "id": "components-atoms-tilebackground-story-vue", "kind": "story" }, "109": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-0", "kind": "variant" }, "110": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-1", "kind": "variant" }, "111": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-2", "kind": "variant" }, "112": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-3", "kind": "variant" }, "113": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-4", "kind": "variant" }, "114": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-5", "kind": "variant" }, "115": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-6", "kind": "variant" }, "116": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-7", "kind": "variant" }, "117": { "id": "components-atoms-tilebackground-story-vue:components-atoms-tilebackground-story-vue-8", "kind": "variant" }, "118": { "id": "components-atoms-typography-story-vue", "kind": "story" }, "119": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-0", "kind": "variant" }, "120": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-1", "kind": "variant" }, "121": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-2", "kind": "variant" }, "122": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-3", "kind": "variant" }, "123": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-4", "kind": "variant" }, "124": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-5", "kind": "variant" }, "125": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-6", "kind": "variant" }, "126": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-7", "kind": "variant" }, "127": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-8", "kind": "variant" }, "128": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-9", "kind": "variant" }, "129": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-10", "kind": "variant" }, "130": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-11", "kind": "variant" }, "131": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-12", "kind": "variant" }, "132": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-13", "kind": "variant" }, "133": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-14", "kind": "variant" }, "134": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-15", "kind": "variant" }, "135": { "id": "components-atoms-typography-story-vue:components-atoms-typography-story-vue-16", "kind": "variant" }, "136": { "id": "components-molecules-pwbattlecard-story-vue", "kind": "story" }, "137": { "id": "components-molecules-pwbattlecard-story-vue:components-molecules-pwbattlecard-story-vue-0", "kind": "variant" }, "138": { "id": "components-molecules-pwbattlecard-story-vue:components-molecules-pwbattlecard-story-vue-1", "kind": "variant" }, "139": { "id": "components-molecules-pwcombobox-story-vue", "kind": "story" }, "140": { "id": "components-molecules-pwcombobox-story-vue:components-molecules-pwcombobox-story-vue-0", "kind": "variant" }, "141": { "id": "components-molecules-pwcombobox-story-vue:components-molecules-pwcombobox-story-vue-1", "kind": "variant" }, "142": { "id": "components-molecules-pwcombobox-story-vue:components-molecules-pwcombobox-story-vue-2", "kind": "variant" }, "143": { "id": "components-molecules-pwcombobox-story-vue:components-molecules-pwcombobox-story-vue-3", "kind": "variant" }, "144": { "id": "components-molecules-pwcomment-story-vue", "kind": "story" }, "145": { "id": "components-molecules-pwcomment-story-vue:components-molecules-pwcomment-story-vue-0", "kind": "variant" }, "146": { "id": "components-molecules-pwcomment-story-vue:components-molecules-pwcomment-story-vue-1", "kind": "variant" }, "147": { "id": "components-molecules-pwcomment-story-vue:components-molecules-pwcomment-story-vue-2", "kind": "variant" }, "148": { "id": "components-molecules-pwcomment-story-vue:components-molecules-pwcomment-story-vue-3", "kind": "variant" }, "149": { "id": "components-molecules-pwcomment-story-vue:components-molecules-pwcomment-story-vue-4", "kind": "variant" }, "150": { "id": "components-molecules-pwcomment-story-vue:components-molecules-pwcomment-story-vue-5", "kind": "variant" }, "151": { "id": "components-molecules-pwcommentinput-story-vue", "kind": "story" }, "152": { "id": "components-molecules-pwcommentinput-story-vue:components-molecules-pwcommentinput-story-vue-0", "kind": "variant" }, "153": { "id": "components-molecules-pwdatepicker-story-vue", "kind": "story" }, "154": { "id": "components-molecules-pwdatepicker-story-vue:components-molecules-pwdatepicker-story-vue-0", "kind": "variant" }, "155": { "id": "components-molecules-pwdatepicker-story-vue:components-molecules-pwdatepicker-story-vue-1", "kind": "variant" }, "156": { "id": "components-molecules-pwdropdown-story-vue", "kind": "story" }, "157": { "id": "components-molecules-pwdropdown-story-vue:components-molecules-pwdropdown-story-vue-0", "kind": "variant" }, "158": { "id": "components-molecules-pwlinkinput-story-vue", "kind": "story" }, "159": { "id": "components-molecules-pwlinkinput-story-vue:components-molecules-pwlinkinput-story-vue-0", "kind": "variant" }, "160": { "id": "components-molecules-pwlinkinput-story-vue:components-molecules-pwlinkinput-story-vue-1", "kind": "variant" }, "161": { "id": "components-molecules-pwmediacarousel-story-vue", "kind": "story" }, "162": { "id": "components-molecules-pwmediacarousel-story-vue:components-molecules-pwmediacarousel-story-vue-0", "kind": "variant" }, "163": { "id": "components-molecules-pwmediacarousel-story-vue:components-molecules-pwmediacarousel-story-vue-1", "kind": "variant" }, "164": { "id": "components-molecules-pwmediacarousel-story-vue:components-molecules-pwmediacarousel-story-vue-2", "kind": "variant" }, "165": { "id": "components-molecules-pwmediacarousel-story-vue:components-molecules-pwmediacarousel-story-vue-3", "kind": "variant" }, "166": { "id": "components-molecules-pwmediahero-story-vue", "kind": "story" }, "167": { "id": "components-molecules-pwmediahero-story-vue:components-molecules-pwmediahero-story-vue-0", "kind": "variant" }, "168": { "id": "components-molecules-pwmediahero-story-vue:components-molecules-pwmediahero-story-vue-1", "kind": "variant" }, "169": { "id": "components-molecules-pwmediahero-story-vue:components-molecules-pwmediahero-story-vue-2", "kind": "variant" }, "170": { "id": "components-molecules-pwnewscard-story-vue", "kind": "story" }, "171": { "id": "components-molecules-pwnewscard-story-vue:components-molecules-pwnewscard-story-vue-0", "kind": "variant" }, "172": { "id": "components-molecules-pwnewscard-story-vue:components-molecules-pwnewscard-story-vue-1", "kind": "variant" }, "173": { "id": "components-molecules-pwnewscard-story-vue:components-molecules-pwnewscard-story-vue-2", "kind": "variant" }, "174": { "id": "components-molecules-pwnewscard-story-vue:components-molecules-pwnewscard-story-vue-3", "kind": "variant" }, "175": { "id": "components-molecules-pwnewscard-story-vue:components-molecules-pwnewscard-story-vue-4", "kind": "variant" }, "176": { "id": "components-molecules-pwoptionselector-story-vue", "kind": "story" }, "177": { "id": "components-molecules-pwoptionselector-story-vue:components-molecules-pwoptionselector-story-vue-0", "kind": "variant" }, "178": { "id": "components-molecules-pwoptionselector-story-vue:components-molecules-pwoptionselector-story-vue-1", "kind": "variant" }, "179": { "id": "components-molecules-pwparticipationcard-story-vue", "kind": "story" }, "180": { "id": "components-molecules-pwparticipationcard-story-vue:components-molecules-pwparticipationcard-story-vue-0", "kind": "variant" }, "181": { "id": "components-molecules-pwparticipationcard-story-vue:components-molecules-pwparticipationcard-story-vue-1", "kind": "variant" }, "182": { "id": "components-molecules-pwsimpledatepicker-story-vue", "kind": "story" }, "183": { "id": "components-molecules-pwsimpledatepicker-story-vue:components-molecules-pwsimpledatepicker-story-vue-0", "kind": "variant" }, "184": { "id": "components-molecules-pwsimpledatepicker-story-vue:components-molecules-pwsimpledatepicker-story-vue-1", "kind": "variant" }, "185": { "id": "components-molecules-pwsimpledatepicker-story-vue:components-molecules-pwsimpledatepicker-story-vue-2", "kind": "variant" }, "186": { "id": "components-molecules-pwuserdisplay-story-vue", "kind": "story" }, "187": { "id": "components-molecules-pwuserdisplay-story-vue:components-molecules-pwuserdisplay-story-vue-0", "kind": "variant" }, "188": { "id": "components-organisms-pwbattledetaildialog-story-vue", "kind": "story" }, "189": { "id": "components-organisms-pwbattledetaildialog-story-vue:components-organisms-pwbattledetaildialog-story-vue-0", "kind": "variant" }, "190": { "id": "components-organisms-pwbattleform-story-vue", "kind": "story" }, "191": { "id": "components-organisms-pwbattleform-story-vue:components-organisms-pwbattleform-story-vue-0", "kind": "variant" }, "192": { "id": "components-organisms-pwbattleform-story-vue:components-organisms-pwbattleform-story-vue-1", "kind": "variant" }, "193": { "id": "components-organisms-pwbattleherosection-story-vue", "kind": "story" }, "194": { "id": "components-organisms-pwbattleherosection-story-vue:components-organisms-pwbattleherosection-story-vue-0", "kind": "variant" }, "195": { "id": "components-organisms-pwcommentsection-story-vue", "kind": "story" }, "196": { "id": "components-organisms-pwcommentsection-story-vue:components-organisms-pwcommentsection-story-vue-0", "kind": "variant" }, "197": { "id": "components-organisms-pwheader-story-vue", "kind": "story" }, "198": { "id": "components-organisms-pwheader-story-vue:_default", "kind": "variant" }, "199": { "id": "components-organisms-pwoverviewsection-story-vue", "kind": "story" }, "200": { "id": "components-organisms-pwoverviewsection-story-vue:components-organisms-pwoverviewsection-story-vue-0", "kind": "variant" }, "201": { "id": "components-organisms-pwoverviewsection-story-vue:components-organisms-pwoverviewsection-story-vue-1", "kind": "variant" }, "202": { "id": "components-organisms-pwsubmissiondetaildialog-story-vue", "kind": "story" }, "203": { "id": "components-organisms-pwsubmissiondetaildialog-story-vue:components-organisms-pwsubmissiondetaildialog-story-vue-0", "kind": "variant" } } };
const searchData = markRaw(searchData$1);
const _hoisted_1 = /* @__PURE__ */ createTextVNode(" No results ");
const _hoisted_2 = {
  key: 1,
  class: "htw-max-h-[400px] htw-overflow-y-auto htw-rounded-b-lg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SearchPane",
  props: {
    shown: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    close: () => true
  },
  setup(__props, { emit }) {
    const props = __props;
    const DocSearchData = () => __vitePreload(() => import("./search-docs-data.bc578679.js"), true ? ["assets/search-docs-data.bc578679.js","assets/vendor.e1f182eb.js"] : void 0);
    function close() {
      emit("close");
    }
    const input = ref();
    const { focused } = useFocus(input, {
      initialValue: true
    });
    watch(() => props.shown, (value) => {
      if (value) {
        requestAnimationFrame(() => {
          focused.value = true;
          input.value.select();
        });
      }
    });
    const searchInputText = ref("");
    const rateLimitedSearch = refDebounced(searchInputText, 50);
    const storyStore = useStoryStore();
    let titleSearchIndex;
    let titleIdMap;
    function createIndex() {
      return new flexsearch_bundle.exports.Document({
        preset: "match",
        document: {
          id: "id",
          index: [
            "text"
          ]
        },
        worker: true,
        charset,
        language,
        tokenize: "forward"
      });
    }
    async function loadSearchIndex(data) {
      titleSearchIndex = createIndex();
      for (const key of Object.keys(data.index)) {
        await titleSearchIndex.import(key, data.index[key]);
      }
      titleIdMap = data.idMap;
    }
    loadSearchIndex(searchData);
    let docSearchIndex;
    let docIdMap;
    async function loadDocSearchIndex() {
      async function load(data) {
        docSearchIndex = createIndex();
        for (const key of Object.keys(data.index)) {
          await docSearchIndex.import(key, data.index[key]);
        }
        docIdMap = data.idMap;
        if (rateLimitedSearch.value) {
          searchOnDocField(rateLimitedSearch.value);
        }
      }
      const searchDataModule = await DocSearchData();
      load(searchDataModule.searchData);
      searchDataModule.onUpdate((searchData2) => {
        load(searchData2);
      });
    }
    loadDocSearchIndex();
    const titleResults = ref([]);
    watch(rateLimitedSearch, async (value) => {
      const list = [];
      const raw = await titleSearchIndex.search(value);
      let rank = 0;
      for (const field of raw) {
        for (const id of field.result) {
          const idMapData = titleIdMap[id];
          if (!idMapData)
            continue;
          switch (idMapData.kind) {
            case "story": {
              list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank));
              rank++;
              break;
            }
            case "variant": {
              const [storyId] = idMapData.id.split(":");
              const story = storyStore.getStoryById(storyId);
              const variant = storyStore.getVariantById(idMapData.id);
              list.push(variantResultFactory(story, variant, rank));
              rank++;
              break;
            }
          }
        }
      }
      titleResults.value = list;
    });
    const docsResults = ref([]);
    async function searchOnDocField(query) {
      if (docSearchIndex) {
        const list = [];
        const raw = await docSearchIndex.search(query);
        let rank = 0;
        for (const field of raw) {
          for (const id of field.result) {
            const idMapData = docIdMap[id];
            if (!idMapData)
              continue;
            switch (idMapData.kind) {
              case "story": {
                list.push(storyResultFactory(storyStore.getStoryById(idMapData.id), rank, "docs"));
                rank++;
                break;
              }
            }
          }
        }
        docsResults.value = list;
      }
    }
    watch(rateLimitedSearch, searchOnDocField);
    function storyResultFactory(story, rank, type = "title") {
      return {
        kind: "story",
        rank,
        id: `story:${story.id}`,
        title: story.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: story.file.path.slice(0, -1),
        icon: story.icon,
        iconColor: story.iconColor,
        type
      };
    }
    function variantResultFactory(story, variant, rank, type = "title") {
      var _a;
      return {
        kind: "variant",
        rank,
        id: `variant:${story.id}:${variant.id}`,
        title: variant.title,
        route: {
          name: "story",
          params: {
            storyId: story.id
          },
          query: {
            variantId: variant.id,
            ...type === "docs" ? { tab: "docs" } : {}
          }
        },
        path: [...(_a = story.file.path) != null ? _a : [], story.title],
        icon: variant.icon,
        iconColor: variant.iconColor,
        type
      };
    }
    const results = computed(() => {
      const list = [...titleResults.value];
      const seen = {};
      for (const r of titleResults.value) {
        seen[r.id] = true;
      }
      for (const r of docsResults.value) {
        if (!seen[r.id]) {
          list.push(r);
        }
      }
      return list;
    });
    const selectedIndex = ref(0);
    watch(results, () => {
      selectedIndex.value = 0;
    });
    function selectNext() {
      selectedIndex.value++;
      if (selectedIndex.value > results.value.length - 1) {
        selectedIndex.value = 0;
      }
    }
    function selectPrevious() {
      selectedIndex.value--;
      if (selectedIndex.value < 0) {
        selectedIndex.value = results.value.length - 1;
      }
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("div", {
          class: "htw-flex htw-items-center htw-gap-4 htw-pl-6 htw-border htw-border-transparent focus-visible:htw-border-primary-500",
          onClick: _cache[4] || (_cache[4] = ($event) => focused.value = true)
        }, [
          createVNode(unref(Icon), {
            icon: "carbon:search",
            class: "flex-none htw-w-4 htw-h-4"
          }),
          withDirectives(createBaseVNode("input", {
            ref_key: "input",
            ref: input,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchInputText.value = $event),
            placeholder: "Search for stories, variants...",
            class: "htw-bg-transparent htw-w-full htw-flex-1 htw-pl-0 htw-pr-6 htw-py-4 htw-outline-none",
            onKeydown: [
              _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => selectNext(), ["prevent"]), ["down"])),
              _cache[2] || (_cache[2] = withKeys(withModifiers(($event) => selectPrevious(), ["prevent"]), ["up"])),
              _cache[3] || (_cache[3] = withKeys(($event) => close(), ["escape"]))
            ]
          }, null, 544), [
            [vModelText, searchInputText.value]
          ])
        ]),
        unref(rateLimitedSearch) && !unref(results).length ? (openBlock(), createBlock(BaseEmpty, {
          key: 0,
          class: "no-animation"
        }, {
          default: withCtx(() => [
            _hoisted_1
          ]),
          _: 1
        })) : unref(results).length ? (openBlock(), createElementBlock("div", _hoisted_2, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(unref(results), (result, index) => {
            return openBlock(), createBlock(SearchItem, {
              key: result.id,
              result,
              selected: index === selectedIndex.value,
              onClose: _cache[5] || (_cache[5] = ($event) => close())
            }, null, 8, ["result", "selected"]);
          }), 128))
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
