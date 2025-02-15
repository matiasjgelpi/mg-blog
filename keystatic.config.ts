import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },

  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      entryLayout: "content",
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: {
              isRequired: true,
            },
          },
        }),
        image: fields.image({
          label: "Image",
          directory: "src/assets/images/posts",
          publicPath: "@assets/images/posts/",
          description: "The image of the post",
          validation: {
            isRequired: true,
          },
        }),
        date: fields.date({
          label: "Published Date",
          validation: {
            isRequired: true,
          },
        }),
        excerpt: fields.text({
          label: "Excerpt",
          multiline: true,
        }),
        content: fields.markdoc({
          label: "Content",
        }),
      },
    }),
  },

  singletons: {
    homepage: singleton({
      label: "Homepage Content",
      path: "src/content/homepage",
      schema: {
        title: fields.text({
          label: "Título Principal",
          validation: { isRequired: true },
        }),
        subtitle: fields.text({
          label: "Subtítulo",
        }),
        contentTitle: fields.text({
          label: "Título del Contenido",
        }),
        content: fields.text({
          label: "Contenido Principal",
          multiline: true
        }),
      },
    }),
  },
});
