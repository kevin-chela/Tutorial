function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

async function loadRepositories() {
  const list = document.getElementById('repo-list');
  const status = document.getElementById('repo-status');

  if (!list) {
    return;
  }

  const setStatus = (message) => {
    if (status) {
      status.textContent = message;
    }
  };

  setStatus('Loading repositories…');

  try {
    const response = await fetch('events.json');

    if (!response.ok) {
      throw new Error('Unable to load repository data.');
    }

    const repositories = await response.json();

    if (!Array.isArray(repositories)) {
      throw new Error('Repository data is invalid.');
    }

    if (repositories.length === 0) {
      list.innerHTML = '<li class="repo-card">No repositories found.</li>';
      setStatus('No repositories found.');
      return;
    }

    list.innerHTML = repositories
      .map((repo) => {
        const name = escapeHtml(repo.name || 'Unnamed repository');
        const description = escapeHtml(repo.description || 'No description provided.');
        const language = escapeHtml(repo.language || 'Unknown');
        const stars = escapeHtml(repo.stargazers_count ?? 0);
        const updated = escapeHtml(repo.updated_at || 'Unknown date');
        const url = escapeHtml(repo.url || '#');

        return `
          <li class="repo-card">
            <h2>${name}</h2>
            <p>${description}</p>
            <div class="repo-meta">
              <span>${language}</span>
              <span>★ ${stars}</span>
              <span>Updated ${updated}</span>
            </div>
            <p><a class="repo-link" href="${url}" target="_blank" rel="noopener noreferrer" aria-label="View ${name} (opens in a new tab)">View repository</a></p>
          </li>
        `;
      })
      .join('');

    setStatus(`Loaded ${repositories.length} repositories.`);
  } catch (error) {
    list.innerHTML = `<li class="repo-card">${escapeHtml(error.message)}</li>`;
    setStatus(error.message);
  }
}

document.addEventListener('DOMContentLoaded', loadRepositories);
