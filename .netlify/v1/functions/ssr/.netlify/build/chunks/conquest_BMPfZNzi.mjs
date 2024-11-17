import { n as createComponent, o as renderTemplate, p as maybeRenderHead, q as unescapeHTML } from './astro/server_Cniayb5w.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>price: “¥1,500”\r\ntrackList:</p>\n<ul>\n<li>“Crucial”</li>\n<li>“Collision”</li>\n<li>“Crusade”</li>\n<li>“Catastrophe”</li>\n<li>“Crucible”</li>\n<li>“Counterattack”</li>\n<li>“Conquest”\r\ntext: “不意に現れし邪神の侵攻、破壊されゆくサイバー世界。敗れし防衛軍の絶望と、差し込む一筋の光明。決死の反撃が血路を開き、世界の命運を賭けた最終決戦が始まる。”\r\ntext2: “3名の作曲家により綴られる、世界を守り抜くための戦いの物語。”\r\nbooth: “<a href=\"https://kashiwade.booth.pm/items/5214254\">https://kashiwade.booth.pm/items/5214254</a>”\r\nbandcamp: “<a href=\"https://kashiwade.bandcamp.com/album/conquest\">https://kashiwade.bandcamp.com/album/conquest</a>”</li>\n</ul>\n<p>Album content or additional information here.</p>";

				const frontmatter = {"title":"CONQUEST","about":"Kashiwade、liquid1224との合作アルバム","count":"/ Kashiwade / liquid1224","image":"../images/conquest.jpg","date":"2023-10-29","price":"1,500円","description":"Invasion, crumbles. Defenders in despair, hope flickers—last stand.","description2":"SF世界を舞台に、3名の作曲家により綴られる戦いの物語。","boothLink":"https://kashiwade.booth.pm/items/5214254","bandcampLink":"https://kashiwade.bandcamp.com/album/conquest","youtubeEmbed":"https://www.youtube.com/embed/V_zXrVy1u54?si=Z-CRXmO_SCfgik3H"};
				const file = "D:/koyami_homepage/src/content/others/conquest.md";
				const url = undefined;
				function rawContent() {
					return "\r\nprice: \"¥1,500\"\r\ntrackList:\r\n  - \"Crucial\"\r\n  - \"Collision\"\r\n  - \"Crusade\"\r\n  - \"Catastrophe\"\r\n  - \"Crucible\"\r\n  - \"Counterattack\"\r\n  - \"Conquest\"\r\ntext: \"不意に現れし邪神の侵攻、破壊されゆくサイバー世界。敗れし防衛軍の絶望と、差し込む一筋の光明。決死の反撃が血路を開き、世界の命運を賭けた最終決戦が始まる。\"\r\ntext2: \"3名の作曲家により綴られる、世界を守り抜くための戦いの物語。\"\r\nbooth: \"https://kashiwade.booth.pm/items/5214254\"\r\nbandcamp: \"https://kashiwade.bandcamp.com/album/conquest\"\r\n\r\nAlbum content or additional information here.\r\n";
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
