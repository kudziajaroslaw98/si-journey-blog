import Iframe from 'sanity-plugin-iframe-pane'
import type {DefaultDocumentNodeResolver} from 'sanity/desk'

const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
  S,
  { schemaType }
) => {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),

      S.view
        .component(Iframe)
        .options({
          url: `${
            process.env.NEXT_PUBLIC_VERCEL_URL ?? 'http://localhost:3000'
          }/api/draft`,
          defaultSize: 'desktop',
          reload: {
            buttton: true,
          },
          attributes: {},
        })
        .title('Preview'),
    ])
  }
  return S.document().views([S.view.form()])
}

export default getDefaultDocumentNode
