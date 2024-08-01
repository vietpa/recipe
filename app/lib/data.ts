import { APP_CONSTANTS } from "../globals/common"

const fetchRecipe = async (id: string) => {
  const res = await fetch(`${APP_CONSTANTS.BASE_API_URL}/recipes/${id}`);
  if (!res.ok) throw Error('Failed to fetch data');
  return res.json();
}

const fetchCookingData = async (id: string) => {
  const res = await fetch(`${APP_CONSTANTS.BASE_API_URL}/recipes/cooking/${id}`);
  if (!res.ok) throw Error('Failed to fetch data');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
}

export { fetchRecipe, fetchCookingData };