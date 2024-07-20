const YAMLFrontMatter = /---(.|\n)*?---[.|\n]*/;
const embedContent = await Promise.all(
  input.items.values.map(async (page) => {
    let content = await dv.io.load(page.file.path);
    return {
      name: page.file.name,
      page,
      content: content.replace(YAMLFrontMatter, ""),
    };
  })
);

function embed({ content, ...item }) {
  if (!content) {
    return null;
  }

  return `
  <div>
    <strong>${item.name}.</strong>
    <p>${content}</p>
  </div>
  `;
}

for (let item of embedContent) {
  dv.header(input.level || 2, item.name);
  dv.el("div", item.content);
}
