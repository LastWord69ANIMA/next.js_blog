/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv")

  collection.indexes = [
    "CREATE INDEX `idx_gxoIaHi` ON `blogs` (\n  `title`,\n  `content`,\n  `created`,\n  `updated`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2g4kzqkc",
    "name": "content",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 400,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bnmc7x2kebhfauv")

  collection.indexes = [
    "CREATE INDEX `idx_gxoIaHi` ON `blogs` (\n  `title`,\n  `comment`,\n  `created`,\n  `updated`\n)"
  ]

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2g4kzqkc",
    "name": "comment",
    "type": "text",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 400,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
