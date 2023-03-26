import type { GetStaticPaths, GetStaticProps, NextPage } from "next"

import Meta from "@components/Meta"
import Layout from "@components/Layout"

// import { metaData } from "@utils/constants"
// import BlogDetails from "@components/Pages/BlogDetails"
// import { BlogsType } from "@lib/api/blogs/interface"

// import api from "@services/api"
// import { TextGroupType } from "@lib/api/textGroups/interface"
// import { MediaGroupType } from "@lib/api/mediaGroups/interface"
// import { BASE_URLS } from "@services/routes"

interface BlogProps {
    // blogData: BlogsType
    // textGroup: TextGroupType
    // mediaGroup: MediaGroupType
    id?: string
}

const Blog: NextPage<BlogProps> = ({ id }) => {
    // const blogMetaData = blogData.metaData ?? metaData

    return (
        <main>
            {/* <Meta {...blogMetaData} /> */}
            <Layout>{id}</Layout>
        </main>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    // const blogData: BlogsType[] = [],
    //     textGroup: TextGroupType[] = [],
    //     mediaGroup: MediaGroupType[] = []

    // await Promise.all([
    //     api.GET<BlogsType[]>(BASE_URLS.BLOG + "?page=" + params?.id),
    //     api.GET<TextGroupType[]>(BASE_URLS.TEXT_GROUPS + "?page=" + params?.id),
    //     api.GET<MediaGroupType[]>(
    //         BASE_URLS.MEDIA_GROUPS + "?page=" + params?.id
    //     ),
    // ])
    //     .then(([blogs, textBlocks, mediaBlocks]) => {
    //         blogData.push(...blogs)
    //         textGroup.push(...textBlocks)
    //         mediaGroup.push(...mediaBlocks)
    //     })
    //     .catch(err => console.error(err))
    console.log(params?.id)

    return {
        props: {
            // blogData: blogData[0],
            // textGroup: textGroup[0],
            // mediaGroup: mediaGroup[0],
            id: params?.id,
        },
    }
}

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    // const res = await fetch("https://.../posts")
    // const posts = [
    //     "meal-delivery-app",
    //     "three-way-transformer",
    //     "glasmet",
    //     "rain-bag",
    // ]

    // Get the paths we want to pre-render based on posts
    const paths: any =
        // posts.map(post =>
        [
            // {
            //     params: { id: "post" },
            // },
        ]

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

export default Blog