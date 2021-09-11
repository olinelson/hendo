const { Client } = require("@notionhq/client");
const fs = require("fs");
const util = require("util");
const path = require("path");

const notion = new Client({
  auth: "",
});

async function getBlogHome() {
  const res = await notion.databases.query({
    database_id: "ac9b293913dd464294b97dcd0efb4230",
  });

  return res.results;
}

function styledText(obj) {
  let content = obj.text.content.trim();
  const url = obj.text.link !== null ? obj.text.link.url : null;
  const annots = obj.annotations;
  // Manually handle quotes using own notation
  let quote = content.substring(0, 1) === "^";

  if (url) {
    content = `[${content}](${url})`;
  }

  if (annots.bold) {
    content = `**${content}**`;
  }

  if (annots.italic) {
    content = `*${content}*`;
  }

  if (annots.strikethrough) {
    content = `~~${content}~~`;
  }

  if (annots.code) {
    content = "`" + content + "`";
  }

  if (quote) {
    content = "> " + content.substring(2);
  }

  return content;
}

// getPage();

async function createMarkdownFile(post) {
  const { Name, Description, Published, Author, HeroImageDescription } =
    post.properties;

  let text = `---
  title: "${Name.title[0].plain_text}"
  description: "${Description.rich_text[0].plain_text}"
  publishDate: "${Published.date.start}"
  author: "${Author.rich_text[0].plain_text}"
  heroImage: "${post.cover.external.url}"
  alt: "${HeroImageDescription.rich_text[0].plain_text}"
  layout: "../../layouts/BlogPost.astro"
  ---
`.replace(/  |\r\n|\r/gm, "");

  const page_blocks = await notion.blocks.children.list({
    block_id: post.id,
  });

  // Generate text from block
  for (block of page_blocks.results) {
    // Blocks can be: paragraph, heading_1, heading_2, heading_3, or 'unsupported' (quote)

    switch (block.type) {
      case "paragraph":
        text += "\n";
        for (textblock of block.paragraph.text) {
          text += styledText(textblock) + " ";
        }
        text += "\n";
        break;
      case "heading_1":
        text += "\n";
        text += "# " + block.heading_1.text[0].plain_text + "\n";
        break;
      case "heading_2":
        text += "\n";
        text += "## " + block.heading_2.text[0].plain_text + "\n";
        break;
      case "heading_3":
        text += "\n";
        text += "### " + block.heading_3.text[0].plain_text + "\n";
        break;
      case "bulleted_list_item":
        text += " - " + block.bulleted_list_item.text[0].plain_text + "\n";
        break;
      case "image":
        text += `![${block.image.caption[0].plain_text}](${block.image.file.url} "${block.image.caption[0].plain_text}")`;
        break;
      default:
        break;
    }
  }

  // Write text to file
  let fileName = `${Name.title[0].plain_text}.md`;
  const dirPath = path.join(__dirname, "/src/pages/posts");

  fs.writeFile(`${dirPath}/${fileName}`, text, function err(e) {
    if (e) throw e;
  });

  return fileName;
}

async function createPages() {
  const pages = await getBlogHome();
  for (let p of pages) {
    await createMarkdownFile(p);
  }
}

createPages();
