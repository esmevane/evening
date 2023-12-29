const summaryContent = await Promise.all(
  input.values.map(async (page) => {
    let content = await dv.io.load(page.file.path);
    return {
      perks: page.perks,
      aptitudes: page.aptitudes,
      summary: page.summary,
      name: page.file.name,
      page,
      content,
    };
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
      <li>
        <strong>Starting perks.</strong> ${item.perks || "None"}
      </li>
      <li>
        <strong>Starting aptitudes.</strong> ${
          item.aptitudes ? `Pick two from ${item.aptitudes}` : "None"
        }
      </li>
    </ul>
  </div>
  `;
}

dv.list(summaryContent.map(embed).filter((item) => item));
