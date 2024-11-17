import { n as createComponent, o as renderTemplate, p as maybeRenderHead, q as unescapeHTML } from './astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"救国の若き騎士の物語","about":"Orchestral Compilation Album Vol.1","count":"Orchestral Compilation Album Vol.1","image":"../images/knight.jpg","date":"2024-10-27","price":"2,000円","description":"――紡がれた壮大な物語を、10名による表情豊かなオーケストラ曲と共に。","description2":"RPG風の物語に乗せて、オーケストラ曲が楽しめるコンピレーションアルバム。","boothLink":"https://koyami416.booth.pm/items/6184659","bandcampLink":null,"youtubeEmbed":"https://www.youtube.com/embed/DzMSYdcTCEQ?si=cXGToaV-B_vx9o5E"};
				const file = "D:/koyami_homepage/src/content/others/knight.md";
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
