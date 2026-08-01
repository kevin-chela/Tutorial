async function loadRepositories() {
  const list = document.getElementById('repo-list');

  if (!list) {
    return;
  }

  try {
    const response = await fetch('events.json');

    if (!response.ok) {
      throw new Error('Unable to load repository data.');
    }

    const repositories = await response.json();
    list.innerHTML = repositories
      .map(
        (repo) => `
          <li class="repo-card">
            <h2>${repo.name}</h2>
            <p>${repo.description}</p>
            <div class="repo-meta">
              <span>${repo.language}</span>
              <span>★ ${repo.stargazers_count}</span>
              <span>Updated ${repo.updated_at}</span>
            </div>
            <p><a class="repo-link" href="${repo.url}" target="_blank" rel="noreferrer">View repository</a></p>
          </li>
        `
      )
      .join('');
  } catch (error) {
    list.innerHTML = `<li class="repo-card">${error.message}</li>`;
  }
}

document.addEventListener('DOMContentLoaded', loadRepositories);
