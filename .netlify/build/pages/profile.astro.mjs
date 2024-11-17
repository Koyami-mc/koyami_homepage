import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import { $ as $$Header, b as $$Footer, a as $$Layout } from '../chunks/Footer_CSPFtOby.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_C_AUNdZa.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Profile = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<div> ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageName": "PROFILE" })} <div class="profile-container"> <div class="profile-left"> <img src="/images/icon.jpg" alt="Profile Icon" class="profile-icon"> <p class="icon-credit">icon: △○□×様</p> </div> <div class="profile-right"> <h2 class="artist-name">こやみ / Koyami</h2> <p class="artist-role">作編曲・作詞</p> <div class="artist-intro"> <p>オーケストラなどを使った、「情景が見える音楽」を作曲する。</p> <p>ゲーム音楽から強い影響を受け、インスト音楽を中心に活動。</p> <p>これまでにソロでコンセプト・アルバム5枚をリリース。</p> <p>近年は音楽を通じた企画にも力を入れており、コミュニティ運営・</p> <p>コンピレーションアルバムの主催などを行っている。</p> </div> </div> </div> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/koyami_homepage/src/pages/profile.astro", void 0);

const $$file = "D:/koyami_homepage/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
