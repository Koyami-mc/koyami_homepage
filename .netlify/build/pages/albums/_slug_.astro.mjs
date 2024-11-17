import { c as createComponent, a as createAstro, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import { g as getCollection } from '../../chunks/_astro_content_ByOhc1Jc.mjs';
/* empty css                                     */
import { $ as $$Header, a as $$Layout, b as $$Footer } from '../../chunks/Footer_CSPFtOby.mjs';
/* empty css                                     */
import { $ as $$PageHeader } from '../../chunks/PageHeader_C_AUNdZa.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const selfReleases = await getCollection("self-releases");
  const others = await getCollection("others");
  const allAlbums = [...selfReleases, ...others];
  return allAlbums.map((album) => ({
    params: { slug: album.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const selfReleases = await getCollection("self-releases");
  const others = await getCollection("others");
  const allAlbums = [...selfReleases, ...others];
  const album = allAlbums.find((entry) => entry.slug === slug);
  if (!album) {
    throw new Error(`Album not found for slug: ${slug}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "ja" }, { "default": ($$result2) => renderTemplate` <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>${album.data.title}</title> ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageName": "Works" })} ${maybeRenderHead()}<div class="container"> <section class="album-detail"> <!-- 左側に大きなジャケット画像 --> <div class="album-image"> <img${addAttribute(`/images/${album.data.image}`, "src")}${addAttribute(album.data.title, "alt")}> </div> <!-- 右側にタイトル・リリース日・説明文 --> <div class="album-info"> <h1>${album.data.title}</h1> <h3>こやみ ${album.data.count}</h3> <p><strong></strong> ${album.data.date}</p> <p class="price">${album.data.price} (会場価格)</p> <p class="description">${album.data.description}</p> <p class="description2">${album.data.description2}</p> </div> </section> <!-- 中央下に「Now on Sale」およびリンクボックス --> <div class="sale-section"> <h2>Now on Sale</h2> <div class="links"> ${album.data.boothLink && renderTemplate`<a${addAttribute(album.data.boothLink, "href")} class="link-box booth" target="_blank" rel="noopener noreferrer">Booth</a>`} ${album.data.bandcampLink && renderTemplate`<a${addAttribute(album.data.bandcampLink, "href")} class="link-box bandcamp" target="_blank" rel="noopener noreferrer">Bandcamp</a>`} </div> </div> <!-- YouTube埋め込み --> ${album.data.youtubeEmbed && renderTemplate`<div class="youtube-embed"> <iframe${addAttribute(album.data.youtubeEmbed, "src")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>`} </div> ` })} ${renderComponent($$result, "Footer", $$Footer, {})} `;
}, "D:/koyami_homepage/src/pages/albums/[slug].astro", void 0);

const $$file = "D:/koyami_homepage/src/pages/albums/[slug].astro";
const $$url = "/albums/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
