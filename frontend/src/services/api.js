const API_BASE = '/api';

async function fetchJSON(path) {
  const res = await fetch(`${API_BASE}${path}`);
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(err.error || res.statusText);
  }
  return res.json();
}

export async function getJobs() {
  return fetchJSON('/jobs');
}

export async function getJob(id) {
  return fetchJSON(`/jobs/${id}`);
}

export async function getCourses() {
  return fetchJSON('/courses');
}

export async function getCourse(id) {
  return fetchJSON(`/courses/${id}`);
}

export async function getUsers() {
  return fetchJSON('/users');
}

export async function getUser(id) {
  return fetchJSON(`/users/${id}`);
}
