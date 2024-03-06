// src/lib/utils.ts
export function formatDate(date: Date): string {
    // Simple date formatting function
    return date.toISOString().substring(0, 10);
  }
  