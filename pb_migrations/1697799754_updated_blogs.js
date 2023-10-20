/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv")

  collection.name = "notes"
  collection.indexes = [
    "CREATE INDEX `idx_gxoIaHi` ON `notes` (\n  `title`,\n  `content`,\n  `created`,\n  `updated`\n)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv")

  collection.name = "blogs"
  collection.indexes = [
    "CREATE INDEX `idx_gxoIaHi` ON `blogs` (\n  `title`,\n  `content`,\n  `created`,\n  `updated`\n)"
  ]

  return dao.saveCollection(collection)
})
