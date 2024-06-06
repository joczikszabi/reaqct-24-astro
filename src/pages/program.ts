import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ redirect }) => {
  return redirect('https://reaqct24storage.blob.core.windows.net/assets/CONFERENCE%20program%202_updated.pdf?sp=r&st=2024-06-06T23:06:15Z&se=2025-07-18T07:06:15Z&spr=https&sv=2022-11-02&sr=b&sig=q7IIp1U8TX4E9Jyyi%2BAr3kFgWmi5jEIwj89C2YLMh28%3D', 307);
}