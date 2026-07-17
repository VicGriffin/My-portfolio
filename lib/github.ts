export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  updated_at: string
  topics: string[]
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    // Fetch user's repositories sorted by recently updated
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&order=desc&per_page=12&type=public`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`)
    }

    const repos = await response.json()

    return repos.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      homepage: repo.homepage,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      updated_at: repo.updated_at,
      topics: repo.topics || [],
    }))
  } catch (error) {
    console.error('Error fetching GitHub repos:', error)
    return []
  }
}

export function getRelativeTime(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  if (seconds < 60) return 'just now'
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m ago`
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ago`
  if (seconds < 2592000) return `${Math.floor(seconds / 86400)}d ago`
  if (seconds < 31536000) return `${Math.floor(seconds / 2592000)}mo ago`
  return `${Math.floor(seconds / 31536000)}y ago`
}
