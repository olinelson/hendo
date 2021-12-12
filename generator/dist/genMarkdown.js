"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genMarkdown = void 0;
/* eslint-disable no-case-declarations */
var client_1 = require("@notionhq/client");
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var core = __importStar(require("@actions/core"));
var yargs_1 = __importDefault(require("yargs/yargs"));
var helpers_1 = require("yargs/helpers");
var BLOG_POST_DIR_PATH = path_1.default.join(__dirname, "../../astro/src/pages/posts");
// function updateLog(result: { success: boolean; filesCreated: string[] }) {
//   const now = new Date()
//   const text =
//     `\n\n#### ${now.toDateString()} ${now.toTimeString()}\n` +
//     `Successfully run: ${result.success}\n` +
//     `Files created:\n` +
//     `${result.filesCreated.map((f) => `  - ${f}`).join("\n")}`
//   fs.appendFileSync("./log.md", text)
// }
function updatePageSyncDate(notion, p) {
    var now = new Date();
    notion.pages.update({
        page_id: p.id,
        archived: false,
        properties: {
            Synced: {
                type: "date",
                date: {
                    start: now.toISOString().split("T")[0],
                },
            },
        },
    });
}
function parseRichText(rt) {
    var _a;
    var type = rt.type;
    if (type === "text") {
        var _b = rt, annotations = _b.annotations, text = _b.text;
        var content = text.content.trim();
        console.log({ content: content });
        var url = (_a = text.link) === null || _a === void 0 ? void 0 : _a.url;
        var quote = content.startsWith("^") ? content.substring(0, 1) : undefined;
        if (content.length < 1)
            return content;
        if (url) {
            return "[" + content + "](" + url + ")";
        }
        if (annotations.bold) {
            return "**" + content + "**";
        }
        if (annotations.italic) {
            return "*" + content + "*";
        }
        if (annotations.strikethrough) {
            return "~~" + content + "~~";
        }
        if (annotations.underline) {
            return "__" + content + "__";
        }
        if (annotations.strikethrough) {
            return "~~" + content + "~~";
        }
        if (annotations.code) {
            var tag = "'`'";
            return "" + tag + content + tag;
        }
        if (quote) {
            return "> ' " + content.substring(2);
        }
        return content;
    }
    return "";
}
function parseProperties(props, keys, cover) {
    var _a, _b, _c;
    var res = {};
    res.Cover = (cover === null || cover === void 0 ? void 0 : cover.type) === "external" ? cover.external.url : "";
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        switch (props[k].type) {
            case "title":
                var a = props[k];
                res[k] = ((_a = a.title[0]) === null || _a === void 0 ? void 0 : _a.plain_text) || "";
                break;
            case "rich_text":
                var b = props[k];
                res[k] = ((_b = b.rich_text[0]) === null || _b === void 0 ? void 0 : _b.plain_text) || "";
                break;
            case "date":
                var c = props[k];
                res[k] = ((_c = c.date) === null || _c === void 0 ? void 0 : _c.start) || "";
                break;
        }
    }
    return res;
}
function generateFrontMatter(customFrontMatter) {
    var parsed = "";
    for (var k in customFrontMatter) {
        parsed += k + ": " + customFrontMatter[k] + "\n";
    }
    return ("---\n  layout: \"../../layouts/BlogPost.astro\"\n  " + parsed + "\n  ---\n").replace(/ {2}|\r\n|\r/gm, "");
}
function createMarkdownFile(notion, page) {
    return __awaiter(this, void 0, void 0, function () {
        var parsedProps, text, page_blocks, _i, _a, block, _b, _c, textBlock, rich, image, caption, url, fileName;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    parsedProps = parseProperties(page.properties, ["Name", "Description", "Published", "Author", "HeroImageDescription"], page.cover);
                    text = generateFrontMatter(parsedProps);
                    return [4 /*yield*/, notion.blocks.children.list({
                            block_id: page.id,
                        })];
                case 1:
                    page_blocks = _d.sent();
                    for (_i = 0, _a = page_blocks.results; _i < _a.length; _i++) {
                        block = _a[_i];
                        switch (block.type) {
                            case "paragraph":
                                text += "\n";
                                for (_b = 0, _c = block.paragraph.text; _b < _c.length; _b++) {
                                    textBlock = _c[_b];
                                    rich = parseRichText(textBlock) + " ";
                                    text += rich;
                                }
                                // text += "\n";
                                break;
                            case "heading_1":
                                text += "\n#" + block.heading_1.text[0].plain_text + "\n";
                                break;
                            case "heading_2":
                                text += "\n##" + block.heading_2.text[0].plain_text + "\n";
                                break;
                            case "heading_3":
                                text += "###" + block.heading_3.text[0].plain_text + "\n";
                                break;
                            case "bulleted_list_item":
                                text += " - " + block.bulleted_list_item.text[0].plain_text + "\n";
                                break;
                            case "image":
                                image = block.image;
                                caption = ((image === null || image === void 0 ? void 0 : image.caption) && image.caption[0].plain_text) || "";
                                url = image.type === "external" ? image.external.url : image.file.url;
                                text += "![" + caption + "](" + url + " \"" + caption + "\")";
                                break;
                            default:
                                break;
                        }
                    }
                    fileName = (parsedProps.Name || "untitled") + ".md";
                    if (!fs_1.default.existsSync(BLOG_POST_DIR_PATH)) {
                        fs_1.default.mkdirSync(BLOG_POST_DIR_PATH, { recursive: true });
                    }
                    fs_1.default.writeFileSync(BLOG_POST_DIR_PATH + "/" + fileName, text);
                    return [2 /*return*/, fileName];
            }
        });
    });
}
function genMarkdown(notionApiKey, database_id) {
    return __awaiter(this, void 0, void 0, function () {
        var notion, hasMore, start_cursor, filesCreated, res, pages, _i, pages_1, p, createdFileName, result, error_1, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    notion = new client_1.Client({
                        auth: notionApiKey,
                    });
                    hasMore = false;
                    start_cursor = undefined;
                    filesCreated = [];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 11, , 12]);
                    _a.label = 2;
                case 2: return [4 /*yield*/, notion.databases.query({
                        database_id: database_id,
                        filter: {
                            property: "Status",
                            select: {
                                equals: "Publish",
                            },
                        },
                        start_cursor: start_cursor,
                    })];
                case 3:
                    res = _a.sent();
                    pages = res.results;
                    if (pages.length) {
                        fs_1.default.rmdirSync(BLOG_POST_DIR_PATH, { recursive: true });
                    }
                    _i = 0, pages_1 = pages;
                    _a.label = 4;
                case 4:
                    if (!(_i < pages_1.length)) return [3 /*break*/, 8];
                    p = pages_1[_i];
                    return [4 /*yield*/, createMarkdownFile(notion, p)];
                case 5:
                    createdFileName = _a.sent();
                    filesCreated.push(createdFileName);
                    return [4 /*yield*/, updatePageSyncDate(notion, p)];
                case 6:
                    _a.sent();
                    _a.label = 7;
                case 7:
                    _i++;
                    return [3 /*break*/, 4];
                case 8:
                    if (res.has_more && res.next_cursor) {
                        hasMore = true;
                        start_cursor = res.next_cursor;
                    }
                    _a.label = 9;
                case 9:
                    if (hasMore) return [3 /*break*/, 2];
                    _a.label = 10;
                case 10:
                    result = {
                        success: true,
                        filesCreated: filesCreated,
                    };
                    // updateLog(result);
                    core.debug(JSON.stringify(result, undefined, 2));
                    return [2 /*return*/, result];
                case 11:
                    error_1 = _a.sent();
                    result = {
                        success: false,
                        filesCreated: filesCreated,
                        error: error_1,
                    };
                    // updateLog(result);
                    core.error(JSON.stringify(result, undefined, 2));
                    return [2 /*return*/, result];
                case 12: return [2 /*return*/];
            }
        });
    });
}
exports.genMarkdown = genMarkdown;
var args = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).argv;
var _a = args, NOTION_API_KEY = _a.NOTION_API_KEY, NOTION_DATABASE_ID = _a.NOTION_DATABASE_ID;
genMarkdown(NOTION_API_KEY, NOTION_DATABASE_ID);
