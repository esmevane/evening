const items = input.items || [];
const fields = (input.fields || []).sort();

const summaryContent = await Promise.all(
  items.values.map(async (page) => {
    let content = await dv.io.load(page.file.path);
    let base = {
      summary: page.summary,
      name: page.file.name,
      page,
      content,
    };

    return fields.reduce((fields, field) => {
      return { ...fields, [field]: page[field] };
    }, base);
  })
);

function embed(item) {
  if (!item.summary) {
    return null;
  }

  return `
  <div>
    <strong>${item.name}.</strong> ${item.summary}
    <ul>
      ${fields
        .map(
          (field) =>
            `
            <li>
              <strong style="text-transform: capitalize;">${field}.</strong> ${
              item[field] || "None"
            }
            </li>
            `
        )
        .join("")}
    </ul>
  </div>
  `;
}

dv.list(summaryContent.map(embed).filter((item) => item));
