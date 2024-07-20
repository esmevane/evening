const YAMLFrontMatter = /---(.|\n)*?---[.|\n]*/;

const attribute = document.createElement("span");
const aptitudes = document.createElement("span");

attribute.innerHTML = `<strong>Origin Attribute</strong>: ${input.attribute}`;
aptitudes.innerHTML = `<strong>Origin Aptitudes</strong>: ${
  input.aptitudes || "None"
}`;

window.Content = input.content;

dv.header(4, input.page.file.name);
dv.span(input.content.replace(YAMLFrontMatter, ""));
dv.list([
  dv.el("div", "", { cls: "origin-attribute" }),
  dv.el("div", "", { cls: "origin-aptitudes" }),
]);

dv.container
  .querySelectorAll(".origin-attribute")
  .forEach((el) => el.appendChild(attribute));

dv.container
  .querySelectorAll(".origin-aptitudes")
  .forEach((el) => el.appendChild(aptitudes));
