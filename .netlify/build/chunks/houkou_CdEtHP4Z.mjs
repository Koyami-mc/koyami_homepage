import { n as createComponent, o as renderTemplate, p as maybeRenderHead, q as unescapeHTML } from './astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"彷徨の果てに","about":"RPGがテーマの2nd Album","count":"2nd Album","image":"../images/houkou.jpg","date":"2023-4-30","price":"1,000円","description":"―――旅人は最後に辿り着いた場所で、何を見たのだろうか。","description2":"RPGをイメージした、オーケストラ等による壮大な旅の1枚。","boothLink":"https://koyami416.booth.pm/items/4693760","bandcampLink":"https://koyami.bandcamp.com/album/at-the-end-of-my-wanderings","youtubeEmbed":"https://www.youtube.com/embed/gedVxgvweUg?si=d1fGrcQUB5M5bCsh"};
				const file = "D:/koyami_homepage/src/content/self-releases/houkou.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
