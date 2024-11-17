import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import { $ as $$Header, b as $$Footer, a as $$Layout } from '../chunks/Footer_CSPFtOby.mjs';
import { g as getCollection } from '../chunks/_astro_content_ByOhc1Jc.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_C_AUNdZa.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Works = createComponent(async ($$result, $$props, $$slots) => {
  const selfReleases = (await getCollection("self-releases")).sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.getTime() - dateA.getTime();
  });
  const others = (await getCollection("others")).sort((a, b) => {
    const dateA = new Date(a.data.date);
    const dateB = new Date(b.data.date);
    return dateB.getTime() - dateA.getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageName": "Works" })} ${maybeRenderHead()}<section> <h2>Self Releases</h2> <div class="albums"> ${selfReleases.map((album) => renderTemplate`<a${addAttribute(`/albums/${album.slug}/`, "href")}> <img${addAttribute(album.data.image, "src")}${addAttribute(album.data.title, "alt")}> <h3>${album.data.title}</h3> <p>${album.data.about}</p> </a>`)} </div> </section> <hr> <section> <h2>Others</h2> <div class="albums"> ${others.map((album) => renderTemplate`<a${addAttribute(`/albums/${album.slug}/`, "href")}> <img${addAttribute(album.data.image, "src")}${addAttribute(album.data.title, "alt")}> <h3>${album.data.title}</h3> <p>${album.data.about}</p> </a>`)} </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/koyami_homepage/src/pages/works.astro", void 0);

const $$file = "D:/koyami_homepage/src/pages/works.astro";
const $$url = "/works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Works,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
