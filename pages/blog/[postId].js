import { Box } from "@mui/material"

export async function getStaticProps(context) {
    // No-op since getStaticPaths needs getStaticProps to be called.
    return { props: {} }
}

export async function getStaticPaths() {
    const fileList = ['1', '2', '3']

    const files = fileList.map(file => (
        {
            params: { postId: file },
        }
    ))

    return {
        paths: files,
        fallback: false
    }
}

export default function Post(props) {
    return (
        <Box>
            <h1>Blog post page</h1>
            <h3>{props.files}</h3>
        </Box>
    )
}