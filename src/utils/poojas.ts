import poojasData from "@/data/poojas.json";

export interface Pooja {
  id: string;
  name: string;
  description: string;
  image?: string;
  price?: string;
  duration?: string;
  pandits?: number | string;
  category: string;
  keywords?: string[];
  [key: string]: any;
}

/** Search poojas by name, description, keywords, and category */
export function searchPoojas(poojas: Pooja[], query: string): Pooja[] {
  if (!query.trim()) return poojas;
  const q = query.toLowerCase();
  return poojas.filter((p) => {
    const nameMatch = p.name.toLowerCase().includes(q);
    const descMatch = p.description?.toLowerCase().includes(q);
    const catMatch = formatCategoryLabel(p.category || "").toLowerCase().includes(q);
    const keywordMatch = Array.isArray(p.keywords)
      ? p.keywords.some((k) => String(k).toLowerCase().includes(q))
      : false;
    return nameMatch || descMatch || catMatch || keywordMatch;
  });
}

export function getAllPoojas(): Pooja[] {
  return (poojasData as any).poojas as Pooja[];
}

export function getUniqueCategories(poojas: Pooja[]): string[] {
  const set = new Set<string>();
  for (const p of poojas) {
    if (p.category) set.add(String(p.category));
  }
  return Array.from(set);
}

export function groupPoojasByCategory(
  poojas: Pooja[]
): Record<string, Pooja[]> {
  return poojas.reduce<Record<string, Pooja[]>>((acc, p) => {
    const key = String(p.category || "uncategorized");
    if (!acc[key]) acc[key] = [];
    acc[key].push(p);
    return acc;
  }, {});
}

export function formatCategoryLabel(categoryId: string): string {
  // Turn kebab/underscore into spaced Title Case: "griha_pravesh" -> "Griha Pravesh"
  const spaced = categoryId.replace(/[-_]+/g, " ");
  return spaced.replace(/\b\w/g, (c) => c.toUpperCase());
}
