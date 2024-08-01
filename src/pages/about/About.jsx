import React from 'react'
import Breadcrumbs from '../../components/Breadcrumbs';

export default function About() {
    return (
        <div>
            <Breadcrumbs title={"About"} />

            <div className="bg-white dark:bg-gray-800 p-4">
                <h1 className="text-gray-900 dark:text-white">Hello, world!</h1>
            </div>
        </div>
    )
}
