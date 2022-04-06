export default {
  name: "note",
  title: "Note",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "todoItems",
      title: "TodoItems",
      type: "array",
      of: [{ type: "document", fields: [
        {
          name: 'title',
          title: "Title",
          type: "string"
        },
        {
          name: 'completed',
          title: 'Completed',
          type: 'boolean'
        }
      ] }],

    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
    {
      title: "Tags",
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
};
