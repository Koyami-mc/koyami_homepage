import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import { $ as $$Header, b as $$Footer, a as $$Layout } from '../chunks/Footer_CSPFtOby.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="stylesheet" href="../layouts/styles.css">${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main><!-- 既存のHeader -->${renderComponent($$result2, "Header", $$Header, {})}<!-- ヒーローセクション: アイコンとタイトル --><section class="hero"><div class="icon-container"><img src="/images/icon.jpg" alt="Koyami Icon" class="site-icon"></div><h1 class="site-title">こやみ Official Website</h1></section><!-- Recent Worksセクション --><section class="latest-works"><h2 class="futomoji">Recent Works</h2><div class="album-list"><div class="album"><div class="new-label">New!</div><a href="albums/past"><img src="/images/past.jpg" alt="もしも過去に戻れたなら cover" class="album-cover"></a><div class="album-info"><h3 class="album-title">もしも過去に戻れたなら</h3><p class="album-description">こやみ 3rd ALBUM</p></div></div><div class="album"><div class="new-label">New!</div><a href="albums/knight"><img src="/images/knight.jpg" alt="救国の若き騎士の物語 cover" class="album-cover"></a><div class="album-info"><h3 class="album-title">救国の若き騎士の物語</h3><p class="album-description">Orchestral Compilation ALBUM Vol.1</p></div></div><div class="album"><a href="albums/canvas"><img src="/images/canvas.jpg" alt="キャンバスに溶けて cover" class="album-cover"></a><div class="album-info"><h3 class="album-title">キャンバスに溶けて</h3><p class="album-description">こやみ 2nd EP</p></div></div><div class="album"><a href="https://kashiwade.works/special/conquest/"><img src="/images/conquest.jpg" alt="CONQUEST cover" class="album-cover"></a><div class="album-info"><h3 class="album-title">CONQUEST</h3><p class="album-description">合作ALBUM with Kashiwade, liquid1224</p></div></div></div></section><section class="pickup-video"><h2 class="futomoji">Pickup Video</h2><iframe width="560" height="315" src="https://www.youtube.com/embed/UIaprefPPOg?si=r0d9rNZA3ahmfO7f" title="YouTube video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></section></main>${renderComponent($$result2, "Footer", $$Footer, {})}` })}`;
}, "D:/koyami_homepage/src/pages/index.astro", void 0);

const $$file = "D:/koyami_homepage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
