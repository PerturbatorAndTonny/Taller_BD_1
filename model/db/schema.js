import { sqliteTable, int, text } from 'drizzle-orm/sqlite-core';

export const articleTable = sqliteTable("articleTable", {
  id: text({ mode: "text" }).primaryKey({
    onConflict: 'abort'
  }).notNull(),
  title: text({ mode: "text" }).notNull(),
  autor: text({ mode: "text" }).notNull(),
  publishYear: int({ mode: "number" }).notNull(),
  resource: text({ mode: "text" }),
  abstract: text({ mode: "text" }),
  keyword: text({ mode: "text" })
})