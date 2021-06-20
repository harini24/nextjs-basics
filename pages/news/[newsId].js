import { useRouter } from 'next/router'
function SomethingImportantPage() {

    const router = useRouter()
    const newsId = router.query.newsId

    // /send req to backend to fetch news item baed on id
    return <h1>The {newsId} Page</h1>
}

export default SomethingImportantPage