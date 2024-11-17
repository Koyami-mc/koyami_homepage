import { n as createComponent, o as renderTemplate, p as maybeRenderHead, q as unescapeHTML } from './astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"キャンバスに溶けて","about":"「絵を描くこと」をテーマにした2nd EP","count":"2nd EP","image":"../images/canvas.jpg","date":"2024-04-28","price":"1,000円","description":"――「私のすべてを込めて、この絵は完成する。」","description2":"「絵を描くこと」をテーマに、室内楽・ポストクラシカルを織り込んだ1枚。","boothLink":"https://koyami416.booth.pm/items/5662249","bandcampLink":"https://koyami.bandcamp.com/album/melt-into-canvas","youtubeEmbed":"https://www.youtube.com/embed/lvF4q_NyjIA?si=JfOv9S7xxpL_yCGT"};
				const file = "D:/koyami_homepage/src/content/self-releases/canvas.md";
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
