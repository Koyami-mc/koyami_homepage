import { n as createComponent, o as renderTemplate, p as maybeRenderHead, q as unescapeHTML } from './astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"もしも過去に戻れたなら","about":"時をコンセプトとした3rd Album","count":"3rd Album","image":"../images/past.jpg","date":"2024-10-27","price":"1,500円","description":"――「もしやり直せるとしたら、夢は叶うかな」","description2":"時をコンセプトに、歌もの・ギターを取り入れたアルバム。","boothLink":"https://koyami416.booth.pm/items/6194877","bandcampLink":"https://koyami.bandcamp.com/album/if-i-could-turn-back-time","youtubeEmbed":"https://www.youtube.com/embed/UIaprefPPOg?si=O8Dse7rTVm2DLnY5"};
				const file = "D:/koyami_homepage/src/content/self-releases/past.md";
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
