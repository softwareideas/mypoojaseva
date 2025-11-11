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
  [key: string]: any;
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

export function groupPoojasByCategory(poojas: Pooja[]): Record<string, Pooja[]> {
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


