import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import { $ as $$Header, b as $$Footer, a as $$Layout } from '../chunks/Footer_CSPFtOby.mjs';
import { $ as $$PageHeader } from '../chunks/PageHeader_C_AUNdZa.mjs';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${renderComponent($$result2, "PageHeader", $$PageHeader, { "pageName": "CONTACT" })} ${maybeRenderHead()}<div class="contact-section"> <div class="contact-description"> <p>本ページをご覧いただき、ありがとうございます。</p> <p>楽曲の感想・楽曲制作のご依頼・ご相談などがございましたら、</p> <p>以下のメールアドレスまでお気軽にご連絡ください。</p> <hr> <div class="irai"> <h2 class="irai-title">制作依頼について</h2> <div class="irai-text"> <p>楽曲制作(作曲 / 編曲)等のご依頼を募集しております。</p> <p>お力になれそうな案件がありましたら、下記の内容を含む文書を添えて、メールにてお気軽にご相談ください。</p> <ul class="line"> <li>お名前</li> <li>SNSやHP等のリンク(任意)</li> <li>依頼内容：可能な限り詳細に記述ください。</li> <ul> <li>楽曲の使用用途(特に、商用利用の有無)</li> <li>イメージや参考楽曲など</li> <li>楽曲の長さ、ループの有無</li> <li>納品形式</li> <li>リテイクの有無</li> </ul> <li>権利：著作権の買取を行うかどうか。</li> <li>納期およびスケジュール</li> <li>予算：依頼内容により変動するため、まずは目安としてご提示ください。
</li><li>実績公開可否</li> </ul> </div> </div> <hr> </div> <a href="mailto:koyamimusic@gmail.com" class="contact-button"> <div class="contact-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="none" viewBox="0 0 24 24"><path fill="#080341" fill-rule="evenodd" d="M3.75 5.25 3 6v12l.75.75h16.5L21 18V6l-.75-.75H3.75Zm.75 2.446v9.554h15V7.695L12 14.514 4.5 7.696Zm13.81-.946H5.69L12 12.486l6.31-5.736Z" clip-rule="evenodd"></path></svg> </div> <div class="contact-text"> <p class="contact-title">Send an Email</p> <p class="contact-subtitle">お気軽にご連絡ください。</p> </div> </a> </div> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "D:/koyami_homepage/src/pages/contact.astro", void 0);

const $$file = "D:/koyami_homepage/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
