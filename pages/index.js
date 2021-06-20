import React from 'react'
import Link from 'next/link'
function HomePage() {
    return <React.Fragment>
        <h1>The Home Page</h1>
        <ul>
            <li>
                <Link href="/news/next-js-is-a-great-framework">Next Js is a great framework</Link>
            </li>
            <li>
                <Link href="/news/something-new">something new</Link>
            </li>
        </ul>
    </React.Fragment>
}

export default HomePage