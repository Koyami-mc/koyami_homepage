import { n as createComponent, o as renderTemplate, p as maybeRenderHead, q as unescapeHTML } from './astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<hr>";

				const frontmatter = {"title":"雨露霜雪","about":"しっとりした空気感の1st Album","count":"1st Album","image":"../images/uro.jpg","date":"2022-10-30","price":"1,000円","description":"――冷え込んだこの世界で、あたたかなものを見つけた。","description2":"雨や雪など、しっとりした空気感をイメージした1枚。","boothLink":"https://koyami416.booth.pm/items/4243059","bandcampLink":"https://koyami.bandcamp.com/album/rain-dew-frost-and-snow","youtubeEmbed":"https://www.youtube.com/embed/E58Kk75UvqU?si=sM5g_d0vcUGgxvYc"};
				const file = "D:/koyami_homepage/src/content/self-releases/uro.md";
				const url = undefined;
				function rawContent() {
					return "---";
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
