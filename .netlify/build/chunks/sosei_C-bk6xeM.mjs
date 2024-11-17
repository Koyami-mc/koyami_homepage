import { n as createComponent, o as renderTemplate, p as maybeRenderHead, q as unescapeHTML } from './astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"甦生","about":"生と死がテーマの1st EP","count":"1st EP","image":"../images/sosei.jpg","date":"2022-04-24","price":"500円","description":"――「この世界はまだ、甦る。」","description2":"生と死をテーマに、クラシカルなオーケストラで奏でた出発点の一枚。","boothLink":"https://koyami416.booth.pm/items/3813308","bandcampLink":"https://koyami.bandcamp.com/album/reviving","youtubeEmbed":"https://www.youtube.com/embed/0gtr8NhkG-o?si=R8kWLMa2ICGVldMq"};
				const file = "D:/koyami_homepage/src/content/self-releases/sosei.md";
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
