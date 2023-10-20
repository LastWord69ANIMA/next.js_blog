/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv")

  collection.name = "blogs"
  collection.listRule = ""
  collection.deleteRule = ""
  collection.indexes = [
    "CREATE INDEX `idx_gxoIaHi` ON `blogs` (\n  `title`,\n  `comment`,\n  `created`,\n  `updated`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv")

  collection.name = "posts"
  collection.listRule = null
  collection.deleteRule = null
  collection.indexes = [
    "CREATE INDEX `idx_gxoIaHi` ON `posts` (\n  `title`,\n  `comment`,\n  `created`,\n  `updated`\n)"
  ]

  return dao.saveCollection(collection)
})
