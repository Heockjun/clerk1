import Link from 'next/link'
import React from 'react'

const username = 'bradtraversy'

async function fetchRepoContents(name) {
  const url = `https://api.github.com/repos/${username}/${name}/contents`
  const response = await fetch(url)
  const contents = await response.json()
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return contents
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContents(name)
  const dirs = contents.filter((content) => content.type === 'dir')

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
              className="underline"
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoDirs
