import {
    DocumentHeadTags,
    documentGetInitialProps,
} from '@mui/material-nextjs/v13-pagesRouter';
// or `v1X-pagesRouter` if you are using Next.js v1X

export default function MyDocument(props) {
    return (
        <Html lang="en">
            <Head>
                +        <DocumentHeadTags {...props} />
                ...
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx) => {
    const finalProps = await documentGetInitialProps(ctx);
    return finalProps;
};