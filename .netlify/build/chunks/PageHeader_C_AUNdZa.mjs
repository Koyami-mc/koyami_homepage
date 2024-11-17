import { c as createComponent, a as createAstro, r as renderTemplate, m as maybeRenderHead } from './astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro();
const $$PageHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHeader;
  const { pageName } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="page-header"> <h1 class="page-title">${pageName}</h1> </div>`;
}, "D:/koyami_homepage/src/components/PageHeader.astro", void 0);

export { $$PageHeader as $ };
