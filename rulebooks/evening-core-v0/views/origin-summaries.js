const summaries = await Promise.all(
  input.values.map(async (page) => {
    let content = await dv.io.load(page.file.path);
    return {
      attribute: page.attribute,
      aptitudes: page.aptitudes,
      content,
      page,
    };
  })
);

for (let summary of summaries) {
  dv.view("origin-summary", summary);
}
